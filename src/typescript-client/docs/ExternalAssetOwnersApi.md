# ExternalAssetOwnersApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getActiveTransfer**](#getactivetransfer) | **GET** /v1/external-asset-owners/transfers/active-transfer | Retrieve Active Asset Owner Transfer|
|[**getJournalEntriesOfOwner**](#getjournalentriesofowner) | **GET** /v1/external-asset-owners/owners/external-id/{ownerExternalId}/journal-entries | Retrieve Journal Entries of Owner|
|[**getJournalEntriesOfTransfer**](#getjournalentriesoftransfer) | **GET** /v1/external-asset-owners/transfers/{transferId}/journal-entries | Retrieve Journal Entries of Transfer|
|[**getTransfers**](#gettransfers) | **GET** /v1/external-asset-owners/transfers | Retrieve External Asset Owner Transfers|
|[**searchInvestorData**](#searchinvestordata) | **POST** /v1/external-asset-owners/search | Search External Asset Owner Transfers by text or date ranges to settlement or effective dates|
|[**transferRequestWithId**](#transferrequestwithid) | **POST** /v1/external-asset-owners/transfers/{id} | |
|[**transferRequestWithId1**](#transferrequestwithid1) | **POST** /v1/external-asset-owners/transfers/external-id/{externalId} | |
|[**transferRequestWithLoanExternalId**](#transferrequestwithloanexternalid) | **POST** /v1/external-asset-owners/transfers/loans/external-id/{loanExternalId} | |
|[**transferRequestWithLoanId**](#transferrequestwithloanid) | **POST** /v1/external-asset-owners/transfers/loans/{loanId} | |

# **getActiveTransfer**
> ExternalTransferData getActiveTransfer()

Retrieve Active External Asset Owner Transfer by transferExternalId, loanId or loanExternalId

### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let transferExternalId: string; //transferExternalId (optional) (default to undefined)
let loanId: number; //loanId (optional) (default to undefined)
let loanExternalId: string; //loanExternalId (optional) (default to undefined)

const { status, data } = await apiInstance.getActiveTransfer(
    transferExternalId,
    loanId,
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferExternalId** | [**string**] | transferExternalId | (optional) defaults to undefined|
| **loanId** | [**number**] | loanId | (optional) defaults to undefined|
| **loanExternalId** | [**string**] | loanExternalId | (optional) defaults to undefined|


### Return type

**ExternalTransferData**

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

# **getJournalEntriesOfOwner**
> ExternalOwnerJournalEntryData getJournalEntriesOfOwner()

Retrieve Journal entries of owner by owner externalId

### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let ownerExternalId: string; //ownerExternalId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.getJournalEntriesOfOwner(
    ownerExternalId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ownerExternalId** | [**string**] | ownerExternalId | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**ExternalOwnerJournalEntryData**

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

# **getJournalEntriesOfTransfer**
> ExternalOwnerTransferJournalEntryData getJournalEntriesOfTransfer()

Retrieve Journal entries of transfer by transferId

### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let transferId: number; //transferId (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.getJournalEntriesOfTransfer(
    transferId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferId** | [**number**] | transferId | defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**ExternalOwnerTransferJournalEntryData**

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

# **getTransfers**
> PageExternalTransferData getTransfers()

Retrieve External Asset Owner Transfer items by transferExternalId, loanId or loanExternalId

### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let transferExternalId: string; //transferExternalId (optional) (default to undefined)
let loanId: number; //loanId (optional) (default to undefined)
let loanExternalId: string; //loanExternalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.getTransfers(
    transferExternalId,
    loanId,
    loanExternalId,
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferExternalId** | [**string**] | transferExternalId | (optional) defaults to undefined|
| **loanId** | [**number**] | loanId | (optional) defaults to undefined|
| **loanExternalId** | [**string**] | loanExternalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**PageExternalTransferData**

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

# **searchInvestorData**
> PageExternalTransferData searchInvestorData()


### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration,
    PagedRequestExternalAssetOwnerSearchRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let pagedRequestExternalAssetOwnerSearchRequest: PagedRequestExternalAssetOwnerSearchRequest; // (optional)

const { status, data } = await apiInstance.searchInvestorData(
    pagedRequestExternalAssetOwnerSearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pagedRequestExternalAssetOwnerSearchRequest** | **PagedRequestExternalAssetOwnerSearchRequest**|  | |


### Return type

**PageExternalTransferData**

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

# **transferRequestWithId**
> PostInitiateTransferResponse transferRequestWithId()


### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let id: number; // (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.transferRequestWithId(
    id,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostInitiateTransferResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Transfer cannot be initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferRequestWithId1**
> PostInitiateTransferResponse transferRequestWithId1()


### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let externalId: string; // (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.transferRequestWithId1(
    externalId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] |  | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostInitiateTransferResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Transfer cannot be initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferRequestWithLoanExternalId**
> PostInitiateTransferResponse transferRequestWithLoanExternalId(externalAssetOwnerRequest)


### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration,
    ExternalAssetOwnerRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let loanExternalId: string; // (default to undefined)
let externalAssetOwnerRequest: ExternalAssetOwnerRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.transferRequestWithLoanExternalId(
    loanExternalId,
    externalAssetOwnerRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalAssetOwnerRequest** | **ExternalAssetOwnerRequest**|  | |
| **loanExternalId** | [**string**] |  | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostInitiateTransferResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Transfer cannot be initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferRequestWithLoanId**
> PostInitiateTransferResponse transferRequestWithLoanId(externalAssetOwnerRequest)


### Example

```typescript
import {
    ExternalAssetOwnersApi,
    Configuration,
    ExternalAssetOwnerRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnersApi(configuration);

let loanId: number; // (default to undefined)
let externalAssetOwnerRequest: ExternalAssetOwnerRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.transferRequestWithLoanId(
    loanId,
    externalAssetOwnerRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalAssetOwnerRequest** | **ExternalAssetOwnerRequest**|  | |
| **loanId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostInitiateTransferResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**403** | Transfer cannot be initiated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

