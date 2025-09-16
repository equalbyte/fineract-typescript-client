# SelfUserDetailsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAuthenticatedUserData1**](#fetchauthenticateduserdata1) | **GET** /v1/self/userdetails | Fetch authenticated user details|

# **fetchAuthenticatedUserData1**
> GetSelfUserDetailsResponse fetchAuthenticatedUserData1()

Checks the Authentication and returns the set roles and permissions allowed  For more info visit this link - https://fineract.apache.org/docs/legacy/#selfoauth

### Example

```typescript
import {
    SelfUserDetailsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfUserDetailsApi(configuration);

const { status, data } = await apiInstance.fetchAuthenticatedUserData1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSelfUserDetailsResponse**

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

