# GetSavingsAccountTransactionsPageItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **number** |  | [optional] [default to undefined]
**accountNo** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**chargesPaidByData** | [**Set&lt;GetSavingsAccountChargesPaidByData&gt;**](GetSavingsAccountChargesPaidByData.md) |  | [optional] [default to undefined]
**currency** | [**GetTransactionsCurrency**](GetTransactionsCurrency.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**entryType** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestedPostedAsOn** | **boolean** |  | [optional] [default to undefined]
**isManualTransaction** | **boolean** |  | [optional] [default to undefined]
**isReversal** | **boolean** |  | [optional] [default to undefined]
**lienTransaction** | **boolean** |  | [optional] [default to undefined]
**originalTransactionId** | **number** |  | [optional] [default to undefined]
**paymentDetailData** | [**GetTransactionsPaymentDetailData**](GetTransactionsPaymentDetailData.md) |  | [optional] [default to undefined]
**releaseTransactionId** | **number** |  | [optional] [default to undefined]
**reversed** | **boolean** |  | [optional] [default to undefined]
**runningBalance** | **number** |  | [optional] [default to undefined]
**submittedByUsername** | **string** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionType** | [**GetTranscationEnumData**](GetTranscationEnumData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetSavingsAccountTransactionsPageItem } from 'fineract-typescript-client';

const instance: GetSavingsAccountTransactionsPageItem = {
    accountId,
    accountNo,
    amount,
    chargesPaidByData,
    currency,
    date,
    entryType,
    id,
    interestedPostedAsOn,
    isManualTransaction,
    isReversal,
    lienTransaction,
    originalTransactionId,
    paymentDetailData,
    releaseTransactionId,
    reversed,
    runningBalance,
    submittedByUsername,
    submittedOnDate,
    transactionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
