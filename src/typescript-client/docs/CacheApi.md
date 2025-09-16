# CacheApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll4**](#retrieveall4) | **GET** /v1/caches | Retrieve Cache Types|
|[**switchCache**](#switchcache) | **PUT** /v1/caches | Switch Cache|

# **retrieveAll4**
> Array<CacheData> retrieveAll4()

Returns the list of caches.  Example Requests:  caches 

### Example

```typescript
import {
    CacheApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CacheApi(configuration);

const { status, data } = await apiInstance.retrieveAll4();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CacheData>**

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

# **switchCache**
> CacheSwitchResponse switchCache()

Switches the cache to chosen one.

### Example

```typescript
import {
    CacheApi,
    Configuration,
    CacheSwitchRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CacheApi(configuration);

let cacheSwitchRequest: CacheSwitchRequest; // (optional)

const { status, data } = await apiInstance.switchCache(
    cacheSwitchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cacheSwitchRequest** | **CacheSwitchRequest**|  | |


### Return type

**CacheSwitchResponse**

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

