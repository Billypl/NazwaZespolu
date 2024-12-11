#!/bin/bash

DUMP_DIR="../../prestashop/dbdump"
DUMP_FILE="dump.sql"
DB_CONTAINER_NAME="some-mysql"
DB_NAME="prestashop"
DB_PASSWORD="admin" # DON'T store password like that - its fine for development

docker exec $DB_CONTAINER_NAME mariadb-dump $DB_NAME --user=root -p$DB_PASSWORD -x > "$DUMP_DIR/$DUMP_FILE"
echo "Database dump saved to $DUMP_DIR/$DUMP_FILE"