# PostRecurringDepositProductsRequest

PostRecurringDepositProductsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingRule** | **number** |  | [optional] [default to undefined]
**charts** | [**Set&lt;PostRecurringDepositProductsCharts&gt;**](PostRecurringDepositProductsCharts.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**depositAmount** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**digitsAfterDecimal** | **number** |  | [optional] [default to undefined]
**inMultiplesOf** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | **number** |  | [optional] [default to undefined]
**interestCalculationType** | **number** |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | **number** |  | [optional] [default to undefined]
**interestPostingPeriodType** | **number** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**maxDepositAmount** | **number** |  | [optional] [default to undefined]
**maxDepositTerm** | **number** |  | [optional] [default to undefined]
**maxDepositTermTypeId** | **number** |  | [optional] [default to undefined]
**minDepositAmount** | **number** |  | [optional] [default to undefined]
**minDepositTerm** | **number** |  | [optional] [default to undefined]
**minDepositTermTypeId** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**preClosurePenalApplicable** | **boolean** |  | [optional] [default to undefined]
**preClosurePenalInterest** | **number** |  | [optional] [default to undefined]
**preClosurePenalInterestOnTypeId** | **number** |  | [optional] [default to undefined]
**recurringDepositFrequency** | **number** |  | [optional] [default to undefined]
**recurringDepositFrequencyTypeId** | **number** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PostRecurringDepositProductsRequest } from 'fineract-typescript-client';

const instance: PostRecurringDepositProductsRequest = {
    accountingRule,
    charts,
    currencyCode,
    depositAmount,
    description,
    digitsAfterDecimal,
    inMultiplesOf,
    interestCalculationDaysInYearType,
    interestCalculationType,
    interestCompoundingPeriodType,
    interestPostingPeriodType,
    locale,
    maxDepositAmount,
    maxDepositTerm,
    maxDepositTermTypeId,
    minDepositAmount,
    minDepositTerm,
    minDepositTermTypeId,
    name,
    preClosurePenalApplicable,
    preClosurePenalInterest,
    preClosurePenalInterestOnTypeId,
    recurringDepositFrequency,
    recurringDepositFrequencyTypeId,
    shortName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
