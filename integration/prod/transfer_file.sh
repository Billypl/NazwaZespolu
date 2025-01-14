#!/bin/bash

CLUSTER_TEAM_FOLDER="/opt/storage/actina15-20/block-storage/students/projects/students-swarm-services/BE_188898"

# Check if user provided required arguments
if [ "$#" -ne 2 ]; then
    echo "Usage:"
    echo "$0 <src_filepath> <cluster_filepath>"
    exit 1
fi

FILEPATH_TO_COPY="$1"
FILENAME_ON_CLUSTER="$2"

# Kopiowanie pliku na serwer z użyciem bastiona
scp -o ProxyJump=rsww@172.20.83.101 "$FILEPATH_TO_COPY" hdoop@student-swarm01.maas:"$CLUSTER_TEAM_FOLDER/$FILENAME_ON_CLUSTER"
