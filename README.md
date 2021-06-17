<h1 align="center">SmartBrain Master 'Dockererized' (Front-End Client + Back-End Server) </h1>
<br>


## Description
<p>
Fully 'Dockerised' version of both Client and Server SmartBrain repos, merged into a single self contained Docker container with a PostgreSQL and Redis Database.
<br><br>

original seperate dedicated repos here<br>
**master client:** https://github.com/rbhachu/smartbrain-frontend-jwt<br>
**master server:** https://github.com/rbhachu/smartbrain-backend-jwt<br>
</p>
<br>


## Installation Prequisites
<p>

### Docker Desktop
To run the container locally, you will need to have Docker Desktop installed on your computor.<br>
Download Link: https://www.docker.com/products/docker-desktop
<br><br>

### Clarafai API Key
You will also need a Clarafai API Key (free) which gives access to the face detection api component.<br>
Download Link:  https://www.clarifai.com/models/ai-face-detection
</p>
<br>


## Installation
<ul>

<li>
-Start Docker Desktop
</li>

<li>
-open terminal software (VS code etc)
</li>

<li>
-clone the repo to download it

````sh
git clone https://github.com/rbhachu/smartbrain-backend-docker.git
````
</li>

<li>
-cd into newly downloaded repo directory
</li>

<li>
-open the .env file in the root of site
</li>

<li>
-add your clarafai api key
example: 

````env
API_CLARIFAI=xxxxxxxxx
````
</li>

<li>
-Then save the .env file
</li>

<li>
-run the following command in your terminal (ensuring your in the root directory of the repo)

````sh
docker-compose up --build
````
</li>

</ul>

<p>
Now grab a cup of tea or coffee, as this will take a few mins

*add emoji*
<br><br>
Once complete you should see confirmation in your terminal output similar to below, check for and error messages
<br>

*show terminal code output*
<br><br>
Your Docker Desktop should also show the SmartBrain-Master-Docker Container and its Images (client, server, redis and postgresql), as below example;
<br>
</p>
<br>


## Testing
<p>
Next, check the following links in your web browser load with no issues;<br>

**Client Front-End:** http://localhost:3000<br>
**Server-Back-End:** http://localhost:3001<br>
*get screenshots from master repo*<br>
<br><br>
Then test the signin form with the following test login details<br>
email: a@a.com<br>
password: a<br>

*get screenshots from master repo*<br>
<br>
If succesful, continue on to a test an image;<br>
Get an image from the web or use the test image link below and paste it into the upload field and click detect<br>
test image: https://rbhachu-smartbrain-f-master.herokuapp.com/test-image.jpg<br>

*get screenshots from master repo*<br>
<br>
if succesful, you should be able to login and see the followign on the page<br>

*get screenshots from master repo*<br>
<br>
Finally, logout, then register as a new user and you should automatically be signed in

*get screenshots from master repo*<br>
<br>
if you have managed to get this far with no issues, thats great, if not, check docker desktop is running the container and all 4 images (client, server, postgresql and redis) without any issues, otherwise also check the browser for any console errrors that may appear.
<br>

*add link to top of master smartbrain client and server for, fully dockerized version here?*
</p>
<br>


## Issues
<p>
If you encounter any issues, check the console in your browser, and also check your values for Clarifai API Key, PostgreSQL and Redis connection strings in the .env file are correct too.
<br><br> 
If you continue to have issues, please drop me a message via LinkedIn and I will try to help you resolve the issue.
</p>
<br>


## Author
👤 **Rishi Singh Bhachu**<br>
Contact me via [LinkedIn](https://www.linkedin.com/in/rishisinghbhachu/)
<br><br>


## Show your support
<p>
If you liked this project it would be greatly appreciated to show your support by simply giving this repo a ⭐️ rating too, many thanks!</p>