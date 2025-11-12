@echo off
echo ========================================
echo   College Management System Deployment
echo ========================================
echo.
echo This script will help you deploy your website to the internet.
echo.
echo Choose your deployment method:
echo 1. Vercel (Recommended - Fast and Free)
echo 2. Netlify (Alternative)
echo 3. Manual GitHub + Vercel
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo Deploying to Vercel...
    echo First, you need to login to Vercel:
    echo.
    vercel login
    echo.
    echo Now deploying your project...
    vercel --prod
    echo.
    echo Your website should now be live!
) else if "%choice%"=="2" (
    echo.
    echo For Netlify deployment:
    echo 1. Go to https://netlify.com
    echo 2. Sign up with GitHub
    echo 3. Drag and drop your project folder
    echo 4. Your site will be live!
    start https://netlify.com
) else if "%choice%"=="3" (
    echo.
    echo For GitHub + Vercel:
    echo 1. Create repository on GitHub
    echo 2. Run: git remote add origin https://github.com/yourusername/repo-name.git
    echo 3. Run: git push -u origin main
    echo 4. Connect Vercel to your GitHub repository
    start https://github.com/new
) else (
    echo Invalid choice. Please run the script again.
)

echo.
pause
