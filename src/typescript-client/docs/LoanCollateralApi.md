# LoanCollateralApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCollateral**](#createcollateral) | **POST** /v1/loans/{loanId}/collaterals | Create a Collateral|
|[**deleteCollateral**](#deletecollateral) | **DELETE** /v1/loans/{loanId}/collaterals/{collateralId} | Remove a Collateral|
|[**newCollateralTemplate**](#newcollateraltemplate) | **GET** /v1/loans/{loanId}/collaterals/template | Retrieve Collateral Details Template|
|[**retrieveCollateralDetails**](#retrievecollateraldetails) | **GET** /v1/loans/{loanId}/collaterals | List Loan Collaterals|
|[**retrieveCollateralDetails1**](#retrievecollateraldetails1) | **GET** /v1/loans/{loanId}/collaterals/{collateralId} | Retrieve a Collateral|
|[**updateCollateral**](#updatecollateral) | **PUT** /v1/loans/{loanId}/collaterals/{collateralId} | Update a Collateral|

# **createCollateral**
> PostLoansLoanIdCollateralsResponse createCollateral(loansLoanIdCollateralsRequest)

Note: Currently, Collaterals may be added only before a Loan is approved

### Example

```typescript
import {
    LoanCollateralApi,
    Configuration,
    LoansLoanIdCollateralsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)
let loansLoanIdCollateralsRequest: LoansLoanIdCollateralsRequest; //

const { status, data } = await apiInstance.createCollateral(
    loanId,
    loansLoanIdCollateralsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loansLoanIdCollateralsRequest** | **LoansLoanIdCollateralsRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**PostLoansLoanIdCollateralsResponse**

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

# **deleteCollateral**
> DeleteLoansLoanIdCollateralsCollateralIdResponse deleteCollateral()

Note: A collateral can only be removed from Loans that are not yet approved.

### Example

```typescript
import {
    LoanCollateralApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)
let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.deleteCollateral(
    loanId,
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**DeleteLoansLoanIdCollateralsCollateralIdResponse**

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

# **newCollateralTemplate**
> CollateralData newCollateralTemplate()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  loans/1/collaterals/template

### Example

```typescript
import {
    LoanCollateralApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.newCollateralTemplate(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**CollateralData**

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

# **retrieveCollateralDetails**
> Array<CollateralData> retrieveCollateralDetails()

Example Requests:  loans/1/collaterals   loans/1/collaterals?fields=value,description

### Example

```typescript
import {
    LoanCollateralApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveCollateralDetails(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<CollateralData>**

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

# **retrieveCollateralDetails1**
> GetLoansLoanIdCollateralsResponse retrieveCollateralDetails1()

Example Requests:  /loans/1/collaterals/1   /loans/1/collaterals/1?fields=description,description

### Example

```typescript
import {
    LoanCollateralApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)
let collateralId: number; //collateralId (default to undefined)

const { status, data } = await apiInstance.retrieveCollateralDetails1(
    loanId,
    collateralId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**GetLoansLoanIdCollateralsResponse**

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

# **updateCollateral**
> PutLoansLoanIdCollateralsCollateralIdResponse updateCollateral(loansLoandIdCollateralsCollateralIdRequest)


### Example

```typescript
import {
    LoanCollateralApi,
    Configuration,
    LoansLoandIdCollateralsCollateralIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCollateralApi(configuration);

let loanId: number; //loanId (default to undefined)
let collateralId: number; //collateralId (default to undefined)
let loansLoandIdCollateralsCollateralIdRequest: LoansLoandIdCollateralsCollateralIdRequest; //

const { status, data } = await apiInstance.updateCollateral(
    loanId,
    collateralId,
    loansLoandIdCollateralsCollateralIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loansLoandIdCollateralsCollateralIdRequest** | **LoansLoandIdCollateralsCollateralIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **collateralId** | [**number**] | collateralId | defaults to undefined|


### Return type

**PutLoansLoanIdCollateralsCollateralIdResponse**

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

