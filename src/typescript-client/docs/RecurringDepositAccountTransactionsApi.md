# RecurringDepositAccountTransactionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleTransactionCommands**](#handletransactioncommands) | **POST** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId} | Adjust Transaction | Undo transaction|
|[**retrieveOne21**](#retrieveone21) | **GET** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId} | Retrieve Recurring Deposit Account Transaction|
|[**retrieveTemplate16**](#retrievetemplate16) | **GET** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/template | Retrieve Recurring Deposit Account Transaction Template|
|[**transaction1**](#transaction1) | **POST** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions | Deposit Transaction | Withdrawal Transaction|

# **handleTransactionCommands**
> PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse handleTransactionCommands(postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest)

Adjust Transaction:  This command modifies the given transaction.  Undo transaction:  This command reverses the given transaction.  Showing request/response for \'Adjust Transaction\'

### Example

```typescript
import {
    RecurringDepositAccountTransactionsApi,
    Configuration,
    PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountTransactionsApi(configuration);

let recurringDepositAccountId: number; //recurringDepositAccountId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleTransactionCommands(
    recurringDepositAccountId,
    transactionId,
    postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest** | **PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest**|  | |
| **recurringDepositAccountId** | [**number**] | recurringDepositAccountId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse**

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

# **retrieveOne21**
> GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse retrieveOne21()

Retrieves Recurring Deposit Account Transaction  Example Requests:  recurringdepositaccounts/1/transactions/1

### Example

```typescript
import {
    RecurringDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountTransactionsApi(configuration);

let recurringDepositAccountId: number; //recurringDepositAccountId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.retrieveOne21(
    recurringDepositAccountId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recurringDepositAccountId** | [**number**] | recurringDepositAccountId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse**

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

# **retrieveTemplate16**
> GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse retrieveTemplate16()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  recurringdepositaccounts/1/transactions/template?command=deposit  recurringdepositaccounts/1/transactions/template?command=withdrawal

### Example

```typescript
import {
    RecurringDepositAccountTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountTransactionsApi(configuration);

let recurringDepositAccountId: number; //recurringDepositAccountId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate16(
    recurringDepositAccountId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recurringDepositAccountId** | [**number**] | recurringDepositAccountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse**

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

# **transaction1**
> PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse transaction1(postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest)

Deposit Transaction:  Used for a deposit transaction  Withdrawal Transaction:  Used for a Withdrawal Transaction  Showing request/response for Deposit Transaction

### Example

```typescript
import {
    RecurringDepositAccountTransactionsApi,
    Configuration,
    PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountTransactionsApi(configuration);

let recurringDepositAccountId: number; //recurringDepositAccountId (default to undefined)
let postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest: PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.transaction1(
    recurringDepositAccountId,
    postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest** | **PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest**|  | |
| **recurringDepositAccountId** | [**number**] | recurringDepositAccountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse**

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

