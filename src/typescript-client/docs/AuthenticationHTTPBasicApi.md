# AuthenticationHTTPBasicApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authenticate**](#authenticate) | **POST** /v1/authentication | Verify authentication|

# **authenticate**
> PostAuthenticationResponse authenticate(postAuthenticationRequest)

Authenticates the credentials provided and returns the set roles and permissions allowed.

### Example

```typescript
import {
    AuthenticationHTTPBasicApi,
    Configuration,
    PostAuthenticationRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AuthenticationHTTPBasicApi(configuration);

let postAuthenticationRequest: PostAuthenticationRequest; //
let returnClientList: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.authenticate(
    postAuthenticationRequest,
    returnClientList
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAuthenticationRequest** | **PostAuthenticationRequest**|  | |
| **returnClientList** | [**boolean**] |  | (optional) defaults to false|


### Return type

**PostAuthenticationResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Unauthenticated. Please login |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

