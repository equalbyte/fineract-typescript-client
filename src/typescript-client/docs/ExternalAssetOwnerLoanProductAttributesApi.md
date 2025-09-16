# ExternalAssetOwnerLoanProductAttributesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getExternalAssetOwnerLoanProductAttributes**](#getexternalassetownerloanproductattributes) | **GET** /v1/external-asset-owners/loan-product/{loanProductId}/attributes | Retrieve All Loan Product Attributes|
|[**postExternalAssetOwnerLoanProductAttribute**](#postexternalassetownerloanproductattribute) | **POST** /v1/external-asset-owners/loan-product/{loanProductId}/attributes | |
|[**updateLoanProductAttribute**](#updateloanproductattribute) | **PUT** /v1/external-asset-owners/loan-product/{loanProductId}/attributes/{id} | Update a Loan Product Attribute|

# **getExternalAssetOwnerLoanProductAttributes**
> PageExternalTransferLoanProductAttributesData getExternalAssetOwnerLoanProductAttributes()

Retrieves all Loan Product Attributes with a given loanProductId

### Example

```typescript
import {
    ExternalAssetOwnerLoanProductAttributesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnerLoanProductAttributesApi(configuration);

let loanProductId: number; //loanProductId (default to undefined)
let attributeKey: string; //attributeKey (optional) (default to undefined)

const { status, data } = await apiInstance.getExternalAssetOwnerLoanProductAttributes(
    loanProductId,
    attributeKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanProductId** | [**number**] | loanProductId | defaults to undefined|
| **attributeKey** | [**string**] | attributeKey | (optional) defaults to undefined|


### Return type

**PageExternalTransferLoanProductAttributesData**

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

# **postExternalAssetOwnerLoanProductAttribute**
> CommandProcessingResult postExternalAssetOwnerLoanProductAttribute(postExternalAssetOwnerLoanProductAttributeRequest)


### Example

```typescript
import {
    ExternalAssetOwnerLoanProductAttributesApi,
    Configuration,
    PostExternalAssetOwnerLoanProductAttributeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnerLoanProductAttributesApi(configuration);

let loanProductId: number; //loanProductId (default to undefined)
let postExternalAssetOwnerLoanProductAttributeRequest: PostExternalAssetOwnerLoanProductAttributeRequest; //

const { status, data } = await apiInstance.postExternalAssetOwnerLoanProductAttribute(
    loanProductId,
    postExternalAssetOwnerLoanProductAttributeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postExternalAssetOwnerLoanProductAttributeRequest** | **PostExternalAssetOwnerLoanProductAttributeRequest**|  | |
| **loanProductId** | [**number**] | loanProductId | defaults to undefined|


### Return type

**CommandProcessingResult**

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

# **updateLoanProductAttribute**
> CommandProcessingResult updateLoanProductAttribute(putExternalAssetOwnerLoanProductAttributeRequest)

Updates a loan product attribute with a given loan product id and attribute id

### Example

```typescript
import {
    ExternalAssetOwnerLoanProductAttributesApi,
    Configuration,
    PutExternalAssetOwnerLoanProductAttributeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new ExternalAssetOwnerLoanProductAttributesApi(configuration);

let loanProductId: number; //loanProductId (default to undefined)
let id: number; //attributeId (default to undefined)
let putExternalAssetOwnerLoanProductAttributeRequest: PutExternalAssetOwnerLoanProductAttributeRequest; //

const { status, data } = await apiInstance.updateLoanProductAttribute(
    loanProductId,
    id,
    putExternalAssetOwnerLoanProductAttributeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putExternalAssetOwnerLoanProductAttributeRequest** | **PutExternalAssetOwnerLoanProductAttributeRequest**|  | |
| **loanProductId** | [**number**] | loanProductId | defaults to undefined|
| **id** | [**number**] | attributeId | defaults to undefined|


### Return type

**CommandProcessingResult**

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

