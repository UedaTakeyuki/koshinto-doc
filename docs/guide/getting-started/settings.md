# setting up
Setting up for copy protection is very easy as follows:

1. On the Koshinto, set the **State** of the bind as **Bind Waiting**.
2. Run the [compiled](embeded) **a.out** once, then platform keys on the target machine are sent to the Koshinto.
3. On the Koshinto, select appropriate keys for your purpose.
4. On the Koshinto, set the **State** of the bind as **Binding**.

That it. Details are below.

## 1. Set the **State** of the bind as **Bind Waiting**.

### Log in Koshinto, open edit menu for the bind
Log in to Koshinto again, go to [Binds] - [All].

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.15.png" width="80%">  
</div>

Click the bind again.

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.33.png" width="80%">  
</div>

Select **Keys** from the edit menu for selected bind.

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.44.png" width="80%">  
</div>

Before running your compiled a.out, all keys might be blank.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 18.31.18.png" width="80%">  
</div>

### set the **Status** as **Bind Waiting**

Select **Status** from the edit menu for selected bind.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.44.png" width="80%">  
</div>

The initial status might be "Not Active".
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 18.38.08.png" width="80%">  
</div>

Click **Change Status to** select menu and select **Bind waiting**
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.44.png" width="80%">  
</div>

Click blue **UPDATE** button at the bottom right to reflect the changes to the Koshinto service. 
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 18.38.22.png" width="80%">  
</div>

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.44.png" width="80%">  
</div>

## 2. Run the [compiled](embeded) **a.out** once

Run the [compiled](embeded) **a.out** once, result shold be **NG** and exit without taking place 10 second count down because the keys of the bind on the Koshinto is not set to accept confirmation from sansi running on this platform.

```bash:
pi@raspberrypi:~/sansi_examples/c $ ./a.out 
NG
```

However, a.out collects environmental informations that uniquely identifies this platform and can be used as a key, and send these to the Koshinto service.

## 3. Select appropriate keys for your purpose.

Return back to Koshinto, and go to [Binds] - [All] again.

Click blue **UPDATE** button at the bottom right again to reflect sent informations from a.out.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 18.38.22.png" width="80%">  
</div>

Then, select the bind, select **Keys** from edit menu of selected bind.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 13.54.44.png" width="80%">  
</div>

### Case for Raspberry Pi
In case of running a.out on the **Raspberry Pi**, keys might be as follows:
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 19.39.53.png" width="80%">  
</div>

The **SD Card Serial ID** is the unique serial id that all legal SD Card has.
<!--SDカードのシリアルIDは、すべての有効なSDカードが持つ一意のシリアルIDです。-->

If you lock with this key, even if your application is copied to another SD Card, the execution of your copied application will not be allowed  because the serial IDs do not match.
<!--このキーでロックすると、アプリケーションを別のSDカードにコピーしても、シリアルIDが一致しないため、コピーしたアプリケーションの実行は許可されません。-->

The **Platform Serial Number** is the unique serial number that all Raspberry Pi has.

If you lock with this key, your application can be executed only on this Raspberry pi.

Locking with both keys, you can bind your application to both the specific SD Card and Raspberry Pi board.
<!--両方のキーでロックすると、アプリケーションを特定のSDカードとRaspberryPiボードの両方にバインドできます。-->

Check the **lock** check box on the right end of the **SD Card Serial ID** and **Platform Serial Number**.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 20.38.48.png" width="80%">  
</div>


For detail on the other keys, please refer [this](/users-manual/binds/keys).


### Case for Linux PC
In case of running a.out on an **ordinaly Linux PC**, keys might be as follows:

Neither **SD card serial ID** nor **platform serial number**, which were useful keys on the Raspberry Pi, are sent to here because the PC does not have an SD card slot and there is no generic way to get the CPU serial numbers of various PCs.

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 9.56.09.png" width="80%">  
</div>

However, scrolling down, you notice that several usable keys are sent to here.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 9.56.32.png" width="80%">  
</div>

The **Nic** is acronym for "Network Interface Card", here the physical addresses of network devices connected to your PC are listed with separated by semicoron.

The physical (MAC) addresses sent here are collected and sent by sansi from the built-in Ethernet interface, built-in wifi, and network devices connected to the USB port.

By locking to the physical address of an inexpensive USB Wifi dongle, you can limit the launch of your application to the PC on which the dongle is installed. In other words, you can use an inexpensive USB Wifi device as a substitute for a USB key dongle.
<!--安価なUSB  Wifi ドングルの物理アドレスにlock することで、あなたのアプリケーションの起動をそのドングルの装着されているPCに限定することができます。言い換えると安価なUSB Wifi デバイスをUSB key ドングルの代用に利用することができます-->


If your PC has multiple NICs, that is, if the NIC key values ​​are multiple values ​​separated by semicolons, you will not see the checkbox to lock to the key. This is because only one NIC can be locked to the key.
<!--PCが複数台のNICを持つ時、つまりNIC key の値がセミコロンで区切られた複数の値であるときは、key にロックするためのチェックボックスが表示されません。これは、キーにロックできるNICが一つだけだからです。-->


If you select one NIC with the "select one nic" selector, you can lock it as a key. In other words, you can limit the launch of your application to the PC equipped with the NIC with that address.
<!--"select one nic" セレクタでNICを一つ選択すると、それをキーとしてロックすることができます。つまりあなたのアプリケーションの起動をそのアドレスを持つNICが装着されているPCに制限することができます-->
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 18.39.17.png" width="80%">  
</div>
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 18.39.41.png" width="80%">  
</div>
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 18.39.54.png" width="80%">  
</div>


Global IP is the Global IP Address that Sainsi uses to communicate with Koshinto.
<!--Global IP は Sainsi がKoshinto との通信に使用する Global IP Address です-->

Local IPs is a semicolon-separated string of Local IP adresses collected by sansi. As with the NIC, you can select one of them and lock your app as a key.
<!--Local IPs は sansi が収集した Local IP adress をセミコロン区切りで並べた文字列です。NIC と同様に、その中の一つを選択してキーとしてあなたのアプリを lock することができます。-->

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 20.35.58.png" width="80%">  
</div>

You can use these keys if you want to limit the launch of your application to server with a fixed IP address.
<!--アプリケーションの起動を固定IPアドレスを持つサーバーに制限する場合は、これらのキーを使用できます。-->

By the way, the number of NICs and Local IPs generally do not match. The physical addresses of network devices that have been assigned no IP address are also collected as NICs. Also, devices that communicate over the PPP protocol, such as USB 3g dongles, may have an IP address but not a significant physical address.
<!--ちなみに、NICとローカルIPの数は一般的に一致していません。 IPアドレスが割り当てられていないネットワークデバイスの物理アドレスもNICとして収集されます。また、USB 3gドングルなど、PPPプロトコルを介して通信するデバイスには、IPアドレスはありますが、重要な物理アドレスはありません。-->


For detail on the other keys, please refer [this](/users-manual/binds/keys).

### Case for MAC

In case of running a.out on the **MAC**, keys might be as follows:
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 22.03.23.png" width="80%">  
</div>

The **Platform Serial Number** is the unique serial number that all MAC has.

If you lock with this key, your application can be executed only on this MAC.

Check the **lock** check box on the right end of the **Platform Serial Number**.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-09 22.07.58.png" width="80%">  
</div>


For detail on the other keys, please refer [this](/users-manual/binds/keys).

## 4. On the Koshinto, set the **State** of the bind as **Binding**.

Then open **Status** menu again.
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 20.41.49.png" width="80%">  
</div>

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 20.42.15.png" width="80%">  
</div>

Change sttus to **Binding**
<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-11-08 20.42.42.png" width="80%">  
</div>

Then click blue **UPDATE** button at the bottom right to reflect the changes so far to the Koshinto.

Then return back to PC again and run a.out, This time, result shoud be **OK**
and 10 second count down is performed.

```bash
MacBook-Air:c takeyuki$ ./a.out 
OK
start 10 second countdown
10
9
8
7
6
5
4
3
2
1
0!
```

If you run a.out on another PC or change the key setting in Koshinto, the result of running a.out will be NG and the 10 second countdown will be blocked.
<!--a.out を他の PC で実行したり、Koshinto で key の設定を変更したりすると、a.out の実行結果は NG になり、10秒秒読みはブロックされます-->