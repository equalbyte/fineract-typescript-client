# InstanceModeApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**changeMode**](#changemode) | **PUT** /v1/instance-mode | Changes the Fineract instance mode|

# **changeMode**
> changeMode(changeInstanceModeRequest)


### Example

```typescript
import {
    InstanceModeApi,
    Configuration,
    ChangeInstanceModeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new InstanceModeApi(configuration);

let changeInstanceModeRequest: ChangeInstanceModeRequest; //

const { status, data } = await apiInstance.changeMode(
    changeInstanceModeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeInstanceModeRequest** | **ChangeInstanceModeRequest**|  | |


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

