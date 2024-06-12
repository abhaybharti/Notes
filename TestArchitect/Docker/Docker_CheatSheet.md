<!-- TOC -->
* [Docker-Commands](#docker-commands)
    * [What is Docker](#what-is-docker)
    * [How to Clear Log Files of A Docker Container](#how-to-clear-log-files-of-a-docker-container)
    * [How to Install Docker](#how-to-install-docker)
    * [Docker Image](#docker-image)
    * [Container](#container)
    * [DIfference between Virtual Machine & Containers](#difference-between-virtual-machine--containers)
    * [DockerHub -](#dockerhub--)
    * [Docker for Selenium](#docker-for-selenium)
    * [Check running container](#check-running-container)
    * [How to install docker image](#how-to-install-docker-image)
    * [How to see installed images](#how-to-see-installed-images)
<!-- TOC -->

# Docker-Commands

### What is Docker

Docker is a computer program that performs operating-system level virtualization. Docker is a tool designed to make it easier to create, deploy and run applications by using containers.

In simple words, Docker is a software containerization platform, meaning you can build your application, package them along with their dependencies into a container and then these containers can be easily shipped to run on other machines.

### How to Clear Log Files of A Docker Container

Truncate the log files of all docker containers in your system

```
truncate -s 0 /var/lib/docker/containers/*/*-json.log
```

then restart all docker container

### How to Install Docker

### Docker Image

an image is a lightweight, standalone, executable package of software that includes everything needed to run an application code, runtime, system tools, system libraries and settings.

### Container

Container is the runtime instance of an image. A dockerfile is where you write the instructions to build a Docker images.

### DIfference between Virtual Machine & Containers

Virtualization is the technique of importing a Guest operating system on top of a host operating system. Containerization is however more efficient because of no guest OS here and utilizes a host's operating system, share relevant libraries & resources as and when needed unlike virtual machines. They are lightweight and faster than virtual machines.

### DockerHub -

### Docker for Selenium

Docker Hub is a collaboration tool and a marketplace for community developers, open source contributors, and independent software vendors (ISVs) to distribute their code publicly. Docker Hub provides a consistent, secure, and trusted experience, making it easy for developers to access software they need.

### Check running container

type command `docker ps`

### How to install docker image

docker pull selenium/standalone-chrome : install latest
docker pull selenium/standalone-chrome:version - to install particular version

### How to see installed images

`docker images`
shows list of installed images

docker run -d -p
