# HolidaysApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createNewHoliday**](#createnewholiday) | **POST** /v1/holidays | Create a Holiday|
|[**delete6**](#delete6) | **DELETE** /v1/holidays/{holidayId} | Delete a Holiday|
|[**handleCommands1**](#handlecommands1) | **POST** /v1/holidays/{holidayId} | Activate a Holiday|
|[**retrieveAllHolidays**](#retrieveallholidays) | **GET** /v1/holidays | List Holidays|
|[**retrieveOne7**](#retrieveone7) | **GET** /v1/holidays/{holidayId} | Retrieve a Holiday|
|[**retrieveRepaymentScheduleUpdationTyeOptions**](#retrieverepaymentscheduleupdationtyeoptions) | **GET** /v1/holidays/template | |
|[**update6**](#update6) | **PUT** /v1/holidays/{holidayId} | Update a Holiday|

# **createNewHoliday**
> PostHolidaysResponse createNewHoliday(postHolidaysRequest)

Mandatory Fields: name, description, fromDate, toDate, repaymentsRescheduledTo, offices

### Example

```typescript
import {
    HolidaysApi,
    Configuration,
    PostHolidaysRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let postHolidaysRequest: PostHolidaysRequest; //

const { status, data } = await apiInstance.createNewHoliday(
    postHolidaysRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postHolidaysRequest** | **PostHolidaysRequest**|  | |


### Return type

**PostHolidaysResponse**

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

# **delete6**
> DeleteHolidaysHolidayIdResponse delete6()

This API allows to delete a holiday. This is a soft delete the deleted holiday status is marked as deleted.

### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let holidayId: number; //holidayId (default to undefined)

const { status, data } = await apiInstance.delete6(
    holidayId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holidayId** | [**number**] | holidayId | defaults to undefined|


### Return type

**DeleteHolidaysHolidayIdResponse**

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

# **handleCommands1**
> PostHolidaysHolidayIdResponse handleCommands1(body)

Always Holidays are created in pending state. This API allows to activate a holiday.  Only the active holidays are considered for rescheduling the loan repayment.

### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let holidayId: number; //holidayId (default to undefined)
let body: object; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands1(
    holidayId,
    body,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **holidayId** | [**number**] | holidayId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostHolidaysHolidayIdResponse**

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

# **retrieveAllHolidays**
> Array<GetHolidaysResponse> retrieveAllHolidays()

Example Requests:  holidays?officeId=1

### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let fromDate: object; //fromDate (optional) (default to undefined)
let toDate: object; //toDate (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllHolidays(
    officeId,
    fromDate,
    toDate,
    locale,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **fromDate** | **object** | fromDate | (optional) defaults to undefined|
| **toDate** | **object** | toDate | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|


### Return type

**Array<GetHolidaysResponse>**

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

# **retrieveOne7**
> GetHolidaysResponse retrieveOne7()

Example Requests:  holidays/1

### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let holidayId: number; //holidayId (default to undefined)

const { status, data } = await apiInstance.retrieveOne7(
    holidayId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **holidayId** | [**number**] | holidayId | defaults to undefined|


### Return type

**GetHolidaysResponse**

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

# **retrieveRepaymentScheduleUpdationTyeOptions**
> string retrieveRepaymentScheduleUpdationTyeOptions()


### Example

```typescript
import {
    HolidaysApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

const { status, data } = await apiInstance.retrieveRepaymentScheduleUpdationTyeOptions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

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

# **update6**
> PutHolidaysHolidayIdResponse update6(putHolidaysHolidayIdRequest)

If a holiday is in pending state (created and not activated) then all fields are allowed to modify. Once holidays become active only name and descriptions are allowed to modify.

### Example

```typescript
import {
    HolidaysApi,
    Configuration,
    PutHolidaysHolidayIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HolidaysApi(configuration);

let holidayId: number; //holidayId (default to undefined)
let putHolidaysHolidayIdRequest: PutHolidaysHolidayIdRequest; //

const { status, data } = await apiInstance.update6(
    holidayId,
    putHolidaysHolidayIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putHolidaysHolidayIdRequest** | **PutHolidaysHolidayIdRequest**|  | |
| **holidayId** | [**number**] | holidayId | defaults to undefined|


### Return type

**PutHolidaysHolidayIdResponse**

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

