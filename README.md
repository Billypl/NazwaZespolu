# An online shop
Online shop made with PrestaShop for Electronic Buisness class.  
Oryginal page: https://www.pasart.pl/

# Used software
- PrestaShop 1.7.8.11
- MariaDB 11.5.2
- Docker
- Git LFS

# Setup
Our goal was for everyone to be able to setup and run our shop in as few command as possible. Therfore we created [setup](integration/local/setup.sh) and [run](integration/local/run.sh) scripts. If you wish to setup it yourself, below are provided commands to required software. 
## Docker
```bash
# todo
```

## Git LFS
[Official tutorial](https://git-lfs.com/)
```bash
sudo apt install git-lfs
git lfs install
```

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

# To stop 
./backup.sh # if you want to save changes made in admin panel 
./stop.sh
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
Do databse dump right before the `GIT COMMIT` to save changes.  
Do database restore right after `GIT PULL` to load updated changes.

**Explanation1:** *prestashop manages that database, so it may change when you change someting in admin panel - hence need for constant dumping*  
**Explanation2:** *databse is not versioned directly, but rather through sql-dump - hence need for loading the dump into database*

# Sources
You can find used sources and protips regarding each part of the project in [docs/protips.md](docs/FAQ.md).

# Team
- Michał Pawiłojć 193159
- Krzysztof Rzeszotarski 193627
- Michał Węsiora 193126
- Julian Kulikowski 188898