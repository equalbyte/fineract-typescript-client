# JournalEntriesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGLJournalEntry**](#creategljournalentry) | **POST** /v1/journalentries | Create \&quot;Balanced\&quot; Journal Entries|
|[**createReversalJournalEntry**](#createreversaljournalentry) | **POST** /v1/journalentries/{transactionId} | Update Running balances for Journal Entries|
|[**getJournalEntriesTemplate**](#getjournalentriestemplate) | **GET** /v1/journalentries/downloadtemplate | |
|[**postJournalEntriesTemplate**](#postjournalentriestemplate) | **POST** /v1/journalentries/uploadtemplate | |
|[**retrieveAll1**](#retrieveall1) | **GET** /v1/journalentries | List Journal Entries|
|[**retrieveJournalEntries**](#retrievejournalentries) | **GET** /v1/journalentries/provisioning | |
|[**retrieveJournalEntryById**](#retrievejournalentrybyid) | **GET** /v1/journalentries/{journalEntryId} | Retrieve a single Entry|
|[**retrieveOpeningBalance**](#retrieveopeningbalance) | **GET** /v1/journalentries/openingbalance | |

# **createGLJournalEntry**
> PostJournalEntriesResponse createGLJournalEntry()

Note: A Balanced (simple) Journal entry would have atleast one \"Debit\" and one \"Credit\" entry whose amounts are equal  Compound Journal entries may have \"n\" debits and \"m\" credits where both \"m\" and \"n\" are greater than 0 and the net sum or all debits and credits are equal    Mandatory Fields officeId, transactionDate   credits- glAccountId, amount, comments    debits-  glAccountId, amount, comments    Optional Fields paymentTypeId, accountNumber, checkNumber, routingCode, receiptNumber, bankNumber

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration,
    JournalEntryCommand
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let command: string; //command (optional) (default to undefined)
let journalEntryCommand: JournalEntryCommand; // (optional)

const { status, data } = await apiInstance.createGLJournalEntry(
    command,
    journalEntryCommand
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalEntryCommand** | **JournalEntryCommand**|  | |
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostJournalEntriesResponse**

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

# **createReversalJournalEntry**
> PostJournalEntriesTransactionIdResponse createReversalJournalEntry()

This API calculates the running balances for office. If office ID not provided this API calculates running balances for all offices.  Mandatory Fields officeId

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration,
    PostJournalEntriesTransactionIdRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let transactionId: string; //transactionId (default to undefined)
let command: string; //command (optional) (default to undefined)
let postJournalEntriesTransactionIdRequest: PostJournalEntriesTransactionIdRequest; // (optional)

const { status, data } = await apiInstance.createReversalJournalEntry(
    transactionId,
    command,
    postJournalEntriesTransactionIdRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postJournalEntriesTransactionIdRequest** | **PostJournalEntriesTransactionIdRequest**|  | |
| **transactionId** | [**string**] | transactionId | defaults to undefined|
| **command** | [**string**] | command | (optional) defaults to undefined|


### Return type

**PostJournalEntriesTransactionIdResponse**

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

# **getJournalEntriesTemplate**
> getJournalEntriesTemplate()


### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let officeId: number; // (optional) (default to undefined)
let dateFormat: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getJournalEntriesTemplate(
    officeId,
    dateFormat
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **postJournalEntriesTemplate**
> string postJournalEntriesTemplate()


### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let dateFormat: string; // (optional) (default to undefined)
let locale: string; // (optional) (default to undefined)
let uploadedInputStream: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.postJournalEntriesTemplate(
    dateFormat,
    locale,
    uploadedInputStream
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **retrieveAll1**
> GetJournalEntriesTransactionIdResponse retrieveAll1()

The list capability of journal entries can support pagination and sorting.  Example Requests:  journalentries  journalentries?transactionId=PB37X8Y21EQUY4S  journalentries?officeId=1&manualEntriesOnly=true&fromDate=1 July 2013&toDate=15 July 2013&dateFormat=dd MMMM yyyy&locale=en  journalentries?fields=officeName,glAccountName,transactionDate  journalentries?offset=10&limit=50  journalentries?orderBy=transactionId&sortOrder=DESC  journalentries?runningBalance=true  journalentries?transactionDetails=true  journalentries?loanId=12  journalentries?savingsId=24

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let officeId: number; //officeId (optional) (default to undefined)
let glAccountId: number; //glAccountId (optional) (default to undefined)
let manualEntriesOnly: boolean; //manualEntriesOnly (optional) (default to undefined)
let fromDate: object; //fromDate (optional) (default to undefined)
let toDate: object; //toDate (optional) (default to undefined)
let submittedOnDateFrom: object; //submittedOnDateFrom (optional) (default to undefined)
let submittedOnDateTo: object; //submittedOnDateTo (optional) (default to undefined)
let transactionId: string; //transactionId (optional) (default to undefined)
let entityType: number; //entityType (optional) (default to undefined)
let offset: number; //offset (optional) (default to undefined)
let limit: number; //limit (optional) (default to undefined)
let orderBy: string; //orderBy (optional) (default to undefined)
let sortOrder: string; //sortOrder (optional) (default to undefined)
let locale: string; //locale (optional) (default to undefined)
let dateFormat: string; //dateFormat (optional) (default to undefined)
let loanId: number; //loanId (optional) (default to undefined)
let savingsId: number; //savingsId (optional) (default to undefined)
let runningBalance: boolean; //runningBalance (optional) (default to undefined)
let transactionDetails: boolean; //transactionDetails (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveAll1(
    officeId,
    glAccountId,
    manualEntriesOnly,
    fromDate,
    toDate,
    submittedOnDateFrom,
    submittedOnDateTo,
    transactionId,
    entityType,
    offset,
    limit,
    orderBy,
    sortOrder,
    locale,
    dateFormat,
    loanId,
    savingsId,
    runningBalance,
    transactionDetails
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] | officeId | (optional) defaults to undefined|
| **glAccountId** | [**number**] | glAccountId | (optional) defaults to undefined|
| **manualEntriesOnly** | [**boolean**] | manualEntriesOnly | (optional) defaults to undefined|
| **fromDate** | **object** | fromDate | (optional) defaults to undefined|
| **toDate** | **object** | toDate | (optional) defaults to undefined|
| **submittedOnDateFrom** | **object** | submittedOnDateFrom | (optional) defaults to undefined|
| **submittedOnDateTo** | **object** | submittedOnDateTo | (optional) defaults to undefined|
| **transactionId** | [**string**] | transactionId | (optional) defaults to undefined|
| **entityType** | [**number**] | entityType | (optional) defaults to undefined|
| **offset** | [**number**] | offset | (optional) defaults to undefined|
| **limit** | [**number**] | limit | (optional) defaults to undefined|
| **orderBy** | [**string**] | orderBy | (optional) defaults to undefined|
| **sortOrder** | [**string**] | sortOrder | (optional) defaults to undefined|
| **locale** | [**string**] | locale | (optional) defaults to undefined|
| **dateFormat** | [**string**] | dateFormat | (optional) defaults to undefined|
| **loanId** | [**number**] | loanId | (optional) defaults to undefined|
| **savingsId** | [**number**] | savingsId | (optional) defaults to undefined|
| **runningBalance** | [**boolean**] | runningBalance | (optional) defaults to undefined|
| **transactionDetails** | [**boolean**] | transactionDetails | (optional) defaults to undefined|


### Return type

**GetJournalEntriesTransactionIdResponse**

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

# **retrieveJournalEntries**
> string retrieveJournalEntries()


### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let offset: number; // (optional) (default to undefined)
let limit: number; // (optional) (default to undefined)
let entryId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveJournalEntries(
    offset,
    limit,
    entryId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **offset** | [**number**] |  | (optional) defaults to undefined|
| **limit** | [**number**] |  | (optional) defaults to undefined|
| **entryId** | [**number**] |  | (optional) defaults to undefined|


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

# **retrieveJournalEntryById**
> JournalEntryTransactionItem retrieveJournalEntryById()

Example Requests:  journalentries/1    journalentries/1?fields=officeName,glAccountId,entryType,amount  journalentries/1?runningBalance=true  journalentries/1?transactionDetails=true

### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let journalEntryId: number; //journalEntryId (default to undefined)
let runningBalance: boolean; //runningBalance (optional) (default to undefined)
let transactionDetails: boolean; //transactionDetails (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveJournalEntryById(
    journalEntryId,
    runningBalance,
    transactionDetails
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **journalEntryId** | [**number**] | journalEntryId | defaults to undefined|
| **runningBalance** | [**boolean**] | runningBalance | (optional) defaults to undefined|
| **transactionDetails** | [**boolean**] | transactionDetails | (optional) defaults to undefined|


### Return type

**JournalEntryTransactionItem**

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

# **retrieveOpeningBalance**
> string retrieveOpeningBalance()


### Example

```typescript
import {
    JournalEntriesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new JournalEntriesApi(configuration);

let officeId: number; // (optional) (default to undefined)
let currencyCode: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.retrieveOpeningBalance(
    officeId,
    currencyCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | [**number**] |  | (optional) defaults to undefined|
| **currencyCode** | [**string**] |  | (optional) defaults to undefined|


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

