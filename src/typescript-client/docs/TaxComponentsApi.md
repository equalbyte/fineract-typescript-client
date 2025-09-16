# TaxComponentsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTaxComponent**](#createtaxcomponent) | **POST** /v1/taxes/component | Create a new Tax Component|
|[**retrieveAllTaxComponents**](#retrievealltaxcomponents) | **GET** /v1/taxes/component | List Tax Components|
|[**retrieveTaxComponent**](#retrievetaxcomponent) | **GET** /v1/taxes/component/{taxComponentId} | Retrieve Tax Component|
|[**retrieveTemplate21**](#retrievetemplate21) | **GET** /v1/taxes/component/template | |
|[**updateTaxCompoent**](#updatetaxcompoent) | **PUT** /v1/taxes/component/{taxComponentId} | Update Tax Component|

# **createTaxComponent**
> PostTaxesComponentsResponse createTaxComponent(postTaxesComponentsRequest)

Creates a new Tax Component  Mandatory Fields: name, percentage  Optional Fields: debitAccountType, debitAcountId, creditAccountType, creditAcountId, startDate

### Example

```typescript
import {
    TaxComponentsApi,
    Configuration,
    PostTaxesComponentsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxComponentsApi(configuration);

let postTaxesComponentsRequest: PostTaxesComponentsRequest; //

const { status, data } = await apiInstance.createTaxComponent(
    postTaxesComponentsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTaxesComponentsRequest** | **PostTaxesComponentsRequest**|  | |


### Return type

**PostTaxesComponentsResponse**

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

# **retrieveAllTaxComponents**
> Array<GetTaxesComponentsResponse> retrieveAllTaxComponents()

List Tax Components

### Example

```typescript
import {
    TaxComponentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxComponentsApi(configuration);

const { status, data } = await apiInstance.retrieveAllTaxComponents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetTaxesComponentsResponse>**

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

# **retrieveTaxComponent**
> GetTaxesComponentsResponse retrieveTaxComponent()

Retrieve Tax Component

### Example

```typescript
import {
    TaxComponentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxComponentsApi(configuration);

let taxComponentId: number; //taxComponentId (default to undefined)

const { status, data } = await apiInstance.retrieveTaxComponent(
    taxComponentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxComponentId** | [**number**] | taxComponentId | defaults to undefined|


### Return type

**GetTaxesComponentsResponse**

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

# **retrieveTemplate21**
> TaxComponentData retrieveTemplate21()


### Example

```typescript
import {
    TaxComponentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxComponentsApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate21();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TaxComponentData**

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

# **updateTaxCompoent**
> PutTaxesComponentsTaxComponentIdResponse updateTaxCompoent(putTaxesComponentsTaxComponentIdRequest)

Updates Tax component. Debit and credit account details cannot be modified. All the future tax components would be replaced with the new percentage.

### Example

```typescript
import {
    TaxComponentsApi,
    Configuration,
    PutTaxesComponentsTaxComponentIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxComponentsApi(configuration);

let taxComponentId: number; //taxComponentId (default to undefined)
let putTaxesComponentsTaxComponentIdRequest: PutTaxesComponentsTaxComponentIdRequest; //

const { status, data } = await apiInstance.updateTaxCompoent(
    taxComponentId,
    putTaxesComponentsTaxComponentIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putTaxesComponentsTaxComponentIdRequest** | **PutTaxesComponentsTaxComponentIdRequest**|  | |
| **taxComponentId** | [**number**] | taxComponentId | defaults to undefined|


### Return type

**PutTaxesComponentsTaxComponentIdResponse**

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

