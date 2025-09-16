# GetLoanProductsInterestRecalculationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowCompoundingOnEod** | **boolean** |  | [optional] [default to undefined]
**disallowInterestCalculationOnPastDue** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestRecalculationCompoundingFrequencyType** | [**GetLoanProductsInterestRecalculationCompoundingFrequencyType**](GetLoanProductsInterestRecalculationCompoundingFrequencyType.md) |  | [optional] [default to undefined]
**interestRecalculationCompoundingType** | [**GetLoanProductsInterestRecalculationCompoundingType**](GetLoanProductsInterestRecalculationCompoundingType.md) |  | [optional] [default to undefined]
**isArrearsBasedOnOriginalSchedule** | **boolean** |  | [optional] [default to undefined]
**isCompoundingToBePostedAsTransaction** | **boolean** |  | [optional] [default to undefined]
**preClosureInterestCalculationStrategy** | [**GetLoanProductsPreClosureInterestCalculationStrategy**](GetLoanProductsPreClosureInterestCalculationStrategy.md) |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**recalculationCompoundingFrequencyInterval** | **number** |  | [optional] [default to undefined]
**recalculationCompoundingFrequencyOnDayType** | **number** |  | [optional] [default to undefined]
**recalculationRestFrequencyInterval** | **number** |  | [optional] [default to undefined]
**recalculationRestFrequencyType** | [**GetLoanProductsInterestRecalculationCompoundingFrequencyType**](GetLoanProductsInterestRecalculationCompoundingFrequencyType.md) |  | [optional] [default to undefined]
**rescheduleStrategyType** | [**GetLoanProductsRescheduleStrategyType**](GetLoanProductsRescheduleStrategyType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoanProductsInterestRecalculationData } from 'fineract-typescript-client';

const instance: GetLoanProductsInterestRecalculationData = {
    allowCompoundingOnEod,
    disallowInterestCalculationOnPastDue,
    id,
    interestRecalculationCompoundingFrequencyType,
    interestRecalculationCompoundingType,
    isArrearsBasedOnOriginalSchedule,
    isCompoundingToBePostedAsTransaction,
    preClosureInterestCalculationStrategy,
    productId,
    recalculationCompoundingFrequencyInterval,
    recalculationCompoundingFrequencyOnDayType,
    recalculationRestFrequencyInterval,
    recalculationRestFrequencyType,
    rescheduleStrategyType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
