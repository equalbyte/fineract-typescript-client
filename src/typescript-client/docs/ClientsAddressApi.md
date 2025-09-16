# ClientsAddressApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addClientAddress**](#addclientaddress) | **POST** /v1/client/{clientid}/addresses | Create an address for a Client|
|[**getAddresses1**](#getaddresses1) | **GET** /v1/client/{clientid}/addresses | List all addresses for a Client|
|[**getAddressesTemplate**](#getaddressestemplate) | **GET** /v1/client/addresses/template | |
|[**updateClientAddress**](#updateclientaddress) | **PUT** /v1/client/{clientid}/addresses | Update an address for a Client|

# **addClientAddress**
> PostClientClientIdAddressesResponse addClientAddress(clientAddressRequest)

Mandatory Fields :  type and clientId

### Example

```typescript
import {
    ClientsAddressApi,
    Configuration,
    ClientAddressRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientsAddressApi(configuration);

let clientid: number; //clientId (default to undefined)
let clientAddressRequest: ClientAddressRequest; //
let type: number; //type (optional) (default to undefined)

const { status, data } = await apiInstance.addClientAddress(
    clientid,
    clientAddressRequest,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientAddressRequest** | **ClientAddressRequest**|  | |
| **clientid** | [**number**] | clientId | defaults to undefined|
| **type** | [**number**] | type | (optional) defaults to undefined|


### Return type

**PostClientClientIdAddressesResponse**

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

# **getAddresses1**
> Array<AddressData> getAddresses1()

Example Requests:  client/1/addresses   clients/1/addresses?status=false,true&&type=1,2,3

### Example

```typescript
import {
    ClientsAddressApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientsAddressApi(configuration);

let clientid: number; //clientId (default to undefined)
let status: string; //status (optional) (default to undefined)
let type: number; //type (optional) (default to undefined)

const { status, data } = await apiInstance.getAddresses1(
    clientid,
    status,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientid** | [**number**] | clientId | defaults to undefined|
| **status** | [**string**] | status | (optional) defaults to undefined|
| **type** | [**number**] | type | (optional) defaults to undefined|


### Return type

**Array<AddressData>**

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

# **getAddressesTemplate**
> AddressData getAddressesTemplate()


### Example

```typescript
import {
    ClientsAddressApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientsAddressApi(configuration);

const { status, data } = await apiInstance.getAddressesTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AddressData**

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

# **updateClientAddress**
> PutClientClientIdAddressesResponse updateClientAddress(clientAddressRequest)

All the address fields can be updated by using update client address API  Mandatory Fields type and addressId

### Example

```typescript
import {
    ClientsAddressApi,
    Configuration,
    ClientAddressRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientsAddressApi(configuration);

let clientid: number; //clientId (default to undefined)
let clientAddressRequest: ClientAddressRequest; //

const { status, data } = await apiInstance.updateClientAddress(
    clientid,
    clientAddressRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientAddressRequest** | **ClientAddressRequest**|  | |
| **clientid** | [**number**] | clientId | defaults to undefined|


### Return type

**PutClientClientIdAddressesResponse**

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

