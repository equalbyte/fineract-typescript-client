# MixTaxonomyApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll14**](#retrieveall14) | **GET** /v1/mixtaxonomy | |

# **retrieveAll14**
> Array<MixTaxonomyData> retrieveAll14()


### Example

```typescript
import {
    MixTaxonomyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MixTaxonomyApi(configuration);

const { status, data } = await apiInstance.retrieveAll14();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<MixTaxonomyData>**

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

