# StandingInstructionsApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**create5**](#create5) | **POST** /v1/standinginstructions | Create new Standing Instruction|
|[**retrieveAll19**](#retrieveall19) | **GET** /v1/standinginstructions | List Standing Instructions|
|[**retrieveOne10**](#retrieveone10) | **GET** /v1/standinginstructions/{standingInstructionId} | Retrieve Standing Instruction|
|[**template6**](#template6) | **GET** /v1/standinginstructions/template | Retrieve Standing Instruction Template|
|[**update9**](#update9) | **PUT** /v1/standinginstructions/{standingInstructionId} | Update Standing Instruction | Delete Standing Instruction|

# **create5**
> PostStandingInstructionsResponse create5(standingInstructionCreationRequest)

Ability to create new instruction for transfer of monetary funds from one account to another

### Example

```typescript
import {
    StandingInstructionsApi,
    Configuration,
    StandingInstructionCreationRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsApi(configuration);

let standingInstructionCreationRequest: StandingInstructionCreationRequest; //

const { status, data } = await apiInstance.create5(
    standingInstructionCreationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **standingInstructionCreationRequest** | **StandingInstructionCreationRequest**|  | |


### Return type

**PostStandingInstructionsResponse**

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

# **retrieveAll19**
> GetStandingInstructionsResponse retrieveAll19()

Example Requests:  standinginstructions

### Example

```typescript
import {
    StandingInstructionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsApi(configuration);

let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let transferType: number; //transferType (optional) (default to undefined)
let clientName: string; //clientName (optional) (default to undefined)
let clientId: number; //clientId (optional) (default to undefined)
let fromAccountId: number; //fromAccountId (optional) (default to undefined)
let fromAccountType: number; //fromAccountType (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll19(
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder,
    transferType,
    clientName,
    clientId,
    fromAccountId,
    fromAccountType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **transferType** | [**number**] | transferType | (optional) defaults to undefined|
| **clientName** | [**string**] | clientName | (optional) defaults to undefined|
| **clientId** | [**number**] | clientId | (optional) defaults to undefined|
| **fromAccountId** | [**number**] | fromAccountId | (optional) defaults to undefined|
| **fromAccountType** | [**number**] | fromAccountType | (optional) defaults to undefined|


### Return type

**GetStandingInstructionsResponse**

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

# **retrieveOne10**
> GetStandingInstructionsStandingInstructionIdResponse retrieveOne10()

Example Requests :  standinginstructions/1

### Example

```typescript
import {
    StandingInstructionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsApi(configuration);

let standingInstructionId: number; //standingInstructionId (default to undefined)
let externalId: string; //externalId (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOne10(
    standingInstructionId,
    externalId,
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **standingInstructionId** | [**number**] | standingInstructionId | defaults to undefined|
| **externalId** | [**string**] | externalId | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|


### Return type

**GetStandingInstructionsStandingInstructionIdResponse**

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

# **template6**
> GetStandingInstructionsTemplateResponse template6()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Requests:  standinginstructions/template?fromAccountType=2&fromOfficeId=1  standinginstructions/template?fromAccountType=2&fromOfficeId=1&fromClientId=1&transferType=1  standinginstructions/template?fromClientId=1&fromAccountType=2&fromAccountId=1&transferType=1

### Example

```typescript
import {
    StandingInstructionsApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsApi(configuration);

let fromOfficeId: number; // (optional) (default to undefined)
let fromClientId: number; // (optional) (default to undefined)
let fromAccountId: number; // (optional) (default to undefined)
let fromAccountType: number; // (optional) (default to undefined)
let toOfficeId: number; // (optional) (default to undefined)
let toClientId: number; // (optional) (default to undefined)
let toAccountId: number; // (optional) (default to undefined)
let toAccountType: number; // (optional) (default to undefined)
let transferType: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.template6(
    fromOfficeId,
    fromClientId,
    fromAccountId,
    fromAccountType,
    toOfficeId,
    toClientId,
    toAccountId,
    toAccountType,
    transferType
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
| **transferType** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetStandingInstructionsTemplateResponse**

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

# **update9**
> PutStandingInstructionsStandingInstructionIdResponse update9()

Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command=update   Ability to modify existing instruction for transfer of monetary funds from one account to another.  PUT https://DomainName/api/v1/standinginstructions/1?command=delete

### Example

```typescript
import {
    StandingInstructionsApi,
    Configuration,
    StandingInstructionUpdatesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new StandingInstructionsApi(configuration);

let standingInstructionId: number; //standingInstructionId (default to undefined)
let command: string; //command (optional) (default to undefined)
let standingInstructionUpdatesRequest: StandingInstructionUpdatesRequest; // (optional)

const { status, data } = await apiInstance.update9(
    standingInstructionId,
    command,
    standingInstructionUpdatesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **standingInstructionUpdatesRequest** | **StandingInstructionUpdatesRequest**|  | |
| **standingInstructionId** | [**number**] | standingInstructionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PutStandingInstructionsStandingInstructionIdResponse**

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

