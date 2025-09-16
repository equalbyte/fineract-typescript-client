# AuditsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveAuditEntries**](#retrieveauditentries) | **GET** /v1/audits | List Audits|
|[**retrieveAuditEntry**](#retrieveauditentry) | **GET** /v1/audits/{auditId} | Retrieve an Audit Entry|
|[**retrieveAuditSearchTemplate**](#retrieveauditsearchtemplate) | **GET** /v1/audits/searchtemplate | Audit Search Template|

# **retrieveAuditEntries**
> string retrieveAuditEntries()

Get a 200 list of audits that match the criteria supplied and sorted by audit id in descending order, and are within the requestors\' data scope. Also it supports pagination and sorting  Example Requests:  audits  audits?fields=madeOnDate,maker,processingResult  audits?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  audits?officeId=1  audits?officeId=1&includeJson=true

### Example

```typescript
import {
    AuditsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AuditsApi(configuration);

let actionName: string; // (optional) (default to undefined)
let entityName: string; // (optional) (default to undefined)
let resourceId: number; // (optional) (default to undefined)
let makerId: number; // (optional) (default to undefined)
let makerDateTimeFrom: string; // (optional) (default to undefined)
let makerDateTimeTo: string; // (optional) (default to undefined)
let checkerId: number; // (optional) (default to undefined)
let checkerDateTimeFrom: string; // (optional) (default to undefined)
let checkerDateTimeTo: string; // (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let clientId: number; // (optional) (default to undefined)
let loanId: number; // (optional) (default to undefined)
let officeId: number; // (optional) (default to undefined)
let groupId: number; // (optional) (default to undefined)
let savingsAccountId: number; // (optional) (default to undefined)
let processingResult: string; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let paged: boolean; //paged (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAuditEntries(
    actionName,
    entityName,
    resourceId,
    makerId,
    makerDateTimeFrom,
    makerDateTimeTo,
    checkerId,
    checkerDateTimeFrom,
    checkerDateTimeTo,
    status,
    clientId,
    loanId,
    officeId,
    groupId,
    savingsAccountId,
    processingResult,
    dateFormat,
    locale,
    offset,
    limit,
    orderBy,
    sortOrder,
    paged
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **actionName** | [**string**] |  | (optional) defaults to undefined|
| **entityName** | [**string**] |  | (optional) defaults to undefined|
| **resourceId** | [**number**] |  | (optional) defaults to undefined|
| **makerId** | [**number**] |  | (optional) defaults to undefined|
| **makerDateTimeFrom** | [**string**] |  | (optional) defaults to undefined|
| **makerDateTimeTo** | [**string**] |  | (optional) defaults to undefined|
| **checkerId** | [**number**] |  | (optional) defaults to undefined|
| **checkerDateTimeFrom** | [**string**] |  | (optional) defaults to undefined|
| **checkerDateTimeTo** | [**string**] |  | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **clientId** | [**number**] |  | (optional) defaults to undefined|
| **loanId** | [**number**] |  | (optional) defaults to undefined|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **groupId** | [**number**] |  | (optional) defaults to undefined|
| **savingsAccountId** | [**number**] |  | (optional) defaults to undefined|
| **processingResult** | [**string**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **paged** | [**boolean**] | paged | (optional) defaults to undefined|


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

# **retrieveAuditEntry**
> AuditData retrieveAuditEntry()

Example Requests:  audits/20 audits/20?fields=madeOnDate,maker,processingResult

### Example

```typescript
import {
    AuditsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AuditsApi(configuration);

let auditId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveAuditEntry(
    auditId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **auditId** | [**number**] |  | defaults to undefined|


### Return type

**AuditData**

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

# **retrieveAuditSearchTemplate**
> AuditSearchData retrieveAuditSearchTemplate()

This is a convenience resource. It can be useful when building an Audit Search UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with.  Example Requests:  audits/searchtemplate audits/searchtemplate?fields=actionNames

### Example

```typescript
import {
    AuditsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AuditsApi(configuration);

const { status, data } = await apiInstance.retrieveAuditSearchTemplate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AuditSearchData**

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

