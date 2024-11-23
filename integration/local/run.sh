#!/bin/bash

PRESTASHOP_PATH="../../prestashop"

# grant read/write permissions to freerly edit files
# check if they already have them for convinience
if ! [[ $(stat -c "%A" $PRESTASHOP_PATH/dbdata) =~ "-rw.rw.rw." ]]; then 
    sudo chmod -R a+rw $PRESTASHOP_PATH/dbdata
    echo "### Changed permissions for dbdata"
fi
if ! [[ $(stat -c "%A" $PRESTASHOP_PATH/src) =~ "-rw.rw.rw." ]]; then 
    sudo chmod -R a+rw $PRESTASHOP_PATH/src
    echo "### Changed permissions for src"
fi

# run docker compose
DETACHED=""
if [ "$1" == "-d" ]; then DETACHED="-d"; fi
docker-compose -f $PRESTASHOP_PATH/docker-compose.yaml up $DETACHED