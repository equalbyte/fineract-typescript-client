# TellerCashManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**allocateCashToCashier**](#allocatecashtocashier) | **POST** /v1/tellers/{tellerId}/cashiers/{cashierId}/allocate | Allocate Cash To Cashier|
|[**createCashier**](#createcashier) | **POST** /v1/tellers/{tellerId}/cashiers | Create Cashiers|
|[**createTeller**](#createteller) | **POST** /v1/tellers | Create teller|
|[**deleteCashier**](#deletecashier) | **DELETE** /v1/tellers/{tellerId}/cashiers/{cashierId} | Delete Cashier|
|[**deleteTeller**](#deleteteller) | **DELETE** /v1/tellers/{tellerId} | |
|[**findCashierData**](#findcashierdata) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId} | Retrieve a cashier|
|[**findTeller**](#findteller) | **GET** /v1/tellers/{tellerId} | Retrieve tellers|
|[**findTransactionData**](#findtransactiondata) | **GET** /v1/tellers/{tellerId}/transactions/{transactionId} | |
|[**getCashierData1**](#getcashierdata1) | **GET** /v1/tellers/{tellerId}/cashiers | List Cashiers|
|[**getCashierTemplate**](#getcashiertemplate) | **GET** /v1/tellers/{tellerId}/cashiers/template | Find Cashiers|
|[**getCashierTxnTemplate**](#getcashiertxntemplate) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/transactions/template | Retrieve Cashier Transaction Template|
|[**getJournalData**](#getjournaldata) | **GET** /v1/tellers/{tellerId}/journals | |
|[**getTellerData**](#gettellerdata) | **GET** /v1/tellers | List all tellers|
|[**getTransactionData**](#gettransactiondata) | **GET** /v1/tellers/{tellerId}/transactions | |
|[**getTransactionsForCashier**](#gettransactionsforcashier) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/transactions | Retrieve Cashier Transactions|
|[**getTransactionsWithSummaryForCashier**](#gettransactionswithsummaryforcashier) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/summaryandtransactions | Retrieve Transactions With Summary For Cashier|
|[**settleCashFromCashier**](#settlecashfromcashier) | **POST** /v1/tellers/{tellerId}/cashiers/{cashierId}/settle | Settle Cash From Cashier|
|[**updateCashier**](#updatecashier) | **PUT** /v1/tellers/{tellerId}/cashiers/{cashierId} | Update Cashier|
|[**updateTeller**](#updateteller) | **PUT** /v1/tellers/{tellerId} | Update teller|

# **allocateCashToCashier**
> PostTellersTellerIdCashiersCashierIdAllocateResponse allocateCashToCashier(postTellersTellerIdCashiersCashierIdAllocateRequest)

Mandatory Fields:  Date, Amount, Currency, Notes/Comments

### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PostTellersTellerIdCashiersCashierIdAllocateRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)
let postTellersTellerIdCashiersCashierIdAllocateRequest: PostTellersTellerIdCashiersCashierIdAllocateRequest; //

const { status, data } = await apiInstance.allocateCashToCashier(
    tellerId,
    cashierId,
    postTellersTellerIdCashiersCashierIdAllocateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTellersTellerIdCashiersCashierIdAllocateRequest** | **PostTellersTellerIdCashiersCashierIdAllocateRequest**|  | |
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**PostTellersTellerIdCashiersCashierIdAllocateResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json, text/html
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCashier**
> PostTellersTellerIdCashiersResponse createCashier(postTellersTellerIdCashiersRequest)

Mandatory Fields:  Cashier/staff, Fromm Date, To Date, Full Day or From time and To time    Optional Fields:  Description/Notes

### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PostTellersTellerIdCashiersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let postTellersTellerIdCashiersRequest: PostTellersTellerIdCashiersRequest; //

const { status, data } = await apiInstance.createCashier(
    tellerId,
    postTellersTellerIdCashiersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTellersTellerIdCashiersRequest** | **PostTellersTellerIdCashiersRequest**|  | |
| **tellerId** | [**number**] | tellerId | defaults to undefined|


### Return type

**PostTellersTellerIdCashiersResponse**

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

# **createTeller**
> PostTellersResponse createTeller(postTellersRequest)

Mandatory Fields Teller name, OfficeId, Description, Start Date, Status Optional Fields End Date

### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PostTellersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let postTellersRequest: PostTellersRequest; //

const { status, data } = await apiInstance.createTeller(
    postTellersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTellersRequest** | **PostTellersRequest**|  | |


### Return type

**PostTellersResponse**

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

# **deleteCashier**
> DeleteTellersTellerIdCashiersCashierIdResponse deleteCashier()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)

const { status, data } = await apiInstance.deleteCashier(
    tellerId,
    cashierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**DeleteTellersTellerIdCashiersCashierIdResponse**

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

# **deleteTeller**
> CommandProcessingResult deleteTeller()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)

const { status, data } = await apiInstance.deleteTeller(
    tellerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **findCashierData**
> GetTellersTellerIdCashiersCashierIdResponse findCashierData()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)

const { status, data } = await apiInstance.findCashierData(
    tellerId,
    cashierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**GetTellersTellerIdCashiersCashierIdResponse**

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

# **findTeller**
> GetTellersResponse findTeller()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)

const { status, data } = await apiInstance.findTeller(
    tellerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|


### Return type

**GetTellersResponse**

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

# **findTransactionData**
> TellerTransactionData findTransactionData()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let transactionId: number; //transactionId (default to undefined)

const { status, data } = await apiInstance.findTransactionData(
    tellerId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **transactionId** | [**number**] | transactionId | defaults to undefined|


### Return type

**TellerTransactionData**

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

# **getCashierData1**
> GetTellersTellerIdCashiersResponse getCashierData1()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let fromdate: string; //fromdate (optional) (default to undefined)
let todate: string; //todate (optional) (default to undefined)

const { status, data } = await apiInstance.getCashierData1(
    tellerId,
    fromdate,
    todate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **fromdate** | [**string**] | fromdate | (optional) defaults to undefined|
| **todate** | [**string**] | todate | (optional) defaults to undefined|


### Return type

**GetTellersTellerIdCashiersResponse**

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

# **getCashierTemplate**
> GetTellersTellerIdCashiersTemplateResponse getCashierTemplate()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)

const { status, data } = await apiInstance.getCashierTemplate(
    tellerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|


### Return type

**GetTellersTellerIdCashiersTemplateResponse**

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

# **getCashierTxnTemplate**
> GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse getCashierTxnTemplate()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)

const { status, data } = await apiInstance.getCashierTxnTemplate(
    tellerId,
    cashierId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse**

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

# **getJournalData**
> Array<TellerJournalData> getJournalData()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (optional) (default to undefined)
let dateRange: string; //dateRange (optional) (default to undefined)

const { status, data } = await apiInstance.getJournalData(
    tellerId,
    cashierId,
    dateRange
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | (optional) defaults to undefined|
| **dateRange** | [**string**] | dateRange | (optional) defaults to undefined|


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

# **getTellerData**
> Array<GetTellersResponse> getTellerData()

Retrieves list tellers

### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)

const { status, data } = await apiInstance.getTellerData(
    officeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|


### Return type

**Array<GetTellersResponse>**

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

# **getTransactionData**
> Array<TellerTransactionData> getTransactionData()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let dateRange: string; //dateRange (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionData(
    tellerId,
    dateRange
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **dateRange** | [**string**] | dateRange | (optional) defaults to undefined|


### Return type

**Array<TellerTransactionData>**

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

# **getTransactionsForCashier**
> GetTellersTellerIdCashiersCashiersIdTransactionsResponse getTransactionsForCashier()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)
let currencyCode: string; //currencyCode (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionsForCashier(
    tellerId,
    cashierId,
    currencyCode,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|
| **currencyCode** | [**string**] | currencyCode | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**GetTellersTellerIdCashiersCashiersIdTransactionsResponse**

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

# **getTransactionsWithSummaryForCashier**
> GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse getTransactionsWithSummaryForCashier()


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)
let currencyCode: string; //currencyCode (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionsWithSummaryForCashier(
    tellerId,
    cashierId,
    currencyCode,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|
| **currencyCode** | [**string**] | currencyCode | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse**

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

# **settleCashFromCashier**
> PostTellersTellerIdCashiersCashierIdSettleResponse settleCashFromCashier(postTellersTellerIdCashiersCashierIdSettleRequest)

Mandatory Fields Date, Amount, Currency, Notes/Comments

### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PostTellersTellerIdCashiersCashierIdSettleRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)
let postTellersTellerIdCashiersCashierIdSettleRequest: PostTellersTellerIdCashiersCashierIdSettleRequest; //

const { status, data } = await apiInstance.settleCashFromCashier(
    tellerId,
    cashierId,
    postTellersTellerIdCashiersCashierIdSettleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postTellersTellerIdCashiersCashierIdSettleRequest** | **PostTellersTellerIdCashiersCashierIdSettleRequest**|  | |
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**PostTellersTellerIdCashiersCashierIdSettleResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json, text/html
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCashier**
> PutTellersTellerIdCashiersCashierIdResponse updateCashier(putTellersTellerIdCashiersCashierIdRequest)


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PutTellersTellerIdCashiersCashierIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let cashierId: number; //cashierId (default to undefined)
let putTellersTellerIdCashiersCashierIdRequest: PutTellersTellerIdCashiersCashierIdRequest; //

const { status, data } = await apiInstance.updateCashier(
    tellerId,
    cashierId,
    putTellersTellerIdCashiersCashierIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putTellersTellerIdCashiersCashierIdRequest** | **PutTellersTellerIdCashiersCashierIdRequest**|  | |
| **tellerId** | [**number**] | tellerId | defaults to undefined|
| **cashierId** | [**number**] | cashierId | defaults to undefined|


### Return type

**PutTellersTellerIdCashiersCashierIdResponse**

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

# **updateTeller**
> PutTellersResponse updateTeller(putTellersRequest)


### Example

```typescript
import {
    TellerCashManagementApi,
    Configuration,
    PutTellersRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new TellerCashManagementApi(configuration);

let tellerId: number; //tellerId (default to undefined)
let putTellersRequest: PutTellersRequest; //

const { status, data } = await apiInstance.updateTeller(
    tellerId,
    putTellersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putTellersRequest** | **PutTellersRequest**|  | |
| **tellerId** | [**number**] | tellerId | defaults to undefined|


### Return type

**PutTellersResponse**

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

