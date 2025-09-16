# FixedDepositProductApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create11**](#create11) | **POST** /v1/fixeddepositproducts | Create a Fixed Deposit Product|
|[**delete15**](#delete15) | **DELETE** /v1/fixeddepositproducts/{productId} | Delete a Fixed Deposit Product|
|[**retrieveAll30**](#retrieveall30) | **GET** /v1/fixeddepositproducts | List Fixed Deposit Products|
|[**retrieveOne20**](#retrieveone20) | **GET** /v1/fixeddepositproducts/{productId} | Retrieve a Fixed Deposit Product|
|[**retrieveTemplate15**](#retrievetemplate15) | **GET** /v1/fixeddepositproducts/template | |
|[**update17**](#update17) | **PUT** /v1/fixeddepositproducts/{productId} | Update a Fixed Deposit Product|

# **create11**
> PostFixedDepositProductsResponse create11(postFixedDepositProductsRequest)

Creates a Fixed Deposit Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minDepositTerm, minDepositTermTypeId, accountingRule  Optional Fields: lockinPeriodFrequency, lockinPeriodFrequencyType, maxDepositTerm, maxDepositTermTypeId, inMultiplesOfDepositTerm, inMultiplesOfDepositTermTypeId, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, charges, charts, , withHoldTax, taxGroupId   Mandatory Fields for Cash based accounting (accountingRule = 2): savingsReferenceAccountId, savingsControlAccountId, interestOnSavingsAccountId, incomeFromFeeAccountId, transfersInSuspenseAccountId, incomeFromPenaltyAccountId

### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration,
    PostFixedDepositProductsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

let postFixedDepositProductsRequest: PostFixedDepositProductsRequest; //

const { status, data } = await apiInstance.create11(
    postFixedDepositProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postFixedDepositProductsRequest** | **PostFixedDepositProductsRequest**|  | |


### Return type

**PostFixedDepositProductsResponse**

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

# **delete15**
> DeleteFixedDepositProductsProductIdResponse delete15()

Deletes a Fixed Deposit Product

### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.delete15(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**DeleteFixedDepositProductsProductIdResponse**

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

# **retrieveAll30**
> Array<GetFixedDepositProductsResponse> retrieveAll30()

Lists Fixed Deposit Products  Example Requests:  fixeddepositproducts   fixeddepositproducts?fields=name

### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

const { status, data } = await apiInstance.retrieveAll30();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetFixedDepositProductsResponse>**

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

# **retrieveOne20**
> GetFixedDepositProductsProductIdResponse retrieveOne20()

Retrieves a Fixed Deposit Product  Example Requests:  fixeddepositproducts/1   fixeddepositproducts/1?template=true   fixeddepositproducts/1?fields=name,description

### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.retrieveOne20(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**GetFixedDepositProductsProductIdResponse**

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

# **retrieveTemplate15**
> string retrieveTemplate15()


### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate15();
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

# **update17**
> PutFixedDepositProductsProductIdResponse update17(putFixedDepositProductsProductIdRequest)

Updates a Fixed Deposit Product

### Example

```typescript
import {
    FixedDepositProductApi,
    Configuration,
    PutFixedDepositProductsProductIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositProductApi(configuration);

let productId: number; //productId (default to undefined)
let putFixedDepositProductsProductIdRequest: PutFixedDepositProductsProductIdRequest; //

const { status, data } = await apiInstance.update17(
    productId,
    putFixedDepositProductsProductIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putFixedDepositProductsProductIdRequest** | **PutFixedDepositProductsProductIdRequest**|  | |
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**PutFixedDepositProductsProductIdResponse**

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

