# RescheduleLoansApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLoanRescheduleRequest**](#createloanreschedulerequest) | **POST** /v1/rescheduleloans | Create loan reschedule request|
|[**readLoanRescheduleRequest**](#readloanreschedulerequest) | **GET** /v1/rescheduleloans/{scheduleId} | Retrieve loan reschedule request by schedule id|
|[**retrieveAllRescheduleRequest**](#retrieveallreschedulerequest) | **GET** /v1/rescheduleloans | Retrieve all reschedule requests|
|[**retrieveTemplate10**](#retrievetemplate10) | **GET** /v1/rescheduleloans/template | Retrieve all reschedule loan reasons|
|[**updateLoanRescheduleRequest**](#updateloanreschedulerequest) | **POST** /v1/rescheduleloans/{scheduleId} | Update loan reschedule request|

# **createLoanRescheduleRequest**
> PostCreateRescheduleLoansResponse createLoanRescheduleRequest(postCreateRescheduleLoansRequest)

Create a loan reschedule request.

### Example

```typescript
import {
    RescheduleLoansApi,
    Configuration,
    PostCreateRescheduleLoansRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RescheduleLoansApi(configuration);

let postCreateRescheduleLoansRequest: PostCreateRescheduleLoansRequest; //

const { status, data } = await apiInstance.createLoanRescheduleRequest(
    postCreateRescheduleLoansRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCreateRescheduleLoansRequest** | **PostCreateRescheduleLoansRequest**|  | |


### Return type

**PostCreateRescheduleLoansResponse**

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

# **readLoanRescheduleRequest**
> GetLoanRescheduleRequestResponse readLoanRescheduleRequest()

Retrieve loan reschedule request by schedule id

### Example

```typescript
import {
    RescheduleLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RescheduleLoansApi(configuration);

let scheduleId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.readLoanRescheduleRequest(
    scheduleId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **scheduleId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetLoanRescheduleRequestResponse**

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

# **retrieveAllRescheduleRequest**
> Array<GetLoanRescheduleRequestResponse> retrieveAllRescheduleRequest()

Retrieve all reschedule requests.

### Example

```typescript
import {
    RescheduleLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RescheduleLoansApi(configuration);

let command: string; // (optional) (default to undefined)
let loanId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllRescheduleRequest(
    command,
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **command** | [**string**] |  | (optional) defaults to undefined|
| **loanId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<GetLoanRescheduleRequestResponse>**

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

# **retrieveTemplate10**
> GetRescheduleReasonsTemplateResponse retrieveTemplate10()

Retrieve all reschedule loan reasons as a template

### Example

```typescript
import {
    RescheduleLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RescheduleLoansApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate10();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetRescheduleReasonsTemplateResponse**

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

# **updateLoanRescheduleRequest**
> PostUpdateRescheduleLoansResponse updateLoanRescheduleRequest(postUpdateRescheduleLoansRequest)

Update a loan reschedule request by either approving/rejecting it.

### Example

```typescript
import {
    RescheduleLoansApi,
    Configuration,
    PostUpdateRescheduleLoansRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RescheduleLoansApi(configuration);

let scheduleId: number; // (default to undefined)
let postUpdateRescheduleLoansRequest: PostUpdateRescheduleLoansRequest; //
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.updateLoanRescheduleRequest(
    scheduleId,
    postUpdateRescheduleLoansRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postUpdateRescheduleLoansRequest** | **PostUpdateRescheduleLoansRequest**|  | |
| **scheduleId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PostUpdateRescheduleLoansResponse**

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

