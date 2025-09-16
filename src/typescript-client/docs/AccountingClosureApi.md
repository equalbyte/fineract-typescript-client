# AccountingClosureApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGLClosure**](#createglclosure) | **POST** /v1/glclosures | Create an Accounting Closure|
|[**deleteGLClosure**](#deleteglclosure) | **DELETE** /v1/glclosures/{glClosureId} | Delete an accounting closure|
|[**retreiveClosure**](#retreiveclosure) | **GET** /v1/glclosures/{glClosureId} | Retrieve an Accounting Closure|
|[**retrieveAllClosures**](#retrieveallclosures) | **GET** /v1/glclosures | List Accounting closures|
|[**updateGLClosure**](#updateglclosure) | **PUT** /v1/glclosures/{glClosureId} | Update an Accounting closure|

# **createGLClosure**
> PostGlClosuresResponse createGLClosure(postGlClosuresRequest)

Mandatory Fields officeId,closingDate

### Example

```typescript
import {
    AccountingClosureApi,
    Configuration,
    PostGlClosuresRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingClosureApi(configuration);

let postGlClosuresRequest: PostGlClosuresRequest; //

const { status, data } = await apiInstance.createGLClosure(
    postGlClosuresRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGlClosuresRequest** | **PostGlClosuresRequest**|  | |


### Return type

**PostGlClosuresResponse**

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

# **deleteGLClosure**
> DeleteGlClosuresResponse deleteGLClosure()

Note: Only the latest accounting closure associated with a branch may be deleted.

### Example

```typescript
import {
    AccountingClosureApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingClosureApi(configuration);

let glClosureId: number; //glclosureId (default to undefined)

const { status, data } = await apiInstance.deleteGLClosure(
    glClosureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **glClosureId** | [**number**] | glclosureId | defaults to undefined|


### Return type

**DeleteGlClosuresResponse**

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

# **retreiveClosure**
> GetGlClosureResponse retreiveClosure()

Example Requests:  glclosures/1   /glclosures/1?fields=officeName,closingDate

### Example

```typescript
import {
    AccountingClosureApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingClosureApi(configuration);

let glClosureId: number; //glClosureId (default to undefined)

const { status, data } = await apiInstance.retreiveClosure(
    glClosureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **glClosureId** | [**number**] | glClosureId | defaults to undefined|


### Return type

**GetGlClosureResponse**

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

# **retrieveAllClosures**
> Array<GetGlClosureResponse> retrieveAllClosures()

Example Requests:  glclosures

### Example

```typescript
import {
    AccountingClosureApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingClosureApi(configuration);

let officeId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClosures(
    officeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<GetGlClosureResponse>**

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

# **updateGLClosure**
> PutGlClosuresResponse updateGLClosure()

Once an accounting closure is created, only the comments associated with it may be edited

### Example

```typescript
import {
    AccountingClosureApi,
    Configuration,
    PutGlClosuresRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingClosureApi(configuration);

let glClosureId: number; //glClosureId (default to undefined)
let putGlClosuresRequest: PutGlClosuresRequest; // (optional)

const { status, data } = await apiInstance.updateGLClosure(
    glClosureId,
    putGlClosuresRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGlClosuresRequest** | **PutGlClosuresRequest**|  | |
| **glClosureId** | [**number**] | glClosureId | defaults to undefined|


### Return type

**PutGlClosuresResponse**

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

