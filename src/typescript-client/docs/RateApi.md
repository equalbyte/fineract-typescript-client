# RateApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRate**](#createrate) | **POST** /v1/rates | |
|[**getAllRates**](#getallrates) | **GET** /v1/rates | |
|[**retrieveRate**](#retrieverate) | **GET** /v1/rates/{rateId} | |
|[**updateRate**](#updaterate) | **PUT** /v1/rates/{rateId} | |

# **createRate**
> CommandProcessingResult createRate()


### Example

```typescript
import {
    RateApi,
    Configuration,
    RateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RateApi(configuration);

let rateRequest: RateRequest; // (optional)

const { status, data } = await apiInstance.createRate(
    rateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateRequest** | **RateRequest**|  | |


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

# **getAllRates**
> Array<RateData> getAllRates()


### Example

```typescript
import {
    RateApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RateApi(configuration);

const { status, data } = await apiInstance.getAllRates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<RateData>**

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

# **retrieveRate**
> RateData retrieveRate()


### Example

```typescript
import {
    RateApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RateApi(configuration);

let rateId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveRate(
    rateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateId** | [**number**] |  | defaults to undefined|


### Return type

**RateData**

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

# **updateRate**
> CommandProcessingResult updateRate()


### Example

```typescript
import {
    RateApi,
    Configuration,
    RateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RateApi(configuration);

let rateId: number; // (default to undefined)
let rateRequest: RateRequest; // (optional)

const { status, data } = await apiInstance.updateRate(
    rateId,
    rateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rateRequest** | **RateRequest**|  | |
| **rateId** | [**number**] |  | defaults to undefined|


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

