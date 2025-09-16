# LikelihoodApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieve**](#retrieve) | **GET** /v1/likelihood/{ppiName}/{likelihoodId} | |
|[**retrieveAll11**](#retrieveall11) | **GET** /v1/likelihood/{ppiName} | |
|[**update4**](#update4) | **PUT** /v1/likelihood/{ppiName}/{likelihoodId} | |

# **retrieve**
> string retrieve()


### Example

```typescript
import {
    LikelihoodApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LikelihoodApi(configuration);

let likelihoodId: number; // (default to undefined)
let ppiName: string; // (default to undefined)

const { status, data } = await apiInstance.retrieve(
    likelihoodId,
    ppiName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **likelihoodId** | [**number**] |  | defaults to undefined|
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

# **retrieveAll11**
> string retrieveAll11()


### Example

```typescript
import {
    LikelihoodApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LikelihoodApi(configuration);

let ppiName: string; // (default to undefined)

const { status, data } = await apiInstance.retrieveAll11(
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

# **update4**
> string update4()


### Example

```typescript
import {
    LikelihoodApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LikelihoodApi(configuration);

let likelihoodId: number; // (default to undefined)
let ppiName: string; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.update4(
    likelihoodId,
    ppiName,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **likelihoodId** | [**number**] |  | defaults to undefined|
| **ppiName** | [**string**] |  | defaults to undefined|


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

