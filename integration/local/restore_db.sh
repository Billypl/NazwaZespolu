#!/bin/bash

DUMP_DIR="../../prestashop/dbdump"
DUMP_FILE="dump.sql"
DB_CONTAINER_NAME="some-mysql"
DB_NAME="prestashop"
DB_PASSWORD="admin" # DON'T store password like that - its fine for development

DUMP_FILE_PATH="$DUMP_DIR/$DUMP_FILE"

if [ ! -f "$DUMP_FILE_PATH" ]; then
  echo "File not found!"
  exit 1
fi

echo "Restoring..."
docker exec -i $DB_CONTAINER_NAME mariadb $DB_NAME --user=root -p$DB_PASSWORD < "$DUMP_FILE_PATH"
echo "Database restored"