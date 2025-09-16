# SavingsAccountTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountCredit** | **number** |  | [optional] [default to undefined]
**accountDebit** | **number** |  | [optional] [default to undefined]
**accountId** | **number** |  | [optional] [default to undefined]
**accountNo** | **string** |  | [optional] [default to undefined]
**accountNumber** | **string** |  | [optional] [default to undefined]
**accrual** | **boolean** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**amountOnHold** | **boolean** |  | [optional] [default to undefined]
**amountRelease** | **boolean** |  | [optional] [default to undefined]
**annualFee** | **boolean** |  | [optional] [default to undefined]
**annualFeeAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**balanceEndDate** | **string** |  | [optional] [default to undefined]
**balanceNumberOfDays** | **number** |  | [optional] [default to undefined]
**bankNumber** | **string** |  | [optional] [default to undefined]
**chargeTransaction** | **boolean** |  | [optional] [default to undefined]
**chargeTransactionAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**chargesPaidByData** | [**Set&lt;SavingsAccountChargesPaidByData&gt;**](SavingsAccountChargesPaidByData.md) |  | [optional] [default to undefined]
**checkNumber** | **string** |  | [optional] [default to undefined]
**credit** | **boolean** |  | [optional] [default to undefined]
**cumulativeBalance** | **number** |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**debit** | **boolean** |  | [optional] [default to undefined]
**deposit** | **boolean** |  | [optional] [default to undefined]
**depositAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**dividendPayoutAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**endOfBalanceLocalDate** | **string** |  | [optional] [default to undefined]
**entryType** | **string** |  | [optional] [default to undefined]
**feeCharge** | **boolean** |  | [optional] [default to undefined]
**feeChargeAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestPosting** | **boolean** |  | [optional] [default to undefined]
**interestPostingAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**interestedPostedAsOn** | **boolean** |  | [optional] [default to undefined]
**isManualTransaction** | **boolean** |  | [optional] [default to undefined]
**isOverdraft** | **boolean** |  | [optional] [default to undefined]
**isReversal** | **boolean** |  | [optional] [default to undefined]
**lienTransaction** | **boolean** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**manualTransaction** | **boolean** |  | [optional] [default to undefined]
**modifiedId** | **number** |  | [optional] [default to undefined]
**notReversed** | **boolean** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**originalTransactionId** | **number** |  | [optional] [default to undefined]
**outstandingChargeAmount** | **number** |  | [optional] [default to undefined]
**overdraftAmount** | **number** |  | [optional] [default to undefined]
**overdraftInterestAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**payCharge** | **boolean** |  | [optional] [default to undefined]
**paymentDetailData** | [**PaymentDetailData**](PaymentDetailData.md) |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**paymentTypeOptions** | [**Array&lt;PaymentTypeData&gt;**](PaymentTypeData.md) |  | [optional] [default to undefined]
**penaltyCharge** | **boolean** |  | [optional] [default to undefined]
**penaltyChargeAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**reasonForBlock** | **string** |  | [optional] [default to undefined]
**receiptNumber** | **string** |  | [optional] [default to undefined]
**refNo** | **string** |  | [optional] [default to undefined]
**releaseTransactionId** | **number** |  | [optional] [default to undefined]
**reversalTransaction** | **boolean** |  | [optional] [default to undefined]
**reversed** | **boolean** |  | [optional] [default to undefined]
**routingCode** | **string** |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**runningBalance** | **number** |  | [optional] [default to undefined]
**savingsAccountChargesPaid** | [**Set&lt;SavingsAccountChargesPaidByData&gt;**](SavingsAccountChargesPaidByData.md) |  | [optional] [default to undefined]
**savingsAccountId** | **number** |  | [optional] [default to undefined]
**submittedByUsername** | **string** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**taxDetails** | [**Array&lt;TaxDetailsData&gt;**](TaxDetailsData.md) |  | [optional] [default to undefined]
**transactionAmount** | **number** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**transactionType** | [**SavingsAccountTransactionEnumData**](SavingsAccountTransactionEnumData.md) |  | [optional] [default to undefined]
**transfer** | [**AccountTransferData**](AccountTransferData.md) |  | [optional] [default to undefined]
**waiveCharge** | **boolean** |  | [optional] [default to undefined]
**waiveFeeCharge** | **boolean** |  | [optional] [default to undefined]
**waiveFeeChargeAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**waivePenaltyCharge** | **boolean** |  | [optional] [default to undefined]
**waivePenaltyChargeAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**withHoldTaxAndNotReversed** | **boolean** |  | [optional] [default to undefined]
**withdrawal** | **boolean** |  | [optional] [default to undefined]
**withdrawalFeeAndNotReversed** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SavingsAccountTransactionData } from 'fineract-typescript-client';

const instance: SavingsAccountTransactionData = {
    accountCredit,
    accountDebit,
    accountId,
    accountNo,
    accountNumber,
    accrual,
    amount,
    amountOnHold,
    amountRelease,
    annualFee,
    annualFeeAndNotReversed,
    balanceEndDate,
    balanceNumberOfDays,
    bankNumber,
    chargeTransaction,
    chargeTransactionAndNotReversed,
    chargesPaidByData,
    checkNumber,
    credit,
    cumulativeBalance,
    currency,
    date,
    dateFormat,
    debit,
    deposit,
    depositAndNotReversed,
    dividendPayoutAndNotReversed,
    endOfBalanceLocalDate,
    entryType,
    feeCharge,
    feeChargeAndNotReversed,
    id,
    interestPosting,
    interestPostingAndNotReversed,
    interestedPostedAsOn,
    isManualTransaction,
    isOverdraft,
    isReversal,
    lienTransaction,
    locale,
    manualTransaction,
    modifiedId,
    notReversed,
    note,
    originalTransactionId,
    outstandingChargeAmount,
    overdraftAmount,
    overdraftInterestAndNotReversed,
    payCharge,
    paymentDetailData,
    paymentTypeId,
    paymentTypeOptions,
    penaltyCharge,
    penaltyChargeAndNotReversed,
    reasonForBlock,
    receiptNumber,
    refNo,
    releaseTransactionId,
    reversalTransaction,
    reversed,
    routingCode,
    rowIndex,
    runningBalance,
    savingsAccountChargesPaid,
    savingsAccountId,
    submittedByUsername,
    submittedOnDate,
    taxDetails,
    transactionAmount,
    transactionDate,
    transactionType,
    transfer,
    waiveCharge,
    waiveFeeCharge,
    waiveFeeChargeAndNotReversed,
    waivePenaltyCharge,
    waivePenaltyChargeAndNotReversed,
    withHoldTaxAndNotReversed,
    withdrawal,
    withdrawalFeeAndNotReversed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
