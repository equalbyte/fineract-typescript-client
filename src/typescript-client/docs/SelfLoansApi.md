# SelfLoansApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateLoanScheduleOrSubmitLoanApplication1**](#calculateloanscheduleorsubmitloanapplication1) | **POST** /v1/self/loans | Calculate Loan Repayment Schedule | Submit a new Loan Application|
|[**modifyLoanApplication2**](#modifyloanapplication2) | **PUT** /v1/self/loans/{loanId} | Update a Loan Application|
|[**retrieveAllLoanCharges2**](#retrieveallloancharges2) | **GET** /v1/self/loans/{loanId}/charges | List Loan Charges|
|[**retrieveGuarantorDetails2**](#retrieveguarantordetails2) | **GET** /v1/self/loans/{loanId}/guarantors | |
|[**retrieveLoan2**](#retrieveloan2) | **GET** /v1/self/loans/{loanId} | Retrieve a Loan|
|[**retrieveLoanCharge4**](#retrieveloancharge4) | **GET** /v1/self/loans/{loanId}/charges/{chargeId} | Retrieve a Loan Charge|
|[**retrieveTransaction1**](#retrievetransaction1) | **GET** /v1/self/loans/{loanId}/transactions/{transactionId} | Retrieve a Loan Transaction Details|
|[**stateTransitions2**](#statetransitions2) | **POST** /v1/self/loans/{loanId} | Applicant Withdraws from Loan Application|
|[**template17**](#template17) | **GET** /v1/self/loans/template | Retrieve Loan Details Template|

# **calculateLoanScheduleOrSubmitLoanApplication1**
> PostSelfLoansResponse calculateLoanScheduleOrSubmitLoanApplication1(postSelfLoansRequest)

Calculate Loan Repayment Schedule:  Calculates Loan Repayment Schedule  Mandatory Fields: productId, principal, loanTermFrequency, loanTermFrequencyType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, expectedDisbursementDate, transactionProcessingStrategyCode  Submit a new Loan Application:  Mandatory Fields: clientId, productId, principal, loanTermFrequency, loanTermFrequencyType, loanType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyCode, expectedDisbursementDate, submittedOnDate, loanType  Additional Mandatory Fields if interest recalculation is enabled for product and Rest frequency not same as repayment period: recalculationRestFrequencyDate  Additional Mandatory Fields if interest recalculation with interest/fee compounding is enabled for product and compounding frequency not same as repayment period: recalculationCompoundingFrequencyDate  Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type loan: datatables  Optional Fields: graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, linkAccountId, allowPartialPeriodInterestCalcualtion, fixedEmiAmount, maxOutstandingLoanBalance, disbursementData, graceOnArrearsAgeing, createStandingInstructionAtDisbursement (requires linkedAccountId if set to true)  Showing request/response for \'Submit a new Loan Application\'

### Example

```typescript
import {
    SelfLoansApi,
    Configuration,
    PostSelfLoansRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let postSelfLoansRequest: PostSelfLoansRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.calculateLoanScheduleOrSubmitLoanApplication1(
    postSelfLoansRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSelfLoansRequest** | **PostSelfLoansRequest**|  | |
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostSelfLoansResponse**

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

# **modifyLoanApplication2**
> PutSelfLoansLoanIdResponse modifyLoanApplication2(putSelfLoansLoanIdRequest)

Loan application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method.

### Example

```typescript
import {
    SelfLoansApi,
    Configuration,
    PutSelfLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let putSelfLoansLoanIdRequest: PutSelfLoansLoanIdRequest; //

const { status, data } = await apiInstance.modifyLoanApplication2(
    loanId,
    putSelfLoansLoanIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSelfLoansLoanIdRequest** | **PutSelfLoansLoanIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**PutSelfLoansLoanIdResponse**

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

# **retrieveAllLoanCharges2**
> Array<GetSelfLoansLoanIdChargesResponse> retrieveAllLoanCharges2()

Lists loan Charges  Example Requests:  self/loans/1/charges   self/loans/1/charges?fields=name,amountOrPercentage

### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveAllLoanCharges2(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetSelfLoansLoanIdChargesResponse>**

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

# **retrieveGuarantorDetails2**
> Array<GuarantorData> retrieveGuarantorDetails2()


### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveGuarantorDetails2(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

**Array<GuarantorData>**

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

# **retrieveLoan2**
> GetSelfLoansLoanIdResponse retrieveLoan2()

Retrieves a Loan  Example Requests:  self/loans/1   self/loans/1?fields=id,principal,annualInterestRate   self/loans/1?fields=id,principal,annualInterestRate&associations=repaymentSchedule,transactions

### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveLoan2(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**GetSelfLoansLoanIdResponse**

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

# **retrieveLoanCharge4**
> GetSelfLoansLoanIdChargesResponse retrieveLoanCharge4()

Retrieves a Loan Charge  Example Requests:  self/loans/1/charges/1   self/loans/1/charges/1?fields=name,amountOrPercentage

### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanCharge4(
    loanId,
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**GetSelfLoansLoanIdChargesResponse**

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

# **retrieveTransaction1**
> GetSelfLoansLoanIdTransactionsTransactionIdResponse retrieveTransaction1()

Retrieves a Loan Transaction DetailsExample Request:  self/loans/5/transactions/3

### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let fields: string; //Optional Loan Transaction attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransaction1(
    loanId,
    transactionId,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **fields** | [**string**] | Optional Loan Transaction attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetSelfLoansLoanIdTransactionsTransactionIdResponse**

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

# **stateTransitions2**
> PostSelfLoansLoanIdResponse stateTransitions2(postSelfLoansLoanIdRequest)

Applicant Withdraws from Loan Application  Mandatory Fields: withdrawnOnDate

### Example

```typescript
import {
    SelfLoansApi,
    Configuration,
    PostSelfLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let postSelfLoansLoanIdRequest: PostSelfLoansLoanIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.stateTransitions2(
    loanId,
    postSelfLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSelfLoansLoanIdRequest** | **PostSelfLoansLoanIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostSelfLoansLoanIdResponse**

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

# **template17**
> GetSelfLoansTemplateResponse template17()

Retrieves Loan Details Template  This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists  Example Requests:  self/loans/template?templateType=individual&clientId=1   self/loans/template?templateType=individual&clientId=1&productId=1

### Example

```typescript
import {
    SelfLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoansApi(configuration);

let clientId: number; //clientId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let templateType: string; //templateType (optional) (default to undefined)

const { status, data } = await apiInstance.template17(
    clientId,
    productId,
    templateType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **productId** | [**number**] | productId | (optional) defaults to undefined|
| **templateType** | [**string**] | templateType | (optional) defaults to undefined|


### Return type

**GetSelfLoansTemplateResponse**

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

