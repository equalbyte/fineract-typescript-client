# SurveyApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDatatableEntry1**](#createdatatableentry1) | **POST** /v1/survey/{surveyName}/{apptableId} | Create an entry in the survey table|
|[**deleteDatatableEntries1**](#deletedatatableentries1) | **DELETE** /v1/survey/{surveyName}/{clientId}/{fulfilledId} | |
|[**getClientSurveyOverview**](#getclientsurveyoverview) | **GET** /v1/survey/{surveyName}/{clientId} | |
|[**getSurveyEntry**](#getsurveyentry) | **GET** /v1/survey/{surveyName}/{clientId}/{entryId} | |
|[**register**](#register) | **PUT** /v1/survey/register/{surveyName}/{apptable} | |
|[**retrieveSurvey**](#retrievesurvey) | **GET** /v1/survey/{surveyName} | Retrieve survey|
|[**retrieveSurveys**](#retrievesurveys) | **GET** /v1/survey | Retrieve surveys|

# **createDatatableEntry1**
> PostSurveySurveyNameApptableIdResponse createDatatableEntry1(postSurveySurveyNameApptableIdRequest)

Insert and entry in a survey table (full fill the survey).  Refer Link for sample Body:  [ https://fineract.apache.org/docs/legacy/#survey_create ] 

### Example

```typescript
import {
    SurveyApi,
    Configuration,
    PostSurveySurveyNameApptableIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; //surveyName (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let postSurveySurveyNameApptableIdRequest: PostSurveySurveyNameApptableIdRequest; //

const { status, data } = await apiInstance.createDatatableEntry1(
    surveyName,
    apptableId,
    postSurveySurveyNameApptableIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSurveySurveyNameApptableIdRequest** | **PostSurveySurveyNameApptableIdRequest**|  | |
| **surveyName** | [**string**] | surveyName | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|


### Return type

**PostSurveySurveyNameApptableIdResponse**

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

# **deleteDatatableEntries1**
> string deleteDatatableEntries1()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; // (default to undefined)
let clientId: number; // (default to undefined)
let fulfilledId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteDatatableEntries1(
    surveyName,
    clientId,
    fulfilledId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyName** | [**string**] |  | defaults to undefined|
| **clientId** | [**number**] |  | defaults to undefined|
| **fulfilledId** | [**number**] |  | defaults to undefined|


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

# **getClientSurveyOverview**
> string getClientSurveyOverview()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; // (default to undefined)
let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.getClientSurveyOverview(
    surveyName,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyName** | [**string**] |  | defaults to undefined|
| **clientId** | [**number**] |  | defaults to undefined|


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

# **getSurveyEntry**
> string getSurveyEntry()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; // (default to undefined)
let clientId: number; // (default to undefined)
let entryId: number; // (default to undefined)

const { status, data } = await apiInstance.getSurveyEntry(
    surveyName,
    clientId,
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyName** | [**string**] |  | defaults to undefined|
| **clientId** | [**number**] |  | defaults to undefined|
| **entryId** | [**number**] |  | defaults to undefined|


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

# **register**
> string register()


### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; // (default to undefined)
let apptable: string; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.register(
    surveyName,
    apptable,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **surveyName** | [**string**] |  | defaults to undefined|
| **apptable** | [**string**] |  | defaults to undefined|


### Return type

**string**

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

# **retrieveSurvey**
> GetSurveyResponse retrieveSurvey()

Lists a registered survey table details and the Apache Fineract Core application table they are registered to.

### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

let surveyName: string; //surveyName (default to undefined)

const { status, data } = await apiInstance.retrieveSurvey(
    surveyName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyName** | [**string**] | surveyName | defaults to undefined|


### Return type

**GetSurveyResponse**

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

# **retrieveSurveys**
> Array<GetSurveyResponse> retrieveSurveys()

Retrieve surveys. This allows to retrieve the list of survey tables registered .

### Example

```typescript
import {
    SurveyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SurveyApi(configuration);

const { status, data } = await apiInstance.retrieveSurveys();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetSurveyResponse>**

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

