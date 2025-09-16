# SavingsAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**delete18**](#delete18) | **DELETE** /v1/savingsaccounts/{accountId} | Delete a savings application|
|[**delete19**](#delete19) | **DELETE** /v1/savingsaccounts/external-id/{externalId} | Delete a savings application|
|[**getSavingsTemplate**](#getsavingstemplate) | **GET** /v1/savingsaccounts/downloadtemplate | |
|[**getSavingsTransactionTemplate**](#getsavingstransactiontemplate) | **GET** /v1/savingsaccounts/transactions/downloadtemplate | |
|[**handleCommands6**](#handlecommands6) | **POST** /v1/savingsaccounts/{accountId} | Approve savings application | Undo approval savings application | Assign Savings Officer | Unassign Savings Officer | Reject savings application | Withdraw savings application | Activate a savings account | Close a savings account | Calculate Interest on Savings Account | Post Interest on Savings Account | Block Savings Account | Unblock Savings Account | Block Savings Account Credit transactions | Unblock Savings Account Credit transactions | Block Savings Account Debit transactions | Unblock Savings Account debit transactions|
|[**handleCommands7**](#handlecommands7) | **POST** /v1/savingsaccounts/external-id/{externalId} | Approve savings application | Undo approval savings application | Assign Savings Officer | Unassign Savings Officer | Reject savings application | Withdraw savings application | Activate a savings account | Close a savings account | Calculate Interest on Savings Account | Post Interest on Savings Account | Block Savings Account | Unblock Savings Account | Block Savings Account Credit transactions | Unblock Savings Account Credit transactions | Block Savings Account Debit transactions | Unblock Savings Account debit transactions|
|[**handleGSIMCommands**](#handlegsimcommands) | **POST** /v1/savingsaccounts/gsimcommands/{parentAccountId} | |
|[**postSavingsTemplate**](#postsavingstemplate) | **POST** /v1/savingsaccounts/uploadtemplate | |
|[**postSavingsTransactionTemplate**](#postsavingstransactiontemplate) | **POST** /v1/savingsaccounts/transactions/uploadtemplate | |
|[**retrieveAll33**](#retrieveall33) | **GET** /v1/savingsaccounts | List savings applications/accounts|
|[**retrieveOne25**](#retrieveone25) | **GET** /v1/savingsaccounts/{accountId} | |
|[**retrieveOne26**](#retrieveone26) | **GET** /v1/savingsaccounts/external-id/{externalId} | |
|[**submitApplication2**](#submitapplication2) | **POST** /v1/savingsaccounts | Submit new savings application|
|[**submitGSIMApplication**](#submitgsimapplication) | **POST** /v1/savingsaccounts/gsim | |
|[**template14**](#template14) | **GET** /v1/savingsaccounts/template | Retrieve Savings Account Template|
|[**update20**](#update20) | **PUT** /v1/savingsaccounts/{accountId} | Modify a savings application | Modify savings account withhold tax applicability|
|[**update21**](#update21) | **PUT** /v1/savingsaccounts/external-id/{externalId} | Modify a savings application | Modify savings account withhold tax applicability|
|[**updateGsim**](#updategsim) | **PUT** /v1/savingsaccounts/gsim/{parentAccountId} | |

# **delete18**
> DeleteSavingsAccountsAccountIdResponse delete18()

At present we support hard delete of savings application so long as its in \'Submitted and pending approval\' state. One the application is moves past this state, it is not possible to do a \'hard\' delete of the application or the account. An API endpoint will be added to close/de-activate the savings account.

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)

const { status, data } = await apiInstance.delete18(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**DeleteSavingsAccountsAccountIdResponse**

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

# **delete19**
> DeleteSavingsAccountsAccountIdResponse delete19()

At present we support hard delete of savings application so long as its in \'Submitted and pending approval\' state. One the application is moves past this state, it is not possible to do a \'hard\' delete of the application or the account. An API endpoint will be added to close/de-activate the savings account.

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let externalId: string; //externalId (default to undefined)

const { status, data } = await apiInstance.delete19(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**DeleteSavingsAccountsAccountIdResponse**

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

# **getSavingsTemplate**
> getSavingsTemplate()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSavingsTemplate(
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

# **getSavingsTransactionTemplate**
> getSavingsTransactionTemplate()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSavingsTransactionTemplate(
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

# **handleCommands6**
> PostSavingsAccountsAccountIdResponse handleCommands6(postSavingsAccountsAccountIdRequest)

Approve savings application:  Approves savings application so long as its in \'Submitted and pending approval\' state.  Undo approval savings application:  Will move \'approved\' savings application back to \'Submitted and pending approval\' state.  Assign Savings Officer:  Allows you to assign Savings Officer for existing Savings Account.  Unassign Savings Officer:  Allows you to unassign the Savings Officer.  Reject savings application:  Rejects savings application so long as its in \'Submitted and pending approval\' state.  Withdraw savings application:  Used when an applicant withdraws from the savings application. It must be in \'Submitted and pending approval\' state.  Activate a savings account:  Results in an approved savings application being converted into an \'active\' savings account.  Close a savings account:  Results in an Activated savings application being converted into an \'closed\' savings account.  closedOnDate is closure date of savings account  withdrawBalance is a boolean description, true value of this field performs a withdrawal transaction with account\'s running balance.  Mandatory Fields: dateFormat,locale,closedOnDate  Optional Fields: note, withdrawBalance, paymentTypeId, accountNumber, checkNumber, routingCode, receiptNumber, bankNumber  Calculate Interest on Savings Account:  Calculates interest earned on a savings account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on Savings Account:  Calculates and Posts interest earned on a savings account based on today\'s date and whether an interest posting or crediting event is due.  Block Savings Account:  Blocks Savings account from all types of credit and debit transactions  Unblock Savings Account:  Unblock a blocked account. On unblocking account, user can perform debit and credit transactions  Block Savings Account Credit transactions:  Savings account will be blocked from all types of credit transactions.  Unblock Savings Account Credit transactions:  It unblocks the Saving account\'s credit operations. Now all types of credits can be transacted to Savings account  Block Savings Account Debit transactions:  All types of debit operations from Savings account wil be blocked  Unblock Savings Account debit transactions:  It unblocks the Saving account\'s debit operations. Now all types of debits can be transacted from Savings account  Showing request/response for \'Unassign Savings Officer\'

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration,
    PostSavingsAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let postSavingsAccountsAccountIdRequest: PostSavingsAccountsAccountIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands6(
    accountId,
    postSavingsAccountsAccountIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountsAccountIdRequest** | **PostSavingsAccountsAccountIdRequest**|  | |
| **accountId** | [**number**] | accountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostSavingsAccountsAccountIdResponse**

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

# **handleCommands7**
> PostSavingsAccountsAccountIdResponse handleCommands7(postSavingsAccountsAccountIdRequest)

Approve savings application:  Approves savings application so long as its in \'Submitted and pending approval\' state.  Undo approval savings application:  Will move \'approved\' savings application back to \'Submitted and pending approval\' state.  Assign Savings Officer:  Allows you to assign Savings Officer for existing Savings Account.  Unassign Savings Officer:  Allows you to unassign the Savings Officer.  Reject savings application:  Rejects savings application so long as its in \'Submitted and pending approval\' state.  Withdraw savings application:  Used when an applicant withdraws from the savings application. It must be in \'Submitted and pending approval\' state.  Activate a savings account:  Results in an approved savings application being converted into an \'active\' savings account.  Close a savings account:  Results in an Activated savings application being converted into an \'closed\' savings account.  closedOnDate is closure date of savings account  withdrawBalance is a boolean description, true value of this field performs a withdrawal transaction with account\'s running balance.  Mandatory Fields: dateFormat,locale,closedOnDate  Optional Fields: note, withdrawBalance, paymentTypeId, accountNumber, checkNumber, routingCode, receiptNumber, bankNumber  Calculate Interest on Savings Account:  Calculates interest earned on a savings account based on todays date. It does not attempt to post or credit the interest on the account. That is responsibility of the Post Interest API that will likely be called by overnight process.  Post Interest on Savings Account:  Calculates and Posts interest earned on a savings account based on today\'s date and whether an interest posting or crediting event is due.  Block Savings Account:  Blocks Savings account from all types of credit and debit transactions  Unblock Savings Account:  Unblock a blocked account. On unblocking account, user can perform debit and credit transactions  Block Savings Account Credit transactions:  Savings account will be blocked from all types of credit transactions.  Unblock Savings Account Credit transactions:  It unblocks the Saving account\'s credit operations. Now all types of credits can be transacted to Savings account  Block Savings Account Debit transactions:  All types of debit operations from Savings account wil be blocked  Unblock Savings Account debit transactions:  It unblocks the Saving account\'s debit operations. Now all types of debits can be transacted from Savings account  Showing request/response for \'Unassign Savings Officer\'

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration,
    PostSavingsAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let externalId: string; //externalId (default to undefined)
let postSavingsAccountsAccountIdRequest: PostSavingsAccountsAccountIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands7(
    externalId,
    postSavingsAccountsAccountIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountsAccountIdRequest** | **PostSavingsAccountsAccountIdRequest**|  | |
| **externalId** | [**string**] | externalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostSavingsAccountsAccountIdResponse**

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

# **handleGSIMCommands**
> string handleGSIMCommands()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let parentAccountId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.handleGSIMCommands(
    parentAccountId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **parentAccountId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postSavingsTemplate**
> string postSavingsTemplate()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postSavingsTemplate(
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

# **postSavingsTransactionTemplate**
> string postSavingsTransactionTemplate()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postSavingsTransactionTemplate(
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

# **retrieveAll33**
> GetSavingsAccountsResponse retrieveAll33()

Lists savings applications/accounts  Example Requests:  savingsaccounts   savingsaccounts?fields=name

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll33(
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder
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


### Return type

**GetSavingsAccountsResponse**

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

# **retrieveOne25**
> SavingsAccountData retrieveOne25()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let accountId: number; // (default to undefined)
let staffInSelectedOfficeOnly: boolean; // (optional) (default to false)
let chargeStatus: string; // (optional) (default to 'all')
let associations: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOne25(
    accountId,
    staffInSelectedOfficeOnly,
    chargeStatus,
    associations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] |  | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] |  | (optional) defaults to false|
| **chargeStatus** | [**string**] |  | (optional) defaults to 'all'|
| **associations** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SavingsAccountData**

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

# **retrieveOne26**
> SavingsAccountData retrieveOne26()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let externalId: string; // (default to undefined)
let staffInSelectedOfficeOnly: boolean; // (optional) (default to false)
let chargeStatus: string; // (optional) (default to 'all')
let associations: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOne26(
    externalId,
    staffInSelectedOfficeOnly,
    chargeStatus,
    associations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] |  | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] |  | (optional) defaults to false|
| **chargeStatus** | [**string**] |  | (optional) defaults to 'all'|
| **associations** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SavingsAccountData**

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

# **submitApplication2**
> PostSavingsAccountsResponse submitApplication2(postSavingsAccountsRequest)

Submits new savings application  Mandatory Fields: clientId or groupId, productId, submittedOnDate  Optional Fields: accountNo, externalId, fieldOfficerId  Inherited from Product (if not provided): nominalAnnualInterestRate, interestCompoundingPeriodType, interestCalculationType, interestCalculationDaysInYearType, minRequiredOpeningBalance, lockinPeriodFrequency, lockinPeriodFrequencyType, withdrawalFeeForTransfers, allowOverdraft, overdraftLimit, withHoldTax  Additional Mandatory Field if Entity-Datatable Check is enabled for the entity of type Savings: datatables

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration,
    PostSavingsAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let postSavingsAccountsRequest: PostSavingsAccountsRequest; //

const { status, data } = await apiInstance.submitApplication2(
    postSavingsAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountsRequest** | **PostSavingsAccountsRequest**|  | |


### Return type

**PostSavingsAccountsResponse**

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

# **submitGSIMApplication**
> string submitGSIMApplication()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.submitGSIMApplication(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **template14**
> GetSavingsAccountsTemplateResponse template14()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  savingsaccounts/template?clientId=1   savingsaccounts/template?clientId=1&productId=1

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let clientId: number; //clientId (optional) (default to undefined)
let groupId: number; //groupId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.template14(
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

**GetSavingsAccountsTemplateResponse**

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

# **update20**
> PutSavingsAccountsAccountIdResponse update20(putSavingsAccountsAccountIdRequest)

Modify a savings application:  Savings application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc  Modify savings account withhold tax applicability:  Savings application\'s withhold tax can be modified when in \'Active\' state. Once the application is activated, can modify the account withhold tax to post tax or vice-versaShowing request/response for \'Modify a savings application\'

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration,
    PutSavingsAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let putSavingsAccountsAccountIdRequest: PutSavingsAccountsAccountIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.update20(
    accountId,
    putSavingsAccountsAccountIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSavingsAccountsAccountIdRequest** | **PutSavingsAccountsAccountIdRequest**|  | |
| **accountId** | [**number**] | accountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PutSavingsAccountsAccountIdResponse**

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

# **update21**
> PutSavingsAccountsAccountIdResponse update21(putSavingsAccountsAccountIdRequest)

Modify a savings application:  Savings application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc  Modify savings account withhold tax applicability:  Savings application\'s withhold tax can be modified when in \'Active\' state. Once the application is activated, can modify the account withhold tax to post tax or vice-versaShowing request/response for \'Modify a savings application\'

### Example

```typescript
import {
    SavingsAccountApi,
    Configuration,
    PutSavingsAccountsAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let externalId: string; //externalId (default to undefined)
let putSavingsAccountsAccountIdRequest: PutSavingsAccountsAccountIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.update21(
    externalId,
    putSavingsAccountsAccountIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSavingsAccountsAccountIdRequest** | **PutSavingsAccountsAccountIdRequest**|  | |
| **externalId** | [**string**] | externalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PutSavingsAccountsAccountIdResponse**

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

# **updateGsim**
> string updateGsim()


### Example

```typescript
import {
    SavingsAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsAccountApi(configuration);

let parentAccountId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateGsim(
    parentAccountId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **parentAccountId** | [**number**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

