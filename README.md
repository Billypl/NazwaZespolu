# An online shop
Online shop made with PrestaShop for Electronic Buisness class.

# Used software
- PrestaShop 1.7.8.11
- MariaDB 11.5.2
- Docker

# How to run locally (dev)?
**!Notice -remember about database dumps/restores - read more in [backup/restore section](#database-backup-and-restoration)**  
Go to `./integration/local`

To run the shop:
```bash
./run.sh # foreground
./run.sh -d # background
```
Then [restore database](#database-backup-and-restoration).  
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
For backup creation: 
```bash
./backup.sh
# Dump will be created in prestashop/dbdump
```

For restoration:
```bash
# when first time running shop
./restore_all.sh
# when running every other time
./restore_db.sh
```
## Important
Do databse dump right before the `GIT COMMIT` to save changes.  
Do database restore right after `GIT PULL` to load updated changes.

**Explanation1:** *prestashop manages that database, so it may change when you change someting in admin panel - hence need for constant dumping*  
**Explanation2:** *databse is not versioned directly, but rather through sql-dump - hence need for loading the dump into database*

# Team
- Michał Pawiłojć 193159
- Krzysztof Rzeszotarski 193627
- Michał Węsiora 193126
- Julian Kulikowski 188898