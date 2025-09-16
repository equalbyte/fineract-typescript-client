# ClientApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate1**](#activate1) | **POST** /v1/clients/{clientId} | Activate a Client | Close a Client | Reject a Client | Withdraw a Client | Reactivate a Client | UndoReject a Client | UndoWithdraw a Client | Assign a Staff | Unassign a Staff | Update Default Savings Account | Propose a Client Transfer | Withdraw a Client Transfer | Reject a Client Transfer | Accept a Client Transfer | Propose and Accept a Client Transfer|
|[**applyCommand**](#applycommand) | **POST** /v1/clients/external-id/{externalId} | Activate a Client | Close a Client | Reject a Client | Withdraw a Client | Reactivate a Client | UndoReject a Client | UndoWithdraw a Client | Assign a Staff | Unassign a Staff | Update Default Savings Account | Propose a Client Transfer | Withdraw a Client Transfer | Reject a Client Transfer | Accept a Client Transfer | Propose and Accept a Client Transfer|
|[**create6**](#create6) | **POST** /v1/clients | Create a Client|
|[**delete8**](#delete8) | **DELETE** /v1/clients/{clientId} | Delete a Client|
|[**delete9**](#delete9) | **DELETE** /v1/clients/external-id/{externalId} | Delete a Client|
|[**getClientTemplate**](#getclienttemplate) | **GET** /v1/clients/downloadtemplate | |
|[**postClientTemplate**](#postclienttemplate) | **POST** /v1/clients/uploadtemplate | |
|[**retrieveAll21**](#retrieveall21) | **GET** /v1/clients | List Clients|
|[**retrieveAssociatedAccounts**](#retrieveassociatedaccounts) | **GET** /v1/clients/{clientId}/accounts | Retrieve client accounts overview|
|[**retrieveAssociatedAccounts1**](#retrieveassociatedaccounts1) | **GET** /v1/clients/external-id/{externalId}/accounts | Retrieve client accounts overview|
|[**retrieveObligeeDetails**](#retrieveobligeedetails) | **GET** /v1/clients/{clientId}/obligeedetails | Retrieve client obligee details|
|[**retrieveObligeeDetails1**](#retrieveobligeedetails1) | **GET** /v1/clients/external-id/{externalId}/obligeedetails | Retrieve client obligee details|
|[**retrieveOne11**](#retrieveone11) | **GET** /v1/clients/{clientId} | Retrieve a Client|
|[**retrieveOne12**](#retrieveone12) | **GET** /v1/clients/external-id/{externalId} | Retrieve a Client by External Id|
|[**retrieveTemplate5**](#retrievetemplate5) | **GET** /v1/clients/template | Retrieve Client Details Template|
|[**retrieveTransferTemplate**](#retrievetransfertemplate) | **GET** /v1/clients/{clientId}/transferproposaldate | Retrieve client transfer template|
|[**retrieveTransferTemplate1**](#retrievetransfertemplate1) | **GET** /v1/clients/external-id/{externalId}/transferproposaldate | Retrieve client transfer template|
|[**update10**](#update10) | **PUT** /v1/clients/{clientId} | Update a Client|
|[**update11**](#update11) | **PUT** /v1/clients/external-id/{externalId} | Update a Client using the External Id|

# **activate1**
> PostClientsClientIdResponse activate1(postClientsClientIdRequest)

Activate a Client:  Clients can be created in a Pending state. This API exists to enable client activation (for when a client becomes an approved member of the financial Institution).  If the client happens to be already active this API will result in an error.  Close a Client:  Clients can be closed if they do not have any non-closed loans/savingsAccount. This API exists to close a client .  If the client have any active loans/savingsAccount this API will result in an error.  Reject a Client:  Clients can be rejected when client is in pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: rejectionDate, rejectionReasonId  Withdraw a Client:  Client applications can be withdrawn when client is in a pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: withdrawalDate, withdrawalReasonId  Reactivate a Client: Clients can be reactivated after they have been closed.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reactivationDate  UndoReject a Client:  Clients can be reactivated after they have been rejected.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDateUndoWithdraw a Client:  Clients can be reactivated after they have been withdrawn.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDate  Assign a Staff:  Allows you to assign a Staff for existed Client.  The selected Staff should belong to the same office (or an officer higher up in the hierarchy) as the Client he manages.  Unassign a Staff:  Allows you to unassign the Staff assigned to a Client.  Update Default Savings Account:  Allows you to modify or assign a default savings account for an existing Client.  The selected savings account should be one among the existing savings account for a particular customer.  Propose a Client Transfer:  Allows you to propose the transfer of a Client to a different Office.  Withdraw a Client Transfer:  Allows you to withdraw the proposed transfer of a Client to a different Office.  Withdrawal can happen only if the destination Branch (to which the transfer was proposed) has not already accepted the transfer proposal  Reject a Client Transfer:  Allows the Destination Branch to reject the proposed Client Transfer.  Accept a Client Transfer:  Allows the Destination Branch to accept the proposed Client Transfer.  The destination branch may also choose to link this client to a group (in which case, any existing active JLG loan of the client is rescheduled to match the meeting frequency of the group) and loan Officer at the time of accepting the transfer  Propose and Accept a Client Transfer:  Abstraction over the Propose and Accept Client Transfer API\'s which enable a user with Data Scope over both the Target and Destination Branches to directly transfer a Client to the destination Office.  Showing request/response for \'Reject a Client Transfer\'

### Example

```typescript
import {
    ClientApi,
    Configuration,
    PostClientsClientIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let postClientsClientIdRequest: PostClientsClientIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.activate1(
    clientId,
    postClientsClientIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsClientIdRequest** | **PostClientsClientIdRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applyCommand**
> PostClientsClientIdResponse applyCommand(postClientsClientIdRequest)

Activate a Client:  Clients can be created in a Pending state. This API exists to enable client activation (for when a client becomes an approved member of the financial Institution).  If the client happens to be already active this API will result in an error.  Close a Client:  Clients can be closed if they do not have any non-closed loans/savingsAccount. This API exists to close a client .  If the client have any active loans/savingsAccount this API will result in an error.  Reject a Client:  Clients can be rejected when client is in pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: rejectionDate, rejectionReasonId  Withdraw a Client:  Client applications can be withdrawn when client is in a pending for activation status.  If the client is any other status, this API throws an error.  Mandatory Fields: withdrawalDate, withdrawalReasonId  Reactivate a Client: Clients can be reactivated after they have been closed.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reactivationDate  UndoReject a Client:  Clients can be reactivated after they have been rejected.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDateUndoWithdraw a Client:  Clients can be reactivated after they have been withdrawn.  Trying to reactivate a client in any other state throws an error.  Mandatory Fields: reopenedDate  Assign a Staff:  Allows you to assign a Staff for existed Client.  The selected Staff should belong to the same office (or an officer higher up in the hierarchy) as the Client he manages.  Unassign a Staff:  Allows you to unassign the Staff assigned to a Client.  Update Default Savings Account:  Allows you to modify or assign a default savings account for an existing Client.  The selected savings account should be one among the existing savings account for a particular customer.  Propose a Client Transfer:  Allows you to propose the transfer of a Client to a different Office.  Withdraw a Client Transfer:  Allows you to withdraw the proposed transfer of a Client to a different Office.  Withdrawal can happen only if the destination Branch (to which the transfer was proposed) has not already accepted the transfer proposal  Reject a Client Transfer:  Allows the Destination Branch to reject the proposed Client Transfer.  Accept a Client Transfer:  Allows the Destination Branch to accept the proposed Client Transfer.  The destination branch may also choose to link this client to a group (in which case, any existing active JLG loan of the client is rescheduled to match the meeting frequency of the group) and loan Officer at the time of accepting the transfer  Propose and Accept a Client Transfer:  Abstraction over the Propose and Accept Client Transfer API\'s which enable a user with Data Scope over both the Target and Destination Branches to directly transfer a Client to the destination Office.  Showing request/response for \'Reject a Client Transfer\'

### Example

```typescript
import {
    ClientApi,
    Configuration,
    PostClientsClientIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; //externalId (default to undefined)
let postClientsClientIdRequest: PostClientsClientIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.applyCommand(
    externalId,
    postClientsClientIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsClientIdRequest** | **PostClientsClientIdRequest**|  | |
| **externalId** | [**string**] | externalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create6**
> PostClientsResponse create6(postClientsRequest)

Note:  1. You can enter either:firstname/middlename/lastname - for a person (middlename is optional) OR fullname - for a business or organisation (or person known by one name).  2.If address is enable(enable-address=true), then additional field called address has to be passed.  Mandatory Fields: firstname and lastname OR fullname, officeId, active=true and activationDate OR active=false, if(address enabled) address  Optional Fields: groupId, externalId, accountNo, staffId, mobileNo, savingsProductId, genderId, clientTypeId, clientClassificationId

### Example

```typescript
import {
    ClientApi,
    Configuration,
    PostClientsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let postClientsRequest: PostClientsRequest; //

const { status, data } = await apiInstance.create6(
    postClientsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsRequest** | **PostClientsRequest**|  | |


### Return type

**PostClientsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete8**
> DeleteClientsClientIdResponse delete8()

If a client is in Pending state, you are allowed to Delete it. The delete is a \'hard delete\' and cannot be recovered from. Once clients become active or have loans or savings associated with them, you cannot delete the client but you may Close the client if they have left the program.

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.delete8(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**DeleteClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete9**
> DeleteClientsClientIdResponse delete9()

If a client is in Pending state, you are allowed to Delete it. The delete is a \'hard delete\' and cannot be recovered from. Once clients become active or have loans or savings associated with them, you cannot delete the client but you may Close the client if they have left the program.

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; //externalId (default to undefined)

const { status, data } = await apiInstance.delete9(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**DeleteClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getClientTemplate**
> getClientTemplate()


### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let legalFormType: string; // (optional) (default to undefined)
let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getClientTemplate(
    legalFormType,
    officeId,
    staffId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **legalFormType** | [**string**] |  | (optional) defaults to undefined|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postClientTemplate**
> string postClientTemplate()


### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let legalFormType: string; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postClientTemplate(
    legalFormType,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **legalFormType** | [**string**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll21**
> GetClientsResponse retrieveAll21()

The list capability of clients can support pagination and sorting.  Example Requests:  clients  clients?fields=displayName,officeName,timeline  clients?offset=10&limit=50  clients?orderBy=displayName&sortOrder=DESC

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let externalId: string; //externalId (optional) (default to undefined)
let displayName: string; //displayName (optional) (default to undefined)
let firstName: string; //firstName (optional) (default to undefined)
let lastName: string; //lastName (optional) (default to undefined)
let status: string; //status (optional) (default to undefined)
let underHierarchy: string; //underHierarchy (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let orphansOnly: boolean; //orphansOnly (optional) (default to undefined)
let legalForm: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll21(
    officeId,
    externalId,
    displayName,
    firstName,
    lastName,
    status,
    underHierarchy,
    offset,
    limit,
    orderBy,
    sortOrder,
    orphansOnly,
    legalForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **displayName** | [**string**] | displayName | (optional) defaults to undefined|
| **firstName** | [**string**] | firstName | (optional) defaults to undefined|
| **lastName** | [**string**] | lastName | (optional) defaults to undefined|
| **status** | [**string**] | status | (optional) defaults to undefined|
| **underHierarchy** | [**string**] | underHierarchy | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **orphansOnly** | [**boolean**] | orphansOnly | (optional) defaults to undefined|
| **legalForm** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetClientsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAssociatedAccounts**
> GetClientsClientIdAccountsResponse retrieveAssociatedAccounts()

An example of how a loan portfolio summary can be provided. This is requested in a specific use case of the community application. It is quite reasonable to add resources like this to simplify User Interface development.  Example Requests:   clients/1/accounts  clients/1/accounts?fields=loanAccounts,savingsAccounts

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.retrieveAssociatedAccounts(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**GetClientsClientIdAccountsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAssociatedAccounts1**
> GetClientsClientIdAccountsResponse retrieveAssociatedAccounts1()

An example of how a loan portfolio summary can be provided. This is requested in a specific use case of the community application. It is quite reasonable to add resources like this to simplify User Interface development.  Example Requests:   clients/123-456/accounts  clients/123-456/accounts?fields=loanAccounts,savingsAccounts

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; //externalId (default to undefined)

const { status, data } = await apiInstance.retrieveAssociatedAccounts1(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**GetClientsClientIdAccountsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveObligeeDetails**
> GetClientObligeeDetailsResponse retrieveObligeeDetails()

Retrieve client obligee details

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveObligeeDetails(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**GetClientObligeeDetailsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveObligeeDetails1**
> GetClientObligeeDetailsResponse retrieveObligeeDetails1()

Retrieve client obligee details using the client external Id

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveObligeeDetails1(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] |  | defaults to undefined|


### Return type

**GetClientObligeeDetailsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne11**
> GetClientsClientIdResponse retrieveOne11()

Example Requests:  clients/1   clients/1?template=true   clients/1?fields=id,displayName,officeName

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveOne11(
    clientId,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne12**
> GetClientsClientIdResponse retrieveOne12()

Example Requests:  clients/123-456   clients/123-456?template=true   clients/123-456?fields=id,displayName,officeName

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; //externalId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveOne12(
    externalId,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveTemplate5**
> GetClientsTemplateResponse retrieveTemplate5()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  clients/template

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let commandParam: string; //commandParam (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveTemplate5(
    officeId,
    commandParam,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **commandParam** | [**string**] | commandParam | (optional) defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetClientsTemplateResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveTransferTemplate**
> GetClientTransferProposalDateResponse retrieveTransferTemplate()

Retrieve client transfer template

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveTransferTemplate(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**GetClientTransferProposalDateResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveTransferTemplate1**
> GetClientTransferProposalDateResponse retrieveTransferTemplate1()

Retrieve client transfer template using the client external Id

### Example

```typescript
import {
    ClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveTransferTemplate1(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] |  | defaults to undefined|


### Return type

**GetClientTransferProposalDateResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update10**
> PutClientsClientIdResponse update10(putClientsClientIdRequest)

Note: You can update any of the basic attributes of a client (but not its associations) using this API.  Changing the relationship between a client and its office is not supported through this API. An API specific to handling transfers of clients between offices is available for the same.  The relationship between a client and a group must be removed through the Groups API.

### Example

```typescript
import {
    ClientApi,
    Configuration,
    PutClientsClientIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let putClientsClientIdRequest: PutClientsClientIdRequest; //

const { status, data } = await apiInstance.update10(
    clientId,
    putClientsClientIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putClientsClientIdRequest** | **PutClientsClientIdRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**PutClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update11**
> PutClientsClientIdResponse update11(putClientsClientIdRequest)

Note: You can update any of the basic attributes of a client (but not its associations) using this API.  Changing the relationship between a client and its office is not supported through this API. An API specific to handling transfers of clients between offices is available for the same.  The relationship between a client and a group must be removed through the Groups API.

### Example

```typescript
import {
    ClientApi,
    Configuration,
    PutClientsClientIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientApi(configuration);

let externalId: string; //externalId (default to undefined)
let putClientsClientIdRequest: PutClientsClientIdRequest; //

const { status, data } = await apiInstance.update11(
    externalId,
    putClientsClientIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putClientsClientIdRequest** | **PutClientsClientIdRequest**|  | |
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**PutClientsClientIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

