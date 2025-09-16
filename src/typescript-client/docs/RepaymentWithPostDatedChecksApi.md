# RepaymentWithPostDatedChecksApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deletePostDatedCheck**](#deletepostdatedcheck) | **DELETE** /v1/loans/{loanId}/postdatedchecks/{postDatedCheckId} | Delete Post Dated Check|
|[**getPostDatedCheck**](#getpostdatedcheck) | **GET** /v1/loans/{loanId}/postdatedchecks/{installmentId} | Get Post Dated Check|
|[**getPostDatedChecks**](#getpostdatedchecks) | **GET** /v1/loans/{loanId}/postdatedchecks | Get All Post Dated Checks|
|[**updatePostDatedChecks**](#updatepostdatedchecks) | **PUT** /v1/loans/{loanId}/postdatedchecks/{postDatedCheckId} | Update Post Dated Check, Bounced Check|

# **deletePostDatedCheck**
> Array<DeletePostDatedCheck> deletePostDatedCheck()

Delete Post Dated Check

### Example

```typescript
import {
    RepaymentWithPostDatedChecksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RepaymentWithPostDatedChecksApi(configuration);

let postDatedCheckId: number; //postDatedCheckId (default to undefined)
let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.deletePostDatedCheck(
    postDatedCheckId,
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDatedCheckId** | [**number**] | postDatedCheckId | defaults to undefined|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<DeletePostDatedCheck>**

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

# **getPostDatedCheck**
> Array<GetPostDatedChecks> getPostDatedCheck()

Get Post Dated Check

### Example

```typescript
import {
    RepaymentWithPostDatedChecksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RepaymentWithPostDatedChecksApi(configuration);

let installmentId: number; //installmentId (default to undefined)
let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.getPostDatedCheck(
    installmentId,
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **installmentId** | [**number**] | installmentId | defaults to undefined|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetPostDatedChecks>**

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

# **getPostDatedChecks**
> Array<GetPostDatedChecks> getPostDatedChecks()

Get All Post dated Checks

### Example

```typescript
import {
    RepaymentWithPostDatedChecksApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RepaymentWithPostDatedChecksApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.getPostDatedChecks(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetPostDatedChecks>**

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

# **updatePostDatedChecks**
> Array<UpdatePostDatedCheckResponse> updatePostDatedChecks(updatePostDatedCheckRequest)

Update Post Dated Check, Bounced Check

### Example

```typescript
import {
    RepaymentWithPostDatedChecksApi,
    Configuration,
    UpdatePostDatedCheckRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new RepaymentWithPostDatedChecksApi(configuration);

let postDatedCheckId: number; //postDatedCheckId (default to undefined)
let loanId: number; //loanId (default to undefined)
let updatePostDatedCheckRequest: UpdatePostDatedCheckRequest; //
let editType: string; //editType (optional) (default to undefined)

const { status, data } = await apiInstance.updatePostDatedChecks(
    postDatedCheckId,
    loanId,
    updatePostDatedCheckRequest,
    editType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePostDatedCheckRequest** | **UpdatePostDatedCheckRequest**|  | |
| **postDatedCheckId** | [**number**] | postDatedCheckId | defaults to undefined|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **editType** | [**string**] | editType | (optional) defaults to undefined|


### Return type

**Array<UpdatePostDatedCheckResponse>**

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

