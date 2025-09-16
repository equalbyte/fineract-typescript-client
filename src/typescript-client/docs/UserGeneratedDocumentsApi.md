# UserGeneratedDocumentsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createTemplate**](#createtemplate) | **POST** /v1/templates | Add a UGD|
|[**deleteTemplate**](#deletetemplate) | **DELETE** /v1/templates/{templateId} | Delete a UGD|
|[**getTemplateByTemplate**](#gettemplatebytemplate) | **GET** /v1/templates/{templateId}/template | |
|[**mergeTemplate**](#mergetemplate) | **POST** /v1/templates/{templateId} | |
|[**retrieveAll40**](#retrieveall40) | **GET** /v1/templates | Retrieve all UGDs|
|[**retrieveOne30**](#retrieveone30) | **GET** /v1/templates/{templateId} | Retrieve a UGD|
|[**saveTemplate**](#savetemplate) | **PUT** /v1/templates/{templateId} | Update a UGD|
|[**template20**](#template20) | **GET** /v1/templates/template | Retrieve UGD Details Template|

# **createTemplate**
> PostTemplatesResponse createTemplate(postTemplatesRequest)

Adds a new UGD.  Mandatory Fields name    Example Requests:  templates/1

### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration,
    PostTemplatesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let postTemplatesRequest: PostTemplatesRequest; //

const { status, data } = await apiInstance.createTemplate(
    postTemplatesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTemplatesRequest** | **PostTemplatesRequest**|  | |


### Return type

**PostTemplatesResponse**

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

# **deleteTemplate**
> DeleteTemplatesTemplateIdResponse deleteTemplate()


### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let templateId: number; //templateId (default to undefined)

const { status, data } = await apiInstance.deleteTemplate(
    templateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**number**] | templateId | defaults to undefined|


### Return type

**DeleteTemplatesTemplateIdResponse**

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

# **getTemplateByTemplate**
> string getTemplateByTemplate()


### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let templateId: number; // (default to undefined)

const { status, data } = await apiInstance.getTemplateByTemplate(
    templateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**number**] |  | defaults to undefined|


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

# **mergeTemplate**
> string mergeTemplate()


### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let templateId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.mergeTemplate(
    templateId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **templateId** | [**number**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll40**
> GetTemplatesResponse retrieveAll40()

Example Requests:  templates  It is also possible to get specific UGDs by entity and type:  templates?type=0&entity=0 [Entity: Id]      client: 0, loan: 1  [Type: Id]    Document: 0, E-Mail (not yet): 1,  SMS: 2

### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let typeId: number; //typeId (optional) (default to -1)
let entityId: number; //entityId (optional) (default to -1)

const { status, data } = await apiInstance.retrieveAll40(
    typeId,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**number**] | typeId | (optional) defaults to -1|
| **entityId** | [**number**] | entityId | (optional) defaults to -1|


### Return type

**GetTemplatesResponse**

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

# **retrieveOne30**
> GetTemplatesTemplateIdResponse retrieveOne30()

Example Requests:  templates/1

### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let templateId: number; //templateId (default to undefined)

const { status, data } = await apiInstance.retrieveOne30(
    templateId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **templateId** | [**number**] | templateId | defaults to undefined|


### Return type

**GetTemplatesTemplateIdResponse**

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

# **saveTemplate**
> PutTemplatesTemplateIdResponse saveTemplate(putTemplatesTemplateIdRequest)


### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration,
    PutTemplatesTemplateIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

let templateId: number; //templateId (default to undefined)
let putTemplatesTemplateIdRequest: PutTemplatesTemplateIdRequest; //

const { status, data } = await apiInstance.saveTemplate(
    templateId,
    putTemplatesTemplateIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putTemplatesTemplateIdRequest** | **PutTemplatesTemplateIdRequest**|  | |
| **templateId** | [**number**] | templateId | defaults to undefined|


### Return type

**PutTemplatesTemplateIdResponse**

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

# **template20**
> GetTemplatesTemplateResponse template20()

This is a convenience resource. It can be useful when building maintenance user interface screens for UGDs. The UGD data returned consists of any or all of:  ARGUMENTS name String entity String type String text String optional mappers Mapper optional Example Request:  templates/template

### Example

```typescript
import {
    UserGeneratedDocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new UserGeneratedDocumentsApi(configuration);

const { status, data } = await apiInstance.template20();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetTemplatesTemplateResponse**

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

