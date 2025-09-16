# DocumentsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDocument**](#createdocument) | **POST** /v1/{entityType}/{entityId}/documents | Create a Document|
|[**deleteDocument**](#deletedocument) | **DELETE** /v1/{entityType}/{entityId}/documents/{documentId} | Remove a Document|
|[**downloadFile**](#downloadfile) | **GET** /v1/{entityType}/{entityId}/documents/{documentId}/attachment | Retrieve Binary File associated with Document|
|[**getDocument**](#getdocument) | **GET** /v1/{entityType}/{entityId}/documents/{documentId} | Retrieve a Document|
|[**retrieveAllDocuments**](#retrievealldocuments) | **GET** /v1/{entityType}/{entityId}/documents | List documents|
|[**updateDocument**](#updatedocument) | **PUT** /v1/{entityType}/{entityId}/documents/{documentId} | Update a Document|

# **createDocument**
> PostEntityTypeEntityIdDocumentsResponse createDocument()

Note: A document is created using a Multi-part form upload   Body Parts  name :  Name or summary of the document  description :  Description of the document  file :  The file to be uploaded  Mandatory Fields :  file and description

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)
let contentLength: number; //Content-Length (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.createDocument(
    entityType,
    entityId,
    contentLength,
    dateFormat,
    description,
    locale,
    name,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|
| **contentLength** | [**number**] | Content-Length | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**PostEntityTypeEntityIdDocumentsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Not Shown (multi-part form data) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDocument**
> DeleteEntityTypeEntityIdDocumentsResponse deleteDocument()


### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)
let documentId: number; //documentId (default to undefined)

const { status, data } = await apiInstance.deleteDocument(
    entityType,
    entityId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|
| **documentId** | [**number**] | documentId | defaults to undefined|


### Return type

**DeleteEntityTypeEntityIdDocumentsResponse**

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

# **downloadFile**
> downloadFile()

Request used to download the file associated with the document  Example Requests:  clients/1/documents/1/attachment   loans/1/documents/1/attachment

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)
let documentId: number; //documentId (default to undefined)

const { status, data } = await apiInstance.downloadFile(
    entityType,
    entityId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|
| **documentId** | [**number**] | documentId | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Not Shown: The corresponding Binary file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocument**
> DocumentData getDocument()

Example Requests:  clients/1/documents/1   loans/1/documents/1   client_identifiers/1/documents/1?fields=name,description

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)
let documentId: number; //documentId (default to undefined)

const { status, data } = await apiInstance.getDocument(
    entityType,
    entityId,
    documentId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|
| **documentId** | [**number**] | documentId | defaults to undefined|


### Return type

**DocumentData**

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

# **retrieveAllDocuments**
> Array<DocumentData> retrieveAllDocuments()

Example Requests:  clients/1/documents  client_identifiers/1/documents  loans/1/documents?fields=name,description

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)

const { status, data } = await apiInstance.retrieveAllDocuments(
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|


### Return type

**Array<DocumentData>**

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

# **updateDocument**
> PutEntityTypeEntityIdDocumentsResponse updateDocument()

Note: A document is updated using a Multi-part form upload  Body Parts name Name or summary of the document description Description of the document file The file to be uploaded

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let entityType: string; //entityType (default to undefined)
let entityId: number; //entityId (default to undefined)
let documentId: number; //documentId (default to undefined)
let contentLength: number; //Content-Length (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let description: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.updateDocument(
    entityType,
    entityId,
    documentId,
    contentLength,
    dateFormat,
    description,
    locale,
    name,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] | entityType | defaults to undefined|
| **entityId** | [**number**] | entityId | defaults to undefined|
| **documentId** | [**number**] | documentId | defaults to undefined|
| **contentLength** | [**number**] | Content-Length | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **description** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**PutEntityTypeEntityIdDocumentsResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Not Shown (multi-part form data) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

