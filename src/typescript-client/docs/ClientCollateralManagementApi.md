# ClientCollateralManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addCollateral**](#addcollateral) | **POST** /v1/clients/{clientId}/collaterals | Add New Collateral For a Client|
|[**deleteCollateral1**](#deletecollateral1) | **DELETE** /v1/clients/{clientId}/collaterals/{collateralId} | Delete Client Collateral|
|[**getClientCollateral**](#getclientcollateral) | **GET** /v1/clients/{clientId}/collaterals | Get Clients Collateral Products|
|[**getClientCollateralData**](#getclientcollateraldata) | **GET** /v1/clients/{clientId}/collaterals/{clientCollateralId} | Get Client Collateral Data|
|[**getClientCollateralTemplate**](#getclientcollateraltemplate) | **GET** /v1/clients/{clientId}/collaterals/template | Get Client Collateral Template|
|[**updateCollateral1**](#updatecollateral1) | **PUT** /v1/clients/{clientId}/collaterals/{collateralId} | Update New Collateral of a Client|

# **addCollateral**
> PostClientCollateralResponse addCollateral(clientCollateralRequest)

Add New Collateral For a Client

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration,
    ClientCollateralRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)
let clientCollateralRequest: ClientCollateralRequest; //

const { status, data } = await apiInstance.addCollateral(
    clientId,
    clientCollateralRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientCollateralRequest** | **ClientCollateralRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**PostClientCollateralResponse**

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

# **deleteCollateral1**
> DeleteClientCollateralResponse deleteCollateral1()

Delete Client Collateral

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)
let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.deleteCollateral1(
    clientId,
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**DeleteClientCollateralResponse**

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

# **getClientCollateral**
> Array<ClientCollateralManagementData> getClientCollateral()

Get Collateral Product of a Client

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)
let prodId: number; //prodId (optional) (default to undefined)

const { status, data } = await apiInstance.getClientCollateral(
    clientId,
    prodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **prodId** | [**number**] | prodId | (optional) defaults to undefined|


### Return type

**Array<ClientCollateralManagementData>**

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

# **getClientCollateralData**
> ClientCollateralManagementData getClientCollateralData()

Get Client Collateral Data

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)
let clientCollateralId: number; //clientCollateralId (default to undefined)

const { status, data } = await apiInstance.getClientCollateralData(
    clientId,
    clientCollateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **clientCollateralId** | [**number**] | clientCollateralId | defaults to undefined|


### Return type

**ClientCollateralManagementData**

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

# **getClientCollateralTemplate**
> Array<LoanCollateralTemplateData> getClientCollateralTemplate()

Get Client Collateral Template

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.getClientCollateralTemplate(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**Array<LoanCollateralTemplateData>**

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

# **updateCollateral1**
> PutClientCollateralResponse updateCollateral1(updateClientCollateralRequest)

Update New Collateral of a Client

### Example

```typescript
import {
    ClientCollateralManagementApi,
    Configuration,
    UpdateClientCollateralRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientCollateralManagementApi(configuration);

let clientId: number; //clientId (default to undefined)
let collateralId: number; //collateralId (default to undefined)
let updateClientCollateralRequest: UpdateClientCollateralRequest; //

const { status, data } = await apiInstance.updateCollateral1(
    clientId,
    collateralId,
    updateClientCollateralRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateClientCollateralRequest** | **UpdateClientCollateralRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**PutClientCollateralResponse**

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

