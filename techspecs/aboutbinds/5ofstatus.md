---
sidebarDepth: 2
posted: 2020-12-05
---
# 5 of status of Bind and 3 ways for bindingof your application's running to the specific condition

The status of a normal Bind will be one of the following five.
The following table summarize for each status the return value of confirm (), the change of the key of bind in koshinto, and the transition of status of bind in koshinto.

|status|return|change of bind key on the koshinto|transision of bind status on the koshinto|
|------|------|----|----|
|Not Active|always ng_comfirmed|no change|no change|
|Bind Waiting|always ng_comfirmed|updated with the values from confirm()|to Bind Requesting|
|Bind Requesting|always ng_comfirmed|no change|no change|
|Auto Bind Waiting|always ok_comfirmed|updated with the values from confirm()|to Binding|
|Binding|ng_comfirmed or ok_comfirmed depend on the values from confirm()|no change|no change|

There are three ways to set the key value, lock it and set the state to "Binding".

## 1. In case you know well the value of the key you want to bind.
In case you have concret understanding about the key you would bind, this is strait forward way.

### Steps.
1. At the KoshintoOpen the bind your application is using.
2. Open keys and set the **value** of the key you would bind it, then set the **lock** ✓. Then click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F44ec28bf-8b05-401a-08fc-3e667b28cfc7.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=d0f34a62e30748a6e499135298d8bd99" width="30%" />

3. Open status and select it as **Binding**. Then click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2Ff268dcf9-68c6-ae58-7355-656f2dfc2ad3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=445f22de9ba63daab20a9a5fe8a3811c" width="30%" />


The transitions of status can be summarized as follows:

```mermaid
graph LR
    id1[Not Active]
    id1 -- "set value, select lock, change status" --> Binding
```

## 2. In case you don't know how to get the key value or want to save the trouble of get it
Even in the following troublesome cases, you can use this procedure to set the startup conditions of your application as you wish.
- In case you want to bind it to the terminal you have now, but don't know how to get the key or want to avoid troubles to get it yourself.
- In case you provide an application to someone and you don't know what environment before they will use.

### Steps.
1. At the KoshintoOpen the bind your application is using.
2. Open status and select it as **Bind Waiting**. Then click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F41ebd403-7472-3b8b-e61b-e43fd784542d.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=e7fda24c3838048a53f4a95bdd5d3f05" width="30%" />
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F06064d58-9c80-f214-925d-26e1552659f1.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=f701a29ee585a62e10cb76280c33d8c8" width="30%" />

3. Back to your application, call confirm().
4. Back to koshinto, refresh Bind data on the Browser with clicking the floating action button of round arrow icon at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F9badad42-0197-d3eb-91e1-8d8cd17b6b5e.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=f538cee12c3c803de27a644684aa14e3" width="30%" />

5. Open keys. You can see the values of keys are updated by what sent from confirm(). Select one of them and ✓ the **lock**. Then click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F9f5dae88-fa69-8c7a-e6cc-20bc3d3c42a6.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=6dcddaabfb0f06820d0d986e372a14e9" width="30%" />

6. Open status. You can see that the status has transitted to **Bind Requesting**. Select **Binding** and click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F6bf40911-eb0e-35fd-e5a7-88faf169f296.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=82f8a04ac59feb737128790853ec97bd" width="30%" />
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2Fa0e61547-269f-6377-de99-6873167a9042.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=06b7c90b9b8fe982f9970803c436e3c8" width="30%" />


The transitions of status can be summarized as follows:

```mermaid
graph LR
    id1[Not Active]
    id2[Bind Waiting]
    id3[Bind Requesting]
    id4[Binding]
    id1 -- change status --> id2
    id2 -- "confirm()" --> id3
    id3 -- "select lock, change status" --> id4

```

## 3. In case you want to automatically bind it to the values of first confirm().
The following steps are useful in case you provide an application to someone and you want to bind it automatically to the environment they will use.

### Steps.
1. At the KoshintoOpen the bind your application is using.
2. Open keys. Select keys you would lock to and set checked the **lock** as ✓. Then click **UPDATE** button at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F55adbd53-8d6b-4aea-d022-8e9546cd337a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=e6224564a64ba4070bff00ebc1101ba0" width="30%" />

3. Open status and select it as **Auto Bind Waiting**. Then click **UPDATE** button at the bottom right. That's it!

<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2Fe75b4f9d-1a7e-7851-47c4-d599b8cef575.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b5e60bcc5289ef93de8f5306ebccb0a5" width="30%" />
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F37f24e64-c4dd-ffe8-eb9f-bc6dab4c97d0.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=a037af4b9effeb8b18d748af4997c579" width="30%" />

4. After your application runs and confirm () is called, refresh Bind data on the Browser with clicking the floating action button of round arrow icon at the bottom right.


<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F9badad42-0197-d3eb-91e1-8d8cd17b6b5e.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=f538cee12c3c803de27a644684aa14e3" width="30%" />

5. Open keys, You can see that they are updated with the values ​​in the user's environment.
<img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F46544%2F9f5dae88-fa69-8c7a-e6cc-20bc3d3c42a6.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&w=1400&fit=max&s=6dcddaabfb0f06820d0d986e372a14e9" width="30%" />


The transitions of status can be summarized as follows:

```mermaid
graph LR
    id1[Not Active]
    id2[Auto Bind Waiting]
    id3[Binding]
    id1 -- "select lock, change status" --> id2
    id2 -- confirm --> id3

```
