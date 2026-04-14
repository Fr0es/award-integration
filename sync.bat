@echo off
echo ============================
echo   INICIANDO SYNC COM GIT
echo ============================

git add .

set /p msg=Digite a mensagem do commit: 

git commit -m "%msg%"

echo.
echo Atualizando com rebase...
git pull origin master

echo.
echo Enviando para o remoto...
git push origin master

echo.
echo ============================
echo        FINALIZADO
echo ============================

pause