<h1 align="center">SmartBrain Master 'Dockererized' (Front-End Client + Back-End Server) </h1>
<br>

## Description

<p>
Fully 'Dockerised' version of both Client and Server SmartBrain repos, merged into a single self contained Docker container including a PostgreSQL and Redis Database.
<br>

_Original separate dedicated repos_<br>
_**SmartBrain Master Client:** https://github.com/rbhachu/smartbrain-frontend-jwt_<br>
_**SmartBrain Master Server:** https://github.com/rbhachu/smartbrain-backend-jwt_<br>
</p>
<br>


## Installation Prerequisites
<p>

### Docker Desktop
To run the Docker container locally, you will need to have Docker Desktop installed on your computer.<br>
_Download Link: https://www.docker.com/products/docker-desktop_
<br><br>

### Clarafai API Key
You will also need a Clarafai API Key (free) which gives access to the face detection api component.<br>
_Download Link: https://www.clarifai.com/models/ai-face-detection_
</p>
<br>


## Installation
<ul>

<li>
Start Docker Desktop
</li>

<li>
Open your terminal software client (VS code etc)
</li>

<li>
Clone the SmartBrain Master Docker repo to download it;

```sh
git clone https://github.com/rbhachu/smartbrain-master-docker.git
```

</li>

<li>
'CD' into newly downloaded repo directory
</li>

<li>
Open the .env file in the root of site
</li>

<li>
Add your Clarifai API Key to the .env file;

```env
API_CLARIFAI=xxxxxxxxx
```

</li>

<li>
Save the .env file
</li>

<li>
Run the following command in your terminal client (ensuring your in the root directory of the repo)

```sh
docker-compose up --build
```
</li>
</ul>


<p>

*Now grab a cup of tea or coffee, as it will take a few mins to create the Docker container in Docker Desktop* ☕☕☕

<br>
Once complete you should see confirmation in your terminal output similar to below (check for any error messages)
<br>

_show terminal code output_


<br><br>
Your Docker Desktop should also show the SmartBrain-Master-Docker Container and its Images (client, server, redis and postgresql), as below example;
<br>

_show docker desktop image_

</p>
<br>


## Testing

<p>
Next, check the following links in your web browser load with no issues;<br>

**Client Front-End:** http://localhost:3000<br>
**Server Back-End:** http://localhost:3001<br>

_get screenshots from master repo_

<br><br>
Then test the signin form with the following test login details<br>
email: a@a.com<br>
password: a<br>

_get screenshots from master repo_<br>
<br>
If successful, continue on to a test an image;<br>
Get an image from the web or use the test image link below and paste it into the upload field and click detect<br>

_**test image:** https://rbhachu-smartbrain-f-master.herokuapp.com/test-image.jpg_<br>

_get screenshots from master repo_

<br>
If successful, you should be able to login and see the following on the page<br>

_get screenshots from master repo_

<br>
Finally, Sign-Out, then Register as a new user to test its working too.<br>

_get screenshots from master repo_

<br>
If you have no issues, you have successfully deployed and run a Docker Container running a fully functioning React App with a API, PostgreSQL and Redis Databases, so give yourself a pat on the back! 👏

</p>
<br>


## Issues

<p>
If you encounter any issues, check the following;

<ul>

<li>
Is Docker Desktop running the SmartBrain Docker Container, with all 4 images (Client, Server, PostgreSQL and Redis) without any issues?
</li>

<li>
Are there any errors being reported for the Client and Server pages in the console?
</li>

<li>
Have you added the correct key in the .env file for Clarafai API?
</li>

</ul>

<br><br> 
If you still continue to experience issues deploying and running the Docker container please drop me a message via LinkedIn and I will try to help.
</p>
<br>


## Author

👤 **Rishi Singh Bhachu**<br>
Contact me via [LinkedIn](https://www.linkedin.com/in/rishisinghbhachu/)
<br><br>

## Show your support

<p>
If you liked this project it would be greatly appreciated to show your support by simply giving this repo a ⭐️ rating too, many thanks!</p>