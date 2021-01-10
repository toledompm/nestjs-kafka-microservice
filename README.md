# nestjs-kafka-microservice
Small microservice demo using kafka and nestjs

## Try it out
Install dependencies for both nest apps:
  - `cd consumer-microservice && npm install`
  - `cd api-message-producer && npm install`


You can start the demo by:
  - Bringing containers up: `docker-compose up -d`
  - Starting API app: `cd api-message-producer && npm run start:dev`
  - Starting the consumer microservice: `cd consumer-microservice && npm run start:dev`


Finaly just send a request! 
  - `Post @ localhost:3000/<some_name>`
  - The consumer app should log an object with the following format: `{ name: some_name }`
  
Debugging:
  - You can connect directly to the kafka container and execute producer/consumer consoles. Example in makefile
  - Kafdrop is included in the docker-compose file, you can access it by going to: `localhost:19000`
