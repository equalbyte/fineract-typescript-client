# AccountingRulesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createAccountingRule**](#createaccountingrule) | **POST** /v1/accountingrules | Create/Define a Accounting rule|
|[**deleteAccountingRule**](#deleteaccountingrule) | **DELETE** /v1/accountingrules/{accountingRuleId} | Delete a Accounting Rule|
|[**retreiveAccountingRule**](#retreiveaccountingrule) | **GET** /v1/accountingrules/{accountingRuleId} | Retrieve a Accounting rule|
|[**retrieveAllAccountingRules**](#retrieveallaccountingrules) | **GET** /v1/accountingrules | Retrieve Accounting Rules|
|[**retrieveTemplate1**](#retrievetemplate1) | **GET** /v1/accountingrules/template | Retrieve Accounting Rule Details Template|
|[**updateAccountingRule**](#updateaccountingrule) | **PUT** /v1/accountingrules/{accountingRuleId} | Update a Accounting Rule|

# **createAccountingRule**
> PostAccountingRulesResponse createAccountingRule()

Define a new Accounting rule.  Mandatory Fields name, officeId, accountToDebit OR debitTags, accountToCredit OR creditTags.  Optional Fields description

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration,
    AccountRuleRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

let accountRuleRequest: AccountRuleRequest; // (optional)

const { status, data } = await apiInstance.createAccountingRule(
    accountRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountRuleRequest** | **AccountRuleRequest**|  | |


### Return type

**PostAccountingRulesResponse**

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

# **deleteAccountingRule**
> DeleteAccountingRulesResponse deleteAccountingRule()

Deletes a Accounting rule.

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

let accountingRuleId: number; //accountingRuleId (default to undefined)

const { status, data } = await apiInstance.deleteAccountingRule(
    accountingRuleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountingRuleId** | [**number**] | accountingRuleId | defaults to undefined|


### Return type

**DeleteAccountingRulesResponse**

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

# **retreiveAccountingRule**
> AccountingRuleData retreiveAccountingRule()

Returns the details of a defined Accounting rule.  Example Requests:  accountingrules/1

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

let accountingRuleId: number; //accountingRuleId (default to undefined)

const { status, data } = await apiInstance.retreiveAccountingRule(
    accountingRuleId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountingRuleId** | [**number**] | accountingRuleId | defaults to undefined|


### Return type

**AccountingRuleData**

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

# **retrieveAllAccountingRules**
> Array<AccountingRuleData> retrieveAllAccountingRules()

Returns the list of defined accounting rules.  Example Requests:  accountingrules

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

const { status, data } = await apiInstance.retrieveAllAccountingRules();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<AccountingRuleData>**

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

# **retrieveTemplate1**
> AccountingRuleData retrieveTemplate1()

This is a convenience resource. It can be useful when building maintenance user interface screens for client applications. The template data returned consists of any or all of:  Field Defaults Allowed Value Lists Example Request:  accountingrules/template

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

const { status, data } = await apiInstance.retrieveTemplate1();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AccountingRuleData**

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

# **updateAccountingRule**
> PutAccountingRulesResponse updateAccountingRule()

Updates the details of a Accounting rule.

### Example

```typescript
import {
    AccountingRulesApi,
    Configuration,
    AccountRuleRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new AccountingRulesApi(configuration);

let accountingRuleId: number; //accountingRuleId (default to undefined)
let accountRuleRequest: AccountRuleRequest; // (optional)

const { status, data } = await apiInstance.updateAccountingRule(
    accountingRuleId,
    accountRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountRuleRequest** | **AccountRuleRequest**|  | |
| **accountingRuleId** | [**number**] | accountingRuleId | defaults to undefined|


### Return type

**PutAccountingRulesResponse**

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

