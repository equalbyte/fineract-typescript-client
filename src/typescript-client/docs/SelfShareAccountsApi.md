# SelfShareAccountsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccount1**](#createaccount1) | **POST** /v1/self/shareaccounts | Submit new share application|
|[**retrieveShareAccount**](#retrieveshareaccount) | **GET** /v1/self/shareaccounts/{accountId} | Retrieve a share application/account|
|[**template19**](#template19) | **GET** /v1/self/shareaccounts/template | Retrieve Share Account Template|

# **createAccount1**
> Array<PostNewShareApplicationResponse> createAccount1()

Mandatory fields:  clientId, productId, submittedDate, savingsAccountId, requestedShares, applicationDate   Optional Fields  accountNo, externalId   Inherited from Product (if not provided)  minimumActivePeriod, minimumActivePeriodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType.

### Example

```typescript
import {
    SelfShareAccountsApi,
    Configuration,
    AccountRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfShareAccountsApi(configuration);

let accountRequest: AccountRequest; // (optional)

const { status, data } = await apiInstance.createAccount1(
    accountRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountRequest** | **AccountRequest**|  | |


### Return type

**Array<PostNewShareApplicationResponse>**

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

# **retrieveShareAccount**
> string retrieveShareAccount()

   Example Requests:  self/shareaccounts/12 

### Example

```typescript
import {
    SelfShareAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfShareAccountsApi(configuration);

let accountId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveShareAccount(
    accountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountId** | [**number**] |  | defaults to undefined|


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

# **template19**
> Array<GetShareAccountsClientIdProductIdResponse> template19()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of: Field Defaults  Allowed Value Lists   Arguments  clientId:Integer mandatory productId:Integer optionalIf entered, productId, productName and selectedProduct fields are returned. Example Requests:  self/shareaccounts/template?clientId=14  self/shareaccounts/template?clientId=14&productId=3 

### Example

```typescript
import {
    SelfShareAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfShareAccountsApi(configuration);

let clientId: number; // (optional) (default to undefined)
let productId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.template19(
    clientId,
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | (optional) defaults to undefined|
| **productId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<GetShareAccountsClientIdProductIdResponse>**

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

