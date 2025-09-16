# ReportsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReport**](#createreport) | **POST** /v1/reports | Create a Report|
|[**deleteReport**](#deletereport) | **DELETE** /v1/reports/{id} | Delete a Report|
|[**retrieveOfficeTemplate**](#retrieveofficetemplate) | **GET** /v1/reports/template | Retrieve Report Template|
|[**retrieveReport**](#retrievereport) | **GET** /v1/reports/{id} | Retrieve a Report |
|[**retrieveReportList**](#retrievereportlist) | **GET** /v1/reports | List Reports|
|[**updateReport**](#updatereport) | **PUT** /v1/reports/{id} | Update a Report|

# **createReport**
> PostReportsResponse createReport(postRepostRequest)


### Example

```typescript
import {
    ReportsApi,
    Configuration,
    PostRepostRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let postRepostRequest: PostRepostRequest; //

const { status, data } = await apiInstance.createReport(
    postRepostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRepostRequest** | **PostRepostRequest**|  | |


### Return type

**PostReportsResponse**

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

# **deleteReport**
> DeleteReportsResponse deleteReport()

Only non-core reports can be deleted.

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let id: number; //id (default to undefined)

const { status, data } = await apiInstance.deleteReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | id | defaults to undefined|


### Return type

**DeleteReportsResponse**

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

# **retrieveOfficeTemplate**
> GetReportsTemplateResponse retrieveOfficeTemplate()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists  Example Request :   reports/template

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

const { status, data } = await apiInstance.retrieveOfficeTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetReportsTemplateResponse**

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

# **retrieveReport**
> GetReportsResponse retrieveReport()

Example Requests:  reports/1   reports/1?template=true

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let id: number; //id (default to undefined)

const { status, data } = await apiInstance.retrieveReport(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | id | defaults to undefined|


### Return type

**GetReportsResponse**

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

# **retrieveReportList**
> Array<GetReportsResponse> retrieveReportList()

Lists all reports and their parameters.  Example Request:  reports

### Example

```typescript
import {
    ReportsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

const { status, data } = await apiInstance.retrieveReportList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetReportsResponse>**

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

# **updateReport**
> PutReportResponse updateReport(putReportRequest)

Only the useReport description can be updated for core reports.

### Example

```typescript
import {
    ReportsApi,
    Configuration,
    PutReportRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportsApi(configuration);

let id: number; //id (default to undefined)
let putReportRequest: PutReportRequest; //

const { status, data } = await apiInstance.updateReport(
    id,
    putReportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putReportRequest** | **PutReportRequest**|  | |
| **id** | [**number**] | id | defaults to undefined|


### Return type

**PutReportResponse**

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

