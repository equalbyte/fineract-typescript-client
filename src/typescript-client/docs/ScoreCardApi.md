# ScoreCardApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createScorecard1**](#createscorecard1) | **POST** /v1/surveys/scorecards/{surveyId} | Create a Scorecard entry|
|[**findByClient1**](#findbyclient1) | **GET** /v1/surveys/scorecards/clients/{clientId} | |
|[**findBySurvey**](#findbysurvey) | **GET** /v1/surveys/scorecards/{surveyId} | List all Scorecard entries|
|[**findBySurveyAndClient**](#findbysurveyandclient) | **GET** /v1/surveys/scorecards/{surveyId}/clients/{clientId} | |

# **createScorecard1**
> createScorecard1()

Add a new entry to a survey.  Mandatory Fields clientId, createdOn, questionId, responseId, staffId

### Example

```typescript
import {
    ScoreCardApi,
    Configuration,
    ScorecardData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ScoreCardApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)
let scorecardData: ScorecardData; //scorecardData (optional)

const { status, data } = await apiInstance.createScorecard1(
    surveyId,
    scorecardData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scorecardData** | **ScorecardData**| scorecardData | |
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|


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

# **findByClient1**
> Array<ScorecardData> findByClient1()


### Example

```typescript
import {
    ScoreCardApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ScoreCardApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.findByClient1(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**Array<ScorecardData>**

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

# **findBySurvey**
> Array<Scorecard> findBySurvey()

List all Scorecard entries for a survey.

### Example

```typescript
import {
    ScoreCardApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ScoreCardApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)

const { status, data } = await apiInstance.findBySurvey(
    surveyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|


### Return type

**Array<Scorecard>**

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

# **findBySurveyAndClient**
> Array<ScorecardData> findBySurveyAndClient()


### Example

```typescript
import {
    ScoreCardApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ScoreCardApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)
let clientId: number; //Enter clientId (default to undefined)

const { status, data } = await apiInstance.findBySurveyAndClient(
    surveyId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|
| **clientId** | [**number**] | Enter clientId | defaults to undefined|


### Return type

**Array<ScorecardData>**

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

