# LoanChargesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteLoanCharge**](#deleteloancharge) | **DELETE** /v1/loans/{loanId}/charges/{loanChargeId} | Delete a Loan Charge|
|[**deleteLoanCharge1**](#deleteloancharge1) | **DELETE** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Delete a Loan Charge|
|[**deleteLoanCharge2**](#deleteloancharge2) | **DELETE** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Delete a Loan Charge|
|[**deleteLoanCharge3**](#deleteloancharge3) | **DELETE** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Delete a Loan Charge|
|[**executeLoanCharge**](#executeloancharge) | **POST** /v1/loans/{loanId}/charges | Create a Loan Charge (no command provided) or Pay a charge (command&#x3D;pay)|
|[**executeLoanCharge1**](#executeloancharge1) | **POST** /v1/loans/external-id/{loanExternalId}/charges | Create a Loan Charge (no command provided) or Pay a charge (command&#x3D;pay)|
|[**executeLoanCharge2**](#executeloancharge2) | **POST** /v1/loans/{loanId}/charges/{loanChargeId} | Pay / Waive / Adjustment for Loan Charge|
|[**executeLoanCharge3**](#executeloancharge3) | **POST** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Pay / Waive / Adjustment for Loan Charge|
|[**executeLoanCharge4**](#executeloancharge4) | **POST** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Pay / Waive / Adjustment for Loan Charge|
|[**executeLoanCharge5**](#executeloancharge5) | **POST** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Pay / Waive / Adjustment for Loan Charge|
|[**retrieveAllLoanCharges**](#retrieveallloancharges) | **GET** /v1/loans/{loanId}/charges | List Loan Charges|
|[**retrieveAllLoanCharges1**](#retrieveallloancharges1) | **GET** /v1/loans/external-id/{loanExternalId}/charges | List Loan Charges|
|[**retrieveLoanCharge**](#retrieveloancharge) | **GET** /v1/loans/{loanId}/charges/{loanChargeId} | Retrieve a Loan Charge|
|[**retrieveLoanCharge1**](#retrieveloancharge1) | **GET** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Retrieve a Loan Charge|
|[**retrieveLoanCharge2**](#retrieveloancharge2) | **GET** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Retrieve a Loan Charge|
|[**retrieveLoanCharge3**](#retrieveloancharge3) | **GET** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Retrieve a Loan Charge|
|[**retrieveTemplate8**](#retrievetemplate8) | **GET** /v1/loans/{loanId}/charges/template | Retrieve Loan Charges Template|
|[**retrieveTemplate9**](#retrievetemplate9) | **GET** /v1/loans/external-id/{loanExternalId}/charges/template | Retrieve Loan Charges Template|
|[**updateLoanCharge**](#updateloancharge) | **PUT** /v1/loans/{loanId}/charges/{loanChargeId} | Update a Loan Charge|
|[**updateLoanCharge1**](#updateloancharge1) | **PUT** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Update a Loan Charge|
|[**updateLoanCharge2**](#updateloancharge2) | **PUT** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Update a Loan Charge|
|[**updateLoanCharge3**](#updateloancharge3) | **PUT** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Update a Loan Charge|

# **deleteLoanCharge**
> DeleteLoansLoanIdChargesChargeIdResponse deleteLoanCharge()

Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)

const { status, data } = await apiInstance.deleteLoanCharge(
    loanId,
    loanChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**DeleteLoansLoanIdChargesChargeIdResponse**

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

# **deleteLoanCharge1**
> DeleteLoansLoanIdChargesChargeIdResponse deleteLoanCharge1()

Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)

const { status, data } = await apiInstance.deleteLoanCharge1(
    loanId,
    loanChargeExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**DeleteLoansLoanIdChargesChargeIdResponse**

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

# **deleteLoanCharge2**
> DeleteLoansLoanIdChargesChargeIdResponse deleteLoanCharge2()

Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)

const { status, data } = await apiInstance.deleteLoanCharge2(
    loanExternalId,
    loanChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**DeleteLoansLoanIdChargesChargeIdResponse**

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

# **deleteLoanCharge3**
> DeleteLoansLoanIdChargesChargeIdResponse deleteLoanCharge3()

Note: Currently, A Loan Charge may only be removed from Loans that are not yet approved.

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)

const { status, data } = await apiInstance.deleteLoanCharge3(
    loanExternalId,
    loanChargeExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**DeleteLoansLoanIdChargesChargeIdResponse**

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

# **executeLoanCharge**
> PostLoansLoanIdChargesResponse executeLoanCharge(postLoansLoanIdChargesRequest)

Creates a Loan Charge | Pay a Loan Charge

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge(
    loanId,
    postLoansLoanIdChargesRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesRequest** | **PostLoansLoanIdChargesRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesResponse**

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

# **executeLoanCharge1**
> PostLoansLoanIdChargesResponse executeLoanCharge1(postLoansLoanIdChargesRequest)

Creates a Loan Charge | Pay a Loan Charge

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let postLoansLoanIdChargesRequest: PostLoansLoanIdChargesRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge1(
    loanExternalId,
    postLoansLoanIdChargesRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesRequest** | **PostLoansLoanIdChargesRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesResponse**

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

# **executeLoanCharge2**
> PostLoansLoanIdChargesChargeIdResponse executeLoanCharge2(postLoansLoanIdChargesChargeIdRequest)

Loan Charge will be paid if the loan is linked with a savings account | Waive Loan Charge | Add Charge Adjustment

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)
let postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge2(
    loanId,
    loanChargeId,
    postLoansLoanIdChargesChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesChargeIdRequest** | **PostLoansLoanIdChargesChargeIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesChargeIdResponse**

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

# **executeLoanCharge3**
> PostLoansLoanIdChargesChargeIdResponse executeLoanCharge3(postLoansLoanIdChargesChargeIdRequest)

Loan Charge will be paid if the loan is linked with a savings account | Waive Loan Charge | Add Charge Adjustment

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)
let postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge3(
    loanId,
    loanChargeExternalId,
    postLoansLoanIdChargesChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesChargeIdRequest** | **PostLoansLoanIdChargesChargeIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesChargeIdResponse**

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

# **executeLoanCharge4**
> PostLoansLoanIdChargesChargeIdResponse executeLoanCharge4(postLoansLoanIdChargesChargeIdRequest)

Loan Charge will be paid if the loan is linked with a savings account | Waive Loan Charge | Add Charge Adjustment

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)
let postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge4(
    loanExternalId,
    loanChargeId,
    postLoansLoanIdChargesChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesChargeIdRequest** | **PostLoansLoanIdChargesChargeIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesChargeIdResponse**

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

# **executeLoanCharge5**
> PostLoansLoanIdChargesChargeIdResponse executeLoanCharge5(postLoansLoanIdChargesChargeIdRequest)

Loan Charge will be paid if the loan is linked with a savings account | Waive Loan Charge | Add Charge Adjustment

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PostLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)
let postLoansLoanIdChargesChargeIdRequest: PostLoansLoanIdChargesChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.executeLoanCharge5(
    loanExternalId,
    loanChargeExternalId,
    postLoansLoanIdChargesChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postLoansLoanIdChargesChargeIdRequest** | **PostLoansLoanIdChargesChargeIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostLoansLoanIdChargesChargeIdResponse**

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

# **retrieveAllLoanCharges**
> Array<GetLoansLoanIdChargesChargeIdResponse> retrieveAllLoanCharges()

It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveAllLoanCharges(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<GetLoansLoanIdChargesChargeIdResponse>**

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

# **retrieveAllLoanCharges1**
> Array<GetLoansLoanIdChargesChargeIdResponse> retrieveAllLoanCharges1()

It lists all the Loan Charges specific to a Loan   Example Requests:  loans/1/charges   loans/1/charges?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveAllLoanCharges1(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<GetLoansLoanIdChargesChargeIdResponse>**

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

# **retrieveLoanCharge**
> GetLoansLoanIdChargesChargeIdResponse retrieveLoanCharge()

Retrieves Loan Charge according to the Loan ID and Loan Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanCharge(
    loanId,
    loanChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesChargeIdResponse**

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

# **retrieveLoanCharge1**
> GetLoansLoanIdChargesChargeIdResponse retrieveLoanCharge1()

Retrieves Loan Charge according to the Loan ID and Loan Charge External IDExample Requests:  /loans/1/charges/1   /loans/1/charges/external-id/1?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanCharge1(
    loanId,
    loanChargeExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesChargeIdResponse**

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

# **retrieveLoanCharge2**
> GetLoansLoanIdChargesChargeIdResponse retrieveLoanCharge2()

Retrieves Loan Charge according to the Loan external ID and Loan Charge IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanCharge2(
    loanExternalId,
    loanChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesChargeIdResponse**

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

# **retrieveLoanCharge3**
> GetLoansLoanIdChargesChargeIdResponse retrieveLoanCharge3()

Retrieves Loan Charge according to the Loan External ID and Loan Charge External IDExample Requests:  /loans/1/charges/1   /loans/1/charges/1?fields=name,amountOrPercentage

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveLoanCharge3(
    loanExternalId,
    loanChargeExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesChargeIdResponse**

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

# **retrieveTemplate8**
> GetLoansLoanIdChargesTemplateResponse retrieveTemplate8()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate8(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesTemplateResponse**

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

# **retrieveTemplate9**
> GetLoansLoanIdChargesTemplateResponse retrieveTemplate9()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  loans/1/charges/template  

### Example

```typescript
import {
    LoanChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate9(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**GetLoansLoanIdChargesTemplateResponse**

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

# **updateLoanCharge**
> PutLoansLoanIdChargesChargeIdResponse updateLoanCharge(putLoansLoanIdChargesChargeIdRequest)

Currently Loan Charges may be updated only if the Loan is not yet approved

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PutLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)
let putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest; //

const { status, data } = await apiInstance.updateLoanCharge(
    loanId,
    loanChargeId,
    putLoansLoanIdChargesChargeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdChargesChargeIdRequest** | **PutLoansLoanIdChargesChargeIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**PutLoansLoanIdChargesChargeIdResponse**

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

# **updateLoanCharge1**
> PutLoansLoanIdChargesChargeIdResponse updateLoanCharge1(putLoansLoanIdChargesChargeIdRequest)

Currently Loan Charges may be updated only if the Loan is not yet approved

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PutLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanId: number; //loanId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)
let putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest; //

const { status, data } = await apiInstance.updateLoanCharge1(
    loanId,
    loanChargeExternalId,
    putLoansLoanIdChargesChargeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdChargesChargeIdRequest** | **PutLoansLoanIdChargesChargeIdRequest**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**PutLoansLoanIdChargesChargeIdResponse**

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

# **updateLoanCharge2**
> PutLoansLoanIdChargesChargeIdResponse updateLoanCharge2(putLoansLoanIdChargesChargeIdRequest)

Currently Loan Charges may be updated only if the Loan is not yet approved

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PutLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeId: number; //loanChargeId (default to undefined)
let putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest; //

const { status, data } = await apiInstance.updateLoanCharge2(
    loanExternalId,
    loanChargeId,
    putLoansLoanIdChargesChargeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdChargesChargeIdRequest** | **PutLoansLoanIdChargesChargeIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeId** | [**number**] | loanChargeId | defaults to undefined|


### Return type

**PutLoansLoanIdChargesChargeIdResponse**

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

# **updateLoanCharge3**
> PutLoansLoanIdChargesChargeIdResponse updateLoanCharge3(putLoansLoanIdChargesChargeIdRequest)

Currently Loan Charges may be updated only if the Loan is not yet approved

### Example

```typescript
import {
    LoanChargesApi,
    Configuration,
    PutLoansLoanIdChargesChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanChargesApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let loanChargeExternalId: string; //loanChargeExternalId (default to undefined)
let putLoansLoanIdChargesChargeIdRequest: PutLoansLoanIdChargesChargeIdRequest; //

const { status, data } = await apiInstance.updateLoanCharge3(
    loanExternalId,
    loanChargeExternalId,
    putLoansLoanIdChargesChargeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putLoansLoanIdChargesChargeIdRequest** | **PutLoansLoanIdChargesChargeIdRequest**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **loanChargeExternalId** | [**string**] | loanChargeExternalId | defaults to undefined|


### Return type

**PutLoansLoanIdChargesChargeIdResponse**

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

