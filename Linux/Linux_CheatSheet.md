<!-- TOC -->
      * [Shell Script to run command 100 times on interval of 60 seconds](#shell-script-to-run-command-100-times-on-interval-of-60-seconds)
      * [Display IP addresses](#display-ip-addresses)
      * [Install unzip app](#install-unzip-app)
      * [Restart Linux](#restart-linux)
<!-- TOC -->

#### Shell Script to run command 100 times on interval of 60 seconds

Run below code in linux console

```
for i in {1..100}; do echo -n "restarting docker $i "; date ; docker restart xxx1; docker restart xxx2; sleep 60; done
```

- output
  restarting docker 1 Wed Jul 6 09:59:50 EDT 2022
  xxx1
  xxx2
  restarting docker 2 Wed Jul 6 10:01:11 EDT 2022

  #### Delete Directory

  `rm -rf xxx_ABC`

    - to delete directory **xxx_ABC** with contents

  #### Display Linux CPU Information

  `lscpu`

  #### Display Linux version

  `lsb_release -d`

`uname -r`

#### Display IP addresses

hostname -i

#### Install unzip app

`yum -y install unzip`

#### Restart Linux

`reboot`
