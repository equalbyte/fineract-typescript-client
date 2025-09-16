# LoanProductRelatedDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPartialPeriodInterestCalculation** | **boolean** |  | [optional] [default to undefined]
**amortizationMethod** | **string** |  | [optional] [default to undefined]
**annualNominalInterestRate** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | **string** |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | **string** |  | [optional] [default to undefined]
**buyDownFeeStrategy** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeType** | **string** |  | [optional] [default to undefined]
**chargeOffBehaviour** | **string** |  | [optional] [default to undefined]
**currency** | [**MonetaryCurrency**](MonetaryCurrency.md) |  | [optional] [default to undefined]
**currencyData** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**daysInMonthType** | **number** |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | **string** |  | [optional] [default to undefined]
**daysInYearType** | **number** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**enableAccrualActivityPosting** | **boolean** |  | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**equalAmortization** | **boolean** |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**graceOnArrearsAgeing** | **number** |  | [optional] [default to undefined]
**graceOnInterestCharged** | **number** |  | [optional] [default to undefined]
**graceOnInterestPayment** | **number** |  | [optional] [default to undefined]
**graceOnPrincipalPayment** | **number** |  | [optional] [default to undefined]
**inArrearsTolerance** | [**Money**](Money.md) |  | [optional] [default to undefined]
**installmentAmountInMultiplesOf** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodMethod** | **string** |  | [optional] [default to undefined]
**interestMethod** | **string** |  | [optional] [default to undefined]
**interestPeriodFrequencyType** | **string** |  | [optional] [default to undefined]
**interestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | **string** |  | [optional] [default to undefined]
**loanScheduleType** | **string** |  | [optional] [default to undefined]
**merchantBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**nominalInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**principal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**recurringMoratoriumOnPrincipalPeriods** | **number** |  | [optional] [default to undefined]
**repayEvery** | **number** |  | [optional] [default to undefined]
**repaymentPeriodFrequencyType** | **string** |  | [optional] [default to undefined]
**supportedInterestRefundTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { LoanProductRelatedDetail } from 'fineract-typescript-client';

const instance: LoanProductRelatedDetail = {
    allowPartialPeriodInterestCalculation,
    amortizationMethod,
    annualNominalInterestRate,
    buyDownFeeCalculationType,
    buyDownFeeIncomeType,
    buyDownFeeStrategy,
    capitalizedIncomeCalculationType,
    capitalizedIncomeStrategy,
    capitalizedIncomeType,
    chargeOffBehaviour,
    currency,
    currencyData,
    daysInMonthType,
    daysInYearCustomStrategy,
    daysInYearType,
    disbursedAmountPercentageForDownPayment,
    enableAccrualActivityPosting,
    enableAutoRepaymentForDownPayment,
    enableBuyDownFee,
    enableDownPayment,
    enableIncomeCapitalization,
    equalAmortization,
    fixedLength,
    graceOnArrearsAgeing,
    graceOnInterestCharged,
    graceOnInterestPayment,
    graceOnPrincipalPayment,
    inArrearsTolerance,
    installmentAmountInMultiplesOf,
    interestCalculationPeriodMethod,
    interestMethod,
    interestPeriodFrequencyType,
    interestRecalculationEnabled,
    interestRecognitionOnDisbursementDate,
    loanScheduleProcessingType,
    loanScheduleType,
    merchantBuyDownFee,
    nominalInterestRatePerPeriod,
    numberOfRepayments,
    principal,
    recurringMoratoriumOnPrincipalPeriods,
    repayEvery,
    repaymentPeriodFrequencyType,
    supportedInterestRefundTypes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
