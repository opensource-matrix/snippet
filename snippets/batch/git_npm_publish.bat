@echo off
CMD /C npm publish
git add *
git commit -m "%*"
git push
