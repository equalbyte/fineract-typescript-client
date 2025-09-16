# ExternalEventConfigurationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getExternalEventConfigurations**](#getexternaleventconfigurations) | **GET** /v1/externalevents/configuration | List all external event configurations|
|[**updateExternalEventConfigurations**](#updateexternaleventconfigurations) | **PUT** /v1/externalevents/configuration | Enable/Disable external events posting|

# **getExternalEventConfigurations**
> ExternalEventConfigurationResponse getExternalEventConfigurations()


### Example

```typescript
import {
    ExternalEventConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalEventConfigurationApi(configuration);

const { status, data } = await apiInstance.getExternalEventConfigurations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ExternalEventConfigurationResponse**

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

# **updateExternalEventConfigurations**
> ExternalEventConfigurationUpdateResponse updateExternalEventConfigurations()


### Example

```typescript
import {
    ExternalEventConfigurationApi,
    Configuration,
    ExternalEventConfigurationUpdateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalEventConfigurationApi(configuration);

let idempotencyKey: string; // (optional) (default to undefined)
let externalEventConfigurationUpdateRequest: ExternalEventConfigurationUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateExternalEventConfigurations(
    idempotencyKey,
    externalEventConfigurationUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalEventConfigurationUpdateRequest** | **ExternalEventConfigurationUpdateRequest**|  | |
| **idempotencyKey** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ExternalEventConfigurationUpdateResponse**

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

