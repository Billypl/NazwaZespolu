#!/bin/bash

PRESTASHOP_PATH="/var/www/html"
GOOGLE_DRIVE_ZIP_LINK="https://drive.google.com/file/d/1xbMJhzBEAs2ZCQuYXgYYeSD2mIj7mNEY/view?usp=drive_link"

echo "Restoring images..."
file_id=$(echo $GOOGLE_DRIVE_ZIP_LINK | awk -F'/d/|/view' '{print $2}')
wget -O p.zip "https://drive.usercontent.google.com/download?export=download&confirm=t&id=$file_id" && \
rm -rf "$PRESTASHOP_PATH/img/p/" && \
unzip p.zip -d "$PRESTASHOP_PATH/img/" && \
rm p.zip && \
echo "Images restored"