# PostLoanProductsRequest

PostLoanProductsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountMovesOutOfNPAOnlyOnArrearsCompletion** | **boolean** |  | [optional] [default to undefined]
**accountingRule** | **number** |  | [optional] [default to undefined]
**allowApprovedDisbursedAmountsOverApplied** | **boolean** |  | [optional] [default to undefined]
**allowAttributeOverrides** | [**AllowAttributeOverrides**](AllowAttributeOverrides.md) |  | [optional] [default to undefined]
**allowCompoundingOnEod** | **boolean** |  | [optional] [default to undefined]
**allowPartialPeriodInterestCalcualtion** | **boolean** |  | [optional] [default to undefined]
**allowVariableInstallments** | **boolean** |  | [optional] [default to undefined]
**amortizationType** | **number** |  | [optional] [default to undefined]
**buyDownExpenseAccountId** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | **string** |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | **string** |  | [optional] [default to undefined]
**buyDownFeeStrategy** | **string** |  | [optional] [default to undefined]
**canDefineInstallmentAmount** | **boolean** |  | [optional] [default to undefined]
**canUseForTopup** | **boolean** |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | **string** |  | [optional] [default to undefined]
**capitalizedIncomeType** | **string** |  | [optional] [default to undefined]
**chargeOffBehaviour** | **string** |  | [optional] [default to undefined]
**chargeOffExpenseAccountId** | **number** |  | [optional] [default to undefined]
**chargeOffFraudExpenseAccountId** | **number** |  | [optional] [default to undefined]
**chargeOffReasonToExpenseAccountMappings** | [**Array&lt;PostChargeOffReasonToExpenseAccountMappings&gt;**](PostChargeOffReasonToExpenseAccountMappings.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;LoanProductChargeData&gt;**](LoanProductChargeData.md) |  | [optional] [default to undefined]
**closeDate** | **string** |  | [optional] [default to undefined]
**creditAllocation** | [**Array&lt;CreditAllocationData&gt;**](CreditAllocationData.md) |  | [optional] [default to undefined]
**currencyCode** | **string** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**daysInMonthType** | **number** |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | **string** |  | [optional] [default to undefined]
**daysInYearType** | **number** |  | [optional] [default to undefined]
**deferredIncomeLiabilityAccountId** | **number** |  | [optional] [default to undefined]
**delinquencyBucketId** | **number** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**digitsAfterDecimal** | **number** |  | [optional] [default to undefined]
**disallowExpectedDisbursements** | **boolean** |  | [optional] [default to undefined]
**disallowInterestCalculationOnPastDue** | **boolean** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**dueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**enableAccrualActivityPosting** | **boolean** |  | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**feeToIncomeAccountMappings** | [**Array&lt;LoanProductChargeToGLAccountMapper&gt;**](LoanProductChargeToGLAccountMapper.md) |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**fundId** | **number** |  | [optional] [default to undefined]
**fundSourceAccountId** | **number** |  | [optional] [default to undefined]
**goodwillCreditAccountId** | **number** |  | [optional] [default to undefined]
**graceOnArrearsAgeing** | **number** |  | [optional] [default to undefined]
**graceOnInterestPayment** | **number** |  | [optional] [default to undefined]
**graceOnPrincipalPayment** | **number** |  | [optional] [default to undefined]
**holdGuaranteeFunds** | **boolean** |  | [optional] [default to undefined]
**inArrearsTolerance** | **number** |  | [optional] [default to undefined]
**inMultiplesOf** | **number** |  | [optional] [default to undefined]
**includeInBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**incomeFromBuyDownAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromCapitalizationAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromChargeOffFeesAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromChargeOffInterestAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromChargeOffPenaltyAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromFeeAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromGoodwillCreditFeesAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromGoodwillCreditInterestAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromGoodwillCreditPenaltyAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromPenaltyAccountId** | **number** |  | [optional] [default to undefined]
**incomeFromRecoveryAccountId** | **number** |  | [optional] [default to undefined]
**installmentAmountInMultiplesOf** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | **number** |  | [optional] [default to undefined]
**interestOnLoanAccountId** | **number** |  | [optional] [default to undefined]
**interestRateFrequencyType** | **number** |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRateVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**interestRecalculationCompoundingMethod** | **number** |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | **number** |  | [optional] [default to undefined]
**isArrearsBasedOnOriginalSchedule** | **boolean** |  | [optional] [default to undefined]
**isCompoundingToBePostedAsTransaction** | **boolean** |  | [optional] [default to undefined]
**isEqualAmortization** | **boolean** |  | [optional] [default to undefined]
**isInterestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**isLinkedToFloatingInterestRates** | **boolean** |  | [optional] [default to undefined]
**loanPortfolioAccountId** | **number** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | **string** |  | [optional] [default to undefined]
**loanScheduleType** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**maxInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**maxNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**maxPrincipal** | **number** |  | [optional] [default to undefined]
**maxTrancheCount** | **number** |  | [optional] [default to undefined]
**merchantBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**minInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**minNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**minPrincipal** | **number** |  | [optional] [default to undefined]
**minimumDaysBetweenDisbursalAndFirstRepayment** | **number** |  | [optional] [default to undefined]
**multiDisburseLoan** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**numberOfRepaymentVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overAppliedCalculationType** | **string** |  | [optional] [default to undefined]
**overAppliedNumber** | **number** |  | [optional] [default to undefined]
**overDueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**overdueDaysForNPA** | **number** |  | [optional] [default to undefined]
**overpaymentLiabilityAccountId** | **number** |  | [optional] [default to undefined]
**paymentAllocation** | [**Array&lt;AdvancedPaymentData&gt;**](AdvancedPaymentData.md) |  | [optional] [default to undefined]
**paymentChannelToFundSourceMappings** | [**Array&lt;GetLoanPaymentChannelToFundSourceMappings&gt;**](GetLoanPaymentChannelToFundSourceMappings.md) |  | [optional] [default to undefined]
**penaltyToIncomeAccountMappings** | [**Array&lt;LoanProductChargeToGLAccountMapper&gt;**](LoanProductChargeToGLAccountMapper.md) |  | [optional] [default to undefined]
**preClosureInterestCalculationStrategy** | **number** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**principalThresholdForLastInstallment** | **number** |  | [optional] [default to undefined]
**principalVariationsForBorrowerCycle** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**rates** | [**Array&lt;RateData&gt;**](RateData.md) |  | [optional] [default to undefined]
**recalculationCompoundingFrequencyInterval** | **number** |  | [optional] [default to undefined]
**recalculationCompoundingFrequencyOnDayType** | **number** |  | [optional] [default to undefined]
**recalculationCompoundingFrequencyType** | **number** |  | [optional] [default to undefined]
**recalculationRestFrequencyInterval** | **number** |  | [optional] [default to undefined]
**recalculationRestFrequencyType** | **number** |  | [optional] [default to undefined]
**receivableFeeAccountId** | **number** |  | [optional] [default to undefined]
**receivableInterestAccountId** | **number** |  | [optional] [default to undefined]
**receivablePenaltyAccountId** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | **number** |  | [optional] [default to undefined]
**repaymentStartDateType** | **number** |  | [optional] [default to undefined]
**rescheduleStrategyMethod** | **number** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**supportedInterestRefundTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]
**transfersInSuspenseAccountId** | **number** |  | [optional] [default to undefined]
**useBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**writeOffAccountId** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PostLoanProductsRequest } from 'fineract-typescript-client';

const instance: PostLoanProductsRequest = {
    accountMovesOutOfNPAOnlyOnArrearsCompletion,
    accountingRule,
    allowApprovedDisbursedAmountsOverApplied,
    allowAttributeOverrides,
    allowCompoundingOnEod,
    allowPartialPeriodInterestCalcualtion,
    allowVariableInstallments,
    amortizationType,
    buyDownExpenseAccountId,
    buyDownFeeCalculationType,
    buyDownFeeIncomeType,
    buyDownFeeStrategy,
    canDefineInstallmentAmount,
    canUseForTopup,
    capitalizedIncomeCalculationType,
    capitalizedIncomeStrategy,
    capitalizedIncomeType,
    chargeOffBehaviour,
    chargeOffExpenseAccountId,
    chargeOffFraudExpenseAccountId,
    chargeOffReasonToExpenseAccountMappings,
    charges,
    closeDate,
    creditAllocation,
    currencyCode,
    dateFormat,
    daysInMonthType,
    daysInYearCustomStrategy,
    daysInYearType,
    deferredIncomeLiabilityAccountId,
    delinquencyBucketId,
    description,
    digitsAfterDecimal,
    disallowExpectedDisbursements,
    disallowInterestCalculationOnPastDue,
    disbursedAmountPercentageForDownPayment,
    dueDaysForRepaymentEvent,
    enableAccrualActivityPosting,
    enableAutoRepaymentForDownPayment,
    enableBuyDownFee,
    enableDownPayment,
    enableIncomeCapitalization,
    enableInstallmentLevelDelinquency,
    externalId,
    feeToIncomeAccountMappings,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    fundId,
    fundSourceAccountId,
    goodwillCreditAccountId,
    graceOnArrearsAgeing,
    graceOnInterestPayment,
    graceOnPrincipalPayment,
    holdGuaranteeFunds,
    inArrearsTolerance,
    inMultiplesOf,
    includeInBorrowerCycle,
    incomeFromBuyDownAccountId,
    incomeFromCapitalizationAccountId,
    incomeFromChargeOffFeesAccountId,
    incomeFromChargeOffInterestAccountId,
    incomeFromChargeOffPenaltyAccountId,
    incomeFromFeeAccountId,
    incomeFromGoodwillCreditFeesAccountId,
    incomeFromGoodwillCreditInterestAccountId,
    incomeFromGoodwillCreditPenaltyAccountId,
    incomeFromPenaltyAccountId,
    incomeFromRecoveryAccountId,
    installmentAmountInMultiplesOf,
    interestCalculationPeriodType,
    interestOnLoanAccountId,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRateVariationsForBorrowerCycle,
    interestRecalculationCompoundingMethod,
    interestRecognitionOnDisbursementDate,
    interestType,
    isArrearsBasedOnOriginalSchedule,
    isCompoundingToBePostedAsTransaction,
    isEqualAmortization,
    isInterestRecalculationEnabled,
    isLinkedToFloatingInterestRates,
    loanPortfolioAccountId,
    loanScheduleProcessingType,
    loanScheduleType,
    locale,
    maxInterestRatePerPeriod,
    maxNumberOfRepayments,
    maxPrincipal,
    maxTrancheCount,
    merchantBuyDownFee,
    minInterestRatePerPeriod,
    minNumberOfRepayments,
    minPrincipal,
    minimumDaysBetweenDisbursalAndFirstRepayment,
    multiDisburseLoan,
    name,
    numberOfRepaymentVariationsForBorrowerCycle,
    numberOfRepayments,
    outstandingLoanBalance,
    overAppliedCalculationType,
    overAppliedNumber,
    overDueDaysForRepaymentEvent,
    overdueDaysForNPA,
    overpaymentLiabilityAccountId,
    paymentAllocation,
    paymentChannelToFundSourceMappings,
    penaltyToIncomeAccountMappings,
    preClosureInterestCalculationStrategy,
    principal,
    principalThresholdForLastInstallment,
    principalVariationsForBorrowerCycle,
    rates,
    recalculationCompoundingFrequencyInterval,
    recalculationCompoundingFrequencyOnDayType,
    recalculationCompoundingFrequencyType,
    recalculationRestFrequencyInterval,
    recalculationRestFrequencyType,
    receivableFeeAccountId,
    receivableInterestAccountId,
    receivablePenaltyAccountId,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentStartDateType,
    rescheduleStrategyMethod,
    shortName,
    startDate,
    supportedInterestRefundTypes,
    transactionProcessingStrategyCode,
    transfersInSuspenseAccountId,
    useBorrowerCycle,
    writeOffAccountId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
