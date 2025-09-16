# GetLoanProductsProductIdResponse

GetLoanProductsProductIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingMappings** | [**GetLoanAccountingMappings**](GetLoanAccountingMappings.md) |  | [optional] [default to undefined]
**accountingRule** | [**GetLoanProductsAccountingRule**](GetLoanProductsAccountingRule.md) |  | [optional] [default to undefined]
**allowApprovedDisbursedAmountsOverApplied** | **boolean** |  | [optional] [default to undefined]
**allowPartialPeriodInterestCalculation** | **boolean** |  | [optional] [default to undefined]
**allowVariableInstallments** | **boolean** |  | [optional] [default to undefined]
**amortizationType** | [**GetLoanProductsAmortizationType**](GetLoanProductsAmortizationType.md) |  | [optional] [default to undefined]
**annualInterestRate** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeCalculationTypeOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeIncomeTypeOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeStrategyOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**canDefineInstallmentAmount** | **boolean** |  | [optional] [default to undefined]
**canUseForTopup** | **boolean** |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeCalculationTypeOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeStrategyOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeTypeOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargeOffBehaviour** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargeOffReasonOptions** | [**Array&lt;GetLoanProductsChargeOffReasonOptions&gt;**](GetLoanProductsChargeOffReasonOptions.md) |  | [optional] [default to undefined]
**chargeOffReasonToExpenseAccountMappings** | [**Array&lt;GetChargeOffReasonToExpenseAccountMappings&gt;**](GetChargeOffReasonToExpenseAccountMappings.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;LoanProductChargeData&gt;**](LoanProductChargeData.md) |  | [optional] [default to undefined]
**creditAllocation** | [**Array&lt;CreditAllocationData&gt;**](CreditAllocationData.md) |  | [optional] [default to undefined]
**currency** | [**GetLoanProductsCurrency**](GetLoanProductsCurrency.md) |  | [optional] [default to undefined]
**daysInMonthType** | [**GetLoanProductsDaysInMonthType**](GetLoanProductsDaysInMonthType.md) |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**daysInYearType** | [**GetLoanProductsDaysInYearType**](GetLoanProductsDaysInYearType.md) |  | [optional] [default to undefined]
**delinquencyBucket** | [**DelinquencyBucketData**](DelinquencyBucketData.md) |  | [optional] [default to undefined]
**delinquencyBucketOptions** | [**Array&lt;DelinquencyBucketData&gt;**](DelinquencyBucketData.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**disallowExpectedDisbursements** | **boolean** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**dueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**enableAccrualActivityPosting** | **boolean** |  | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**feeToIncomeAccountMappings** | [**Set&lt;GetLoanFeeToIncomeAccountMappings&gt;**](GetLoanFeeToIncomeAccountMappings.md) |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**inArrearsTolerance** | **number** |  | [optional] [default to undefined]
**includeInBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | [**GetLoansProductsInterestCalculationPeriodType**](GetLoansProductsInterestCalculationPeriodType.md) |  | [optional] [default to undefined]
**interestRateFrequencyType** | [**GetLoanProductsInterestRateFrequencyType**](GetLoanProductsInterestRateFrequencyType.md) |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRateVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**interestRecalculationData** | [**GetLoanProductsInterestRecalculationData**](GetLoanProductsInterestRecalculationData.md) |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | [**GetLoanProductsInterestTemplateType**](GetLoanProductsInterestTemplateType.md) |  | [optional] [default to undefined]
**isFloatingInterestRateCalculationAllowed** | **boolean** |  | [optional] [default to undefined]
**isInterestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**isLinkedToFloatingInterestRates** | **boolean** |  | [optional] [default to undefined]
**isRatesEnabled** | **boolean** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanScheduleType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**maxInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**maxNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**maxPrincipal** | **number** |  | [optional] [default to undefined]
**maxTrancheCount** | **number** |  | [optional] [default to undefined]
**maximumGap** | **number** |  | [optional] [default to undefined]
**merchantBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**minInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**minNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**minPrincipal** | **number** |  | [optional] [default to undefined]
**minimumGap** | **number** |  | [optional] [default to undefined]
**multiDisburseLoan** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**numberOfRepaymentVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overAppliedCalculationType** | **string** |  | [optional] [default to undefined]
**overDueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**overdueDaysForNPA** | **number** |  | [optional] [default to undefined]
**paymentAllocation** | [**Array&lt;AdvancedPaymentData&gt;**](AdvancedPaymentData.md) |  | [optional] [default to undefined]
**paymentChannelToFundSourceMappings** | [**Set&lt;GetLoanPaymentChannelToFundSourceMappings&gt;**](GetLoanPaymentChannelToFundSourceMappings.md) |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**principalThresholdForLastInstalment** | **number** |  | [optional] [default to undefined]
**productsPrincipalVariationsForBorrowerCycle** | [**Set&lt;GetLoanProductsPrincipalVariationsForBorrowerCycle&gt;**](GetLoanProductsPrincipalVariationsForBorrowerCycle.md) |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | [**GetLoanProductsRepaymentFrequencyType**](GetLoanProductsRepaymentFrequencyType.md) |  | [optional] [default to undefined]
**repaymentStartDateType** | [**GetLoanProductsRepaymentStartDateType**](GetLoanProductsRepaymentStartDateType.md) |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**supportedInterestRefundTypes** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyName** | **string** |  | [optional] [default to undefined]
**useBorrowerCycle** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoanProductsProductIdResponse } from 'fineract-typescript-client';

const instance: GetLoanProductsProductIdResponse = {
    accountingMappings,
    accountingRule,
    allowApprovedDisbursedAmountsOverApplied,
    allowPartialPeriodInterestCalculation,
    allowVariableInstallments,
    amortizationType,
    annualInterestRate,
    buyDownFeeCalculationType,
    buyDownFeeCalculationTypeOptions,
    buyDownFeeIncomeType,
    buyDownFeeIncomeTypeOptions,
    buyDownFeeStrategy,
    buyDownFeeStrategyOptions,
    canDefineInstallmentAmount,
    canUseForTopup,
    capitalizedIncomeCalculationType,
    capitalizedIncomeCalculationTypeOptions,
    capitalizedIncomeStrategy,
    capitalizedIncomeStrategyOptions,
    capitalizedIncomeType,
    capitalizedIncomeTypeOptions,
    chargeOffBehaviour,
    chargeOffReasonOptions,
    chargeOffReasonToExpenseAccountMappings,
    charges,
    creditAllocation,
    currency,
    daysInMonthType,
    daysInYearCustomStrategy,
    daysInYearType,
    delinquencyBucket,
    delinquencyBucketOptions,
    description,
    disallowExpectedDisbursements,
    disbursedAmountPercentageForDownPayment,
    dueDaysForRepaymentEvent,
    enableAccrualActivityPosting,
    enableAutoRepaymentForDownPayment,
    enableBuyDownFee,
    enableDownPayment,
    enableIncomeCapitalization,
    enableInstallmentLevelDelinquency,
    feeToIncomeAccountMappings,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    id,
    inArrearsTolerance,
    includeInBorrowerCycle,
    interestCalculationPeriodType,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRateVariationsForBorrowerCycle,
    interestRecalculationData,
    interestRecognitionOnDisbursementDate,
    interestType,
    isFloatingInterestRateCalculationAllowed,
    isInterestRecalculationEnabled,
    isLinkedToFloatingInterestRates,
    isRatesEnabled,
    loanScheduleProcessingType,
    loanScheduleType,
    maxInterestRatePerPeriod,
    maxNumberOfRepayments,
    maxPrincipal,
    maxTrancheCount,
    maximumGap,
    merchantBuyDownFee,
    minInterestRatePerPeriod,
    minNumberOfRepayments,
    minPrincipal,
    minimumGap,
    multiDisburseLoan,
    name,
    numberOfRepaymentVariationsForBorrowerCycle,
    numberOfRepayments,
    outstandingLoanBalance,
    overAppliedCalculationType,
    overDueDaysForRepaymentEvent,
    overdueDaysForNPA,
    paymentAllocation,
    paymentChannelToFundSourceMappings,
    principal,
    principalThresholdForLastInstalment,
    productsPrincipalVariationsForBorrowerCycle,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentStartDateType,
    shortName,
    status,
    supportedInterestRefundTypes,
    transactionProcessingStrategyCode,
    transactionProcessingStrategyName,
    useBorrowerCycle,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
