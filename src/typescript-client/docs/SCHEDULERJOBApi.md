# SCHEDULERJOBApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeJob**](#executejob) | **POST** /v1/jobs/{jobId} | Run a Job|
|[**executeJobByShortName**](#executejobbyshortname) | **POST** /v1/jobs/short-name/{shortName} | Run a Job|
|[**retrieveAll8**](#retrieveall8) | **GET** /v1/jobs | Retrieve Scheduler Jobs|
|[**retrieveByShortName**](#retrievebyshortname) | **GET** /v1/jobs/short-name/{shortName} | Retrieve a Job|
|[**retrieveHistory**](#retrievehistory) | **GET** /v1/jobs/{jobId}/runhistory | Retrieve Job Run History|
|[**retrieveHistoryByShortName**](#retrievehistorybyshortname) | **GET** /v1/jobs/short-name/{shortName}/runhistory | Retrieve Job Run History|
|[**retrieveOne5**](#retrieveone5) | **GET** /v1/jobs/{jobId} | Retrieve a Job|
|[**updateJobDetail**](#updatejobdetail) | **PUT** /v1/jobs/{jobId} | Update a Job|
|[**updateJobDetailByShortName**](#updatejobdetailbyshortname) | **PUT** /v1/jobs/short-name/{shortName} | Update a Job|

# **executeJob**
> executeJob()

Manually Execute Specific Job.

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration,
    ExecuteJobRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let jobId: number; //jobId (default to undefined)
let command: string; //command (optional) (default to undefined)
let executeJobRequest: ExecuteJobRequest; // (optional)

const { status, data } = await apiInstance.executeJob(
    jobId,
    command,
    executeJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executeJobRequest** | **ExecuteJobRequest**|  | |
| **jobId** | [**number**] | jobId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | POST: jobs/1?command&#x3D;executeJob |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **executeJobByShortName**
> executeJobByShortName()

Manually Execute Specific Job.

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration,
    ExecuteJobRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let shortName: string; //short-name (default to undefined)
let command: string; //command (optional) (default to undefined)
let executeJobRequest: ExecuteJobRequest; // (optional)

const { status, data } = await apiInstance.executeJobByShortName(
    shortName,
    command,
    executeJobRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **executeJobRequest** | **ExecuteJobRequest**|  | |
| **shortName** | [**string**] | short-name | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | POST: jobs/short-name/SA_PINT?command&#x3D;executeJob |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAll8**
> Array<GetJobsResponse> retrieveAll8()

Returns the list of jobs.  Example Requests:  jobs

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

const { status, data } = await apiInstance.retrieveAll8();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetJobsResponse>**

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

# **retrieveByShortName**
> GetJobsResponse retrieveByShortName()

Returns the details of a Job bu shortName.  Example Requests:  jobs/short-name/SA_PINT

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let shortName: string; //short-name (default to undefined)

const { status, data } = await apiInstance.retrieveByShortName(
    shortName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shortName** | [**string**] | short-name | defaults to undefined|


### Return type

**GetJobsResponse**

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

# **retrieveHistory**
> GetJobsJobIDJobRunHistoryResponse retrieveHistory()

Example Requests:  jobs/5/runhistory?offset=0&limit=200

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let jobId: number; //jobId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveHistory(
    jobId,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobId** | [**number**] | jobId | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**GetJobsJobIDJobRunHistoryResponse**

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

# **retrieveHistoryByShortName**
> GetJobsJobIDJobRunHistoryResponse retrieveHistoryByShortName()

Example Requests:  jobs/short-name/SA_PINT/runhistory?offset=0&limit=200

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let shortName: string; //short-name (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveHistoryByShortName(
    shortName,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shortName** | [**string**] | short-name | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**GetJobsJobIDJobRunHistoryResponse**

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

# **retrieveOne5**
> GetJobsResponse retrieveOne5()

Returns the details of a Job.  Example Requests:  jobs/5

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let jobId: number; //jobId (default to undefined)

const { status, data } = await apiInstance.retrieveOne5(
    jobId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **jobId** | [**number**] | jobId | defaults to undefined|


### Return type

**GetJobsResponse**

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

# **updateJobDetail**
> updateJobDetail(putJobsJobIDRequest)

Updates the details of a job.

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration,
    PutJobsJobIDRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let jobId: number; //jobId (default to undefined)
let putJobsJobIDRequest: PutJobsJobIDRequest; //

const { status, data } = await apiInstance.updateJobDetail(
    jobId,
    putJobsJobIDRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putJobsJobIDRequest** | **PutJobsJobIDRequest**|  | |
| **jobId** | [**number**] | jobId | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateJobDetailByShortName**
> updateJobDetailByShortName(putJobsJobIDRequest)

Updates the details of a job.

### Example

```typescript
import {
    SCHEDULERJOBApi,
    Configuration,
    PutJobsJobIDRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SCHEDULERJOBApi(configuration);

let shortName: string; //short-name (default to undefined)
let putJobsJobIDRequest: PutJobsJobIDRequest; //

const { status, data } = await apiInstance.updateJobDetailByShortName(
    shortName,
    putJobsJobIDRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putJobsJobIDRequest** | **PutJobsJobIDRequest**|  | |
| **shortName** | [**string**] | short-name | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

