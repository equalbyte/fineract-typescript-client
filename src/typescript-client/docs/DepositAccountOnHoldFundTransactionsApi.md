# DepositAccountOnHoldFundTransactionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll28**](#retrieveall28) | **GET** /v1/savingsaccounts/{savingsId}/onholdtransactions | |

# **retrieveAll28**
> string retrieveAll28()


### Example

```typescript
import {
    DepositAccountOnHoldFundTransactionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DepositAccountOnHoldFundTransactionsApi(configuration);

let savingsId: number; // (default to undefined)
let guarantorFundingId: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll28(
    savingsId,
    guarantorFundingId,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsId** | [**number**] |  | defaults to undefined|
| **guarantorFundingId** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


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

