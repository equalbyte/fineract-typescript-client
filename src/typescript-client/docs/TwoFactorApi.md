# TwoFactorApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getOTPDeliveryMethods**](#getotpdeliverymethods) | **GET** /v1/twofactor | |
|[**requestToken**](#requesttoken) | **POST** /v1/twofactor | |
|[**updateConfiguration2**](#updateconfiguration2) | **POST** /v1/twofactor/invalidate | |
|[**validate**](#validate) | **POST** /v1/twofactor/validate | |

# **getOTPDeliveryMethods**
> string getOTPDeliveryMethods()


### Example

```typescript
import {
    TwoFactorApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TwoFactorApi(configuration);

const { status, data } = await apiInstance.getOTPDeliveryMethods();
```

### Parameters
This endpoint does not have any parameters.


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

# **requestToken**
> string requestToken()


### Example

```typescript
import {
    TwoFactorApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TwoFactorApi(configuration);

let deliveryMethod: string; // (optional) (default to undefined)
let extendedToken: boolean; // (optional) (default to false)

const { status, data } = await apiInstance.requestToken(
    deliveryMethod,
    extendedToken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deliveryMethod** | [**string**] |  | (optional) defaults to undefined|
| **extendedToken** | [**boolean**] |  | (optional) defaults to false|


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

# **updateConfiguration2**
> string updateConfiguration2()


### Example

```typescript
import {
    TwoFactorApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TwoFactorApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.updateConfiguration2(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


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

# **validate**
> string validate()


### Example

```typescript
import {
    TwoFactorApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TwoFactorApi(configuration);

let token: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.validate(
    token
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **token** | [**string**] |  | (optional) defaults to undefined|


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

