# SearchAPIApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**advancedSearch**](#advancedsearch) | **POST** /v1/search/advance | Adhoc query search|
|[**retrieveAdHocSearchQueryTemplate**](#retrieveadhocsearchquerytemplate) | **GET** /v1/search/template | Retrive Adhoc Search query template|
|[**searchData**](#searchdata) | **GET** /v1/search | Search Resources|

# **advancedSearch**
> Array<AdHocSearchQueryData> advancedSearch(postAdhocQuerySearchRequest)

AdHocQuery search has more search options, it is a POST request, it uses request body to send search parameters   Mandatory fields:entities  Optional fields:loanStatus, loanProducts, offices, loanDateOption, loanFromDate, loanToDate,  includeOutStandingAmountPercentage, outStandingAmountPercentageCondition,  minOutStandingAmountPercentage and maxOutStandingAmountPercentage OR outStandingAmountPercentage,  includeOutstandingAmount, outstandingAmountCondition,  minOutstandingAmount and maxOutstandingAmount OR outstandingAmount

### Example

```typescript
import {
    SearchAPIApi,
    Configuration,
    PostAdhocQuerySearchRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SearchAPIApi(configuration);

let postAdhocQuerySearchRequest: PostAdhocQuerySearchRequest; //

const { status, data } = await apiInstance.advancedSearch(
    postAdhocQuerySearchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAdhocQuerySearchRequest** | **PostAdhocQuerySearchRequest**|  | |


### Return type

**Array<AdHocSearchQueryData>**

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

# **retrieveAdHocSearchQueryTemplate**
> AdHocSearchQueryData retrieveAdHocSearchQueryTemplate()

Mandatory Fields  search?query=000000001 

### Example

```typescript
import {
    SearchAPIApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SearchAPIApi(configuration);

const { status, data } = await apiInstance.retrieveAdHocSearchQueryTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AdHocSearchQueryData**

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

# **searchData**
> Array<GetSearchResponse> searchData()

Example Requests:  search?query=000000001   search?query=Petra&resource=clients,groups   search?query=Petra&resource=clients,groups&exactMatch=true

### Example

```typescript
import {
    SearchAPIApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SearchAPIApi(configuration);

let query: string; //query (optional) (default to undefined)
let resource: string; //resource (optional) (default to undefined)
let exactMatch: boolean; //exactMatch (optional) (default to false)

const { status, data } = await apiInstance.searchData(
    query,
    resource,
    exactMatch
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] | query | (optional) defaults to undefined|
| **resource** | [**string**] | resource | (optional) defaults to undefined|
| **exactMatch** | [**boolean**] | exactMatch | (optional) defaults to false|


### Return type

**Array<GetSearchResponse>**

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

