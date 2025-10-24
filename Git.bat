@echo on

git add .
set /p msg=Enter commit message: 
git commit -m "%msg%"
git push origin main

echo.
echo ✅ Successfully pushed to main branch!
pause