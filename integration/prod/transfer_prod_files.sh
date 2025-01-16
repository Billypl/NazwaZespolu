#!/bin/bash

./transfer_file.sh ../../prestashop/docker-compose.prod.yaml docker-compose.yaml
./transfer_file.sh ../../prestashop/dbdump/dump.sql dump.sql 
./transfer_file.sh ./init_db.sh init_db.sh
./transfer_file.sh ./cluster_helper.sh cluster_helper.sh  