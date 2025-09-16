# JournalEntryData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**bankNumber** | **string** |  | [optional] [default to undefined]
**checkNumber** | **string** |  | [optional] [default to undefined]
**comments** | **string** |  | [optional] [default to undefined]
**createdByUserId** | **number** |  | [optional] [default to undefined]
**createdByUserName** | **string** |  | [optional] [default to undefined]
**createdDate** | **string** |  | [optional] [default to undefined]
**credits** | [**Array&lt;CreditDebit&gt;**](CreditDebit.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**debits** | [**Array&lt;CreditDebit&gt;**](CreditDebit.md) |  | [optional] [default to undefined]
**entityId** | **number** |  | [optional] [default to undefined]
**entityType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**entryType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**externalAssetOwner** | **string** |  | [optional] [default to undefined]
**glAccountCode** | **string** |  | [optional] [default to undefined]
**glAccountId** | **number** |  | [optional] [default to undefined]
**glAccountName** | **string** |  | [optional] [default to undefined]
**glAccountType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**manualEntry** | **boolean** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**officeRunningBalance** | **number** |  | [optional] [default to undefined]
**organizationRunningBalance** | **number** |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**receiptNumber** | **string** |  | [optional] [default to undefined]
**referenceNumber** | **string** |  | [optional] [default to undefined]
**reversed** | **boolean** |  | [optional] [default to undefined]
**routingCode** | **string** |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**runningBalanceComputed** | **boolean** |  | [optional] [default to undefined]
**savingTransactionId** | **number** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]
**transactionDetails** | [**TransactionDetailData**](TransactionDetailData.md) |  | [optional] [default to undefined]
**transactionId** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { JournalEntryData } from 'fineract-typescript-client';

const instance: JournalEntryData = {
    accountNumber,
    amount,
    bankNumber,
    checkNumber,
    comments,
    createdByUserId,
    createdByUserName,
    createdDate,
    credits,
    currency,
    currencyCode,
    dateFormat,
    debits,
    entityId,
    entityType,
    entryType,
    externalAssetOwner,
    glAccountCode,
    glAccountId,
    glAccountName,
    glAccountType,
    id,
    locale,
    manualEntry,
    officeId,
    officeName,
    officeRunningBalance,
    organizationRunningBalance,
    paymentTypeId,
    receiptNumber,
    referenceNumber,
    reversed,
    routingCode,
    rowIndex,
    runningBalanceComputed,
    savingTransactionId,
    submittedOnDate,
    transactionDate,
    transactionDetails,
    transactionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
