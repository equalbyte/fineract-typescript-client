# GetFixedDepositProductsResponse

GetFixedDepositProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingRule** | [**GetFixedDepositProductsAccountingRule**](GetFixedDepositProductsAccountingRule.md) |  | [optional] [default to undefined]
**currency** | [**GetFixedDepositProductsCurrency**](GetFixedDepositProductsCurrency.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | [**GetFixedDepositProductsInterestCalculationDaysInYearType**](GetFixedDepositProductsInterestCalculationDaysInYearType.md) |  | [optional] [default to undefined]
**interestCalculationType** | [**GetFixedDepositProductsInterestCalculationType**](GetFixedDepositProductsInterestCalculationType.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | [**GetFixedDepositProductsInterestCompoundingPeriodType**](GetFixedDepositProductsInterestCompoundingPeriodType.md) |  | [optional] [default to undefined]
**interestPostingPeriodType** | [**GetFixedDepositProductsInterestPostingPeriodType**](GetFixedDepositProductsInterestPostingPeriodType.md) |  | [optional] [default to undefined]
**maxDepositTerm** | **number** |  | [optional] [default to undefined]
**maxDepositTermType** | [**GetFixedDepositProductsMaxDepositTermType**](GetFixedDepositProductsMaxDepositTermType.md) |  | [optional] [default to undefined]
**minDepositTerm** | **number** |  | [optional] [default to undefined]
**minDepositTermType** | [**GetFixedDepositProductsMinDepositTermType**](GetFixedDepositProductsMinDepositTermType.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**preClosurePenalApplicable** | **boolean** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetFixedDepositProductsResponse } from 'fineract-typescript-client';

const instance: GetFixedDepositProductsResponse = {
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
    shortName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
