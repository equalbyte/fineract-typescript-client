# GuarantorsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountsTemplate**](#accountstemplate) | **GET** /v1/loans/{loanId}/guarantors/accounts/template | |
|[**createGuarantor**](#createguarantor) | **POST** /v1/loans/{loanId}/guarantors | |
|[**deleteGuarantor**](#deleteguarantor) | **DELETE** /v1/loans/{loanId}/guarantors/{guarantorId} | |
|[**getGuarantorTemplate**](#getguarantortemplate) | **GET** /v1/loans/{loanId}/guarantors/downloadtemplate | |
|[**newGuarantorTemplate**](#newguarantortemplate) | **GET** /v1/loans/{loanId}/guarantors/template | |
|[**postGuarantorTemplate**](#postguarantortemplate) | **POST** /v1/loans/{loanId}/guarantors/uploadtemplate | |
|[**retrieveGuarantorDetails**](#retrieveguarantordetails) | **GET** /v1/loans/{loanId}/guarantors | |
|[**retrieveGuarantorDetails1**](#retrieveguarantordetails1) | **GET** /v1/loans/{loanId}/guarantors/{guarantorId} | |
|[**updateGuarantor**](#updateguarantor) | **PUT** /v1/loans/{loanId}/guarantors/{guarantorId} | |

# **accountsTemplate**
> GuarantorData accountsTemplate()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let clientId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.accountsTemplate(
    loanId,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **clientId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GuarantorData**

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

# **createGuarantor**
> CommandProcessingResult createGuarantor()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration,
    GuarantorsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let guarantorsRequest: GuarantorsRequest; // (optional)

const { status, data } = await apiInstance.createGuarantor(
    loanId,
    guarantorsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guarantorsRequest** | **GuarantorsRequest**|  | |
| **loanId** | [**number**] |  | defaults to undefined|


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

# **deleteGuarantor**
> CommandProcessingResult deleteGuarantor()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let guarantorId: number; // (default to undefined)
let guarantorFundingId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.deleteGuarantor(
    loanId,
    guarantorId,
    guarantorFundingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **guarantorId** | [**number**] |  | defaults to undefined|
| **guarantorFundingId** | [**number**] |  | (optional) defaults to undefined|


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

# **getGuarantorTemplate**
> getGuarantorTemplate()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getGuarantorTemplate(
    loanId,
    officeId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
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

# **newGuarantorTemplate**
> GuarantorData newGuarantorTemplate()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)

const { status, data } = await apiInstance.newGuarantorTemplate(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

**GuarantorData**

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

# **postGuarantorTemplate**
> string postGuarantorTemplate()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postGuarantorTemplate(
    loanId,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**string**

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

# **retrieveGuarantorDetails**
> Array<GuarantorData> retrieveGuarantorDetails()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveGuarantorDetails(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

**Array<GuarantorData>**

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

# **retrieveGuarantorDetails1**
> GuarantorData retrieveGuarantorDetails1()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let guarantorId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveGuarantorDetails1(
    loanId,
    guarantorId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **guarantorId** | [**number**] |  | defaults to undefined|


### Return type

**GuarantorData**

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

# **updateGuarantor**
> CommandProcessingResult updateGuarantor()


### Example

```typescript
import {
    GuarantorsApi,
    Configuration,
    GuarantorsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new GuarantorsApi(configuration);

let loanId: number; // (default to undefined)
let guarantorId: number; // (default to undefined)
let guarantorsRequest: GuarantorsRequest; // (optional)

const { status, data } = await apiInstance.updateGuarantor(
    loanId,
    guarantorId,
    guarantorsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **guarantorsRequest** | **GuarantorsRequest**|  | |
| **loanId** | [**number**] |  | defaults to undefined|
| **guarantorId** | [**number**] |  | defaults to undefined|


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

