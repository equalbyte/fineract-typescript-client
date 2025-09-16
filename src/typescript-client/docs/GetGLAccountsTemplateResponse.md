# GetGLAccountsTemplateResponse

GetGLAccountsTemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**allowedAssetsTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedEquityTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedExpensesTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedIncomeTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedLiabilitiesTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**assetHeaderAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**disabled** | **boolean** |  | [optional] [default to undefined]
**equityHeaderAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**expenseHeaderAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**liabilityHeaderAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**manualEntriesAllowed** | **boolean** |  | [optional] [default to undefined]
**type** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**usage** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**usageOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetGLAccountsTemplateResponse } from 'fineract-typescript-client';

const instance: GetGLAccountsTemplateResponse = {
    accountTypeOptions,
    allowedAssetsTagOptions,
    allowedEquityTagOptions,
    allowedExpensesTagOptions,
    allowedIncomeTagOptions,
    allowedLiabilitiesTagOptions,
    assetHeaderAccountOptions,
    disabled,
    equityHeaderAccountOptions,
    expenseHeaderAccountOptions,
    liabilityHeaderAccountOptions,
    manualEntriesAllowed,
    type,
    usage,
    usageOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
