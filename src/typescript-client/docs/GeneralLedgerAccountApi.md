# GeneralLedgerAccountApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGLAccount1**](#createglaccount1) | **POST** /v1/glaccounts | Create a General Ledger Account|
|[**deleteGLAccount1**](#deleteglaccount1) | **DELETE** /v1/glaccounts/{glAccountId} | Delete a GL Account|
|[**getGlAccountsTemplate**](#getglaccountstemplate) | **GET** /v1/glaccounts/downloadtemplate | |
|[**postGlAccountsTemplate**](#postglaccountstemplate) | **POST** /v1/glaccounts/uploadtemplate | |
|[**retreiveAccount**](#retreiveaccount) | **GET** /v1/glaccounts/{glAccountId} | Retrieve a General Ledger Account|
|[**retrieveAllAccounts**](#retrieveallaccounts) | **GET** /v1/glaccounts | List General Ledger Account|
|[**retrieveNewAccountDetails**](#retrievenewaccountdetails) | **GET** /v1/glaccounts/template | Retrieve GL Accounts Template|
|[**updateGLAccount1**](#updateglaccount1) | **PUT** /v1/glaccounts/{glAccountId} | Update a GL Account|

# **createGLAccount1**
> PostGLAccountsResponse createGLAccount1()

Note: You may optionally create Hierarchical Chart of Accounts by using the \"parentId\" property of an Account Mandatory Fields: name, glCode, type, usage and manualEntriesAllowed 

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration,
    PostGLAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let postGLAccountsRequest: PostGLAccountsRequest; // (optional)

const { status, data } = await apiInstance.createGLAccount1(
    postGLAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGLAccountsRequest** | **PostGLAccountsRequest**|  | |


### Return type

**PostGLAccountsResponse**

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

# **deleteGLAccount1**
> DeleteGLAccountsResponse deleteGLAccount1()

Deletes a GL Account

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let glAccountId: number; //glAccountId (default to undefined)

const { status, data } = await apiInstance.deleteGLAccount1(
    glAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **glAccountId** | [**number**] | glAccountId | defaults to undefined|


### Return type

**DeleteGLAccountsResponse**

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

# **getGlAccountsTemplate**
> getGlAccountsTemplate()


### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getGlAccountsTemplate(
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **postGlAccountsTemplate**
> number postGlAccountsTemplate()


### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postGlAccountsTemplate(
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

# **retreiveAccount**
> GetGLAccountsResponse retreiveAccount()

Example Requests:  glaccounts/1  glaccounts/1?template=true  glaccounts/1?fields=name,glCode  glaccounts/1?fetchRunningBalance=true 

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let glAccountId: number; //glAccountId (default to undefined)
let fetchRunningBalance: boolean; //fetchRunningBalance (optional) (default to undefined)

const { status, data } = await apiInstance.retreiveAccount(
    glAccountId,
    fetchRunningBalance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **glAccountId** | [**number**] | glAccountId | defaults to undefined|
| **fetchRunningBalance** | [**boolean**] | fetchRunningBalance | (optional) defaults to undefined|


### Return type

**GetGLAccountsResponse**

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

# **retrieveAllAccounts**
> Array<GetGLAccountsResponse> retrieveAllAccounts()

ARGUMENTS type Integer optional manualEntriesAllowed boolean optional usage Integer optional disabled boolean optional parentId Long optional tagId Long optional Example Requests:  glaccounts  glaccounts?type=1&manualEntriesAllowed=true&usage=1&disabled=false  glaccounts?fetchRunningBalance=true 

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let type: number; //type (optional) (default to undefined)
let searchParam: string; //searchParam (optional) (default to undefined)
let usage: number; //usage (optional) (default to undefined)
let manualEntriesAllowed: boolean; //manualEntriesAllowed (optional) (default to undefined)
let disabled: boolean; //disabled (optional) (default to undefined)
let fetchRunningBalance: boolean; //fetchRunningBalance (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllAccounts(
    type,
    searchParam,
    usage,
    manualEntriesAllowed,
    disabled,
    fetchRunningBalance
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**number**] | type | (optional) defaults to undefined|
| **searchParam** | [**string**] | searchParam | (optional) defaults to undefined|
| **usage** | [**number**] | usage | (optional) defaults to undefined|
| **manualEntriesAllowed** | [**boolean**] | manualEntriesAllowed | (optional) defaults to undefined|
| **disabled** | [**boolean**] | disabled | (optional) defaults to undefined|
| **fetchRunningBalance** | [**boolean**] | fetchRunningBalance | (optional) defaults to undefined|


### Return type

**Array<GetGLAccountsResponse>**

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

# **retrieveNewAccountDetails**
> GetGLAccountsTemplateResponse retrieveNewAccountDetails()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  glaccounts/template glaccounts/template?type=1  type is optional and integer value from 1 to 5.  1.Assets 2.Liabilities 3.Equity 4.Income 5.Expenses 

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let type: number; //type (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveNewAccountDetails(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**number**] | type | (optional) defaults to undefined|


### Return type

**GetGLAccountsTemplateResponse**

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

# **updateGLAccount1**
> PutGLAccountsResponse updateGLAccount1()

Updates a GL Account

### Example

```typescript
import {
    GeneralLedgerAccountApi,
    Configuration,
    PutGLAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GeneralLedgerAccountApi(configuration);

let glAccountId: number; //glAccountId (default to undefined)
let putGLAccountsRequest: PutGLAccountsRequest; // (optional)

const { status, data } = await apiInstance.updateGLAccount1(
    glAccountId,
    putGLAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGLAccountsRequest** | **PutGLAccountsRequest**|  | |
| **glAccountId** | [**number**] | glAccountId | defaults to undefined|


### Return type

**PutGLAccountsResponse**

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

