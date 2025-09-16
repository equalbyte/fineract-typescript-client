# RecurringDepositAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountClosureTemplate1**](#accountclosuretemplate1) | **GET** /v1/recurringdepositaccounts/{accountId}/template | |
|[**delete16**](#delete16) | **DELETE** /v1/recurringdepositaccounts/{accountId} | Delete a recurring deposit application|
|[**getRecurringDepositTemplate**](#getrecurringdeposittemplate) | **GET** /v1/recurringdepositaccounts/downloadtemplate | |
|[**getRecurringDepositTransactionTemplate**](#getrecurringdeposittransactiontemplate) | **GET** /v1/recurringdepositaccounts/transactions/downloadtemplate | |
|[**handleCommands5**](#handlecommands5) | **POST** /v1/recurringdepositaccounts/{accountId} | Approve recurring deposit application | Undo approval recurring deposit application | Reject recurring deposit application | Withdraw recurring deposit application | Activate a recurring deposit account | Update the recommended deposit amount for a recurring deposit account | Close a recurring deposit account | Premature Close a recurring deposit account | Calculate Premature amount on Recurring deposit account | Calculate Interest on recurring Deposit Account | Post Interest on recurring Deposit Account|
|[**postRecurringDepositTemplate**](#postrecurringdeposittemplate) | **POST** /v1/recurringdepositaccounts/uploadtemplate | |
|[**postRecurringDepositTransactionsTemplate**](#postrecurringdeposittransactionstemplate) | **POST** /v1/recurringdepositaccounts/transactions/uploadtemplate | |
|[**retrieveAll31**](#retrieveall31) | **GET** /v1/recurringdepositaccounts | List Recurring deposit applications/accounts|
|[**retrieveOne22**](#retrieveone22) | **GET** /v1/recurringdepositaccounts/{accountId} | Retrieve a recurring deposit application/account|
|[**submitApplication1**](#submitapplication1) | **POST** /v1/recurringdepositaccounts | Submit new recurring deposit application|
|[**template13**](#template13) | **GET** /v1/recurringdepositaccounts/template | Retrieve recurring Deposit Account Template|
|[**update18**](#update18) | **PUT** /v1/recurringdepositaccounts/{accountId} | Modify a recurring deposit application|

# **accountClosureTemplate1**
> string accountClosureTemplate1()


### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.accountClosureTemplate1(
    accountId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


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

# **delete16**
> DeleteRecurringDepositAccountsResponse delete16()

At present we support hard delete of recurring deposit application so long as its in \'Submitted and pending approval\' state. One the application is moves past this state, it is not possible to do a \'hard\' delete of the application or the account. An API endpoint will be added to close/de-activate the recurring deposit account.

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)

const { status, data } = await apiInstance.delete16(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**DeleteRecurringDepositAccountsResponse**

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

# **getRecurringDepositTemplate**
> getRecurringDepositTemplate()


### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRecurringDepositTemplate(
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

# **getRecurringDepositTransactionTemplate**
> getRecurringDepositTransactionTemplate()


### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRecurringDepositTransactionTemplate(
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

# **handleCommands5**
> PostRecurringDepositAccountsAccountIdResponse handleCommands5(body)

Approve recurring deposit application:  Approves recurring deposit application so long as its in \'Submitted and pending approval\' state.  Undo approval recurring deposit application:  Will move \'approved\' recurring deposit application back to \'Submitted and pending approval\' state.  Reject recurring deposit application  Rejects recurring deposit application so long as its in \'Submitted and pending approval\' state.  Withdraw recurring deposit application:  Used when an applicant withdraws from the recurring deposit application. It must be in \'Submitted and pending approval\' state.  Activate a recurring deposit account:  Results in an approved recurring deposit application being converted into an \'active\' recurring deposit account.  Update the recommended deposit amount for a recurring deposit account:  Updates the recommended deposit amount for a RD account as on the effective date.  Close a recurring deposit account  Results in a Matured recurring deposit account being converted into a \'closed\' recurring deposit account.  On account close allowed actions are.Premature Close a recurring deposit account:  Results in an Active recurring deposit account being converted into a \'Premature Closed\' recurring deposit account with options to withdraw prematured amount. (premature amount is calculated using interest rate chart applicable along with penal interest if any.)  On account premature closure allowed actions are.  Calculate Premature amount on Recurring deposit account:  Calculate premature amount on recurring deposit till premature close date. Premature amount is calculated based on interest chart and penal interest applicable if any.  Calculate Interest on recurring Deposit Account:  Calculates interest earned on a recurring deposit account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on recurring Deposit Account:  Calculates and Posts interest earned on a recurring deposit account based on todays date and whether an interest posting or crediting event is due.  Showing request/response for \'Post Interest on recurring Deposit Account\'

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let body: object; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands5(
    accountId,
    body,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **accountId** | [**number**] | accountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostRecurringDepositAccountsAccountIdResponse**

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

# **postRecurringDepositTemplate**
> string postRecurringDepositTemplate()


### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postRecurringDepositTemplate(
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

# **postRecurringDepositTransactionsTemplate**
> string postRecurringDepositTransactionsTemplate()


### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postRecurringDepositTransactionsTemplate(
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

# **retrieveAll31**
> Array<GetRecurringDepositAccountsResponse> retrieveAll31()

Lists Recurring deposit applications/accounts  Example Requests:  recurringdepositaccounts   recurringdepositaccounts?fields=name

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let paged: boolean; //paged (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll31(
    paged,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paged** | [**boolean**] | paged | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**Array<GetRecurringDepositAccountsResponse>**

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

# **retrieveOne22**
> GetRecurringDepositAccountsAccountIdResponse retrieveOne22()

Retrieves a recurring deposit application/account  Example Requests :  recurringdepositaccounts/1   recurringdepositaccounts/1?associations=all

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')

const { status, data } = await apiInstance.retrieveOne22(
    accountId,
    staffInSelectedOfficeOnly,
    chargeStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|


### Return type

**GetRecurringDepositAccountsAccountIdResponse**

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

# **submitApplication1**
> PostRecurringDepositAccountsResponse submitApplication1(postRecurringDepositAccountsRequest)

Submits new recurring deposit application  Mandatory Fields: clientId or groupId, productId, submittedOnDate, depositAmount, depositPeriod, depositPeriodFrequencyId  Optional Fields: accountNo, externalId, fieldOfficerId,linkAccountId(if provided initial deposit amount will be collected from this account),transferInterestToSavings(By enabling this flag all interest postings will be transferred to linked saving account )  Inherited from Product (if not provided): interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, lockinPeriodFrequency, lockinPeriodFrequencyType, preClosurePenalApplicable, preClosurePenalInterest, preClosurePenalInterestOnTypeId, charts, withHoldTax

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration,
    PostRecurringDepositAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let postRecurringDepositAccountsRequest: PostRecurringDepositAccountsRequest; //

const { status, data } = await apiInstance.submitApplication1(
    postRecurringDepositAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRecurringDepositAccountsRequest** | **PostRecurringDepositAccountsRequest**|  | |


### Return type

**PostRecurringDepositAccountsResponse**

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

# **template13**
> GetRecurringDepositAccountsTemplateResponse template13()

This is a convenience resource. It can be useful when building maintenance user interface screens for recurring deposit applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  recurringdepositaccounts/template?clientId=1   recurringdepositaccounts/template?clientId=1&productId=1

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let clientId: number; //clientId (optional) (default to undefined)
let groupId: number; //groupId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.template13(
    clientId,
    groupId,
    productId,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **groupId** | [**number**] | groupId | (optional) defaults to undefined|
| **productId** | [**number**] | productId | (optional) defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetRecurringDepositAccountsTemplateResponse**

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

# **update18**
> PutRecurringDepositAccountsAccountIdResponse update18(putRecurringDepositAccountsAccountIdRequest)

Recurring deposit application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc

### Example

```typescript
import {
    RecurringDepositAccountApi,
    Configuration,
    PutRecurringDepositAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RecurringDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let putRecurringDepositAccountsAccountIdRequest: PutRecurringDepositAccountsAccountIdRequest; //

const { status, data } = await apiInstance.update18(
    accountId,
    putRecurringDepositAccountsAccountIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putRecurringDepositAccountsAccountIdRequest** | **PutRecurringDepositAccountsAccountIdRequest**|  | |
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**PutRecurringDepositAccountsAccountIdResponse**

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

