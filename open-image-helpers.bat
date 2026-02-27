@echo off
echo ═══════════════════════════════════════════════════════════════
echo     LP PLAST - Opening Image Helper Tools
echo ═══════════════════════════════════════════════════════════════
echo.
echo Opening helper files in your default browser...
echo.

start "" "check-images.html"
timeout /t 2 /nobreak >nul

start "" "image-guide.html"
timeout /t 2 /nobreak >nul

start "" "QUICK-START.txt"

echo.
echo ✓ All helper tools opened!
echo.
echo Next steps:
echo 1. Check which images are missing (check-images.html)
echo 2. Follow the visual guide (image-guide.html)
echo 3. Read quick start instructions (QUICK-START.txt)
echo.
echo Press any key to exit...
pause >nul
