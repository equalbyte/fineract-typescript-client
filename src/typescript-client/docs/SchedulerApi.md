# SchedulerApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeSchedulerStatus**](#changeschedulerstatus) | **POST** /v1/scheduler | Activate Scheduler Jobs | Suspend Scheduler Jobs|
|[**retrieveStatus**](#retrievestatus) | **GET** /v1/scheduler | Retrieve Scheduler Status|

# **changeSchedulerStatus**
> changeSchedulerStatus()

Activates the scheduler job service. | Suspends the scheduler job service.

### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.changeSchedulerStatus(
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | POST :  scheduler?command&#x3D;start   POST : scheduler?command&#x3D;stop |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveStatus**
> GetSchedulerResponse retrieveStatus()

Returns the scheduler status.  Example Requests:  scheduler

### Example

```typescript
import {
    SchedulerApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SchedulerApi(configuration);

const { status, data } = await apiInstance.retrieveStatus();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSchedulerResponse**

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

