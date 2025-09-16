# GetSavingsProductsProductIdResponse

GetSavingsProductsProductIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingMappings** | [**GetSavingsProductsAccountingMappings**](GetSavingsProductsAccountingMappings.md) |  | [optional] [default to undefined]
**accountingRule** | [**GetSavingsProductsAccountingRule**](GetSavingsProductsAccountingRule.md) |  | [optional] [default to undefined]
**charges** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**currency** | [**GetSavingsCurrency**](GetSavingsCurrency.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**feeToIncomeAccountMappings** | [**Set&lt;GetSavingsProductsFeeToIncomeAccountMappings&gt;**](GetSavingsProductsFeeToIncomeAccountMappings.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | [**GetSavingsProductsInterestCalculationDaysInYearType**](GetSavingsProductsInterestCalculationDaysInYearType.md) |  | [optional] [default to undefined]
**interestCalculationType** | [**GetSavingsProductsInterestCalculationType**](GetSavingsProductsInterestCalculationType.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | [**GetSavingsProductsInterestCompoundingPeriodType**](GetSavingsProductsInterestCompoundingPeriodType.md) |  | [optional] [default to undefined]
**interestPostingPeriodType** | [**GetSavingsProductsInterestPostingPeriodType**](GetSavingsProductsInterestPostingPeriodType.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**paymentChannelToFundSourceMappings** | [**Set&lt;GetSavingsProductsPaymentChannelToFundSourceMappings&gt;**](GetSavingsProductsPaymentChannelToFundSourceMappings.md) |  | [optional] [default to undefined]
**penaltyToIncomeAccountMappings** | [**Set&lt;GetSavingsProductsPenaltyToIncomeAccountMappings&gt;**](GetSavingsProductsPenaltyToIncomeAccountMappings.md) |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**withdrawalFeeForTransfers** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GetSavingsProductsProductIdResponse } from 'fineract-typescript-client';

const instance: GetSavingsProductsProductIdResponse = {
    accountingMappings,
    accountingRule,
    charges,
    currency,
    description,
    feeToIncomeAccountMappings,
    id,
    interestCalculationDaysInYearType,
    interestCalculationType,
    interestCompoundingPeriodType,
    interestPostingPeriodType,
    name,
    nominalAnnualInterestRate,
    paymentChannelToFundSourceMappings,
    penaltyToIncomeAccountMappings,
    shortName,
    withdrawalFeeForTransfers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
