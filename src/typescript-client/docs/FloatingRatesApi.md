# FloatingRatesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFloatingRate**](#createfloatingrate) | **POST** /v1/floatingrates | Create a new Floating Rate|
|[**retrieveAll22**](#retrieveall22) | **GET** /v1/floatingrates | List Floating Rates|
|[**retrieveOne13**](#retrieveone13) | **GET** /v1/floatingrates/{floatingRateId} | Retrieve Floating Rate|
|[**updateFloatingRate**](#updatefloatingrate) | **PUT** /v1/floatingrates/{floatingRateId} | Update Floating Rate|

# **createFloatingRate**
> PostFloatingRatesResponse createFloatingRate(floatingRateRequest)

Creates a new Floating Rate Mandatory Fields: name Optional Fields: isBaseLendingRate, isActive, ratePeriods

### Example

```typescript
import {
    FloatingRatesApi,
    Configuration,
    FloatingRateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FloatingRatesApi(configuration);

let floatingRateRequest: FloatingRateRequest; //

const { status, data } = await apiInstance.createFloatingRate(
    floatingRateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingRateRequest** | **FloatingRateRequest**|  | |


### Return type

**PostFloatingRatesResponse**

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

# **retrieveAll22**
> Array<GetFloatingRatesResponse> retrieveAll22()

Lists Floating Rates

### Example

```typescript
import {
    FloatingRatesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FloatingRatesApi(configuration);

const { status, data } = await apiInstance.retrieveAll22();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetFloatingRatesResponse>**

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

# **retrieveOne13**
> FloatingRateData retrieveOne13()

Retrieves Floating Rate

### Example

```typescript
import {
    FloatingRatesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FloatingRatesApi(configuration);

let floatingRateId: number; //floatingRateId (default to undefined)

const { status, data } = await apiInstance.retrieveOne13(
    floatingRateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingRateId** | [**number**] | floatingRateId | defaults to undefined|


### Return type

**FloatingRateData**

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

# **updateFloatingRate**
> PutFloatingRatesFloatingRateIdResponse updateFloatingRate(floatingRateRequest)

Updates new Floating Rate. Rate Periods in the past cannot be modified. All the future rateperiods would be replaced with the new ratePeriods data sent.

### Example

```typescript
import {
    FloatingRatesApi,
    Configuration,
    FloatingRateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FloatingRatesApi(configuration);

let floatingRateId: number; //floatingRateId (default to undefined)
let floatingRateRequest: FloatingRateRequest; //

const { status, data } = await apiInstance.updateFloatingRate(
    floatingRateId,
    floatingRateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingRateRequest** | **FloatingRateRequest**|  | |
| **floatingRateId** | [**number**] | floatingRateId | defaults to undefined|


### Return type

**PutFloatingRatesFloatingRateIdResponse**

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

