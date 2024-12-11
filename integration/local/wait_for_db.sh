#!/bin/bash

DB_CONTAINER_NAME="some-mysql"
DB_PASSWORD="admin"
DB_USER="root"

while true; do
  echo "Checking database availability..."
  output=$(docker exec $DB_CONTAINER_NAME mariadb -u "root" -p"admin" -e "SELECT 1;" 2>/dev/null)

  # Check the exit status of the last command
  if [[ "$output" == *"1"* ]]; then
    echo "Database is up!"
    break
  else
    echo "Database is not available yet."
  fi

  sleep 3
done