# ProductMixApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProductMix**](#createproductmix) | **POST** /v1/loanproducts/{productId}/productmix | |
|[**deleteProductMix**](#deleteproductmix) | **DELETE** /v1/loanproducts/{productId}/productmix | |
|[**retrieveTemplate12**](#retrievetemplate12) | **GET** /v1/loanproducts/{productId}/productmix | |
|[**updateProductMix**](#updateproductmix) | **PUT** /v1/loanproducts/{productId}/productmix | |

# **createProductMix**
> CommandProcessingResult createProductMix()


### Example

```typescript
import {
    ProductMixApi,
    Configuration,
    ProductMixRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductMixApi(configuration);

let productId: number; // (default to undefined)
let productMixRequest: ProductMixRequest; // (optional)

const { status, data } = await apiInstance.createProductMix(
    productId,
    productMixRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productMixRequest** | **ProductMixRequest**|  | |
| **productId** | [**number**] |  | defaults to undefined|


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

# **deleteProductMix**
> CommandProcessingResult deleteProductMix()


### Example

```typescript
import {
    ProductMixApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductMixApi(configuration);

let productId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteProductMix(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] |  | defaults to undefined|


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

# **retrieveTemplate12**
> string retrieveTemplate12()


### Example

```typescript
import {
    ProductMixApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductMixApi(configuration);

let productId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate12(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] |  | defaults to undefined|


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

# **updateProductMix**
> CommandProcessingResult updateProductMix()


### Example

```typescript
import {
    ProductMixApi,
    Configuration,
    ProductMixRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductMixApi(configuration);

let productId: number; // (default to undefined)
let productMixRequest: ProductMixRequest; // (optional)

const { status, data } = await apiInstance.updateProductMix(
    productId,
    productMixRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productMixRequest** | **ProductMixRequest**|  | |
| **productId** | [**number**] |  | defaults to undefined|


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

