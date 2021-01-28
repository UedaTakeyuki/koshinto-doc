---
sidebarDepth: 2
posted: 2020-10-07
---
## status of bind


###	1. Not active
The bind is not active. All requests from sansi is rejected.

The result of calling **confirm()** is **false**.

###	2. Bind Waiting
The bind is waiting for the request. All requests from sansi is handled as **bind** request, that is, reported unique ids are registerd on the bind and status goes to **Bind Requsting**.

The result of calling **confirm()** is **false**.

###	3. Auto Bind Waiting
###	4. Bind Requesting
The sansi is requesting but not accepted. The status goes to **Binding** after acceptance by user. 

The result of calling **confirm()** is **false**.

### 5. Binding
The bind is binding to the specific unique ids. All request from sansi is handled as confirmation request, that is, The result of calling **confirm()** is depend the result of confirmation.

The result of calling **confirm()** is **true** if match, or **false**

### 6.	Invalidated
The bind is invalidated.