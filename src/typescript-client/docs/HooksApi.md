# HooksApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createHook**](#createhook) | **POST** /v1/hooks | Create a Hook|
|[**deleteHook**](#deletehook) | **DELETE** /v1/hooks/{hookId} | Delete a Hook|
|[**retrieveHook**](#retrievehook) | **GET** /v1/hooks/{hookId} | Retrieve a Hook|
|[**retrieveHooks**](#retrievehooks) | **GET** /v1/hooks | Retrieve Hooks|
|[**template3**](#template3) | **GET** /v1/hooks/template | Retrieve Hooks Template|
|[**updateHook**](#updatehook) | **PUT** /v1/hooks/{hookId} | Update a Hook|

# **createHook**
> PostHookResponse createHook(postHookRequest)

The following parameters can be passed for the creation of a hook :-  name - string - Required. The name of the template that is being called. (See /hooks/template for the list of valid hook names.)  isActive - boolean - Determines whether the hook is actually triggered.  events - array - Determines what events the hook is triggered for.  config - hash - Required. Key/value pairs to provide settings for this hook. These settings vary between the templates.  templateId - Optional. The UGD template ID associated with the same entity (client or loan).

### Example

```typescript
import {
    HooksApi,
    Configuration,
    PostHookRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

let postHookRequest: PostHookRequest; //

const { status, data } = await apiInstance.createHook(
    postHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postHookRequest** | **PostHookRequest**|  | |


### Return type

**PostHookResponse**

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

# **deleteHook**
> DeleteHookResponse deleteHook()

Deletes a hook.

### Example

```typescript
import {
    HooksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

let hookId: number; //hookId (default to undefined)

const { status, data } = await apiInstance.deleteHook(
    hookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hookId** | [**number**] | hookId | defaults to undefined|


### Return type

**DeleteHookResponse**

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

# **retrieveHook**
> GetHookResponse retrieveHook()

Returns the details of a Hook.  Example Requests:  hooks/1

### Example

```typescript
import {
    HooksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

let hookId: number; //hookId (default to undefined)

const { status, data } = await apiInstance.retrieveHook(
    hookId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hookId** | [**number**] | hookId | defaults to undefined|


### Return type

**GetHookResponse**

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

# **retrieveHooks**
> Array<GetHookResponse> retrieveHooks()

Returns the list of hooks.  Example Requests:  hooks

### Example

```typescript
import {
    HooksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

const { status, data } = await apiInstance.retrieveHooks();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetHookResponse>**

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

# **template3**
> GetHookTemplateResponse template3()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  hooks/template

### Example

```typescript
import {
    HooksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

const { status, data } = await apiInstance.template3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetHookTemplateResponse**

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

# **updateHook**
> PutHookResponse updateHook(putHookRequest)

Updates the details of a hook.

### Example

```typescript
import {
    HooksApi,
    Configuration,
    PutHookRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new HooksApi(configuration);

let hookId: number; //hookId (default to undefined)
let putHookRequest: PutHookRequest; //

const { status, data } = await apiInstance.updateHook(
    hookId,
    putHookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putHookRequest** | **PutHookRequest**|  | |
| **hookId** | [**number**] | hookId | defaults to undefined|


### Return type

**PutHookResponse**

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

