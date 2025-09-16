# DelinquencyRangeAndBucketsManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDelinquencyBucket**](#createdelinquencybucket) | **POST** /v1/delinquency/buckets | Create Delinquency Bucket|
|[**createDelinquencyRange**](#createdelinquencyrange) | **POST** /v1/delinquency/ranges | Create Delinquency Range|
|[**deleteDelinquencyBucket**](#deletedelinquencybucket) | **DELETE** /v1/delinquency/buckets/{delinquencyBucketId} | Delete Delinquency Bucket based on the Id|
|[**deleteDelinquencyRange**](#deletedelinquencyrange) | **DELETE** /v1/delinquency/ranges/{delinquencyRangeId} | Update Delinquency Range based on the Id|
|[**getDelinquencyBucket**](#getdelinquencybucket) | **GET** /v1/delinquency/buckets/{delinquencyBucketId} | Retrieve a specific Delinquency Bucket based on the Id|
|[**getDelinquencyBuckets**](#getdelinquencybuckets) | **GET** /v1/delinquency/buckets | List all Delinquency Buckets|
|[**getDelinquencyRange**](#getdelinquencyrange) | **GET** /v1/delinquency/ranges/{delinquencyRangeId} | Retrieve a specific Delinquency Range based on the Id|
|[**getDelinquencyRanges**](#getdelinquencyranges) | **GET** /v1/delinquency/ranges | List all Delinquency Ranges|
|[**updateDelinquencyBucket**](#updatedelinquencybucket) | **PUT** /v1/delinquency/buckets/{delinquencyBucketId} | Update Delinquency Bucket based on the Id|
|[**updateDelinquencyRange**](#updatedelinquencyrange) | **PUT** /v1/delinquency/ranges/{delinquencyRangeId} | Update Delinquency Range based on the Id|

# **createDelinquencyBucket**
> PostDelinquencyBucketResponse createDelinquencyBucket(delinquencyBucketRequest)


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration,
    DelinquencyBucketRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyBucketRequest: DelinquencyBucketRequest; //

const { status, data } = await apiInstance.createDelinquencyBucket(
    delinquencyBucketRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyBucketRequest** | **DelinquencyBucketRequest**|  | |


### Return type

**PostDelinquencyBucketResponse**

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

# **createDelinquencyRange**
> PostDelinquencyRangeResponse createDelinquencyRange(delinquencyRangeRequest)


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration,
    DelinquencyRangeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyRangeRequest: DelinquencyRangeRequest; //

const { status, data } = await apiInstance.createDelinquencyRange(
    delinquencyRangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyRangeRequest** | **DelinquencyRangeRequest**|  | |


### Return type

**PostDelinquencyRangeResponse**

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

# **deleteDelinquencyBucket**
> DeleteDelinquencyBucketResponse deleteDelinquencyBucket()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyBucketId: number; //delinquencyBucketId (default to undefined)

const { status, data } = await apiInstance.deleteDelinquencyBucket(
    delinquencyBucketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyBucketId** | [**number**] | delinquencyBucketId | defaults to undefined|


### Return type

**DeleteDelinquencyBucketResponse**

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

# **deleteDelinquencyRange**
> DeleteDelinquencyRangeResponse deleteDelinquencyRange()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyRangeId: number; //delinquencyRangeId (default to undefined)

const { status, data } = await apiInstance.deleteDelinquencyRange(
    delinquencyRangeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyRangeId** | [**number**] | delinquencyRangeId | defaults to undefined|


### Return type

**DeleteDelinquencyRangeResponse**

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

# **getDelinquencyBucket**
> DelinquencyBucketData getDelinquencyBucket()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyBucketId: number; //delinquencyBucketId (default to undefined)

const { status, data } = await apiInstance.getDelinquencyBucket(
    delinquencyBucketId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyBucketId** | [**number**] | delinquencyBucketId | defaults to undefined|


### Return type

**DelinquencyBucketData**

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

# **getDelinquencyBuckets**
> Array<DelinquencyBucketData> getDelinquencyBuckets()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

const { status, data } = await apiInstance.getDelinquencyBuckets();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DelinquencyBucketData>**

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

# **getDelinquencyRange**
> DelinquencyRangeData getDelinquencyRange()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyRangeId: number; //delinquencyRangeId (default to undefined)

const { status, data } = await apiInstance.getDelinquencyRange(
    delinquencyRangeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyRangeId** | [**number**] | delinquencyRangeId | defaults to undefined|


### Return type

**DelinquencyRangeData**

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

# **getDelinquencyRanges**
> Array<DelinquencyRangeData> getDelinquencyRanges()


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

const { status, data } = await apiInstance.getDelinquencyRanges();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<DelinquencyRangeData>**

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

# **updateDelinquencyBucket**
> PutDelinquencyBucketResponse updateDelinquencyBucket(delinquencyBucketRequest)


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration,
    DelinquencyBucketRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyBucketId: number; //delinquencyBucketId (default to undefined)
let delinquencyBucketRequest: DelinquencyBucketRequest; //

const { status, data } = await apiInstance.updateDelinquencyBucket(
    delinquencyBucketId,
    delinquencyBucketRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyBucketRequest** | **DelinquencyBucketRequest**|  | |
| **delinquencyBucketId** | [**number**] | delinquencyBucketId | defaults to undefined|


### Return type

**PutDelinquencyBucketResponse**

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

# **updateDelinquencyRange**
> PutDelinquencyRangeResponse updateDelinquencyRange(delinquencyRangeRequest)


### Example

```typescript
import {
    DelinquencyRangeAndBucketsManagementApi,
    Configuration,
    DelinquencyRangeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DelinquencyRangeAndBucketsManagementApi(configuration);

let delinquencyRangeId: number; //delinquencyRangeId (default to undefined)
let delinquencyRangeRequest: DelinquencyRangeRequest; //

const { status, data } = await apiInstance.updateDelinquencyRange(
    delinquencyRangeId,
    delinquencyRangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **delinquencyRangeRequest** | **DelinquencyRangeRequest**|  | |
| **delinquencyRangeId** | [**number**] | delinquencyRangeId | defaults to undefined|


### Return type

**PutDelinquencyRangeResponse**

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

