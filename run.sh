# Sever Command are Running
echo 'Server Is Startiiiiiiiiiiiiing Wait'
sleep 2 
echo 'Yeah Its Starting .....Mmmmmmm'
sleep 1 
echo 'Done .... ✅'
(cd BackEnd && node server.js &)
sleep 5
echo ''
echo ''
echo ''

# Frontends Command Are Running
echo 'Wait ..... :)'
echo 'Localhost is now Live......... ✡︎'
(cd FrontEnd && npm run dev)
echo ''

# Commands to running the mongodb Live 
# And Shows the Mongod Status And Start System
sudo systemctl start mongod
sleep 3
echo''
echo''
sudo systemctl status mongod
