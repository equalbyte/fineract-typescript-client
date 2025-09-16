# BulkImportApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOutputTemplate**](#getoutputtemplate) | **GET** /v1/imports/downloadOutputTemplate | |
|[**retrieveImportDocuments**](#retrieveimportdocuments) | **GET** /v1/imports | |
|[**retriveOutputTemplateLocation**](#retriveoutputtemplatelocation) | **GET** /v1/imports/getOutputTemplateLocation | |

# **getOutputTemplate**
> getOutputTemplate()


### Example

```typescript
import {
    BulkImportApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BulkImportApi(configuration);

let importDocumentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getOutputTemplate(
    importDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importDocumentId** | [**string**] |  | (optional) defaults to undefined|


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

# **retrieveImportDocuments**
> string retrieveImportDocuments()


### Example

```typescript
import {
    BulkImportApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BulkImportApi(configuration);

let entityType: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveImportDocuments(
    entityType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | (optional) defaults to undefined|


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

# **retriveOutputTemplateLocation**
> string retriveOutputTemplateLocation()


### Example

```typescript
import {
    BulkImportApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BulkImportApi(configuration);

let importDocumentId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retriveOutputTemplateLocation(
    importDocumentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **importDocumentId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

