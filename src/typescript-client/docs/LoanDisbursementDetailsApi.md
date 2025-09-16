# LoanDisbursementDetailsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addAndDeleteDisbursementDetail**](#addanddeletedisbursementdetail) | **PUT** /v1/loans/{loanId}/disbursements/editDisbursements | |
|[**retriveDetail**](#retrivedetail) | **GET** /v1/loans/{loanId}/disbursements/{disbursementId} | |
|[**updateDisbursementDate**](#updatedisbursementdate) | **PUT** /v1/loans/{loanId}/disbursements/{disbursementId} | |

# **addAndDeleteDisbursementDetail**
> string addAndDeleteDisbursementDetail(postAddAndDeleteDisbursementDetailRequest)


### Example

```typescript
import {
    LoanDisbursementDetailsApi,
    Configuration,
    PostAddAndDeleteDisbursementDetailRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanDisbursementDetailsApi(configuration);

let loanId: number; // (default to undefined)
let postAddAndDeleteDisbursementDetailRequest: PostAddAndDeleteDisbursementDetailRequest; //

const { status, data } = await apiInstance.addAndDeleteDisbursementDetail(
    loanId,
    postAddAndDeleteDisbursementDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postAddAndDeleteDisbursementDetailRequest** | **PostAddAndDeleteDisbursementDetailRequest**|  | |
| **loanId** | [**number**] |  | defaults to undefined|


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

# **retriveDetail**
> string retriveDetail()


### Example

```typescript
import {
    LoanDisbursementDetailsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanDisbursementDetailsApi(configuration);

let loanId: number; // (default to undefined)
let disbursementId: number; // (default to undefined)

const { status, data } = await apiInstance.retriveDetail(
    loanId,
    disbursementId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **disbursementId** | [**number**] |  | defaults to undefined|


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

# **updateDisbursementDate**
> string updateDisbursementDate()


### Example

```typescript
import {
    LoanDisbursementDetailsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanDisbursementDetailsApi(configuration);

let loanId: number; // (default to undefined)
let disbursementId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateDisbursementDate(
    loanId,
    disbursementId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **loanId** | [**number**] |  | defaults to undefined|
| **disbursementId** | [**number**] |  | defaults to undefined|


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

