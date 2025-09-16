# ProvisioningCategoryApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProvisioningCategory**](#createprovisioningcategory) | **POST** /v1/provisioningcategory | |
|[**deleteProvisioningCategory**](#deleteprovisioningcategory) | **DELETE** /v1/provisioningcategory/{categoryId} | |
|[**retrieveAll15**](#retrieveall15) | **GET** /v1/provisioningcategory | |
|[**updateProvisioningCategory**](#updateprovisioningcategory) | **PUT** /v1/provisioningcategory/{categoryId} | |

# **createProvisioningCategory**
> CommandProcessingResult createProvisioningCategory()


### Example

```typescript
import {
    ProvisioningCategoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCategoryApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.createProvisioningCategory(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**CommandProcessingResult**

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

# **deleteProvisioningCategory**
> CommandProcessingResult deleteProvisioningCategory()


### Example

```typescript
import {
    ProvisioningCategoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCategoryApi(configuration);

let categoryId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteProvisioningCategory(
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **categoryId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **retrieveAll15**
> Array<ProvisioningCategoryData> retrieveAll15()


### Example

```typescript
import {
    ProvisioningCategoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCategoryApi(configuration);

const { status, data } = await apiInstance.retrieveAll15();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ProvisioningCategoryData>**

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

# **updateProvisioningCategory**
> CommandProcessingResult updateProvisioningCategory()


### Example

```typescript
import {
    ProvisioningCategoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCategoryApi(configuration);

let categoryId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateProvisioningCategory(
    categoryId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **categoryId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

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

