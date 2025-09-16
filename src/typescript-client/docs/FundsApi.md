# FundsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createFund**](#createfund) | **POST** /v1/funds | Create a Fund|
|[**retrieveFund**](#retrievefund) | **GET** /v1/funds/{fundId} | Retrieve a Fund|
|[**retrieveFunds**](#retrievefunds) | **GET** /v1/funds | Retrieve Funds|
|[**updateFund**](#updatefund) | **PUT** /v1/funds/{fundId} | Update a Fund|

# **createFund**
> PostFundsResponse createFund(fundRequest)

Creates a Fund

### Example

```typescript
import {
    FundsApi,
    Configuration,
    FundRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FundsApi(configuration);

let fundRequest: FundRequest; //

const { status, data } = await apiInstance.createFund(
    fundRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundRequest** | **FundRequest**|  | |


### Return type

**PostFundsResponse**

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

# **retrieveFund**
> FundData retrieveFund()

Returns the details of a Fund.  Example Requests:  funds/1

### Example

```typescript
import {
    FundsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FundsApi(configuration);

let fundId: number; //fundId (default to undefined)

const { status, data } = await apiInstance.retrieveFund(
    fundId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundId** | [**number**] | fundId | defaults to undefined|


### Return type

**FundData**

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

# **retrieveFunds**
> Array<FundData> retrieveFunds()

Returns the list of funds.  Example Requests:  funds

### Example

```typescript
import {
    FundsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FundsApi(configuration);

const { status, data } = await apiInstance.retrieveFunds();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FundData>**

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

# **updateFund**
> PutFundsFundIdResponse updateFund(fundRequest)

Updates the details of a fund.

### Example

```typescript
import {
    FundsApi,
    Configuration,
    FundRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new FundsApi(configuration);

let fundId: number; //fundId (default to undefined)
let fundRequest: FundRequest; //

const { status, data } = await apiInstance.updateFund(
    fundId,
    fundRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fundRequest** | **FundRequest**|  | |
| **fundId** | [**number**] | fundId | defaults to undefined|


### Return type

**PutFundsFundIdResponse**

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

