# SelfSpmApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchAllSurveys**](#fetchallsurveys) | **GET** /v1/self/surveys | |

# **fetchAllSurveys**
> Array<SurveyData> fetchAllSurveys()


### Example

```typescript
import {
    SelfSpmApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfSpmApi(configuration);

const { status, data } = await apiInstance.fetchAllSurveys();
```

### Parameters
This endpoint does not have any parameters.


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
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

