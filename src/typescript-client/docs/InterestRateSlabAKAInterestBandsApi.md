# InterestRateSlabAKAInterestBandsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create9**](#create9) | **POST** /v1/interestratecharts/{chartId}/chartslabs | Create a Slab|
|[**delete12**](#delete12) | **DELETE** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Delete a Slab|
|[**retrieveAll25**](#retrieveall25) | **GET** /v1/interestratecharts/{chartId}/chartslabs | Retrieve all Slabs|
|[**retrieveOne16**](#retrieveone16) | **GET** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Retrieve a Slab|
|[**template8**](#template8) | **GET** /v1/interestratecharts/{chartId}/chartslabs/template | |
|[**update14**](#update14) | **PUT** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Update a Slab|

# **create9**
> PostInterestRateChartsChartIdChartSlabsResponse create9(interestRateChartStabRequest)

Creates a new interest rate slab for an interest rate chart. Mandatory Fields periodType, fromPeriod, annualInterestRate Optional Fields toPeriod and description Example Requests:  interestratecharts/1/chartslabs

### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration,
    InterestRateChartStabRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)
let interestRateChartStabRequest: InterestRateChartStabRequest; //

const { status, data } = await apiInstance.create9(
    chartId,
    interestRateChartStabRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestRateChartStabRequest** | **InterestRateChartStabRequest**|  | |
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**PostInterestRateChartsChartIdChartSlabsResponse**

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

# **delete12**
> DeleteInterestRateChartsChartIdChartSlabsResponse delete12()

Delete a Slab from a chart

### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)
let chartSlabId: number; //chartSlabId (default to undefined)

const { status, data } = await apiInstance.delete12(
    chartId,
    chartSlabId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|
| **chartSlabId** | [**number**] | chartSlabId | defaults to undefined|


### Return type

**DeleteInterestRateChartsChartIdChartSlabsResponse**

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

# **retrieveAll25**
> Array<InterestRateChartSlabData> retrieveAll25()

Retrieve list of slabs associated with a chart  Example Requests:  interestratecharts/1/chartslabs

### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)

const { status, data } = await apiInstance.retrieveAll25(
    chartId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**Array<InterestRateChartSlabData>**

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

# **retrieveOne16**
> InterestRateChartSlabData retrieveOne16()

Retrieve a slab associated with an Interest rate chart  Example Requests:  interestratecharts/1/chartslabs/1 

### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)
let chartSlabId: number; //chartSlabId (default to undefined)

const { status, data } = await apiInstance.retrieveOne16(
    chartId,
    chartSlabId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|
| **chartSlabId** | [**number**] | chartSlabId | defaults to undefined|


### Return type

**InterestRateChartSlabData**

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

# **template8**
> InterestRateChartSlabData template8()


### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)

const { status, data } = await apiInstance.template8(
    chartId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**InterestRateChartSlabData**

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

# **update14**
> PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse update14(interestRateChartStabRequest)

It updates the Slab from chart

### Example

```typescript
import {
    InterestRateSlabAKAInterestBandsApi,
    Configuration,
    InterestRateChartStabRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateSlabAKAInterestBandsApi(configuration);

let chartId: number; //chartId (default to undefined)
let chartSlabId: number; //chartSlabId (default to undefined)
let interestRateChartStabRequest: InterestRateChartStabRequest; //

const { status, data } = await apiInstance.update14(
    chartId,
    chartSlabId,
    interestRateChartStabRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestRateChartStabRequest** | **InterestRateChartStabRequest**|  | |
| **chartId** | [**number**] | chartId | defaults to undefined|
| **chartSlabId** | [**number**] | chartSlabId | defaults to undefined|


### Return type

**PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse**

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

