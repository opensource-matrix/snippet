@echo off
git add *
git commit -m "%*"
git push
node 1up.js
npm publish
