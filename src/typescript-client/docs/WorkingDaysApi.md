# WorkingDaysApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll17**](#retrieveall17) | **GET** /v1/workingdays | List Working days|
|[**template4**](#template4) | **GET** /v1/workingdays/template | Working Days Template|
|[**update8**](#update8) | **PUT** /v1/workingdays | Update a Working Day|

# **retrieveAll17**
> WorkingDaysData retrieveAll17()

Example Requests:  workingdays

### Example

```typescript
import {
    WorkingDaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new WorkingDaysApi(configuration);

const { status, data } = await apiInstance.retrieveAll17();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**WorkingDaysData**

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

# **template4**
> GetWorkingDaysTemplateResponse template4()

This is a convenience resource. It can be useful when building maintenance user interface screens for working days.  Example Request:  workingdays/template

### Example

```typescript
import {
    WorkingDaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new WorkingDaysApi(configuration);

const { status, data } = await apiInstance.template4();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetWorkingDaysTemplateResponse**

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

# **update8**
> PutWorkingDaysResponse update8(putWorkingDaysRequest)

Mandatory Fields recurrence,repaymentRescheduleType,extendTermForDailyRepayments,locale

### Example

```typescript
import {
    WorkingDaysApi,
    Configuration,
    PutWorkingDaysRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new WorkingDaysApi(configuration);

let putWorkingDaysRequest: PutWorkingDaysRequest; //

const { status, data } = await apiInstance.update8(
    putWorkingDaysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putWorkingDaysRequest** | **PutWorkingDaysRequest**|  | |


### Return type

**PutWorkingDaysResponse**

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

