# LoansApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateLoanScheduleOrSubmitLoanApplication**](#calculateloanscheduleorsubmitloanapplication) | **POST** /v1/loans | Calculate loan repayment schedule | Submit a new Loan Application|
|[**createLoanDelinquencyAction**](#createloandelinquencyaction) | **POST** /v1/loans/{loanId}/delinquency-actions | Adds a new delinquency action for a loan|
|[**createLoanDelinquencyAction1**](#createloandelinquencyaction1) | **POST** /v1/loans/external-id/{loanExternalId}/delinquency-actions | Adds a new delinquency action for a loan|
|[**deleteLoanApplication**](#deleteloanapplication) | **DELETE** /v1/loans/{loanId} | Delete a Loan Application|
|[**deleteLoanApplication1**](#deleteloanapplication1) | **DELETE** /v1/loans/external-id/{loanExternalId} | Delete a Loan Application|
|[**getDelinquencyTagHistory**](#getdelinquencytaghistory) | **GET** /v1/loans/{loanId}/delinquencytags | Retrieve the Loan Delinquency Tag history using the Loan Id|
|[**getDelinquencyTagHistory1**](#getdelinquencytaghistory1) | **GET** /v1/loans/external-id/{loanExternalId}/delinquencytags | Retrieve the Loan Delinquency Tag history using the Loan Id|
|[**getGlimRepaymentTemplate**](#getglimrepaymenttemplate) | **GET** /v1/loans/glimAccount/{glimId} | |
|[**getLoanApprovedAmountHistory**](#getloanapprovedamounthistory) | **GET** /v1/loans/{loanId}/approved-amount | Collects and returns the approved amount modification history for a given loan|
|[**getLoanApprovedAmountHistory1**](#getloanapprovedamounthistory1) | **GET** /v1/loans/external-id/{loanExternalId}/approved-amount | Collects and returns the approved amount modification history for a given loan|
|[**getLoanDelinquencyActions**](#getloandelinquencyactions) | **GET** /v1/loans/{loanId}/delinquency-actions | Retrieve delinquency actions related to the loan|
|[**getLoanDelinquencyActions1**](#getloandelinquencyactions1) | **GET** /v1/loans/external-id/{loanExternalId}/delinquency-actions | Retrieve delinquency actions related to the loan|
|[**getLoanRepaymentTemplate**](#getloanrepaymenttemplate) | **GET** /v1/loans/repayments/downloadtemplate | |
|[**getLoansTemplate**](#getloanstemplate) | **GET** /v1/loans/downloadtemplate | |
|[**glimStateTransitions**](#glimstatetransitions) | **POST** /v1/loans/glimAccount/{glimId} | Approve GLIM Application | Undo GLIM Application Approval | Reject GLIM Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal|
|[**modifyLoanApplication**](#modifyloanapplication) | **PUT** /v1/loans/{loanId} | Modify a loan application|
|[**modifyLoanApplication1**](#modifyloanapplication1) | **PUT** /v1/loans/external-id/{loanExternalId} | Modify a loan application|
|[**modifyLoanApprovedAmount**](#modifyloanapprovedamount) | **PUT** /v1/loans/{loanId}/approved-amount | Modifies the approved amount of the loan|
|[**modifyLoanApprovedAmount1**](#modifyloanapprovedamount1) | **PUT** /v1/loans/external-id/{loanExternalId}/approved-amount | Modifies the approved amount of the loan|
|[**modifyLoanAvailableDisbursementAmount**](#modifyloanavailabledisbursementamount) | **PUT** /v1/loans/{loanId}/available-disbursement-amount | Modifies the available disbursement amount of the loan|
|[**modifyLoanAvailableDisbursementAmount1**](#modifyloanavailabledisbursementamount1) | **PUT** /v1/loans/external-id/{loanExternalId}/available-disbursement-amount | Modifies the available disbursement amount of the loan|
|[**postLoanRepaymentTemplate**](#postloanrepaymenttemplate) | **POST** /v1/loans/repayments/uploadtemplate | |
|[**postLoanTemplate**](#postloantemplate) | **POST** /v1/loans/uploadtemplate | |
|[**retrieveAll27**](#retrieveall27) | **GET** /v1/loans | List Loans|
|[**retrieveApprovalTemplate**](#retrieveapprovaltemplate) | **GET** /v1/loans/{loanId}/template | |
|[**retrieveApprovalTemplate1**](#retrieveapprovaltemplate1) | **GET** /v1/loans/external-id/{loanExternalId}/template | |
|[**retrieveLoan**](#retrieveloan) | **GET** /v1/loans/{loanId} | Retrieve a Loan|
|[**retrieveLoan1**](#retrieveloan1) | **GET** /v1/loans/external-id/{loanExternalId} | Retrieve a Loan|
|[**stateTransitions**](#statetransitions) | **POST** /v1/loans/{loanId} | Approve Loan Application | Recover Loan Guarantee | Undo Loan Application Approval | Assign a Loan Officer | Unassign a Loan Officer | Reject Loan Application | Applicant Withdraws from Loan Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal|
|[**stateTransitions1**](#statetransitions1) | **POST** /v1/loans/external-id/{loanExternalId} | Approve Loan Application | Recover Loan Guarantee | Undo Loan Application Approval | Assign a Loan Officer | Unassign a Loan Officer | Reject Loan Application | Applicant Withdraws from Loan Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal|
|[**template10**](#template10) | **GET** /v1/loans/template | Retrieve Loan Details Template|

# **calculateLoanScheduleOrSubmitLoanApplication**
> PostLoansResponse calculateLoanScheduleOrSubmitLoanApplication(postLoansRequest)

It calculates the loan repayment Schedule Submits a new loan application Mandatory Fields: clientId, productId, principal, loanTermFrequency, loanTermFrequencyType, loanType, numberOfRepayments, repaymentEvery, repaymentFrequencyType, interestRatePerPeriod, amortizationType, interestType, interestCalculationPeriodType, transactionProcessingStrategyCode, expectedDisbursementDate, submittedOnDate, loanType Optional Fields: graceOnPrincipalPayment, graceOnInterestPayment, graceOnInterestCharged, linkAccountId, allowPartialPeriodInterestCalcualtion, fixedEmiAmount, maxOutstandingLoanBalance, disbursementData, graceOnArrearsAgeing, createStandingInstructionAtDisbursement (requires linkedAccountId if set to true) Additional Mandatory Fields if interest recalculation is enabled for product and Rest frequency not same as repayment period: recalculationRestFrequencyDate Additional Mandatory Fields if interest recalculation with interest/fee compounding is enabled for product and compounding frequency not same as repayment period: recalculationCompoundingFrequencyDate Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type loan: datatables

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let postLoansRequest: PostLoansRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.calculateLoanScheduleOrSubmitLoanApplication(
    postLoansRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansRequest** | **PostLoansRequest**|  | |
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansResponse**

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

# **createLoanDelinquencyAction**
> PostLoansDelinquencyActionResponse createLoanDelinquencyAction(postLoansDelinquencyActionRequest)


### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansDelinquencyActionRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let postLoansDelinquencyActionRequest: PostLoansDelinquencyActionRequest; //

const { status, data } = await apiInstance.createLoanDelinquencyAction(
    loanId,
    postLoansDelinquencyActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansDelinquencyActionRequest** | **PostLoansDelinquencyActionRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**PostLoansDelinquencyActionResponse**

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

# **createLoanDelinquencyAction1**
> PostLoansDelinquencyActionResponse createLoanDelinquencyAction1(postLoansDelinquencyActionRequest)


### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansDelinquencyActionRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let postLoansDelinquencyActionRequest: PostLoansDelinquencyActionRequest; //

const { status, data } = await apiInstance.createLoanDelinquencyAction1(
    loanExternalId,
    postLoansDelinquencyActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansDelinquencyActionRequest** | **PostLoansDelinquencyActionRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**PostLoansDelinquencyActionResponse**

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

# **deleteLoanApplication**
> DeleteLoansLoanIdResponse deleteLoanApplication()

Note: Only loans in \"Submitted and awaiting approval\" status can be deleted.

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.deleteLoanApplication(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**DeleteLoansLoanIdResponse**

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

# **deleteLoanApplication1**
> DeleteLoansLoanIdResponse deleteLoanApplication1()

Note: Only loans in \"Submitted and awaiting approval\" status can be deleted.

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.deleteLoanApplication1(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**DeleteLoansLoanIdResponse**

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

# **getDelinquencyTagHistory**
> Array<GetDelinquencyTagHistoryResponse> getDelinquencyTagHistory()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.getDelinquencyTagHistory(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetDelinquencyTagHistoryResponse>**

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

# **getDelinquencyTagHistory1**
> Array<GetDelinquencyTagHistoryResponse> getDelinquencyTagHistory1()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.getDelinquencyTagHistory1(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<GetDelinquencyTagHistoryResponse>**

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

# **getGlimRepaymentTemplate**
> string getGlimRepaymentTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let glimId: number; // (default to undefined)

const { status, data } = await apiInstance.getGlimRepaymentTemplate(
    glimId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **glimId** | [**number**] |  | defaults to undefined|


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

# **getLoanApprovedAmountHistory**
> Array<LoanApprovedAmountHistoryData> getLoanApprovedAmountHistory()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.getLoanApprovedAmountHistory(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<LoanApprovedAmountHistoryData>**

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

# **getLoanApprovedAmountHistory1**
> Array<LoanApprovedAmountHistoryData> getLoanApprovedAmountHistory1()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.getLoanApprovedAmountHistory1(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<LoanApprovedAmountHistoryData>**

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

# **getLoanDelinquencyActions**
> Array<GetDelinquencyActionsResponse> getLoanDelinquencyActions()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.getLoanDelinquencyActions(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetDelinquencyActionsResponse>**

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

# **getLoanDelinquencyActions1**
> Array<GetDelinquencyActionsResponse> getLoanDelinquencyActions1()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.getLoanDelinquencyActions1(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<GetDelinquencyActionsResponse>**

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

# **getLoanRepaymentTemplate**
> getLoanRepaymentTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getLoanRepaymentTemplate(
    officeId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLoansTemplate**
> getLoansTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getLoansTemplate(
    officeId,
    staffId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **glimStateTransitions**
> PostLoansLoanIdResponse glimStateTransitions(postLoansLoanIdRequest)

Approve GLIM Application: Mandatory Fields: approvedOnDate Optional Fields: approvedLoanAmount and expectedDisbursementDate Approves the GLIM application  Undo GLIM Application Approval: Undoes the GLIM Application Approval  Reject GLIM Application: Mandatory Fields: rejectedOnDate Allows you to reject the GLIM application  Disburse Loan: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the Loan  Disburse Loan To Savings Account: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the loan to Saving Account  Undo Loan Disbursal: Undoes the Loan Disbursal 

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let glimId: number; // (default to undefined)
let postLoansLoanIdRequest: PostLoansLoanIdRequest; //
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.glimStateTransitions(
    glimId,
    postLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdRequest** | **PostLoansLoanIdRequest**|  | |
| **glimId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdResponse**

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

# **modifyLoanApplication**
> PutLoansLoanIdResponse modifyLoanApplication(putLoansLoanIdRequest)

Loan application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method.

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let putLoansLoanIdRequest: PutLoansLoanIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.modifyLoanApplication(
    loanId,
    putLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdRequest** | **PutLoansLoanIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PutLoansLoanIdResponse**

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

# **modifyLoanApplication1**
> PutLoansLoanIdResponse modifyLoanApplication1(putLoansLoanIdRequest)

Loan application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method.

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let putLoansLoanIdRequest: PutLoansLoanIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.modifyLoanApplication1(
    loanExternalId,
    putLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdRequest** | **PutLoansLoanIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PutLoansLoanIdResponse**

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

# **modifyLoanApprovedAmount**
> PutLoansApprovedAmountResponse modifyLoanApprovedAmount(putLoansApprovedAmountRequest)


### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansApprovedAmountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let putLoansApprovedAmountRequest: PutLoansApprovedAmountRequest; //

const { status, data } = await apiInstance.modifyLoanApprovedAmount(
    loanId,
    putLoansApprovedAmountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansApprovedAmountRequest** | **PutLoansApprovedAmountRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**PutLoansApprovedAmountResponse**

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

# **modifyLoanApprovedAmount1**
> PutLoansApprovedAmountResponse modifyLoanApprovedAmount1(putLoansApprovedAmountRequest)


### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansApprovedAmountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let putLoansApprovedAmountRequest: PutLoansApprovedAmountRequest; //

const { status, data } = await apiInstance.modifyLoanApprovedAmount1(
    loanExternalId,
    putLoansApprovedAmountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansApprovedAmountRequest** | **PutLoansApprovedAmountRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**PutLoansApprovedAmountResponse**

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

# **modifyLoanAvailableDisbursementAmount**
> PutLoansAvailableDisbursementAmountResponse modifyLoanAvailableDisbursementAmount(putLoansAvailableDisbursementAmountRequest)

Modifies the available disbursement amount of the loan, this indirectly modifies the approved amount that can be disbursed on the loan

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansAvailableDisbursementAmountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let putLoansAvailableDisbursementAmountRequest: PutLoansAvailableDisbursementAmountRequest; //

const { status, data } = await apiInstance.modifyLoanAvailableDisbursementAmount(
    loanId,
    putLoansAvailableDisbursementAmountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansAvailableDisbursementAmountRequest** | **PutLoansAvailableDisbursementAmountRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**PutLoansAvailableDisbursementAmountResponse**

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

# **modifyLoanAvailableDisbursementAmount1**
> PutLoansAvailableDisbursementAmountResponse modifyLoanAvailableDisbursementAmount1(putLoansAvailableDisbursementAmountRequest)

Modifies the available disbursement amount of the loan, this indirectly modifies the approved amount that can be disbursed on the loan

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PutLoansAvailableDisbursementAmountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let putLoansAvailableDisbursementAmountRequest: PutLoansAvailableDisbursementAmountRequest; //

const { status, data } = await apiInstance.modifyLoanAvailableDisbursementAmount1(
    loanExternalId,
    putLoansAvailableDisbursementAmountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansAvailableDisbursementAmountRequest** | **PutLoansAvailableDisbursementAmountRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**PutLoansAvailableDisbursementAmountResponse**

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

# **postLoanRepaymentTemplate**
> string postLoanRepaymentTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postLoanRepaymentTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postLoanTemplate**
> string postLoanTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postLoanTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll27**
> GetLoansResponse retrieveAll27()

The list capability of loans can support pagination and sorting. Example Requests:  loans  loans?fields=accountNo  loans?offset=10&limit=50  loans?orderBy=accountNo&sortOrder=DESC

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let accountNo: string; //accountNo (optional) (default to undefined)
let associations: string; //associations (optional) (default to undefined)
let clientId: number; //clientId (optional) (default to undefined)
let status: string; //status (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll27(
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder,
    accountNo,
    associations,
    clientId,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **accountNo** | [**string**] | accountNo | (optional) defaults to undefined|
| **associations** | [**string**] | associations | (optional) defaults to undefined|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **status** | [**string**] | status | (optional) defaults to undefined|


### Return type

**GetLoansResponse**

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

# **retrieveApprovalTemplate**
> GetLoansApprovalTemplateResponse retrieveApprovalTemplate()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let templateType: string; //templateType (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveApprovalTemplate(
    loanId,
    templateType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **templateType** | [**string**] | templateType | (optional) defaults to undefined|


### Return type

**GetLoansApprovalTemplateResponse**

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

# **retrieveApprovalTemplate1**
> GetLoansApprovalTemplateResponse retrieveApprovalTemplate1()


### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let templateType: string; //templateType (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveApprovalTemplate1(
    loanExternalId,
    templateType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **templateType** | [**string**] | templateType | (optional) defaults to undefined|


### Return type

**GetLoansApprovalTemplateResponse**

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

# **retrieveLoan**
> GetLoansLoanIdResponse retrieveLoan()

Note: template=true parameter doesn\'t apply to this resource.Example Requests:  loans/1   loans/1?fields=id,principal,annualInterestRate   loans/1?associations=all  loans/1?associations=all&exclude=guarantors   loans/1?fields=id,principal,annualInterestRate&associations=repaymentSchedule,transactions

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let associations: string; //Loan object relations to be included in the response (optional) (default to 'all')
let exclude: string; //Optional Loan object relation list to be filtered in the response (optional) (default to undefined)
let fields: string; //Optional Loan attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveLoan(
    loanId,
    staffInSelectedOfficeOnly,
    associations,
    exclude,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|
| **associations** | [**string**] | Loan object relations to be included in the response | (optional) defaults to 'all'|
| **exclude** | [**string**] | Optional Loan object relation list to be filtered in the response | (optional) defaults to undefined|
| **fields** | [**string**] | Optional Loan attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdResponse**

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

# **retrieveLoan1**
> GetLoansLoanIdResponse retrieveLoan1()

Note: template=true parameter doesn\'t apply to this resource.Example Requests:  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?fields=id,principal,annualInterestRate   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?associations=all  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?associations=all&exclude=guarantors   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854?fields=id,principal,annualInterestRate&associations=repaymentSchedule,transactions

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let associations: string; //Loan object relations to be included in the response (optional) (default to 'all')
let exclude: string; //Optional Loan object relation list to be filtered in the response (optional) (default to undefined)
let fields: string; //Optional Loan attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveLoan1(
    loanExternalId,
    staffInSelectedOfficeOnly,
    associations,
    exclude,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|
| **associations** | [**string**] | Loan object relations to be included in the response | (optional) defaults to 'all'|
| **exclude** | [**string**] | Optional Loan object relation list to be filtered in the response | (optional) defaults to undefined|
| **fields** | [**string**] | Optional Loan attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdResponse**

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

# **stateTransitions**
> PostLoansLoanIdResponse stateTransitions(postLoansLoanIdRequest)

Approve Loan Application: Mandatory Fields: approvedOnDate Optional Fields: approvedLoanAmount and expectedDisbursementDate Approves the loan application  Recover Loan Guarantee: Recovers the loan guarantee  Undo Loan Application Approval: Undoes the Loan Application Approval  Assign a Loan Officer: Allows you to assign Loan Officer for existing Loan.  Unassign a Loan Officer: Allows you to unassign the Loan Officer.  Reject Loan Application: Mandatory Fields: rejectedOnDate Allows you to reject the loan application  Applicant Withdraws from Loan Application: Mandatory Fields: withdrawnOnDate Allows the applicant to withdraw the loan application  Disburse Loan: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the Loan  Disburse Loan To Savings Account: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the loan to Saving Account  Undo Loan Disbursal: Undoes the Loan Disbursal Showing request and response for Assign a Loan Officer

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanId: number; //loanId (default to undefined)
let postLoansLoanIdRequest: PostLoansLoanIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.stateTransitions(
    loanId,
    postLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdRequest** | **PostLoansLoanIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdResponse**

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

# **stateTransitions1**
> PostLoansLoanIdResponse stateTransitions1(postLoansLoanIdRequest)

Approve Loan Application: Mandatory Fields: approvedOnDate Optional Fields: approvedLoanAmount and expectedDisbursementDate Approves the loan application  Recover Loan Guarantee: Recovers the loan guarantee  Undo Loan Application Approval: Undoes the Loan Application Approval  Assign a Loan Officer: Allows you to assign Loan Officer for existing Loan.  Unassign a Loan Officer: Allows you to unassign the Loan Officer.  Reject Loan Application: Mandatory Fields: rejectedOnDate Allows you to reject the loan application  Applicant Withdraws from Loan Application: Mandatory Fields: withdrawnOnDate Allows the applicant to withdraw the loan application  Disburse Loan: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the Loan  Disburse Loan To Savings Account: Mandatory Fields: actualDisbursementDate Optional Fields: transactionAmount and fixedEmiAmount Disburses the loan to Saving Account  Undo Loan Disbursal: Undoes the Loan Disbursal Showing request and response for Assign a Loan Officer

### Example

```typescript
import {
    LoansApi,
    Configuration,
    PostLoansLoanIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let postLoansLoanIdRequest: PostLoansLoanIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.stateTransitions1(
    loanExternalId,
    postLoansLoanIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdRequest** | **PostLoansLoanIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdResponse**

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

# **template10**
> GetLoansTemplateResponse template10()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Requests:  loans/template?templateType=individual&clientId=1   loans/template?templateType=individual&clientId=1&productId=1

### Example

```typescript
import {
    LoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansApi(configuration);

let clientId: number; //clientId (optional) (default to undefined)
let groupId: number; //groupId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let templateType: string; //templateType (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let activeOnly: boolean; //activeOnly (optional) (default to false)

const { status, data } = await apiInstance.template10(
    clientId,
    groupId,
    productId,
    templateType,
    staffInSelectedOfficeOnly,
    activeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **groupId** | [**number**] | groupId | (optional) defaults to undefined|
| **productId** | [**number**] | productId | (optional) defaults to undefined|
| **templateType** | [**string**] | templateType | (optional) defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|
| **activeOnly** | [**boolean**] | activeOnly | (optional) defaults to false|


### Return type

**GetLoansTemplateResponse**

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

