@echo off
choice /n /m "Module erstellen (J/N)?"
if errorlevel 2 goto end
if errorlevel 1 goto yes

:yes
if exist node_modules (
mkdir empty_dir
robocopy empty_dir node_modules /s /mir
rmdir empty_dir
rmdir node_modules /s /q
)
npm install

:end
exit
