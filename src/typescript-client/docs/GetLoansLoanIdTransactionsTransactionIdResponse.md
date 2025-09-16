# GetLoansLoanIdTransactionsTransactionIdResponse

GetLoansLoanIdTransactionsTransactionIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**classification** | [**GetCodeValuesDataResponse**](GetCodeValuesDataResponse.md) |  | [optional] [default to undefined]
**currency** | [**GetLoansCurrency**](GetLoansCurrency.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**feeChargesPortion** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestPortion** | **number** |  | [optional] [default to undefined]
**loanChargePaidByList** | [**Set&lt;GetLoansLoanIdLoanChargePaidByData&gt;**](GetLoansLoanIdLoanChargePaidByData.md) |  | [optional] [default to undefined]
**manuallyReversed** | **boolean** |  | [optional] [default to undefined]
**netDisbursalAmount** | **number** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overpaymentPortion** | **number** |  | [optional] [default to undefined]
**paymentDetailData** | [**PaymentDetailData**](PaymentDetailData.md) |  | [optional] [default to undefined]
**penaltyChargesPortion** | **number** |  | [optional] [default to undefined]
**possibleNextRepaymentDate** | **string** |  | [optional] [default to undefined]
**principalPortion** | **number** |  | [optional] [default to undefined]
**reversalExternalId** | **string** |  | [optional] [default to undefined]
**reversedOnDate** | **string** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionRelations** | [**Set&lt;GetLoanTransactionRelation&gt;**](GetLoanTransactionRelation.md) |  | [optional] [default to undefined]
**type** | [**GetLoansType**](GetLoansType.md) |  | [optional] [default to undefined]
**unrecognizedIncomePortion** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdTransactionsTransactionIdResponse } from 'fineract-typescript-client';

const instance: GetLoansLoanIdTransactionsTransactionIdResponse = {
    amount,
    classification,
    currency,
    date,
    externalId,
    feeChargesPortion,
    id,
    interestPortion,
    loanChargePaidByList,
    manuallyReversed,
    netDisbursalAmount,
    outstandingLoanBalance,
    overpaymentPortion,
    paymentDetailData,
    penaltyChargesPortion,
    possibleNextRepaymentDate,
    principalPortion,
    reversalExternalId,
    reversedOnDate,
    submittedOnDate,
    transactionRelations,
    type,
    unrecognizedIncomePortion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
