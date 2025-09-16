# GetChargesResponse

GetChargesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**chargeAppliesTo** | [**GetChargesAppliesToResponse**](GetChargesAppliesToResponse.md) |  | [optional] [default to undefined]
**chargeCalculationType** | [**GetChargesCalculationTypeResponse**](GetChargesCalculationTypeResponse.md) |  | [optional] [default to undefined]
**chargePaymentMode** | [**GetChargesPaymentModeResponse**](GetChargesPaymentModeResponse.md) |  | [optional] [default to undefined]
**chargeTimeType** | [**GetChargesTimeTypeResponse**](GetChargesTimeTypeResponse.md) |  | [optional] [default to undefined]
**currency** | [**GetChargesCurrencyResponse**](GetChargesCurrencyResponse.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**maxCap** | **number** |  | [optional] [default to undefined]
**minCap** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**penalty** | **boolean** |  | [optional] [default to undefined]
**taxGroup** | [**GetChargesTaxGroup**](GetChargesTaxGroup.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetChargesResponse } from 'fineract-typescript-client';

const instance: GetChargesResponse = {
    active,
    amount,
    chargeAppliesTo,
    chargeCalculationType,
    chargePaymentMode,
    chargeTimeType,
    currency,
    id,
    maxCap,
    minCap,
    name,
    penalty,
    taxGroup,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
