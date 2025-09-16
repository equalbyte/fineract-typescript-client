# PostLoansRequest

PostLoansRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amortizationType** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | **string** |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | **string** |  | [optional] [default to undefined]
**buyDownFeeStrategy** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;PostLoansRequestChargeData&gt;**](PostLoansRequestChargeData.md) |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**datatables** | [**Array&lt;PostLoansDataTable&gt;**](PostLoansDataTable.md) |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | **string** |  | [optional] [default to undefined]
**daysInYearType** | **number** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**disbursementData** | [**Array&lt;PostLoansDisbursementData&gt;**](PostLoansDisbursementData.md) | List of PostLoansDisbursementData | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**expectedDisbursementDate** | **string** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**fixedEmiAmount** | **number** |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**graceOnArrearsAgeing** | **number** |  | [optional] [default to undefined]
**graceOnInterestCharged** | **number** |  | [optional] [default to undefined]
**graceOnInterestPayment** | **number** |  | [optional] [default to undefined]
**graceOnPrincipalPayment** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | **number** |  | [optional] [default to undefined]
**interestRateFrequencyType** | **number** |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | **number** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | **string** |  | [optional] [default to undefined]
**loanTermFrequency** | **number** |  | [optional] [default to undefined]
**loanTermFrequencyType** | **number** |  | [optional] [default to undefined]
**loanType** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**maxOutstandingLoanBalance** | **number** | Maximum allowed outstanding balance | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | **number** |  | [optional] [default to undefined]
**repaymentsStartingFromDate** | **string** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PostLoansRequest } from 'fineract-typescript-client';

const instance: PostLoansRequest = {
    amortizationType,
    buyDownFeeCalculationType,
    buyDownFeeIncomeType,
    buyDownFeeStrategy,
    capitalizedIncomeCalculationType,
    capitalizedIncomeStrategy,
    capitalizedIncomeType,
    charges,
    clientId,
    datatables,
    dateFormat,
    daysInYearCustomStrategy,
    daysInYearType,
    disbursedAmountPercentageForDownPayment,
    disbursementData,
    enableAutoRepaymentForDownPayment,
    enableBuyDownFee,
    enableDownPayment,
    enableIncomeCapitalization,
    enableInstallmentLevelDelinquency,
    expectedDisbursementDate,
    externalId,
    fixedEmiAmount,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    graceOnArrearsAgeing,
    graceOnInterestCharged,
    graceOnInterestPayment,
    graceOnPrincipalPayment,
    interestCalculationPeriodType,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRecognitionOnDisbursementDate,
    interestType,
    loanScheduleProcessingType,
    loanTermFrequency,
    loanTermFrequencyType,
    loanType,
    locale,
    maxOutstandingLoanBalance,
    numberOfRepayments,
    principal,
    productId,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentsStartingFromDate,
    submittedOnDate,
    transactionProcessingStrategyCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
