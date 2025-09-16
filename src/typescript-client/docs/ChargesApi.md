# ChargesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCharge**](#createcharge) | **POST** /v1/charges | Create/Define a Charge|
|[**deleteCharge**](#deletecharge) | **DELETE** /v1/charges/{chargeId} | Delete a Charge|
|[**retrieveAllCharges**](#retrieveallcharges) | **GET** /v1/charges | Retrieve Charges|
|[**retrieveCharge**](#retrievecharge) | **GET** /v1/charges/{chargeId} | Retrieve a Charge|
|[**retrieveNewChargeDetails**](#retrievenewchargedetails) | **GET** /v1/charges/template | Retrieve Charge Template|
|[**updateCharge**](#updatecharge) | **PUT** /v1/charges/{chargeId} | Update a Charge|

# **createCharge**
> PostChargesResponse createCharge(chargeRequest)

Define a new charge that can later be associated with loans and savings through their respective product definitions or directly on each account instance.

### Example

```typescript
import {
    ChargesApi,
    Configuration,
    ChargeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let chargeRequest: ChargeRequest; //

const { status, data } = await apiInstance.createCharge(
    chargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeRequest** | **ChargeRequest**|  | |


### Return type

**PostChargesResponse**

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

# **deleteCharge**
> DeleteChargesChargeIdResponse deleteCharge()

Deletes a Charge.

### Example

```typescript
import {
    ChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.deleteCharge(
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**DeleteChargesChargeIdResponse**

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

# **retrieveAllCharges**
> Array<ChargeData> retrieveAllCharges()

Returns the list of defined charges.  Example Requests:  charges

### Example

```typescript
import {
    ChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

const { status, data } = await apiInstance.retrieveAllCharges();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ChargeData>**

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

# **retrieveCharge**
> GetChargesResponse retrieveCharge()

Returns the details of a defined Charge.  Example Requests:  charges/1

### Example

```typescript
import {
    ChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let chargeId: number; //chargeId (default to undefined)

const { status, data } = await apiInstance.retrieveCharge(
    chargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**GetChargesResponse**

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

# **retrieveNewChargeDetails**
> ChargeData retrieveNewChargeDetails()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  charges/template 

### Example

```typescript
import {
    ChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

const { status, data } = await apiInstance.retrieveNewChargeDetails();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ChargeData**

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

# **updateCharge**
> PutChargesChargeIdResponse updateCharge(chargeRequest)

Updates the details of a Charge.

### Example

```typescript
import {
    ChargesApi,
    Configuration,
    ChargeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let chargeId: number; //chargeId (default to undefined)
let chargeRequest: ChargeRequest; //

const { status, data } = await apiInstance.updateCharge(
    chargeId,
    chargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeRequest** | **ChargeRequest**|  | |
| **chargeId** | [**number**] | chargeId | defaults to undefined|


### Return type

**PutChargesChargeIdResponse**

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

