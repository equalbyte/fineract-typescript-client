# BusinessDateManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getBusinessDate**](#getbusinessdate) | **GET** /v1/businessdate/{type} | Retrieve a specific Business date|
|[**getBusinessDates**](#getbusinessdates) | **GET** /v1/businessdate | List all business dates|
|[**updateBusinessDate**](#updatebusinessdate) | **POST** /v1/businessdate | Update Business Date|

# **getBusinessDate**
> BusinessDateResponse getBusinessDate()


### Example

```typescript
import {
    BusinessDateManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessDateManagementApi(configuration);

let type: string; //type (default to undefined)

const { status, data } = await apiInstance.getBusinessDate(
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | type | defaults to undefined|


### Return type

**BusinessDateResponse**

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

# **getBusinessDates**
> Array<BusinessDateResponse> getBusinessDates()


### Example

```typescript
import {
    BusinessDateManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessDateManagementApi(configuration);

const { status, data } = await apiInstance.getBusinessDates();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<BusinessDateResponse>**

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

# **updateBusinessDate**
> BusinessDateUpdateResponse updateBusinessDate()


### Example

```typescript
import {
    BusinessDateManagementApi,
    Configuration,
    BusinessDateUpdateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BusinessDateManagementApi(configuration);

let idempotencyKey: string; // (optional) (default to undefined)
let businessDateUpdateRequest: BusinessDateUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateBusinessDate(
    idempotencyKey,
    businessDateUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **businessDateUpdateRequest** | **BusinessDateUpdateRequest**|  | |
| **idempotencyKey** | [**string**] |  | (optional) defaults to undefined|


### Return type

**BusinessDateUpdateResponse**

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

