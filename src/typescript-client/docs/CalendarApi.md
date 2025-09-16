# CalendarApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCalendar**](#createcalendar) | **POST** /v1/{entityType}/{entityId}/calendars | |
|[**deleteCalendar**](#deletecalendar) | **DELETE** /v1/{entityType}/{entityId}/calendars/{calendarId} | |
|[**retrieveCalendar**](#retrievecalendar) | **GET** /v1/{entityType}/{entityId}/calendars/{calendarId} | |
|[**retrieveCalendarsByEntity**](#retrievecalendarsbyentity) | **GET** /v1/{entityType}/{entityId}/calendars | |
|[**retrieveNewCalendarDetails**](#retrievenewcalendardetails) | **GET** /v1/{entityType}/{entityId}/calendars/template | |
|[**updateCalendar**](#updatecalendar) | **PUT** /v1/{entityType}/{entityId}/calendars/{calendarId} | |

# **createCalendar**
> CommandProcessingResult createCalendar()


### Example

```typescript
import {
    CalendarApi,
    Configuration,
    CalendarRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let calendarRequest: CalendarRequest; // (optional)

const { status, data } = await apiInstance.createCalendar(
    entityType,
    entityId,
    calendarRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calendarRequest** | **CalendarRequest**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCalendar**
> CommandProcessingResult deleteCalendar()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let calendarId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteCalendar(
    entityType,
    entityId,
    calendarId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **calendarId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **retrieveCalendar**
> CalendarData retrieveCalendar()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let calendarId: number; // (default to undefined)
let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveCalendar(
    calendarId,
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **calendarId** | [**number**] |  | defaults to undefined|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


### Return type

**CalendarData**

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

# **retrieveCalendarsByEntity**
> Array<CalendarData> retrieveCalendarsByEntity()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let calendarType: string; // (optional) (default to 'all')

const { status, data } = await apiInstance.retrieveCalendarsByEntity(
    entityType,
    entityId,
    calendarType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **calendarType** | [**string**] |  | (optional) defaults to 'all'|


### Return type

**Array<CalendarData>**

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

# **retrieveNewCalendarDetails**
> CalendarData retrieveNewCalendarDetails()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveNewCalendarDetails(
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


### Return type

**CalendarData**

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

# **updateCalendar**
> CommandProcessingResult updateCalendar()


### Example

```typescript
import {
    CalendarApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CalendarApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let calendarId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateCalendar(
    entityType,
    entityId,
    calendarId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **calendarId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

