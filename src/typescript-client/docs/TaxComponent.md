# TaxComponent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **number** |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**creditAccountType** | **number** |  | [optional] [default to undefined]
**creditAcount** | [**GLAccount**](GLAccount.md) |  | [optional] [default to undefined]
**debitAccountType** | **number** |  | [optional] [default to undefined]
**debitAcount** | [**GLAccount**](GLAccount.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**lastModifiedBy** | **number** |  | [optional] [default to undefined]
**lastModifiedDate** | **string** |  | [optional] [default to undefined]
**_new** | **boolean** |  | [optional] [default to undefined]
**percentage** | **number** |  | [optional] [default to undefined]
**taxComponentHistories** | [**Set&lt;TaxComponentHistory&gt;**](TaxComponentHistory.md) |  | [optional] [default to undefined]
**taxGroupMappings** | [**Set&lt;TaxGroupMappings&gt;**](TaxGroupMappings.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TaxComponent } from 'fineract-typescript-client';

const instance: TaxComponent = {
    createdBy,
    createdDate,
    creditAccountType,
    creditAcount,
    debitAccountType,
    debitAcount,
    id,
    lastModifiedBy,
    lastModifiedDate,
    _new,
    percentage,
    taxComponentHistories,
    taxGroupMappings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
