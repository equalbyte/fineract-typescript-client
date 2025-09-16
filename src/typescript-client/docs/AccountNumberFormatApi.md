# AccountNumberFormatApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /v1/accountnumberformats/{accountNumberFormatId} | Delete an Account number format|
|[**create**](#create) | **POST** /v1/accountnumberformats | Create an Account number format|
|[**retrieveAll3**](#retrieveall3) | **GET** /v1/accountnumberformats | List Account number formats|
|[**retrieveOne**](#retrieveone) | **GET** /v1/accountnumberformats/{accountNumberFormatId} | Retrieve an Account number format|
|[**retrieveTemplate2**](#retrievetemplate2) | **GET** /v1/accountnumberformats/template | Retrieve Account number format Template|
|[**update1**](#update1) | **PUT** /v1/accountnumberformats/{accountNumberFormatId} | Update an Account number format|

# **_delete**
> DeleteAccountNumberFormatsResponse _delete()

Note: Account numbers created while this format was active would remain unchanged.

### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

let accountNumberFormatId: number; //accountNumberFormatId (default to undefined)

const { status, data } = await apiInstance._delete(
    accountNumberFormatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNumberFormatId** | [**number**] | accountNumberFormatId | defaults to undefined|


### Return type

**DeleteAccountNumberFormatsResponse**

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

# **create**
> PostAccountNumberFormatsResponse create()

Note: You may associate a single Account number format for a given account type Mandatory Fields for Account number formats accountType

### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration,
    PostAccountNumberFormatsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

let postAccountNumberFormatsRequest: PostAccountNumberFormatsRequest; // (optional)

const { status, data } = await apiInstance.create(
    postAccountNumberFormatsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAccountNumberFormatsRequest** | **PostAccountNumberFormatsRequest**|  | |


### Return type

**PostAccountNumberFormatsResponse**

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

# **retrieveAll3**
> Array<GetAccountNumberFormatsIdResponse> retrieveAll3()

Example Requests:  accountnumberformats   accountnumberformats?fields=accountType,prefixType

### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

const { status, data } = await apiInstance.retrieveAll3();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetAccountNumberFormatsIdResponse>**

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

# **retrieveOne**
> GetAccountNumberFormatsIdResponse retrieveOne()

Example Requests:  accountnumberformats/1   accountnumberformats/1?template=true   accountnumberformats/1?fields=accountType,prefixType

### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

let accountNumberFormatId: number; //accountNumberFormatId (default to undefined)

const { status, data } = await apiInstance.retrieveOne(
    accountNumberFormatId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNumberFormatId** | [**number**] | accountNumberFormatId | defaults to undefined|


### Return type

**GetAccountNumberFormatsIdResponse**

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

# **retrieveTemplate2**
> GetAccountNumberFormatsResponseTemplate retrieveTemplate2()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists  Example Request:  accountnumberformats/template

### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAccountNumberFormatsResponseTemplate**

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

# **update1**
> PutAccountNumberFormatsResponse update1(putAccountNumberFormatsRequest)


### Example

```typescript
import {
    AccountNumberFormatApi,
    Configuration,
    PutAccountNumberFormatsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountNumberFormatApi(configuration);

let accountNumberFormatId: number; //accountNumberFormatId (default to undefined)
let putAccountNumberFormatsRequest: PutAccountNumberFormatsRequest; //

const { status, data } = await apiInstance.update1(
    accountNumberFormatId,
    putAccountNumberFormatsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putAccountNumberFormatsRequest** | **PutAccountNumberFormatsRequest**|  | |
| **accountNumberFormatId** | [**number**] | accountNumberFormatId | defaults to undefined|


### Return type

**PutAccountNumberFormatsResponse**

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

