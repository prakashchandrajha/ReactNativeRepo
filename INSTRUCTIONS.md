# React Native — Run & Fix Instructions

## ✅ How to Run the Project (Every Time)

1. **Open Android Studio → Device Manager**
2. Click ▶ on `Medium_Phone_API_36.1` and **wait for the Android home screen**
3. Open a terminal in the project folder and run:
   ```powershell
   npx react-native run-android
   ```

> ⚠️ **Never** let React Native auto-launch the emulator — always start it manually first.

---

## 🔧 Fix Common Issues

### Problem 1: Emulator `offline` or timed out

```powershell
# Kill stuck emulator
adb kill-server
taskkill /F /IM qemu-system-x86_64.exe
taskkill /F /IM emulator.exe

# Restart ADB
adb start-server

# Launch emulator manually, then wait for home screen
& "$env:ANDROID_HOME\emulator\emulator.exe" -avd Medium_Phone_API_36.1 -no-snapshot-load

# Once home screen is visible, run:
npx react-native run-android
```

---

### Problem 2: Random JS / Metro errors (red screen, module not found)

```powershell
# Terminal 1 — reset Metro cache
npx react-native start --reset-cache

# Terminal 2 — run the app
npx react-native run-android
```

---

### Problem 3: Android / Gradle build fails

```powershell
cd android
.\gradlew clean
cd ..
npx react-native run-android
```

---

## ⚡ Quick Fix Script

Run `fix-and-run.ps1` in the project root — it kills stale processes and resets Metro cache automatically:

```powershell
.\fix-and-run.ps1
```

---

## 📋 Environment

| Item | Required | Your Version |
|------|----------|-------------|
| Node.js | >= 22.11.0 | v22.22.0 ✅ |
| Java (JDK) | 17 | 17.0.18 ✅ |
| Android SDK | API 36 | Installed ✅ |
| AVD | Medium_Phone_API_36.1 | Available ✅ |
