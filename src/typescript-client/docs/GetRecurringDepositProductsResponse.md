# GetRecurringDepositProductsResponse

GetRecurringDepositProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingRule** | [**GetRecurringDepositProductsAccountingRule**](GetRecurringDepositProductsAccountingRule.md) |  | [optional] [default to undefined]
**currency** | [**GetRecurringDepositProductsCurrency**](GetRecurringDepositProductsCurrency.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | [**GetRecurringDepositProductsInterestCalculationDaysInYearType**](GetRecurringDepositProductsInterestCalculationDaysInYearType.md) |  | [optional] [default to undefined]
**interestCalculationType** | [**GetRecurringDepositProductsInterestCalculationType**](GetRecurringDepositProductsInterestCalculationType.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | [**GetRecurringDepositProductsInterestCompoundingPeriodType**](GetRecurringDepositProductsInterestCompoundingPeriodType.md) |  | [optional] [default to undefined]
**interestPostingPeriodType** | [**GetRecurringDepositProductsInterestPostingPeriodType**](GetRecurringDepositProductsInterestPostingPeriodType.md) |  | [optional] [default to undefined]
**maxDepositTerm** | **number** |  | [optional] [default to undefined]
**maxDepositTermType** | [**GetRecurringDepositProductsMaxDepositTermType**](GetRecurringDepositProductsMaxDepositTermType.md) |  | [optional] [default to undefined]
**minDepositTerm** | **number** |  | [optional] [default to undefined]
**minDepositTermType** | [**GetRecurringDepositProductsMinDepositTermType**](GetRecurringDepositProductsMinDepositTermType.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**preClosurePenalApplicable** | **boolean** |  | [optional] [default to undefined]
**recurringDepositFrequency** | **number** |  | [optional] [default to undefined]
**recurringDepositFrequencyType** | [**GetRecurringDepositProductsRecurringDepositFrequencyType**](GetRecurringDepositProductsRecurringDepositFrequencyType.md) |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetRecurringDepositProductsResponse } from 'fineract-typescript-client';

const instance: GetRecurringDepositProductsResponse = {
    accountingRule,
    currency,
    description,
    id,
    interestCalculationDaysInYearType,
    interestCalculationType,
    interestCompoundingPeriodType,
    interestPostingPeriodType,
    maxDepositTerm,
    maxDepositTermType,
    minDepositTerm,
    minDepositTermType,
    name,
    nominalAnnualInterestRate,
    preClosurePenalApplicable,
    recurringDepositFrequency,
    recurringDepositFrequencyType,
    shortName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
