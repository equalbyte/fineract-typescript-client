# SelfSavingsProductsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll38**](#retrieveall38) | **GET** /v1/self/savingsproducts | |
|[**retrieveOne29**](#retrieveone29) | **GET** /v1/self/savingsproducts/{productId} | |

# **retrieveAll38**
> string retrieveAll38()


### Example

```typescript
import {
    SelfSavingsProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsProductsApi(configuration);

let clientId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll38(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | (optional) defaults to undefined|


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

# **retrieveOne29**
> string retrieveOne29()


### Example

```typescript
import {
    SelfSavingsProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSavingsProductsApi(configuration);

let productId: number; // (default to undefined)
let clientId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOne29(
    productId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] |  | defaults to undefined|
| **clientId** | [**number**] |  | (optional) defaults to undefined|


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

