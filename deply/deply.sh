#!/bin/bash
cd /home/site/qknow.com.cn
git pull origin master
cd ./src/server
yarn install
pm2 start app.js
