kafka/producer-console:
	docker-compose exec kafka kafka-console-producer --broker-list localhost:9092 --topic my-first-topic
