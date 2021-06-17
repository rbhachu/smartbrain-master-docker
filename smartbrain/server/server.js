const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');

const dotenv = require('dotenv').config();
//console.log(dotenv)

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const auth = require('./controllers/authorization');


// db connection - local host / PostgreSQL
/*
const db = knex({ // for connecting to PostgreSQL
    client: 'pg', // type of db
    connection: { 
      host : '127.0.0.1', // localhost 
      database : 'smartbrain', // db to connect to
      user : 'postgres', // superuser
      password : 'test' // superuser pass
    }
  });
*/

// db connection - local host / PostgreSQL-Docker

const db = knex({ // for connecting to PostgreSQL
  client: 'pg', // type of db
  connection: process.env.POSTGRES_URI // db connection string coming from docker-compose.yml
});


// db connection - remote host / PostgreSQL-Heroku
/*
const db = knex({ // for connecting to PostgreSQL
  client: 'pg', // type of db
  connection: { 
    connectionString: process.env.DATABASE_URL, // dynamic database value for heroku    
    ssl: {
      rejectUnauthorized: false
    }
  }
});
*/


const app = express();

/*
const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
*/

app.use(morgan('combined'));
//app.use(cors(corsOptions))
app.use(cors()); // use 'app.use' as is middleware
//app.use(cors.json()); // use 'app.use' as is middleware
app.use(bodyParser.json()); //bodyParser depricated

app.get('/', (req, res)=> { res.send('SmartBrain-Backend-Master Running on port 3001') }) // for testing
app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})


// do i need to install npm dotenv?
app.listen(process.env.PORT, () => { // use dynamic port value or 3001  
  console.log(`app is running on port ${process.env.PORT}`); // server message on success
})