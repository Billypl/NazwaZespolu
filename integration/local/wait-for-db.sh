#!/bin/bash

DB_CONTAINER_NAME="some-mysql"
DB_PASSWORD="admin"
DB_USER="root"

# until mysql -h "$DB_CONTAINER_NAME" -u "$DB_USER" -p"$DB_PASSWORD" -e "SELECT 1;" ; do
#   echo "Waiting for MySQL to be available..."
#   sleep 3
# done

while true; do
  echo "Checking database availability..."
  # docker exec $DB_CONTAINER_NAME mariadb -u "$DB_USER" -p"$DB_PASSWORD" -e "SELECT 1;" 2>/dev/null
  output=$(docker exec some-mysql mariadb -u "root" -p"admin" -e "SELECT 1;" 2>/dev/null)

  # Check the exit status of the last command
  if [[ "$output" == *"1"* ]]; then
    echo "Database is up!"
    break
  else
    echo "Database is not available yet."
  fi

  # Wait for 3 seconds before retrying
  sleep 3
done