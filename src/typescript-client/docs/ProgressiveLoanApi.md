# ProgressiveLoanApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchModel**](#fetchmodel) | **GET** /v1/internal/loan/progressive/{loanId}/model | Fetch ProgressiveLoanInterestScheduleModel|
|[**updateModel**](#updatemodel) | **POST** /v1/internal/loan/progressive/{loanId}/model | Update and Save ProgressiveLoanInterestScheduleModel|

# **fetchModel**
> ProgressiveLoanInterestScheduleModel fetchModel()

DO NOT USE THIS IN PRODUCTION!

### Example

```typescript
import {
    ProgressiveLoanApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProgressiveLoanApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.fetchModel(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**ProgressiveLoanInterestScheduleModel**

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

# **updateModel**
> ProgressiveLoanInterestScheduleModel updateModel()

DO NOT USE THIS IN PRODUCTION!

### Example

```typescript
import {
    ProgressiveLoanApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProgressiveLoanApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.updateModel(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**ProgressiveLoanInterestScheduleModel**

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

