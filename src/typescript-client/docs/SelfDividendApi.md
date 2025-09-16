# SelfDividendApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createDividendDetail**](#createdividenddetail) | **POST** /v1/shareproduct/{productId}/dividend | |
|[**deleteDividendDetail**](#deletedividenddetail) | **DELETE** /v1/shareproduct/{productId}/dividend/{dividendId} | |
|[**retrieveAll39**](#retrieveall39) | **GET** /v1/shareproduct/{productId}/dividend | |
|[**retrieveDividendDetails**](#retrievedividenddetails) | **GET** /v1/shareproduct/{productId}/dividend/{dividendId} | |
|[**updateDividendDetail**](#updatedividenddetail) | **PUT** /v1/shareproduct/{productId}/dividend/{dividendId} | |

# **createDividendDetail**
> string createDividendDetail()


### Example

```typescript
import {
    SelfDividendApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfDividendApi(configuration);

let productId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.createDividendDetail(
    productId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **productId** | [**number**] |  | defaults to undefined|


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

# **deleteDividendDetail**
> string deleteDividendDetail()


### Example

```typescript
import {
    SelfDividendApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfDividendApi(configuration);

let productId: number; // (default to undefined)
let dividendId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteDividendDetail(
    productId,
    dividendId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] |  | defaults to undefined|
| **dividendId** | [**number**] |  | defaults to undefined|


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

# **retrieveAll39**
> string retrieveAll39()


### Example

```typescript
import {
    SelfDividendApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfDividendApi(configuration);

let productId: number; // (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)
let status: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll39(
    productId,
    offset,
    limit,
    orderBy,
    sortOrder,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**number**] |  | (optional) defaults to undefined|


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

# **retrieveDividendDetails**
> string retrieveDividendDetails()


### Example

```typescript
import {
    SelfDividendApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfDividendApi(configuration);

let dividendId: number; // (default to undefined)
let productId: number; // (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)
let accountNo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveDividendDetails(
    dividendId,
    productId,
    offset,
    limit,
    orderBy,
    sortOrder,
    accountNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dividendId** | [**number**] |  | defaults to undefined|
| **productId** | [**number**] |  | defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|
| **accountNo** | [**string**] |  | (optional) defaults to undefined|


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

# **updateDividendDetail**
> string updateDividendDetail()


### Example

```typescript
import {
    SelfDividendApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfDividendApi(configuration);

let productId: number; // (default to undefined)
let dividendId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateDividendDetail(
    productId,
    dividendId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **productId** | [**number**] |  | defaults to undefined|
| **dividendId** | [**number**] |  | defaults to undefined|
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

