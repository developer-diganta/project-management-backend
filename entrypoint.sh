#!/bin/bash

# Start the server.js in the background
node server.js 3001 &

# Sleep for a few seconds to allow the server.js to start
sleep 5

# Start the loadBalance.js
node loadBalance.js
