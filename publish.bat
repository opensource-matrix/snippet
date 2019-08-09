@echo off
CMD /C node 1up.js
CMD /C npm publish
git add *
git commit -m "%*"
git push
