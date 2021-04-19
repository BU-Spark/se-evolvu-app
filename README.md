
# EvolvU

## Table of Contents

- [Installation] (#installation)

## Installation 

The best way to get EvolvU running on your machine is to use Docker Compose. 

If you don't have `docker` installed, visit https://docs.docker.com/engine/install/.

If you don't have `docker-compose` installed, visit https://docs.docker.com/compose/install/.

Before running the containers, you will need to generate a DJANGO_KEY and place it into the Dockerfile in the server folder. Follow the below steps to do so:

1. Visit https://djecrety.ir/ to generate a key and copy it. 
2. Go to the `Dockerfile` in the server folder and paste the key where it says `"Enter DJANGO_KEY here"` (i.e. line 11)

After obtaining a key and placing it in the `Dockerfile` in the server directory, return to this directory and run the following command:

`docker-compose up --build`

After the containers have been built and are running, visit http://localhost:81 to see the application. 