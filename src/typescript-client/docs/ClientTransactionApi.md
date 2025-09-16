# ClientTransactionApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllClientTransactions**](#retrieveallclienttransactions) | **GET** /v1/clients/{clientId}/transactions | List Client Transactions|
|[**retrieveAllClientTransactions1**](#retrieveallclienttransactions1) | **GET** /v1/clients/external-id/{clientExternalId}/transactions | List Client Transactions|
|[**retrieveClientTransaction**](#retrieveclienttransaction) | **GET** /v1/clients/{clientId}/transactions/{transactionId} | Retrieve a Client Transaction|
|[**retrieveClientTransaction1**](#retrieveclienttransaction1) | **GET** /v1/clients/{clientId}/transactions/external-id/{transactionExternalId} | Retrieve a Client Transaction|
|[**retrieveClientTransaction2**](#retrieveclienttransaction2) | **GET** /v1/clients/external-id/{clientExternalId}/transactions/{transactionId} | Retrieve a Client Transaction|
|[**retrieveClientTransaction3**](#retrieveclienttransaction3) | **GET** /v1/clients/external-id/{clientExternalId}/transactions/external-id/{transactionExternalId} | Retrieve a Client Transaction|
|[**undoClientTransaction**](#undoclienttransaction) | **POST** /v1/clients/{clientId}/transactions/{transactionId} | Undo a Client Transaction|
|[**undoClientTransaction1**](#undoclienttransaction1) | **POST** /v1/clients/{clientId}/transactions/external-id/{transactionExternalId} | Undo a Client Transaction|
|[**undoClientTransaction2**](#undoclienttransaction2) | **POST** /v1/clients/external-id/{clientExternalId}/transactions/{transactionId} | Undo a Client Transaction|
|[**undoClientTransaction3**](#undoclienttransaction3) | **POST** /v1/clients/external-id/{clientExternalId}/transactions/external-id/{transactionExternalId} | Undo a Client Transaction|

# **retrieveAllClientTransactions**
> GetClientsClientIdTransactionsResponse retrieveAllClientTransactions()

The list capability of client transaction can support pagination.  Example Requests:  clients/189/transactions  clients/189/transactions?offset=10&limit=50

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientId: number; //clientId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientTransactions(
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

**GetClientsClientIdTransactionsResponse**

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

# **retrieveAllClientTransactions1**
> GetClientsClientIdTransactionsResponse retrieveAllClientTransactions1()

The list capability of client transaction can support pagination.  Example Requests:  clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions  clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?offset=10&limit=50

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientExternalId: string; //clientExternalId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientTransactions1(
    clientExternalId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientExternalId** | [**string**] | clientExternalId | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**GetClientsClientIdTransactionsResponse**

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

# **retrieveClientTransaction**
> GetClientsClientIdTransactionsTransactionIdResponse retrieveClientTransaction()

Example Requests: clients/1/transactions/1   clients/1/transactions/1?fields=id,officeName

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientId: number; //clientId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.retrieveClientTransaction(
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

**GetClientsClientIdTransactionsTransactionIdResponse**

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

# **retrieveClientTransaction1**
> GetClientsClientIdTransactionsTransactionIdResponse retrieveClientTransaction1()

Example Requests: clients/1/transactions/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854   clients/1/transactions/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?fields=id,officeName

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientId: number; //clientId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveClientTransaction1(
    clientId,
    transactionExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|


### Return type

**GetClientsClientIdTransactionsTransactionIdResponse**

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

# **retrieveClientTransaction2**
> GetClientsClientIdTransactionsTransactionIdResponse retrieveClientTransaction2()

Example Requests: clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions/1   clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions/1?fields=id,officeName

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientExternalId: string; //clientExternalId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.retrieveClientTransaction2(
    clientExternalId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientExternalId** | [**string**] | clientExternalId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**GetClientsClientIdTransactionsTransactionIdResponse**

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

# **retrieveClientTransaction3**
> GetClientsClientIdTransactionsTransactionIdResponse retrieveClientTransaction3()

Example Requests: clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854   clients/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?fields=id,officeName

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientExternalId: string; //clientExternalId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveClientTransaction3(
    clientExternalId,
    transactionExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientExternalId** | [**string**] | clientExternalId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|


### Return type

**GetClientsClientIdTransactionsTransactionIdResponse**

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

# **undoClientTransaction**
> PostClientsClientIdTransactionsTransactionIdResponse undoClientTransaction()

Undoes a Client Transaction

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientId: number; //clientId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.undoClientTransaction(
    clientId,
    transactionId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdTransactionsTransactionIdResponse**

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

# **undoClientTransaction1**
> PostClientsClientIdTransactionsTransactionIdResponse undoClientTransaction1()

Undoes a Client Transaction

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientId: number; //clientId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.undoClientTransaction1(
    clientId,
    transactionExternalId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdTransactionsTransactionIdResponse**

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

# **undoClientTransaction2**
> PostClientsClientIdTransactionsTransactionIdResponse undoClientTransaction2()

Undoes a Client Transaction

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientExternalId: string; //clientExternalId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.undoClientTransaction2(
    clientExternalId,
    transactionId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientExternalId** | [**string**] | clientExternalId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdTransactionsTransactionIdResponse**

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

# **undoClientTransaction3**
> PostClientsClientIdTransactionsTransactionIdResponse undoClientTransaction3()

Undoes a Client Transaction

### Example

```typescript
import {
    ClientTransactionApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientTransactionApi(configuration);

let clientExternalId: string; //clientExternalId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.undoClientTransaction3(
    clientExternalId,
    transactionExternalId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientExternalId** | [**string**] | clientExternalId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdTransactionsTransactionIdResponse**

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

