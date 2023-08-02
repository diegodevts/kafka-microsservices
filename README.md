# kafka-microsservices

#Steps:
 - In kafka-microsservices folder, type in terminal: docker-compose up -d. It will up the kafka server and zookeeper.
 - In consumer-service folder, type the same command to up the mongodb server.
 - Run "npx prisma generate" and "npx prisma db push" to set up the mongo db, into consumer-serviuce folder.
 - And then start the consumer-service with the command "npm start".
 - After it all, get into the producer-service folder, and start the server with "npm start" as well.

#Producer service API

  {POST} route /producer

  - This is an example of the payload:

    {
	    "name": "Diego",
      "email": "diego@email.com",
      "password": "12345"
    }

  - If everything goes well, it may return:
      {
	      "message": "Sended to the queue",
	      "code": 201
      }

#Consumer service API

  {GET} route /consumer

  - If everything goes well, this is an example of the returning JSON:

      {
        "id": <UUID_STRING>,
	      "name": "Diego",
        "email": "diego@email.com",
        "password": "12345"
      }
    
