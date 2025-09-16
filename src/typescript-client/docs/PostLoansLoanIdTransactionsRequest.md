# PostLoansLoanIdTransactionsRequest

PostLoansLoanIdTransactionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**bankNumber** | **string** |  | [optional] [default to undefined]
**chargeOffReasonId** | **number** |  | [optional] [default to undefined]
**checkNumber** | **string** |  | [optional] [default to undefined]
**classificationId** | **number** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**frequencyNumber** | **number** |  | [optional] [default to undefined]
**frequencyType** | **string** |  | [optional] [default to undefined]
**interestRefundCalculation** | **boolean** | Optional. Controls whether Interest Refund transaction should be created for this refund. If not provided, loan product config is used. | [optional] [default to undefined]
**loanChargeId** | **number** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**numberOfInstallments** | **number** |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**receiptNumber** | **string** |  | [optional] [default to undefined]
**reversalExternalId** | **string** |  | [optional] [default to undefined]
**routingCode** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**transactionAmount** | **number** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**writeoffReasonId** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PostLoansLoanIdTransactionsRequest } from 'fineract-typescript-client';

const instance: PostLoansLoanIdTransactionsRequest = {
    accountNumber,
    bankNumber,
    chargeOffReasonId,
    checkNumber,
    classificationId,
    dateFormat,
    dueDate,
    externalId,
    frequencyNumber,
    frequencyType,
    interestRefundCalculation,
    loanChargeId,
    locale,
    note,
    numberOfInstallments,
    paymentTypeId,
    receiptNumber,
    reversalExternalId,
    routingCode,
    startDate,
    transactionAmount,
    transactionDate,
    writeoffReasonId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
