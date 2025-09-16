# LoanCollateralManagementApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteLoanCollateral**](#deleteloancollateral) | **DELETE** /v1/loan-collateral-management/{id} | Delete Loan Collateral|
|[**getLoanCollateral**](#getloancollateral) | **GET** /v1/loan-collateral-management/{collateralId} | Get Loan Collateral Details|

# **deleteLoanCollateral**
> CommandProcessingResult deleteLoanCollateral()

Delete Loan Collateral

### Example

```typescript
import {
    LoanCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralManagementApi(configuration);

let loanId: number; //loanId (default to undefined)
let id: number; //loan collateral id (default to undefined)

const { status, data } = await apiInstance.deleteLoanCollateral(
    loanId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **id** | [**number**] | loan collateral id | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **getLoanCollateral**
> LoanCollateralResponseData getLoanCollateral()

Get Loan Collateral Details

### Example

```typescript
import {
    LoanCollateralManagementApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralManagementApi(configuration);

let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.getLoanCollateral(
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**LoanCollateralResponseData**

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

