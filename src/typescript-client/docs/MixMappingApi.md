# MixMappingApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveTaxonomyMapping**](#retrievetaxonomymapping) | **GET** /v1/mixmapping | |
|[**updateTaxonomyMapping**](#updatetaxonomymapping) | **PUT** /v1/mixmapping | |

# **retrieveTaxonomyMapping**
> MixTaxonomyMappingData retrieveTaxonomyMapping()


### Example

```typescript
import {
    MixMappingApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MixMappingApi(configuration);

const { status, data } = await apiInstance.retrieveTaxonomyMapping();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MixTaxonomyMappingData**

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

# **updateTaxonomyMapping**
> string updateTaxonomyMapping()


### Example

```typescript
import {
    MixMappingApi,
    Configuration,
    MixTaxonomyRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MixMappingApi(configuration);

let mixTaxonomyRequest: MixTaxonomyRequest; // (optional)

const { status, data } = await apiInstance.updateTaxonomyMapping(
    mixTaxonomyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mixTaxonomyRequest** | **MixTaxonomyRequest**|  | |


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

