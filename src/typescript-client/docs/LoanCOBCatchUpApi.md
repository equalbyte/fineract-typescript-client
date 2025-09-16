# LoanCOBCatchUpApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**executeLoanCOBCatchUp**](#executeloancobcatchup) | **POST** /v1/loans/catch-up | Executes Loan COB Catch Up|
|[**getOldestCOBProcessedLoan**](#getoldestcobprocessedloan) | **GET** /v1/loans/oldest-cob-closed | Retrieves the oldest COB processed loan|
|[**isCatchUpRunning**](#iscatchuprunning) | **GET** /v1/loans/is-catch-up-running | Retrieves whether Loan COB catch up is running|

# **executeLoanCOBCatchUp**
> executeLoanCOBCatchUp()

Executes the Loan COB job on every day from the oldest Loan to the current COB business date

### Example

```typescript
import {
    LoanCOBCatchUpApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCOBCatchUpApi(configuration);

const { status, data } = await apiInstance.executeLoanCOBCatchUp();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All loans are up to date |  -  |
|**202** | Catch Up has been started |  -  |
|**400** | Catch Up is already running |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOldestCOBProcessedLoan**
> OldestCOBProcessedLoanDTO getOldestCOBProcessedLoan()

Retrieves the COB business date and the oldest COB processed loan

### Example

```typescript
import {
    LoanCOBCatchUpApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCOBCatchUpApi(configuration);

const { status, data } = await apiInstance.getOldestCOBProcessedLoan();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OldestCOBProcessedLoanDTO**

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

# **isCatchUpRunning**
> IsCatchUpRunningDTO isCatchUpRunning()

Retrieves whether Loan COB catch up is running, and the current execution date if it is running.

### Example

```typescript
import {
    LoanCOBCatchUpApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanCOBCatchUpApi(configuration);

const { status, data } = await apiInstance.isCatchUpRunning();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IsCatchUpRunningDTO**

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

