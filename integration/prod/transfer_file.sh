#!/bin/bash

BASTION_USERNAME=rsww
BASTION_SERVER=172.20.83.101
SWARM_USERNAME=hdoop
SWARM_SERVER=student-swarm01.maas
CLUSTER_TEAM_FOLDER="/opt/storage/actina15-20/block-storage/students/projects/students-swarm-services/BE_188898"

if [ "$#" -ne 2 ]; then
    echo "Usage:"
    echo "$0 <src_filepath> <cluster_filepath>"
    exit 1
fi

FILEPATH_TO_COPY="$1"
FILENAME_ON_CLUSTER="$2"

scp -o ProxyJump="$BASTION_USERNAME"@"$BASTION_SERVER" "$FILEPATH_TO_COPY" "$SWARM_USERNAME"@"$SWARM_SERVER":"$CLUSTER_TEAM_FOLDER/$FILENAME_ON_CLUSTER"
