<!-- TOC -->
  * [sidebar_position: 1](#sidebar_position-1)
* [ADB Commands](#adb-commands)
      * [adb devices](#adb-devices)
      * [adb install [apk file]](#adb-install-apk-file)
      * [adb uninstall [package name]](#adb-uninstall-package-name)
      * [adb shell](#adb-shell)
      * [adb pull [source] [destination]](#adb-pull-source-destination)
      * [adb push [source] [destination]](#adb-push-source-destination)
      * [adb shell pm list packages](#adb-shell-pm-list-packages)
      * [adb shell pm clear [package name]](#adb-shell-pm-clear-package-name)
      * [adb logcat](#adb-logcat)
      * [adb reboot](#adb-reboot)
      * [adb shell dumpsys](#adb-shell-dumpsys)
      * [adb shell dumpsys activity](#adb-shell-dumpsys-activity)
      * [adb shell dumpsys package [package name]](#adb-shell-dumpsys-package-package-name)
      * [adb shell dumpsys batterystats](#adb-shell-dumpsys-batterystats)
      * [adb shell dumpsys meminfo [package name]](#adb-shell-dumpsys-meminfo-package-name)
      * [adb shell dumpsys connectivity](#adb-shell-dumpsys-connectivity)
      * [This command shows information about the device’s network connectivity, including the current network type and connection status.](#this-command-shows-information-about-the-devices-network-connectivity-including-the-current-network-type-and-connection-status)
      * [adb shell dumpsys surface](#adb-shell-dumpsys-surface)
      * [adb shell dumpsys display](#adb-shell-dumpsys-display)
      * [adb shell dumpsys cpuinfo](#adb-shell-dumpsys-cpuinfo)
      * [adb shell dumpsys netstats](#adb-shell-dumpsys-netstats)
      * [adb shell dumpsys window](#adb-shell-dumpsys-window)
      * [adb shell dumpsys input](#adb-shell-dumpsys-input)
      * [adb shell dumpsys power](#adb-shell-dumpsys-power)
      * [adb shell dumpsys battery](#adb-shell-dumpsys-battery)
      * [adb shell dumpsys batterystats --reset](#adb-shell-dumpsys-batterystats---reset)
      * [adb shell dumpsys meminfo -a [package name]](#adb-shell-dumpsys-meminfo--a-package-name)
      * [adb shell dumpsys gfxinfo [package name]](#adb-shell-dumpsys-gfxinfo-package-name)
      * [adb shell dumpsys input [input device id]](#adb-shell-dumpsys-input-input-device-id)
      * [adb shell dumpsys surface [window name]](#adb-shell-dumpsys-surface-window-name)
      * [adb shell screencap [filename]](#adb-shell-screencap-filename)
      * [adb shell screenrecord [filename]](#adb-shell-screenrecord-filename)
      * [adb shell input [event]](#adb-shell-input-event)
      * [adb shell monkey [options] [package name]](#adb-shell-monkey-options-package-name)
      * [adb shell am [start|instrument] [options] [package/activity]](#adb-shell-am-startinstrument-options-packageactivity)
      * [adb shell dumpsys activity [activity name]](#adb-shell-dumpsys-activity-activity-name)
      * [adb shell dumpsys batterystats --charged](#adb-shell-dumpsys-batterystats---charged)
      * [adb shell netcfg](#adb-shell-netcfg)
      * [adb shell top](#adb-shell-top)
      * [adb shell ps](#adb-shell-ps)
      * [adb shell cat [file path]](#adb-shell-cat-file-path)
      * [adb shell ls [directory path]](#adb-shell-ls-directory-path)
      * [adb shell df](#adb-shell-df)
      * [adb shell ifconfig](#adb-shell-ifconfig)
      * [adb shell wm](#adb-shell-wm)
      * [adb shell dumpsys activity services [package name]](#adb-shell-dumpsys-activity-services-package-name)
      * [adb shell dumpsys activity broadcasts](#adb-shell-dumpsys-activity-broadcasts)
      * [adb logcat -d | grep -i "FATAL"](#adb-logcat--d--grep--i-fatal)
      * [adb logcat -d -s :F](#adb-logcat--d--s-f)
      * [adb shell dumpsys activity | grep -i 'http|https'](#adb-shell-dumpsys-activity--grep--i-httphttps)
      * [adb shell dumpsys package | grep -i 'permission'](#adb-shell-dumpsys-package--grep--i-permission)
<!-- TOC -->

## sidebar_position: 1

# ADB Commands

#### adb devices

This command displays a list of every connected device that ADB has currently detected on your computer.

List of devices attached
emulator-5554 device

#### adb install [apk file]

The APK file (android application package) is installed on your device by this command.

Performing Streamed Install
Success

#### adb uninstall [package name]

This command removes an application from your device, where the package name is the application’s package name.

adb uninstall com.xyz
Success

#### adb shell

#### adb pull [source] [destination]

This command transfers a file or directory from the device to your computer, with the destination being the location on your computer where the file or directory will be copied to. The source is the file or directory on the device.

adb pull config .
config/: 0 files pulled, 0 skipped.

#### adb push [source] [destination]

This command transfers a file or directory from your computer to the target device with the destination being the location on the target device and the source being the file or directory on your computer.

#### adb shell pm list packages

This command lists all the installed packages (apps) on the device.

package:com.android.cts.priv.ctsshim
package:com.android.internal.display.cutout.emulation.corner
package:com.android.internal.display.cutout.emulation.double
package:com.android.providers.telephony
package:com.android.dynsystem
package:com.android.theme.icon.pebble
package:com.android.providers.calendar

#### adb shell pm clear [package name]

This command clears the data and cache of an app, where the package name is the package name of the app you want to clear.

#### adb logcat

This command displays the logcat output of the device, which can help with debugging and troubleshooting.

#### adb reboot

This command reboots the device.

#### adb shell dumpsys

This command shows a wide range of system information on your device, including battery status, memory usage, and process information.

#### adb shell dumpsys activity

This command displays information about the currently running activities on your device.

#### adb shell dumpsys package [package name]

This command shows detailed information about a specific package (app), where the package name is the package name of the app you want to get information about.

#### adb shell dumpsys batterystats

This command shows detailed battery usage statistics on your device.

#### adb shell dumpsys meminfo [package name]

This command shows detailed memory usage statistics for a specific package (app), where the package name is the package name of the app you want to get information about.

#### adb shell dumpsys connectivity

#### This command shows information about the device’s network connectivity, including the current network type and connection status.

#### adb shell dumpsys surface

This command shows detailed information about the currently visible surfaces on your device.

#### adb shell dumpsys display

This command shows detailed information about the device’s display, including the current display mode and resolution.

#### adb shell dumpsys cpuinfo

This command shows detailed CPU usage statistics on your device.

#### adb shell dumpsys netstats

This command shows detailed network usage statistics on your device.

#### adb shell dumpsys window

This command shows detailed information about the device’s window manager, including the current focus and layout of all windows.

#### adb shell dumpsys input

This command shows detailed information about the device’s input manager, including the current state of all input devices and input queues.

#### adb shell dumpsys power

This command shows detailed information about the device’s power manager, including the current battery level, power sources, and wake lock statistics.

#### adb shell dumpsys battery

This command shows detailed information about the device’s battery, including the current battery level, voltage, and temperature.

#### adb shell dumpsys batterystats --reset

This command resets the battery usage statistics on the device.

#### adb shell dumpsys meminfo -a [package name]

This command shows detailed memory usage statistics for all processes of a specific package (app), where the package name is the package name of the app you want to get information about.

#### adb shell dumpsys gfxinfo [package name]

This command shows detailed graphics performance statistics for a specific package (app), where the package name is the package name of the app you want to get information about.

#### adb shell dumpsys input [input device id]

This command shows detailed information about a specific input device, where the input device id is the ID of the input device you want to get information about.

#### adb shell dumpsys surface [window name]

This command shows detailed information about a specific window, where the window name is the name of the window you want to get information about.

#### adb shell screencap [filename]

This command takes a screenshot of the device and saves it to the specified filename on your computer.

#### adb shell screenrecord [filename]

This command records the screen of the device and saves it to the specified filename on your computer.

#### adb shell input [event]

This command sends an input event to the device, where the event can be a variety of actions, such as key presses, touch events, and more.

#### adb shell monkey [options] [package name]

This command runs a random stress test on the specified package (app), where options can be used to specify the number of events to generate, and the package name is the package name of the app you want to run the test on.

#### adb shell am [start|instrument] [options] [package/activity]

This command starts an activity or runs an instrumentation on the specified package (app), where options can be used to specify additional parameters such as the target package, component, and data and package/activity is the package name or activity name you want to start or run the instrumentation on.

#### adb shell dumpsys activity [activity name]

This command shows detailed information about a specific activity, including its state, intent, and more.

#### adb shell dumpsys batterystats --charged

This command shows the battery statistics when the device is fully charged.

#### adb shell netcfg

This command displays the current network configuration on the device.

#### adb shell top

This command displays the current CPU usage and process statistics on the device.

Tasks: 245 total, 1 running, 244 sleeping, 0 stopped, 0 zombie
Mem: 2028168K total, 1668304K used, 359864K free, 33271808 buffers
Swap: 1521120K total, 0 used, 1521120K free, 921464K cached
400%cpu 0%user 0%nice 7%sys 393%idle 0%iow 0%irq 0%sirq 0%host
PID USER PR NI VIRT RES SHR S[%CPU] %MEM TIME+ ARGS
3305 shell 20 0 10G 4.4M 3.6M R 11.1 0.2 0:00.02 top
313 bluetooth 20 0 10G 6.2M 5.1M S 7.4 0.3 88:39.49 android.hardwa+

#### adb shell ps

This command displays the currently running processes on the device.

#### adb shell cat [file path]

This command displays the contents of a file on the device, where the file path is the path to the file you want to view.

#### adb shell ls [directory path]

This command displays the contents of a directory on the device, where the directory path is the path to the directory you want to view.

#### adb shell df

This command displays the current disk usage statistics on the device.

#### adb shell ifconfig

This command displays the current IP configuration on the device.

#### adb shell wm

This command allows you to interact with the device’s window manager. You can use it to display/hide the status bar, change the DPI, etc.

#### adb shell dumpsys activity services [package name]

This command shows detailed information about the services running within a specific package (app), where the package name is the package name of the app you want to get information about.

#### adb shell dumpsys activity broadcasts

This command shows detailed information about the broadcast receivers on the device.

#### adb logcat -d | grep -i "FATAL"

The device’s log output is displayed using the logcat command in this command, which then streams the output to the grep program, which searches the output for lines that contain the word FATAL. By doing so, all crash logs stored in logcat will be displayed.

#### adb logcat -d -s :F

This command gets crash logs of a specific app, which can help debug and troubleshoot.

#### adb shell dumpsys activity | grep -i 'http|https'

The activity manager’s state is displayed by this command using the dumpsys activity command. The output is then piped to the grep command, which searches the output for lines containing the terms HTTP or HTTPS.

#### adb shell dumpsys package | grep -i 'permission'
