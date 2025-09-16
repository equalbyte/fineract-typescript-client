# ProvisioningCriteriaApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProvisioningCriteria**](#createprovisioningcriteria) | **POST** /v1/provisioningcriteria | Create a new Provisioning Criteria|
|[**deleteProvisioningCriteria**](#deleteprovisioningcriteria) | **DELETE** /v1/provisioningcriteria/{criteriaId} | Deletes Provisioning Criteria|
|[**retrieveAllProvisioningCriterias**](#retrieveallprovisioningcriterias) | **GET** /v1/provisioningcriteria | Retrieves all created Provisioning Criterias|
|[**retrieveProvisioningCriteria**](#retrieveprovisioningcriteria) | **GET** /v1/provisioningcriteria/{criteriaId} | Retrieves a Provisioning Criteria|
|[**retrieveTemplate3**](#retrievetemplate3) | **GET** /v1/provisioningcriteria/template | |
|[**updateProvisioningCriteria**](#updateprovisioningcriteria) | **PUT** /v1/provisioningcriteria/{criteriaId} | Updates a new Provisioning Criteria|

# **createProvisioningCriteria**
> PostProvisioningCriteriaResponse createProvisioningCriteria(postProvisioningCriteriaRequest)

Creates a new Provisioning Criteria  Mandatory Fields:  criteriaName provisioningcriteria  Optional Fields:  loanProducts

### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration,
    PostProvisioningCriteriaRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

let postProvisioningCriteriaRequest: PostProvisioningCriteriaRequest; //

const { status, data } = await apiInstance.createProvisioningCriteria(
    postProvisioningCriteriaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postProvisioningCriteriaRequest** | **PostProvisioningCriteriaRequest**|  | |


### Return type

**PostProvisioningCriteriaResponse**

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

# **deleteProvisioningCriteria**
> DeleteProvisioningCriteriaResponse deleteProvisioningCriteria()

Deletes Provisioning Criteria

### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

let criteriaId: number; //criteriaId (default to undefined)

const { status, data } = await apiInstance.deleteProvisioningCriteria(
    criteriaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **criteriaId** | [**number**] | criteriaId | defaults to undefined|


### Return type

**DeleteProvisioningCriteriaResponse**

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

# **retrieveAllProvisioningCriterias**
> Array<GetProvisioningCriteriaResponse> retrieveAllProvisioningCriterias()

Retrieves all created Provisioning Criterias

### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

const { status, data } = await apiInstance.retrieveAllProvisioningCriterias();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetProvisioningCriteriaResponse>**

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

# **retrieveProvisioningCriteria**
> GetProvisioningCriteriaCriteriaIdResponse retrieveProvisioningCriteria()

Retrieves a Provisioning Criteria

### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

let criteriaId: number; //criteriaId (default to undefined)

const { status, data } = await apiInstance.retrieveProvisioningCriteria(
    criteriaId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **criteriaId** | [**number**] | criteriaId | defaults to undefined|


### Return type

**GetProvisioningCriteriaCriteriaIdResponse**

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

# **retrieveTemplate3**
> ProvisioningCriteriaData retrieveTemplate3()


### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ProvisioningCriteriaData**

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

# **updateProvisioningCriteria**
> PutProvisioningCriteriaResponse updateProvisioningCriteria(putProvisioningCriteriaRequest)

Updates a new Provisioning Criteria  Optional Fields criteriaName, loanProducts, provisioningcriteria

### Example

```typescript
import {
    ProvisioningCriteriaApi,
    Configuration,
    PutProvisioningCriteriaRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningCriteriaApi(configuration);

let criteriaId: number; //criteriaId (default to undefined)
let putProvisioningCriteriaRequest: PutProvisioningCriteriaRequest; //

const { status, data } = await apiInstance.updateProvisioningCriteria(
    criteriaId,
    putProvisioningCriteriaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putProvisioningCriteriaRequest** | **PutProvisioningCriteriaRequest**|  | |
| **criteriaId** | [**number**] | criteriaId | defaults to undefined|


### Return type

**PutProvisioningCriteriaResponse**

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

