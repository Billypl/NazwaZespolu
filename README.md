

# An online shop
Online shop made with PrestaShop for Electronic Buisness class.  
Oryginal page: https://www.pasart.pl/  

![](resources/passart.png)

# Table of contents
 - [Used software](#used-software)
 - [Setup](#setup)
 - [How to run locally (dev)?](#how-to-run-locally-dev)
    - [TL;DR](#tldr) 
    - [Detailed](#detailed)
    - [Database backup / restoration](#database-backup-and-restoration)
 - [How to deploy on cluster (prod)?](#deployment-on-cluster)
    - [TL;DR](#tldr-1)
    - [Detailed](#detailed-1)
    - [Accessing](#accessing)
 - [SSL certificate](#ssl-certificate) 
 - [Tests](#tests)
 - [Team members](#team)
 

# Used software
 - Linux / WSL
 - PrestaShop 1.7.8.11
 - MariaDB 11.5.2
 - Docker
 - Selenium
 - Google Drive

# Summary
This project was aimed for ease of run, so all proceses were automated with bash scripts. If you wish to learn more about encountered problems with different requirements, check out pull request messages and comments.


# How to run locally (dev)?
## TL;DR:
Just run [quick_start.sh](quick_start.sh) script or paste those commands:
```bash
cd integration/local
./run.sh -d
./restore_all.sh
# on windows
explorer.exe http://localhost:8080/
# on linux
xdg-open http://localhost:8080/
```
## Detailed

**!Notice -remember about database dumps/restores - read more in [backup/restore section](#database-backup-and-restoration)**  
Go to `./integration/local`

To run the shop:
```bash
./run.sh # foreground
./run.sh -d # background
```
Then [restore database](#database-backup-and-restoration) (!).  
After that you can access the shop on:
```bash
http://localhost:8080/ # front page
http://localhost:8080/admin-dev # admin panel
# login and password to admin panel
demo@prestashop.com
prestashop_demo
```

To stop the shop and cleanup docker:
```bash
./stop.sh
```

# Database backup and restoration
**!Notice - you need to have your shop running in order to make dump/restore**  
Learn [when](#important) to create restore database.  
Go to `./integration/local`

For restoration:
```bash
# when first time running shop
./restore_all.sh
# when running every other time
./restore_db.sh
```

For backup creation: 
```bash
./backup.sh
# Dump will be created in prestashop/dbdump
```

## Important
Do database dump right before the `GIT COMMIT` to save changes.  
Do database restore right after `GIT PULL` to load updated changes.

**Explanation1:** *prestashop manages that database, so it may change when you change someting in admin panel - hence need for constant dumping*  
**Explanation2:** *databse is not versioned directly, but rather through sql-dump - hence need for loading the dump into database*

# SSL certificate   
SSL cert generation [README.md](prestashop/apache-config/README.md) were created with step by step tutorial on how to generate and setup certificate. Check it out for more information.

# Tests
For complete info about selenium tests refer to [tests README.md](/tests/README.md).
Simple steps to run:
```bash
cd tests
./prepare.sh
./run.sh
```
# Deployment on cluster

## TL;DR
Just run [./deploy.sh](integration/prod/deploy.sh) 

## Detailed:
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

## Image building and taging
```bash
docker build . -t billypl/be_188898_prestashop-v1:latest
docker push billypl/be_188898_prestashop-v1:latest
```



# Team
- Michał Pawiłojć 193159
- Krzysztof Rzeszotarski 193627
- Michał Węsiora 193126
- Julian Kulikowski 188898