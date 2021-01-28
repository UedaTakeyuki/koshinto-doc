---
title: guide
prev: false
next: /guide/getting-started/signup
sidebarDepth: 2
---
# Introduction
**Koshinto** is an anti piracy service for the application you creat.
It provide an out-of-the-box solution of **copy protection** and **remote execution permission control** functionality that limit the execution of your application running on Linux (x86 and arm) and Mac(x86).

## features

### No licese file
Koshinto doesn't use license file nor license key which is confusing, prone to accidents, and can be the target of attacks.
The credential is obfuscated and embedded inside the library, so all you have to do is just link the library into your application.
Neither you nor users of your application have to worry about applying for, issuing, or managing license files.

### Raspberry Pi support
Since it does not use a license file, it can provides effective copy protection even for IoT devices that is difficult to protect their storage.
Especially for Raspberry Pi, you can restrict execution of your application to that **from the specific SD card** and/or that **on the specific Raspberry Pi board**.


### variety of the environmental keys
Following keys are availabe to limit execution of your application:
- SD Card Serial ID
- Platform Serial Number
- Secret String
- Mac addres of NIC
- Local IP address
- Grobal IP address

Refer [here](/features/) for a list of possible keys for each machine architecture that runs your application

### Safekeeping Key
You can pass a 32 characters or less string that keeps in the server safely to your application at the start time. You can use it to keep a credential your application requires safely.