# LoansPointInTimeApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**retrieveLoanPointInTime**](#retrieveloanpointintime) | **GET** /v1/loans/at-date/{loanId} | |
|[**retrieveLoanPointInTimeByExternalId**](#retrieveloanpointintimebyexternalid) | **GET** /v1/loans/at-date/external-id/{loanExternalId} | |
|[**retrieveLoansPointInTime**](#retrieveloanspointintime) | **POST** /v1/loans/at-date/search | |
|[**retrieveLoansPointInTimeByExternalIds**](#retrieveloanspointintimebyexternalids) | **POST** /v1/loans/at-date/search/external-id | |

# **retrieveLoanPointInTime**
> LoanPointInTimeData retrieveLoanPointInTime()


### Example

```typescript
import {
    LoansPointInTimeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansPointInTimeApi(configuration);

let loanId: number; //loanId (default to undefined)
let date: object; //date (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveLoanPointInTime(
    loanId,
    date,
    dateFormat,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **date** | **object** | date | defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|


### Return type

**LoanPointInTimeData**

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

# **retrieveLoanPointInTimeByExternalId**
> LoanPointInTimeData retrieveLoanPointInTimeByExternalId()


### Example

```typescript
import {
    LoansPointInTimeApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansPointInTimeApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let date: object; //date (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveLoanPointInTimeByExternalId(
    loanExternalId,
    date,
    dateFormat,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **date** | **object** | date | defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|


### Return type

**LoanPointInTimeData**

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

# **retrieveLoansPointInTime**
> Array<LoanPointInTimeData> retrieveLoansPointInTime()


### Example

```typescript
import {
    LoansPointInTimeApi,
    Configuration,
    RetrieveLoansPointInTimeRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansPointInTimeApi(configuration);

let retrieveLoansPointInTimeRequest: RetrieveLoansPointInTimeRequest; // (optional)

const { status, data } = await apiInstance.retrieveLoansPointInTime(
    retrieveLoansPointInTimeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **retrieveLoansPointInTimeRequest** | **RetrieveLoansPointInTimeRequest**|  | |


### Return type

**Array<LoanPointInTimeData>**

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

# **retrieveLoansPointInTimeByExternalIds**
> Array<LoanPointInTimeData> retrieveLoansPointInTimeByExternalIds()


### Example

```typescript
import {
    LoansPointInTimeApi,
    Configuration,
    RetrieveLoansPointInTimeExternalIdsRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoansPointInTimeApi(configuration);

let retrieveLoansPointInTimeExternalIdsRequest: RetrieveLoansPointInTimeExternalIdsRequest; // (optional)

const { status, data } = await apiInstance.retrieveLoansPointInTimeByExternalIds(
    retrieveLoansPointInTimeExternalIdsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **retrieveLoansPointInTimeExternalIdsRequest** | **RetrieveLoansPointInTimeExternalIdsRequest**|  | |


### Return type

**Array<LoanPointInTimeData>**

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

