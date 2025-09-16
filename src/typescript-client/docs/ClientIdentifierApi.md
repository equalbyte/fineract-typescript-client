# ClientIdentifierApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createClientIdentifier**](#createclientidentifier) | **POST** /v1/clients/{clientId}/identifiers | Create an Identifier for a Client|
|[**deleteClientIdentifier**](#deleteclientidentifier) | **DELETE** /v1/clients/{clientId}/identifiers/{identifierId} | Delete a Client Identifier|
|[**newClientIdentifierDetails**](#newclientidentifierdetails) | **GET** /v1/clients/{clientId}/identifiers/template | Retrieve Client Identifier Details Template|
|[**retrieveAllClientIdentifiers**](#retrieveallclientidentifiers) | **GET** /v1/clients/{clientId}/identifiers | List all Identifiers for a Client|
|[**retrieveClientIdentifiers**](#retrieveclientidentifiers) | **GET** /v1/clients/{clientId}/identifiers/{identifierId} | Retrieve a Client Identifier|
|[**updateClientIdentifer**](#updateclientidentifer) | **PUT** /v1/clients/{clientId}/identifiers/{identifierId} | Update a Client Identifier|

# **createClientIdentifier**
> PostClientsClientIdIdentifiersResponse createClientIdentifier(postClientsClientIdIdentifiersRequest)

Mandatory Fields documentKey, documentTypeId 

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration,
    PostClientsClientIdIdentifiersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)
let postClientsClientIdIdentifiersRequest: PostClientsClientIdIdentifiersRequest; //

const { status, data } = await apiInstance.createClientIdentifier(
    clientId,
    postClientsClientIdIdentifiersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsClientIdIdentifiersRequest** | **PostClientsClientIdIdentifiersRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**PostClientsClientIdIdentifiersResponse**

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

# **deleteClientIdentifier**
> DeleteClientsClientIdIdentifiersIdentifierIdResponse deleteClientIdentifier()

Deletes a Client Identifier

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)
let identifierId: number; //identifierId (default to undefined)

const { status, data } = await apiInstance.deleteClientIdentifier(
    clientId,
    identifierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **identifierId** | [**number**] | identifierId | defaults to undefined|


### Return type

**DeleteClientsClientIdIdentifiersIdentifierIdResponse**

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

# **newClientIdentifierDetails**
> ClientIdentifierData newClientIdentifierDetails()

This is a convenience resource useful for building maintenance user interface screens for client applications. The template data returned consists of any or all of:   Field Defaults  Allowed description Lists   Example Request: clients/1/identifiers/template

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.newClientIdentifierDetails(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**ClientIdentifierData**

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

# **retrieveAllClientIdentifiers**
> Array<ClientIdentifierData> retrieveAllClientIdentifiers()

Example Requests: clients/1/identifiers   clients/1/identifiers?fields=documentKey,documentType,description

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientIdentifiers(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**Array<ClientIdentifierData>**

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

# **retrieveClientIdentifiers**
> GetClientsClientIdIdentifiersResponse retrieveClientIdentifiers()

Example Requests: clients/1/identifier/2   clients/1/identifier/2?template=true  clients/1/identifiers/2?fields=documentKey,documentType,description

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)
let identifierId: number; //identifierId (default to undefined)

const { status, data } = await apiInstance.retrieveClientIdentifiers(
    clientId,
    identifierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **identifierId** | [**number**] | identifierId | defaults to undefined|


### Return type

**GetClientsClientIdIdentifiersResponse**

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

# **updateClientIdentifer**
> PutClientsClientIdIdentifiersIdentifierIdResponse updateClientIdentifer(clientIdentifierRequest)

Updates a Client Identifier

### Example

```typescript
import {
    ClientIdentifierApi,
    Configuration,
    ClientIdentifierRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientIdentifierApi(configuration);

let clientId: number; //clientId (default to undefined)
let identifierId: number; //identifierId (default to undefined)
let clientIdentifierRequest: ClientIdentifierRequest; //

const { status, data } = await apiInstance.updateClientIdentifer(
    clientId,
    identifierId,
    clientIdentifierRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientIdentifierRequest** | **ClientIdentifierRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|
| **identifierId** | [**number**] | identifierId | defaults to undefined|


### Return type

**PutClientsClientIdIdentifiersIdentifierIdResponse**

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

