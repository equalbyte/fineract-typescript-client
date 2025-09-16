# SelfAuthenticationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authenticate1**](#authenticate1) | **POST** /v1/self/authentication | Verify authentication|

# **authenticate1**
> PostSelfAuthenticationResponse authenticate1(postAuthenticationRequest)

Authenticates the credentials provided and returns the set roles and permissions allowed.  Please visit this link for more info - https://fineract.apache.org/docs/legacy/#selfbasicauth

### Example

```typescript
import {
    SelfAuthenticationApi,
    Configuration,
    PostAuthenticationRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfAuthenticationApi(configuration);

let postAuthenticationRequest: PostAuthenticationRequest; //

const { status, data } = await apiInstance.authenticate1(
    postAuthenticationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAuthenticationRequest** | **PostAuthenticationRequest**|  | |


### Return type

**PostSelfAuthenticationResponse**

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

