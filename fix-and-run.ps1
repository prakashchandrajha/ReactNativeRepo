# React Native Clean Start Script
# Run this whenever you get weird errors: .\fix-and-run.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  React Native Clean Start" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Kill any running Metro/Node processes
Write-Host "`n[1/4] Killing existing Node/Metro processes..." -ForegroundColor Yellow
taskkill /F /IM node.exe 2>$null
Start-Sleep -Seconds 1

# Clear Metro temp cache
Write-Host "[2/4] Clearing Metro cache..." -ForegroundColor Yellow
Remove-Item -Recurse -Force "$env:TEMP\metro-*" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:TEMP\react-*" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:TEMP\haste-*" -ErrorAction SilentlyContinue

# Clear Gradle build cache (optional - uncomment if Android build fails)
# Write-Host "[3/4] Cleaning Gradle build..." -ForegroundColor Yellow
# Push-Location android
# .\gradlew clean
# Pop-Location

Write-Host "[3/4] Cache cleared!" -ForegroundColor Green

# Start Metro with clean cache
Write-Host "[4/4] Starting Metro bundler with --reset-cache..." -ForegroundColor Green
Write-Host "`nIn a SEPARATE terminal, run: npx react-native run-android" -ForegroundColor Magenta
Write-Host "========================================`n" -ForegroundColor Cyan

npx react-native start --reset-cache
