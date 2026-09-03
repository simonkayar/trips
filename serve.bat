@echo off
rem Starts a local web server for the Trips site and opens it in the browser.
rem (Opening index.html directly also works, but the maps need http:// for tiles.)
cd /d "%~dp0"
start "" http://localhost:8765/
python -m http.server 8765
