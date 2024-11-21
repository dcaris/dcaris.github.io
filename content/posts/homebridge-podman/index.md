---
date: 2024-10-16
title: 'Using Podman to host Homebridge Container'
tags: ['Podman', 'Homebridge', 'HomeKit']
---

Finally bought an Apple TV 4k (Gen 3) for the sole purpose of setting up `Homebridge`. Got it all setup with TV and on the network, and started the grind that is setting up Homebridge.

For ease of setup, I opted for using the official Homebridge docker image in Docker Hub to run a containerized instance of Homebridge. At the same time, wanted to try out **Podman** to host the containers.

After a few google searches, settled on the following:

```bash
podman run --name=homebridge \
    -v $(pwd)/homebridge_data:homebridge \
    -p 8581:8581 \
    -p 51000:51000 \
    homebridge/homebridge:latest
```

The above maps local homebridge_data folder to containers default homebridge data folder, forwards port 8581 which is what the `Homebridge UI` web app runs on by default, and forwards port 51000 through which is what the `Homebridge Port`. The port forwarding of the Homebridge Port is important as its used as part of the **Bridge** discovery for **HomeKit** when attempting to add via the **Home** app. These ports can be configured in the **Settings -> Network** section of **HomeBridge UI**.

Whilst the **Homebridge Port** forwarding should in most cases solve the discovery problems I encountered, one very critical piece of configuration is `mDNS` setup for Homebridge. In the **Settings -> Network** section of **HomeBridge UI**, there are several **mDNS Advertisers** to choose from based on your host. As the base docker image for Homebridge is based on uBuntu, the recommended advertiser is **Avahi** for Linux as per Homebridge [documentation](https://github.com/homebridge/homebridge/wiki/mDNS-Options). After many hours of troubleshooting why the discovery was still failing, the following [article](https://www.devwithimagination.com/2020/02/02/running-homebridge-on-docker-without-host-network-mode/) includes details about running Homebridge without **Host Network Mode**, which is a common hack that some users opt for in order to get their Homebridge instance discovered on their local network. The author linked to his [script](https://github.com/dhutchison/container-images/blob/master/homebridge/generate_service.sh) in Github which inspects the running Homebridge container for the required configuration it needs to generate an Avahi service file. The script works perfectly bar 1 quirk, its based on **docker**. This was easily remedied by replacing **docker** with **podman** and executing in the terminal. And viola! Homebridge is discoverable via Home app.
