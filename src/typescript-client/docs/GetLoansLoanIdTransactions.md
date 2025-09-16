# GetLoansLoanIdTransactions

Set of GetLoansLoanIdTransactions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **number** |  | [optional] [default to undefined]
**accountNumber** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**bankNumber** | **number** |  | [optional] [default to undefined]
**checkNumber** | **number** |  | [optional] [default to undefined]
**currency** | [**GetLoansLoanIdCurrency**](GetLoansLoanIdCurrency.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**feeChargesPortion** | **number** |  | [optional] [default to undefined]
**fixedEmiAmount** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestPortion** | **number** |  | [optional] [default to undefined]
**loanChargePaidByList** | [**Array&lt;GetLoansLoanIdLoanChargePaidByData&gt;**](GetLoansLoanIdLoanChargePaidByData.md) | List of GetLoansLoanIdLoanChargePaidByData | [optional] [default to undefined]
**loanRepaymentScheduleInstallments** | [**Array&lt;GetLoansLoanIdLoanRepaymentScheduleInstallmentData&gt;**](GetLoansLoanIdLoanRepaymentScheduleInstallmentData.md) | List of GetLoansLoanIdLoanRepaymentScheduleInstallmentData | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**manuallyReversed** | **boolean** |  | [optional] [default to undefined]
**netDisbursalAmount** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overpaymentPortion** | **number** |  | [optional] [default to undefined]
**paymentDetailData** | [**GetLoansLoanIdPaymentDetailData**](GetLoansLoanIdPaymentDetailData.md) |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**paymentTypeOptions** | [**Array&lt;GetLoansLoanIdPaymentType&gt;**](GetLoansLoanIdPaymentType.md) | List of GetLoansLoanIdPaymentType | [optional] [default to undefined]
**penaltyChargesPortion** | **number** |  | [optional] [default to undefined]
**possibleNextRepaymentDate** | **string** |  | [optional] [default to undefined]
**principalPortion** | **number** |  | [optional] [default to undefined]
**receiptNumber** | **number** |  | [optional] [default to undefined]
**reversalExternalId** | **string** |  | [optional] [default to undefined]
**reversedOnDate** | **string** |  | [optional] [default to undefined]
**routingCode** | **number** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionAmount** | **number** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**transactionRelations** | [**Set&lt;GetLoansLoanIdLoanTransactionRelation&gt;**](GetLoansLoanIdLoanTransactionRelation.md) | List of GetLoansLoanIdLoanTransactionRelationData | [optional] [default to undefined]
**transactionType** | **string** |  | [optional] [default to undefined]
**type** | [**GetLoansLoanIdLoanTransactionEnumData**](GetLoansLoanIdLoanTransactionEnumData.md) |  | [optional] [default to undefined]
**unrecognizedIncomePortion** | **number** |  | [optional] [default to undefined]
**writeOffReasonOptions** | [**Array&lt;GetLoansLoanIdCodeValueData&gt;**](GetLoansLoanIdCodeValueData.md) | List of GetLoansLoanIdCodeValueData | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdTransactions } from 'fineract-typescript-client';

const instance: GetLoansLoanIdTransactions = {
    accountId,
    accountNumber,
    amount,
    bankNumber,
    checkNumber,
    currency,
    date,
    dateFormat,
    externalId,
    feeChargesPortion,
    fixedEmiAmount,
    id,
    interestPortion,
    loanChargePaidByList,
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
    submittedOnDate,
    transactionAmount,
    transactionDate,
    transactionRelations,
    transactionType,
    type,
    unrecognizedIncomePortion,
    writeOffReasonOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
