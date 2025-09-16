# PeriodicAccrualAccountingApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executePeriodicAccrualAccounting**](#executeperiodicaccrualaccounting) | **POST** /v1/runaccruals | Executes Periodic Accrual Accounting|

# **executePeriodicAccrualAccounting**
> executePeriodicAccrualAccounting(postRunaccrualsRequest)

Mandatory Fields  tillDate 

### Example

```typescript
import {
    PeriodicAccrualAccountingApi,
    Configuration,
    PostRunaccrualsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PeriodicAccrualAccountingApi(configuration);

let postRunaccrualsRequest: PostRunaccrualsRequest; //

const { status, data } = await apiInstance.executePeriodicAccrualAccounting(
    postRunaccrualsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRunaccrualsRequest** | **PostRunaccrualsRequest**|  | |


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

