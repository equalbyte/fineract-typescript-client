# GlobalConfigurationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveConfiguration**](#retrieveconfiguration) | **GET** /v1/configurations | Retrieve Global Configuration | Retrieve Global Configuration for surveys|
|[**retrieveOne3**](#retrieveone3) | **GET** /v1/configurations/{configId} | Retrieve Global Configuration|
|[**retrieveOneByName**](#retrieveonebyname) | **GET** /v1/configurations/name/{name} | Retrieve Global Configuration|
|[**updateConfiguration1**](#updateconfiguration1) | **PUT** /v1/configurations/{configId} | Update Global Configuration|
|[**updateConfigurationByName**](#updateconfigurationbyname) | **PUT** /v1/configurations/name/{configName} | Update Global Configuration by name|

# **retrieveConfiguration**
> GetGlobalConfigurationsResponse retrieveConfiguration()

Returns the list global enable/disable configurations.  Example Requests:  configurations   Returns the list global enable/disable survey configurations.  Example Requests:  configurations/survey

### Example

```typescript
import {
    GlobalConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GlobalConfigurationApi(configuration);

let survey: boolean; //survey (optional) (default to false)

const { status, data } = await apiInstance.retrieveConfiguration(
    survey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **survey** | [**boolean**] | survey | (optional) defaults to false|


### Return type

**GetGlobalConfigurationsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of example \\n response \\nsurveys response   \\ngiven below |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOne3**
> GlobalConfigurationPropertyData retrieveOne3()

Returns a global enable/disable configurations.  Example Requests:  configurations/1

### Example

```typescript
import {
    GlobalConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GlobalConfigurationApi(configuration);

let configId: number; //configId (default to undefined)

const { status, data } = await apiInstance.retrieveOne3(
    configId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configId** | [**number**] | configId | defaults to undefined|


### Return type

**GlobalConfigurationPropertyData**

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

# **retrieveOneByName**
> GlobalConfigurationPropertyData retrieveOneByName()

Returns a global enable/disable configuration.  Example Requests:  configurations/name/enable-address

### Example

```typescript
import {
    GlobalConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GlobalConfigurationApi(configuration);

let name: string; //name (default to undefined)

const { status, data } = await apiInstance.retrieveOneByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | name | defaults to undefined|


### Return type

**GlobalConfigurationPropertyData**

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

# **updateConfiguration1**
> PutGlobalConfigurationsResponse updateConfiguration1(putGlobalConfigurationsRequest)

Updates an enable/disable global configuration item.

### Example

```typescript
import {
    GlobalConfigurationApi,
    Configuration,
    PutGlobalConfigurationsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GlobalConfigurationApi(configuration);

let configId: number; //configId (default to undefined)
let putGlobalConfigurationsRequest: PutGlobalConfigurationsRequest; //

const { status, data } = await apiInstance.updateConfiguration1(
    configId,
    putGlobalConfigurationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGlobalConfigurationsRequest** | **PutGlobalConfigurationsRequest**|  | |
| **configId** | [**number**] | configId | defaults to undefined|


### Return type

**PutGlobalConfigurationsResponse**

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

# **updateConfigurationByName**
> PutGlobalConfigurationsResponse updateConfigurationByName(putGlobalConfigurationsRequest)

Updates an enable/disable global configuration item by name

### Example

```typescript
import {
    GlobalConfigurationApi,
    Configuration,
    PutGlobalConfigurationsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GlobalConfigurationApi(configuration);

let configName: string; //configName (default to undefined)
let putGlobalConfigurationsRequest: PutGlobalConfigurationsRequest; //

const { status, data } = await apiInstance.updateConfigurationByName(
    configName,
    putGlobalConfigurationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGlobalConfigurationsRequest** | **PutGlobalConfigurationsRequest**|  | |
| **configName** | [**string**] | configName | defaults to undefined|


### Return type

**PutGlobalConfigurationsResponse**

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

