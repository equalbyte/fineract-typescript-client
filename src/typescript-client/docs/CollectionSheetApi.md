# CollectionSheetApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**generateCollectionSheet**](#generatecollectionsheet) | **POST** /v1/collectionsheet | Generate Individual Collection Sheet | Save Collection Sheet|

# **generateCollectionSheet**
> PostCollectionSheetResponse generateCollectionSheet(collectionSheetRequest)

Generate Individual Collection Sheet:  This Api retrieves repayment details of all individual loans under a office as on a specified meeting date.  Save Collection Sheet:  This Api allows the loan officer to perform bulk repayments of individual loans and deposit of mandatory savings on a given meeting date.

### Example

```typescript
import {
    CollectionSheetApi,
    Configuration,
    CollectionSheetRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CollectionSheetApi(configuration);

let collectionSheetRequest: CollectionSheetRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.generateCollectionSheet(
    collectionSheetRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionSheetRequest** | **CollectionSheetRequest**|  | |
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostCollectionSheetResponse**

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

