# PocketApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**handleCommands8**](#handlecommands8) | **POST** /v1/self/pockets | Link/delink accounts to/from pocket|
|[**retrieveAll37**](#retrieveall37) | **GET** /v1/self/pockets | Retrieve accounts linked to pocket|

# **handleCommands8**
> PostLinkDelinkAccountsToFromPocketResponse handleCommands8()

Pockets behave as favourites. An user can link his/her Loan, Savings and Share accounts to pocket for faster access. In a similar way linked accounts can be delinked from the pocket.  Example Requests:  self/pockets?command=linkAccounts  self/pockets?command=delinkAccounts

### Example

```typescript
import {
    PocketApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PocketApi(configuration);

let command: string; //command (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.handleCommands8(
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLinkDelinkAccountsToFromPocketResponse**

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

# **retrieveAll37**
> GetAccountsLinkedToPocketResponse retrieveAll37()

All linked loan  Example Requests:   self/pockets

### Example

```typescript
import {
    PocketApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new PocketApi(configuration);

const { status, data } = await apiInstance.retrieveAll37();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetAccountsLinkedToPocketResponse**

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

