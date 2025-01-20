#!/bin/bash

set -e

CLUSTER_TEAM_FOLDER="/opt/storage/actina15-20/block-storage/students/projects/students-swarm-services/BE_188898"
LOCAL_FILES=("../../prestashop/docker-compose.prod.yaml" "../../prestashop/dbdump/dump.sql" "init_db.sh" "cluster_helper.sh" "deployment_process.sh" "download_img.sh")  
CLUSTER_NAMES=("docker-compose.prod.yaml" "dump.sql" "init_db.sh" "cluster_helper.sh" "deployment_process.sh" "download_img.sh")
ARCHIVE_NAME="prod.tar.gz"

BASTION_USERNAME=rsww
BASTION_SERVER=172.20.83.101
SWARM_USERNAME=hdoop
SWARM_SERVER=student-swarm01.maas

# create tar command
if [ "${#LOCAL_FILES[@]}" -ne "${#CLUSTER_NAMES[@]}" ]; then
    echo "Error: OLD_NAMES and CLUSTER_NAMES arrays must have the same length."
    exit 1
fi

TRANSFORM_OPTIONS=()
for i in "${!LOCAL_FILES[@]}"; do
    local_file="${LOCAL_FILES[i]}"
    local_file=${local_file//..\//}
    TRANSFORM_OPTIONS+=("--transform=s|$local_file|${CLUSTER_NAMES[i]}|")
done

# pack and transfer files
tar "${TRANSFORM_OPTIONS[@]}" -czf "$ARCHIVE_NAME" "${LOCAL_FILES[@]}"
./transfer_file.sh "$ARCHIVE_NAME" "$ARCHIVE_NAME"
rm "$ARCHIVE_NAME"

# unpack and deploy
ssh -o ProxyJump="$BASTION_USERNAME"@"$BASTION_SERVER" "$SWARM_USERNAME"@"$SWARM_SERVER" << EOF
  cd $CLUSTER_TEAM_FOLDER
  tar -xzf $ARCHIVE_NAME
  rm $ARCHIVE_NAME
  ./deployment_process.sh
EOF