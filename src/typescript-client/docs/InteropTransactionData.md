# InteropTransactionData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountBalance** | **number** |  | [default to undefined]
**accountId** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**bookingDateTime** | **string** |  | [default to undefined]
**changes** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**chargeAmount** | **number** |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**commandId** | **number** |  | [optional] [default to undefined]
**creditBureauReportData** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**currency** | **string** |  | [default to undefined]
**externalIdOrNull** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**glimId** | **number** |  | [optional] [default to undefined]
**groupId** | **number** |  | [optional] [default to undefined]
**gsimId** | **number** |  | [optional] [default to undefined]
**loanExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**resourceExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**resourceId** | **number** |  | [optional] [default to undefined]
**resourceIdentifier** | **string** |  | [optional] [default to undefined]
**rollbackTransaction** | **boolean** |  | [optional] [default to undefined]
**savingTransactionId** | **string** |  | [default to undefined]
**savingsId** | **number** |  | [optional] [default to undefined]
**subResourceExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**subResourceId** | **number** |  | [optional] [default to undefined]
**transactionId** | **string** |  | [optional] [default to undefined]
**transactionType** | **string** |  | [default to undefined]
**valueDateTime** | **string** |  | [default to undefined]

## Example

```typescript
import { InteropTransactionData } from 'fineract-typescript-client';

const instance: InteropTransactionData = {
    accountBalance,
    accountId,
    amount,
    bookingDateTime,
    changes,
    chargeAmount,
    clientId,
    commandId,
    creditBureauReportData,
    currency,
    externalIdOrNull,
    glimId,
    groupId,
    gsimId,
    loanExternalId,
    loanId,
    note,
    officeId,
    productId,
    resourceExternalId,
    resourceId,
    resourceIdentifier,
    rollbackTransaction,
    savingTransactionId,
    savingsId,
    subResourceExternalId,
    subResourceId,
    transactionId,
    transactionType,
    valueDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
