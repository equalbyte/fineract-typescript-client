# AdhocQueryApiApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAdHocQuery**](#createadhocquery) | **POST** /v1/adhocquery | |
|[**deleteAdHocQuery**](#deleteadhocquery) | **DELETE** /v1/adhocquery/{adHocId} | |
|[**retrieveAdHocQuery**](#retrieveadhocquery) | **GET** /v1/adhocquery/{adHocId} | |
|[**retrieveAll2**](#retrieveall2) | **GET** /v1/adhocquery | |
|[**template**](#template) | **GET** /v1/adhocquery/template | |
|[**update**](#update) | **PUT** /v1/adhocquery/{adHocId} | |

# **createAdHocQuery**
> CommandProcessingResult createAdHocQuery()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration,
    AdHocRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

let adHocRequest: AdHocRequest; // (optional)

const { status, data } = await apiInstance.createAdHocQuery(
    adHocRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adHocRequest** | **AdHocRequest**|  | |


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
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAdHocQuery**
> CommandProcessingResult deleteAdHocQuery()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

let adHocId: number; //adHocId (default to undefined)

const { status, data } = await apiInstance.deleteAdHocQuery(
    adHocId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adHocId** | [**number**] | adHocId | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **retrieveAdHocQuery**
> AdHocData retrieveAdHocQuery()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

let adHocId: number; //adHocId (default to undefined)

const { status, data } = await apiInstance.retrieveAdHocQuery(
    adHocId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adHocId** | [**number**] | adHocId | defaults to undefined|


### Return type

**AdHocData**

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

# **retrieveAll2**
> Array<AdHocData> retrieveAll2()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

const { status, data } = await apiInstance.retrieveAll2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AdHocData>**

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

# **template**
> AdHocData template()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

const { status, data } = await apiInstance.template();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdHocData**

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

# **update**
> CommandProcessingResult update()


### Example

```typescript
import {
    AdhocQueryApiApi,
    Configuration,
    AdHocRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AdhocQueryApiApi(configuration);

let adHocId: number; //adHocId (default to undefined)
let adHocRequest: AdHocRequest; // (optional)

const { status, data } = await apiInstance.update(
    adHocId,
    adHocRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adHocRequest** | **AdHocRequest**|  | |
| **adHocId** | [**number**] | adHocId | defaults to undefined|


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
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

