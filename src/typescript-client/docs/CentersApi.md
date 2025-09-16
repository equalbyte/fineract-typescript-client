# CentersApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate2**](#activate2) | **POST** /v1/centers/{centerId} | Activate a Center | Generate Collection Sheet | Save Collection Sheet | Close a Center | Associate Groups | Disassociate Groups|
|[**create7**](#create7) | **POST** /v1/centers | Create a Center|
|[**delete10**](#delete10) | **DELETE** /v1/centers/{centerId} | Delete a Center|
|[**getCentersTemplate**](#getcenterstemplate) | **GET** /v1/centers/downloadtemplate | |
|[**postCentersTemplate**](#postcenterstemplate) | **POST** /v1/centers/uploadtemplate | |
|[**retrieveAll23**](#retrieveall23) | **GET** /v1/centers | List Centers|
|[**retrieveGroupAccount**](#retrievegroupaccount) | **GET** /v1/centers/{centerId}/accounts | Retrieve Center accounts overview|
|[**retrieveOne14**](#retrieveone14) | **GET** /v1/centers/{centerId} | Retrieve a Center|
|[**retrieveTemplate6**](#retrievetemplate6) | **GET** /v1/centers/template | Retrieve a Center Template|
|[**update12**](#update12) | **PUT** /v1/centers/{centerId} | Update a Center|

# **activate2**
> PostCentersCenterIdResponse activate2(postCentersCenterIdRequest)

Activate a Center:  Centers can be created in a Pending state. This API exists to enable center activation. If the center happens to be already active, this API will result in an error.  Close a Center:  Centers can be closed if they don\'t have any non-closed groups or saving accounts. If the Center has any active groups or savings accounts, this API will result in an error.  Associate Groups:  This API allows associating existing groups to a center. The groups are listed from the office to which the center is associated. If group(s) is already associated with a center, this API will result in an error.  Disassociate Groups:  This API allows to disassociate groups from a center.  Generate Collection Sheet:  This Api retrieves repayment details of all jlg loans under a center as on a specified meeting date.  Save Collection Sheet:  This Api allows the loan officer to perform bulk repayments of JLG loans for a center on a given meeting date.  Showing Request/Response for Close a Center

### Example

```typescript
import {
    CentersApi,
    Configuration,
    PostCentersCenterIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let centerId: number; //centerId (default to undefined)
let postCentersCenterIdRequest: PostCentersCenterIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.activate2(
    centerId,
    postCentersCenterIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCentersCenterIdRequest** | **PostCentersCenterIdRequest**|  | |
| **centerId** | [**number**] | centerId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostCentersCenterIdResponse**

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

# **create7**
> PostCentersResponse create7(postCentersRequest)

Creates a Center  Mandatory Fields: name, officeId, active, activationDate (if active=true)  Optional Fields: externalId, staffId, groupMembers

### Example

```typescript
import {
    CentersApi,
    Configuration,
    PostCentersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let postCentersRequest: PostCentersRequest; //

const { status, data } = await apiInstance.create7(
    postCentersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCentersRequest** | **PostCentersRequest**|  | |


### Return type

**PostCentersResponse**

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

# **delete10**
> DeleteCentersCenterIdResponse delete10()

A Center can be deleted if it is in pending state and has no association - groups, loans or savings

### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let centerId: number; //centerId (default to undefined)

const { status, data } = await apiInstance.delete10(
    centerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **centerId** | [**number**] | centerId | defaults to undefined|


### Return type

**DeleteCentersCenterIdResponse**

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

# **getCentersTemplate**
> getCentersTemplate()


### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCentersTemplate(
    officeId,
    staffId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
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

# **postCentersTemplate**
> string postCentersTemplate()


### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postCentersTemplate(
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

# **retrieveAll23**
> GetCentersResponse retrieveAll23()

The default implementation supports pagination and sorting with the default pagination size set to 200 records. The parameter limit with description -1 will return all entries.  Example Requests:    centers    centers?fields=name,officeName,joinedDate    centers?offset=10&limit=50    centers?orderBy=name&sortOrder=DESC

### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let staffId: number; //staffId (optional) (default to undefined)
let externalId: string; //externalId (optional) (default to undefined)
let name: string; //name (optional) (default to undefined)
let underHierarchy: string; //underHierarchy (optional) (default to undefined)
let paged: boolean; //paged (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let meetingDate: object; //meetingDate (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll23(
    officeId,
    staffId,
    externalId,
    name,
    underHierarchy,
    paged,
    offset,
    limit,
    orderBy,
    sortOrder,
    meetingDate,
    dateFormat,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **staffId** | [**number**] | staffId | (optional) defaults to undefined|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **name** | [**string**] | name | (optional) defaults to undefined|
| **underHierarchy** | [**string**] | underHierarchy | (optional) defaults to undefined|
| **paged** | [**boolean**] | paged | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **meetingDate** | **object** | meetingDate | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|


### Return type

**GetCentersResponse**

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

# **retrieveGroupAccount**
> GetCentersCenterIdAccountsResponse retrieveGroupAccount()

An example of how a savings summary for a Center can be provided. This is requested in a specific use case of the reference application.  It is quite reasonable to add resources like this to simplify User Interface development.    Example Requests:    centers/9/accounts

### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let centerId: number; //centerId (default to undefined)

const { status, data } = await apiInstance.retrieveGroupAccount(
    centerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **centerId** | [**number**] | centerId | defaults to undefined|


### Return type

**GetCentersCenterIdAccountsResponse**

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

# **retrieveOne14**
> GetCentersCenterIdResponse retrieveOne14()

Retrieves a Center  Example Requests:    centers/1    centers/1?associations=groupMembers

### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let centerId: number; //centerId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveOne14(
    centerId,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **centerId** | [**number**] | centerId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetCentersCenterIdResponse**

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

# **retrieveTemplate6**
> GetCentersTemplateResponse retrieveTemplate6()

Retrieves a Center Template  Example Requests:    centers/template    centers/template?officeId=2

### Example

```typescript
import {
    CentersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let command: string; //command (optional) (default to undefined)
let officeId: number; //officeId (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveTemplate6(
    command,
    officeId,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **command** | [**string**] | command | (optional) defaults to undefined|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetCentersTemplateResponse**

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

# **update12**
> PutCentersCenterIdResponse update12(putCentersCenterIdRequest)

Updates a Center

### Example

```typescript
import {
    CentersApi,
    Configuration,
    PutCentersCenterIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CentersApi(configuration);

let centerId: number; //centerId (default to undefined)
let putCentersCenterIdRequest: PutCentersCenterIdRequest; //

const { status, data } = await apiInstance.update12(
    centerId,
    putCentersCenterIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putCentersCenterIdRequest** | **PutCentersCenterIdRequest**|  | |
| **centerId** | [**number**] | centerId | defaults to undefined|


### Return type

**PutCentersCenterIdResponse**

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

