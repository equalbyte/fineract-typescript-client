# StandingInstructionsHistoryApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAll20**](#retrieveall20) | **GET** /v1/standinginstructionrunhistory | Standing Instructions Logged History|

# **retrieveAll20**
> GetStandingInstructionRunHistoryResponse retrieveAll20()

The list capability of history can support pagination and sorting   Example Requests :  standinginstructionrunhistory  standinginstructionrunhistory?orderBy=name&sortOrder=DESC  standinginstructionrunhistory?offset=10&limit=50

### Example

```typescript
import {
    StandingInstructionsHistoryApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsHistoryApi(configuration);

let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let transferType: number; //transferType (optional) (default to undefined)
let clientName: string; //clientName (optional) (default to undefined)
let clientId: number; //clientId (optional) (default to undefined)
let fromAccountId: number; //fromAccountId (optional) (default to undefined)
let fromAccountType: number; //fromAccountType (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let fromDate: object; //fromDate (optional) (default to undefined)
let toDate: object; //toDate (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll20(
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder,
    transferType,
    clientName,
    clientId,
    fromAccountId,
    fromAccountType,
    locale,
    dateFormat,
    fromDate,
    toDate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **transferType** | [**number**] | transferType | (optional) defaults to undefined|
| **clientName** | [**string**] | clientName | (optional) defaults to undefined|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **fromAccountId** | [**number**] | fromAccountId | (optional) defaults to undefined|
| **fromAccountType** | [**number**] | fromAccountType | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **fromDate** | **object** | fromDate | (optional) defaults to undefined|
| **toDate** | **object** | toDate | (optional) defaults to undefined|


### Return type

**GetStandingInstructionRunHistoryResponse**

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

