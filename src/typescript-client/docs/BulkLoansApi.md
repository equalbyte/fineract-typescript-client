# BulkLoansApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**loanReassignment**](#loanreassignment) | **POST** /v1/loans/loanreassignment | |
|[**loanReassignmentTemplate**](#loanreassignmenttemplate) | **GET** /v1/loans/loanreassignment/template | |

# **loanReassignment**
> string loanReassignment()


### Example

```typescript
import {
    BulkLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BulkLoansApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.loanReassignment(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


### Return type

**string**

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

# **loanReassignmentTemplate**
> string loanReassignmentTemplate()


### Example

```typescript
import {
    BulkLoansApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new BulkLoansApi(configuration);

let officeId: number; // (optional) (default to undefined)
let fromLoanOfficerId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.loanReassignmentTemplate(
    officeId,
    fromLoanOfficerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **fromLoanOfficerId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**string**

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

