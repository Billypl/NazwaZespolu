#!/bin/bash

DB_HOST="admin-mysql_db"
DB_USER="root"
DB_PASSWORD="student"
DB_NAME="BE_188898"
CONTAINER_NAME="BE_188898_ps"

set -e

function usage() {
    echo "Usage: $0 -d <docker_command>"
    echo "Usage: $0 -m <mysql_command>"
    exit 1
}

function check_args() {
    if [ -z "$1" ]; then
        usage
    fi 
    CONTAINER_ID="$(docker ps -q -f name="$CONTAINER_NAME")"
}

function call_docker_command() {
    local DOCKER_COMMAND="$1"
    docker exec -it "$CONTAINER_ID" bash -c "$DOCKER_COMMAND"
}

function call_mysql_command() {
    local MYSQL_COMMAND="$1"
    local DOCKER_COMMAND=$(cat <<EOF
mysql -h "$DB_HOST" -u"$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" -e "$MYSQL_COMMAND"
EOF
)
    call_docker_command "$DOCKER_COMMAND"
}


check_args "$1"

while getopts "d:m:" opt; do
    case $opt in
        d)
            call_docker_command "$OPTARG"
            ;;
        m)
            call_mysql_command "$OPTARG"
            ;;
        *)
            usage
            ;;
    esac
done

