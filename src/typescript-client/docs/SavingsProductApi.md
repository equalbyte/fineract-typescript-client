# SavingsProductApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create13**](#create13) | **POST** /v1/savingsproducts | Create a Savings Product|
|[**delete20**](#delete20) | **DELETE** /v1/savingsproducts/{productId} | Delete a Savings Product|
|[**retrieveAll34**](#retrieveall34) | **GET** /v1/savingsproducts | List Savings Products|
|[**retrieveOne27**](#retrieveone27) | **GET** /v1/savingsproducts/{productId} | Retrieve a Savings Product|
|[**retrieveTemplate20**](#retrievetemplate20) | **GET** /v1/savingsproducts/template | Retrieve Savings Product Template|
|[**update22**](#update22) | **PUT** /v1/savingsproducts/{productId} | Update a Savings Product|

# **create13**
> PostSavingsProductsResponse create13(postSavingsProductsRequest)

Creates a Savings Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId  Optional Fields: minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, allowOverdraft, overdraftLimit, minBalanceForInterestCalculation,withHoldTax,taxGroupId,accountMapping, lienAllowed, maxAllowedLienLimit

### Example

```typescript
import {
    SavingsProductApi,
    Configuration,
    PostSavingsProductsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

let postSavingsProductsRequest: PostSavingsProductsRequest; //

const { status, data } = await apiInstance.create13(
    postSavingsProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsProductsRequest** | **PostSavingsProductsRequest**|  | |


### Return type

**PostSavingsProductsResponse**

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

# **delete20**
> DeleteSavingsProductsProductIdResponse delete20()

Deletes a Savings Product

### Example

```typescript
import {
    SavingsProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.delete20(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**DeleteSavingsProductsProductIdResponse**

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

# **retrieveAll34**
> Array<GetSavingsProductsResponse> retrieveAll34()

Lists Savings Products  Example Requests:  savingsproducts  savingsproducts?fields=name

### Example

```typescript
import {
    SavingsProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

const { status, data } = await apiInstance.retrieveAll34();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetSavingsProductsResponse>**

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

# **retrieveOne27**
> GetSavingsProductsProductIdResponse retrieveOne27()

Retrieves a Savings Product  Example Requests:  savingsproducts/1  savingsproducts/1?template=true  savingsproducts/1?fields=name,description

### Example

```typescript
import {
    SavingsProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.retrieveOne27(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**GetSavingsProductsProductIdResponse**

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

# **retrieveTemplate20**
> GetSavingsProductsTemplateResponse retrieveTemplate20()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request: Account Mapping:  savingsproducts/template

### Example

```typescript
import {
    SavingsProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate20();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSavingsProductsTemplateResponse**

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

# **update22**
> PutSavingsProductsProductIdResponse update22(putSavingsProductsProductIdRequest)

Updates a Savings Product

### Example

```typescript
import {
    SavingsProductApi,
    Configuration,
    PutSavingsProductsProductIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsProductApi(configuration);

let productId: number; //productId (default to undefined)
let putSavingsProductsProductIdRequest: PutSavingsProductsProductIdRequest; //

const { status, data } = await apiInstance.update22(
    productId,
    putSavingsProductsProductIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSavingsProductsProductIdRequest** | **PutSavingsProductsProductIdRequest**|  | |
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**PutSavingsProductsProductIdResponse**

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

