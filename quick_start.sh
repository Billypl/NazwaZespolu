#!/bin/bash

cd integration/local
sudo ./run.sh -d
sleep 3
./wait-for-db.sh
sudo ./restore_all.sh

if [ -n "$WSL_DISTRO_NAME" ]; then
    explorer.exe http://localhost:8080/
else
    xdg-open http://localhost:8080/
fi