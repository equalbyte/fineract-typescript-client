# SelfAccountTransferApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create14**](#create14) | **POST** /v1/self/accounttransfers | Create new Transfer|
|[**template15**](#template15) | **GET** /v1/self/accounttransfers/template | Retrieve Account Transfer Template|

# **create14**
> Array<PostNewTransferResponse> create14()

Ability to create new transfer of monetary funds from one account to another.   Example Requests:   self/accounttransfers/ 

### Example

```typescript
import {
    SelfAccountTransferApi,
    Configuration,
    AccountTransferRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfAccountTransferApi(configuration);

let type: string; // (optional) (default to '')
let accountTransferRequest: AccountTransferRequest; // (optional)

const { status, data } = await apiInstance.create14(
    type,
    accountTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountTransferRequest** | **AccountTransferRequest**|  | |
| **type** | [**string**] |  | (optional) defaults to ''|


### Return type

**Array<PostNewTransferResponse>**

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

# **template15**
> Array<GetAccountTransferTemplateResponse> template15()

Returns list of loan/savings accounts that can be used for account transfer   Example Requests:  self/accounttransfers/template 

### Example

```typescript
import {
    SelfAccountTransferApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfAccountTransferApi(configuration);

let type: string; // (optional) (default to '')

const { status, data } = await apiInstance.template15(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] |  | (optional) defaults to ''|


### Return type

**Array<GetAccountTransferTemplateResponse>**

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

