# AccountingRuleData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowMultipleCreditEntries** | **boolean** |  | [optional] [default to undefined]
**allowMultipleDebitEntries** | **boolean** |  | [optional] [default to undefined]
**allowedAccounts** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**allowedCreditTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedDebitTagOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**allowedOffices** | [**Array&lt;OfficeData&gt;**](OfficeData.md) |  | [optional] [default to undefined]
**creditAccounts** | [**Array&lt;GLAccountDataForLookup&gt;**](GLAccountDataForLookup.md) |  | [optional] [default to undefined]
**creditTags** | [**Array&lt;AccountingTagRuleData&gt;**](AccountingTagRuleData.md) |  | [optional] [default to undefined]
**debitAccounts** | [**Array&lt;GLAccountDataForLookup&gt;**](GLAccountDataForLookup.md) |  | [optional] [default to undefined]
**debitTags** | [**Array&lt;AccountingTagRuleData&gt;**](AccountingTagRuleData.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**systemDefined** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountingRuleData } from 'fineract-typescript-client';

const instance: AccountingRuleData = {
    allowMultipleCreditEntries,
    allowMultipleDebitEntries,
    allowedAccounts,
    allowedCreditTagOptions,
    allowedDebitTagOptions,
    allowedOffices,
    creditAccounts,
    creditTags,
    debitAccounts,
    debitTags,
    description,
    id,
    name,
    officeId,
    officeName,
    systemDefined,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
