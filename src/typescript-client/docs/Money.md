# Money


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**amountDefaultedToNullIfZero** | **number** |  | [optional] [default to undefined]
**currency** | [**MonetaryCurrency**](MonetaryCurrency.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**currencyData** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**greaterThanZero** | **boolean** |  | [optional] [default to undefined]
**inMultiplesOf** | **number** |  | [optional] [default to undefined]
**lessThanZero** | **boolean** |  | [optional] [default to undefined]
**mc** | [**InterestPeriodMc**](InterestPeriodMc.md) |  | [optional] [default to undefined]
**zero** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Money } from 'fineract-typescript-client';

const instance: Money = {
    amount,
    amountDefaultedToNullIfZero,
    currency,
    currencyCode,
    currencyData,
    greaterThanZero,
    inMultiplesOf,
    lessThanZero,
    mc,
    zero,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
