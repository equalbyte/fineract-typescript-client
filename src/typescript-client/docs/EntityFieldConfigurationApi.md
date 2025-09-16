# EntityFieldConfigurationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAddresses**](#getaddresses) | **GET** /v1/fieldconfiguration/{entity} | Retrieves the Entity Field Configuration|

# **getAddresses**
> Array<FieldConfigurationData> getAddresses()

It retrieves all the Entity Field Configuration

### Example

```typescript
import {
    EntityFieldConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new EntityFieldConfigurationApi(configuration);

let entity: string; //entity (default to undefined)

const { status, data } = await apiInstance.getAddresses(
    entity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entity** | [**string**] | entity | defaults to undefined|


### Return type

**Array<FieldConfigurationData>**

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

