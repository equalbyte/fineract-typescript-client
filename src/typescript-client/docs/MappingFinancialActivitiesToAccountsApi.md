# MappingFinancialActivitiesToAccountsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGLAccount**](#createglaccount) | **POST** /v1/financialactivityaccounts | Create a new Financial Activity to Accounts Mapping|
|[**deleteGLAccount**](#deleteglaccount) | **DELETE** /v1/financialactivityaccounts/{mappingId} | Delete a Financial Activity to Account Mapping|
|[**retreive**](#retreive) | **GET** /v1/financialactivityaccounts/{mappingId} | Retrieve a Financial Activity to Account Mapping |
|[**retrieveAll**](#retrieveall) | **GET** /v1/financialactivityaccounts | List Financial Activities to Accounts Mappings|
|[**retrieveTemplate**](#retrievetemplate) | **GET** /v1/financialactivityaccounts/template | |
|[**updateGLAccount**](#updateglaccount) | **PUT** /v1/financialactivityaccounts/{mappingId} | Update a Financial Activity to Account Mapping|

# **createGLAccount**
> PostFinancialActivityAccountsResponse createGLAccount()

Mandatory Fields financialActivityId, glAccountId

### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration,
    PostFinancialActivityAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

let postFinancialActivityAccountsRequest: PostFinancialActivityAccountsRequest; // (optional)

const { status, data } = await apiInstance.createGLAccount(
    postFinancialActivityAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postFinancialActivityAccountsRequest** | **PostFinancialActivityAccountsRequest**|  | |


### Return type

**PostFinancialActivityAccountsResponse**

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

# **deleteGLAccount**
> DeleteFinancialActivityAccountsResponse deleteGLAccount()


### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

let mappingId: number; //mappingId (default to undefined)

const { status, data } = await apiInstance.deleteGLAccount(
    mappingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mappingId** | [**number**] | mappingId | defaults to undefined|


### Return type

**DeleteFinancialActivityAccountsResponse**

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

# **retreive**
> GetFinancialActivityAccountsResponse retreive()

Example Requests: financialactivityaccounts/1

### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

let mappingId: number; //mappingId (default to undefined)

const { status, data } = await apiInstance.retreive(
    mappingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mappingId** | [**number**] | mappingId | defaults to undefined|


### Return type

**GetFinancialActivityAccountsResponse**

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

# **retrieveAll**
> Array<GetFinancialActivityAccountsResponse> retrieveAll()

Example Requests: financialactivityaccounts

### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

const { status, data } = await apiInstance.retrieveAll();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetFinancialActivityAccountsResponse>**

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

# **retrieveTemplate**
> FinancialActivityAccountData retrieveTemplate()


### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**FinancialActivityAccountData**

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

# **updateGLAccount**
> PutFinancialActivityAccountsResponse updateGLAccount()

the API updates the Ledger account linked to a Financial Activity

### Example

```typescript
import {
    MappingFinancialActivitiesToAccountsApi,
    Configuration,
    PostFinancialActivityAccountsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MappingFinancialActivitiesToAccountsApi(configuration);

let mappingId: number; //mappingId (default to undefined)
let postFinancialActivityAccountsRequest: PostFinancialActivityAccountsRequest; // (optional)

const { status, data } = await apiInstance.updateGLAccount(
    mappingId,
    postFinancialActivityAccountsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postFinancialActivityAccountsRequest** | **PostFinancialActivityAccountsRequest**|  | |
| **mappingId** | [**number**] | mappingId | defaults to undefined|


### Return type

**PutFinancialActivityAccountsResponse**

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

