# PovertyLineApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll12**](#retrieveall12) | **GET** /v1/povertyLine/{ppiName} | |
|[**retrieveAll13**](#retrieveall13) | **GET** /v1/povertyLine/{ppiName}/{likelihoodId} | |

# **retrieveAll12**
> string retrieveAll12()


### Example

```typescript
import {
    PovertyLineApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PovertyLineApi(configuration);

let ppiName: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveAll12(
    ppiName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ppiName** | [**string**] |  | defaults to undefined|


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

# **retrieveAll13**
> string retrieveAll13()


### Example

```typescript
import {
    PovertyLineApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PovertyLineApi(configuration);

let ppiName: string; // (default to undefined)
let likelihoodId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveAll13(
    ppiName,
    likelihoodId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ppiName** | [**string**] |  | defaults to undefined|
| **likelihoodId** | [**number**] |  | defaults to undefined|


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

