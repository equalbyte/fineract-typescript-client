# SelfClientApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addNewClientImage2**](#addnewclientimage2) | **POST** /v1/self/clients/{clientId}/images | |
|[**deleteClientImage1**](#deleteclientimage1) | **DELETE** /v1/self/clients/{clientId}/images | |
|[**retrieveAll36**](#retrieveall36) | **GET** /v1/self/clients | List Clients associated to the user|
|[**retrieveAllClientCharges1**](#retrieveallclientcharges1) | **GET** /v1/self/clients/{clientId}/charges | List Client Charges|
|[**retrieveAllClientTransactions2**](#retrieveallclienttransactions2) | **GET** /v1/self/clients/{clientId}/transactions | List Client Transactions|
|[**retrieveAssociatedAccounts2**](#retrieveassociatedaccounts2) | **GET** /v1/self/clients/{clientId}/accounts | Retrieve client accounts overview|
|[**retrieveClientCharge1**](#retrieveclientcharge1) | **GET** /v1/self/clients/{clientId}/charges/{chargeId} | Retrieve a Client Charge|
|[**retrieveClientTransaction4**](#retrieveclienttransaction4) | **GET** /v1/self/clients/{clientId}/transactions/{transactionId} | Retrieve a Client Transaction|
|[**retrieveImage1**](#retrieveimage1) | **GET** /v1/self/clients/{clientId}/images | Retrieve Client Image|
|[**retrieveObligeeDetails2**](#retrieveobligeedetails2) | **GET** /v1/self/clients/{clientId}/obligeedetails | |
|[**retrieveOne28**](#retrieveone28) | **GET** /v1/self/clients/{clientId} | Retrieve a Client|

# **addNewClientImage2**
> CommandProcessingResult addNewClientImage2()


### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; // (default to undefined)
let contentLength: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.addNewClientImage2(
    clientId,
    contentLength,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|
| **contentLength** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteClientImage1**
> CommandProcessingResult deleteClientImage1()


### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteClientImage1(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll36**
> GetSelfClientsResponse retrieveAll36()

The list capability of clients can support pagination and sorting.  Example Requests:  self/clients  self/clients?fields=displayName,officeName  self/clients?offset=10&limit=50  self/clients?orderBy=displayName&sortOrder=DESC

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let displayName: string; //displayName (optional) (default to undefined)
let firstName: string; //firstName (optional) (default to undefined)
let lastName: string; //lastName (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let status: string; //status (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let legalForm: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll36(
    displayName,
    firstName,
    lastName,
    offset,
    status,
    limit,
    orderBy,
    sortOrder,
    legalForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **displayName** | [**string**] | displayName | (optional) defaults to undefined|
| **firstName** | [**string**] | firstName | (optional) defaults to undefined|
| **lastName** | [**string**] | lastName | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **status** | [**string**] | status | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **legalForm** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetSelfClientsResponse**

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

# **retrieveAllClientCharges1**
> GetSelfClientsClientIdChargesResponse retrieveAllClientCharges1()

The list capability of client charges supports pagination.  Example Requests:  self/clients/1/charges  self/clients/1/charges?offset=0&limit=5

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')
let pendingPayment: boolean; //pendingPayment (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientCharges1(
    clientId,
    chargeStatus,
    pendingPayment,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|
| **pendingPayment** | [**boolean**] | pendingPayment | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|


### Return type

**GetSelfClientsClientIdChargesResponse**

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

# **retrieveAllClientTransactions2**
> GetSelfClientsClientIdTransactionsResponse retrieveAllClientTransactions2()

The list capability of client transaction can support pagination.  Example Requests:  self/clients/189/transactions  self/clients/189/transactions?offset=10&limit=50

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientTransactions2(
    clientId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**GetSelfClientsClientIdTransactionsResponse**

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

# **retrieveAssociatedAccounts2**
> GetSelfClientsClientIdAccountsResponse retrieveAssociatedAccounts2()

An example of how a loan portfolio summary can be provided. This is requested in a specific use case of the community application. It is quite reasonable to add resources like this to simplify User Interface development.  Example Requests:  self/clients/1/accounts   self/clients/1/accounts?fields=loanAccounts,savingsAccounts

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.retrieveAssociatedAccounts2(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**GetSelfClientsClientIdAccountsResponse**

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

# **retrieveClientCharge1**
> GetSelfClientsClientIdChargesChargeIdResponse retrieveClientCharge1()

Retrieves a Client Charge  Example Requests:  self/clients/1/charges/1   self/clients/1/charges/1?fields=name,id

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.retrieveClientCharge1(
    clientId,
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**GetSelfClientsClientIdChargesChargeIdResponse**

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

# **retrieveClientTransaction4**
> GetSelfClientsClientIdTransactionsTransactionIdResponse retrieveClientTransaction4()

Retrieves a Client TransactionExample Requests:  self/clients/1/transactions/1   self/clients/1/transactions/1?fields=id,officeName

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.retrieveClientTransaction4(
    clientId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**GetSelfClientsClientIdTransactionsTransactionIdResponse**

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

# **retrieveImage1**
> retrieveImage1()

Optional arguments are identical to those of Get Image associated with an Entity (Binary file)  Example Requests:  self/clients/1/images

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)
let maxWidth: number; // (optional) (default to undefined)
let maxHeight: number; // (optional) (default to undefined)
let output: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveImage1(
    clientId,
    maxWidth,
    maxHeight,
    output
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **maxWidth** | [**number**] |  | (optional) defaults to undefined|
| **maxHeight** | [**number**] |  | (optional) defaults to undefined|
| **output** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveObligeeDetails2**
> string retrieveObligeeDetails2()


### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveObligeeDetails2(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne28**
> GetSelfClientsClientIdResponse retrieveOne28()

Retrieves a Client  Example Requests:  self/clients/1  self/clients/1?fields=id,displayName,officeName

### Example

```typescript
import {
    SelfClientApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfClientApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.retrieveOne28(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**GetSelfClientsClientIdResponse**

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

