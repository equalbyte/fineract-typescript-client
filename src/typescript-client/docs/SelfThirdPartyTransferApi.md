# SelfThirdPartyTransferApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**add**](#add) | **POST** /v1/self/beneficiaries/tpt | Add TPT Beneficiary|
|[**delete21**](#delete21) | **DELETE** /v1/self/beneficiaries/tpt/{beneficiaryId} | Delete TPT Beneficiary|
|[**retrieveAll35**](#retrieveall35) | **GET** /v1/self/beneficiaries/tpt | Get All TPT Beneficiary|
|[**template16**](#template16) | **GET** /v1/self/beneficiaries/tpt/template | Beneficiary Third Party Transfer Template|
|[**update23**](#update23) | **PUT** /v1/self/beneficiaries/tpt/{beneficiaryId} | Update TPT Beneficiary|

# **add**
> PostSelfBeneficiariesTPTResponse add(postSelfBeneficiariesTPTRequest)

Api to add third party beneficiary linked to current user.  Parameter Definitions  name : Nick name for beneficiary, should be unique for an self service user  officeName : Office Name of beneficiary(not id)  accountNumber : Account Number of beneficiary(not id)  transferLimit : Each transfer initiated to this account will not exceed this amount  Example Requests:  /self/beneficiaries/tpt  Mandatory Fields: name, officeName, accountNumber, accountType  Optional Fields: transferLimit

### Example

```typescript
import {
    SelfThirdPartyTransferApi,
    Configuration,
    PostSelfBeneficiariesTPTRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfThirdPartyTransferApi(configuration);

let postSelfBeneficiariesTPTRequest: PostSelfBeneficiariesTPTRequest; //

const { status, data } = await apiInstance.add(
    postSelfBeneficiariesTPTRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postSelfBeneficiariesTPTRequest** | **PostSelfBeneficiariesTPTRequest**|  | |


### Return type

**PostSelfBeneficiariesTPTResponse**

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

# **delete21**
> DeleteSelfBeneficiariesTPTBeneficiaryIdResponse delete21()

Api to delete third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt/{beneficiaryId}

### Example

```typescript
import {
    SelfThirdPartyTransferApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfThirdPartyTransferApi(configuration);

let beneficiaryId: number; // (default to undefined)

const { status, data } = await apiInstance.delete21(
    beneficiaryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **beneficiaryId** | [**number**] |  | defaults to undefined|


### Return type

**DeleteSelfBeneficiariesTPTBeneficiaryIdResponse**

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

# **retrieveAll35**
> Array<GetSelfBeneficiariesTPTResponse> retrieveAll35()

Api to get all third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt

### Example

```typescript
import {
    SelfThirdPartyTransferApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfThirdPartyTransferApi(configuration);

const { status, data } = await apiInstance.retrieveAll35();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<GetSelfBeneficiariesTPTResponse>**

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

# **template16**
> GetSelfBeneficiariesTPTTemplateResponse template16()

Returns Account Type enumerations. Self User is expected to know office name and account number to be able to add beneficiary.  Example Requests:  /self/beneficiaries/tpt/template

### Example

```typescript
import {
    SelfThirdPartyTransferApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfThirdPartyTransferApi(configuration);

const { status, data } = await apiInstance.template16();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSelfBeneficiariesTPTTemplateResponse**

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

# **update23**
> PutSelfBeneficiariesTPTBeneficiaryIdResponse update23(putSelfBeneficiariesTPTBeneficiaryIdRequest)

Api to update third party beneficiary linked to current user.  Example Requests:  /self/beneficiaries/tpt/{beneficiaryId}  Optional Fields: name, transferLimit

### Example

```typescript
import {
    SelfThirdPartyTransferApi,
    Configuration,
    PutSelfBeneficiariesTPTBeneficiaryIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new SelfThirdPartyTransferApi(configuration);

let beneficiaryId: number; //beneficiaryId (default to undefined)
let putSelfBeneficiariesTPTBeneficiaryIdRequest: PutSelfBeneficiariesTPTBeneficiaryIdRequest; //

const { status, data } = await apiInstance.update23(
    beneficiaryId,
    putSelfBeneficiariesTPTBeneficiaryIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putSelfBeneficiariesTPTBeneficiaryIdRequest** | **PutSelfBeneficiariesTPTBeneficiaryIdRequest**|  | |
| **beneficiaryId** | [**number**] | beneficiaryId | defaults to undefined|


### Return type

**PutSelfBeneficiariesTPTBeneficiaryIdResponse**

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

