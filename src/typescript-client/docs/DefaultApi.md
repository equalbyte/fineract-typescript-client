# DefaultApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**activate**](#activate) | **POST** /v1/email/campaign/{resourceId} | |
|[**addCreditReport**](#addcreditreport) | **POST** /v1/creditBureauIntegration/addCreditReport | |
|[**addNewClientImage1**](#addnewclientimage1) | **POST** /v1/{entity}/{entityId}/images | |
|[**create1**](#create1) | **POST** /v1/email | |
|[**createCampaign**](#createcampaign) | **POST** /v1/email/campaign | |
|[**createCampaign1**](#createcampaign1) | **POST** /v1/smscampaigns | Create a SMS Campaign|
|[**delete1**](#delete1) | **DELETE** /v1/email/{resourceId} | |
|[**delete2**](#delete2) | **DELETE** /v1/email/campaign/{resourceId} | |
|[**delete3**](#delete3) | **DELETE** /v1/smscampaigns/{campaignId} | Delete a SMS Campaign|
|[**delete7**](#delete7) | **DELETE** /v1/officetransactions/{transactionId} | |
|[**deleteAllExternalEvents**](#deleteallexternalevents) | **DELETE** /v1/internal/externalevents | |
|[**deleteClientImage**](#deleteclientimage) | **DELETE** /v1/{entity}/{entityId}/images | |
|[**deleteCreditReport**](#deletecreditreport) | **DELETE** /v1/creditBureauIntegration/deleteCreditReport/{creditBureauId} | |
|[**fetchCreditReport**](#fetchcreditreport) | **POST** /v1/creditBureauIntegration/creditReport | |
|[**get**](#get) | **GET** /v1/echo | |
|[**getAdvancedPaymentAllocationRulesOfLoan**](#getadvancedpaymentallocationrulesofloan) | **GET** /v1/internal/loan/{loanId}/advanced-payment-allocation-rules | |
|[**getAllExternalEvents**](#getallexternalevents) | **GET** /v1/internal/externalevents | |
|[**getClientAuditFields**](#getclientauditfields) | **GET** /v1/internal/client/{clientId}/audit | |
|[**getCobPartitions**](#getcobpartitions) | **GET** /v1/internal/cob/partitions/{partitionSize} | |
|[**getExternalGrammar**](#getexternalgrammar) | **GET** /application.wadl/{path} | |
|[**getLoanAuditFields**](#getloanauditfields) | **GET** /v1/internal/loan/{loanId}/audit | |
|[**getLoanTransactionAuditFields**](#getloantransactionauditfields) | **GET** /v1/internal/loan/{loanId}/transaction/{transactionId}/audit | |
|[**getLoansByStatus**](#getloansbystatus) | **GET** /v1/internal/loan/status/{statusId} | |
|[**getSavedCreditReport**](#getsavedcreditreport) | **GET** /v1/creditBureauIntegration/creditReport/{creditBureauId} | |
|[**getWadl**](#getwadl) | **GET** /application.wadl | |
|[**handleCommands**](#handlecommands) | **POST** /v1/smscampaigns/{campaignId} | SMS Campaign|
|[**newOfficeTransactionDetails**](#newofficetransactiondetails) | **GET** /v1/officetransactions/template | |
|[**placeLockOnLoanAccount**](#placelockonloanaccount) | **POST** /v1/internal/loans/{loanId}/place-lock/{lockOwner} | |
|[**preview**](#preview) | **POST** /v1/email/campaign/preview | |
|[**preview1**](#preview1) | **POST** /v1/smscampaigns/preview | |
|[**retrieveAll5**](#retrieveall5) | **GET** /v1/email/configuration | |
|[**retrieveAll9**](#retrieveall9) | **GET** /v1/twofactor/configure | |
|[**retrieveAllCampaign**](#retrieveallcampaign) | **GET** /v1/email/campaign | |
|[**retrieveAllEmailByStatus**](#retrieveallemailbystatus) | **GET** /v1/email/messageByStatus | |
|[**retrieveAllEmails**](#retrieveallemails) | **GET** /v1/email | |
|[**retrieveAllEmails1**](#retrieveallemails1) | **GET** /v1/smscampaigns | List SMS Campaigns|
|[**retrieveCampaign**](#retrievecampaign) | **GET** /v1/smscampaigns/{resourceId} | Retrieve a SMS Campaign|
|[**retrieveFailedEmail**](#retrievefailedemail) | **GET** /v1/email/failedEmail | |
|[**retrieveImage**](#retrieveimage) | **GET** /v1/{entity}/{entityId}/images | |
|[**retrieveOfficeTransactions**](#retrieveofficetransactions) | **GET** /v1/officetransactions | |
|[**retrieveOne1**](#retrieveone1) | **GET** /v1/email/{resourceId} | |
|[**retrieveOneCampaign**](#retrieveonecampaign) | **GET** /v1/email/campaign/{resourceId} | |
|[**retrieveOneTemplate**](#retrieveonetemplate) | **GET** /v1/email/campaign/template/{resourceId} | |
|[**retrievePendingEmail**](#retrievependingemail) | **GET** /v1/email/pendingEmail | |
|[**retrieveSentEmail**](#retrievesentemail) | **GET** /v1/email/sentEmail | |
|[**saveCreditReport**](#savecreditreport) | **POST** /v1/creditBureauIntegration/saveCreditReport | |
|[**template1**](#template1) | **GET** /v1/email/campaign/template | |
|[**template2**](#template2) | **GET** /v1/smscampaigns/template | Retrieve a SMS Campaign|
|[**transferMoneyFrom**](#transfermoneyfrom) | **POST** /v1/officetransactions | |
|[**update2**](#update2) | **PUT** /v1/email/{resourceId} | |
|[**updateCampaign**](#updatecampaign) | **PUT** /v1/email/campaign/{resourceId} | |
|[**updateCampaign1**](#updatecampaign1) | **PUT** /v1/smscampaigns/{campaignId} | Update a Campaign|
|[**updateClientImage1**](#updateclientimage1) | **PUT** /v1/{entity}/{entityId}/images | |
|[**updateConfiguration**](#updateconfiguration) | **PUT** /v1/email/configuration | |
|[**updateConfiguration3**](#updateconfiguration3) | **PUT** /v1/twofactor/configure | |
|[**updateGlobalConfiguration**](#updateglobalconfiguration) | **PUT** /v1/internal/configurations/name/{configName}/value/{configValue} | |
|[**updateLoanCobLastDate**](#updateloancoblastdate) | **POST** /v1/internal/cob/fast-forward-cob-date-of-loan/{loanId} | |

# **activate**
> string activate()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.activate(
    resourceId,
    command,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **resourceId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


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

# **addCreditReport**
> string addCreditReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let creditBureauId: number; //creditBureauId (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.addCreditReport(
    creditBureauId,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **creditBureauId** | [**number**] | creditBureauId | (optional) defaults to undefined|
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

# **addNewClientImage1**
> CommandProcessingResult addNewClientImage1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let entity: string; // (default to undefined)
let entityId: number; // (default to undefined)
let contentLength: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.addNewClientImage1(
    entity,
    entityId,
    contentLength,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entity** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **contentLength** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create1**
> string create1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.create1(
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

# **createCampaign**
> string createCampaign()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.createCampaign(
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

# **createCampaign1**
> CommandProcessingResult createCampaign1(commandWrapper)

Mandatory Fields campaignName, campaignType, triggerType, providerId, runReportId, message  Mandatory Fields for Cash based on selected report id paramValue in json format

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CommandWrapper
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let commandWrapper: CommandWrapper; //

const { status, data } = await apiInstance.createCampaign1(
    commandWrapper
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commandWrapper** | **CommandWrapper**|  | |


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete1**
> string delete1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.delete1(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **delete2**
> string delete2()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.delete2(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **delete3**
> CommandProcessingResult delete3()

Note: Only closed SMS Campaigns can be deleted

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let campaignId: number; // (default to undefined)

const { status, data } = await apiInstance.delete3(
    campaignId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] |  | defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete7**
> string delete7()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let transactionId: number; // (default to undefined)

const { status, data } = await apiInstance.delete7(
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionId** | [**number**] |  | defaults to undefined|


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

# **deleteAllExternalEvents**
> deleteAllExternalEvents()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.deleteAllExternalEvents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

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

# **deleteClientImage**
> CommandProcessingResult deleteClientImage()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let entity: string; // (default to undefined)
let entityId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteClientImage(
    entity,
    entityId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entity** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|


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

# **deleteCreditReport**
> string deleteCreditReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let creditBureauId: number; //creditBureauId (default to undefined)

const { status, data } = await apiInstance.deleteCreditReport(
    creditBureauId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **creditBureauId** | [**number**] | creditBureauId | defaults to undefined|


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

# **fetchCreditReport**
> string fetchCreditReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: object; //Fetch credit report (optional)

const { status, data } = await apiInstance.fetchCreditReport(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**| Fetch credit report | |


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

# **get**
> string get()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.get();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAdvancedPaymentAllocationRulesOfLoan**
> Array<AdvancedPaymentData> getAdvancedPaymentAllocationRulesOfLoan()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loanId: number; // (default to undefined)

const { status, data } = await apiInstance.getAdvancedPaymentAllocationRulesOfLoan(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

**Array<AdvancedPaymentData>**

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

# **getAllExternalEvents**
> Array<ExternalEventResponse> getAllExternalEvents()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let idempotencyKey: string; // (optional) (default to undefined)
let type: string; // (optional) (default to undefined)
let category: string; // (optional) (default to undefined)
let aggregateRootId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllExternalEvents(
    idempotencyKey,
    type,
    category,
    aggregateRootId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idempotencyKey** | [**string**] |  | (optional) defaults to undefined|
| **type** | [**string**] |  | (optional) defaults to undefined|
| **category** | [**string**] |  | (optional) defaults to undefined|
| **aggregateRootId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**Array<ExternalEventResponse>**

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

# **getClientAuditFields**
> string getClientAuditFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let clientId: number; // (default to undefined)

const { status, data } = await apiInstance.getClientAuditFields(
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clientId** | [**number**] |  | defaults to undefined|


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

# **getCobPartitions**
> string getCobPartitions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let partitionSize: number; // (default to undefined)

const { status, data } = await apiInstance.getCobPartitions(
    partitionSize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **partitionSize** | [**number**] |  | defaults to undefined|


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

# **getExternalGrammar**
> getExternalGrammar()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let path: string; // (default to undefined)

const { status, data } = await apiInstance.getExternalGrammar(
    path
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getLoanAuditFields**
> AuditData getLoanAuditFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loanId: number; // (default to undefined)

const { status, data } = await apiInstance.getLoanAuditFields(
    loanId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

**AuditData**

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

# **getLoanTransactionAuditFields**
> AuditData getLoanTransactionAuditFields()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loanId: number; // (default to undefined)
let transactionId: number; // (default to undefined)

const { status, data } = await apiInstance.getLoanTransactionAuditFields(
    loanId,
    transactionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loanId** | [**number**] |  | defaults to undefined|
| **transactionId** | [**number**] |  | defaults to undefined|


### Return type

**AuditData**

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

# **getLoansByStatus**
> Array<number> getLoansByStatus()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let statusId: number; // (default to undefined)

const { status, data } = await apiInstance.getLoansByStatus(
    statusId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **statusId** | [**number**] |  | defaults to undefined|


### Return type

**Array<number>**

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

# **getSavedCreditReport**
> string getSavedCreditReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let creditBureauId: number; //creditBureauId (default to undefined)

const { status, data } = await apiInstance.getSavedCreditReport(
    creditBureauId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **creditBureauId** | [**number**] | creditBureauId | defaults to undefined|


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

# **getWadl**
> getWadl()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.getWadl();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.sun.wadl+xml, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **handleCommands**
> CommandProcessingResult handleCommands()

Activates | Deactivates | Reactivates

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let campaignId: number; // (default to undefined)
let command: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.handleCommands(
    campaignId,
    command
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **campaignId** | [**number**] |  | defaults to undefined|
| **command** | [**string**] |  | (optional) defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **newOfficeTransactionDetails**
> string newOfficeTransactionDetails()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.newOfficeTransactionDetails();
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

# **placeLockOnLoanAccount**
> placeLockOnLoanAccount()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loanId: number; // (default to undefined)
let lockOwner: string; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.placeLockOnLoanAccount(
    loanId,
    lockOwner,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **loanId** | [**number**] |  | defaults to undefined|
| **lockOwner** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

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

# **preview**
> string preview()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.preview(
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

# **preview1**
> CampaignPreviewData preview1()


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    SmsCampaignPreviewDto
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let smsCampaignPreviewDto: SmsCampaignPreviewDto; // (optional)

const { status, data } = await apiInstance.preview1(
    smsCampaignPreviewDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smsCampaignPreviewDto** | **SmsCampaignPreviewDto**|  | |


### Return type

**CampaignPreviewData**

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

# **retrieveAll5**
> string retrieveAll5()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.retrieveAll5();
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

# **retrieveAll9**
> string retrieveAll9()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.retrieveAll9();
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

# **retrieveAllCampaign**
> string retrieveAllCampaign()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.retrieveAllCampaign();
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

# **retrieveAllEmailByStatus**
> string retrieveAllEmailByStatus()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let status: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)
let fromDate: object; // (optional) (default to undefined)
let toDate: object; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllEmailByStatus(
    offset,
    limit,
    status,
    orderBy,
    sortOrder,
    fromDate,
    toDate,
    locale,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **status** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|
| **fromDate** | **object** |  | (optional) defaults to undefined|
| **toDate** | **object** |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|


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

# **retrieveAllEmails**
> string retrieveAllEmails()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.retrieveAllEmails();
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

# **retrieveAllEmails1**
> SmsCampaignData retrieveAllEmails1()

Example Requests:  smscampaigns

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAllEmails1(
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


### Return type

**SmsCampaignData**

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

# **retrieveCampaign**
> SmsCampaignData retrieveCampaign()

Example Requests:  smscampaigns/1 

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveCampaign(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


### Return type

**SmsCampaignData**

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

# **retrieveFailedEmail**
> string retrieveFailedEmail()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveFailedEmail(
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


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

# **retrieveImage**
> retrieveImage()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let entity: string; // (default to undefined)
let entityId: number; // (default to undefined)
let maxWidth: number; // (optional) (default to undefined)
let maxHeight: number; // (optional) (default to undefined)
let output: string; // (optional) (default to undefined)
let accept: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveImage(
    entity,
    entityId,
    maxWidth,
    maxHeight,
    output,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entity** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **maxWidth** | [**number**] |  | (optional) defaults to undefined|
| **maxHeight** | [**number**] |  | (optional) defaults to undefined|
| **output** | [**string**] |  | (optional) defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieveOfficeTransactions**
> string retrieveOfficeTransactions()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.retrieveOfficeTransactions();
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

# **retrieveOne1**
> string retrieveOne1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOne1(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **retrieveOneCampaign**
> string retrieveOneCampaign()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOneCampaign(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **retrieveOneTemplate**
> string retrieveOneTemplate()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)

const { status, data } = await apiInstance.retrieveOneTemplate(
    resourceId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **retrievePendingEmail**
> string retrievePendingEmail()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrievePendingEmail(
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


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

# **retrieveSentEmail**
> string retrieveSentEmail()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let sortOrder: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveSentEmail(
    offset,
    limit,
    orderBy,
    sortOrder
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **sortOrder** | [**string**] |  | (optional) defaults to undefined|


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

# **saveCreditReport**
> string saveCreditReport()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let creditBureauId: number; //creditBureauId (optional) (default to undefined)
let nationalId: string; //nationalId (optional) (default to undefined)

const { status, data } = await apiInstance.saveCreditReport(
    creditBureauId,
    nationalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **creditBureauId** | [**number**] | creditBureauId | (optional) defaults to undefined|
| **nationalId** | [**string**] | nationalId | (optional) defaults to undefined|


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

# **template1**
> string template1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.template1();
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

# **template2**
> SmsCampaignData template2()

Example Requests:  smscampaigns/1   smscampaigns/1?template=true   smscampaigns/template

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.template2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SmsCampaignData**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **transferMoneyFrom**
> string transferMoneyFrom()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.transferMoneyFrom(
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

# **update2**
> string update2()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.update2(
    resourceId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **updateCampaign**
> string updateCampaign()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let resourceId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateCampaign(
    resourceId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **resourceId** | [**number**] |  | defaults to undefined|


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

# **updateCampaign1**
> CommandProcessingResult updateCampaign1(commandWrapper)


### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CommandWrapper
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let campaignId: number; // (default to undefined)
let commandWrapper: CommandWrapper; //

const { status, data } = await apiInstance.updateCampaign1(
    campaignId,
    commandWrapper
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **commandWrapper** | **CommandWrapper**|  | |
| **campaignId** | [**number**] |  | defaults to undefined|


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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateClientImage1**
> CommandProcessingResult updateClientImage1()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let entity: string; // (default to undefined)
let entityId: number; // (default to undefined)
let contentLength: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.updateClientImage1(
    entity,
    entityId,
    contentLength,
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entity** | [**string**] |  | defaults to undefined|
| **entityId** | [**number**] |  | defaults to undefined|
| **contentLength** | [**number**] |  | (optional) defaults to undefined|
| **dateFormat** | [**string**] |  | (optional) defaults to undefined|
| **locale** | [**string**] |  | (optional) defaults to undefined|
| **uploadedInputStream** | [**File**] |  | (optional) defaults to undefined|


### Return type

**CommandProcessingResult**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateConfiguration**
> string updateConfiguration()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.updateConfiguration(
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

# **updateConfiguration3**
> string updateConfiguration3()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let body: string; // (optional)

const { status, data } = await apiInstance.updateConfiguration3(
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

# **updateGlobalConfiguration**
> updateGlobalConfiguration()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let configName: string; // (default to undefined)
let configValue: number; // (default to undefined)

const { status, data } = await apiInstance.updateGlobalConfiguration(
    configName,
    configValue
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **configName** | [**string**] |  | defaults to undefined|
| **configValue** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

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

# **updateLoanCobLastDate**
> updateLoanCobLastDate()


### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let loanId: number; // (default to undefined)
let body: string; // (optional)

const { status, data } = await apiInstance.updateLoanCobLastDate(
    loanId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **loanId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

