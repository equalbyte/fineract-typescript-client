# UsersApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changePassword**](#changepassword) | **POST** /v1/users/{userId}/pwd | Change the password of a User|
|[**create15**](#create15) | **POST** /v1/users | Create a User|
|[**delete23**](#delete23) | **DELETE** /v1/users/{userId} | Delete a User|
|[**getUserTemplate**](#getusertemplate) | **GET** /v1/users/downloadtemplate | |
|[**postUsersTemplate**](#postuserstemplate) | **POST** /v1/users/uploadtemplate | |
|[**retrieveAll41**](#retrieveall41) | **GET** /v1/users | Retrieve list of users|
|[**retrieveOne31**](#retrieveone31) | **GET** /v1/users/{userId} | Retrieve a User|
|[**template22**](#template22) | **GET** /v1/users/template | Retrieve User Details Template|
|[**update26**](#update26) | **PUT** /v1/users/{userId} | Update a User|

# **changePassword**
> ChangePwdUsersUserIdResponse changePassword(changePwdUsersUserIdRequest)

When updating a password you must provide the repeatPassword parameter also.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    ChangePwdUsersUserIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: number; //userId (default to undefined)
let changePwdUsersUserIdRequest: ChangePwdUsersUserIdRequest; //

const { status, data } = await apiInstance.changePassword(
    userId,
    changePwdUsersUserIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePwdUsersUserIdRequest** | **ChangePwdUsersUserIdRequest**|  | |
| **userId** | [**number**] | userId | defaults to undefined|


### Return type

**ChangePwdUsersUserIdResponse**

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

# **create15**
> PostUsersResponse create15(postUsersRequest)

Adds new application user.  Note: Password information is not required (or processed). Password details at present are auto-generated and then sent to the email account given (which is why it can take a few seconds to complete).  Mandatory Fields:  username, firstname, lastname, email, officeId, roles, sendPasswordToEmail  Optional Fields:  staffId,passwordNeverExpires,isSelfServiceUser,clients

### Example

```typescript
import {
    UsersApi,
    Configuration,
    PostUsersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let postUsersRequest: PostUsersRequest; //

const { status, data } = await apiInstance.create15(
    postUsersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postUsersRequest** | **PostUsersRequest**|  | |


### Return type

**PostUsersResponse**

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

# **delete23**
> DeleteUsersUserIdResponse delete23()

Removes the user and the associated roles and permissions.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: number; //userId (default to undefined)

const { status, data } = await apiInstance.delete23(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | userId | defaults to undefined|


### Return type

**DeleteUsersUserIdResponse**

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

# **getUserTemplate**
> getUserTemplate()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUserTemplate(
    officeId,
    staffId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postUsersTemplate**
> string postUsersTemplate()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postUsersTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll41**
> Array<GetUsersResponse> retrieveAll41()

Example Requests:  users   users?fields=id,username,email,officeName

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.retrieveAll41();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetUsersResponse>**

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

# **retrieveOne31**
> GetUsersUserIdResponse retrieveOne31()

Example Requests:  users/1   users/1?template=true   users/1?fields=username,officeName

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: number; //userId (default to undefined)

const { status, data } = await apiInstance.retrieveOne31(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] | userId | defaults to undefined|


### Return type

**GetUsersUserIdResponse**

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

# **template22**
> GetUsersTemplateResponse template22()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  users/template

### Example

```typescript
import {
    UsersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.template22();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetUsersTemplateResponse**

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

# **update26**
> PutUsersUserIdResponse update26(putUsersUserIdRequest)

Updates the user

### Example

```typescript
import {
    UsersApi,
    Configuration,
    PutUsersUserIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: number; //userId (default to undefined)
let putUsersUserIdRequest: PutUsersUserIdRequest; //

const { status, data } = await apiInstance.update26(
    userId,
    putUsersUserIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putUsersUserIdRequest** | **PutUsersUserIdRequest**|  | |
| **userId** | [**number**] | userId | defaults to undefined|


### Return type

**PutUsersUserIdResponse**

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

