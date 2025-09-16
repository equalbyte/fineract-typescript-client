# BusinessStepConfigurationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllAvailableBusinessStep**](#retrieveallavailablebusinessstep) | **GET** /v1/jobs/{jobName}/available-steps | List Business Step Configurations for a Job|
|[**retrieveAllConfiguredBusinessJobs**](#retrieveallconfiguredbusinessjobs) | **GET** /v1/jobs/names | List Business Jobs|
|[**retrieveAllConfiguredBusinessStep**](#retrieveallconfiguredbusinessstep) | **GET** /v1/jobs/{jobName}/steps | List Business Step Configurations for a Job|
|[**updateJobBusinessStepConfig**](#updatejobbusinessstepconfig) | **PUT** /v1/jobs/{jobName}/steps | List Business Step Configurations for a Job|

# **retrieveAllAvailableBusinessStep**
> JobBusinessStepDetail retrieveAllAvailableBusinessStep()

Returns the available Business Steps for a job

### Example

```typescript
import {
    BusinessStepConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessStepConfigurationApi(configuration);

let jobName: string; //jobName (default to undefined)

const { status, data } = await apiInstance.retrieveAllAvailableBusinessStep(
    jobName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobName** | [**string**] | jobName | defaults to undefined|


### Return type

**JobBusinessStepDetail**

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

# **retrieveAllConfiguredBusinessJobs**
> ConfiguredJobNamesDTO retrieveAllConfiguredBusinessJobs()

Returns the configured Business Jobs

### Example

```typescript
import {
    BusinessStepConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessStepConfigurationApi(configuration);

const { status, data } = await apiInstance.retrieveAllConfiguredBusinessJobs();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ConfiguredJobNamesDTO**

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

# **retrieveAllConfiguredBusinessStep**
> JobBusinessStepConfigData retrieveAllConfiguredBusinessStep()

Returns the configured Business Steps for a job

### Example

```typescript
import {
    BusinessStepConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessStepConfigurationApi(configuration);

let jobName: string; //jobName (default to undefined)

const { status, data } = await apiInstance.retrieveAllConfiguredBusinessStep(
    jobName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobName** | [**string**] | jobName | defaults to undefined|


### Return type

**JobBusinessStepConfigData**

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

# **updateJobBusinessStepConfig**
> updateJobBusinessStepConfig()

Updates the Business steps execution order for a job

### Example

```typescript
import {
    BusinessStepConfigurationApi,
    Configuration,
    BusinessStepRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessStepConfigurationApi(configuration);

let jobName: string; //jobName (default to undefined)
let businessStepRequest: BusinessStepRequest; // (optional)

const { status, data } = await apiInstance.updateJobBusinessStepConfig(
    jobName,
    businessStepRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessStepRequest** | **BusinessStepRequest**|  | |
| **jobName** | [**string**] | jobName | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | NO_CONTENT |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

