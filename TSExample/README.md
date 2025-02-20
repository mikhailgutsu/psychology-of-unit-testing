# Android

### Permissions for Gradle

- run -> chmod 755 android/gradlew

### Build release APK

- run -> cd android/
- run -> ./gradlew assembleRelease

### Build Bundle release

- run -> cd android/
- run -> ./gradlew bundleRelease

### To enable Reactotron for Android, run:

- run -> adb reverse tcp:9090 tcp:9090

### Troubleshooting in Android

- run -> rm -rf node_modules/
- run -> rm yarn.lock
- run -> yarn
- run -> rm -rf /tmp/metro-\*
- run -> watchman watch-del-all
- run -> cd android/
- run -> ./gradlew clean
- run -> cd ..
- run -> yarn cache clean --force

# iOS

### Troubleshooting in iOS

- run -> rm -rf node_modules/
- run -> rm yarn.lock
- run -> yarn
- run -> rm -rf /tmp/metro-\*
- run -> rm -rf ios/build
- run -> watchman watch-del-all
- run -> cd ios/
- run -> bundle exec pod deintegrate
- run -> rm -rf Pods
- run -> rm Podfile.lock
- run -> rm -rf ~/Library/Developer/Xcode/DerivedData
- run -> bundle exec pod install
- run -> cd ..
- run -> yarn cache clean --force

- Optionally update Pod repositories:
- run -> bundle exec pod install --repo-update

# To start the Metro bundler:

- run -> npm run start

# To run the Android app:

- run -> npm run android

# To run the iOS app:

- run -> npm run ios
