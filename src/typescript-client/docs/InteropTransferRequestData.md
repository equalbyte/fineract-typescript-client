# InteropTransferRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **string** |  | [default to undefined]
**amount** | [**MoneyData**](MoneyData.md) |  | [default to undefined]
**expiration** | **string** |  | [optional] [default to undefined]
**expirationLocalDate** | **string** |  | [optional] [default to undefined]
**extensionList** | [**Array&lt;ExtensionData&gt;**](ExtensionData.md) |  | [optional] [default to undefined]
**fspCommission** | [**MoneyData**](MoneyData.md) |  | [optional] [default to undefined]
**fspFee** | [**MoneyData**](MoneyData.md) |  | [optional] [default to undefined]
**geoCode** | [**GeoCodeData**](GeoCodeData.md) |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**requestCode** | **string** |  | [optional] [default to undefined]
**transactionCode** | **string** |  | [default to undefined]
**transactionRole** | **string** |  | [default to undefined]
**transactionType** | [**InteropTransactionTypeData**](InteropTransactionTypeData.md) |  | [optional] [default to undefined]
**transferCode** | **string** |  | [default to undefined]

## Example

```typescript
import { InteropTransferRequestData } from 'fineract-typescript-client';

const instance: InteropTransferRequestData = {
    accountId,
    amount,
    expiration,
    expirationLocalDate,
    extensionList,
    fspCommission,
    fspFee,
    geoCode,
    note,
    requestCode,
    transactionCode,
    transactionRole,
    transactionType,
    transferCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
