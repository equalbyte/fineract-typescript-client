# FetchAuthenticatedUserDetailsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAuthenticatedUserData**](#fetchauthenticateduserdata) | **GET** /v1/userdetails | Fetch authenticated user details |

# **fetchAuthenticatedUserData**
> GetUserDetailsResponse fetchAuthenticatedUserData()

checks the Authentication and returns the set roles and permissions allowed.

### Example

```typescript
import {
    FetchAuthenticatedUserDetailsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FetchAuthenticatedUserDetailsApi(configuration);

const { status, data } = await apiInstance.fetchAuthenticatedUserData();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUserDetailsResponse**

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

