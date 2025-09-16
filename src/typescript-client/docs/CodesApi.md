# CodesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCode**](#createcode) | **POST** /v1/codes | Create a Code|
|[**deleteCode**](#deletecode) | **DELETE** /v1/codes/{codeId} | Delete a Code|
|[**retrieveCode**](#retrievecode) | **GET** /v1/codes/{codeId} | Retrieve a Code|
|[**retrieveCodeByName**](#retrievecodebyname) | **GET** /v1/codes/name/{codeName} | Retrieve a Code|
|[**retrieveCodes**](#retrievecodes) | **GET** /v1/codes | Retrieve Codes|
|[**updateCode**](#updatecode) | **PUT** /v1/codes/{codeId} | Update a Code|

# **createCode**
> PostCodesResponse createCode(postCodesRequest)

Creates a code. Codes created through api are always \'user defined\' and so system defined is marked as false.

### Example

```typescript
import {
    CodesApi,
    Configuration,
    PostCodesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

let postCodesRequest: PostCodesRequest; //

const { status, data } = await apiInstance.createCode(
    postCodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCodesRequest** | **PostCodesRequest**|  | |


### Return type

**PostCodesResponse**

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

# **deleteCode**
> DeleteCodesResponse deleteCode()

Deletes a code if it is not system defined.

### Example

```typescript
import {
    CodesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

let codeId: number; //codeId (default to undefined)

const { status, data } = await apiInstance.deleteCode(
    codeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**DeleteCodesResponse**

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

# **retrieveCode**
> GetCodesResponse retrieveCode()

Returns the details of a Code.  Example Requests:  codes/1

### Example

```typescript
import {
    CodesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

let codeId: number; //codeId (default to undefined)

const { status, data } = await apiInstance.retrieveCode(
    codeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**GetCodesResponse**

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

# **retrieveCodeByName**
> GetCodesResponse retrieveCodeByName()

Returns the details of a Code.  Example Requests:  codes/1

### Example

```typescript
import {
    CodesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

let codeName: string; //codeName (default to undefined)

const { status, data } = await apiInstance.retrieveCodeByName(
    codeName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeName** | [**string**] | codeName | defaults to undefined|


### Return type

**GetCodesResponse**

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

# **retrieveCodes**
> Array<GetCodesResponse> retrieveCodes()

Returns the list of codes.  Example Requests:  codes

### Example

```typescript
import {
    CodesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

const { status, data } = await apiInstance.retrieveCodes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetCodesResponse>**

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

# **updateCode**
> PutCodesResponse updateCode(putCodesRequest)

Updates the details of a code if it is not system defined.

### Example

```typescript
import {
    CodesApi,
    Configuration,
    PutCodesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodesApi(configuration);

let codeId: number; //codeId (default to undefined)
let putCodesRequest: PutCodesRequest; //

const { status, data } = await apiInstance.updateCode(
    codeId,
    putCodesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putCodesRequest** | **PutCodesRequest**|  | |
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**PutCodesResponse**

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

