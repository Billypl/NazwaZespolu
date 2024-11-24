#!/bin/bash

DUMP_DIR="../../prestashop/dbdump"
DUMP_FILE="dump.sql"
DB_CONTAINER_NAME="some-mysql"
DB_NAME="prestashop"
DB_PASSWORD="admin" # DON'T store password like that - its fine for development

# # NAMES WITH TIMESTAMPS CREATION
# #  dump_2230_171124.sql
# CURRENT_DATE=$(date +"%H%M_%d%m%y")
# DUMP_FILE="dump_${CURRENT_DATE}.sql"

docker exec $DB_CONTAINER_NAME mariadb-dump $DB_NAME --user=root -p$DB_PASSWORD -x > "$DUMP_DIR/$DUMP_FILE"
echo "Database dump saved to $DUMP_DIR/$DUMP_FILE"