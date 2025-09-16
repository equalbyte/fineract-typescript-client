# SavingsChargesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addSavingsAccountCharge**](#addsavingsaccountcharge) | **POST** /v1/savingsaccounts/{savingsAccountId}/charges | Create a Savings account Charge|
|[**deleteSavingsAccountCharge**](#deletesavingsaccountcharge) | **DELETE** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Delete a Savings account Charge|
|[**payOrWaiveSavingsAccountCharge**](#payorwaivesavingsaccountcharge) | **POST** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Pay a Savings account Charge | Waive off a Savings account Charge | Inactivate a Savings account Charge|
|[**retrieveAllSavingsAccountCharges**](#retrieveallsavingsaccountcharges) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges | List Savings Charges|
|[**retrieveSavingsAccountCharge**](#retrievesavingsaccountcharge) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Retrieve a Savings account Charge|
|[**retrieveTemplate18**](#retrievetemplate18) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges/template | Retrieve Savings Charges Template|
|[**updateSavingsAccountCharge**](#updatesavingsaccountcharge) | **PUT** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Update a Savings account Charge|

# **addSavingsAccountCharge**
> PostSavingsAccountsSavingsAccountIdChargesResponse addSavingsAccountCharge(postSavingsAccountsSavingsAccountIdChargesRequest)

Creates a Savings account Charge  Mandatory Fields for Savings account Charges: chargeId, amount  chargeId, amount, dueDate, dateFormat, locale  chargeId, amount, feeOnMonthDay, monthDayFormat, locale

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration,
    PostSavingsAccountsSavingsAccountIdChargesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let postSavingsAccountsSavingsAccountIdChargesRequest: PostSavingsAccountsSavingsAccountIdChargesRequest; //

const { status, data } = await apiInstance.addSavingsAccountCharge(
    savingsAccountId,
    postSavingsAccountsSavingsAccountIdChargesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountsSavingsAccountIdChargesRequest** | **PostSavingsAccountsSavingsAccountIdChargesRequest**|  | |
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|


### Return type

**PostSavingsAccountsSavingsAccountIdChargesResponse**

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

# **deleteSavingsAccountCharge**
> DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse deleteSavingsAccountCharge()

Note: Currently, A Savings account Charge may only be removed from Savings that are not yet approved.

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let savingsAccountChargeId: number; //savingsAccountChargeId (default to undefined)

const { status, data } = await apiInstance.deleteSavingsAccountCharge(
    savingsAccountId,
    savingsAccountChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|
| **savingsAccountChargeId** | [**number**] | savingsAccountChargeId | defaults to undefined|


### Return type

**DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse**

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

# **payOrWaiveSavingsAccountCharge**
> PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse payOrWaiveSavingsAccountCharge(postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest)

Pay a Savings account Charge:  An active charge will be paid when savings account is active and having sufficient balance.  Waive off a Savings account Charge:  Outstanding charge amount will be waived off.  Inactivate a Savings account Charge:  A charge will be allowed to inactivate when savings account is active and not having any dues as of today. If charge is overpaid, corresponding charge payment transactions will be reversed.  Showing request/response for \'Pay a Savings account Charge\'

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration,
    PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let savingsAccountChargeId: number; //savingsAccountChargeId (default to undefined)
let postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest: PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest; //
let command: string; //command (optional) (default to undefined)

const { status, data } = await apiInstance.payOrWaiveSavingsAccountCharge(
    savingsAccountId,
    savingsAccountChargeId,
    postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest** | **PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest**|  | |
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|
| **savingsAccountChargeId** | [**number**] | savingsAccountChargeId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse**

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

# **retrieveAllSavingsAccountCharges**
> Array<GetSavingsAccountsSavingsAccountIdChargesResponse> retrieveAllSavingsAccountCharges()

Lists Savings Charges  Example Requests:  savingsaccounts/1/charges  savingsaccounts/1/charges?chargeStatus=all  savingsaccounts/1/charges?chargeStatus=inactive  savingsaccounts/1/charges?chargeStatus=active  savingsaccounts/1/charges?fields=name,amountOrPercentage

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let chargeStatus: string; //chargeStatus (optional) (default to 'all')

const { status, data } = await apiInstance.retrieveAllSavingsAccountCharges(
    savingsAccountId,
    chargeStatus
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|
| **chargeStatus** | [**string**] | chargeStatus | (optional) defaults to 'all'|


### Return type

**Array<GetSavingsAccountsSavingsAccountIdChargesResponse>**

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

# **retrieveSavingsAccountCharge**
> GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse retrieveSavingsAccountCharge()

Retrieves a Savings account Charge  Example Requests:  /savingsaccounts/1/charges/5   /savingsaccounts/1/charges/5?fields=name,amountOrPercentage

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let savingsAccountChargeId: number; //savingsAccountChargeId (default to undefined)

const { status, data } = await apiInstance.retrieveSavingsAccountCharge(
    savingsAccountId,
    savingsAccountChargeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|
| **savingsAccountChargeId** | [**number**] | savingsAccountChargeId | defaults to undefined|


### Return type

**GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse**

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

# **retrieveTemplate18**
> GetSavingsAccountsSavingsAccountIdChargesTemplateResponse retrieveTemplate18()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed description Lists Example Request:  savingsaccounts/1/charges/template

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)

const { status, data } = await apiInstance.retrieveTemplate18(
    savingsAccountId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|


### Return type

**GetSavingsAccountsSavingsAccountIdChargesTemplateResponse**

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

# **updateSavingsAccountCharge**
> PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse updateSavingsAccountCharge(putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest)

Currently Savings account Charges may be updated only if the Savings account is not yet approved.

### Example

```typescript
import {
    SavingsChargesApi,
    Configuration,
    PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SavingsChargesApi(configuration);

let savingsAccountId: number; //savingsAccountId (default to undefined)
let savingsAccountChargeId: number; //savingsAccountChargeId (default to undefined)
let putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest: PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest; //

const { status, data } = await apiInstance.updateSavingsAccountCharge(
    savingsAccountId,
    savingsAccountChargeId,
    putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest** | **PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest**|  | |
| **savingsAccountId** | [**number**] | savingsAccountId | defaults to undefined|
| **savingsAccountChargeId** | [**number**] | savingsAccountChargeId | defaults to undefined|


### Return type

**PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse**

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

