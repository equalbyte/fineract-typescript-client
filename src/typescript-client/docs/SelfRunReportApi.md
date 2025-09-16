# SelfRunReportApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**runReport1**](#runreport1) | **GET** /v1/self/runreports/{reportName} | Running A Report|

# **runReport1**
> GetRunReportResponse runReport1()

Example Requests:   self/runreports/Client%20Details?R_officeId=1   self/runreports/Client%20Details?R_officeId=1&exportCSV=true

### Example

```typescript
import {
    SelfRunReportApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfRunReportApi(configuration);

let reportName: string; //reportName (default to undefined)

const { status, data } = await apiInstance.runReport1(
    reportName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportName** | [**string**] | reportName | defaults to undefined|


### Return type

**GetRunReportResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, application/vnd.ms-excel, text/csv, text/html


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

