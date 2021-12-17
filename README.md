
# EvolvU

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Current Status](#current-status)
- [Future Tasks](#future-tasks)
- [Unimplemented Features](#unimplemented-features)
- [Bugs](#bugs)
- [Setup and Installation](#setup-and-installation)


## Problem Statement

People lack accessibility to health and wellness coaches. Currently, finding coaches requires manual searching on the internet, obtaining additional information, and contacting them for booking and availability.

As for the coaches, they have difficulty growing clientele, handling the logistics of multiple clients, and other bureaucracies of being a coach. This entire process of connecting coaches to clients is convoluted and needs to be simplified.

## Solution

Create a reliable platform for clients to find coaches more easily and schedule coaching sessions without having to manually search or contact coaches for additional information. This platform also allows coaches to easily track their clients and grow their clientele. Easing the process on both the clients and coaches ends. 

## Technical Architecture

Application stack is built using React.js for frontend, Django REST Framework for backend, and also NGINX to proxy our requests between frontend and backend. We also use Redux to manage global state in our React app and then PostgreSQL for our database. Our app also containerizes the frontend and backend using Docker. Commands for installation are below. 

## Current Status
### Frontend:
To see the pages that are mostly finished for the frontend, please visit `client/src/routes/index.js` to see the different routes and their respective components. 

All the main coach and client flows have been created, including Coach Registration, Client Signup/Registration, Client Dashboard and Coach Dasboard. But most of these screens still needed styled in accordance to the wireframes. 

### Backend:
The server-side backend is created using the Django REST framework to establish an API in which the frontend can send requests to.

Several API endpoints have been created for each feature that has been currently implemented. The frontend can utilize these endpoints to make specific types of requests as needed to either get, put, or delete data corresponding depending on the purpose of the feature. To view the specific endpoints of a feature, these can be found by navigating to `server\src\<feature-label>\api\urls.py`, where `<feature-label>` can be any of the following components implemented thus far: accounts, coaches, reviews, users, calendars, appointments. 

## Future Tasks
The future tasks should also be considered unimplemented features so far. Note that some buttons may appear on the frontend, but they may be static and non-functional. 
### Frontend:
- Logging in using any of the social media buttons is not working
- Refine pages for smoother transitions and views (mainly styling of the overall application)
- Allowing coaches to create different packages that the client can signup for
- User session persistence (many ways to do so)

### Backend:
- 
- Implement/add a payment system in place for users to pay for lessons and for coaches to receive their payments
- Connect the API endpoint for a user to make a review and rating of a coach
- Set up continous deployment on EC2 instance, so that a commit to origin doesn't require manually pulling changes in production server
- Create production database using AWS RDS, as EC2 instance right now uses local server and will not persist changes on restart

## Bugs
### Frontend:
- BrowserRouter from 'react-router-dom' does not clear messages set by messageReducer (i.e. alerts that appear on registration will not go away on the login page)
- Conditional rendering of dashboards for coaches goes to user dashboard then coach dashboard
- Submitting a review requires clicking twice (state is not updating correctly)
- Refresh on the coach profile throws an undefined error because the profile relies on values sent by the react router that navigated to that page

### Backend:
- CSRF token generation works, but causes errors when trying to be passed in with requests to the API endpoints.
- Pagination and search sorting for the coach search functionality produces warnings when running this feature.
- Model linking between the Coach model and Account model is made using models.ForeignKey, which may pose problems in the future for potential many-to-one linking of accounts to coaches, although this has not been the case thus far in any of our testing when creating coach accounts.

## Known Vulnerabilities
- Cross Site Request Forgery:
    - We had a lot of trouble figuring out how to send the CSRF Tokens from the client to the server. Even after appending the token to the headers of a request, the server would throw an error saying that the tokens were not appended. It was an issue with the Django Framework not recognizing our tokens. 
    - To view the progress we made against protecting CSRF Attacks, view the branch: `feature/csrf-protection`. 


## Setup and Installation 

The best way to get EvolvU running on your machine is to use Docker Compose. 

If you don't have `docker` installed, visit https://docs.docker.com/engine/install/.

If you don't have `docker-compose` installed, visit https://docs.docker.com/compose/install/.

Before running the containers, you will need to generate a `DJANGO_KEY` and place it into the `Dockerfile` in the server folder. Follow the below steps to do so:

1. Visit https://djecrety.ir/ to generate a key and copy it. 
2. Go to the `Dockerfile` in the server folder and paste the key where it says `"Enter DJANGO_KEY here"` (i.e. line 11)

After obtaining a key and placing it in the `Dockerfile` in the server directory, return to this directory and run the following command:

```bash 
docker-compose build
docker-compose up               <---- First attempt may cause an error, see below
docker-compose up               <---- Will properly run
```

NOTE: On the rare occasion, the Django server will start before the PostgreSQL database for some reason and you may get an error in the logs for the Django Server saying:

```bash
django_server_1  |  Is the server running on host "postgres_db" (192.168.128.2) and accepting
django_server_1  | 	TCP/IP connections on port 5432?
```

If this is the case, run `docker-compose up` again (as mentioned above) and everything will properly run.

After the containers have been built and are running (which could take a few minutes), visit http://localhost:81 to see the application. 

If you try to restart the containers after stopping them, the Django server will fail. This is because we ran multiple commands for start-up and so you will need to remove all of the associated Docker containers with this application (we did this by pruning our system, i.e. using `docker system prune -a`) and run the above command again. In other words, you will need to build the containers again from scratch without a cache.


### Run without Docker

If you want to run the client and server without docker, follow the steps bellow

Note you will need to install nvm to manage a different version of node [nvm](https://github.com/nvm-sh/nvm)

```bash
cd client 

nvm install 13.12.0  | Installs node version 13.12.0

nvm use 13.12.0      | Sets 13.12.0 as the current node version

npm install 

npm start
```

Now open another terminal instance to configure our server


Get your [Django Key](https://djecrety.ir/)

```bash
cd server 

if mac: 

    python3 -m venv env

    source env/bin/activate

    pip3 install -r requirements.txt 

elif windows: 

    py -m venv env

    .\env\Scripts\activate

    pip install -r requirements.txt

export DJANGO_KEY="<Enter-Your-Django-Key>" | Can retrieve django key from link above

export MAPQUEST_API_KEY="<Enter-MapQuest-API-Key>"

```

Now you must navigate to `src/evolvu/settings.py` and change the following lines 

```python
UNCOMMENT THE CURRENT DATABASE OBJECT AND USE THE SQLITE ONE  INSTEAD

SO IT SHOULD LOOK LIKE 

/* # DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'HOST': 'postgres_db',
#         'NAME': 'evolvu_dev',
#         'USER': 'admin',
#         'PASSWORD': 'rpDEvGQxZtC5@',
#         'PORT': 5432
#     }
# } */

# If you are running the backend without Docker, use the following for a database:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


Finally, to run the application, use the following command

```python
bash -c "rm -rf ./src/db.sqlite3 && python3 ./src/manage.py makemigrations && python3 ./src/manage.py migrate && python3 ./src/manage.py loaddata initial_data && python3 ./src/manage.py hashpasswords && python3 ./src/manage.py runserver 0.0.0.0:8000"
```

In order to use logging in a file, do the following 

```python
import logging 
logging.getLogger("myLogger")

# Now you can print with 

logger.info('Print to console')

```


## Deployment
### Frontend
Our frontend is deployed on GitHub Pages

In `src/index.js`, change the following: 

```javascript
axios.defaults.baseURL = '';
axios.defaults.headers.common['Credentials'] = 'same-origin';
axios.defaults.headers.post['Content-Type'] = 'application/json';

To 

axios.defaults.baseURL = 'https://se-evolvu.buspark.io/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

```

Then run,

```javascript
npm run predeploy
npm run deploy

```
### Backend

We are running an Ubuntu EC2 instance

In order to access the instance, go to your terminal and run the following command: 

```bash
ssh -i /path/to/publickey ubuntu@34.239.246.111
```

NOTE: If you get a permission denied error, contact BU Spark! or current administrators of the projec to add your public key to ~/.ssh/authorized_keys file in the instance

Click [here](https://kb.iu.edu/d/aews) to learn about generating a public/private key pair on your laptop

After entering the server, you must pull the latest changes and then you can restart the docker container with the following commands

```bash
sudo docker-compose down
sudo docker system prune -a 
sudo docker-compose -f docker-compose-prod.yml build
sudo docker-compose -f docker-compose-prod.yml up -d
```
These above commands will kill the current container and then rebuild and rerun them in the background. 

If you navigate to the IP address or the link [here](https://se-evolvu.buspark.io/), you will see the deployed backend running



### User Types and Example Credentials

If you would like to view the coach profile then use the following credentials:

Email: Shanna@melissa.tv

Password: badpassword

Otherwise, creating a coach profile is currently unavailable. We created a script for inserting coaches into the database on startup of the entire application using Docker since we don't have an endpoint for doing so. Please visit `server/src/accounts/fixtures/initial_data.json` to insert more coaches by creating similar JSON objects where the `is_coach` and `is_active`field is set to `True`. If you set `is_active` to `False`, then they will need to be approved on the on the admin dashboard before they appear on the search results. 

If you would like to view the admin profile then use the following credentials:

Email: tin@evolvu.comm

Password: badpassword

Creating an admin profile is similar to the above, with the exception that the `is_admin` field must be set to `True`. 

If you would like to view a client profile then register a new account on the registration page of the application. 


