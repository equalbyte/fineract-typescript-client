# ClientFamilyMemberApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addClientFamilyMembers**](#addclientfamilymembers) | **POST** /v1/clients/{clientId}/familymembers | |
|[**deleteClientFamilyMembers**](#deleteclientfamilymembers) | **DELETE** /v1/clients/{clientId}/familymembers/{familyMemberId} | |
|[**getFamilyMember**](#getfamilymember) | **GET** /v1/clients/{clientId}/familymembers/{familyMemberId} | |
|[**getFamilyMembers**](#getfamilymembers) | **GET** /v1/clients/{clientId}/familymembers | |
|[**getTemplate2**](#gettemplate2) | **GET** /v1/clients/{clientId}/familymembers/template | |
|[**updateClientFamilyMembers**](#updateclientfamilymembers) | **PUT** /v1/clients/{clientId}/familymembers/{familyMemberId} | |

# **addClientFamilyMembers**
> CommandProcessingResult addClientFamilyMembers()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration,
    ClientFamilyMemberRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let clientId: number; // (default to undefined)
let clientFamilyMemberRequest: ClientFamilyMemberRequest; // (optional)

const { status, data } = await apiInstance.addClientFamilyMembers(
    clientId,
    clientFamilyMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientFamilyMemberRequest** | **ClientFamilyMemberRequest**|  | |
| **clientId** | [**number**] |  | defaults to undefined|


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

# **deleteClientFamilyMembers**
> CommandProcessingResult deleteClientFamilyMembers()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let familyMemberId: number; // (default to undefined)
let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.deleteClientFamilyMembers(
    familyMemberId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **familyMemberId** | [**number**] |  | defaults to undefined|
| **clientId** | [**number**] | clientId | defaults to undefined|


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

# **getFamilyMember**
> ClientFamilyMembersData getFamilyMember()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let familyMemberId: number; // (default to undefined)
let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.getFamilyMember(
    familyMemberId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **familyMemberId** | [**number**] |  | defaults to undefined|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**ClientFamilyMembersData**

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

# **getFamilyMembers**
> Array<ClientFamilyMembersData> getFamilyMembers()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.getFamilyMembers(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**Array<ClientFamilyMembersData>**

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

# **getTemplate2**
> ClientFamilyMembersData getTemplate2()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.getTemplate2(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


### Return type

**ClientFamilyMembersData**

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

# **updateClientFamilyMembers**
> CommandProcessingResult updateClientFamilyMembers()


### Example

```typescript
import {
    ClientFamilyMemberApi,
    Configuration,
    ClientFamilyMemberRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientFamilyMemberApi(configuration);

let familyMemberId: number; // (default to undefined)
let clientId: number; //clientId (default to undefined)
let clientFamilyMemberRequest: ClientFamilyMemberRequest; // (optional)

const { status, data } = await apiInstance.updateClientFamilyMembers(
    familyMemberId,
    clientId,
    clientFamilyMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientFamilyMemberRequest** | **ClientFamilyMemberRequest**|  | |
| **familyMemberId** | [**number**] |  | defaults to undefined|
| **clientId** | [**number**] | clientId | defaults to undefined|


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

