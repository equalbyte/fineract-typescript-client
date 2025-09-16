# CodeValuesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCodeValue**](#createcodevalue) | **POST** /v1/codes/{codeId}/codevalues | Create a Code description|
|[**deleteCodeValue**](#deletecodevalue) | **DELETE** /v1/codes/{codeId}/codevalues/{codeValueId} | Delete a Code description|
|[**retrieveAllCodeValues**](#retrieveallcodevalues) | **GET** /v1/codes/{codeId}/codevalues | List Code Values|
|[**retrieveCodeValue**](#retrievecodevalue) | **GET** /v1/codes/{codeId}/codevalues/{codeValueId} | Retrieve a Code description|
|[**updateCodeValue**](#updatecodevalue) | **PUT** /v1/codes/{codeId}/codevalues/{codeValueId} | Update a Code description|

# **createCodeValue**
> PostCodeValueDataResponse createCodeValue(postCodeValuesDataRequest)


### Example

```typescript
import {
    CodeValuesApi,
    Configuration,
    PostCodeValuesDataRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodeValuesApi(configuration);

let codeId: number; //codeId (default to undefined)
let postCodeValuesDataRequest: PostCodeValuesDataRequest; //

const { status, data } = await apiInstance.createCodeValue(
    codeId,
    postCodeValuesDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postCodeValuesDataRequest** | **PostCodeValuesDataRequest**|  | |
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**PostCodeValueDataResponse**

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

# **deleteCodeValue**
> DeleteCodeValueDataResponse deleteCodeValue()

Deletes a code description

### Example

```typescript
import {
    CodeValuesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodeValuesApi(configuration);

let codeId: number; //codeId (default to undefined)
let codeValueId: number; //codeValueId (default to undefined)

const { status, data } = await apiInstance.deleteCodeValue(
    codeId,
    codeValueId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeId** | [**number**] | codeId | defaults to undefined|
| **codeValueId** | [**number**] | codeValueId | defaults to undefined|


### Return type

**DeleteCodeValueDataResponse**

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

# **retrieveAllCodeValues**
> Array<GetCodeValuesDataResponse> retrieveAllCodeValues()

Returns the list of Code Values for a given Code  Example Requests:  codes/1/codevalues

### Example

```typescript
import {
    CodeValuesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodeValuesApi(configuration);

let codeId: number; //codeId (default to undefined)

const { status, data } = await apiInstance.retrieveAllCodeValues(
    codeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**Array<GetCodeValuesDataResponse>**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A List of code values for a given code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveCodeValue**
> GetCodeValuesDataResponse retrieveCodeValue()

Returns the details of a Code Value  Example Requests:  codes/1/codevalues/1

### Example

```typescript
import {
    CodeValuesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodeValuesApi(configuration);

let codeValueId: number; //codeValueId (default to undefined)
let codeId: number; //codeId (default to undefined)

const { status, data } = await apiInstance.retrieveCodeValue(
    codeValueId,
    codeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **codeValueId** | [**number**] | codeValueId | defaults to undefined|
| **codeId** | [**number**] | codeId | defaults to undefined|


### Return type

**GetCodeValuesDataResponse**

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

# **updateCodeValue**
> PutCodeValueDataResponse updateCodeValue(putCodeValuesDataRequest)

Updates the details of a code description.

### Example

```typescript
import {
    CodeValuesApi,
    Configuration,
    PutCodeValuesDataRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CodeValuesApi(configuration);

let codeId: number; //codeId (default to undefined)
let codeValueId: number; //codeValueId (default to undefined)
let putCodeValuesDataRequest: PutCodeValuesDataRequest; //

const { status, data } = await apiInstance.updateCodeValue(
    codeId,
    codeValueId,
    putCodeValuesDataRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putCodeValuesDataRequest** | **PutCodeValuesDataRequest**|  | |
| **codeId** | [**number**] | codeId | defaults to undefined|
| **codeValueId** | [**number**] | codeValueId | defaults to undefined|


### Return type

**PutCodeValueDataResponse**

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

