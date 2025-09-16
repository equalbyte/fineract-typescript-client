# FixedDepositAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountClosureTemplate**](#accountclosuretemplate) | **GET** /v1/fixeddepositaccounts/{accountId}/template | |
|[**calculateFixedDepositInterest**](#calculatefixeddepositinterest) | **GET** /v1/fixeddepositaccounts/calculate-fd-interest | |
|[**delete14**](#delete14) | **DELETE** /v1/fixeddepositaccounts/{accountId} | Delete a fixed deposit application|
|[**getFixedDepositTemplate**](#getfixeddeposittemplate) | **GET** /v1/fixeddepositaccounts/downloadtemplate | |
|[**getFixedDepositTransactionTemplate**](#getfixeddeposittransactiontemplate) | **GET** /v1/fixeddepositaccounts/transaction/downloadtemplate | |
|[**handleCommands4**](#handlecommands4) | **POST** /v1/fixeddepositaccounts/{accountId} | Approve fixed deposit application | Undo approval fixed deposit application | Reject fixed deposit application | Withdraw fixed deposit application | Activate a fixed deposit account | Close a fixed deposit account | Premature Close a fixed deposit account | Calculate Premature amount on Fixed deposit account | Calculate Interest on Fixed Deposit Account | Post Interest on Fixed Deposit Account|
|[**postFixedDepositTemplate**](#postfixeddeposittemplate) | **POST** /v1/fixeddepositaccounts/uploadtemplate | |
|[**postFixedDepositTransactionTemplate**](#postfixeddeposittransactiontemplate) | **POST** /v1/fixeddepositaccounts/transaction/uploadtemplate | |
|[**retrieveAll29**](#retrieveall29) | **GET** /v1/fixeddepositaccounts | List Fixed deposit applications/accounts|
|[**retrieveOne19**](#retrieveone19) | **GET** /v1/fixeddepositaccounts/{accountId} | Retrieve a fixed deposit application/account|
|[**submitApplication**](#submitapplication) | **POST** /v1/fixeddepositaccounts | Submit new fixed deposit application|
|[**template12**](#template12) | **GET** /v1/fixeddepositaccounts/template | Retrieve Fixed Deposit Account Template|
|[**update16**](#update16) | **PUT** /v1/fixeddepositaccounts/{accountId} | Modify a fixed deposit application|

# **accountClosureTemplate**
> string accountClosureTemplate()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.accountClosureTemplate(
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

# **calculateFixedDepositInterest**
> CalculateFixedDepositInterestResponse calculateFixedDepositInterest()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let principalAmount: number; //BigDecimal principalAmount (optional) (default to undefined)
let annualInterestRate: number; //annualInterestRate (optional) (default to undefined)
let tenureInMonths: number; //tenureInMonths (optional) (default to undefined)
let interestCompoundingPeriodInMonths: number; //interestCompoundingPeriodInMonths (optional) (default to undefined)
let interestPostingPeriodInMonths: number; //interestPostingPeriodInMonths (optional) (default to undefined)

const { status, data } = await apiInstance.calculateFixedDepositInterest(
    principalAmount,
    annualInterestRate,
    tenureInMonths,
    interestCompoundingPeriodInMonths,
    interestPostingPeriodInMonths
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **principalAmount** | [**number**] | BigDecimal principalAmount | (optional) defaults to undefined|
| **annualInterestRate** | [**number**] | annualInterestRate | (optional) defaults to undefined|
| **tenureInMonths** | [**number**] | tenureInMonths | (optional) defaults to undefined|
| **interestCompoundingPeriodInMonths** | [**number**] | interestCompoundingPeriodInMonths | (optional) defaults to undefined|
| **interestPostingPeriodInMonths** | [**number**] | interestPostingPeriodInMonths | (optional) defaults to undefined|


### Return type

**CalculateFixedDepositInterestResponse**

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

# **delete14**
> DeleteFixedDepositAccountsAccountIdResponse delete14()

At present we support hard delete of fixed deposit application so long as its in \'Submitted and pending approval\' state. One the application is moves past this state, it is not possible to do a \'hard\' delete of the application or the account. An API endpoint will be added to close/de-activate the fixed deposit account.

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)

const { status, data } = await apiInstance.delete14(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**DeleteFixedDepositAccountsAccountIdResponse**

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

# **getFixedDepositTemplate**
> getFixedDepositTemplate()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getFixedDepositTemplate(
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

# **getFixedDepositTransactionTemplate**
> getFixedDepositTransactionTemplate()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getFixedDepositTransactionTemplate(
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

# **handleCommands4**
> PostFixedDepositAccountsAccountIdResponse handleCommands4(body)

Approve fixed deposit application:  Approves fixed deposit application so long as its in \'Submitted and pending approval\' state.  Undo approval fixed deposit application:  Will move \'approved\' fixed deposit application back to \'Submitted and pending approval\' state.  Reject fixed deposit application:  Rejects fixed deposit application so long as its in \'Submitted and pending approval\' state.  Withdraw fixed deposit application:  Used when an applicant withdraws from the fixed deposit application. It must be in \'Submitted and pending approval\' state.  Close a fixed deposit account:  Results in a Matured fixed deposit account being converted into a \'closed\' fixed deposit account.  Premature Close a fixed deposit account:  Results in an Active fixed deposit account being converted into a \'Premature Closed\' fixed deposit account with options to withdraw prematured amount. (premature amount is calculated using interest rate chart applicable along with penal interest if any.)  Calculate Premature amount on Fixed deposit account:  Calculate premature amount on fixed deposit account till premature close date. Premature amount is calculated based on interest chart and penal interest applicable.  Calculate Interest on Fixed Deposit Account:  Calculates interest earned on a fixed deposit account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on Fixed Deposit Account:  Calculates and Posts interest earned on a fixed deposit account based on today\'s date and whether an interest posting or crediting event is due.  Showing request/response for Calculate Interest on Fixed Deposit Account

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let body: object; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands4(
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

**PostFixedDepositAccountsAccountIdResponse**

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

# **postFixedDepositTemplate**
> string postFixedDepositTemplate()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postFixedDepositTemplate(
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

# **postFixedDepositTransactionTemplate**
> string postFixedDepositTransactionTemplate()


### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postFixedDepositTransactionTemplate(
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

# **retrieveAll29**
> Array<GetFixedDepositAccountsResponse> retrieveAll29()

Lists Fixed Deposit Accounts  Example Requests:    fixeddepositaccounts    fixeddepositaccounts?fields=name

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let paged: boolean; //paged (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll29(
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

**Array<GetFixedDepositAccountsResponse>**

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

# **retrieveOne19**
> GetFixedDepositAccountsAccountIdResponse retrieveOne19()

Retrieves a fixed deposit application/account  Example Requests :    fixeddepositaccounts/1  fixeddepositaccounts/1?associations=all

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')

const { status, data } = await apiInstance.retrieveOne19(
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

**GetFixedDepositAccountsAccountIdResponse**

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

# **submitApplication**
> PostFixedDepositAccountsResponse submitApplication(postFixedDepositAccountsRequest)

Submits a new fixed deposit applicationMandatory Fields: clientId or groupId, productId, submittedOnDate, depositAmount, depositPeriod, depositPeriodFrequencyId  Optional Fields: accountNo, externalId, fieldOfficerId,linkAccountId(if provided initial deposit amount will be collected from this account),transferInterestToSavings(By enabling this flag all interest postings will be transferred to linked saving account )

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration,
    PostFixedDepositAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let postFixedDepositAccountsRequest: PostFixedDepositAccountsRequest; //

const { status, data } = await apiInstance.submitApplication(
    postFixedDepositAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postFixedDepositAccountsRequest** | **PostFixedDepositAccountsRequest**|  | |


### Return type

**PostFixedDepositAccountsResponse**

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

# **template12**
> GetFixedDepositAccountsTemplateResponse template12()

This is a convenience resource. It can be useful when building maintenance user interface screens for fixed deposit applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value ListsExample Requests:    fixeddepositaccounts/template?clientId=1

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let clientId: number; //clientId (optional) (default to undefined)
let groupId: number; //groupId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.template12(
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

**GetFixedDepositAccountsTemplateResponse**

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

# **update16**
> PutFixedDepositAccountsAccountIdResponse update16(putFixedDepositAccountsAccountIdRequest)

Fixed deposit application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc

### Example

```typescript
import {
    FixedDepositAccountApi,
    Configuration,
    PutFixedDepositAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FixedDepositAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let putFixedDepositAccountsAccountIdRequest: PutFixedDepositAccountsAccountIdRequest; //

const { status, data } = await apiInstance.update16(
    accountId,
    putFixedDepositAccountsAccountIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putFixedDepositAccountsAccountIdRequest** | **PutFixedDepositAccountsAccountIdRequest**|  | |
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**PutFixedDepositAccountsAccountIdResponse**

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

