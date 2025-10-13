# Android Device Testing Setup Guide

Hướng dẫn setup test ứng dụng DateTimeChecker thật trên thiết bị Android

## 🚀 Bước 1: Cài đặt Android SDK và ADB

### Windows Setup:

1. **Tìm Android SDK của bạn:**

   - Nếu có Android Studio: thường ở `C:\Users\{YourName}\AppData\Local\Android\Sdk`
   - Kiểm tra trong Android Studio: `Tools > SDK Manager > Android SDK Location`

2. **Thêm ADB vào PATH:**

   ```powershell
   # Mở PowerShell as Administrator
   # Thêm platform-tools vào PATH
   $env:PATH += ";C:\Users\{YourName}\AppData\Local\Android\Sdk\platform-tools"

   # Hoặc thêm vĩnh viễn:
   [Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Users\{YourName}\AppData\Local\Android\Sdk\platform-tools", [EnvironmentVariableTarget]::User)
   ```

3. **Restart PowerShell và test:**
   ```powershell
   adb version
   ```

## 📱 Bước 2: Chuẩn bị thiết bị Android

1. **Enable Developer Options:**

   - Vào `Settings > About Phone`
   - Nhấn `Build Number` 7 lần
   - Quay lại `Settings > Developer Options`

2. **Enable USB Debugging:**

   - Trong Developer Options: bật `USB Debugging`
   - Bật `Stay Awake` (optional)

3. **Kết nối thiết bị:**

   - Cắm USB cable
   - Cho phép USB Debugging khi popup hiện

4. **Kiểm tra kết nối:**

   ```powershell
   adb devices
   ```

   Kết quả mong muốn:

   ```
   List of devices attached
   ABCD1234    device
   ```

## 🔧 Bước 3: Setup ứng dụng DateTimeChecker

1. **Build và install app từ Android Studio:**

   - Mở project DateTimeChecker trong Android Studio
   - Click `Run` để install app lên device
   - Hoặc build APK: `Build > Build Bundle(s) / APK(s) > Build APK(s)`

2. **Tìm package name của app:**

   ```powershell
   # List all installed packages
   adb shell pm list packages | findstr datetime

   # Hoặc check app đang chạy
   adb shell dumpsys window | findstr mCurrentFocus
   ```

3. **Update package name trong config:**
   - Mở file sẽ được tạo tự động: `codecept.android.conf.cjs`
   - Sửa `appPackage: 'com.example.datetimechecker'` thành package name thật của app

## 🧪 Bước 4: Chạy tests

1. **Đảm bảo app đang mở trên device**

2. **Chạy test script:**

   ```powershell
   npm run test:android
   ```

   Script sẽ tự động:

   - Kiểm tra ADB connection
   - Kiểm tra device connected
   - Start Appium server
   - Chạy tests trên app thật

3. **Hoặc chạy manual:**

   ```powershell
   # Terminal 1: Start Appium server
   appium

   # Terminal 2: Run tests
   npx codeceptjs run --config codecept.android.conf.cjs --grep @android-app --steps
   ```

## 📋 Test Cases được chạy:

1. **Launch App Test:**

   - Kiểm tra app launch thành công
   - Verify UI elements hiển thị

2. **Valid Date Test:**

   - Nhập date hợp lệ: `15/08/2020`
   - Click Check button
   - Verify success message

3. **Invalid Date Test:**
   - Nhập date không hợp lệ: `32/01/2024`
   - Click Check button
   - Verify error message

## 🔍 Troubleshooting:

### Lỗi "adb not found":

```powershell
# Kiểm tra PATH
echo $env:PATH

# Thêm platform-tools vào PATH
$env:PATH += ";C:\Users\{YourName}\AppData\Local\Android\Sdk\platform-tools"
```

### Lỗi "No devices connected":

```powershell
# Restart ADB server
adb kill-server
adb start-server
adb devices
```

### Lỗi "App not found":

- Đảm bảo app đã được install từ Android Studio
- Check package name: `adb shell pm list packages`
- Update `appPackage` trong config file

### Lỗi Appium connection:

```powershell
# Kill existing Appium processes
taskkill /f /im node.exe
taskkill /f /im appium.exe

# Restart Appium
appium --log-level debug
```

## 📁 Files liên quan:

- `scripts/codecept-android.js` - Main Android testing script
- `codecept.android.conf.cjs` - Auto-generated Appium config
- `tests/dateTimeChecker_test.js` - Test scenarios với @android-app tag

## 🎯 Kết quả mong đợi:

Khi chạy thành công, bạn sẽ thấy:

- Appium server start
- Device connection established
- App được điều khiển tự động
- Tests chạy trên app thật
- Screenshots được lưu trong `output/` folder

---

**Lưu ý:** Đây là testing trên thiết bị thật, không phải simulation. App phải đã được build và install từ Android Studio.
