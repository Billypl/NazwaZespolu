#!/bin/bash

PRESTASHOP_PATH="../../prestashop/src"
DUMP_DIR="../../prestashop/dbdump"
DUMP_FILE="dump.sql"
DB_CONTAINER_NAME="some-mysql"
DB_NAME="prestashop"
DB_PASSWORD="admin" # DON'T store password like that - its fine for development

# base zip
# GOOGLE_DRIVE_ZIP_LINK="https://drive.google.com/file/d/177JtRtuWCF03i5keMyCckc_c48pcA0qh/view?usp=drive_link"
# filled zip
GOOGLE_DRIVE_ZIP_LINK="https://drive.google.com/file/d/1xbMJhzBEAs2ZCQuYXgYYeSD2mIj7mNEY/view?usp=drive_link"

DUMP_FILE_PATH="$DUMP_DIR/$DUMP_FILE"

if [ ! -f "$DUMP_FILE_PATH" ]; then
  echo "File not found!"
  exit 1
fi

echo "Restoring database..."
docker exec -i $DB_CONTAINER_NAME mariadb $DB_NAME --user=root -p$DB_PASSWORD < "$DUMP_FILE_PATH"
echo "Database restored"

echo "Restoring images..."
file_id=$(echo $GOOGLE_DRIVE_ZIP_LINK | awk -F'/d/|/view' '{print $2}')
wget -O p.zip "https://drive.usercontent.google.com/download?export=download&confirm=t&id=$file_id" && \
rm -rf "$PRESTASHOP_PATH/img/p/" && \
unzip p.zip -d "$PRESTASHOP_PATH/img/" && \
sudo chmod -R a+rw "$PRESTASHOP_PATH/img/p" && \
touch "$PRESTASHOP_PATH/img/p/.gitkeep" && \
rm p.zip && \
echo "Images restored"