# ProductsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProduct**](#createproduct) | **POST** /v1/products/{type} | Create a Share Product|
|[**handleCommands3**](#handlecommands3) | **POST** /v1/products/{type}/{productId} | |
|[**retrieveAllProducts**](#retrieveallproducts) | **GET** /v1/products/{type} | List Share Products|
|[**retrieveProduct**](#retrieveproduct) | **GET** /v1/products/{type}/{productId} | Retrieve a Share Product|
|[**retrieveTemplate13**](#retrievetemplate13) | **GET** /v1/products/{type}/template | |
|[**updateProduct**](#updateproduct) | **PUT** /v1/products/{type}/{productId} | Update a Share Product|

# **createProduct**
> PostProductsTypeResponse createProduct(postProductsTypeRequest)

Creates a Share Product  Mandatory Fields: name, shortName, description, currencyCode, digitsAfterDecimal,inMultiplesOf, locale, totalShares, unitPrice, nominalShares,allowDividendCalculationForInactiveClients,accountingRule  Mandatory Fields for Cash based accounting (accountingRule = 2): shareReferenceId, shareSuspenseId, shareEquityId, incomeFromFeeAccountId  Optional Fields: sharesIssued, minimumShares, maximumShares, minimumActivePeriodForDividends, minimumactiveperiodFrequencyType, lockinPeriodFrequency, lockinPeriodFrequencyType, marketPricePeriods, chargesSelected

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    PostProductsTypeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let type: string; //type (default to undefined)
let postProductsTypeRequest: PostProductsTypeRequest; //

const { status, data } = await apiInstance.createProduct(
    type,
    postProductsTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postProductsTypeRequest** | **PostProductsTypeRequest**|  | |
| **type** | [**string**] | type | defaults to undefined|


### Return type

**PostProductsTypeResponse**

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

# **handleCommands3**
> string handleCommands3()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let type: string; //type (default to undefined)
let productId: number; //productId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands3(
    type,
    productId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
| **productId** | [**number**] | productId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


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

# **retrieveAllProducts**
> GetProductsTypeResponse retrieveAllProducts()

Lists Share Products  Mandatory Fields: limit, offset  Example Requests:  shareproducts

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let type: string; //type (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllProducts(
    type,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**GetProductsTypeResponse**

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

# **retrieveProduct**
> GetProductsTypeProductIdResponse retrieveProduct()

Retrieves a Share Product  Example Requests:  products/share/1   products/share/1?template=true

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let productId: number; //productId (default to undefined)
let type: string; //type (default to undefined)

const { status, data } = await apiInstance.retrieveProduct(
    productId,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] | productId | defaults to undefined|
| **type** | [**string**] | type | defaults to undefined|


### Return type

**GetProductsTypeProductIdResponse**

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

# **retrieveTemplate13**
> string retrieveTemplate13()


### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let type: string; //type (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate13(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|


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

# **updateProduct**
> PutProductsTypeProductIdResponse updateProduct(putProductsTypeProductIdRequest)

Updates a Share Product

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    PutProductsTypeProductIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let type: string; //type (default to undefined)
let productId: number; //productId (default to undefined)
let putProductsTypeProductIdRequest: PutProductsTypeProductIdRequest; //

const { status, data } = await apiInstance.updateProduct(
    type,
    productId,
    putProductsTypeProductIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putProductsTypeProductIdRequest** | **PutProductsTypeProductIdRequest**|  | |
| **type** | [**string**] | type | defaults to undefined|
| **productId** | [**number**] | productId | defaults to undefined|


### Return type

**PutProductsTypeProductIdResponse**

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

