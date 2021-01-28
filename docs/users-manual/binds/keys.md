---
sidebarDepth: 2
posted: 2020-10-08
---
# keys menu
<style>
.img-wrapper {
text-align: center;
margin: 32px;
filter: drop-shadow (10px 10px 5px silver);
}
</style>

You can set and change the key that sansi uses for authentication here. <!-- ここで、sansiが認証に使用するキーを設定および変更できます。 -->You can set and change the value of the keys and which keys are using for authentication. <!-- キーの値と、認証に使用するキーを設定および変更できます。 -->


The koshinto compares the keys which the lock checkbox checked and the keys sent by the confirm function() of the sansi and returns true if they all match. <!-- koshinto は lock チェックボックスがチェックされている key を sansi の confirm 関数から送信されてくる key と比較し、全て一致する時に真を返します。 -->

The following keys are available.<!--以下の key が利用可能です。-->

* [SD Card Serial ID](#sd-card-serial-id)
* [Platform Serial Number](#platform-serial-number)
* [Secret String](#secret-String)
* [Nic](#nic)
* [Global IP](#global-ip)
* [Local IP](#local-ip)

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-10-07 18.59.11.png" width="80%">  
</div>

<div class="img-wrapper">
	<img src="/docs/pics/ss.2020-10-07 18.59.29.png" width="80%">  
</div>

## SD Card Serial ID
This is the unique ID that the SD card inside which is Installed in the SD card slot has inside.<!--これは、SDカードスロットに取り付けられているSDカードが内部に持っている一意のIDです。--> 
With the exception of non-standard, inferior products, conforming SD cards have a unique ID in a safe area inside.<!--非標準の劣った製品を除いて、適合SDカードは内部の安全な領域に一意のIDを持っています。-->
This key has the following uses:<!--このkey には以下のような使途があります-->

* **Copy Guard**: When providing an application which is written on the SD Card, you can prevent running maricious copy to other SD Card by using this key.<!--SDカードに書き込まれたアプリケーションを提供する場合、このキーを使用することで、他のSDカードへの悪意のあるコピーの実行を防ぐことができます。-->

* **Inexpensive physical key**: Apart from the memory medium on which the application is written, you can restrict the running of the application only when an SD card  (a low-capacity, inexpensive one is sufficient) which has a specific ID is installed. <!--アプリケーションが書き込まれるメモリメディアとは別に、特定のIDを持つSDカード（容量が少なく安価なもので十分）がインストールされている場合にのみ、アプリケーションの実行を制限できます。-->


Note that this key is available only with SD Card slot, unavailable with SD Card reader/writer installed USB port   because of no physical capability to read SD Card ID.<!--このキーはSDカードスロットでのみ使用可能であり、SDカードIDを読み取る物理的機能がないため、SDカードリーダー/ライターがインストールされたUSBポートでは使用できないことに注意してください。-->

## Platform Serial Number
This is the unique serial number that the platform that runs the application has internally.<!--これは、アプリケーションを実行するプラットフォームが内部で持っている一意のシリアル番号です。--> 
Currently, the platforms that can get this key are:<!--現在、このキーを取得できるプラットフォームは次のとおりです。--> 

* Raspberry Pi
* Mac

Nevertheless if you can provide us the test platform and necessary information, we are open to adding it to the future version of sansi as needed. Please feel free to contact us.<!--それでも、テストプラットフォームと必要な情報を提供していただければ、必要に応じてsansiの将来のバージョンに追加することができます。お気軽にお問い合わせ下さい。-->

## Secret String
Your application can pass a secret string at calling the sansi, it is relayed to koshinto as this key.. You can use this key versatilely when your application require to use special keys which are not gather by sansi.<!--アプリケーションはsansiを呼び出すときに秘密の文字列を渡すことができ、koshintoに中継されます。 sansiで収集されない特別なキーをアプリケーションで使用する必要がある場合は、このキーを多目的に使用できます。-->

The length of this key is limited to 128 bytes or less, and if it exceeds that, only the first 128 bytes will be sent.<!--このキーの長さは128バイト以下に制限されており、それを超えると、最初の128バイトのみが送信されます。-->

## Nic
## Global IP
## Local IP