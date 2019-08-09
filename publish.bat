@echo off
git add *
git commit -m "%*"
git push
CMD /C node 1up.js
CMD /C npm publish
