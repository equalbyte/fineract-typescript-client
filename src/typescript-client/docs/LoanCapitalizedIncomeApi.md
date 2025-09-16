# LoanCapitalizedIncomeApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchCapitalizedIncomeDetails**](#fetchcapitalizedincomedetails) | **GET** /v1/loans/{loanId}/capitalized-incomes | Fetch the Capitalized Income related informations|
|[**fetchCapitalizedIncomeDetailsByExternalId**](#fetchcapitalizedincomedetailsbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes | Get the amortization details of Capitalized Income for a loan by external ID|
|[**fetchLoanCapitalizedIncomeData**](#fetchloancapitalizedincomedata) | **GET** /v1/loans/{loanId}/deferredincome | Fetch the Capitalized Income related informations|
|[**fetchLoanCapitalizedIncomeDataByExternalId**](#fetchloancapitalizedincomedatabyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/deferredincome | Get the amortization details of Capitalized Income for a loan by external ID|
|[**getCapitalizedIncomeAllocationDataByExternalIds**](#getcapitalizedincomeallocationdatabyexternalids) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes/external-id/{loanTransactionExternalId} | Retrieve a capitalized income allocation data|
|[**getCapitalizedIncomeAllocationDataByLoanExternalId**](#getcapitalizedincomeallocationdatabyloanexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes/{loanTransactionId} | Retrieve a capitalized income allocation data|
|[**getCapitalizedIncomeAllocationDataByTransactionExternalId**](#getcapitalizedincomeallocationdatabytransactionexternalid) | **GET** /v1/loans/{loanId}/capitalized-incomes/external-id/{loanTransactionExternalId} | Retrieve a capitalized income allocation data|
|[**retrieveCapitalizedIncomeAllocationData**](#retrievecapitalizedincomeallocationdata) | **GET** /v1/loans/{loanId}/capitalized-incomes/{loanTransactionId} | Retrieve a capitalized income allocation data|

# **fetchCapitalizedIncomeDetails**
> Array<CapitalizedIncomeDetails> fetchCapitalizedIncomeDetails()


### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.fetchCapitalizedIncomeDetails(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<CapitalizedIncomeDetails>**

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

# **fetchCapitalizedIncomeDetailsByExternalId**
> Array<CapitalizedIncomeDetails> fetchCapitalizedIncomeDetailsByExternalId()


### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.fetchCapitalizedIncomeDetailsByExternalId(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<CapitalizedIncomeDetails>**

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

# **fetchLoanCapitalizedIncomeData**
> LoanCapitalizedIncomeData fetchLoanCapitalizedIncomeData()


### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.fetchLoanCapitalizedIncomeData(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**LoanCapitalizedIncomeData**

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

# **fetchLoanCapitalizedIncomeDataByExternalId**
> LoanCapitalizedIncomeData fetchLoanCapitalizedIncomeDataByExternalId()


### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.fetchLoanCapitalizedIncomeDataByExternalId(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**LoanCapitalizedIncomeData**

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

# **getCapitalizedIncomeAllocationDataByExternalIds**
> LoanAmortizationAllocationResponse getCapitalizedIncomeAllocationDataByExternalIds()

Retrieves capitalized income allocation data according to the Loan external ID and Loan Transaction external IDExample Requests:  /loans/external-id/1/capitalized-incomes/1   /loans/external-id/1/capitalized-incomes/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanTransactionExternalId: string; //loanTransactionExternalId (default to undefined)

const { status, data } = await apiInstance.getCapitalizedIncomeAllocationDataByExternalIds(
    loanExternalId,
    loanTransactionExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanTransactionExternalId** | [**string**] | loanTransactionExternalId | defaults to undefined|


### Return type

**LoanAmortizationAllocationResponse**

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

# **getCapitalizedIncomeAllocationDataByLoanExternalId**
> LoanAmortizationAllocationResponse getCapitalizedIncomeAllocationDataByLoanExternalId()

Retrieves capitalized income allocation data according to the Loan external ID and Loan Transaction IDExample Requests:  /loans/external-id/1/capitalized-incomes/1   /loans/external-id/1/capitalized-incomes/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanTransactionId: number; //loanTransactionId (default to undefined)

const { status, data } = await apiInstance.getCapitalizedIncomeAllocationDataByLoanExternalId(
    loanExternalId,
    loanTransactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanTransactionId** | [**number**] | loanTransactionId | defaults to undefined|


### Return type

**LoanAmortizationAllocationResponse**

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

# **getCapitalizedIncomeAllocationDataByTransactionExternalId**
> LoanAmortizationAllocationResponse getCapitalizedIncomeAllocationDataByTransactionExternalId()

Retrieves capitalized income allocation data according to the Loan ID and Loan Transaction external IDExample Requests:  /loans/1/capitalized-incomes/external-id/1   /loans/1/capitalized-incomes/external-id/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanTransactionExternalId: string; //loanTransactionExternalId (default to undefined)

const { status, data } = await apiInstance.getCapitalizedIncomeAllocationDataByTransactionExternalId(
    loanId,
    loanTransactionExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanTransactionExternalId** | [**string**] | loanTransactionExternalId | defaults to undefined|


### Return type

**LoanAmortizationAllocationResponse**

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

# **retrieveCapitalizedIncomeAllocationData**
> LoanAmortizationAllocationResponse retrieveCapitalizedIncomeAllocationData()

Retrieves capitalized income allocation data according to the Loan ID and Loan Transaction IDExample Requests:  /loans/1/capitalized-incomes/1   /loans/1/capitalized-incomes/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanCapitalizedIncomeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCapitalizedIncomeApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanTransactionId: number; //loanTransactionId (default to undefined)

const { status, data } = await apiInstance.retrieveCapitalizedIncomeAllocationData(
    loanId,
    loanTransactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanTransactionId** | [**number**] | loanTransactionId | defaults to undefined|


### Return type

**LoanAmortizationAllocationResponse**

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

