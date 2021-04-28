
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
Frontend:

Backend:

## Future Tasks
Frontend:

Backend:

## Unimplemented Features
Frontend:

Backend:

## Bugs
Frontend:

Backend:

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

