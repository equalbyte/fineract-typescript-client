# GroupsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activateOrGenerateCollectionSheet**](#activateorgeneratecollectionsheet) | **POST** /v1/groups/{groupId} | Activate a Group | Associate Clients | Disassociate Clients | Transfer Clients across groups | Generate Collection Sheet | Save Collection Sheet | Unassign a Staff | Assign a Staff | Close a Group | Unassign a Role | Update a Role|
|[**create8**](#create8) | **POST** /v1/groups | Create a Group|
|[**delete11**](#delete11) | **DELETE** /v1/groups/{groupId} | Delete a Group|
|[**getGroupsTemplate**](#getgroupstemplate) | **GET** /v1/groups/downloadtemplate | |
|[**postGroupTemplate**](#postgrouptemplate) | **POST** /v1/groups/uploadtemplate | |
|[**retrieveAccounts**](#retrieveaccounts) | **GET** /v1/groups/{groupId}/accounts | Retrieve Group accounts overview|
|[**retrieveAll24**](#retrieveall24) | **GET** /v1/groups | List Groups|
|[**retrieveGsimAccounts**](#retrievegsimaccounts) | **GET** /v1/groups/{groupId}/gsimaccounts | |
|[**retrieveOne15**](#retrieveone15) | **GET** /v1/groups/{groupId} | Retrieve a Group|
|[**retrieveTemplate7**](#retrievetemplate7) | **GET** /v1/groups/template | Retrieve Group Template|
|[**retrieveglimAccounts**](#retrieveglimaccounts) | **GET** /v1/groups/{groupId}/glimaccounts | |
|[**unassignLoanOfficer**](#unassignloanofficer) | **POST** /v1/groups/{groupId}/command/unassign_staff | Unassign a Staff|
|[**update13**](#update13) | **PUT** /v1/groups/{groupId} | Update a Group|

# **activateOrGenerateCollectionSheet**
> PostGroupsGroupIdResponse activateOrGenerateCollectionSheet(postGroupsGroupIdRequest)

Activate a Group:  Groups can be created in a Pending state. This API exists to enable group activation.    If the group happens to be already active this API will result in an error.  Mandatory Fields: activationDate  Associate Clients:  This API allows to associate existing clients to a group.    The clients are listed from the office to which the group is associated.    If client(s) is already associated with group then API will result in an error.  Mandatory Fields: clientMembers  Disassociate Clients:  This API allows to disassociate clients from a group.    Disassociating a client with active joint liability group loans results in an error.  Mandatory Fields: clientMembers  Transfer Clients across groups:  This API allows to transfer clients from one group to another  Mandatory Fields: destinationGroupId and clients  Optional Fields: inheritDestinationGroupLoanOfficer (defaults to true) and transferActiveLoans (defaults to true)  Generate Collection Sheet:  This API retrieves repayment details of all jlg loans of all members of a group on a specified meeting date.  Mandatory Fields: calendarId and transactionDate  Save Collection Sheet:  This api allows the loan officer to perform bulk repayments of JLG loans for a group on its meeting date.  Mandatory Fields: calendarId, transactionDate, actualDisbursementDate  Optional Fields: clientsAttendance, bulkRepaymentTransaction, bulkDisbursementTransactions  Unassign a Staff:  Allows you to unassign the Staff.  Mandatory Fields: staffId  Assign a Staff:  Allows you to assign Staff to an existing Group.    The selected Staff should be belong to the same office (or an office higher up in the hierarchy) as this groupMandatory Fields: staffId  Optional Fields: inheritStaffForClientAccounts (Optional: Boolean if true all members of the group (i.e all clients with active loans and savings ) will inherit the staffId)  Close a Group:  This API exists to close a group. Groups can be closed if they don\'t have any non-closed clients/loans/savingsAccounts.    If the group has any active clients/loans/savingsAccount, this API will result in an error.Assign a Role:  Allows you to assign a Role to an existing member of a group.    We can define the different roles applicable to group members by adding code values to the pre-defined system code GROUPROLE. Example:Group leader etc.  Mandatory Fields: clientId, role  Unassign a Role:  Allows you to unassign Roles associated tp Group members.  Update a Role:  Allows you to update the member Role.  Mandatory Fields: role  Showing request/response for Transfer Clients across groups

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    PostGroupsGroupIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)
let postGroupsGroupIdRequest: PostGroupsGroupIdRequest; //
let command: string; //command (optional) (default to undefined)
let roleId: number; //roleId (optional) (default to undefined)

const { status, data } = await apiInstance.activateOrGenerateCollectionSheet(
    groupId,
    postGroupsGroupIdRequest,
    command,
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGroupsGroupIdRequest** | **PostGroupsGroupIdRequest**|  | |
| **groupId** | [**number**] | groupId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|
| **roleId** | [**number**] | roleId | (optional) defaults to undefined|


### Return type

**PostGroupsGroupIdResponse**

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

# **create8**
> PostGroupsResponse create8(postGroupsRequest)

Creates a Group  Mandatory Fields: name, officeId, active, activationDate (if active=true)  Optional Fields: externalId, staffId, clientMembers

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    PostGroupsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let postGroupsRequest: PostGroupsRequest; //

const { status, data } = await apiInstance.create8(
    postGroupsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGroupsRequest** | **PostGroupsRequest**|  | |


### Return type

**PostGroupsResponse**

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

# **delete11**
> DeleteGroupsGroupIdResponse delete11()

A group can be deleted if it is in pending state and has no associations - clients, loans or savings

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)

const { status, data } = await apiInstance.delete11(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] | groupId | defaults to undefined|


### Return type

**DeleteGroupsGroupIdResponse**

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

# **getGroupsTemplate**
> getGroupsTemplate()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let officeId: number; // (optional) (default to undefined)
let staffId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getGroupsTemplate(
    officeId,
    staffId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **staffId** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.ms-excel


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postGroupTemplate**
> string postGroupTemplate()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postGroupTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveAccounts**
> GetGroupsGroupIdAccountsResponse retrieveAccounts()

Retrieves details of all Loan and Savings accounts associated with this group.    Example Requests:    groups/1/accounts      groups/1/accounts?fields=loanAccounts,savingsAccounts,memberLoanAccounts,  memberSavingsAccounts

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)

const { status, data } = await apiInstance.retrieveAccounts(
    groupId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] | groupId | defaults to undefined|


### Return type

**GetGroupsGroupIdAccountsResponse**

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

# **retrieveAll24**
> GetGroupsResponse retrieveAll24()

The default implementation of listing Groups returns 200 entries with support for pagination and sorting. Using the parameter limit with description -1 returns all entries.  Example Requests:    groups    groups?fields=name,officeName,joinedDate    groups?offset=10&limit=50    groups?orderBy=name&sortOrder=DESC

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let staffId: number; //staffId (optional) (default to undefined)
let externalId: string; //externalId (optional) (default to undefined)
let name: string; //name (optional) (default to undefined)
let underHierarchy: string; //underHierarchy (optional) (default to undefined)
let paged: boolean; //paged (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let orphansOnly: boolean; //orphansOnly (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll24(
    officeId,
    staffId,
    externalId,
    name,
    underHierarchy,
    paged,
    offset,
    limit,
    orderBy,
    sortOrder,
    orphansOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **staffId** | [**number**] | staffId | (optional) defaults to undefined|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **name** | [**string**] | name | (optional) defaults to undefined|
| **underHierarchy** | [**string**] | underHierarchy | (optional) defaults to undefined|
| **paged** | [**boolean**] | paged | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **orphansOnly** | [**boolean**] | orphansOnly | (optional) defaults to undefined|


### Return type

**GetGroupsResponse**

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

# **retrieveGsimAccounts**
> string retrieveGsimAccounts()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let parentGSIMAccountNo: string; // (optional) (default to undefined)
let parentGSIMId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveGsimAccounts(
    groupId,
    parentGSIMAccountNo,
    parentGSIMId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|
| **parentGSIMAccountNo** | [**string**] |  | (optional) defaults to undefined|
| **parentGSIMId** | [**number**] |  | (optional) defaults to undefined|


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

# **retrieveOne15**
> GetGroupsGroupIdResponse retrieveOne15()

Retrieve group information.  Example Requests:    groups/1    groups/1?associations=clientMembers

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)
let roleId: number; //roleId (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOne15(
    groupId,
    staffInSelectedOfficeOnly,
    roleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] | groupId | defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|
| **roleId** | [**number**] | roleId | (optional) defaults to undefined|


### Return type

**GetGroupsGroupIdResponse**

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

# **retrieveTemplate7**
> GetGroupsTemplateResponse retrieveTemplate7()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    groups/template    groups/template?officeId=2    groups/template?centerId=1    groups/template?centerId=1&staffInSelectedOfficeOnly=true

### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let center: boolean; //center (optional) (default to undefined)
let centerId: number; //centerId (optional) (default to undefined)
let command: string; //command (optional) (default to undefined)
let staffInSelectedOfficeOnly: boolean; //staffInSelectedOfficeOnly (optional) (default to false)

const { status, data } = await apiInstance.retrieveTemplate7(
    officeId,
    center,
    centerId,
    command,
    staffInSelectedOfficeOnly
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **center** | [**boolean**] | center | (optional) defaults to undefined|
| **centerId** | [**number**] | centerId | (optional) defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|
| **staffInSelectedOfficeOnly** | [**boolean**] | staffInSelectedOfficeOnly | (optional) defaults to false|


### Return type

**GetGroupsTemplateResponse**

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

# **retrieveglimAccounts**
> string retrieveglimAccounts()


### Example

```typescript
import {
    GroupsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; // (default to undefined)
let parentLoanAccountNo: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveglimAccounts(
    groupId,
    parentLoanAccountNo
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**number**] |  | defaults to undefined|
| **parentLoanAccountNo** | [**string**] |  | (optional) defaults to undefined|


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

# **unassignLoanOfficer**
> PostGroupsGroupIdCommandUnassignStaffResponse unassignLoanOfficer(postGroupsGroupIdCommandUnassignStaffRequest)

Allows you to unassign the Staff.  Mandatory Fields: staffId

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    PostGroupsGroupIdCommandUnassignStaffRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)
let postGroupsGroupIdCommandUnassignStaffRequest: PostGroupsGroupIdCommandUnassignStaffRequest; //

const { status, data } = await apiInstance.unassignLoanOfficer(
    groupId,
    postGroupsGroupIdCommandUnassignStaffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postGroupsGroupIdCommandUnassignStaffRequest** | **PostGroupsGroupIdCommandUnassignStaffRequest**|  | |
| **groupId** | [**number**] | groupId | defaults to undefined|


### Return type

**PostGroupsGroupIdCommandUnassignStaffResponse**

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

# **update13**
> PutGroupsGroupIdResponse update13(putGroupsGroupIdRequest)

Updates a Group

### Example

```typescript
import {
    GroupsApi,
    Configuration,
    PutGroupsGroupIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GroupsApi(configuration);

let groupId: number; //groupId (default to undefined)
let putGroupsGroupIdRequest: PutGroupsGroupIdRequest; //

const { status, data } = await apiInstance.update13(
    groupId,
    putGroupsGroupIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putGroupsGroupIdRequest** | **PutGroupsGroupIdRequest**|  | |
| **groupId** | [**number**] | groupId | defaults to undefined|


### Return type

**PutGroupsGroupIdResponse**

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

