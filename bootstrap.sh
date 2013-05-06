#!/usr/bin/env bash
sudo apt-get update
sudo apt-get install -y vim
sudo apt-get install -y apache2 
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs
echo `node --version` > /tmp/nodeVersion.txt
npm install -g karma

rm -rf /var/www
ln -fs /vagrant /var/www
