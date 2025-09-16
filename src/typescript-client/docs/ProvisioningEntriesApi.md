# ProvisioningEntriesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createProvisioningEntries**](#createprovisioningentries) | **POST** /v1/provisioningentries | Create new Provisioning Entries|
|[**modifyProvisioningEntry**](#modifyprovisioningentry) | **POST** /v1/provisioningentries/{entryId} | Recreates Provisioning Entry|
|[**retrieveAllProvisioningEntries**](#retrieveallprovisioningentries) | **GET** /v1/provisioningentries | List all Provisioning Entries|
|[**retrieveProviioningEntries**](#retrieveproviioningentries) | **GET** /v1/provisioningentries/entries | |
|[**retrieveProvisioningEntry**](#retrieveprovisioningentry) | **GET** /v1/provisioningentries/{entryId} | Retrieves a Provisioning Entry|

# **createProvisioningEntries**
> PostProvisioningEntriesResponse createProvisioningEntries()

Creates a new Provisioning Entries  Mandatory Fields date dateFormat locale Optional Fields createjournalentries

### Example

```typescript
import {
    ProvisioningEntriesApi,
    Configuration,
    ProvisionEntryRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningEntriesApi(configuration);

let provisionEntryRequest: ProvisionEntryRequest; // (optional)

const { status, data } = await apiInstance.createProvisioningEntries(
    provisionEntryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provisionEntryRequest** | **ProvisionEntryRequest**|  | |


### Return type

**PostProvisioningEntriesResponse**

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

# **modifyProvisioningEntry**
> PutProvisioningEntriesResponse modifyProvisioningEntry()

Recreates Provisioning Entry | createjournalentry.

### Example

```typescript
import {
    ProvisioningEntriesApi,
    Configuration,
    PutProvisioningEntriesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningEntriesApi(configuration);

let entryId: number; //entryId (default to undefined)
let command: string; //command=createjournalentry command=recreateprovisioningentry (optional) (default to undefined)
let putProvisioningEntriesRequest: PutProvisioningEntriesRequest; // (optional)

const { status, data } = await apiInstance.modifyProvisioningEntry(
    entryId,
    command,
    putProvisioningEntriesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putProvisioningEntriesRequest** | **PutProvisioningEntriesRequest**|  | |
| **entryId** | [**number**] | entryId | defaults to undefined|
| **command** | [**string**] | command&#x3D;createjournalentry command&#x3D;recreateprovisioningentry | (optional) defaults to undefined|


### Return type

**PutProvisioningEntriesResponse**

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

# **retrieveAllProvisioningEntries**
> PageProvisioningEntryData retrieveAllProvisioningEntries()


### Example

```typescript
import {
    ProvisioningEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningEntriesApi(configuration);

let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllProvisioningEntries(
    offset,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|


### Return type

**PageProvisioningEntryData**

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

# **retrieveProviioningEntries**
> PageLoanProductProvisioningEntryData retrieveProviioningEntries()


### Example

```typescript
import {
    ProvisioningEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningEntriesApi(configuration);

let entryId: number; // (optional) (default to undefined)
let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let officeId: number; // (optional) (default to undefined)
let productId: number; // (optional) (default to undefined)
let categoryId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveProviioningEntries(
    entryId,
    offset,
    limit,
    officeId,
    productId,
    categoryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**number**] |  | (optional) defaults to undefined|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **productId** | [**number**] |  | (optional) defaults to undefined|
| **categoryId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**PageLoanProductProvisioningEntryData**

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

# **retrieveProvisioningEntry**
> ProvisioningEntryData retrieveProvisioningEntry()

Returns the details of a generated Provisioning Entry.

### Example

```typescript
import {
    ProvisioningEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ProvisioningEntriesApi(configuration);

let entryId: number; //entryId (default to undefined)

const { status, data } = await apiInstance.retrieveProvisioningEntry(
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entryId** | [**number**] | entryId | defaults to undefined|


### Return type

**ProvisioningEntryData**

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

