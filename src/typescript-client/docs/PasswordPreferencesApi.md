# PasswordPreferencesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieve1**](#retrieve1) | **GET** /v1/passwordpreferences | |
|[**template21**](#template21) | **GET** /v1/passwordpreferences/template | List Application Password validation policies|
|[**update25**](#update25) | **PUT** /v1/passwordpreferences | Update password preferences|

# **retrieve1**
> GetPasswordPreferencesTemplateResponse retrieve1()


### Example

```typescript
import {
    PasswordPreferencesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PasswordPreferencesApi(configuration);

const { status, data } = await apiInstance.retrieve1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetPasswordPreferencesTemplateResponse**

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

# **template21**
> Array<GetPasswordPreferencesTemplateResponse> template21()

ARGUMENTS Example Requests:  passwordpreferences

### Example

```typescript
import {
    PasswordPreferencesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PasswordPreferencesApi(configuration);

const { status, data } = await apiInstance.template21();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetPasswordPreferencesTemplateResponse>**

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

# **update25**
> update25(putPasswordPreferencesTemplateRequest)


### Example

```typescript
import {
    PasswordPreferencesApi,
    Configuration,
    PutPasswordPreferencesTemplateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PasswordPreferencesApi(configuration);

let putPasswordPreferencesTemplateRequest: PutPasswordPreferencesTemplateRequest; //

const { status, data } = await apiInstance.update25(
    putPasswordPreferencesTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPasswordPreferencesTemplateRequest** | **PutPasswordPreferencesTemplateRequest**|  | |


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

