# FineractEntityApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMap**](#createmap) | **POST** /v1/entitytoentitymapping/{relId} | |
|[**delete4**](#delete4) | **DELETE** /v1/entitytoentitymapping/{mapId} | |
|[**getEntityToEntityMappings**](#getentitytoentitymappings) | **GET** /v1/entitytoentitymapping/{mapId}/{fromId}/{toId} | |
|[**retrieveAll7**](#retrieveall7) | **GET** /v1/entitytoentitymapping | |
|[**retrieveOne4**](#retrieveone4) | **GET** /v1/entitytoentitymapping/{mapId} | |
|[**updateMap**](#updatemap) | **PUT** /v1/entitytoentitymapping/{mapId} | |

# **createMap**
> string createMap()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

let relId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.createMap(
    relId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **relId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **delete4**
> string delete4()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

let mapId: number; // (default to undefined)

const { status, data } = await apiInstance.delete4(
    mapId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mapId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **getEntityToEntityMappings**
> string getEntityToEntityMappings()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

let mapId: number; // (default to undefined)
let fromId: number; // (default to undefined)
let toId: number; // (default to undefined)

const { status, data } = await apiInstance.getEntityToEntityMappings(
    mapId,
    fromId,
    toId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mapId** | [**number**] |  | defaults to undefined|
| **fromId** | [**number**] |  | defaults to undefined|
| **toId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **retrieveAll7**
> string retrieveAll7()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

const { status, data } = await apiInstance.retrieveAll7();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **retrieveOne4**
> string retrieveOne4()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

let mapId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOne4(
    mapId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mapId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **updateMap**
> string updateMap()


### Example

```typescript
import {
    FineractEntityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FineractEntityApi(configuration);

let mapId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateMap(
    mapId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **mapId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

