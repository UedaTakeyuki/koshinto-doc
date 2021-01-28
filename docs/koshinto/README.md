---
sidebarDepth: 2
posted: 2020-07-30
---
# What is the koshinto
The **koshinto** is a web service that provides an **anti-tamper feature for your IoT application** running on the Raspberry Pi by tying to the device unique ids which can be referred on the running environment, like SD card unique id and RPi device serial number.

The koshinto remembers the correct relationships between application and unique ids as **bind**. When the koshinto gets a request from your application to confirm current unique ids, compare these with the ones on the bind. If these don't match with those on the bind, the koshinto responds "no" for blocking the execution of the unexpected malicious copy of your application.

# How can I get my application to be confirmed by Koshinto
A library, called **Sansi** is available. The Sansi provides a **confirm()** function to your application which works as follows.

1. The sansi gathers necessary device information.
2. Based on the collected information, The sansi asks the koshinto if it can be executed.
3. The sansi answer yes/no to the confirm function.

You can do it just get sansi library, embedded it on your application, call **confirm()** function and continue/break your application following the result of it.
