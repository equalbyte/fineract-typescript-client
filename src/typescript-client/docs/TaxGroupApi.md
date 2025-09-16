# TaxGroupApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTaxGroup**](#createtaxgroup) | **POST** /v1/taxes/group | Create a new Tax Group|
|[**retrieveAllTaxGroups**](#retrievealltaxgroups) | **GET** /v1/taxes/group | List Tax Group|
|[**retrieveTaxGroup**](#retrievetaxgroup) | **GET** /v1/taxes/group/{taxGroupId} | Retrieve Tax Group|
|[**retrieveTemplate22**](#retrievetemplate22) | **GET** /v1/taxes/group/template | |
|[**updateTaxGroup**](#updatetaxgroup) | **PUT** /v1/taxes/group/{taxGroupId} | Update Tax Group|

# **createTaxGroup**
> PostTaxesGroupResponse createTaxGroup(postTaxesGroupRequest)

Create a new Tax Group Mandatory Fields: name and taxComponents Mandatory Fields in taxComponents: taxComponentId Optional Fields in taxComponents: id, startDate and endDate

### Example

```typescript
import {
    TaxGroupApi,
    Configuration,
    PostTaxesGroupRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxGroupApi(configuration);

let postTaxesGroupRequest: PostTaxesGroupRequest; //

const { status, data } = await apiInstance.createTaxGroup(
    postTaxesGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTaxesGroupRequest** | **PostTaxesGroupRequest**|  | |


### Return type

**PostTaxesGroupResponse**

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

# **retrieveAllTaxGroups**
> Array<GetTaxesGroupResponse> retrieveAllTaxGroups()

List Tax Group

### Example

```typescript
import {
    TaxGroupApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxGroupApi(configuration);

const { status, data } = await apiInstance.retrieveAllTaxGroups();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetTaxesGroupResponse>**

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

# **retrieveTaxGroup**
> GetTaxesGroupResponse retrieveTaxGroup()

Retrieve Tax Group

### Example

```typescript
import {
    TaxGroupApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxGroupApi(configuration);

let taxGroupId: number; //taxGroupId (default to undefined)

const { status, data } = await apiInstance.retrieveTaxGroup(
    taxGroupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **taxGroupId** | [**number**] | taxGroupId | defaults to undefined|


### Return type

**GetTaxesGroupResponse**

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

# **retrieveTemplate22**
> TaxGroupData retrieveTemplate22()


### Example

```typescript
import {
    TaxGroupApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxGroupApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate22();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TaxGroupData**

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

# **updateTaxGroup**
> PutTaxesGroupTaxGroupIdResponse updateTaxGroup(putTaxesGroupTaxGroupIdRequest)

Updates Tax Group. Only end date can be up-datable and can insert new tax components.

### Example

```typescript
import {
    TaxGroupApi,
    Configuration,
    PutTaxesGroupTaxGroupIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TaxGroupApi(configuration);

let taxGroupId: number; //taxGroupId (default to undefined)
let putTaxesGroupTaxGroupIdRequest: PutTaxesGroupTaxGroupIdRequest; //

const { status, data } = await apiInstance.updateTaxGroup(
    taxGroupId,
    putTaxesGroupTaxGroupIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putTaxesGroupTaxGroupIdRequest** | **PutTaxesGroupTaxGroupIdRequest**|  | |
| **taxGroupId** | [**number**] | taxGroupId | defaults to undefined|


### Return type

**PutTaxesGroupTaxGroupIdResponse**

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

