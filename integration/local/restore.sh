#!/bin/bash

DUMP_DIR="../../prestashop/dbdump"
DUMP_FILE="dump.sql"
DB_CONTAINER_NAME="db"
DB_NAME="prestashop"
DB_PASSWORD="admin" # DON'T store password like that - its fine for development

# # NAMES WITH TIMESTAMPS RESTORATION
# echo "Please enter the dump file name (e.g., dump_22-30_17-11-24.sql):"
# read DUMP_FILE

DUMP_FILE_PATH="$DUMP_DIR/$DUMP_FILE"

if [ ! -f "$DUMP_FILE_PATH" ]; then
  echo "File not found!"
  exit 1
fi

docker exec -i $DB_CONTAINER_NAME mariadb --user=root -p$DB_PASSWORD $DB_NAME < "$DUMP_FILE_PATH"
echo "Database restored"