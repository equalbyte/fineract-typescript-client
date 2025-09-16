# InterestRateChartApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create10**](#create10) | **POST** /v1/interestratecharts | Create a Chart|
|[**delete13**](#delete13) | **DELETE** /v1/interestratecharts/{chartId} | Delete a Chart|
|[**retrieveAll26**](#retrieveall26) | **GET** /v1/interestratecharts | Retrieve all Charts|
|[**retrieveOne17**](#retrieveone17) | **GET** /v1/interestratecharts/{chartId} | Retrieve a Chart|
|[**template9**](#template9) | **GET** /v1/interestratecharts/template | Retrieve Chart Details Template|
|[**update15**](#update15) | **PUT** /v1/interestratecharts/{chartId} | Update a Chart|

# **create10**
> PostInterestRateChartsResponse create10(postInterestRateChartsRequest)

Creates a new chart which can be attached to a term deposit products (FD or RD).

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration,
    PostInterestRateChartsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

let postInterestRateChartsRequest: PostInterestRateChartsRequest; //

const { status, data } = await apiInstance.create10(
    postInterestRateChartsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postInterestRateChartsRequest** | **PostInterestRateChartsRequest**|  | |


### Return type

**PostInterestRateChartsResponse**

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

# **delete13**
> DeleteInterestRateChartsChartIdResponse delete13()

It deletes the chart

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

let chartId: number; //chartId (default to undefined)

const { status, data } = await apiInstance.delete13(
    chartId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**DeleteInterestRateChartsChartIdResponse**

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

# **retrieveAll26**
> Array<GetInterestRateChartsResponse> retrieveAll26()

Retrieve list of charts associated with a term deposit product(FD or RD). Example Requests:  interestratecharts?productId=1

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

let productId: number; //productId (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll26(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | (optional) defaults to undefined|


### Return type

**Array<GetInterestRateChartsResponse>**

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

# **retrieveOne17**
> GetInterestRateChartsResponse retrieveOne17()

It retrieves the Interest Rate Chart Example Requests:  interestratecharts/1

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

let chartId: number; //chartId (default to undefined)

const { status, data } = await apiInstance.retrieveOne17(
    chartId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**GetInterestRateChartsResponse**

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

# **template9**
> GetInterestRateChartsTemplateResponse template9()

This is a convenience resource. It can be useful when building maintenance user interface screens for creating a chart. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  interestratecharts/template

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

const { status, data } = await apiInstance.template9();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetInterestRateChartsTemplateResponse**

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

# **update15**
> PutInterestRateChartsChartIdResponse update15(putInterestRateChartsChartIdRequest)

It updates the chart

### Example

```typescript
import {
    InterestRateChartApi,
    Configuration,
    PutInterestRateChartsChartIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InterestRateChartApi(configuration);

let chartId: number; //chartId (default to undefined)
let putInterestRateChartsChartIdRequest: PutInterestRateChartsChartIdRequest; //

const { status, data } = await apiInstance.update15(
    chartId,
    putInterestRateChartsChartIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putInterestRateChartsChartIdRequest** | **PutInterestRateChartsChartIdRequest**|  | |
| **chartId** | [**number**] | chartId | defaults to undefined|


### Return type

**PutInterestRateChartsChartIdResponse**

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

