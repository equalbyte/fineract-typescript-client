# CashierJournalsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getJournalData1**](#getjournaldata1) | **GET** /v1/cashiersjournal | |

# **getJournalData1**
> Array<TellerJournalData> getJournalData1()


### Example

```typescript
import {
    CashierJournalsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CashierJournalsApi(configuration);

let officeId: number; // (optional) (default to undefined)
let tellerId: number; // (optional) (default to undefined)
let cashierId: number; // (optional) (default to undefined)
let dateRange: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getJournalData1(
    officeId,
    tellerId,
    cashierId,
    dateRange
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **tellerId** | [**number**] |  | (optional) defaults to undefined|
| **cashierId** | [**number**] |  | (optional) defaults to undefined|
| **dateRange** | [**string**] |  | (optional) defaults to undefined|


### Return type

**Array<TellerJournalData>**

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

