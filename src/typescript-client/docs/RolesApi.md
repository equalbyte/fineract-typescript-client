# RolesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**actionsOnRoles**](#actionsonroles) | **POST** /v1/roles/{roleId} | Enable Role | Disable Role|
|[**createRole**](#createrole) | **POST** /v1/roles | Create a New Role|
|[**deleteRole**](#deleterole) | **DELETE** /v1/roles/{roleId} | Delete a Role|
|[**retrieveAllRoles**](#retrieveallroles) | **GET** /v1/roles | List Roles|
|[**retrieveRole**](#retrieverole) | **GET** /v1/roles/{roleId} | Retrieve a Role|
|[**retrieveRolePermissions**](#retrieverolepermissions) | **GET** /v1/roles/{roleId}/permissions | Retrieve a Role\&#39;s Permissions|
|[**updateRole**](#updaterole) | **PUT** /v1/roles/{roleId} | Update a Role|
|[**updateRolePermissions**](#updaterolepermissions) | **PUT** /v1/roles/{roleId}/permissions | Update a Role\&#39;s Permissions|

# **actionsOnRoles**
> PostRolesRoleIdResponse actionsOnRoles()

Description : Enable role in case role is disabled. | Disable the role in case role is not associated with any users.      Example Request:   https://DomainName/api/v1/roles/{roleId}?command=enable      https://DomainName/api/v1/roles/{roleId}?command=disable

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.actionsOnRoles(
    roleId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**number**] | roleId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostRolesRoleIdResponse**

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

# **createRole**
> PostRolesResponse createRole(postRolesRequest)

Mandatory Fields name, description

### Example

```typescript
import {
    RolesApi,
    Configuration,
    PostRolesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let postRolesRequest: PostRolesRequest; //

const { status, data } = await apiInstance.createRole(
    postRolesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRolesRequest** | **PostRolesRequest**|  | |


### Return type

**PostRolesResponse**

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

# **deleteRole**
> DeleteRolesRoleIdResponse deleteRole()

Description : Delete the role in case role is not associated with any users.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)

const { status, data } = await apiInstance.deleteRole(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**number**] | roleId | defaults to undefined|


### Return type

**DeleteRolesRoleIdResponse**

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

# **retrieveAllRoles**
> Array<GetRolesResponse> retrieveAllRoles()

Example Requests:  roles   roles?fields=name

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

const { status, data } = await apiInstance.retrieveAllRoles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetRolesResponse>**

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

# **retrieveRole**
> GetRolesRoleIdResponse retrieveRole()

Example Requests:  roles/1   roles/1?fields=name

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)

const { status, data } = await apiInstance.retrieveRole(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**number**] | roleId | defaults to undefined|


### Return type

**GetRolesRoleIdResponse**

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

# **retrieveRolePermissions**
> GetRolesRoleIdPermissionsResponse retrieveRolePermissions()

Example Requests:  roles/1/permissions

### Example

```typescript
import {
    RolesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)

const { status, data } = await apiInstance.retrieveRolePermissions(
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roleId** | [**number**] | roleId | defaults to undefined|


### Return type

**GetRolesRoleIdPermissionsResponse**

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

# **updateRole**
> PutRolesRoleIdResponse updateRole(putRolesRoleIdRequest)


### Example

```typescript
import {
    RolesApi,
    Configuration,
    PutRolesRoleIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)
let putRolesRoleIdRequest: PutRolesRoleIdRequest; //

const { status, data } = await apiInstance.updateRole(
    roleId,
    putRolesRoleIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putRolesRoleIdRequest** | **PutRolesRoleIdRequest**|  | |
| **roleId** | [**number**] | roleId | defaults to undefined|


### Return type

**PutRolesRoleIdResponse**

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

# **updateRolePermissions**
> PutRolesRoleIdPermissionsResponse updateRolePermissions(putRolesRoleIdPermissionsRequest)


### Example

```typescript
import {
    RolesApi,
    Configuration,
    PutRolesRoleIdPermissionsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

let roleId: number; //roleId (default to undefined)
let putRolesRoleIdPermissionsRequest: PutRolesRoleIdPermissionsRequest; //

const { status, data } = await apiInstance.updateRolePermissions(
    roleId,
    putRolesRoleIdPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putRolesRoleIdPermissionsRequest** | **PutRolesRoleIdPermissionsRequest**|  | |
| **roleId** | [**number**] | roleId | defaults to undefined|


### Return type

**PutRolesRoleIdPermissionsResponse**

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

