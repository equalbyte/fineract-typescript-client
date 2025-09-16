# SMSApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create2**](#create2) | **POST** /v1/sms | |
|[**delete5**](#delete5) | **DELETE** /v1/sms/{resourceId} | |
|[**retrieveAll10**](#retrieveall10) | **GET** /v1/sms | |
|[**retrieveAllSmsByStatus**](#retrieveallsmsbystatus) | **GET** /v1/sms/{campaignId}/messageByStatus | |
|[**retrieveOne6**](#retrieveone6) | **GET** /v1/sms/{resourceId} | |
|[**update3**](#update3) | **PUT** /v1/sms/{resourceId} | |

# **create2**
> CommandProcessingResult create2()


### Example

```typescript
import {
    SMSApi,
    Configuration,
    SmsCreationRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

let smsCreationRequest: SmsCreationRequest; // (optional)

const { status, data } = await apiInstance.create2(
    smsCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsCreationRequest** | **SmsCreationRequest**|  | |


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

# **delete5**
> CommandProcessingResult delete5()


### Example

```typescript
import {
    SMSApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.delete5(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **retrieveAll10**
> Array<SmsData> retrieveAll10()


### Example

```typescript
import {
    SMSApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

const { status, data } = await apiInstance.retrieveAll10();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<SmsData>**

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

# **retrieveAllSmsByStatus**
> PageSmsData retrieveAllSmsByStatus()


### Example

```typescript
import {
    SMSApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

let campaignId: number; // (default to undefined)
let status: number; // (optional) (default to undefined)
let fromDate: object; // (optional) (default to undefined)
let toDate: object; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllSmsByStatus(
    campaignId,
    status,
    fromDate,
    toDate,
    locale,
    dateFormat,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] |  | defaults to undefined|
| **status** | [**number**] |  | (optional) defaults to undefined|
| **fromDate** | **object** |  | (optional) defaults to undefined|
| **toDate** | **object** |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PageSmsData**

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

# **retrieveOne6**
> SmsData retrieveOne6()


### Example

```typescript
import {
    SMSApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOne6(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


### Return type

**SmsData**

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

# **update3**
> CommandProcessingResult update3()


### Example

```typescript
import {
    SMSApi,
    Configuration,
    SmsUpdateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SMSApi(configuration);

let resourceId: number; // (default to undefined)
let smsUpdateRequest: SmsUpdateRequest; // (optional)

const { status, data } = await apiInstance.update3(
    resourceId,
    smsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsUpdateRequest** | **SmsUpdateRequest**|  | |
| **resourceId** | [**number**] |  | defaults to undefined|


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

