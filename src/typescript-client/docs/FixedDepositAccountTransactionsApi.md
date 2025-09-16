# FixedDepositAccountTransactionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adjustTransaction**](#adjusttransaction) | **POST** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId} | |
|[**retrieveOne18**](#retrieveone18) | **GET** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId} | |
|[**retrieveTemplate14**](#retrievetemplate14) | **GET** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/template | |
|[**transaction**](#transaction) | **POST** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions | |

# **adjustTransaction**
> string adjustTransaction()


### Example

```typescript
import {
    FixedDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountTransactionsApi(configuration);

let fixedDepositAccountId: number; // (default to undefined)
let transactionId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.adjustTransaction(
    fixedDepositAccountId,
    transactionId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **fixedDepositAccountId** | [**number**] |  | defaults to undefined|
| **transactionId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne18**
> string retrieveOne18()


### Example

```typescript
import {
    FixedDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountTransactionsApi(configuration);

let fixedDepositAccountId: number; // (default to undefined)
let transactionId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOne18(
    fixedDepositAccountId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedDepositAccountId** | [**number**] |  | defaults to undefined|
| **transactionId** | [**number**] |  | defaults to undefined|


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

# **retrieveTemplate14**
> string retrieveTemplate14()


### Example

```typescript
import {
    FixedDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountTransactionsApi(configuration);

let fixedDepositAccountId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate14(
    fixedDepositAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fixedDepositAccountId** | [**number**] |  | defaults to undefined|


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

# **transaction**
> string transaction()


### Example

```typescript
import {
    FixedDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountTransactionsApi(configuration);

let fixedDepositAccountId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.transaction(
    fixedDepositAccountId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **fixedDepositAccountId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

