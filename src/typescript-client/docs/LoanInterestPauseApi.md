# LoanInterestPauseApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createInterestPause**](#createinterestpause) | **POST** /v1/loans/{loanId}/interest-pauses | Create a new interest pause period for a loan|
|[**createInterestPauseByExternalId**](#createinterestpausebyexternalid) | **POST** /v1/loans/external-id/{loanExternalId}/interest-pauses | Create a new interest pause for a loan using external ID|
|[**deleteInterestPause**](#deleteinterestpause) | **DELETE** /v1/loans/{loanId}/interest-pauses/{variationId} | Delete an interest pause period|
|[**deleteInterestPauseByExternalId**](#deleteinterestpausebyexternalid) | **DELETE** /v1/loans/external-id/{loanExternalId}/interest-pauses/{variationId} | Delete an interest pause period by external id|
|[**retrieveInterestPauses**](#retrieveinterestpauses) | **GET** /v1/loans/{loanId}/interest-pauses | Retrieve all interest pause periods for a loan|
|[**retrieveInterestPausesByExternalId**](#retrieveinterestpausesbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/interest-pauses | Retrieve all interest pause periods for a loan using external ID|
|[**updateInterestPause**](#updateinterestpause) | **PUT** /v1/loans/{loanId}/interest-pauses/{variationId} | Update an interest pause period|
|[**updateInterestPauseByExternalId**](#updateinterestpausebyexternalid) | **PUT** /v1/loans/external-id/{loanExternalId}/interest-pauses/{variationId} | Update an interest pause period by external id|

# **createInterestPause**
> CommandProcessingResult createInterestPause(interestPauseRequestDto)

Allows users to define a period during which no interest will be accrued for a specific loan.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration,
    InterestPauseRequestDto
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanId: number; //loanId (default to undefined)
let interestPauseRequestDto: InterestPauseRequestDto; //

const { status, data } = await apiInstance.createInterestPause(
    loanId,
    interestPauseRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestPauseRequestDto** | **InterestPauseRequestDto**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|


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
|**200** | Command successfully processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createInterestPauseByExternalId**
> CommandProcessingResult createInterestPauseByExternalId(interestPauseRequestDto)

Allows users to define a period during which no interest will be accrued for a specific loan using the external loan ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration,
    InterestPauseRequestDto
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let interestPauseRequestDto: InterestPauseRequestDto; //

const { status, data } = await apiInstance.createInterestPauseByExternalId(
    loanExternalId,
    interestPauseRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestPauseRequestDto** | **InterestPauseRequestDto**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


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
|**200** | Command successfully processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInterestPause**
> deleteInterestPause()

Deletes a specific interest pause period by its variation ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanId: number; //loanId (default to undefined)
let variationId: number; //variationId (default to undefined)

const { status, data } = await apiInstance.deleteInterestPause(
    loanId,
    variationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|
| **variationId** | [**number**] | variationId | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteInterestPauseByExternalId**
> deleteInterestPauseByExternalId()

Deletes a specific interest pause period by its variation ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let variationId: number; //variationId (default to undefined)

const { status, data } = await apiInstance.deleteInterestPauseByExternalId(
    loanExternalId,
    variationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **variationId** | [**number**] | variationId | defaults to undefined|


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
|**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveInterestPauses**
> Array<InterestPauseResponseDto> retrieveInterestPauses()

Fetches a list of all active interest pause periods for a specific loan.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanId: number; //loanId (default to undefined)

const { status, data } = await apiInstance.retrieveInterestPauses(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] | loanId | defaults to undefined|


### Return type

**Array<InterestPauseResponseDto>**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of interest pause periods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveInterestPausesByExternalId**
> Array<InterestPauseResponseDto> retrieveInterestPausesByExternalId()

Fetches a list of all active interest pause periods for a specific loan using the external loan ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)

const { status, data } = await apiInstance.retrieveInterestPausesByExternalId(
    loanExternalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|


### Return type

**Array<InterestPauseResponseDto>**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of interest pause periods |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInterestPause**
> CommandProcessingResult updateInterestPause(interestPauseRequestDto)

Updates a specific interest pause period by its variation ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration,
    InterestPauseRequestDto
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanId: number; //loanId (default to undefined)
let variationId: number; //variationId (default to undefined)
let interestPauseRequestDto: InterestPauseRequestDto; //

const { status, data } = await apiInstance.updateInterestPause(
    loanId,
    variationId,
    interestPauseRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestPauseRequestDto** | **InterestPauseRequestDto**|  | |
| **loanId** | [**number**] | loanId | defaults to undefined|
| **variationId** | [**number**] | variationId | defaults to undefined|


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
|**200** | Command successfully processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateInterestPauseByExternalId**
> CommandProcessingResult updateInterestPauseByExternalId(interestPauseRequestDto)

Updates a specific interest pause period by its variation ID.

### Example

```typescript
import {
    LoanInterestPauseApi,
    Configuration,
    InterestPauseRequestDto
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new LoanInterestPauseApi(configuration);

let loanExternalId: string; //loanExternalId (default to undefined)
let variationId: number; //variationId (default to undefined)
let interestPauseRequestDto: InterestPauseRequestDto; //

const { status, data } = await apiInstance.updateInterestPauseByExternalId(
    loanExternalId,
    variationId,
    interestPauseRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **interestPauseRequestDto** | **InterestPauseRequestDto**|  | |
| **loanExternalId** | [**string**] | loanExternalId | defaults to undefined|
| **variationId** | [**number**] | variationId | defaults to undefined|


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
|**200** | Command successfully processed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

