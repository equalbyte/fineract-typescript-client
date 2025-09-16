# ListReportMailingJobHistoryApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllByReportMailingJobId**](#retrieveallbyreportmailingjobid) | **GET** /v1/reportmailingjobrunhistory | List Report Mailing Job History|

# **retrieveAllByReportMailingJobId**
> ReportMailingJobRunHistoryData retrieveAllByReportMailingJobId()

The list capability of report mailing job history can support pagination and sorting.  Example Requests:  reportmailingjobrunhistory/1

### Example

```typescript
import {
    ListReportMailingJobHistoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ListReportMailingJobHistoryApi(configuration);

let reportMailingJobId: number; //reportMailingJobId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllByReportMailingJobId(
    reportMailingJobId,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportMailingJobId** | [**number**] | reportMailingJobId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**ReportMailingJobRunHistoryData**

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

