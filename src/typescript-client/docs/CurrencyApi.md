# CurrencyApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveCurrencies**](#retrievecurrencies) | **GET** /v1/currencies | Retrieve Currency Configuration|
|[**updateCurrencies**](#updatecurrencies) | **PUT** /v1/currencies | Update Currency Configuration|

# **retrieveCurrencies**
> CurrencyConfigurationData retrieveCurrencies()

Returns the list of currencies permitted for use AND the list of currencies not selected (but available for selection).  Example Requests:  currencies currencies?fields=selectedCurrencyOptions 

### Example

```typescript
import {
    CurrencyApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CurrencyApi(configuration);

const { status, data } = await apiInstance.retrieveCurrencies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrencyConfigurationData**

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

# **updateCurrencies**
> CurrencyUpdateResponse updateCurrencies()

Updates the list of currencies permitted for use.

### Example

```typescript
import {
    CurrencyApi,
    Configuration,
    CurrencyUpdateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CurrencyApi(configuration);

let currencyUpdateRequest: CurrencyUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateCurrencies(
    currencyUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **currencyUpdateRequest** | **CurrencyUpdateRequest**|  | |


### Return type

**CurrencyUpdateResponse**

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

