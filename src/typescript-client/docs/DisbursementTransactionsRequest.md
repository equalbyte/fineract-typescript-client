# DisbursementTransactionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulkRepaymentTransactions** | [**Array&lt;RepaymentTransactionRequest&gt;**](RepaymentTransactionRequest.md) |  | [optional] [default to undefined]
**bulkSavingsDueTransactions** | [**Array&lt;SavingDueTransactionRequest&gt;**](SavingDueTransactionRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DisbursementTransactionsRequest } from 'fineract-typescript-client';

const instance: DisbursementTransactionsRequest = {
    bulkRepaymentTransactions,
    bulkSavingsDueTransactions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
