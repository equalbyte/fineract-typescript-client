# DeviceRegistrationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**delete22**](#delete22) | **DELETE** /v1/self/device/registration/{id} | |
|[**registerDevice**](#registerdevice) | **POST** /v1/self/device/registration | |
|[**retrieveAllDeviceRegistrations**](#retrievealldeviceregistrations) | **GET** /v1/self/device/registration | |
|[**retrieveDeviceRegiistration**](#retrievedeviceregiistration) | **GET** /v1/self/device/registration/{id} | |
|[**retrieveDeviceRegistrationByClientId**](#retrievedeviceregistrationbyclientid) | **GET** /v1/self/device/registration/client/{clientId} | |
|[**updateDeviceRegistration**](#updatedeviceregistration) | **PUT** /v1/self/device/registration/{id} | |

# **delete22**
> string delete22()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.delete22(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **registerDevice**
> string registerDevice()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.registerDevice(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**string**

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

# **retrieveAllDeviceRegistrations**
> string retrieveAllDeviceRegistrations()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

const { status, data } = await apiInstance.retrieveAllDeviceRegistrations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **retrieveDeviceRegiistration**
> string retrieveDeviceRegiistration()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveDeviceRegiistration(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **retrieveDeviceRegistrationByClientId**
> string retrieveDeviceRegistrationByClientId()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveDeviceRegistrationByClientId(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **updateDeviceRegistration**
> string updateDeviceRegistration()


### Example

```typescript
import {
    DeviceRegistrationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DeviceRegistrationApi(configuration);

let id: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateDeviceRegistration(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

