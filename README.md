
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
Frontend:
- BrowserRouter from 'react-router-dom' does not clear messages set by messageReducer (i.e. alerts that appear on registration will not go away on the login page)
- Conditional rendering of dashboards for coaches goes to user dashboard then coach dashboard
- Submitting a review requires clicking twice (state is not updating correctly)

Backend:
- CSRF token generation works, but causes errors when trying to be passed in with requests to the API endpoints.
- Pagination and search sorting for the coach search functionality produces warnings when running this feature.
- Model linking between the Coach model and Account model is made using models.ForeignKey, which may pose problems in the future for potential many-to-one linking of accounts to coaches, although this has not been the case thus far in any of our testing when creating coach accounts.

## Setup and Installation 

The best way to get EvolvU running on your machine is to use Docker Compose. 

If you don't have `docker` installed, visit https://docs.docker.com/engine/install/.

If you don't have `docker-compose` installed, visit https://docs.docker.com/compose/install/.

Before running the containers, you will need to generate a `DJANGO_KEY` and place it into the `Dockerfile` in the server folder. Follow the below steps to do so:

1. Visit https://djecrety.ir/ to generate a key and copy it. 
2. Go to the `Dockerfile` in the server folder and paste the key where it says `"Enter DJANGO_KEY here"` (i.e. line 11)

After obtaining a key and placing it in the `Dockerfile` in the server directory, return to this directory and run the following command:

`docker-compose up --build`

After the containers have been built and are running, visit http://localhost:81 to see the application. 

