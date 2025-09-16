# BatchAPIApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleBatchRequests**](#handlebatchrequests) | **POST** /v1/batches | Batch requests in a single transaction|

# **handleBatchRequests**
> Array<BatchResponse> handleBatchRequests(batchRequest)

The Apache Fineract Batch API is also capable of executing all the requests in a single transaction, by setting a Query Parameter, \"enclosingTransaction=true\". So, if one or more of the requests in a batch returns an erroneous response all of the Data base transactions made by other successful requests will be rolled back.  If there has been a rollback in a transaction then a single response will be provided, with a \'400\' status code and a body consisting of the error details of the first failed request.

### Example

```typescript
import {
    BatchAPIApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BatchAPIApi(configuration);

let batchRequest: Array<BatchRequest>; //
let enclosingTransaction: boolean; //enclosingTransaction (optional) (default to false)

const { status, data } = await apiInstance.handleBatchRequests(
    batchRequest,
    enclosingTransaction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchRequest** | **Array<BatchRequest>**|  | |
| **enclosingTransaction** | [**boolean**] | enclosingTransaction | (optional) defaults to false|


### Return type

**Array<BatchResponse>**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

