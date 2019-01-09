@echo off
if exist node_modules (
rmdir node_modules /s /q
goto :delbower
) else (
goto :delbower
)

:delbower
if exist bower_components (
rmdir bower_components /s /q
call init.cmd
) else (
call init.cmd
)
