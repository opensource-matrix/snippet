@echo off
CMD /C node 1up.js
CMD /C node src/cleanup.js
CMD /C npm publish
git add *
git commit -m "%*"
git push
