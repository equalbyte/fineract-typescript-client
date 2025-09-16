# CollateralManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCollateral1**](#createcollateral1) | **POST** /v1/collateral-management | Create a new collateral|
|[**deleteCollateral2**](#deletecollateral2) | **DELETE** /v1/collateral-management/{collateralId} | Delete a Collateral|
|[**getAllCollaterals**](#getallcollaterals) | **GET** /v1/collateral-management | Get All Collaterals|
|[**getCollateral**](#getcollateral) | **GET** /v1/collateral-management/{collateralId} | Get Collateral|
|[**getCollateralTemplate**](#getcollateraltemplate) | **GET** /v1/collateral-management/template | Get Collateral Template|
|[**updateCollateral2**](#updatecollateral2) | **PUT** /v1/collateral-management/{collateralId} | Update Collateral|

# **createCollateral1**
> PostCollateralManagementProductResponse createCollateral1(collateralManagementProductRequest)

Collateral Creation

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration,
    CollateralManagementProductRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

let collateralManagementProductRequest: CollateralManagementProductRequest; //

const { status, data } = await apiInstance.createCollateral1(
    collateralManagementProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collateralManagementProductRequest** | **CollateralManagementProductRequest**|  | |


### Return type

**PostCollateralManagementProductResponse**

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

# **deleteCollateral2**
> DeleteCollateralProductResponse deleteCollateral2()

Delete Collateral

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.deleteCollateral2(
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**DeleteCollateralProductResponse**

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

# **getAllCollaterals**
> Array<CollateralManagementData> getAllCollaterals()

Fetch all Collateral Products

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

const { status, data } = await apiInstance.getAllCollaterals();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CollateralManagementData>**

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

# **getCollateral**
> CollateralManagementData getCollateral()

Fetch Collateral

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.getCollateral(
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**CollateralManagementData**

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

# **getCollateralTemplate**
> Array<CurrencyData> getCollateralTemplate()

Get Collateral Template

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

const { status, data } = await apiInstance.getCollateralTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CurrencyData>**

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

# **updateCollateral2**
> PutCollateralProductResponse updateCollateral2(collateralProductRequest)

Update Collateral

### Example

```typescript
import {
    CollateralManagementApi,
    Configuration,
    CollateralProductRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollateralManagementApi(configuration);

let collateralId: number; //collateralId (default to undefined)
let collateralProductRequest: CollateralProductRequest; //

const { status, data } = await apiInstance.updateCollateral2(
    collateralId,
    collateralProductRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collateralProductRequest** | **CollateralProductRequest**|  | |
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**PutCollateralProductResponse**

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

