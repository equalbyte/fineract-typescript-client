# LoanTransactionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**adjustLoanTransaction**](#adjustloantransaction) | **POST** /v1/loans/{loanId}/transactions/{transactionId} | Adjust a Transaction|
|[**adjustLoanTransaction1**](#adjustloantransaction1) | **POST** /v1/loans/{loanId}/transactions/external-id/{externalTransactionId} | Adjust a Transaction|
|[**adjustLoanTransaction2**](#adjustloantransaction2) | **POST** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Adjust a Transaction|
|[**adjustLoanTransaction3**](#adjustloantransaction3) | **POST** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{externalTransactionId} | Adjust a Transaction|
|[**executeLoanTransaction**](#executeloantransaction) | **POST** /v1/loans/{loanId}/transactions | Significant Loan Transactions|
|[**executeLoanTransaction1**](#executeloantransaction1) | **POST** /v1/loans/external-id/{loanExternalId}/transactions | Significant Loan Transactions|
|[**retrieveTransaction**](#retrievetransaction) | **GET** /v1/loans/{loanId}/transactions/{transactionId} | Retrieve a Transaction Details|
|[**retrieveTransactionByLoanExternalIdAndTransactionExternalId**](#retrievetransactionbyloanexternalidandtransactionexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{externalTransactionId} | Retrieve a Transaction Details|
|[**retrieveTransactionByLoanExternalIdAndTransactionId**](#retrievetransactionbyloanexternalidandtransactionid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Retrieve a Transaction Details|
|[**retrieveTransactionByTransactionExternalId**](#retrievetransactionbytransactionexternalid) | **GET** /v1/loans/{loanId}/transactions/external-id/{externalTransactionId} | Retrieve a Transaction Details|
|[**retrieveTransactionTemplate**](#retrievetransactiontemplate) | **GET** /v1/loans/{loanId}/transactions/template | Retrieve Loan Transaction Template|
|[**retrieveTransactionTemplate1**](#retrievetransactiontemplate1) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/template | Retrieve Loan Transaction Template|
|[**retrieveTransactionsByExternalLoanId**](#retrievetransactionsbyexternalloanid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions | Retrieve Transactions|
|[**retrieveTransactionsByLoanId**](#retrievetransactionsbyloanid) | **GET** /v1/loans/{loanId}/transactions | Retrieve Transactions|
|[**undoWaiveCharge**](#undowaivecharge) | **PUT** /v1/loans/{loanId}/transactions/{transactionId} | Undo a Waive Charge Transaction|
|[**undoWaiveCharge1**](#undowaivecharge1) | **PUT** /v1/loans/{loanId}/transactions/external-id/{transactionExternalId} | Undo a Waive Charge Transaction|
|[**undoWaiveCharge2**](#undowaivecharge2) | **PUT** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Undo a Waive Charge Transaction|
|[**undoWaiveCharge3**](#undowaivecharge3) | **PUT** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{transactionExternalId} | Undo a Waive Charge Transaction|

# **adjustLoanTransaction**
> PostLoansLoanIdTransactionsResponse adjustLoanTransaction(postLoansLoanIdTransactionsTransactionIdRequest)

Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsTransactionIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.adjustLoanTransaction(
    loanId,
    transactionId,
    postLoansLoanIdTransactionsTransactionIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsTransactionIdRequest** | **PostLoansLoanIdTransactionsTransactionIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **adjustLoanTransaction1**
> PostLoansLoanIdTransactionsResponse adjustLoanTransaction1(postLoansLoanIdTransactionsTransactionIdRequest)

Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsTransactionIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let externalTransactionId: string; //externalTransactionId (default to undefined)
let postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.adjustLoanTransaction1(
    loanId,
    externalTransactionId,
    postLoansLoanIdTransactionsTransactionIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsTransactionIdRequest** | **PostLoansLoanIdTransactionsTransactionIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **externalTransactionId** | [**string**] | externalTransactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **adjustLoanTransaction2**
> PostLoansLoanIdTransactionsResponse adjustLoanTransaction2(postLoansLoanIdTransactionsTransactionIdRequest)

Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsTransactionIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.adjustLoanTransaction2(
    loanExternalId,
    transactionId,
    postLoansLoanIdTransactionsTransactionIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsTransactionIdRequest** | **PostLoansLoanIdTransactionsTransactionIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **adjustLoanTransaction3**
> PostLoansLoanIdTransactionsResponse adjustLoanTransaction3(postLoansLoanIdTransactionsTransactionIdRequest)

Note: there is no need to specify command={transactionType} parameter.  Mandatory Fields: transactionDate, transactionAmount

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsTransactionIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let externalTransactionId: string; //externalTransactionId (default to undefined)
let postLoansLoanIdTransactionsTransactionIdRequest: PostLoansLoanIdTransactionsTransactionIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.adjustLoanTransaction3(
    loanExternalId,
    externalTransactionId,
    postLoansLoanIdTransactionsTransactionIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsTransactionIdRequest** | **PostLoansLoanIdTransactionsTransactionIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **externalTransactionId** | [**string**] | externalTransactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **executeLoanTransaction**
> PostLoansLoanIdTransactionsResponse executeLoanTransaction(postLoansLoanIdTransactionsRequest)

This API covers the major loan transaction functionality  Example Requests:  loans/1/transactions?command=repayment | Make a Repayment |  loans/1/transactions?command=merchantIssuedRefund | Merchant Issued Refund |  loans/1/transactions?command=payoutRefund | Payout Refund |  loans/1/transactions?command=goodwillCredit | Goodwil Credit |  loans/1/transactions?command=chargeRefund | Charge Refund |  loans/1/transactions?command=waiveinterest | Waive Interest |  loans/1/transactions?command=writeoff | Write-off Loan |  loans/1/transactions?command=close-rescheduled | Close Rescheduled Loan |  loans/1/transactions?command=close | Close Loan |  loans/1/transactions?command=undowriteoff | Undo Loan Write-off |  loans/1/transactions?command=recoverypayment | Make Recovery Payment |  loans/1/transactions?command=refundByCash | Make a Refund of an Active Loan by Cash |  loans/1/transactions?command=foreclosure | Foreclosure of an Active Loan |  loans/1/transactions?command=creditBalanceRefund | Credit Balance Refund |   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=charge-off | Charge-off Loan |   loans/1/transactions?command=downPayment | Down Payment |   

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let postLoansLoanIdTransactionsRequest: PostLoansLoanIdTransactionsRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanTransaction(
    loanId,
    postLoansLoanIdTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsRequest** | **PostLoansLoanIdTransactionsRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **executeLoanTransaction1**
> PostLoansLoanIdTransactionsResponse executeLoanTransaction1(postLoansLoanIdTransactionsRequest)

This API covers the major loan transaction functionality  Example Requests:  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=repayment | Make a Repayment |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=merchantIssuedRefund | Merchant Issued Refund |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=payoutRefund | Payout Refund |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=goodwillCredit | Goodwil Credit |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=chargeRefund | Charge Refund |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=waiveinterest | Waive Interest |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=writeoff | Write-off Loan |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=close-rescheduled | Close Rescheduled Loan |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=close | Close Loan |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=undowriteoff | Undo Loan Write-off |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=recoverypayment | Make Recovery Payment |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=refundByCash | Make a Refund of an Active Loan by Cash |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=foreclosure | Foreclosure of an Active Loan |  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=creditBalanceRefund | Credit Balance Refund |   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=charge-off | Charge-off Loan |   loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions?command=downPayment | Down Payment |   

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PostLoansLoanIdTransactionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let postLoansLoanIdTransactionsRequest: PostLoansLoanIdTransactionsRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanTransaction1(
    loanExternalId,
    postLoansLoanIdTransactionsRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdTransactionsRequest** | **PostLoansLoanIdTransactionsRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdTransactionsResponse**

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

# **retrieveTransaction**
> GetLoansLoanIdTransactionsTransactionIdResponse retrieveTransaction()

Retrieves a Transaction Details  Example Request:  loans/5/transactions/3

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let fields: string; //Optional Loan Transaction attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransaction(
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

**GetLoansLoanIdTransactionsTransactionIdResponse**

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

# **retrieveTransactionByLoanExternalIdAndTransactionExternalId**
> GetLoansLoanIdTransactionsTransactionIdResponse retrieveTransactionByLoanExternalIdAndTransactionExternalId()

Retrieves a Transaction Details  Example Request:  loans/external-id/7dd80a7c-ycba-a446-t378-91eb6f53e854/transactions/external-id/5dd80a7c-ccba-4446-b378-01eb6f53e871

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let externalTransactionId: string; //externalTransactionId (default to undefined)
let fields: string; //Optional Loan Transaction attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionByLoanExternalIdAndTransactionExternalId(
    loanExternalId,
    externalTransactionId,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **externalTransactionId** | [**string**] | externalTransactionId | defaults to undefined|
| **fields** | [**string**] | Optional Loan Transaction attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsTransactionIdResponse**

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

# **retrieveTransactionByLoanExternalIdAndTransactionId**
> GetLoansLoanIdTransactionsTransactionIdResponse retrieveTransactionByLoanExternalIdAndTransactionId()

Retrieves a Transaction Details  Example Request:  loans/5/transactions/3

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let fields: string; //Optional Loan Transaction attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionByLoanExternalIdAndTransactionId(
    loanExternalId,
    transactionId,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|
| **fields** | [**string**] | Optional Loan Transaction attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsTransactionIdResponse**

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

# **retrieveTransactionByTransactionExternalId**
> GetLoansLoanIdTransactionsTransactionIdResponse retrieveTransactionByTransactionExternalId()

Retrieves a Transaction Details  Example Request:  loans/5/transactions/external-id/5dd80a7c-ccba-4446-b378-01eb6f53e871

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let externalTransactionId: string; //externalTransactionId (default to undefined)
let fields: string; //Optional Loan Transaction attribute list to be in the response (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionByTransactionExternalId(
    loanId,
    externalTransactionId,
    fields
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **externalTransactionId** | [**string**] | externalTransactionId | defaults to undefined|
| **fields** | [**string**] | Optional Loan Transaction attribute list to be in the response | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsTransactionIdResponse**

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

# **retrieveTransactionTemplate**
> GetLoansLoanIdTransactionsTemplateResponse retrieveTransactionTemplate()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  loans/1/transactions/template?command=repaymentloans/1/transactions/template?command=merchantIssuedRefundloans/1/transactions/template?command=payoutRefundloans/1/transactions/template?command=goodwillCredit loans/1/transactions/template?command=waiveinterest loans/1/transactions/template?command=writeoff loans/1/transactions/template?command=close-rescheduled loans/1/transactions/template?command=close loans/1/transactions/template?command=disburse loans/1/transactions/template?command=disburseToSavings loans/1/transactions/template?command=recoverypayment loans/1/transactions/template?command=prepayLoan loans/1/transactions/template?command=refundbycash loans/1/transactions/template?command=refundbytransfer loans/1/transactions/template?command=foreclosure loans/1/transactions/template?command=interestPaymentWaiver loans/1/transactions/template?command=creditBalanceRefund (returned \'amount\' field will have the overpaid value) loans/1/transactions/template?command=charge-off loans/1/transactions/template?command=downPayment loans/1/transactions/template?command=interest-refund

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let command: string; //command (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let transactionDate: object; //transactionDate (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let transactionId: number; //transactionId (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionTemplate(
    loanId,
    command,
    dateFormat,
    transactionDate,
    locale,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **transactionDate** | **object** | transactionDate | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **transactionId** | [**number**] | transactionId | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsTemplateResponse**

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

# **retrieveTransactionTemplate1**
> GetLoansLoanIdTransactionsTemplateResponse retrieveTransactionTemplate1()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  loans/1/transactions/template?command=repaymentloans/1/transactions/template?command=merchantIssuedRefundloans/1/transactions/template?command=payoutRefundloans/1/transactions/template?command=goodwillCredit loans/1/transactions/template?command=waiveinterest loans/1/transactions/template?command=writeoff loans/1/transactions/template?command=close-rescheduled loans/1/transactions/template?command=close loans/1/transactions/template?command=disburse loans/1/transactions/template?command=disburseToSavings loans/1/transactions/template?command=recoverypayment loans/1/transactions/template?command=prepayLoan loans/1/transactions/template?command=refundbycash loans/1/transactions/template?command=refundbytransfer loans/1/transactions/template?command=foreclosure loans/1/transactions/template?command=interestPaymentWaiver loans/1/transactions/template?command=creditBalanceRefund (returned \'amount\' field will have the overpaid value) loans/1/transactions/template?command=charge-off loans/1/transactions/template?command=downPayment loans/1/transactions/template?command=interest-refund

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let command: string; //command (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let transactionDate: object; //transactionDate (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let transactionId: number; //transactionId (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionTemplate1(
    loanExternalId,
    command,
    dateFormat,
    transactionDate,
    locale,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **transactionDate** | **object** | transactionDate | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **transactionId** | [**number**] | transactionId | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsTemplateResponse**

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

# **retrieveTransactionsByExternalLoanId**
> GetLoansLoanIdTransactionsResponse retrieveTransactionsByExternalLoanId()

Retrieves transactions of a loan

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanId (default to undefined)
let excludedTypes: Array<TransactionType>; //excludedTypes (optional) (default to undefined)
let page: number; //page (optional) (default to undefined)
let size: number; //size (optional) (default to undefined)
let sort: string; //sort (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionsByExternalLoanId(
    loanExternalId,
    excludedTypes,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanId | defaults to undefined|
| **excludedTypes** | **Array&lt;TransactionType&gt;** | excludedTypes | (optional) defaults to undefined|
| **page** | [**number**] | page | (optional) defaults to undefined|
| **size** | [**number**] | size | (optional) defaults to undefined|
| **sort** | [**string**] | sort | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsResponse**

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

# **retrieveTransactionsByLoanId**
> GetLoansLoanIdTransactionsResponse retrieveTransactionsByLoanId()

Retrieves transactions of a loan

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let excludedTypes: Array<TransactionType>; //excludedTypes (optional) (default to undefined)
let page: number; //page (optional) (default to undefined)
let size: number; //size (optional) (default to undefined)
let sort: string; //sort (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveTransactionsByLoanId(
    loanId,
    excludedTypes,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **excludedTypes** | **Array&lt;TransactionType&gt;** | excludedTypes | (optional) defaults to undefined|
| **page** | [**number**] | page | (optional) defaults to undefined|
| **size** | [**number**] | size | (optional) defaults to undefined|
| **sort** | [**string**] | sort | (optional) defaults to undefined|


### Return type

**GetLoansLoanIdTransactionsResponse**

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

# **undoWaiveCharge**
> PutChargeTransactionChangesResponse undoWaiveCharge(putChargeTransactionChangesRequest)

Undo a Waive Charge Transaction

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PutChargeTransactionChangesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let putChargeTransactionChangesRequest: PutChargeTransactionChangesRequest; //

const { status, data } = await apiInstance.undoWaiveCharge(
    loanId,
    transactionId,
    putChargeTransactionChangesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putChargeTransactionChangesRequest** | **PutChargeTransactionChangesRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**PutChargeTransactionChangesResponse**

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

# **undoWaiveCharge1**
> PutChargeTransactionChangesResponse undoWaiveCharge1(putChargeTransactionChangesRequest)

Undo a Waive Charge Transaction

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PutChargeTransactionChangesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanId: number; //loanId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)
let putChargeTransactionChangesRequest: PutChargeTransactionChangesRequest; //

const { status, data } = await apiInstance.undoWaiveCharge1(
    loanId,
    transactionExternalId,
    putChargeTransactionChangesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putChargeTransactionChangesRequest** | **PutChargeTransactionChangesRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|


### Return type

**PutChargeTransactionChangesResponse**

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

# **undoWaiveCharge2**
> PutChargeTransactionChangesResponse undoWaiveCharge2(putChargeTransactionChangesRequest)

Undo a Waive Charge Transaction

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PutChargeTransactionChangesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let transactionId: number; //transactionId (default to undefined)
let putChargeTransactionChangesRequest: PutChargeTransactionChangesRequest; //

const { status, data } = await apiInstance.undoWaiveCharge2(
    loanExternalId,
    transactionId,
    putChargeTransactionChangesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putChargeTransactionChangesRequest** | **PutChargeTransactionChangesRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**PutChargeTransactionChangesResponse**

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

# **undoWaiveCharge3**
> PutChargeTransactionChangesResponse undoWaiveCharge3(putChargeTransactionChangesRequest)

Undo a Waive Charge Transaction

### Example

```typescript
import {
    LoanTransactionsApi,
    Configuration,
    PutChargeTransactionChangesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanTransactionsApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let transactionExternalId: string; //transactionExternalId (default to undefined)
let putChargeTransactionChangesRequest: PutChargeTransactionChangesRequest; //

const { status, data } = await apiInstance.undoWaiveCharge3(
    loanExternalId,
    transactionExternalId,
    putChargeTransactionChangesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putChargeTransactionChangesRequest** | **PutChargeTransactionChangesRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **transactionExternalId** | [**string**] | transactionExternalId | defaults to undefined|


### Return type

**PutChargeTransactionChangesResponse**

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

