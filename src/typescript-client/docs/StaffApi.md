# StaffApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create3**](#create3) | **POST** /v1/staff | Create a staff member|
|[**getTemplate1**](#gettemplate1) | **GET** /v1/staff/downloadtemplate | |
|[**postTemplate**](#posttemplate) | **POST** /v1/staff/uploadtemplate | |
|[**retrieveAll16**](#retrieveall16) | **GET** /v1/staff | Retrieve Staff|
|[**retrieveOne8**](#retrieveone8) | **GET** /v1/staff/{staffId} | Retrieve a Staff Member|
|[**update7**](#update7) | **PUT** /v1/staff/{staffId} | Update a Staff Member|

# **create3**
> CreateStaffResponse create3(staffRequest)

Creates a staff member.  Mandatory Fields:  officeId, firstname, lastname  Optional Fields:  isLoanOfficer, isActive

### Example

```typescript
import {
    StaffApi,
    Configuration,
    StaffRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let staffRequest: StaffRequest; //

const { status, data } = await apiInstance.create3(
    staffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffRequest** | **StaffRequest**|  | |


### Return type

**CreateStaffResponse**

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

# **getTemplate1**
> getTemplate1()


### Example

```typescript
import {
    StaffApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTemplate1(
    officeId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
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

# **postTemplate**
> number postTemplate()


### Example

```typescript
import {
    StaffApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postTemplate(
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

**number**

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

# **retrieveAll16**
> Array<StaffData> retrieveAll16()

Returns the list of staff members.  Example Requests:  staff     Retrieve a Staff by status  Returns the details of a Staff based on status.  By default it Returns all the ACTIVE Staff.  If status=INACTIVE, then it returns all INACTIVE Staff.  and for status=ALL, it Returns both ACTIVE and INACTIVE Staff.  Example Requests:  staff?status=active

### Example

```typescript
import {
    StaffApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let staffInOfficeHierarchy: boolean; //staffInOfficeHierarchy (optional) (default to false)
let loanOfficersOnly: boolean; //loanOfficersOnly (optional) (default to false)
let status: string; //status (optional) (default to 'active')

const { status, data } = await apiInstance.retrieveAll16(
    officeId,
    staffInOfficeHierarchy,
    loanOfficersOnly,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **staffInOfficeHierarchy** | [**boolean**] | staffInOfficeHierarchy | (optional) defaults to false|
| **loanOfficersOnly** | [**boolean**] | loanOfficersOnly | (optional) defaults to false|
| **status** | [**string**] | status | (optional) defaults to 'active'|


### Return type

**Array<StaffData>**

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

# **retrieveOne8**
> StaffData retrieveOne8()

Returns the details of a Staff Member.  Example Requests:  staff/1

### Example

```typescript
import {
    StaffApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let staffId: number; //staffId (default to undefined)

const { status, data } = await apiInstance.retrieveOne8(
    staffId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **staffId** | [**number**] | staffId | defaults to undefined|


### Return type

**StaffData**

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

# **update7**
> UpdateStaffResponse update7(putStaffRequest)

Updates the details of a staff member.

### Example

```typescript
import {
    StaffApi,
    Configuration,
    PutStaffRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StaffApi(configuration);

let staffId: number; //staffId (default to undefined)
let putStaffRequest: PutStaffRequest; //

const { status, data } = await apiInstance.update7(
    staffId,
    putStaffRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putStaffRequest** | **PutStaffRequest**|  | |
| **staffId** | [**number**] | staffId | defaults to undefined|


### Return type

**UpdateStaffResponse**

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

