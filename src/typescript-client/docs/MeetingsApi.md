# MeetingsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMeeting**](#createmeeting) | **POST** /v1/{entityType}/{entityId}/meetings | |
|[**deleteMeeting**](#deletemeeting) | **DELETE** /v1/{entityType}/{entityId}/meetings/{meetingId} | |
|[**performMeetingCommands**](#performmeetingcommands) | **POST** /v1/{entityType}/{entityId}/meetings/{meetingId} | |
|[**retrieveMeeting**](#retrievemeeting) | **GET** /v1/{entityType}/{entityId}/meetings/{meetingId} | |
|[**retrieveMeetings**](#retrievemeetings) | **GET** /v1/{entityType}/{entityId}/meetings | |
|[**template11**](#template11) | **GET** /v1/{entityType}/{entityId}/meetings/template | |
|[**updateMeeting**](#updatemeeting) | **PUT** /v1/{entityType}/{entityId}/meetings/{meetingId} | |

# **createMeeting**
> string createMeeting()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.createMeeting(
    entityType,
    entityId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

# **deleteMeeting**
> string deleteMeeting()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let meetingId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteMeeting(
    entityType,
    entityId,
    meetingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **meetingId** | [**number**] |  | defaults to undefined|


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

# **performMeetingCommands**
> string performMeetingCommands()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let meetingId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.performMeetingCommands(
    entityType,
    entityId,
    meetingId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **meetingId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


### Return type

**string**

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

# **retrieveMeeting**
> string retrieveMeeting()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let meetingId: number; // (default to undefined)
let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveMeeting(
    meetingId,
    entityType,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **meetingId** | [**number**] |  | defaults to undefined|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


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

# **retrieveMeetings**
> string retrieveMeetings()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let limit: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveMeetings(
    entityType,
    entityId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|


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

# **template11**
> string template11()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let calendarId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.template11(
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
| **calendarId** | [**number**] |  | (optional) defaults to undefined|


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

# **updateMeeting**
> string updateMeeting()


### Example

```typescript
import {
    MeetingsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MeetingsApi(configuration);

let entityType: string; // (default to undefined)
let entityId: number; // (default to undefined)
let meetingId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateMeeting(
    entityType,
    entityId,
    meetingId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **entityType** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **meetingId** | [**number**] |  | defaults to undefined|


### Return type

**string**

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

