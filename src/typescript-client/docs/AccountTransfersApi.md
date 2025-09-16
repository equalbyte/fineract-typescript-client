# AccountTransfersApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create4**](#create4) | **POST** /v1/accounttransfers | Create new Transfer|
|[**retrieveAll18**](#retrieveall18) | **GET** /v1/accounttransfers | List account transfers|
|[**retrieveOne9**](#retrieveone9) | **GET** /v1/accounttransfers/{transferId} | Retrieve account transfer|
|[**template5**](#template5) | **GET** /v1/accounttransfers/template | Retrieve Account Transfer Template|
|[**templateRefundByTransfer**](#templaterefundbytransfer) | **GET** /v1/accounttransfers/templateRefundByTransfer | Retrieve Refund of an Active Loan by Transfer Template|
|[**templateRefundByTransferPost**](#templaterefundbytransferpost) | **POST** /v1/accounttransfers/refundByTransfer | Refund of an Active Loan by Transfer|

# **create4**
> PostAccountTransfersResponse create4(accountTransferRequest)

Ability to create new transfer of monetary funds from one account to another.

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration,
    AccountTransferRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let accountTransferRequest: AccountTransferRequest; //

const { status, data } = await apiInstance.create4(
    accountTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountTransferRequest** | **AccountTransferRequest**|  | |


### Return type

**PostAccountTransfersResponse**

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

# **retrieveAll18**
> GetAccountTransfersResponse retrieveAll18()

Lists account\'s transfers  Example Requests:    accounttransfers

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let accountDetailId: number; //accountDetailId (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll18(
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder,
    accountDetailId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **accountDetailId** | [**number**] | accountDetailId | (optional) defaults to undefined|


### Return type

**GetAccountTransfersResponse**

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

# **retrieveOne9**
> GetAccountTransfersPageItems retrieveOne9()

Retrieves account transfer  Example Requests :    accounttransfers/1

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let transferId: number; //transferId (default to undefined)

const { status, data } = await apiInstance.retrieveOne9(
    transferId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferId** | [**number**] | transferId | defaults to undefined|


### Return type

**GetAccountTransfersPageItems**

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

# **template5**
> GetAccountTransfersTemplateResponse template5()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:    Field Defaults  Allowed Value Lists  Example Requests:    accounttransfers/template?fromAccountType=2&fromOfficeId=1    accounttransfers/template?fromAccountType=2&fromOfficeId=1&fromClientId=1    accounttransfers/template?fromClientId=1&fromAccountType=2&fromAccountId=1

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let fromOfficeId: number; // (optional) (default to undefined)
let fromClientId: number; // (optional) (default to undefined)
let fromAccountId: number; // (optional) (default to undefined)
let fromAccountType: number; // (optional) (default to undefined)
let toOfficeId: number; // (optional) (default to undefined)
let toClientId: number; // (optional) (default to undefined)
let toAccountId: number; // (optional) (default to undefined)
let toAccountType: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.template5(
    fromOfficeId,
    fromClientId,
    fromAccountId,
    fromAccountType,
    toOfficeId,
    toClientId,
    toAccountId,
    toAccountType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromOfficeId** | [**number**] |  | (optional) defaults to undefined|
| **fromClientId** | [**number**] |  | (optional) defaults to undefined|
| **fromAccountId** | [**number**] |  | (optional) defaults to undefined|
| **fromAccountType** | [**number**] |  | (optional) defaults to undefined|
| **toOfficeId** | [**number**] |  | (optional) defaults to undefined|
| **toClientId** | [**number**] |  | (optional) defaults to undefined|
| **toAccountId** | [**number**] |  | (optional) defaults to undefined|
| **toAccountType** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetAccountTransfersTemplateResponse**

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

# **templateRefundByTransfer**
> GetAccountTransfersTemplateRefundByTransferResponse templateRefundByTransfer()

Retrieves Refund of an Active Loan by Transfer TemplateExample Requests :    accounttransfers/templateRefundByTransfer?fromAccountId=2&fromAccountType=1& toAccountId=1&toAccountType=2&toClientId=1&toOfficeId=1

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let fromOfficeId: number; // (optional) (default to undefined)
let fromClientId: number; // (optional) (default to undefined)
let fromAccountId: number; // (optional) (default to undefined)
let fromAccountType: number; // (optional) (default to undefined)
let toOfficeId: number; // (optional) (default to undefined)
let toClientId: number; // (optional) (default to undefined)
let toAccountId: number; // (optional) (default to undefined)
let toAccountType: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.templateRefundByTransfer(
    fromOfficeId,
    fromClientId,
    fromAccountId,
    fromAccountType,
    toOfficeId,
    toClientId,
    toAccountId,
    toAccountType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fromOfficeId** | [**number**] |  | (optional) defaults to undefined|
| **fromClientId** | [**number**] |  | (optional) defaults to undefined|
| **fromAccountId** | [**number**] |  | (optional) defaults to undefined|
| **fromAccountType** | [**number**] |  | (optional) defaults to undefined|
| **toOfficeId** | [**number**] |  | (optional) defaults to undefined|
| **toClientId** | [**number**] |  | (optional) defaults to undefined|
| **toAccountId** | [**number**] |  | (optional) defaults to undefined|
| **toAccountType** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetAccountTransfersTemplateRefundByTransferResponse**

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

# **templateRefundByTransferPost**
> PostAccountTransfersRefundByTransferResponse templateRefundByTransferPost(accountTransferRequest)

Ability to refund an active loan by transferring to a savings account.

### Example

```typescript
import {
    AccountTransfersApi,
    Configuration,
    AccountTransferRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountTransfersApi(configuration);

let accountTransferRequest: AccountTransferRequest; //

const { status, data } = await apiInstance.templateRefundByTransferPost(
    accountTransferRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountTransferRequest** | **AccountTransferRequest**|  | |


### Return type

**PostAccountTransfersRefundByTransferResponse**

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

