# LoanProductsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLoanProduct**](#createloanproduct) | **POST** /v1/loanproducts | Create a Loan Product|
|[**retrieveAllLoanProducts**](#retrieveallloanproducts) | **GET** /v1/loanproducts | List Loan Products|
|[**retrieveLoanProductDetails**](#retrieveloanproductdetails) | **GET** /v1/loanproducts/{productId} | Retrieve a Loan Product|
|[**retrieveLoanProductDetails1**](#retrieveloanproductdetails1) | **GET** /v1/loanproducts/external-id/{externalProductId} | Retrieve a Loan Product|
|[**retrieveTemplate11**](#retrievetemplate11) | **GET** /v1/loanproducts/template | Retrieve Loan Product Details Template|
|[**updateLoanProduct**](#updateloanproduct) | **PUT** /v1/loanproducts/{productId} | Update a Loan Product|
|[**updateLoanProduct1**](#updateloanproduct1) | **PUT** /v1/loanproducts/external-id/{externalProductId} | Update a Loan Product|

# **createLoanProduct**
> PostLoanProductsResponse createLoanProduct(postLoanProductsRequest)

Depending of the Accounting Rule (accountingRule) selected, additional fields with details of the appropriate Ledger Account identifiers would need to be passed in.  Refer MifosX Accounting Specs Draft for more details regarding the significance of the selected accounting rule  Mandatory Fields: name, shortName, currencyCode, digitsAfterDecimal, inMultiplesOf, principal, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, interestRateFrequencyType, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyCode, accountingRule, isInterestRecalculationEnabled, daysInYearType, daysInMonthType  Optional Fields: inArrearsTolerance, graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, graceOnArrearsAgeing, charges, paymentChannelToFundSourceMappings, feeToIncomeAccountMappings, penaltyToIncomeAccountMappings, chargeOffReasonToExpenseAccountMappings, includeInBorrowerCycle, useBorrowerCycle,principalVariationsForBorrowerCycle, numberOfRepaymentVariationsForBorrowerCycle, interestRateVariationsForBorrowerCycle, multiDisburseLoan,maxTrancheCount, outstandingLoanBalance,overdueDaysForNPA,holdGuaranteeFunds, principalThresholdForLastInstalment, accountMovesOutOfNPAOnlyOnArrearsCompletion, canDefineInstallmentAmount, installmentAmountInMultiplesOf, allowAttributeOverrides, allowPartialPeriodInterestCalcualtion,dueDaysForRepaymentEvent,overDueDaysForRepaymentEvent,enableDownPayment,disbursedAmountPercentageDownPayment,enableAutoRepaymentForDownPayment,repaymentStartDateType,enableBuyDownFee  Additional Mandatory Fields for Cash(2) based accounting: fundSourceAccountId, loanPortfolioAccountId, interestOnLoanAccountId, incomeFromFeeAccountId, incomeFromPenaltyAccountId, writeOffAccountId, transfersInSuspenseAccountId, overpaymentLiabilityAccountId  Additional Mandatory Fields for periodic (3) and upfront (4)accrual accounting: fundSourceAccountId, loanPortfolioAccountId, interestOnLoanAccountId, incomeFromFeeAccountId, incomeFromPenaltyAccountId, writeOffAccountId, receivableInterestAccountId, receivableFeeAccountId, receivablePenaltyAccountId, transfersInSuspenseAccountId, overpaymentLiabilityAccountId  Additional Mandatory Fields if interest recalculation is enabled(true): interestRecalculationCompoundingMethod, rescheduleStrategyMethod, recalculationRestFrequencyType  Additional Optional Fields if interest recalculation is enabled(true): isArrearsBasedOnOriginalSchedule, preClosureInterestCalculationStrategy  Additional Optional Fields if interest recalculation is enabled(true) and recalculationRestFrequencyType is not same as repayment period: recalculationRestFrequencyInterval, recalculationRestFrequencyDate  Additional Optional Fields if interest recalculation is enabled(true) and interestRecalculationCompoundingMethod is enabled: recalculationCompoundingFrequencyType  Additional Optional Fields if interest recalculation is enabled(true) and interestRecalculationCompoundingMethod is enabled and recalculationCompoundingFrequencyType is not same as repayment period: recalculationCompoundingFrequencyInterval, recalculationCompoundingFrequencyDate  Additional Mandatory Fields if Hold Guarantee funds is enabled(true): mandatoryGuarantee  Additional Optional Fields if Hold Guarantee funds is enabled(true): minimumGuaranteeFromOwnFunds,minimumGuaranteeFromGuarantor

### Example

```typescript
import {
    LoanProductsApi,
    Configuration,
    PostLoanProductsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let postLoanProductsRequest: PostLoanProductsRequest; //

const { status, data } = await apiInstance.createLoanProduct(
    postLoanProductsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoanProductsRequest** | **PostLoanProductsRequest**|  | |


### Return type

**PostLoanProductsResponse**

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

# **retrieveAllLoanProducts**
> Array<GetLoanProductsResponse> retrieveAllLoanProducts()

Lists Loan Products  Example Requests:  loanproducts   loanproducts?fields=name,description,interestRateFrequencyType,amortizationType

### Example

```typescript
import {
    LoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

const { status, data } = await apiInstance.retrieveAllLoanProducts();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetLoanProductsResponse>**

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

# **retrieveLoanProductDetails**
> GetLoanProductsProductIdResponse retrieveLoanProductDetails()

Retrieves a Loan Product  Example Requests:  loanproducts/1   loanproducts/1?template=true   loanproducts/1?fields=name,description,numberOfRepayments

### Example

```typescript
import {
    LoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let productId: number; //productId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanProductDetails(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**GetLoanProductsProductIdResponse**

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

# **retrieveLoanProductDetails1**
> GetLoanProductsProductIdResponse retrieveLoanProductDetails1()

Retrieves a Loan Product  Example Requests:  loanproducts/external-id/2075e308-d4a8-44d9-8203-f5a947b8c2f4   loanproducts/external-id/2075e308-d4a8-44d9-8203-f5a947b8c2f4?template=true   loanproducts/external-id/2075e308-d4a8-44d9-8203-f5a947b8c2f4?fields=name,description,numberOfRepayments

### Example

```typescript
import {
    LoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let externalProductId: string; //externalProductId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanProductDetails1(
    externalProductId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalProductId** | [**string**] | externalProductId | defaults to undefined|


### Return type

**GetLoanProductsProductIdResponse**

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

# **retrieveTemplate11**
> GetLoanProductsTemplateResponse retrieveTemplate11()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loanproducts/template

### Example

```typescript
import {
    LoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let isProductMixTemplate: boolean; //isProductMixTemplate (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate11(
    isProductMixTemplate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isProductMixTemplate** | [**boolean**] | isProductMixTemplate | (optional) defaults to undefined|


### Return type

**GetLoanProductsTemplateResponse**

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

# **updateLoanProduct**
> PutLoanProductsProductIdResponse updateLoanProduct(putLoanProductsProductIdRequest)

Updates a Loan Product

### Example

```typescript
import {
    LoanProductsApi,
    Configuration,
    PutLoanProductsProductIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let productId: number; //productId (default to undefined)
let putLoanProductsProductIdRequest: PutLoanProductsProductIdRequest; //

const { status, data } = await apiInstance.updateLoanProduct(
    productId,
    putLoanProductsProductIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoanProductsProductIdRequest** | **PutLoanProductsProductIdRequest**|  | |
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**PutLoanProductsProductIdResponse**

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

# **updateLoanProduct1**
> PutLoanProductsProductIdResponse updateLoanProduct1(putLoanProductsProductIdRequest)

Updates a Loan Product

### Example

```typescript
import {
    LoanProductsApi,
    Configuration,
    PutLoanProductsProductIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanProductsApi(configuration);

let externalProductId: string; //externalProductId (default to undefined)
let putLoanProductsProductIdRequest: PutLoanProductsProductIdRequest; //

const { status, data } = await apiInstance.updateLoanProduct1(
    externalProductId,
    putLoanProductsProductIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoanProductsProductIdRequest** | **PutLoanProductsProductIdRequest**|  | |
| **externalProductId** | [**string**] | externalProductId | defaults to undefined|


### Return type

**PutLoanProductsProductIdResponse**

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

