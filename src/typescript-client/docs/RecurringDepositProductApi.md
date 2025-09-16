# RecurringDepositProductApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create12**](#create12) | **POST** /v1/recurringdepositproducts | Create a Recurring Deposit Product|
|[**delete17**](#delete17) | **DELETE** /v1/recurringdepositproducts/{productId} | Delete a Recurring Deposit Product|
|[**retrieveAll32**](#retrieveall32) | **GET** /v1/recurringdepositproducts | List Recuring Deposit Products|
|[**retrieveOne23**](#retrieveone23) | **GET** /v1/recurringdepositproducts/{productId} | Retrieve a Recurring Deposit Product|
|[**retrieveTemplate17**](#retrievetemplate17) | **GET** /v1/recurringdepositproducts/template | |
|[**update19**](#update19) | **PUT** /v1/recurringdepositproducts/{productId} | Update a Recurring Deposit Product|

# **create12**
> PostRecurringDepositProductsResponse create12(postRecurringDepositProductsRequest)

Creates a Recurring Deposit Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minDepositTerm, minDepositTermTypeId, recurringDepositFrequency, recurringDepositFrequencyTypeId, accountingRule, depositAmount  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: lockinPeriodFrequency, lockinPeriodFrequencyType, maxDepositTerm, maxDepositTermTypeId, inMultiplesOfDepositTerm, inMultiplesOfDepositTermTypeId, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, charts, minDepositAmount, maxDepositAmount, withHoldTax, taxGroupId

### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration,
    PostRecurringDepositProductsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

let postRecurringDepositProductsRequest: PostRecurringDepositProductsRequest; //

const { status, data } = await apiInstance.create12(
    postRecurringDepositProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRecurringDepositProductsRequest** | **PostRecurringDepositProductsRequest**|  | |


### Return type

**PostRecurringDepositProductsResponse**

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

# **delete17**
> DeleteRecurringDepositProductsProductIdResponse delete17()

Deletes a Recurring Deposit Product

### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.delete17(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**DeleteRecurringDepositProductsProductIdResponse**

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

# **retrieveAll32**
> Array<GetRecurringDepositProductsResponse> retrieveAll32()

Lists Recuring Deposit Products  Example Requests:  recurringdepositproducts   recurringdepositproducts?fields=name

### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

const { status, data } = await apiInstance.retrieveAll32();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetRecurringDepositProductsResponse>**

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

# **retrieveOne23**
> GetRecurringDepositProductsProductIdResponse retrieveOne23()

Retrieves a Recurring Deposit Product  Example Requests:  recurringdepositproducts/1   recurringdepositproducts/1?template=true   recurringdepositproducts/1?fields=name,description

### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.retrieveOne23(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**GetRecurringDepositProductsProductIdResponse**

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

# **retrieveTemplate17**
> string retrieveTemplate17()


### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate17();
```

### Parameters
This endpoint does not have any parameters.


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

# **update19**
> PutRecurringDepositProductsResponse update19(putRecurringDepositProductsRequest)

Updates a Recurring Deposit Product

### Example

```typescript
import {
    RecurringDepositProductApi,
    Configuration,
    PutRecurringDepositProductsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositProductApi(configuration);

let productId: number; //productId (default to undefined)
let putRecurringDepositProductsRequest: PutRecurringDepositProductsRequest; //

const { status, data } = await apiInstance.update19(
    productId,
    putRecurringDepositProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putRecurringDepositProductsRequest** | **PutRecurringDepositProductsRequest**|  | |
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**PutRecurringDepositProductsResponse**

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

