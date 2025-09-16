# CashiersApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCashierData**](#getcashierdata) | **GET** /v1/cashiers | |

# **getCashierData**
> Array<CashierData> getCashierData()


### Example

```typescript
import {
    CashiersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CashiersApi(configuration);

let officeId: number; // (optional) (default to undefined)
let tellerId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let date: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getCashierData(
    officeId,
    tellerId,
    staffId,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **tellerId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
| **date** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<CashierData>**

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

