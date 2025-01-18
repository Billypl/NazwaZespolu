#!/bin/bash

echo "Removing stack..."
docker stack rm BE_188898
sleep 10 # to deal with presta network not being removed in time
docker stack deploy -c docker-compose.prod.yaml BE_188898 --with-registry-auth

# wait for container to be up
CONTAINER_NAME="BE_188898_ps"
CONTAINER_ID=""
while [ -z "$CONTAINER_ID" ]; do
    CONTAINER_ID=$(docker ps -q -f name="$CONTAINER_NAME")
    sleep 2
done

docker cp init_db.sh "$(docker ps -q -f name="$CONTAINER_NAME")":/var/www/html/init_db.sh
docker cp dump.sql "$(docker ps -q -f name="$CONTAINER_NAME")":/var/www/html/dump.sql
./cluster_helper.sh -d "cd /var/www/html && ./init_db.sh"