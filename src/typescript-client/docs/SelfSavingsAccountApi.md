# SelfSavingsAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**modifySavingsAccountApplication**](#modifysavingsaccountapplication) | **PUT** /v1/self/savingsaccounts/{accountId} | |
|[**retrieveAllSavingsAccountCharges1**](#retrieveallsavingsaccountcharges1) | **GET** /v1/self/savingsaccounts/{accountId}/charges | List Savings Charges|
|[**retrieveSavings**](#retrievesavings) | **GET** /v1/self/savingsaccounts/{accountId} | Retrieve a savings account|
|[**retrieveSavingsAccountCharge1**](#retrievesavingsaccountcharge1) | **GET** /v1/self/savingsaccounts/{accountId}/charges/{savingsAccountChargeId} | Retrieve a Savings account Charge|
|[**retrieveSavingsTransaction**](#retrievesavingstransaction) | **GET** /v1/self/savingsaccounts/{accountId}/transactions/{transactionId} | Retrieve Savings Account Transaction|
|[**submitSavingsAccountApplication**](#submitsavingsaccountapplication) | **POST** /v1/self/savingsaccounts | |
|[**template18**](#template18) | **GET** /v1/self/savingsaccounts/template | |

# **modifySavingsAccountApplication**
> string modifySavingsAccountApplication()


### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let accountId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.modifySavingsAccountApplication(
    accountId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **accountId** | [**number**] |  | defaults to undefined|
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

# **retrieveAllSavingsAccountCharges1**
> Array<GetSelfSavingsAccountsAccountIdChargesResponse> retrieveAllSavingsAccountCharges1()

Lists Savings Charges  Example Requests:  self/savingsaccounts/1/charges  self/savingsaccounts/1/charges?chargeStatus=inactive  self/savingsaccounts/1/charges?fields=name,amountOrPercentage

### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')

const { status, data } = await apiInstance.retrieveAllSavingsAccountCharges1(
    accountId,
    chargeStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|


### Return type

**Array<GetSelfSavingsAccountsAccountIdChargesResponse>**

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

# **retrieveSavings**
> GetSelfSavingsAccountsResponse retrieveSavings()

Retrieves a savings account  Example Requests :  self/savingsaccounts/1   self/savingsaccounts/1?associations=transactions

### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')
let associations: string; //associations (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveSavings(
    accountId,
    chargeStatus,
    associations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|
| **associations** | [**string**] | associations | (optional) defaults to undefined|


### Return type

**GetSelfSavingsAccountsResponse**

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

# **retrieveSavingsAccountCharge1**
> GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse retrieveSavingsAccountCharge1()

Retrieves a Savings account Charge  Example Requests:  self/savingsaccounts/1/charges/5   self/savingsaccounts/1/charges/5?fields=name,amountOrPercentage

### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let savingsAccountChargeId: number; //savingsAccountChargeId (default to undefined)

const { status, data } = await apiInstance.retrieveSavingsAccountCharge1(
    accountId,
    savingsAccountChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **savingsAccountChargeId** | [**number**] | savingsAccountChargeId | defaults to undefined|


### Return type

**GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse**

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

# **retrieveSavingsTransaction**
> GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse retrieveSavingsTransaction()

Retrieves Savings Account Transaction  Example Requests:  self/savingsaccounts/1/transactions/1

### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.retrieveSavingsTransaction(
    accountId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse**

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

# **submitSavingsAccountApplication**
> string submitSavingsAccountApplication()


### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.submitSavingsAccountApplication(
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
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

# **template18**
> string template18()


### Example

```typescript
import {
    SelfSavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsAccountApi(configuration);

let clientId: number; // (optional) (default to undefined)
let productId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.template18(
    clientId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | (optional) defaults to undefined|
| **productId** | [**number**] |  | (optional) defaults to undefined|


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

