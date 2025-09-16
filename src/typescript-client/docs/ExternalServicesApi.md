# ExternalServicesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveOne2**](#retrieveone2) | **GET** /v1/externalservice/{servicename} | Retrieve External Services Configuration|
|[**updateExternalServiceProperties**](#updateexternalserviceproperties) | **PUT** /v1/externalservice/{servicename} | Update External Service|

# **retrieveOne2**
> ExternalServicesPropertiesData retrieveOne2()

Returns a external Service configurations based on the Service Name.  Service Names supported are S3 and SMTP.  Example Requests:  externalservice/SMTP

### Example

```typescript
import {
    ExternalServicesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalServicesApi(configuration);

let servicename: string; //servicename (default to undefined)

const { status, data } = await apiInstance.retrieveOne2(
    servicename
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicename** | [**string**] | servicename | defaults to undefined|


### Return type

**ExternalServicesPropertiesData**

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

# **updateExternalServiceProperties**
> updateExternalServiceProperties(putExternalServiceRequest)

Updates the external Service Configuration for a Service Name.  Example:   externalservice/S3

### Example

```typescript
import {
    ExternalServicesApi,
    Configuration,
    PutExternalServiceRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalServicesApi(configuration);

let servicename: string; //servicename (default to undefined)
let putExternalServiceRequest: PutExternalServiceRequest; //

const { status, data } = await apiInstance.updateExternalServiceProperties(
    servicename,
    putExternalServiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putExternalServiceRequest** | **PutExternalServiceRequest**|  | |
| **servicename** | [**string**] | servicename | defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

