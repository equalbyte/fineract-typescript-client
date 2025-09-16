# InterOperationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createQuote**](#createquote) | **POST** /v1/interoperation/quotes | Calculate Interoperation Quote|
|[**createTransactionRequest**](#createtransactionrequest) | **POST** /v1/interoperation/requests | Allow Interoperation Transaction Request|
|[**deleteAccountIdentifier**](#deleteaccountidentifier) | **DELETE** /v1/interoperation/parties/{idType}/{idValue} | Allow Interoperation Identifier registration|
|[**deleteAccountIdentifier1**](#deleteaccountidentifier1) | **DELETE** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Allow Interoperation Identifier registration|
|[**disburseLoan**](#disburseloan) | **POST** /v1/interoperation/transactions/{accountId}/disburse | Disburse Loan by Account Id|
|[**getAccountByIdentifier**](#getaccountbyidentifier) | **GET** /v1/interoperation/parties/{idType}/{idValue} | Query Interoperation Account by secondary identifier|
|[**getAccountByIdentifier1**](#getaccountbyidentifier1) | **GET** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Query Interoperation Account by secondary identifier|
|[**getAccountDetails**](#getaccountdetails) | **GET** /v1/interoperation/accounts/{accountId} | Query Interoperation Account details|
|[**getAccountIdentifiers**](#getaccountidentifiers) | **GET** /v1/interoperation/accounts/{accountId}/identifiers | Query Interoperation secondary identifiers by Account Id|
|[**getAccountTransactions**](#getaccounttransactions) | **GET** /v1/interoperation/accounts/{accountId}/transactions | Query transactions by Account Id|
|[**getClientKyc**](#getclientkyc) | **GET** /v1/interoperation/accounts/{accountId}/kyc | Query KYC by Account Id|
|[**getQuote**](#getquote) | **GET** /v1/interoperation/transactions/{transactionCode}/quotes/{quoteCode} | Query Interoperation Quote|
|[**getTransactionRequest**](#gettransactionrequest) | **GET** /v1/interoperation/transactions/{transactionCode}/requests/{requestCode} | Query Interoperation Transaction Request|
|[**getTransfer**](#gettransfer) | **GET** /v1/interoperation/transactions/{transactionCode}/transfers/{transferCode} | Query Interoperation Transfer|
|[**health**](#health) | **GET** /v1/interoperation/health | Query Interoperation Health Request|
|[**loanRepayment**](#loanrepayment) | **POST** /v1/interoperation/transactions/{accountId}/loanrepayment | Disburse Loan by Account Id|
|[**performTransfer**](#performtransfer) | **POST** /v1/interoperation/transfers | Prepare Interoperation Transfer|
|[**registerAccountIdentifier**](#registeraccountidentifier) | **POST** /v1/interoperation/parties/{idType}/{idValue} | Interoperation Identifier registration|
|[**registerAccountIdentifier1**](#registeraccountidentifier1) | **POST** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Interoperation Identifier registration|

# **createQuote**
> InteropQuoteResponseData createQuote(interopQuoteRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropQuoteRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let interopQuoteRequestData: InteropQuoteRequestData; //

const { status, data } = await apiInstance.createQuote(
    interopQuoteRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopQuoteRequestData** | **InteropQuoteRequestData**|  | |


### Return type

**InteropQuoteResponseData**

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

# **createTransactionRequest**
> InteropTransactionRequestResponseData createTransactionRequest(interopTransactionRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropTransactionRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let interopTransactionRequestData: InteropTransactionRequestData; //

const { status, data } = await apiInstance.createTransactionRequest(
    interopTransactionRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopTransactionRequestData** | **InteropTransactionRequestData**|  | |


### Return type

**InteropTransactionRequestResponseData**

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

# **deleteAccountIdentifier**
> InteropIdentifierAccountResponseData deleteAccountIdentifier(interopIdentifierRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropIdentifierRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)
let interopIdentifierRequestData: InteropIdentifierRequestData; //

const { status, data } = await apiInstance.deleteAccountIdentifier(
    idType,
    idValue,
    interopIdentifierRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopIdentifierRequestData** | **InteropIdentifierRequestData**|  | |
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

# **deleteAccountIdentifier1**
> InteropIdentifierAccountResponseData deleteAccountIdentifier1(interopIdentifierRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropIdentifierRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)
let subIdOrType: string; //subIdOrType (default to undefined)
let interopIdentifierRequestData: InteropIdentifierRequestData; //

const { status, data } = await apiInstance.deleteAccountIdentifier1(
    idType,
    idValue,
    subIdOrType,
    interopIdentifierRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopIdentifierRequestData** | **InteropIdentifierRequestData**|  | |
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|
| **subIdOrType** | [**string**] | subIdOrType | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

# **disburseLoan**
> string disburseLoan()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)

const { status, data } = await apiInstance.disburseLoan(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|


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

# **getAccountByIdentifier**
> InteropIdentifierAccountResponseData getAccountByIdentifier()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)

const { status, data } = await apiInstance.getAccountByIdentifier(
    idType,
    idValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

# **getAccountByIdentifier1**
> InteropIdentifierAccountResponseData getAccountByIdentifier1()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)
let subIdOrType: string; //subIdOrType (default to undefined)

const { status, data } = await apiInstance.getAccountByIdentifier1(
    idType,
    idValue,
    subIdOrType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|
| **subIdOrType** | [**string**] | subIdOrType | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

# **getAccountDetails**
> InteropAccountData getAccountDetails()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)

const { status, data } = await apiInstance.getAccountDetails(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|


### Return type

**InteropAccountData**

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

# **getAccountIdentifiers**
> InteropIdentifiersResponseData getAccountIdentifiers()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)

const { status, data } = await apiInstance.getAccountIdentifiers(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|


### Return type

**InteropIdentifiersResponseData**

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

# **getAccountTransactions**
> InteropTransactionsData getAccountTransactions()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)
let debit: boolean; //debit (optional) (default to true)
let credit: boolean; //credit (optional) (default to false)
let fromBookingDateTime: string; //fromBookingDateTime (optional) (default to undefined)
let toBookingDateTime: string; //toBookingDateTime (optional) (default to undefined)

const { status, data } = await apiInstance.getAccountTransactions(
    accountId,
    debit,
    credit,
    fromBookingDateTime,
    toBookingDateTime
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|
| **debit** | [**boolean**] | debit | (optional) defaults to true|
| **credit** | [**boolean**] | credit | (optional) defaults to false|
| **fromBookingDateTime** | [**string**] | fromBookingDateTime | (optional) defaults to undefined|
| **toBookingDateTime** | [**string**] | toBookingDateTime | (optional) defaults to undefined|


### Return type

**InteropTransactionsData**

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

# **getClientKyc**
> InteropKycResponseData getClientKyc()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)

const { status, data } = await apiInstance.getClientKyc(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|


### Return type

**InteropKycResponseData**

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

# **getQuote**
> InteropQuoteResponseData getQuote()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let transactionCode: string; //transactionCode (default to undefined)
let quoteCode: string; //quoteCode (default to undefined)

const { status, data } = await apiInstance.getQuote(
    transactionCode,
    quoteCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionCode** | [**string**] | transactionCode | defaults to undefined|
| **quoteCode** | [**string**] | quoteCode | defaults to undefined|


### Return type

**InteropQuoteResponseData**

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

# **getTransactionRequest**
> InteropTransactionRequestResponseData getTransactionRequest()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let transactionCode: string; //transactionCode (default to undefined)
let requestCode: string; //requestCode (default to undefined)

const { status, data } = await apiInstance.getTransactionRequest(
    transactionCode,
    requestCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionCode** | [**string**] | transactionCode | defaults to undefined|
| **requestCode** | [**string**] | requestCode | defaults to undefined|


### Return type

**InteropTransactionRequestResponseData**

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

# **getTransfer**
> InteropTransferResponseData getTransfer()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let transactionCode: string; //transactionCode (default to undefined)
let transferCode: string; //transferCode (default to undefined)

const { status, data } = await apiInstance.getTransfer(
    transactionCode,
    transferCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionCode** | [**string**] | transactionCode | defaults to undefined|
| **transferCode** | [**string**] | transferCode | defaults to undefined|


### Return type

**InteropTransferResponseData**

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

# **health**
> health()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

const { status, data } = await apiInstance.health();
```

### Parameters
This endpoint does not have any parameters.


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

# **loanRepayment**
> string loanRepayment()


### Example

```typescript
import {
    InterOperationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let accountId: string; //accountId (default to undefined)

const { status, data } = await apiInstance.loanRepayment(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**string**] | accountId | defaults to undefined|


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

# **performTransfer**
> InteropTransferResponseData performTransfer(interopTransferRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropTransferRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let interopTransferRequestData: InteropTransferRequestData; //
let action: string; //action (optional) (default to undefined)

const { status, data } = await apiInstance.performTransfer(
    interopTransferRequestData,
    action
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopTransferRequestData** | **InteropTransferRequestData**|  | |
| **action** | [**string**] | action | (optional) defaults to undefined|


### Return type

**InteropTransferResponseData**

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

# **registerAccountIdentifier**
> InteropIdentifierAccountResponseData registerAccountIdentifier(interopIdentifierRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropIdentifierRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)
let interopIdentifierRequestData: InteropIdentifierRequestData; //

const { status, data } = await apiInstance.registerAccountIdentifier(
    idType,
    idValue,
    interopIdentifierRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopIdentifierRequestData** | **InteropIdentifierRequestData**|  | |
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

# **registerAccountIdentifier1**
> InteropIdentifierAccountResponseData registerAccountIdentifier1(interopIdentifierRequestData)


### Example

```typescript
import {
    InterOperationApi,
    Configuration,
    InteropIdentifierRequestData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterOperationApi(configuration);

let idType: 'MSISDN' | 'EMAIL' | 'PERSONAL_ID' | 'BUSINESS' | 'DEVICE' | 'ACCOUNT_ID' | 'IBAN' | 'ALIAS' | 'BBAN'; //idType (default to undefined)
let idValue: string; //idValue (default to undefined)
let subIdOrType: string; //subIdOrType (default to undefined)
let interopIdentifierRequestData: InteropIdentifierRequestData; //

const { status, data } = await apiInstance.registerAccountIdentifier1(
    idType,
    idValue,
    subIdOrType,
    interopIdentifierRequestData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interopIdentifierRequestData** | **InteropIdentifierRequestData**|  | |
| **idType** | [**&#39;MSISDN&#39; | &#39;EMAIL&#39; | &#39;PERSONAL_ID&#39; | &#39;BUSINESS&#39; | &#39;DEVICE&#39; | &#39;ACCOUNT_ID&#39; | &#39;IBAN&#39; | &#39;ALIAS&#39; | &#39;BBAN&#39;**]**Array<&#39;MSISDN&#39; &#124; &#39;EMAIL&#39; &#124; &#39;PERSONAL_ID&#39; &#124; &#39;BUSINESS&#39; &#124; &#39;DEVICE&#39; &#124; &#39;ACCOUNT_ID&#39; &#124; &#39;IBAN&#39; &#124; &#39;ALIAS&#39; &#124; &#39;BBAN&#39;>** | idType | defaults to undefined|
| **idValue** | [**string**] | idValue | defaults to undefined|
| **subIdOrType** | [**string**] | subIdOrType | defaults to undefined|


### Return type

**InteropIdentifierAccountResponseData**

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

