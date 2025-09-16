# ClientSearchV2Api

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**searchByText**](#searchbytext) | **POST** /v2/clients/search | Search Clients by text|

# **searchByText**
> PageClientSearchData searchByText()


### Example

```typescript
import {
    ClientSearchV2Api,
    Configuration,
    PagedRequestClientTextSearch
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ClientSearchV2Api(configuration);

let pagedRequestClientTextSearch: PagedRequestClientTextSearch; // (optional)

const { status, data } = await apiInstance.searchByText(
    pagedRequestClientTextSearch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pagedRequestClientTextSearch** | **PagedRequestClientTextSearch**|  | |


### Return type

**PageClientSearchData**

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

