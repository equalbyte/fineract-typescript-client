# TaxComponentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditAccount** | [**GLAccountData**](GLAccountData.md) |  | [optional] [default to undefined]
**creditAccountType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**debitAccount** | [**GLAccountData**](GLAccountData.md) |  | [optional] [default to undefined]
**debitAccountType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**glAccountOptions** | **{ [key: string]: Array&lt;GLAccountData&gt;; }** |  | [optional] [default to undefined]
**glAccountTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**percentage** | **number** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**taxComponentHistories** | [**Array&lt;TaxComponentHistoryData&gt;**](TaxComponentHistoryData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TaxComponentData } from 'fineract-typescript-client';

const instance: TaxComponentData = {
    creditAccount,
    creditAccountType,
    debitAccount,
    debitAccountType,
    glAccountOptions,
    glAccountTypeOptions,
    id,
    name,
    percentage,
    startDate,
    taxComponentHistories,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
