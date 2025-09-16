# LoanBuyDownFeesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBuyDownFeesAllocationDataByExternalIds**](#getbuydownfeesallocationdatabyexternalids) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees/external-id/{loanTransactionExternalId} | Retrieve a BuyDown Fees allocation data|
|[**getBuyDownFeesAllocationDataByLoanExternalId**](#getbuydownfeesallocationdatabyloanexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees/{loanTransactionId} | Retrieve a BuyDown Fees allocation data|
|[**getBuyDownFeesAllocationDataByTransactionExternalId**](#getbuydownfeesallocationdatabytransactionexternalid) | **GET** /v1/loans/{loanId}/buydown-fees/external-id/{loanTransactionExternalId} | Retrieve a BuyDown Fees allocation data|
|[**retrieveBuyDownFeesAllocationData**](#retrievebuydownfeesallocationdata) | **GET** /v1/loans/{loanId}/buydown-fees/{loanTransactionId} | Retrieve a BuyDown Fees allocation data|
|[**retrieveLoanBuyDownFeeAmortizationDetails**](#retrieveloanbuydownfeeamortizationdetails) | **GET** /v1/loans/{loanId}/buydown-fees | Get the amortization details of Buy Down fees for a loan|
|[**retrieveLoanBuyDownFeeAmortizationDetailsByExternalId**](#retrieveloanbuydownfeeamortizationdetailsbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees | Get the amortization details of Buy Down fees for a loan by external ID|

# **getBuyDownFeesAllocationDataByExternalIds**
> LoanAmortizationAllocationResponse getBuyDownFeesAllocationDataByExternalIds()

Retrieves BuyDown Fees allocation data according to the Loan external ID and Loan Transaction external IDExample Requests:  /loans/external-id/1/buydown-fees/1   /loans/external-id/1/buydown-fees/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanTransactionExternalId: string; //loanTransactionExternalId (default to undefined)

const { status, data } = await apiInstance.getBuyDownFeesAllocationDataByExternalIds(
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

# **getBuyDownFeesAllocationDataByLoanExternalId**
> LoanAmortizationAllocationResponse getBuyDownFeesAllocationDataByLoanExternalId()

Retrieves BuyDown Fees allocation data according to the Loan external ID and Loan Transaction IDExample Requests:  /loans/external-id/1/buydown-fees/1   /loans/external-id/1/buydown-fees/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanTransactionId: number; //loanTransactionId (default to undefined)

const { status, data } = await apiInstance.getBuyDownFeesAllocationDataByLoanExternalId(
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

# **getBuyDownFeesAllocationDataByTransactionExternalId**
> LoanAmortizationAllocationResponse getBuyDownFeesAllocationDataByTransactionExternalId()

Retrieves BuyDown Fees allocation data according to the Loan ID and Loan Transaction external IDExample Requests:  /loans/1/buydown-fees/external-id/1   /loans/1/buydown-fees/external-id/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanTransactionExternalId: string; //loanTransactionExternalId (default to undefined)

const { status, data } = await apiInstance.getBuyDownFeesAllocationDataByTransactionExternalId(
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

# **retrieveBuyDownFeesAllocationData**
> LoanAmortizationAllocationResponse retrieveBuyDownFeesAllocationData()

Retrieves BuyDown Fees allocation data according to the Loan ID and Loan Transaction IDExample Requests:  /loans/1/buydown-fees/1   /loans/1/buydown-fees/1?fields=baseLoanTransaction,unrecognizedAmount

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanTransactionId: number; //loanTransactionId (default to undefined)

const { status, data } = await apiInstance.retrieveBuyDownFeesAllocationData(
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

# **retrieveLoanBuyDownFeeAmortizationDetails**
> Array<BuyDownFeeAmortizationDetails> retrieveLoanBuyDownFeeAmortizationDetails()

Returns a list of all Buy Down fee entries with amortization details for the specified loan.

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanBuyDownFeeAmortizationDetails(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<BuyDownFeeAmortizationDetails>**

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

# **retrieveLoanBuyDownFeeAmortizationDetailsByExternalId**
> Array<BuyDownFeeAmortizationDetails> retrieveLoanBuyDownFeeAmortizationDetailsByExternalId()

Returns a list of all Buy Down fee entries with amortization details for the loan specified by external ID.

### Example

```typescript
import {
    LoanBuyDownFeesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanBuyDownFeesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanBuyDownFeeAmortizationDetailsByExternalId(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<BuyDownFeeAmortizationDetails>**

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

