#!/bin/bash

PRESTASHOP_PATH="../../prestashop"

docker-compose -f $PRESTASHOP_PATH/docker-compose.yaml down
echo "### Docker is down" 
sudo chown -R $USER:$USER $PRESTASHOP_PATH/dbdata
echo "### Dbdata chowned"  
sudo chown -R $USER:$USER $PRESTASHOP_PATH/src
echo "### Src chowned"  