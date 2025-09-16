# GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse

GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **number** |  | [optional] [default to undefined]
**accountNo** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**currency** | [**GetRecurringTransactionsCurrency**](GetRecurringTransactionsCurrency.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**paymentDetailData** | [**GetRecurringPaymentDetailData**](GetRecurringPaymentDetailData.md) |  | [optional] [default to undefined]
**reversed** | **boolean** |  | [optional] [default to undefined]
**runningBalance** | **number** |  | [optional] [default to undefined]
**transactionType** | [**GetRecurringTransactionsTransactionType**](GetRecurringTransactionsTransactionType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse } from 'fineract-typescript-client';

const instance: GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse = {
    accountId,
    accountNo,
    amount,
    currency,
    date,
    id,
    paymentDetailData,
    reversed,
    runningBalance,
    transactionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
