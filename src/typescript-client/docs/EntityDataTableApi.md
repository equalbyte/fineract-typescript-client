# EntityDataTableApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createEntityDatatableCheck**](#createentitydatatablecheck) | **POST** /v1/entityDatatableChecks | Create Entity-Datatable Checks|
|[**deleteDatatable1**](#deletedatatable1) | **DELETE** /v1/entityDatatableChecks/{entityDatatableCheckId} | Delete Entity-Datatable Checks|
|[**getTemplate**](#gettemplate) | **GET** /v1/entityDatatableChecks/template | Retrieve Entity-Datatable Checks Template|
|[**retrieveAll6**](#retrieveall6) | **GET** /v1/entityDatatableChecks | List Entity-Datatable Checks|

# **createEntityDatatableCheck**
> PostEntityDatatableChecksTemplateResponse createEntityDatatableCheck(postEntityDatatableChecksTemplateRequest)

Mandatory Fields :  entity, status, datatableName  Non-Mandatory Fields :  productId

### Example

```typescript
import {
    EntityDataTableApi,
    Configuration,
    PostEntityDatatableChecksTemplateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new EntityDataTableApi(configuration);

let postEntityDatatableChecksTemplateRequest: PostEntityDatatableChecksTemplateRequest; //

const { status, data } = await apiInstance.createEntityDatatableCheck(
    postEntityDatatableChecksTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postEntityDatatableChecksTemplateRequest** | **PostEntityDatatableChecksTemplateRequest**|  | |


### Return type

**PostEntityDatatableChecksTemplateResponse**

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

# **deleteDatatable1**
> DeleteEntityDatatableChecksTemplateResponse deleteDatatable1()

Deletes an existing Entity-Datatable Check

### Example

```typescript
import {
    EntityDataTableApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new EntityDataTableApi(configuration);

let entityDatatableCheckId: number; //entityDatatableCheckId (default to undefined)

const { status, data } = await apiInstance.deleteDatatable1(
    entityDatatableCheckId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityDatatableCheckId** | [**number**] | entityDatatableCheckId | defaults to undefined|


### Return type

**DeleteEntityDatatableChecksTemplateResponse**

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

# **getTemplate**
> GetEntityDatatableChecksTemplateResponse getTemplate()

This is a convenience resource useful for building maintenance user interface screens for Entity-Datatable Checks applications. The template data returned consists of:  Allowed description Lists Example Request:  entityDatatableChecks/template

### Example

```typescript
import {
    EntityDataTableApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new EntityDataTableApi(configuration);

const { status, data } = await apiInstance.getTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetEntityDatatableChecksTemplateResponse**

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

# **retrieveAll6**
> Array<GetEntityDatatableChecksResponse> retrieveAll6()

The list capability of Entity-Datatable Checks can support pagination.  OPTIONAL ARGUMENTS offset Integer optional, defaults to 0 Indicates the result from which pagination startslimit Integer optional, defaults to 200 Restricts the size of results returned. To override the default and return all entries you must explicitly pass a non-positive integer value for limit e.g. limit=0, or limit=-1 Example Request:  entityDatatableChecks?offset=0&limit=15

### Example

```typescript
import {
    EntityDataTableApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new EntityDataTableApi(configuration);

let status: number; //status (optional) (default to undefined)
let entity: string; //entity (optional) (default to undefined)
let productId: number; //productId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll6(
    status,
    entity,
    productId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | [**number**] | status | (optional) defaults to undefined|
| **entity** | [**string**] | entity | (optional) defaults to undefined|
| **productId** | [**number**] | productId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**Array<GetEntityDatatableChecksResponse>**

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

