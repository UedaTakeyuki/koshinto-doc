---
sidebarDepth: 2
posted: 2020-11-27
---
# Features

## Feature Table
### Keys

You can use the following keys to restrict the launch of the application.

|                      |Linux|Mac|Raspberry Pi|
|----------------------|:---:|:-:|:----------:|
|SD Card Serial ID     |     |   |    ✓       |
|Platform Serial Number|     | ✓ |    ✓       |
|Secret String         | ✓   | ✓ |    ✓       |
|Nic                   | ✓   | ✓ |    ✓       |
|Global IP             | ✓   | ✓ |    ✓       |
|Local  IPs            | ✓   | ✓ |    ✓       |

<dl>
  <dt>SD Card Serial ID</dt>
  <dd>
  A unique ID that a genuine SD card must-have in the internal secure area.
  </dd>
  <dt>Platform Serial Number</dt>
  <dd>
  A unique ID of the platform.
  </dd>
  <dt>Secret String</dt>
  <dd>
  You can use up to 128 alphanumeric characters passed from your application to the confirm () function as a key.
  </dd>
  <dt>Nic</dt>
  <dd>
  The Mac address of the Network Interface, such as Ethernet Port or WiFi. You can use one of the multiple NICs that the platform has.
  </dd>
  <dt>Global IP</dt>
  <dd>
  The global IP address used to communicate with Koshinto.
  </dd>
  <dt>Local  IPs</dt>
  <dd>
  The local IP address assigned to the platform's network interface. You can choose one from multiple and use it.
</dd>
</dl>

### Safekeeping Key
You can save up to 32 alphanumeric characters in koshinto and pass it to the application at application startup through confirm () function. 

|                      |Linux|Mac|Raspberry Pi|
|----------------------|:---:|:-:|:----------:|
|Safekeeping Key       | ✓   | ✓ |    ✓       |
