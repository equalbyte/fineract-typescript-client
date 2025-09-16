# RunReportsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAllAvailableExports**](#retrieveallavailableexports) | **GET** /v1/runreports/availableExports/{reportName} | Return all available export types for the specific report|
|[**runReport**](#runreport) | **GET** /v1/runreports/{reportName} | Running a Report|

# **retrieveAllAvailableExports**
> Array<ReportExportType> retrieveAllAvailableExports()

Returns the list of all available export types.

### Example

```typescript
import {
    RunReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RunReportsApi(configuration);

let reportName: string; //reportName (default to undefined)
let isSelfServiceUserReport: boolean; //isSelfServiceUserReport (optional) (default to false)

const { status, data } = await apiInstance.retrieveAllAvailableExports(
    reportName,
    isSelfServiceUserReport
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportName** | [**string**] | reportName | defaults to undefined|
| **isSelfServiceUserReport** | [**boolean**] | isSelfServiceUserReport | (optional) defaults to false|


### Return type

**Array<ReportExportType>**

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

# **runReport**
> RunReportsResponse runReport()

This resource allows you to run and receive output from pre-defined Apache Fineract reports.  Reports can also be used to provide data for searching and workflow functionality.  The default output is a JSON formatted \"Generic Resultset\". The Generic Resultset contains Column Heading as well as Data information. However, you can export to CSV format by simply adding \"&exportCSV=true\" to the end of your URL.  If Pentaho reports have been pre-defined, they can also be run through this resource. Pentaho reports can return HTML, PDF or CSV formats.  The Apache Fineract reference application uses a JQuery plugin called stretchy reporting which, itself, uses this reports resource to provide a pretty flexible reporting User Interface (UI).    Example Requests:  runreports/Client%20Listing?R_officeId=1   runreports/Client%20Listing?R_officeId=1&exportCSV=true   runreports/OfficeIdSelectOne?R_officeId=1&parameterType=true   runreports/OfficeIdSelectOne?R_officeId=1&parameterType=true&exportCSV=true   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=HTML&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=XLS&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=CSV&R_officeId=1   runreports/Expected%20Payments%20By%20Date%20-%20Formatted?R_endDate=2013-04-30&R_loanOfficerId=-1&R_officeId=1&R_startDate=2013-04-16&output-type=PDF&R_officeId=1

### Example

```typescript
import {
    RunReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RunReportsApi(configuration);

let reportName: string; //reportName (default to undefined)
let isSelfServiceUserReport: boolean; //isSelfServiceUserReport (optional) (default to false)

const { status, data } = await apiInstance.runReport(
    reportName,
    isSelfServiceUserReport
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportName** | [**string**] | reportName | defaults to undefined|
| **isSelfServiceUserReport** | [**boolean**] | isSelfServiceUserReport | (optional) defaults to false|


### Return type

**RunReportsResponse**

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

