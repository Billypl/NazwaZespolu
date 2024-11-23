#!/bin/bash

# grant read/write permissions to freerly edit files
# check if they already have them for convinience
if ! [[ $(stat -c "%A" ./prestashop/dbdata) =~ "-rw.rw.rw." ]]; then 
    sudo chmod -R a+rw ./prestashop/dbdata
    echo "### Changed permissions for dbdata"
fi
if ! [[ $(stat -c "%A" ./prestashop/src) =~ "-rw.rw.rw." ]]; then 
    sudo chmod -R a+rw ./prestashop/src
    echo "### Changed permissions for src"
fi

# run docker compose
DETACHED=""
if [ "$1" == "-d" ]; then DETACHED="-d"; fi
docker-compose -f ./prestashop/docker-compose.yaml up $DETACHED