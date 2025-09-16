# PaymentTypeApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPaymentType**](#createpaymenttype) | **POST** /v1/paymenttypes | Create a Payment Type|
|[**deleteCode1**](#deletecode1) | **DELETE** /v1/paymenttypes/{paymentTypeId} | Delete a Payment Type|
|[**getAllPaymentTypes**](#getallpaymenttypes) | **GET** /v1/paymenttypes | Retrieve all Payment Types|
|[**retrieveOnePaymentType**](#retrieveonepaymenttype) | **GET** /v1/paymenttypes/{paymentTypeId} | Retrieve a Payment Type|
|[**updatePaymentType**](#updatepaymenttype) | **PUT** /v1/paymenttypes/{paymentTypeId} | Update a Payment Type|

# **createPaymentType**
> PostPaymentTypesResponse createPaymentType(paymentTypeRequest)

Creates a new Payment type  Mandatory Fields: name  Optional Fields: Description, isCashPayment,Position

### Example

```typescript
import {
    PaymentTypeApi,
    Configuration,
    PaymentTypeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PaymentTypeApi(configuration);

let paymentTypeRequest: PaymentTypeRequest; //

const { status, data } = await apiInstance.createPaymentType(
    paymentTypeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentTypeRequest** | **PaymentTypeRequest**|  | |


### Return type

**PostPaymentTypesResponse**

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

# **deleteCode1**
> DeletePaymentTypesPaymentTypeIdResponse deleteCode1()

Deletes payment type

### Example

```typescript
import {
    PaymentTypeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PaymentTypeApi(configuration);

let paymentTypeId: number; //paymentTypeId (default to undefined)

const { status, data } = await apiInstance.deleteCode1(
    paymentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentTypeId** | [**number**] | paymentTypeId | defaults to undefined|


### Return type

**DeletePaymentTypesPaymentTypeIdResponse**

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

# **getAllPaymentTypes**
> Array<PaymentTypeData> getAllPaymentTypes()

Retrieve list of payment types

### Example

```typescript
import {
    PaymentTypeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PaymentTypeApi(configuration);

let onlyWithCode: boolean; //onlyWithCode (optional) (default to undefined)

const { status, data } = await apiInstance.getAllPaymentTypes(
    onlyWithCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **onlyWithCode** | [**boolean**] | onlyWithCode | (optional) defaults to undefined|


### Return type

**Array<PaymentTypeData>**

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

# **retrieveOnePaymentType**
> PaymentTypeData retrieveOnePaymentType()

Retrieves a payment type

### Example

```typescript
import {
    PaymentTypeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PaymentTypeApi(configuration);

let paymentTypeId: number; //paymentTypeId (default to undefined)

const { status, data } = await apiInstance.retrieveOnePaymentType(
    paymentTypeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentTypeId** | [**number**] | paymentTypeId | defaults to undefined|


### Return type

**PaymentTypeData**

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

# **updatePaymentType**
> PutPaymentTypesPaymentTypeIdResponse updatePaymentType(putPaymentTypesPaymentTypeIdRequest)

Updates a Payment Type

### Example

```typescript
import {
    PaymentTypeApi,
    Configuration,
    PutPaymentTypesPaymentTypeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PaymentTypeApi(configuration);

let paymentTypeId: number; //paymentTypeId (default to undefined)
let putPaymentTypesPaymentTypeIdRequest: PutPaymentTypesPaymentTypeIdRequest; //

const { status, data } = await apiInstance.updatePaymentType(
    paymentTypeId,
    putPaymentTypesPaymentTypeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putPaymentTypesPaymentTypeIdRequest** | **PutPaymentTypesPaymentTypeIdRequest**|  | |
| **paymentTypeId** | [**number**] | paymentTypeId | defaults to undefined|


### Return type

**PutPaymentTypesPaymentTypeIdResponse**

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

