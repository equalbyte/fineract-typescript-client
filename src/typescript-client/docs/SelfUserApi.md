# SelfUserApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**update24**](#update24) | **PUT** /v1/self/user | Update User|

# **update24**
> PutSelfUserResponse update24(putSelfUserRequest)

This API can be used by Self Service user to update their own user information. Currently, \"password\" and \"repeatPassword\" are the only parameters accepted.

### Example

```typescript
import {
    SelfUserApi,
    Configuration,
    PutSelfUserRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfUserApi(configuration);

let putSelfUserRequest: PutSelfUserRequest; //

const { status, data } = await apiInstance.update24(
    putSelfUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSelfUserRequest** | **PutSelfUserRequest**|  | |


### Return type

**PutSelfUserResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

