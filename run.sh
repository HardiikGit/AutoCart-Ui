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