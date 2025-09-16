# SpmSurveysApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateOrDeactivateSurvey**](#activateordeactivatesurvey) | **POST** /v1/surveys/{id} | Deactivate Survey|
|[**createSurvey**](#createsurvey) | **POST** /v1/surveys | Create a Survey|
|[**editSurvey**](#editsurvey) | **PUT** /v1/surveys/{id} | |
|[**fetchAllSurveys1**](#fetchallsurveys1) | **GET** /v1/surveys | List all Surveys|
|[**findSurvey**](#findsurvey) | **GET** /v1/surveys/{id} | Retrieve a Survey|

# **activateOrDeactivateSurvey**
> activateOrDeactivateSurvey()


### Example

```typescript
import {
    SpmSurveysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SpmSurveysApi(configuration);

let id: number; // (default to undefined)
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.activateOrDeactivateSurvey(
    id,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createSurvey**
> createSurvey()

Adds a new survey to collect client related data.  Mandatory Fields  countryCode, key, name, questions, responses, sequenceNo, text, description

### Example

```typescript
import {
    SpmSurveysApi,
    Configuration,
    SurveyData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SpmSurveysApi(configuration);

let surveyData: SurveyData; //Create survey (optional)

const { status, data } = await apiInstance.createSurvey(
    surveyData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyData** | **SurveyData**| Create survey | |


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **editSurvey**
> string editSurvey()


### Example

```typescript
import {
    SpmSurveysApi,
    Configuration,
    SurveyData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SpmSurveysApi(configuration);

let id: number; // (default to undefined)
let surveyData: SurveyData; // (optional)

const { status, data } = await apiInstance.editSurvey(
    id,
    surveyData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyData** | **SurveyData**|  | |
| **id** | [**number**] |  | defaults to undefined|


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

# **fetchAllSurveys1**
> Array<SurveyData> fetchAllSurveys1()


### Example

```typescript
import {
    SpmSurveysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SpmSurveysApi(configuration);

let isActive: boolean; // (optional) (default to undefined)

const { status, data } = await apiInstance.fetchAllSurveys1(
    isActive
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|


### Return type

**Array<SurveyData>**

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

# **findSurvey**
> SurveyData findSurvey()


### Example

```typescript
import {
    SpmSurveysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SpmSurveysApi(configuration);

let id: number; //Enter id (default to undefined)

const { status, data } = await apiInstance.findSurvey(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | Enter id | defaults to undefined|


### Return type

**SurveyData**

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

