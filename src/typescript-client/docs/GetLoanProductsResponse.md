# GetLoanProductsResponse

GetLoanProductsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingRule** | [**GetLoanProductsAccountingRule**](GetLoanProductsAccountingRule.md) |  | [optional] [default to undefined]
**amortizationType** | [**GetLoanProductsAmortizationType**](GetLoanProductsAmortizationType.md) |  | [optional] [default to undefined]
**annualInterestRate** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargeOffBehaviour** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**currency** | [**GetLoanProductsCurrency**](GetLoanProductsCurrency.md) |  | [optional] [default to undefined]
**daysInMonthType** | [**GetLoanProductsDaysInMonthType**](GetLoanProductsDaysInMonthType.md) |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | [**GetLoanProductsDaysInYearCustomStrategy**](GetLoanProductsDaysInYearCustomStrategy.md) |  | [optional] [default to undefined]
**daysInYearType** | [**GetLoanProductsDaysInYearType**](GetLoanProductsDaysInYearType.md) |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**endDate** | **string** |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**includeInBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | [**GetLoansProductsInterestCalculationPeriodType**](GetLoansProductsInterestCalculationPeriodType.md) |  | [optional] [default to undefined]
**interestRateFrequencyType** | [**GetLoanProductsInterestRateFrequencyType**](GetLoanProductsInterestRateFrequencyType.md) |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRateVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**interestRecalculationData** | [**GetLoanProductsInterestRecalculationData**](GetLoanProductsInterestRecalculationData.md) |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | [**GetLoanProductsInterestType**](GetLoanProductsInterestType.md) |  | [optional] [default to undefined]
**isInterestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**maxNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**maxPrincipal** | **number** |  | [optional] [default to undefined]
**merchantBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**minNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**minPrincipal** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**numberOfRepaymentVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**principalThresholdForLastInstalment** | **number** |  | [optional] [default to undefined]
**principalVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | [**GetLoanProductsRepaymentFrequencyType**](GetLoanProductsRepaymentFrequencyType.md) |  | [optional] [default to undefined]
**repaymentStartDateType** | [**GetLoanProductsRepaymentStartDateType**](GetLoanProductsRepaymentStartDateType.md) |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**supportedInterestRefundTypes** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**transactionProcessingStrategy** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyName** | **string** |  | [optional] [default to undefined]
**useBorrowerCycle** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoanProductsResponse } from 'fineract-typescript-client';

const instance: GetLoanProductsResponse = {
    accountingRule,
    amortizationType,
    annualInterestRate,
    buyDownFeeCalculationType,
    buyDownFeeIncomeType,
    buyDownFeeStrategy,
    capitalizedIncomeCalculationType,
    capitalizedIncomeStrategy,
    capitalizedIncomeType,
    chargeOffBehaviour,
    currency,
    daysInMonthType,
    daysInYearCustomStrategy,
    daysInYearType,
    enableBuyDownFee,
    enableIncomeCapitalization,
    endDate,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    id,
    includeInBorrowerCycle,
    interestCalculationPeriodType,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRateVariationsForBorrowerCycle,
    interestRecalculationData,
    interestRecognitionOnDisbursementDate,
    interestType,
    isInterestRecalculationEnabled,
    maxNumberOfRepayments,
    maxPrincipal,
    merchantBuyDownFee,
    minNumberOfRepayments,
    minPrincipal,
    name,
    numberOfRepaymentVariationsForBorrowerCycle,
    numberOfRepayments,
    principal,
    principalThresholdForLastInstalment,
    principalVariationsForBorrowerCycle,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentStartDateType,
    shortName,
    startDate,
    status,
    supportedInterestRefundTypes,
    transactionProcessingStrategy,
    transactionProcessingStrategyName,
    useBorrowerCycle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
