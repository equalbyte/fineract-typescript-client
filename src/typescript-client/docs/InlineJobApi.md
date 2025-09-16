# InlineJobApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeInlineJob**](#executeinlinejob) | **POST** /v1/jobs/{jobName}/inline | Starts an inline Job|

# **executeInlineJob**
> InlineJobResponse executeInlineJob()

Starts an inline Job

### Example

```typescript
import {
    InlineJobApi,
    Configuration,
    InlineJobRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InlineJobApi(configuration);

let jobName: string; //jobName (default to undefined)
let inlineJobRequest: InlineJobRequest; // (optional)

const { status, data } = await apiInstance.executeInlineJob(
    jobName,
    inlineJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inlineJobRequest** | **InlineJobRequest**|  | |
| **jobName** | [**string**] | jobName | defaults to undefined|


### Return type

**InlineJobResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Request body item size validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

