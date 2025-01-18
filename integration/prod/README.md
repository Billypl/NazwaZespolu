# Deployment on cluster

### Table of content
- [Setup](#setup)
    - [Automated](#automated)
    - [Manual](#manual)
- [Accessing](#accessing)

## Setup

### Automated:
```bash
./deploy.sh
```

### Manual:
```bash
# transfering neccessary files to cluster
./transfer_file.sh ../../prestashop/docker-compose.prod.yaml docker-compose.yaml
./transfer_file.sh ../../prestashop/dbdump/dump.sql dump.sql 
./transfer_file.sh ./init_db.sh init_db.sh
qwe123 # type password 6 times
```

```bash
# getting to team folder
ssh rsww@172.20.83.101
qwe123
ssh hdoop@student-swarm01.maas
cd /opt/storage/actina15-20/block-storage/students/projects/students-swarm-services/BE_188898
```

```bash
# setting up stack
docker stack rm BE_188898
docker stack deploy -c docker-compose.prod.yaml BE_188898 --with-registry-auth

# check with `docker ps` what ID of prestashop container is - <container_id>
docker ps -q -f name="BE_188898_ps" # getting <container_id>
docker cp init_db.sh <container_id>:init_db.sh
docker cp dump.sql <container_id>:dump.sql
docker exec -it <container_id> bash
cd /
./init_db.sh
```

## Accessing

```bash
# access shop page on https://localhost:18889/index.php
ssh -L 18889:student-swarm01.maas:18889  rsww@172.20.83.101
# view at database on https://localhost:9099 (username=root, password=student)
ssh -L 9099:student-swarm01.maas:9099  rsww@172.20.83.101
```