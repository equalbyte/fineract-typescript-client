# InteropQuoteRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** |  | [default to undefined]
**amount** | [**MoneyData**](MoneyData.md) |  | [default to undefined]
**amountType** | **string** |  | [default to undefined]
**expiration** | **string** |  | [optional] [default to undefined]
**expirationLocalDate** | **string** |  | [optional] [default to undefined]
**extensionList** | [**Array&lt;ExtensionData&gt;**](ExtensionData.md) |  | [optional] [default to undefined]
**fees** | [**MoneyData**](MoneyData.md) |  | [optional] [default to undefined]
**geoCode** | [**GeoCodeData**](GeoCodeData.md) |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**quoteCode** | **string** |  | [default to undefined]
**requestCode** | **string** |  | [optional] [default to undefined]
**transactionCode** | **string** |  | [default to undefined]
**transactionRole** | **string** |  | [default to undefined]
**transactionType** | [**InteropTransactionTypeData**](InteropTransactionTypeData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InteropQuoteRequestData } from 'fineract-typescript-client';

const instance: InteropQuoteRequestData = {
    accountId,
    amount,
    amountType,
    expiration,
    expirationLocalDate,
    extensionList,
    fees,
    geoCode,
    note,
    quoteCode,
    requestCode,
    transactionCode,
    transactionRole,
    transactionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
