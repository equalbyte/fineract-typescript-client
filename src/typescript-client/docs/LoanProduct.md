# LoanProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountMovesOutOfNPAOnlyOnArrearsCompletion** | **boolean** |  | [optional] [default to undefined]
**accountingDisabled** | **boolean** |  | [optional] [default to undefined]
**accountingRule** | **string** |  | [optional] [default to undefined]
**allowApprovedDisbursedAmountsOverApplied** | **boolean** |  | [optional] [default to undefined]
**allowVariabeInstallments** | **boolean** |  | [optional] [default to undefined]
**arrearsBasedOnOriginalSchedule** | **boolean** |  | [optional] [default to undefined]
**borrowerCycleVariations** | [**Set&lt;LoanProductBorrowerCycleVariations&gt;**](LoanProductBorrowerCycleVariations.md) |  | [optional] [default to undefined]
**canDefineInstallmentAmount** | **boolean** |  | [optional] [default to undefined]
**canUseForTopup** | **boolean** |  | [optional] [default to undefined]
**cashBasedAccountingEnabled** | **boolean** |  | [optional] [default to undefined]
**charges** | [**Array&lt;Charge&gt;**](Charge.md) |  | [optional] [default to undefined]
**closeDate** | **string** |  | [optional] [default to undefined]
**creditAllocationRules** | [**Array&lt;LoanProductCreditAllocationRule&gt;**](LoanProductCreditAllocationRule.md) |  | [optional] [default to undefined]
**currency** | [**MonetaryCurrency**](MonetaryCurrency.md) |  | [optional] [default to undefined]
**delinquencyBucket** | [**DelinquencyBucket**](DelinquencyBucket.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**disallowExpectedDisbursements** | **boolean** |  | [optional] [default to undefined]
**dueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**equalAmortization** | **boolean** |  | [optional] [default to undefined]
**externalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**floatingRates** | [**LoanProductFloatingRates**](LoanProductFloatingRates.md) |  | [optional] [default to undefined]
**fund** | [**Fund**](Fund.md) |  | [optional] [default to undefined]
**holdGuaranteeFunds** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**includeInBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**interestPeriodFrequencyType** | **string** |  | [optional] [default to undefined]
**interestRecalculationEnabled** | **boolean** |  | [optional] [default to undefined]
**linkedToFloatingInterestRate** | **boolean** |  | [optional] [default to undefined]
**loanConfigurableAttributes** | [**LoanProductConfigurableAttributes**](LoanProductConfigurableAttributes.md) |  | [optional] [default to undefined]
**loanProductGuaranteeDetails** | [**LoanProductGuaranteeDetails**](LoanProductGuaranteeDetails.md) |  | [optional] [default to undefined]
**loanProductMinMaxConstraints** | [**LoanProductMinMaxConstraints**](LoanProductMinMaxConstraints.md) |  | [optional] [default to undefined]
**loanProductRelatedDetail** | [**LoanProductRelatedDetail**](LoanProductRelatedDetail.md) |  | [optional] [default to undefined]
**loanProductTrancheDetails** | [**LoanProductTrancheDetails**](LoanProductTrancheDetails.md) |  | [optional] [default to undefined]
**maxNominalInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**maxNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**maxPrincipalAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**minNominalInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**minNumberOfRepayments** | **number** |  | [optional] [default to undefined]
**minPrincipalAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**minimumDaysBetweenDisbursalAndFirstRepayment** | **number** |  | [optional] [default to undefined]
**multiDisburseLoan** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**_new** | **boolean** |  | [optional] [default to undefined]
**nominalInterestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**overAppliedCalculationType** | **string** |  | [optional] [default to undefined]
**overAppliedNumber** | **number** |  | [optional] [default to undefined]
**overDueDaysForRepaymentEvent** | **number** |  | [optional] [default to undefined]
**overdueDaysForNPA** | **number** |  | [optional] [default to undefined]
**paymentAllocationRules** | [**Array&lt;LoanProductPaymentAllocationRule&gt;**](LoanProductPaymentAllocationRule.md) |  | [optional] [default to undefined]
**periodicAccrualAccountingEnabled** | **boolean** |  | [optional] [default to undefined]
**principalAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**principalThresholdForLastInstallment** | **number** |  | [optional] [default to undefined]
**productInterestRecalculationDetails** | [**LoanProductInterestRecalculationDetails**](LoanProductInterestRecalculationDetails.md) |  | [optional] [default to undefined]
**rates** | [**Array&lt;Rate&gt;**](Rate.md) |  | [optional] [default to undefined]
**repaymentStartDateType** | **string** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**syncExpectedWithDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyName** | **string** |  | [optional] [default to undefined]
**upfrontAccrualAccountingEnabled** | **boolean** |  | [optional] [default to undefined]
**useBorrowerCycle** | **boolean** |  | [optional] [default to undefined]
**variableInstallmentConfig** | [**LoanProductVariableInstallmentConfig**](LoanProductVariableInstallmentConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { LoanProduct } from 'fineract-typescript-client';

const instance: LoanProduct = {
    accountMovesOutOfNPAOnlyOnArrearsCompletion,
    accountingDisabled,
    accountingRule,
    allowApprovedDisbursedAmountsOverApplied,
    allowVariabeInstallments,
    arrearsBasedOnOriginalSchedule,
    borrowerCycleVariations,
    canDefineInstallmentAmount,
    canUseForTopup,
    cashBasedAccountingEnabled,
    charges,
    closeDate,
    creditAllocationRules,
    currency,
    delinquencyBucket,
    description,
    disallowExpectedDisbursements,
    dueDaysForRepaymentEvent,
    enableInstallmentLevelDelinquency,
    equalAmortization,
    externalId,
    fixedPrincipalPercentagePerInstallment,
    floatingRates,
    fund,
    holdGuaranteeFunds,
    id,
    includeInBorrowerCycle,
    interestPeriodFrequencyType,
    interestRecalculationEnabled,
    linkedToFloatingInterestRate,
    loanConfigurableAttributes,
    loanProductGuaranteeDetails,
    loanProductMinMaxConstraints,
    loanProductRelatedDetail,
    loanProductTrancheDetails,
    maxNominalInterestRatePerPeriod,
    maxNumberOfRepayments,
    maxPrincipalAmount,
    minNominalInterestRatePerPeriod,
    minNumberOfRepayments,
    minPrincipalAmount,
    minimumDaysBetweenDisbursalAndFirstRepayment,
    multiDisburseLoan,
    name,
    _new,
    nominalInterestRatePerPeriod,
    numberOfRepayments,
    overAppliedCalculationType,
    overAppliedNumber,
    overDueDaysForRepaymentEvent,
    overdueDaysForNPA,
    paymentAllocationRules,
    periodicAccrualAccountingEnabled,
    principalAmount,
    principalThresholdForLastInstallment,
    productInterestRecalculationDetails,
    rates,
    repaymentStartDateType,
    shortName,
    startDate,
    syncExpectedWithDisbursementDate,
    transactionProcessingStrategyCode,
    transactionProcessingStrategyName,
    upfrontAccrualAccountingEnabled,
    useBorrowerCycle,
    variableInstallmentConfig,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
