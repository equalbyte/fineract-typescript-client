# ShareAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccount**](#createaccount) | **POST** /v1/accounts/{type} | Submit new share application|
|[**getSharedAccountsTemplate**](#getsharedaccountstemplate) | **GET** /v1/accounts/{type}/downloadtemplate | |
|[**handleCommands2**](#handlecommands2) | **POST** /v1/accounts/{type}/{accountId} | Approve share application | Undo approval share application | Reject share application | Activate a share account | Close a share account | Apply additional shares on a share account | Approve additional shares request on a share account | Reject additional shares request on a share account | Redeem shares on a share account|
|[**postSharedAccountsTemplate**](#postsharedaccountstemplate) | **POST** /v1/accounts/{type}/uploadtemplate | |
|[**retrieveAccount**](#retrieveaccount) | **GET** /v1/accounts/{type}/{accountId} | Retrieve a share application/account|
|[**retrieveAllAccounts1**](#retrieveallaccounts1) | **GET** /v1/accounts/{type} | List share applications/accounts|
|[**template7**](#template7) | **GET** /v1/accounts/{type}/template | Retrieve Share Account Template|
|[**updateAccount**](#updateaccount) | **PUT** /v1/accounts/{type}/{accountId} | Modify a share application|

# **createAccount**
> PostAccountsTypeResponse createAccount(accountRequest)

Submits new share application  Mandatory Fields: clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate  Optional Fields: accountNo, externalId  Inherited from Product (if not provided): minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType

### Example

```typescript
import {
    ShareAccountApi,
    Configuration,
    AccountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let accountRequest: AccountRequest; //

const { status, data } = await apiInstance.createAccount(
    type,
    accountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountRequest** | **AccountRequest**|  | |
| **type** | [**string**] | type | defaults to undefined|


### Return type

**PostAccountsTypeResponse**

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

# **getSharedAccountsTemplate**
> getSharedAccountsTemplate()


### Example

```typescript
import {
    ShareAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getSharedAccountsTemplate(
    type,
    officeId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
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

# **handleCommands2**
> PostAccountsTypeAccountIdResponse handleCommands2(postAccountsTypeAccountIdRequest)

Approve share application:  Approves share application so long as its in \'Submitted and pending approval\' state.  Undo approval share application:  Will move \'approved\' share application back to \'Submitted and pending approval\' state.  Reject share application:  Rejects share application so long as its in \'Submitted and pending approval\' state.  Activate a share account:  Results in an approved share application being converted into an \'active\' share account.  Close a share account:  Results in an Activated share application being converted into an \'closed\' share account.  closedDate is closure date of share account  Mandatory Fields: dateFormat,locale,closedDate  Apply additional shares on a share account:  requestedDate is requsted date of share purchase  requestedShares is number of shares to be purchase  Mandatory Fields: dateFormat,locale,requestedDate, requestedShares  Approve additional shares request on a share account  requestedShares is Share purchase transaction ids  Mandatory Fields: requestedShares  Reject additional shares request on a share account:  requestedShares is Share purchase transaction ids  Mandatory Fields: requestedShares  Redeem shares on a share account:  Results redeem some/all shares from share account.  requestedDate is requsted date of shares redeem  requestedShares is number of shares to be redeemed  Mandatory Fields: dateFormat,locale,requestedDate,requestedShares  Showing request/response for \'Reject additional shares request on a share account\'  For more info visit this link - https://fineract.apache.org/docs/legacy/#shareaccounts

### Example

```typescript
import {
    ShareAccountApi,
    Configuration,
    PostAccountsTypeAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let accountId: number; //accountId (default to undefined)
let postAccountsTypeAccountIdRequest: PostAccountsTypeAccountIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands2(
    type,
    accountId,
    postAccountsTypeAccountIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAccountsTypeAccountIdRequest** | **PostAccountsTypeAccountIdRequest**|  | |
| **type** | [**string**] | type | defaults to undefined|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostAccountsTypeAccountIdResponse**

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

# **postSharedAccountsTemplate**
> number postSharedAccountsTemplate()


### Example

```typescript
import {
    ShareAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postSharedAccountsTemplate(
    type,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**number**

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

# **retrieveAccount**
> GetAccountsTypeAccountIdResponse retrieveAccount()

Retrieves a share application/account  Example Requests :  shareaccount/1

### Example

```typescript
import {
    ShareAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let accountId: number; //accountId (default to undefined)
let type: string; //type (default to undefined)

const { status, data } = await apiInstance.retrieveAccount(
    accountId,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] | accountId | defaults to undefined|
| **type** | [**string**] | type | defaults to undefined|


### Return type

**GetAccountsTypeAccountIdResponse**

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

# **retrieveAllAccounts1**
> GetAccountsTypeResponse retrieveAllAccounts1()

Lists share applications/accounts  Example Requests:  shareaccount

### Example

```typescript
import {
    ShareAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllAccounts1(
    type,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**GetAccountsTypeResponse**

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

# **template7**
> GetAccountsTypeTemplateResponse template7()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Requests:  accounts/share/template?clientId=1   accounts/share/template?clientId=1&productId=1

### Example

```typescript
import {
    ShareAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let clientId: number; //clientId (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)

const { status, data } = await apiInstance.template7(
    type,
    clientId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **productId** | [**number**] | productId | (optional) defaults to undefined|


### Return type

**GetAccountsTypeTemplateResponse**

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

# **updateAccount**
> PutAccountsTypeAccountIdResponse updateAccount(putAccountsTypeAccountIdRequest)

Share application can only be modified when in \'Submitted and pending approval\' state. Once the application is approved, the details cannot be changed using this method. Specific api endpoints will be created to allow change of interest detail such as rate, compounding period, posting period etc

### Example

```typescript
import {
    ShareAccountApi,
    Configuration,
    PutAccountsTypeAccountIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ShareAccountApi(configuration);

let type: string; //type (default to undefined)
let accountId: number; //accountId (default to undefined)
let putAccountsTypeAccountIdRequest: PutAccountsTypeAccountIdRequest; //

const { status, data } = await apiInstance.updateAccount(
    type,
    accountId,
    putAccountsTypeAccountIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putAccountsTypeAccountIdRequest** | **PutAccountsTypeAccountIdRequest**|  | |
| **type** | [**string**] | type | defaults to undefined|
| **accountId** | [**number**] | accountId | defaults to undefined|


### Return type

**PutAccountsTypeAccountIdResponse**

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

