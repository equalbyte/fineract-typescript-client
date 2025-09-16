# GroupsLevelApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllGroups**](#retrieveallgroups) | **GET** /v1/grouplevels | |

# **retrieveAllGroups**
> Array<GroupLevelData> retrieveAllGroups()


### Example

```typescript
import {
    GroupsLevelApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsLevelApi(configuration);

const { status, data } = await apiInstance.retrieveAllGroups();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GroupLevelData>**

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

