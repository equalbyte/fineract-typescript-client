# PermissionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllPermissions**](#retrieveallpermissions) | **GET** /v1/permissions | List Application Permissions|
|[**updatePermissionsDetails**](#updatepermissionsdetails) | **PUT** /v1/permissions | Enable/Disable Permissions for Maker Checker|

# **retrieveAllPermissions**
> Array<GetPermissionsResponse> retrieveAllPermissions()

ARGUMENTS makerCheckerableoptional, Values are true, false. Default is false. If makerCheckerable=false or not supplied then a list of application permissions is returned. The \"selected\" attribute is always true in this case.  If makerCheckerable=true then the \"selected\" attribute shows whether the permission is enabled for Maker Check functionality.  Note: Each Apache Fineract transaction is associated with a permission.  Example Requests:  permissions   permissions?makerCheckerable=true   permissions?fields=grouping,code

### Example

```typescript
import {
    PermissionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PermissionsApi(configuration);

const { status, data } = await apiInstance.retrieveAllPermissions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetPermissionsResponse>**

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

# **updatePermissionsDetails**
> CommandProcessingResult updatePermissionsDetails(putPermissionsRequest)


### Example

```typescript
import {
    PermissionsApi,
    Configuration,
    PutPermissionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PermissionsApi(configuration);

let putPermissionsRequest: PutPermissionsRequest; //

const { status, data } = await apiInstance.updatePermissionsDetails(
    putPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPermissionsRequest** | **PutPermissionsRequest**|  | |


### Return type

**CommandProcessingResult**

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

