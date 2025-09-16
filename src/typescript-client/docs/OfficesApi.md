# OfficesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOffice**](#createoffice) | **POST** /v1/offices | Create an Office|
|[**getOfficeTemplate**](#getofficetemplate) | **GET** /v1/offices/downloadtemplate | |
|[**postOfficeTemplate**](#postofficetemplate) | **POST** /v1/offices/uploadtemplate | |
|[**retrieveOffice**](#retrieveoffice) | **GET** /v1/offices/{officeId} | Retrieve an Office|
|[**retrieveOfficeByExternalId**](#retrieveofficebyexternalid) | **GET** /v1/offices/external-id/{externalId} | Retrieve an Office using external id|
|[**retrieveOfficeTemplate1**](#retrieveofficetemplate1) | **GET** /v1/offices/template | Retrieve Office Details Template|
|[**retrieveOffices**](#retrieveoffices) | **GET** /v1/offices | List Offices|
|[**updateOffice**](#updateoffice) | **PUT** /v1/offices/{officeId} | Update Office|
|[**updateOfficeWithExternalId**](#updateofficewithexternalid) | **PUT** /v1/offices/external-id/{externalId} | Update Office|

# **createOffice**
> PostOfficesResponse createOffice(postOfficesRequest)

Mandatory Fields name, openingDate, parentId

### Example

```typescript
import {
    OfficesApi,
    Configuration,
    PostOfficesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let postOfficesRequest: PostOfficesRequest; //

const { status, data } = await apiInstance.createOffice(
    postOfficesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postOfficesRequest** | **PostOfficesRequest**|  | |


### Return type

**PostOfficesResponse**

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

# **getOfficeTemplate**
> getOfficeTemplate()


### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOfficeTemplate(
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postOfficeTemplate**
> string postOfficeTemplate()


### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postOfficeTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOffice**
> GetOfficesResponse retrieveOffice()

Example Requests:  offices/1   offices/1?template=true   offices/1?fields=id,name,parentName

### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let officeId: number; //officeId (default to undefined)

const { status, data } = await apiInstance.retrieveOffice(
    officeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | defaults to undefined|


### Return type

**GetOfficesResponse**

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

# **retrieveOfficeByExternalId**
> GetOfficesResponse retrieveOfficeByExternalId()

Example Requests:  offices/external-id/asd123   offices/external-id/asd123?template=true   offices/external-id/asd123?fields=id,name,parentName

### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let externalId: string; //externalId (default to undefined)

const { status, data } = await apiInstance.retrieveOfficeByExternalId(
    externalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**GetOfficesResponse**

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

# **retrieveOfficeTemplate1**
> GetOfficesTemplateResponse retrieveOfficeTemplate1()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  offices/template

### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

const { status, data } = await apiInstance.retrieveOfficeTemplate1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOfficesTemplateResponse**

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

# **retrieveOffices**
> Array<GetOfficesResponse> retrieveOffices()

Example Requests:  offices   offices?fields=id,name,openingDate

### Example

```typescript
import {
    OfficesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let includeAllOffices: boolean; //includeAllOffices (optional) (default to false)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOffices(
    includeAllOffices,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **includeAllOffices** | [**boolean**] | includeAllOffices | (optional) defaults to false|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**Array<GetOfficesResponse>**

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

# **updateOffice**
> PutOfficesOfficeIdResponse updateOffice(putOfficesOfficeIdRequest)


### Example

```typescript
import {
    OfficesApi,
    Configuration,
    PutOfficesOfficeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let officeId: number; //officeId (default to undefined)
let putOfficesOfficeIdRequest: PutOfficesOfficeIdRequest; //

const { status, data } = await apiInstance.updateOffice(
    officeId,
    putOfficesOfficeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putOfficesOfficeIdRequest** | **PutOfficesOfficeIdRequest**|  | |
| **officeId** | [**number**] | officeId | defaults to undefined|


### Return type

**PutOfficesOfficeIdResponse**

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

# **updateOfficeWithExternalId**
> PutOfficesOfficeIdResponse updateOfficeWithExternalId(putOfficesOfficeIdRequest)


### Example

```typescript
import {
    OfficesApi,
    Configuration,
    PutOfficesOfficeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new OfficesApi(configuration);

let externalId: string; //externalId (default to undefined)
let putOfficesOfficeIdRequest: PutOfficesOfficeIdRequest; //

const { status, data } = await apiInstance.updateOfficeWithExternalId(
    externalId,
    putOfficesOfficeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putOfficesOfficeIdRequest** | **PutOfficesOfficeIdRequest**|  | |
| **externalId** | [**string**] | externalId | defaults to undefined|


### Return type

**PutOfficesOfficeIdResponse**

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

