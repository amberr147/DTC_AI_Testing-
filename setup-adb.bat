@echo off
echo Setting up ADB for Android Testing...
echo =====================================

:: Check if ADB is already in PATH
adb version >nul 2>&1
if %errorlevel% equ 0 (
    echo ADB is already available!
    adb version
    goto :end
)

echo Searching for Android SDK...

:: Try common Android SDK locations
set ANDROID_SDK_PATHS="%LOCALAPPDATA%\Android\Sdk" "%APPDATA%\Android\Sdk" "C:\Android\Sdk"

for %%p in (%ANDROID_SDK_PATHS%) do (
    if exist "%%~p\platform-tools\adb.exe" (
        set ANDROID_SDK=%%~p
        goto :found
    )
)

echo Android SDK not found!
echo Please install Android Studio first.
goto :end

:found
echo Found Android SDK at: %ANDROID_SDK%

set PLATFORM_TOOLS=%ANDROID_SDK%\platform-tools

:: Add to user PATH
setx PATH "%PATH%;%PLATFORM_TOOLS%" >nul

:: Add to current session PATH  
set PATH=%PATH%;%PLATFORM_TOOLS%

echo Added ADB to PATH successfully!

:: Test ADB
"%PLATFORM_TOOLS%\adb.exe" version

echo.
echo Next steps:
echo 1. Restart PowerShell/CMD
echo 2. Connect Android device via USB
echo 3. Enable USB Debugging on device
echo 4. Test: adb devices
echo 5. Run: npm run test:android

:end
pause