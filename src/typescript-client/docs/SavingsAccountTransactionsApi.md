# SavingsAccountTransactionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adjustTransaction1**](#adjusttransaction1) | **POST** /v1/savingsaccounts/{savingsId}/transactions/{transactionId} | Undo/Reverse/Modify/Release Amount transaction API|
|[**advancedQuery1**](#advancedquery1) | **POST** /v1/savingsaccounts/{savingsId}/transactions/query | Advanced search Savings Account Transactions|
|[**retrieveOne24**](#retrieveone24) | **GET** /v1/savingsaccounts/{savingsId}/transactions/{transactionId} | |
|[**retrieveTemplate19**](#retrievetemplate19) | **GET** /v1/savingsaccounts/{savingsId}/transactions/template | |
|[**searchTransactions**](#searchtransactions) | **GET** /v1/savingsaccounts/{savingsId}/transactions/search | Search Savings Account Transactions|
|[**transaction2**](#transaction2) | **POST** /v1/savingsaccounts/{savingsId}/transactions | |

# **adjustTransaction1**
> Array<PostSavingsAccountBulkReversalTransactionsRequest> adjustTransaction1(postSavingsAccountBulkReversalTransactionsRequest)

Undo/Reverse/Modify/Release Amount transaction API  Example Requests:   savingsaccounts/{savingsId}/transactions/{transactionId}?command=reverse  Accepted command = undo, reverse, modify, releaseAmount

### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration,
    PostSavingsAccountBulkReversalTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; // (default to undefined)
let transactionId: number; // (default to undefined)
let postSavingsAccountBulkReversalTransactionsRequest: PostSavingsAccountBulkReversalTransactionsRequest; //
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.adjustTransaction1(
    savingsId,
    transactionId,
    postSavingsAccountBulkReversalTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountBulkReversalTransactionsRequest** | **PostSavingsAccountBulkReversalTransactionsRequest**|  | |
| **savingsId** | [**number**] |  | defaults to undefined|
| **transactionId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<PostSavingsAccountBulkReversalTransactionsRequest>**

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

# **advancedQuery1**
> string advancedQuery1()


### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration,
    PagedLocalRequestAdvancedQueryRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; //savingsId (default to undefined)
let pagedLocalRequestAdvancedQueryRequest: PagedLocalRequestAdvancedQueryRequest; // (optional)

const { status, data } = await apiInstance.advancedQuery1(
    savingsId,
    pagedLocalRequestAdvancedQueryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pagedLocalRequestAdvancedQueryRequest** | **PagedLocalRequestAdvancedQueryRequest**|  | |
| **savingsId** | [**number**] | savingsId | defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne24**
> string retrieveOne24()


### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; // (default to undefined)
let transactionId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOne24(
    savingsId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsId** | [**number**] |  | defaults to undefined|
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

# **retrieveTemplate19**
> string retrieveTemplate19()


### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate19(
    savingsId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsId** | [**number**] |  | defaults to undefined|


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

# **searchTransactions**
> SavingsAccountTransactionsSearchResponse searchTransactions()


### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; //savings account id (default to undefined)
let fromDate: string; //minimum value date (inclusive) (optional) (default to undefined)
let toDate: string; //maximum value date (inclusive) (optional) (default to undefined)
let fromSubmittedDate: string; //minimum booking date (inclusive) (optional) (default to undefined)
let toSubmittedDate: string; //maximum booking date (inclusive) (optional) (default to undefined)
let fromAmount: number; //minimum transaction amount (inclusive) (optional) (default to undefined)
let toAmount: number; //maximum transaction amount (inclusive) (optional) (default to undefined)
let types: string; //transaction types (optional) (default to undefined)
let credit: boolean; //credit (optional) (default to undefined)
let debit: boolean; //debit (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //sort properties (optional) (default to undefined)
let sortOrder: 'ASC' | 'DESC'; //sort direction (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let dateFormat: string; //date format (optional) (default to undefined)

const { status, data } = await apiInstance.searchTransactions(
    savingsId,
    fromDate,
    toDate,
    fromSubmittedDate,
    toSubmittedDate,
    fromAmount,
    toAmount,
    types,
    credit,
    debit,
    offset,
    limit,
    orderBy,
    sortOrder,
    locale,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsId** | [**number**] | savings account id | defaults to undefined|
| **fromDate** | [**string**] | minimum value date (inclusive) | (optional) defaults to undefined|
| **toDate** | [**string**] | maximum value date (inclusive) | (optional) defaults to undefined|
| **fromSubmittedDate** | [**string**] | minimum booking date (inclusive) | (optional) defaults to undefined|
| **toSubmittedDate** | [**string**] | maximum booking date (inclusive) | (optional) defaults to undefined|
| **fromAmount** | [**number**] | minimum transaction amount (inclusive) | (optional) defaults to undefined|
| **toAmount** | [**number**] | maximum transaction amount (inclusive) | (optional) defaults to undefined|
| **types** | [**string**] | transaction types | (optional) defaults to undefined|
| **credit** | [**boolean**] | credit | (optional) defaults to undefined|
| **debit** | [**boolean**] | debit | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | sort properties | (optional) defaults to undefined|
| **sortOrder** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | sort direction | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **dateFormat** | [**string**] | date format | (optional) defaults to undefined|


### Return type

**SavingsAccountTransactionsSearchResponse**

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

# **transaction2**
> PostSavingsAccountTransactionsResponse transaction2(postSavingsAccountTransactionsRequest)


### Example

```typescript
import {
    SavingsAccountTransactionsApi,
    Configuration,
    PostSavingsAccountTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountTransactionsApi(configuration);

let savingsId: number; // (default to undefined)
let postSavingsAccountTransactionsRequest: PostSavingsAccountTransactionsRequest; //
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.transaction2(
    savingsId,
    postSavingsAccountTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountTransactionsRequest** | **PostSavingsAccountTransactionsRequest**|  | |
| **savingsId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PostSavingsAccountTransactionsResponse**

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

