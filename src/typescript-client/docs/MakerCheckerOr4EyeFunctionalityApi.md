# MakerCheckerOr4EyeFunctionalityApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**approveMakerCheckerEntry**](#approvemakercheckerentry) | **POST** /v1/makercheckers/{auditId} | Approve Maker Checker Entry | Reject Maker Checker Entry|
|[**deleteMakerCheckerEntry**](#deletemakercheckerentry) | **DELETE** /v1/makercheckers/{auditId} | Delete Maker Checker Entry|
|[**retrieveAuditSearchTemplate1**](#retrieveauditsearchtemplate1) | **GET** /v1/makercheckers/searchtemplate | Maker Checker Search Template|
|[**retrieveCommands**](#retrievecommands) | **GET** /v1/makercheckers | List Maker Checker Entries|

# **approveMakerCheckerEntry**
> PostMakerCheckersResponse approveMakerCheckerEntry()


### Example

```typescript
import {
    MakerCheckerOr4EyeFunctionalityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MakerCheckerOr4EyeFunctionalityApi(configuration);

let auditId: number; //auditId (default to undefined)
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.approveMakerCheckerEntry(
    auditId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **auditId** | [**number**] | auditId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostMakerCheckersResponse**

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

# **deleteMakerCheckerEntry**
> PostMakerCheckersResponse deleteMakerCheckerEntry()


### Example

```typescript
import {
    MakerCheckerOr4EyeFunctionalityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MakerCheckerOr4EyeFunctionalityApi(configuration);

let auditId: number; //auditId (default to undefined)

const { status, data } = await apiInstance.deleteMakerCheckerEntry(
    auditId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **auditId** | [**number**] | auditId | defaults to undefined|


### Return type

**PostMakerCheckersResponse**

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

# **retrieveAuditSearchTemplate1**
> AuditSearchData retrieveAuditSearchTemplate1()

This is a convenience resource. It can be useful when building a Checker Inbox UI. \"appUsers\" are data scoped to the office/branch the requestor is associated with. \"actionNames\" and \"entityNames\" returned are those that the requestor has Checker approval permissions for.  Example Requests:  makercheckers/searchtemplate makercheckers/searchtemplate?fields=entityNames

### Example

```typescript
import {
    MakerCheckerOr4EyeFunctionalityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MakerCheckerOr4EyeFunctionalityApi(configuration);

const { status, data } = await apiInstance.retrieveAuditSearchTemplate1();
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

# **retrieveCommands**
> Array<AuditData> retrieveCommands()

Get a list of entries that can be checked by the requestor that match the criteria supplied.  Example Requests:  makercheckers  makercheckers?fields=madeOnDate,maker,processingResult  makercheckers?makerDateTimeFrom=2013-03-25 08:00:00&makerDateTimeTo=2013-04-04 18:00:00  makercheckers?officeId=1  makercheckers?officeId=1&includeJson=true

### Example

```typescript
import {
    MakerCheckerOr4EyeFunctionalityApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new MakerCheckerOr4EyeFunctionalityApi(configuration);

let actionName: string; // (optional) (default to undefined)
let entityName: string; // (optional) (default to undefined)
let resourceId: number; // (optional) (default to undefined)
let makerId: number; // (optional) (default to undefined)
let makerDateTimeFrom: string; // (optional) (default to undefined)
let makerDateTimeTo: string; // (optional) (default to undefined)
let clientId: number; // (optional) (default to undefined)
let loanid: number; // (optional) (default to undefined)
let officeId: number; // (optional) (default to undefined)
let groupId: number; // (optional) (default to undefined)
let savingsAccountId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveCommands(
    actionName,
    entityName,
    resourceId,
    makerId,
    makerDateTimeFrom,
    makerDateTimeTo,
    clientId,
    loanid,
    officeId,
    groupId,
    savingsAccountId
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
| **clientId** | [**number**] |  | (optional) defaults to undefined|
| **loanid** | [**number**] |  | (optional) defaults to undefined|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **groupId** | [**number**] |  | (optional) defaults to undefined|
| **savingsAccountId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<AuditData>**

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

