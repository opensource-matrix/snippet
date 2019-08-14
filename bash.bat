@echo off
title Matrix Bash
color 70
echo Matrix Bash v1.0
goto bash

:bash
set /p cmd=%cd% ~/
cmd /c %cmd%
title Matrix Bash
goto bash
