# JournalEntryCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**accountingRuleId** | **number** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**bankNumber** | **string** |  | [optional] [default to undefined]
**checkNumber** | **string** |  | [optional] [default to undefined]
**comments** | **string** |  | [optional] [default to undefined]
**credits** | [**Array&lt;SingleDebitOrCreditEntryCommand&gt;**](SingleDebitOrCreditEntryCommand.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**debits** | [**Array&lt;SingleDebitOrCreditEntryCommand&gt;**](SingleDebitOrCreditEntryCommand.md) |  | [optional] [default to undefined]
**externalAssetOwner** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**paymentTypeId** | **number** |  | [optional] [default to undefined]
**receiptNumber** | **string** |  | [optional] [default to undefined]
**referenceNumber** | **string** |  | [optional] [default to undefined]
**routingCode** | **string** |  | [optional] [default to undefined]
**transactionDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { JournalEntryCommand } from 'fineract-typescript-client';

const instance: JournalEntryCommand = {
    accountNumber,
    accountingRuleId,
    amount,
    bankNumber,
    checkNumber,
    comments,
    credits,
    currencyCode,
    dateFormat,
    debits,
    externalAssetOwner,
    locale,
    officeId,
    paymentTypeId,
    receiptNumber,
    referenceNumber,
    routingCode,
    transactionDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
