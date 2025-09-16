# CreditBureauConfigurationApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addOrganisationCreditBureau**](#addorganisationcreditbureau) | **POST** /v1/CreditBureauConfiguration/organisationCreditBureau/{organisationCreditBureauId} | |
|[**createCreditBureauConfiguration**](#createcreditbureauconfiguration) | **POST** /v1/CreditBureauConfiguration/configuration/{creditBureauId} | |
|[**createCreditBureauLoanProductMapping**](#createcreditbureauloanproductmapping) | **POST** /v1/CreditBureauConfiguration/mappings/{organisationCreditBureauId} | |
|[**fetchLoanProducts**](#fetchloanproducts) | **GET** /v1/CreditBureauConfiguration/loanProduct | |
|[**fetchMappingByLoanProductId**](#fetchmappingbyloanproductid) | **GET** /v1/CreditBureauConfiguration/loanProduct/{loanProductId} | |
|[**getConfiguration**](#getconfiguration) | **GET** /v1/CreditBureauConfiguration/config/{organisationCreditBureauId} | |
|[**getCreditBureau**](#getcreditbureau) | **GET** /v1/CreditBureauConfiguration | |
|[**getCreditBureauLoanProductMapping**](#getcreditbureauloanproductmapping) | **GET** /v1/CreditBureauConfiguration/mappings | |
|[**getOrganisationCreditBureau**](#getorganisationcreditbureau) | **GET** /v1/CreditBureauConfiguration/organisationCreditBureau | |
|[**updateCreditBureau**](#updatecreditbureau) | **PUT** /v1/CreditBureauConfiguration/organisationCreditBureau | |
|[**updateCreditBureauConfiguration**](#updatecreditbureauconfiguration) | **PUT** /v1/CreditBureauConfiguration/configuration/{configurationId} | |
|[**updateCreditBureauLoanProductMapping**](#updatecreditbureauloanproductmapping) | **PUT** /v1/CreditBureauConfiguration/mappings | |

# **addOrganisationCreditBureau**
> string addOrganisationCreditBureau()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let organisationCreditBureauId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.addOrganisationCreditBureau(
    organisationCreditBureauId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **organisationCreditBureauId** | [**number**] |  | defaults to undefined|


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

# **createCreditBureauConfiguration**
> string createCreditBureauConfiguration()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let creditBureauId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.createCreditBureauConfiguration(
    creditBureauId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **creditBureauId** | [**number**] |  | defaults to undefined|


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

# **createCreditBureauLoanProductMapping**
> string createCreditBureauLoanProductMapping()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let organisationCreditBureauId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.createCreditBureauLoanProductMapping(
    organisationCreditBureauId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **organisationCreditBureauId** | [**number**] |  | defaults to undefined|


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

# **fetchLoanProducts**
> string fetchLoanProducts()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

const { status, data } = await apiInstance.fetchLoanProducts();
```

### Parameters
This endpoint does not have any parameters.


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

# **fetchMappingByLoanProductId**
> string fetchMappingByLoanProductId()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let loanProductId: number; // (default to undefined)

const { status, data } = await apiInstance.fetchMappingByLoanProductId(
    loanProductId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanProductId** | [**number**] |  | defaults to undefined|


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

# **getConfiguration**
> string getConfiguration()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let organisationCreditBureauId: number; // (default to undefined)

const { status, data } = await apiInstance.getConfiguration(
    organisationCreditBureauId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **organisationCreditBureauId** | [**number**] |  | defaults to undefined|


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

# **getCreditBureau**
> string getCreditBureau()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

const { status, data } = await apiInstance.getCreditBureau();
```

### Parameters
This endpoint does not have any parameters.


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

# **getCreditBureauLoanProductMapping**
> string getCreditBureauLoanProductMapping()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

const { status, data } = await apiInstance.getCreditBureauLoanProductMapping();
```

### Parameters
This endpoint does not have any parameters.


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

# **getOrganisationCreditBureau**
> string getOrganisationCreditBureau()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

const { status, data } = await apiInstance.getOrganisationCreditBureau();
```

### Parameters
This endpoint does not have any parameters.


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

# **updateCreditBureau**
> string updateCreditBureau()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.updateCreditBureau(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


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

# **updateCreditBureauConfiguration**
> string updateCreditBureauConfiguration()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let configurationId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateCreditBureauConfiguration(
    configurationId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **configurationId** | [**number**] |  | defaults to undefined|


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

# **updateCreditBureauLoanProductMapping**
> string updateCreditBureauLoanProductMapping()


### Example

```typescript
import {
    CreditBureauConfigurationApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new CreditBureauConfigurationApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.updateCreditBureauLoanProductMapping(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |


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

