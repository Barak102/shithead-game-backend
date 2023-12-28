#!/bin/bash

set -e

# Start MongoDB
mongod &

# Wait for MongoDB to start
until nc -z localhost 27017; do
  sleep 1
done

# Create the "shithead" database
mongo shithead --eval "db.createCollection('dummy');"

# Stop MongoDB
mongod --shutdown

# Start MongoDB in the background
exec mongod --bind_ip_all