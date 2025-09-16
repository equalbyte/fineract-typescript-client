# PostSavingsProductsRequest

PostSavingsProductsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountMappingForPayment** | **string** |  | [optional] [default to undefined]
**accountingRule** | **number** |  | [optional] [default to undefined]
**allowOverdraft** | **boolean** |  | [optional] [default to undefined]
**charges** | [**Array&lt;PostSavingsCharges&gt;**](PostSavingsCharges.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**digitsAfterDecimal** | **number** |  | [optional] [default to undefined]
**enforceMinRequiredBalance** | **boolean** |  | [optional] [default to undefined]
**inMultiplesOf** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | **number** |  | [optional] [default to undefined]
**interestCalculationType** | **number** |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | **number** |  | [optional] [default to undefined]
**interestPostingPeriodType** | **number** |  | [optional] [default to undefined]
**isDormancyTrackingActive** | **boolean** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**withHoldTax** | **boolean** |  | [optional] [default to undefined]
**withdrawalFeeForTransfers** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PostSavingsProductsRequest } from 'fineract-typescript-client';

const instance: PostSavingsProductsRequest = {
    accountMappingForPayment,
    accountingRule,
    allowOverdraft,
    charges,
    currencyCode,
    description,
    digitsAfterDecimal,
    enforceMinRequiredBalance,
    inMultiplesOf,
    interestCalculationDaysInYearType,
    interestCalculationType,
    interestCompoundingPeriodType,
    interestPostingPeriodType,
    isDormancyTrackingActive,
    locale,
    name,
    nominalAnnualInterestRate,
    shortName,
    withHoldTax,
    withdrawalFeeForTransfers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
