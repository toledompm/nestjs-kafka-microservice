up:
	docker-compose up -d

kafka/producer-console:
	docker-compose exec kafka kafka-console-producer --broker-list localhost:9092 --topic my-first-topic

kafka/consumer-console:
	docker-compose exec kafka kafka-console-consumer --broker-list localhost:9092 --topic my-first-topic
