# Deployment on cluster


```bash
# transfering neccessary files to cluster
./transfer_prod_files.sh
qwe123 # type password 8 times (todo - automate)
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
docker stack deploy -c docker-compose.yaml BE_188898 --with-registry-auth

# check with `docker ps` what ID of prestashop container is - <container_id>
docker cp init_db.sh <container_id>:init_db.sh
docker cp dump.sql <container_id>:dump.sql
docker exec -it <container_id> bash
cd /
./init_db.sh
```

```bash
# access shop page on https://localhost:18889/index.php
ssh -L 18889:student-swarm01.maas:18889  rsww@172.20.83.101
# view at database on https://localhost:9099 (username=root, password=student)
ssh -L 9099:student-swarm01.maas:9099  rsww@172.20.83.101
```