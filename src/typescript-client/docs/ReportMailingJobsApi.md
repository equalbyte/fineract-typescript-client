# ReportMailingJobsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createReportMailingJob**](#createreportmailingjob) | **POST** /v1/reportmailingjobs | Create a Report Mailing Job|
|[**deleteReportMailingJob**](#deletereportmailingjob) | **DELETE** /v1/reportmailingjobs/{entityId} | Delete a Report Mailing Job|
|[**retrieveAllReportMailingJobs**](#retrieveallreportmailingjobs) | **GET** /v1/reportmailingjobs | List Report Mailing Jobs|
|[**retrieveReportMailingJob**](#retrievereportmailingjob) | **GET** /v1/reportmailingjobs/{entityId} | Retrieve a Report Mailing Job|
|[**retrieveReportMailingJobTemplate**](#retrievereportmailingjobtemplate) | **GET** /v1/reportmailingjobs/template | Retrieve Report Mailing Job Details Template|
|[**updateReportMailingJob**](#updatereportmailingjob) | **PUT** /v1/reportmailingjobs/{entityId} | Update a Report Mailing Job |

# **createReportMailingJob**
> PostReportMailingJobsResponse createReportMailingJob(postReportMailingJobsRequest)

Mandatory Fields: name, startDateTime, stretchyReportId, emailRecipients, emailSubject, emailMessage, emailAttachmentFileFormatId, recurrence, isActive  Optional Fields: description, stretchyReportParamMap

### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration,
    PostReportMailingJobsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

let postReportMailingJobsRequest: PostReportMailingJobsRequest; //

const { status, data } = await apiInstance.createReportMailingJob(
    postReportMailingJobsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postReportMailingJobsRequest** | **PostReportMailingJobsRequest**|  | |


### Return type

**PostReportMailingJobsResponse**

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

# **deleteReportMailingJob**
> DeleteReportMailingJobsResponse deleteReportMailingJob()


### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

let entityId: number; //entityId (default to undefined)

const { status, data } = await apiInstance.deleteReportMailingJob(
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**number**] | entityId | defaults to undefined|


### Return type

**DeleteReportMailingJobsResponse**

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

# **retrieveAllReportMailingJobs**
> Array<GetReportMailingJobsResponse> retrieveAllReportMailingJobs()

Example Requests:  reportmailingjobs

### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllReportMailingJobs(
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**Array<GetReportMailingJobsResponse>**

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

# **retrieveReportMailingJob**
> GetReportMailingJobsResponse retrieveReportMailingJob()

Example Requests:  reportmailingjobs/1   reportmailingjobs/1?template=true

### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

let entityId: number; //entityId (default to undefined)

const { status, data } = await apiInstance.retrieveReportMailingJob(
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityId** | [**number**] | entityId | defaults to undefined|


### Return type

**GetReportMailingJobsResponse**

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

# **retrieveReportMailingJobTemplate**
> GetReportMailingJobsTemplate retrieveReportMailingJobTemplate()

This is a convenience resource. It can be useful when building maintenance user interface screens for report mailing job applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  reportmailingjobs/template

### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

const { status, data } = await apiInstance.retrieveReportMailingJobTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetReportMailingJobsTemplate**

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

# **updateReportMailingJob**
> PutReportMailingJobsResponse updateReportMailingJob(putReportMailingJobsRequest)


### Example

```typescript
import {
    ReportMailingJobsApi,
    Configuration,
    PutReportMailingJobsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ReportMailingJobsApi(configuration);

let entityId: number; //entityId (default to undefined)
let putReportMailingJobsRequest: PutReportMailingJobsRequest; //

const { status, data } = await apiInstance.updateReportMailingJob(
    entityId,
    putReportMailingJobsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putReportMailingJobsRequest** | **PutReportMailingJobsRequest**|  | |
| **entityId** | [**number**] | entityId | defaults to undefined|


### Return type

**PutReportMailingJobsResponse**

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

