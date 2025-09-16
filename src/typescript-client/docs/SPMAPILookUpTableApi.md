# SPMAPILookUpTableApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createLookupTable**](#createlookuptable) | **POST** /v1/surveys/{surveyId}/lookuptables | Create a Lookup Table entry|
|[**fetchLookupTables**](#fetchlookuptables) | **GET** /v1/surveys/{surveyId}/lookuptables | List all Lookup Table entries|
|[**findLookupTable**](#findlookuptable) | **GET** /v1/surveys/{surveyId}/lookuptables/{key} | Retrieve a Lookup Table entry|

# **createLookupTable**
> createLookupTable()

Add a new entry to a survey.  Mandatory Fields key, score, validFrom, validTo

### Example

```typescript
import {
    SPMAPILookUpTableApi,
    Configuration,
    LookupTableData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SPMAPILookUpTableApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)
let lookupTableData: LookupTableData; // (optional)

const { status, data } = await apiInstance.createLookupTable(
    surveyId,
    lookupTableData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lookupTableData** | **LookupTableData**|  | |
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|


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

# **fetchLookupTables**
> Array<LookupTableData> fetchLookupTables()

List all Lookup Table entries for a survey.

### Example

```typescript
import {
    SPMAPILookUpTableApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SPMAPILookUpTableApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)

const { status, data } = await apiInstance.fetchLookupTables(
    surveyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|


### Return type

**Array<LookupTableData>**

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

# **findLookupTable**
> LookupTableData findLookupTable()

Retrieve a Lookup Table entry for a survey.

### Example

```typescript
import {
    SPMAPILookUpTableApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SPMAPILookUpTableApi(configuration);

let surveyId: number; //Enter surveyId (default to undefined)
let key: string; //Enter key (default to undefined)

const { status, data } = await apiInstance.findLookupTable(
    surveyId,
    key
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **surveyId** | [**number**] | Enter surveyId | defaults to undefined|
| **key** | [**string**] | Enter key | defaults to undefined|


### Return type

**LookupTableData**

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

