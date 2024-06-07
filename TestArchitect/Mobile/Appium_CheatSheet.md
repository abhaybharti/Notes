## Table of Contents

- [ Appium-Learning-Plan](#[-appium-learning-plan)
  - [ What is Appium](#[-what-is-appium)
    - [ Software Needed](#[-software-needed)
    - [ Appium 2.0 Architecture](#[-appium-2.0-architecture)
    - [ How to install Android Studio](#[-how-to-install-android-studio)
    - [ Configure SDK Tools](#[-configure-sdk-tools)
    - [ Installing Appium 2.0 Server](#[-installing-appium-2.0-server)
    - [ Installing Appium Driver](#[-installing-appium-driver)
    - [ Upgrade Appium driver](#[-upgrade-appium-driver)
    - [ Uninstalling Appium Driver](#[-uninstalling-appium-driver)
    - [ Verify Dependencies are installed with Appium Doctor](#[-verify-dependencies-are-installed-with-appium-doctor)
    - [ Connecting to Real devices](#[-connecting-to-real-devices)
    - [ How to find appPackage and appActivity](#[-how-to-find-apppackage-and-appactivity)
    - [ Launching mobile app using Appium](#[-launching-mobile-app-using-appium)
    - [ Launching Chrome Browser using Appium](#[-launching-chrome-browser-using-appium)
    - [ Driver CLI commands](#[-driver-cli-commands)
    - [ Locating element using Appium Inspector](#[-locating-element-using-appium-inspector)
    - [ Platform-wise Desired Capabilities](#[-platform-wise-desired-capabilities)
    - [ Start Appium Server programmatically](#[-start-appium-server-programmatically)
    - [ Understanding Appium Server logs](#[-understanding-appium-server-logs)
    - [ Appium Server in CLI](#[-appium-server-in-cli)
    - [ Install Appium plugin](#[-install-appium-plugin)
    - [ Upgrade Appium plugin](#[-upgrade-appium-plugin)
    - [ Uninstall Appium plugin](#[-uninstall-appium-plugin)
    - [ managing dependencies in Appium 2.0](#[-managing-dependencies-in-appium-2.0)
    - [ Appium Gestures using W3C spec](#[-appium-gestures-using-w3c-spec)
  - [ Mobile Gestures](#[-mobile-gestures)
  - [ Swipe](#[-swipe)
  - [ LongPress](#[-longpress)
  - [ Tap](#[-tap)
  - [ Tap using points](#[-tap-using-points)
  - [ Double Tap](#[-double-tap)
  - [ Dram and Drop](#[-dram-and-drop)
  - [ Scrolling](#[-scrolling)
  - [ Explore Mobile : Endpoints for the same gesture on both Android and iOS](#[-explore-mobile-:-endpoints-for-the-same-gesture-on-both-android-and-ios)
  - [ Create our own complex gestures using above endpoints](#[-create-our-own-complex-gestures-using-above-endpoints)
  - [ Different ways to locator strategy for iOS and Android](#[-different-ways-to-locator-strategy-for-ios-and-android)
  - [- [ Accessibility ID](#[--[-accessibility-id)
  - [- [ ID](#[--[-id)
  - [- [ Class Name](#[--[-class-name)
  - [- [ XPath](#[--[-xpath)
  - [- [ Android Ui Selector](#[--[-android-ui-selector)
  - [- [ Android Data Matcher](#[--[-android-data-matcher)
  - [- [ Android View Matcher](#[--[-android-view-matcher)
  - [- [ iOS Predicate String](#[--[-ios-predicate-string)
  - [- [ iOS Class Chain](#[--[-ios-class-chain)
  - [ Automating Hybrid application](#[-automating-hybrid-application)
  - [ Video recording API](#[-video-recording-api)
  - [ Simulate SMS only for Android](#[-simulate-sms-only-for-android)
  - [ Run ADB Shell commands via Appium](#[-run-adb-shell-commands-via-appium)
  - [ Sending photos on iOS-Simulator and Android](#[-sending-photos-on-ios-simulator-and-android)
  - [ Understand Appium Server session](#[-understand-appium-server-session)
  - [ Using Appium plugins to run tests in parallel on both android and iOS devices/simulators](#[-using-appium-plugins-to-run-tests-in-parallel-on-both-android-and-ios-devices/simulators)
  - [ Use cases](#[-use-cases)
    - [ Automating mobile games with Appium and AltUnity Tester (https://www.youtube.com/watch?v=hSn6qwh6b28)](<#[-automating-mobile-games-with-appium-and-altunity-tester-(https://www.youtube.com/watch?v=hsn6qwh6b28)>)
    - [ Multi-Platform testing (Audio-Video conferencing)](<#[-multi-platform-testing-(audio-video-conferencing)>)
    - [ User/Document validation with device camera](#[-user/document-validation-with-device-camera)
    - [ OTP authentication using SMS/call](#[-otp-authentication-using-sms/call)
    - [ Payments testing on the Web](#[-payments-testing-on-the-web)
  - [ Device Actions](#[-device-actions)
  - [ Take a screenshot](#[-take-a-screenshot)
  - [ Get screen size](#[-get-screen-size)
  - [ Check if running on Device Browser](#[-check-if-running-on-device-browser)
  - [ Open a Deeplink](#[-open-a-deeplink)
  - [ Get Session ID](#[-get-session-id)
  - [ Handle Alert](#[-handle-alert)
  - [ Switch context to WebView](#[-switch-context-to-webview)
  - [ Get all the available contexts](#[-get-all-the-available-contexts)
  - [ Get Battery percent level](#[-get-battery-percent-level)
  - [ Get Battery state](#[-get-battery-state)
  - [ Check if the keyboard is visible](#[-check-if-the-keyboard-is-visible)
  - [ Hide keyboard](#[-hide-keyboard)
  - [ Common Appium Challenges and Solutions](#[-common-appium-challenges-and-solutions)
  - [ Challenge: Setting Up Environment Variables](#[-challenge:-setting-up-environment-variables)

---

---

## sidebar_position: 1

# Appium-Learning-Plan

visit appium.io website for docs & other detail about Appium

## What is Appium

Appium is an open source testing tool for automating mobile, desktop, smart TV and smartwatch application. It involves a Node JS based server which exposes many different APIs with the help of different drivers.

#### Software Needed

1. Java 1.8 or higher
2. Android Studio -> Android SDK
   This is required to setup up Android SDK.

   1. Download Android Studio from internet & install on your local machine.
   2. Once android studio is downloaded, open AVD Manager (shows existing emulator or option to create new emulator)
   3. Appium supports Android 4.4 & higher version SDK

3. NodeJS
4. Appium Desktop
   Download Appium installer & install following installation wizard.

#### Appium 2.0 Architecture

#### How to install Android Studio

- Download Android Studio from internet and install on your local machine
- Once Android Studio is installed, open Android Studio, open AVD Manager (It shows existing emulator or option to create new simulator)

#### Configure SDK Tools

1. Go to path - C:\Users\xxxxx\AppData\Local\Android\Sdk
2. Add ANDROID_HOME = C:\Users\xxxxx\AppData\Local\Android\Sdk in environment variable
3. Add following 3 paths in **PATH** variable
   a. C:\Users\xxxxx\AppData\Local\Android\Sdk\tools
   b. C:\Users\xxxxx\AppData\Local\Android\Sdk\tools\bin
   c. C:\Users\xxxxx\AppData\Local\Android\Sdk\platform-tools

#### Installing Appium 2.0 Server

- npm install -g appium@next //will install Appium server line tool on your machine
- appium driver list – see list of Appium driver available

#### Installing Appium Driver

- appium driver install xcuitest
- appium driver install uiautomator2

#### Upgrade Appium driver

- appium driver update uiautomator2

#### Uninstalling Appium Driver

- appium driver uninstall uiautomator2

#### Verify Dependencies are installed with Appium Doctor

- npm install -g appium-doctor : Appium doctor is a CLI that provides insights on what dependencies are missing as well as how to install them.
- appium-doctor -–android : For only android, to check machine setup for Android automation
- appium-doctor -–ios :For only ios, check machine setup for iOS automation

If I run it at this point in time, it intelligently warns me about the required dependencies that are installed, optional dependencies that could be installed, and how to go about installing them.

```
C:\Users\xxxxx>appium-doctor --android
info AppiumDoctor Appium Doctor v.1.16.0
info AppiumDoctor ### Diagnostic for necessary dependencies starting ###
info AppiumDoctor  ✔ The Node.js binary was found at: C:\Program Files\nodejs\node.EXE
info AppiumDoctor  ✔ Node version is 14.18.1
info AppiumDoctor  ✔ ANDROID_HOME is set to: C:\Users\xxxxx\AppData\Local\Android\Sdk
info AppiumDoctor  ✔ JAVA_HOME is set to: C:\Program Files\Microsoft\jdk-16.0.2.7-hotspot
info AppiumDoctor    Checking adb, android, emulator
info AppiumDoctor      'adb' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\platform-tools\adb.exe
info AppiumDoctor      'android' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\tools\android.bat
info AppiumDoctor      'emulator' is in C:\Users\xxxxx\AppData\Local\Android\Sdk\emulator\emulator.exe
info AppiumDoctor  ✔ adb, android, emulator exist: C:\Users\xxxxx\AppData\Local\Android\Sdk
info AppiumDoctor  ✔ 'bin' subfolder exists under 'C:\Program Files\Microsoft\jdk-16.0.2.7-hotspot'
info AppiumDoctor ### Diagnostic for necessary dependencies completed, no fix needed. ###
info AppiumDoctor
info AppiumDoctor ### Diagnostic for optional dependencies starting ###
WARN AppiumDoctor  ✖ opencv4nodejs cannot be found.
WARN AppiumDoctor  ✖ ffmpeg cannot be found
WARN AppiumDoctor  ✖ mjpeg-consumer cannot be found.
WARN AppiumDoctor  ✖ bundletool.jar cannot be found
WARN AppiumDoctor  ✖ gst-launch-1.0.exe and/or gst-inspect-1.0.exe cannot be found
info AppiumDoctor ### Diagnostic for optional dependencies completed, 5 fixes possible. ###
info AppiumDoctor
info AppiumDoctor ### Optional Manual Fixes ###
info AppiumDoctor The configuration can install optionally. Please do the following manually:
WARN AppiumDoctor  ➜ Why opencv4nodejs is needed and how to install it: https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/image-comparison.md
WARN AppiumDoctor  ➜ ffmpeg is needed to record screen features. Please read https://www.ffmpeg.org/ to install it
WARN AppiumDoctor  ➜ mjpeg-consumer module is required to use MJPEG-over-HTTP features. Please install it with 'npm i -g mjpeg-consumer'.
WARN AppiumDoctor  ➜ bundletool.jar is used to handle Android App Bundle. Please read http://appium.io/docs/en/writing-running-appium/android/android-appbundle/ to install it. Also consider adding the ".jar" extension into your PATHEXT environment variable in order to fix the problem for Windows
WARN AppiumDoctor  ➜ gst-launch-1.0.exe and gst-inspect-1.0.exe are used to stream the screen of the device under test. Please read https://appium.io/docs/en/writing-running-appium/android/android-screen-streaming/ to install them and for more details
info AppiumDoctor
info AppiumDoctor ###
info AppiumDoctor
info AppiumDoctor Bye! Run appium-doctor again when all manual fixes have been applied!
info AppiumDoctor
```

#### Connecting to Real devices

- Connect the device through the UDB cable to the desktop machine (can be connected through bluetooth or Wifi)
- Enable the developer options in the mobile
- Open settings app in the mobile
- Select system a About phone
- Scroll to the bottom and tap build number 7 times
- Returns to the previous screen to find the **developer options** near the bottom
- Scroll down and enable debugging
- Accept the popup in mobile
- Type **adb devices** in the cmd
- You should see an entry of a device with udid mentioned(in below example "emulator-5554" is udid of connected device)
  C:\Users>adb devices
  List of devices attached
  emulator-5554 device

#### How to find appPackage and appActivity

- adb devices -> Should list device name
- Open the application in the app to find appPack and appAct
- If the application is not installed, adb install apkPath/apkfilename.apk

#### Launching mobile app using Appium

We can launch app in two ways

- `app --> app path`

```
//This will install & launch app
capabilities.setCapability(MobileCapabilityType.APP,System.getProperty("user.dir")+"/src/ApiDemos-debug.apk");
capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
AppiumDriver driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
```

Launch app using package & activity name, this is applicable when app is already installed

```
//set driver desired capabilities & install app from given location
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability(AndroidMobileCapabilityType.APP_PACKAGE,"io.appium.android.apis");
    capabilities.setCapability(AndroidMobileCapabilityType.APP_ACTIVITY,".ApiDemos");
    capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
    // Setting the platform name to Android.
    capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,"Android");

    // Setting the device name to emulator-5554 -> this specifies on which device you want to run
    capabilities.setCapability(MobileCapabilityType.UDID,"emulator-5554");

    AppiumDriver driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
    driver.findElement(By.xpath("//android.widget.TextView[@text='Views']")).click();
```

Note - MobileCapabilityType is common for Android and iOS platform

- `appPackage and appActivity --> app`

#### Launching Chrome Browser using Appium

```
  @Test
  public void chromeBrowserOnAndroid() throws MalformedURLException {
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,"Android");
    capabilities.setCapability(AndroidMobileCapabilityType.BROWSER_NAME,"Chrome");
    capabilities.setCapability(MobileCapabilityType.AUTOMATION_NAME,"uiautomator2");
    capabilities.setCapability(MobileCapabilityType.UDID,"ZD2222Q329");

    WebDriver driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
    driver.get("http://www.goolge.com");
  }
```

`TBD` - How to launch chrome browser on Android, check this on device

`ERROR`

1. WARNING: Support for Legacy Capabilities is deprecated; You are sending the following invalid capabilities: [automationName, udid];

2. org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: An unknown server-side error occurred while processing the command. Original error: No Chromedriver found that can automate Chrome '103.0.5060'

#### Driver CLI commands

#### Locating element using Appium Inspector

- Start Appium Inspector
- Click on `Appium Server` tab
- Click `Desired Capabilities`
- Enter desired Capabilities in `JSON Representation` section

```
{
  "platformName": "Android",
  "appium:platformVersion": "11.0",
  "appium:automationName": "uiautomator2"
}
```

- Appium Inspector should show connected device at left side.
  `Notes` If your mobile add/device is not shown, try switching between `Native App Mode` and `Web/Hybrid App Mode`

#### Platform-wise Desired Capabilities

#### Start Appium Server programmatically

```
private AppiumDriverLocalService buildAppiumService () {
   final var logFile = Path.of (getProperty ("user.dir"), "logs", "appium.log")
       .toFile ();
   final var builder = new AppiumServiceBuilder ();
   return builder.withIPAddress (System.getProperty ("host", "127.0.0.1"))
       .usingPort (Integer.parseInt (System.getProperty ("port", "4723")))
       .withLogFile (logFile)
       .withArgument (GeneralServerFlag.BASEPATH, "/wd/hub")
       .withArgument (GeneralServerFlag.USE_DRIVERS, "uiautomator2")
       .withArgument (GeneralServerFlag.USE_PLUGINS, "appium-dashboard")
       .withArgument (GeneralServerFlag.SESSION_OVERRIDE)
       .withArgument (GeneralServerFlag.ALLOW_INSECURE, "chromedriver_autodownload")
       .build ();
}
```

#### Understanding Appium Server logs

#### Appium Server in CLI

#### Install Appium plugin

- appium plugin list //shows list of available plugin
- appium plugin install images //install plugin
- appium plugin install --source=npm appium-dashboard // if the plugin is developed by another contributor, you must use this command to install

#### Upgrade Appium plugin

- appium plugin update images

#### Uninstall Appium plugin

- appium plugin uninstall images

#### managing dependencies in Appium 2.0

#### Appium Gestures using W3C spec

### Mobile Gestures

#### Swipe

#### LongPress

#### Tap

#### Tap using points

#### Double Tap

#### Dram and Drop

#### Scrolling

#### Explore Mobile : Endpoints for the same gesture on both Android and iOS

#### Create our own complex gestures using above endpoints

#### Different ways to locator strategy for iOS and Android

##### Accessibility ID

##### ID

##### Class Name

##### XPath

##### Android Ui Selector

##### Android Data Matcher

##### Android View Matcher

##### iOS Predicate String

##### iOS Class Chain

#### Automating Hybrid application

#### Video recording API

#### Simulate SMS only for Android

#### Run ADB Shell commands via Appium

- open command prompt and type `adb shell`, it will start showing your device console.
- type `dumpsys window windows | grep -E 'CurrentFocus|mFocusedApp'`, it will print android package & activity name

2nd way to way to get app pckage and activity name

- Open Appium inspector
- Go to `actions` from right pane
- Select `Device` from dropdown
- Select `Android Activity` from dropdown
- Click on `Current Activity` button, it will show APP_ACTIVITY value
- Click on `Current Package` button, it will show APP_PACKAGE value

3rd way to way to get app pckage and activity name

- install apk info app on your phone from playstore, it will show all apps & their package/activity name

#### Sending photos on iOS-Simulator and Android

#### Understand Appium Server session

#### Using Appium plugins to run tests in parallel on both android and iOS devices/simulators

## Use cases

#### Automating mobile games with Appium and AltUnity Tester (https://www.youtube.com/watch?v=hSn6qwh6b28)

#### Multi-Platform testing (Audio-Video conferencing)

#### User/Document validation with device camera

#### OTP authentication using SMS/call

#### Payments testing on the Web

```

```

### Device Actions

#### Take a screenshot

```
final var file = ((TakesScreenshot) this.driver).getScreenshotAs (FILE);
try {
   FileUtils.copyFile (file, new File (fileName));
} catch (final IOException e) {
   e.printStackTrace ();
}
```

#### Get screen size

```
driver.manage ().window ().getSize ();
```

#### Check if running on Device Browser

```
var isWebApp = driver.isBrowser ();
```

#### Open a Deeplink

```
driver.get ("someapp://deeplink/to/screen");
```

#### Get Session ID

```
var sessionId = driver.getSessionId ();
```

#### Handle Alert

var message = this.driver.switchTo ()
.alert ()
.accept ();

#### Switch context to WebView

Common Device actions, which can be used on real as well as on Emulator or Simulator devices of Android and iOS

```
driver.context ("WebView-name");
```

#### Get all the available contexts

```
var handles = driver.getContextHandles ();
```

#### Get Battery percent level

```
var batteryPercent = driver.getBatteryInfo ().getLevel ();
```

#### Get Battery state

```
var batteryState = driver.getBatteryInfo ().getState ();

```

- `UNKNOWN`: This is the unknown state of the battery.
- `CHARGING`: This is when the device is charging.
- `DISCHARGING`: This is when the device battery charge level is discharging.
- `NOT_CHARGING`: This is when the device is not charging.
- `FULL`: This is when the device charging is full.

#### Check if the keyboard is visible

```
var isKeyboardVisible = driver.isKeyboardShown ();
```

#### Hide keyboard

```
driver.hideKeyboard (); // this command is only for Android
```

```
driver.hideKeyboard ("return"); // will work on iOS
```

https://www.lambdatest.com/learning-hub/appium-commands-cheat-sheet?utm_source=linkedin&utm_medium=organic&utm_campaign=mar16_rn&utm_term=rn&utm_content=blog

### Common Appium Challenges and Solutions

#### Challenge: Setting Up Environment Variables

Sometimes setting up the necessary environment variables for Appium can be tricky.

Solution: Ensure you have correctly configured environment variables for Android and iOS SDKs.

2. Challenge: Locating Elements
   Identifying and interacting with elements can be challenging, especially when they lack unique identifiers.

Solution: Use alternative locators like XPath or CSS selectors. Also, explore Appium's element locating strategies.

3. Challenge: Handling App Permissions
   Managing app permissions during testing can be cumbersome.

Solution: Use Appium's capabilities to grant or revoke app permissions as needed in your Java tests.

4. Challenge: Handling Native and Hybrid Apps
   Testing hybrid or switching between native and web views can lead to issues.

Solution: Understand the context switching mechanism in Appium and use the `context` method appropriately.

5. Challenge: Dealing with Flakiness
   Tests may become flaky due to network issues, device variations, or app changes.

Solution: Implement wait strategies, retries, and error handling mechanisms to make tests more robust.

6. Challenge: Scrolling and Swiping
   Scrolling or swiping actions may not work as expected.

Solution: Experiment with different scrolling and swiping strategies, such as using the `mobile:scroll` or `mobile:swipe` commands.

7. Challenge: Handling Alerts and Popups
   Handling popups, alerts, and system dialogs can be challenging.

Solution: Use Appium's methods to accept, dismiss, or interact with these elements programmatically.

8. Challenge: Dynamic Content
   Dynamic content can affect test stability.

Solution: Use dynamic locators and data driven testing approaches to handle changing content.

9. Challenge: Reporting and Logging
   Generating comprehensive reports and logs for test runs can be complex.

Solution: Integrate Appium with Java based reporting libraries like ExtentReports for better reporting.

10. Challenge: Parallel Execution
    Managing parallel test execution on multiple devices or emulators can be a challenge.

Solution: Use frameworks like TestNG to manage parallel execution effectively
