# Setup for a MongoDB replica set with Docker-Compose, Prisma and Express server
## .env
Create a .env file in you projects directory and paste the content of the .env.example in your .env file and change define your port and your mongodb uri. 
### Disclaimer
If you are planning to change things in the docker-compose.yml or the Dockerfile be aware that the port you enter in the .env file has to match the port in the Dockerfile and the docker-compose.yml. The same goes for the name of the host in this case mongo1, which will depend on the name of the container, so if you are planning to change the names of the containers be aware that you will have to change the names at various other points as well (check the scripts in the scripts folder and the docker-compose.yml)
## Setup your development environment
```bash
npm install
```

## Run Docker
```bash
sh ./scripts/startDockerCompose.sh
```

This script will automatically build an image of you current repository based on the Dockerfile in your project root directory. This Dockerfile will run the 
```bash
npm run dev
```
command which means everytime you change something in the _src_ folder on your local it will automatically hot reload the _src_ folder in the docker container.
After building the the docker image the script will run the docker compose file and start three mongo container and one container based on your Dockerfile image. 