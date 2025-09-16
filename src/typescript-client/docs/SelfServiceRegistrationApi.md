# SelfServiceRegistrationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSelfServiceRegistrationRequest**](#createselfserviceregistrationrequest) | **POST** /v1/self/registration | |
|[**createSelfServiceUser**](#createselfserviceuser) | **POST** /v1/self/registration/user | |

# **createSelfServiceRegistrationRequest**
> string createSelfServiceRegistrationRequest()


### Example

```typescript
import {
    SelfServiceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfServiceRegistrationApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.createSelfServiceRegistrationRequest(
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

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSelfServiceUser**
> string createSelfServiceUser()


### Example

```typescript
import {
    SelfServiceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfServiceRegistrationApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.createSelfServiceUser(
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

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

