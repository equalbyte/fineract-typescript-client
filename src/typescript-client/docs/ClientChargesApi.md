# ClientChargesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**applyClientCharge**](#applyclientcharge) | **POST** /v1/clients/{clientId}/charges | Add Client Charge|
|[**deleteClientCharge**](#deleteclientcharge) | **DELETE** /v1/clients/{clientId}/charges/{chargeId} | Delete a Client Charge|
|[**payOrWaiveClientCharge**](#payorwaiveclientcharge) | **POST** /v1/clients/{clientId}/charges/{chargeId} | Pay a Client Charge | Waive a Client Charge|
|[**retrieveAllClientCharges**](#retrieveallclientcharges) | **GET** /v1/clients/{clientId}/charges | List Client Charges|
|[**retrieveClientCharge**](#retrieveclientcharge) | **GET** /v1/clients/{clientId}/charges/{chargeId} | Retrieve a Client Charge|
|[**retrieveTemplate4**](#retrievetemplate4) | **GET** /v1/clients/{clientId}/charges/template | |

# **applyClientCharge**
> PostClientsClientIdChargesResponse applyClientCharge(postClientsClientIdChargesRequest)

 This API associates a Client charge with an implicit Client account Mandatory Fields :  chargeId and dueDate   Optional Fields :  amount

### Example

```typescript
import {
    ClientChargesApi,
    Configuration,
    PostClientsClientIdChargesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)
let postClientsClientIdChargesRequest: PostClientsClientIdChargesRequest; //

const { status, data } = await apiInstance.applyClientCharge(
    clientId,
    postClientsClientIdChargesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsClientIdChargesRequest** | **PostClientsClientIdChargesRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|


### Return type

**PostClientsClientIdChargesResponse**

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

# **deleteClientCharge**
> DeleteClientsClientIdChargesChargeIdResponse deleteClientCharge()

Deletes a Client Charge on which no transactions have taken place (either payments or waivers). 

### Example

```typescript
import {
    ClientChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.deleteClientCharge(
    clientId,
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**DeleteClientsClientIdChargesChargeIdResponse**

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

# **payOrWaiveClientCharge**
> PostClientsClientIdChargesChargeIdResponse payOrWaiveClientCharge(postClientsClientIdChargesChargeIdRequest)

Pay a Client Charge:  Mandatory Fields:transactionDate and amount \"Pay either a part of or the entire due amount for a charge.(command=paycharge)  Waive a Client Charge:   This API provides the facility of waiving off the remaining amount on a client charge (command=waive)  Showing request/response for \'Pay a Client Charge\'

### Example

```typescript
import {
    ClientChargesApi,
    Configuration,
    PostClientsClientIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeId: number; //chargeId (default to undefined)
let postClientsClientIdChargesChargeIdRequest: PostClientsClientIdChargesChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.payOrWaiveClientCharge(
    clientId,
    chargeId,
    postClientsClientIdChargesChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postClientsClientIdChargesChargeIdRequest** | **PostClientsClientIdChargesChargeIdRequest**|  | |
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeId** | [**number**] | chargeId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostClientsClientIdChargesChargeIdResponse**

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

# **retrieveAllClientCharges**
> GetClientsClientIdChargesResponse retrieveAllClientCharges()

The list capability of client charges supports pagination.Example Requests: clients/1/charges  clients/1/charges?offset=0&limit=5

### Example

```typescript
import {
    ClientChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')
let pendingPayment: boolean; //pendingPayment (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllClientCharges(
    clientId,
    chargeStatus,
    pendingPayment,
    limit,
    offset
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|
| **pendingPayment** | [**boolean**] | pendingPayment | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|


### Return type

**GetClientsClientIdChargesResponse**

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

# **retrieveClientCharge**
> GetClientsChargesPageItems retrieveClientCharge()

Example Requests: clients/1/charges/1   clients/1/charges/1?fields=name,id

### Example

```typescript
import {
    ClientChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)
let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.retrieveClientCharge(
    clientId,
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**GetClientsChargesPageItems**

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

# **retrieveTemplate4**
> string retrieveTemplate4()


### Example

```typescript
import {
    ClientChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientChargesApi(configuration);

let clientId: number; //clientId (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate4(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] | clientId | defaults to undefined|


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

