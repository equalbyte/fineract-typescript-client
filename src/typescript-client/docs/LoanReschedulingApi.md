# LoanReschedulingApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**calculateLoanScheduleOrSubmitVariableSchedule**](#calculateloanscheduleorsubmitvariableschedule) | **POST** /v1/loans/{loanId}/schedule | Calculate loan repayment schedule based on Loan term variations | Updates loan repayment schedule based on Loan term variations | Updates loan repayment schedule by removing Loan term variations|

# **calculateLoanScheduleOrSubmitVariableSchedule**
> PostLoansLoanIdScheduleResponse calculateLoanScheduleOrSubmitVariableSchedule(body)

Calculate loan repayment schedule based on Loan term variations:  Mandatory Fields: exceptions,locale,dateFormat  Updates loan repayment schedule based on Loan term variations:  Mandatory Fields: exceptions,locale,dateFormat  Updates loan repayment schedule by removing Loan term variations:  It updates the loan repayment schedule by removing Loan term variations  Showing request/response for \'Updates loan repayment schedule by removing Loan term variations\'

### Example

```typescript
import {
    LoanReschedulingApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanReschedulingApi(configuration);

let loanId: number; //loanId (default to undefined)
let body: object; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.calculateLoanScheduleOrSubmitVariableSchedule(
    loanId,
    body,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdScheduleResponse**

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

