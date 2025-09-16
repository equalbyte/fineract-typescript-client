# SelfScoreCardApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createScorecard**](#createscorecard) | **POST** /v1/self/surveys/scorecards/{surveyId} | |
|[**findByClient**](#findbyclient) | **GET** /v1/self/surveys/scorecards/clients/{clientId} | |

# **createScorecard**
> createScorecard()


### Example

```typescript
import {
    SelfScoreCardApi,
    Configuration,
    ScorecardData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfScoreCardApi(configuration);

let surveyId: number; // (default to undefined)
let scorecardData: ScorecardData; // (optional)

const { status, data } = await apiInstance.createScorecard(
    surveyId,
    scorecardData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scorecardData** | **ScorecardData**|  | |
| **surveyId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

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

# **findByClient**
> Array<ScorecardData> findByClient()


### Example

```typescript
import {
    SelfScoreCardApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfScoreCardApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.findByClient(
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

