# NotesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addNewNote**](#addnewnote) | **POST** /v1/{resourceType}/{resourceId}/notes | Add a Resource Note|
|[**deleteNote**](#deletenote) | **DELETE** /v1/{resourceType}/{resourceId}/notes/{noteId} | Delete a Resource Note|
|[**retrieveNote**](#retrievenote) | **GET** /v1/{resourceType}/{resourceId}/notes/{noteId} | Retrieve a Resource Note|
|[**retrieveNotesByResource**](#retrievenotesbyresource) | **GET** /v1/{resourceType}/{resourceId}/notes | Retrieve a Resource\&#39;s description|
|[**updateNote**](#updatenote) | **PUT** /v1/{resourceType}/{resourceId}/notes/{noteId} | Update a Resource Note|

# **addNewNote**
> PostResourceTypeResourceIdNotesResponse addNewNote(noteRequest)

Adds a new note to a supported resource.  Example Requests:  clients/1/notes   groups/1/notes

### Example

```typescript
import {
    NotesApi,
    Configuration,
    NoteRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let resourceType: string; //resourceType (default to undefined)
let resourceId: number; //resourceId (default to undefined)
let noteRequest: NoteRequest; //

const { status, data } = await apiInstance.addNewNote(
    resourceType,
    resourceId,
    noteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noteRequest** | **NoteRequest**|  | |
| **resourceType** | [**string**] | resourceType | defaults to undefined|
| **resourceId** | [**number**] | resourceId | defaults to undefined|


### Return type

**PostResourceTypeResourceIdNotesResponse**

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

# **deleteNote**
> DeleteResourceTypeResourceIdNotesNoteIdResponse deleteNote()

Deletes a Resource Note

### Example

```typescript
import {
    NotesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let resourceType: string; //resourceType (default to undefined)
let resourceId: number; //resourceId (default to undefined)
let noteId: number; //noteId (default to undefined)

const { status, data } = await apiInstance.deleteNote(
    resourceType,
    resourceId,
    noteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**string**] | resourceType | defaults to undefined|
| **resourceId** | [**number**] | resourceId | defaults to undefined|
| **noteId** | [**number**] | noteId | defaults to undefined|


### Return type

**DeleteResourceTypeResourceIdNotesNoteIdResponse**

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

# **retrieveNote**
> NoteData retrieveNote()

Retrieves a Resource Note  Example Requests:  clients/1/notes/76   groups/1/notes/20   clients/1/notes/76?fields=note,createdOn,createdByUsername   groups/1/notes/20?fields=note,createdOn,createdByUsername

### Example

```typescript
import {
    NotesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let resourceType: string; //resourceType (default to undefined)
let resourceId: number; //resourceId (default to undefined)
let noteId: number; //noteId (default to undefined)

const { status, data } = await apiInstance.retrieveNote(
    resourceType,
    resourceId,
    noteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**string**] | resourceType | defaults to undefined|
| **resourceId** | [**number**] | resourceId | defaults to undefined|
| **noteId** | [**number**] | noteId | defaults to undefined|


### Return type

**NoteData**

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

# **retrieveNotesByResource**
> Array<NoteData> retrieveNotesByResource()

Retrieves a Resource\'s Notes  Note: Notes are returned in descending createOn order.  Example Requests:  clients/2/notes   groups/2/notes?fields=note,createdOn,createdByUsername

### Example

```typescript
import {
    NotesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let resourceType: string; //resourceType (default to undefined)
let resourceId: number; //resourceId (default to undefined)

const { status, data } = await apiInstance.retrieveNotesByResource(
    resourceType,
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceType** | [**string**] | resourceType | defaults to undefined|
| **resourceId** | [**number**] | resourceId | defaults to undefined|


### Return type

**Array<NoteData>**

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

# **updateNote**
> PutResourceTypeResourceIdNotesNoteIdResponse updateNote(noteRequest)

Updates a Resource Note

### Example

```typescript
import {
    NotesApi,
    Configuration,
    NoteRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new NotesApi(configuration);

let resourceType: string; //resourceType (default to undefined)
let resourceId: number; //resourceId (default to undefined)
let noteId: number; //noteId (default to undefined)
let noteRequest: NoteRequest; //

const { status, data } = await apiInstance.updateNote(
    resourceType,
    resourceId,
    noteId,
    noteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **noteRequest** | **NoteRequest**|  | |
| **resourceType** | [**string**] | resourceType | defaults to undefined|
| **resourceId** | [**number**] | resourceId | defaults to undefined|
| **noteId** | [**number**] | noteId | defaults to undefined|


### Return type

**PutResourceTypeResourceIdNotesNoteIdResponse**

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

