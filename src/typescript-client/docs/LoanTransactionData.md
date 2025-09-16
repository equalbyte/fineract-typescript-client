# LoanTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **number** |  | [optional] [default to undefined]
**accountNumber** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**availableDisbursementAmountWithOverApplied** | **number** |  | [optional] [default to undefined]
**bankNumber** | **number** |  | [optional] [default to undefined]
**chargeOffReasonOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**checkNumber** | **number** |  | [optional] [default to undefined]
**classification** | [**CodeValueData**](CodeValueData.md) |  | [optional] [default to undefined]
**classificationOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**externalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**externalLoanId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**feeChargesPortion** | **number** |  | [optional] [default to undefined]
**fixedEmiAmount** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestPortion** | **number** |  | [optional] [default to undefined]
**loanChargePaidByList** | [**Array&lt;LoanChargePaidByData&gt;**](LoanChargePaidByData.md) |  | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**loanRepaymentScheduleInstallments** | [**Array&lt;LoanRepaymentScheduleInstallmentData&gt;**](LoanRepaymentScheduleInstallmentData.md) |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**manuallyReversed** | **boolean** |  | [optional] [default to undefined]
**netDisbursalAmount** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overpaymentPortion** | **number** |  | [optional] [default to undefined]
**paymentDetailData** | [**PaymentDetailData**](PaymentDetailData.md) |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**paymentTypeOptions** | [**Array&lt;PaymentTypeData&gt;**](PaymentTypeData.md) |  | [optional] [default to undefined]
**penaltyChargesPortion** | **number** |  | [optional] [default to undefined]
**possibleNextRepaymentDate** | **string** |  | [optional] [default to undefined]
**principalPortion** | **number** |  | [optional] [default to undefined]
**receiptNumber** | **number** |  | [optional] [default to undefined]
**reversalExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**reversedOnDate** | **string** |  | [optional] [default to undefined]
**routingCode** | **number** |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionAmount** | **number** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**transactionRelations** | [**Array&lt;LoanTransactionRelationData&gt;**](LoanTransactionRelationData.md) |  | [optional] [default to undefined]
**transactionType** | **string** |  | [optional] [default to undefined]
**transfer** | [**AccountTransferData**](AccountTransferData.md) |  | [optional] [default to undefined]
**type** | [**LoanTransactionEnumData**](LoanTransactionEnumData.md) |  | [optional] [default to undefined]
**unrecognizedIncomePortion** | **number** |  | [optional] [default to undefined]
**writeOffReasonOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LoanTransactionData } from 'fineract-typescript-client';

const instance: LoanTransactionData = {
    accountId,
    accountNumber,
    amount,
    availableDisbursementAmountWithOverApplied,
    bankNumber,
    chargeOffReasonOptions,
    checkNumber,
    classification,
    classificationOptions,
    currency,
    date,
    dateFormat,
    externalId,
    externalLoanId,
    feeChargesPortion,
    fixedEmiAmount,
    id,
    interestPortion,
    loanChargePaidByList,
    loanId,
    loanRepaymentScheduleInstallments,
    locale,
    manuallyReversed,
    netDisbursalAmount,
    numberOfRepayments,
    officeId,
    officeName,
    outstandingLoanBalance,
    overpaymentPortion,
    paymentDetailData,
    paymentTypeId,
    paymentTypeOptions,
    penaltyChargesPortion,
    possibleNextRepaymentDate,
    principalPortion,
    receiptNumber,
    reversalExternalId,
    reversedOnDate,
    routingCode,
    rowIndex,
    submittedOnDate,
    transactionAmount,
    transactionDate,
    transactionRelations,
    transactionType,
    transfer,
    type,
    unrecognizedIncomePortion,
    writeOffReasonOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
