
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

## Current Status
### Frontend:
To see the pages that are mostly finished for the frontend, please visit `client/src/routes/index.js` to see the different routes and their respective components. 

Redux has been implmented, and to see the current minimal configuration of the store please visit `client/src/redux/store.js`. Note that functional components are recommended for future development, accessing the Redux store is much easier and requires much less code. 

### Backend:
The server-side backend is created using the Django REST framework to establish an API in which the frontend can send requests to.

Several API endpoints have been created for each feature that has been currently implemented. The frontend can utilize these endpoints to make specific types of requests as needed to either get, put, or delete data corresponding depending on the purpose of the feature. To view the specific endpoints of a feature, these can be found by navigating to `server\src\<feature-label>\api\urls.py`, where `<feature-label>` can be any of the following components implemented thus far: accounts, coaches, reviews, users

## Future Tasks
The future tasks should also be considered unimplemented features so far. Note that some buttons may appear on the frontend, but they may be static and non-functional. 
### Frontend:
- Logging in using any of the social media buttons is not working
- Finishing the coach application (i.e. validation, implementing a schedule page, and connecting to backend)
- Choosing an appropriate way to present a calendar on the application (either by using an NPM package or building from scratch)
- Refine pages for smoother transitions and views (mainly styling of the overall application)
- Adding functionality to different parts of the Coach Dashboard
- Implementing the User Dashboard
- User session persistence (many ways to do so)

### Backend:
- Currently, there is no working location feature to match users with coaches who are near them in terms of location. This needs to be added to both user and coach models
- Implementation for processing a coach's application and creating a corresponding coach account using this information
- Put a calendar system in place for coaches and users to book and manage appointments
- Implement/add a payment system in place for users to pay for lessons and for coaches to receive their payments
- Connect the API endpoint for a user to make a review and rating of a coach

### Overall: 
- Create production ready `Dockerfile`s and `docker-compose.yml` file using the build version of the client application and a production ready server for Django. 

## Bugs
### Frontend:
- BrowserRouter from 'react-router-dom' does not clear messages set by messageReducer (i.e. alerts that appear on registration will not go away on the login page)
- Conditional rendering of dashboards for coaches goes to user dashboard then coach dashboard
- Submitting a review requires clicking twice (state is not updating correctly)

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

python3 -m venv env

source env/bin/activate

pip3 install -r requirements.txt 

export DJANGO_KEY="<Enter-Your-Django-Key>" | Can retrieve django key from link above

export MAPQUEST_API_KEY="<Enter-MapQuest-API-Key>"

```

Now you must navigate to `src/evolvu/settings.py` and change the following lines 

```python
COMMENT THIS DATABASE OBJECT AND USE THE ONE BELOW INSTEAD

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': 'postgres_db',
        'NAME': 'evolvu_dev',
        'USER': 'admin',
        'PASSWORD': 'rpDEvGQxZtC5@',
        'PORT': 5432
    }
}

# If you are running the backend without Docker, use the following for a database:

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }


SO IT SHOULD LOOK LIKE 

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql_psycopg2',
#         'HOST': 'postgres_db',
#         'NAME': 'evolvu_dev',
#         'USER': 'admin',
#         'PASSWORD': 'rpDEvGQxZtC5@',
#         'PORT': 5432
#     }
# }

# If you are running the backend without Docker, use the following for a database:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

```

If you want print statements to appear in the Python console while running locally, uncomment the following lines 

```python
# LOGGING = {
#     'version': 1,
#     'disable_existing_loggers': False,
#     'filters': {
#         'require_debug_true': {
#             '()': 'django.utils.log.RequireDebugTrue',
#         },
#     },
#     'handlers': {
#         'console': {
#             'class': 'logging.StreamHandler',
#             'filters': ['require_debug_true'],
#         },
#     },
#     'loggers': {
#         'mylogger': {
#             'handlers': ['console'],
#             'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
#             'propagate': True,
#         },
#     },

---------

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'filters': ['require_debug_true'],
        },
    },
    'loggers': {
        'mylogger': {
            'handlers': ['console'],
            'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
            'propagate': True,
        },
    }
```


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


