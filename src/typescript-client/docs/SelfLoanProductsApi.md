# SelfLoanProductsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllLoanProducts1**](#retrieveallloanproducts1) | **GET** /v1/self/loanproducts | |
|[**retrieveLoanProductDetails2**](#retrieveloanproductdetails2) | **GET** /v1/self/loanproducts/{productId} | |

# **retrieveAllLoanProducts1**
> string retrieveAllLoanProducts1()


### Example

```typescript
import {
    SelfLoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoanProductsApi(configuration);

let clientId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllLoanProducts1(
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

# **retrieveLoanProductDetails2**
> string retrieveLoanProductDetails2()


### Example

```typescript
import {
    SelfLoanProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfLoanProductsApi(configuration);

let productId: number; // (default to undefined)
let clientId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveLoanProductDetails2(
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

