# GetAccountsLinkedToPocketResponse

GetAccountsLinkedToPocketResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loanAccounts** | [**Set&lt;GetPocketLoanAccounts&gt;**](GetPocketLoanAccounts.md) |  | [optional] [default to undefined]
**savingAccounts** | [**Set&lt;GetPocketSavingAccounts&gt;**](GetPocketSavingAccounts.md) |  | [optional] [default to undefined]
**shareAccounts** | **Set&lt;object&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GetAccountsLinkedToPocketResponse } from 'fineract-typescript-client';

const instance: GetAccountsLinkedToPocketResponse = {
    loanAccounts,
    savingAccounts,
    shareAccounts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
