# LoanProductData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountMovesOutOfNPAOnlyOnArrearsCompletion** | **boolean** |  | [optional] [default to undefined]
**accountingMappingOptions** | **{ [key: string]: Array&lt;GLAccountData&gt;; }** |  | [optional] [default to undefined]
**accountingMappings** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**accountingRule** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**accountingRuleOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**advancedPaymentAllocationFutureInstallmentAllocationRules** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**advancedPaymentAllocationTransactionTypes** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**advancedPaymentAllocationTypes** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**allowApprovedDisbursedAmountsOverApplied** | **boolean** |  | [optional] [default to undefined]
**allowAttributeOverrides** | [**LoanProductConfigurableAttributes**](LoanProductConfigurableAttributes.md) |  | [optional] [default to undefined]
**allowPartialPeriodInterestCalculation** | **boolean** |  | [optional] [default to undefined]
**allowVariableInstallments** | **boolean** |  | [optional] [default to undefined]
**amortizationType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**amortizationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
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
**chargeOffBehaviourOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargeOffReasonOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**chargeOffReasonToExpenseAccountMappings** | [**Array&lt;ChargeOffReasonToGLAccountMapper&gt;**](ChargeOffReasonToGLAccountMapper.md) |  | [optional] [default to undefined]
**chargeOptions** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**closeDate** | **string** |  | [optional] [default to undefined]
**compoundingToBePostedAsTransaction** | **boolean** |  | [optional] [default to undefined]
**creditAllocation** | [**Array&lt;CreditAllocationData&gt;**](CreditAllocationData.md) |  | [optional] [default to undefined]
**creditAllocationAllocationTypes** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**creditAllocationTransactionTypes** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**currencyOptions** | [**Array&lt;CurrencyData&gt;**](CurrencyData.md) |  | [optional] [default to undefined]
**daysInMonthType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**daysInMonthTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**daysInYearCustomStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**daysInYearCustomStrategyOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**daysInYearType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**daysInYearTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**defaultDifferentialLendingRate** | **number** |  | [optional] [default to undefined]
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
**equalAmortization** | **boolean** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**feeToIncomeAccountMappings** | [**Array&lt;ChargeToGLAccountMapper&gt;**](ChargeToGLAccountMapper.md) |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**floatingInterestRateCalculationAllowed** | **boolean** |  | [optional] [default to undefined]
**floatingRateId** | **number** |  | [optional] [default to undefined]
**floatingRateName** | **string** |  | [optional] [default to undefined]
**floatingRateOptions** | [**Array&lt;FloatingRateData&gt;**](FloatingRateData.md) |  | [optional] [default to undefined]
**fundId** | **number** |  | [optional] [default to undefined]
**fundName** | **string** |  | [optional] [default to undefined]
**fundOptions** | [**Array&lt;FundData&gt;**](FundData.md) |  | [optional] [default to undefined]
**graceOnArrearsAgeing** | **number** |  | [optional] [default to undefined]
**graceOnInterestCharged** | **number** |  | [optional] [default to undefined]
**graceOnInterestPayment** | **number** |  | [optional] [default to undefined]
**graceOnPrincipalPayment** | **number** |  | [optional] [default to undefined]
**holdGuaranteeFunds** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**inArrearsTolerance** | **number** |  | [optional] [default to undefined]
**includeInBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**installmentAmountInMultiplesOf** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCalculationPeriodTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRateDifferential** | **number** |  | [optional] [default to undefined]
**interestRateFrequencyType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRateFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRateVariationsForBorrowerCycle** | [**Array&lt;LoanProductBorrowerCycleVariationData&gt;**](LoanProductBorrowerCycleVariationData.md) |  | [optional] [default to undefined]
**interestRecalculationCompoundingTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRecalculationData** | [**LoanProductInterestRecalculationData**](LoanProductInterestRecalculationData.md) |  | [optional] [default to undefined]
**interestRecalculationDayOfWeekTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**interestRecalculationFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRecalculationNthDayTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**isAllowPartialPeriodInterestCalculation** | **boolean** |  | [optional] [default to undefined]
**isEqualAmortization** | **boolean** |  | [optional] [default to undefined]
**isFloatingInterestRateCalculationAllowed** | **boolean** |  | [optional] [default to undefined]
**isInterestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**isLinkedToFloatingInterestRates** | **boolean** |  | [optional] [default to undefined]
**isRatesEnabled** | **boolean** |  | [optional] [default to undefined]
**linkedToFloatingInterestRates** | **boolean** |  | [optional] [default to undefined]
**loanProductConfigurableAttributes** | [**LoanProductConfigurableAttributes**](LoanProductConfigurableAttributes.md) |  | [optional] [default to undefined]
**loanScheduleProcessingType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanScheduleProcessingTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanScheduleType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanScheduleTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**maxDifferentialLendingRate** | **number** |  | [optional] [default to undefined]
**maxInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**maxNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**maxPrincipal** | **number** |  | [optional] [default to undefined]
**maxTrancheCount** | **number** |  | [optional] [default to undefined]
**maximumGap** | **number** |  | [optional] [default to undefined]
**merchantBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**minDifferentialLendingRate** | **number** |  | [optional] [default to undefined]
**minInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**minNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**minPrincipal** | **number** |  | [optional] [default to undefined]
**minimumDaysBetweenDisbursalAndFirstRepayment** | **number** |  | [optional] [default to undefined]
**minimumGap** | **number** |  | [optional] [default to undefined]
**multiDisburseLoan** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**numberOfRepaymentVariationsForBorrowerCycle** | [**Array&lt;LoanProductBorrowerCycleVariationData&gt;**](LoanProductBorrowerCycleVariationData.md) |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**outstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overAppliedCalculationType** | **string** |  | [optional] [default to undefined]
**overAppliedNumber** | **number** |  | [optional] [default to undefined]
**overDueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**overdueDaysForNPA** | **number** |  | [optional] [default to undefined]
**paymentAllocation** | [**Array&lt;AdvancedPaymentData&gt;**](AdvancedPaymentData.md) |  | [optional] [default to undefined]
**paymentChannelToFundSourceMappings** | [**Array&lt;PaymentTypeToGLAccountMapper&gt;**](PaymentTypeToGLAccountMapper.md) |  | [optional] [default to undefined]
**paymentTypeOptions** | [**Array&lt;PaymentTypeData&gt;**](PaymentTypeData.md) |  | [optional] [default to undefined]
**penaltyOptions** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**penaltyToIncomeAccountMappings** | [**Array&lt;ChargeToGLAccountMapper&gt;**](ChargeToGLAccountMapper.md) |  | [optional] [default to undefined]
**preClosureInterestCalculationStrategyOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**principalThresholdForLastInstallment** | **number** |  | [optional] [default to undefined]
**principalVariationsForBorrowerCycle** | [**Array&lt;LoanProductBorrowerCycleVariationData&gt;**](LoanProductBorrowerCycleVariationData.md) |  | [optional] [default to undefined]
**productGuaranteeData** | [**LoanProductGuaranteeData**](LoanProductGuaranteeData.md) |  | [optional] [default to undefined]
**rateOptions** | [**Array&lt;RateData&gt;**](RateData.md) |  | [optional] [default to undefined]
**rates** | [**Array&lt;RateData&gt;**](RateData.md) |  | [optional] [default to undefined]
**ratesEnabled** | **boolean** |  | [optional] [default to undefined]
**recurringMoratoriumOnPrincipalPeriods** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**repaymentFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**repaymentStartDateType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**repaymentStartDateTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**rescheduleStrategyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**supportedInterestRefundTypes** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**supportedInterestRefundTypesOptions** | [**Array&lt;StringEnumOptionData&gt;**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**syncExpectedWithDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyName** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyOptions** | [**Array&lt;TransactionProcessingStrategyData&gt;**](TransactionProcessingStrategyData.md) |  | [optional] [default to undefined]
**useBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**valueConditionTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LoanProductData } from 'fineract-typescript-client';

const instance: LoanProductData = {
    accountMovesOutOfNPAOnlyOnArrearsCompletion,
    accountingMappingOptions,
    accountingMappings,
    accountingRule,
    accountingRuleOptions,
    advancedPaymentAllocationFutureInstallmentAllocationRules,
    advancedPaymentAllocationTransactionTypes,
    advancedPaymentAllocationTypes,
    allowApprovedDisbursedAmountsOverApplied,
    allowAttributeOverrides,
    allowPartialPeriodInterestCalculation,
    allowVariableInstallments,
    amortizationType,
    amortizationTypeOptions,
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
    chargeOffBehaviourOptions,
    chargeOffReasonOptions,
    chargeOffReasonToExpenseAccountMappings,
    chargeOptions,
    charges,
    closeDate,
    compoundingToBePostedAsTransaction,
    creditAllocation,
    creditAllocationAllocationTypes,
    creditAllocationTransactionTypes,
    currency,
    currencyOptions,
    daysInMonthType,
    daysInMonthTypeOptions,
    daysInYearCustomStrategy,
    daysInYearCustomStrategyOptions,
    daysInYearType,
    daysInYearTypeOptions,
    defaultDifferentialLendingRate,
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
    equalAmortization,
    externalId,
    feeToIncomeAccountMappings,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    floatingInterestRateCalculationAllowed,
    floatingRateId,
    floatingRateName,
    floatingRateOptions,
    fundId,
    fundName,
    fundOptions,
    graceOnArrearsAgeing,
    graceOnInterestCharged,
    graceOnInterestPayment,
    graceOnPrincipalPayment,
    holdGuaranteeFunds,
    id,
    inArrearsTolerance,
    includeInBorrowerCycle,
    installmentAmountInMultiplesOf,
    interestCalculationPeriodType,
    interestCalculationPeriodTypeOptions,
    interestRateDifferential,
    interestRateFrequencyType,
    interestRateFrequencyTypeOptions,
    interestRatePerPeriod,
    interestRateVariationsForBorrowerCycle,
    interestRecalculationCompoundingTypeOptions,
    interestRecalculationData,
    interestRecalculationDayOfWeekTypeOptions,
    interestRecalculationEnabled,
    interestRecalculationFrequencyTypeOptions,
    interestRecalculationNthDayTypeOptions,
    interestRecognitionOnDisbursementDate,
    interestType,
    interestTypeOptions,
    isAllowPartialPeriodInterestCalculation,
    isEqualAmortization,
    isFloatingInterestRateCalculationAllowed,
    isInterestRecalculationEnabled,
    isLinkedToFloatingInterestRates,
    isRatesEnabled,
    linkedToFloatingInterestRates,
    loanProductConfigurableAttributes,
    loanScheduleProcessingType,
    loanScheduleProcessingTypeOptions,
    loanScheduleType,
    loanScheduleTypeOptions,
    maxDifferentialLendingRate,
    maxInterestRatePerPeriod,
    maxNumberOfRepayments,
    maxPrincipal,
    maxTrancheCount,
    maximumGap,
    merchantBuyDownFee,
    minDifferentialLendingRate,
    minInterestRatePerPeriod,
    minNumberOfRepayments,
    minPrincipal,
    minimumDaysBetweenDisbursalAndFirstRepayment,
    minimumGap,
    multiDisburseLoan,
    name,
    numberOfRepaymentVariationsForBorrowerCycle,
    numberOfRepayments,
    outstandingLoanBalance,
    overAppliedCalculationType,
    overAppliedNumber,
    overDueDaysForRepaymentEvent,
    overdueDaysForNPA,
    paymentAllocation,
    paymentChannelToFundSourceMappings,
    paymentTypeOptions,
    penaltyOptions,
    penaltyToIncomeAccountMappings,
    preClosureInterestCalculationStrategyOptions,
    principal,
    principalThresholdForLastInstallment,
    principalVariationsForBorrowerCycle,
    productGuaranteeData,
    rateOptions,
    rates,
    ratesEnabled,
    recurringMoratoriumOnPrincipalPeriods,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentFrequencyTypeOptions,
    repaymentStartDateType,
    repaymentStartDateTypeOptions,
    rescheduleStrategyTypeOptions,
    shortName,
    startDate,
    status,
    supportedInterestRefundTypes,
    supportedInterestRefundTypesOptions,
    syncExpectedWithDisbursementDate,
    transactionProcessingStrategyCode,
    transactionProcessingStrategyName,
    transactionProcessingStrategyOptions,
    useBorrowerCycle,
    valueConditionTypeOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
