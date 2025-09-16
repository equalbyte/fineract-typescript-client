# GetLoansLoanIdResponse

GetLoansLoanIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNo** | **string** |  | [optional] [default to undefined]
**amortizationType** | [**GetLoansLoanIdAmortizationType**](GetLoansLoanIdAmortizationType.md) |  | [optional] [default to undefined]
**annualInterestRate** | **number** |  | [optional] [default to undefined]
**approvedPrincipal** | **number** |  | [optional] [default to undefined]
**buyDownFeeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**buyDownFeeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeCalculationType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeStrategy** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**capitalizedIncomeType** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargeOffBehaviour** | [**StringEnumOptionData**](StringEnumOptionData.md) |  | [optional] [default to undefined]
**chargedOff** | **boolean** |  | [optional] [default to undefined]
**charges** | [**Array&lt;GetLoansLoanIdLoanChargeData&gt;**](GetLoansLoanIdLoanChargeData.md) | Set of charges | [optional] [default to undefined]
**clientExternalId** | **string** |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**clientOfficeId** | **number** |  | [optional] [default to undefined]
**currency** | [**GetLoansLoanIdCurrency**](GetLoansLoanIdCurrency.md) |  | [optional] [default to undefined]
**delinquencyRange** | [**DelinquencyRangeData**](DelinquencyRangeData.md) |  | [optional] [default to undefined]
**delinquent** | [**GetLoansLoanIdDelinquencySummary**](GetLoansLoanIdDelinquencySummary.md) |  | [optional] [default to undefined]
**disallowExpectedDisbursements** | **boolean** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**disbursementDetails** | [**Set&lt;GetLoansLoanIdDisbursementDetails&gt;**](GetLoansLoanIdDisbursementDetails.md) | Set of GetLoansLoanIdDisbursementDetails | [optional] [default to undefined]
**emiAmountVariations** | [**Array&lt;GetLoansLoanIdLoanTermVariations&gt;**](GetLoansLoanIdLoanTermVariations.md) | List of GetLoansLoanIdLoanTermVariations | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableBuyDownFee** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableIncomeCapitalization** | **boolean** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**fraud** | **boolean** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**inArrearsTolerance** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | [**GetLoansLoanIdInterestCalculationPeriodType**](GetLoansLoanIdInterestCalculationPeriodType.md) |  | [optional] [default to undefined]
**interestRateFrequencyType** | [**GetLoansLoanIdInterestRateFrequencyType**](GetLoansLoanIdInterestRateFrequencyType.md) |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | [**GetLoansLoanIdInterestType**](GetLoansLoanIdInterestType.md) |  | [optional] [default to undefined]
**isFloatingInterestRate** | **boolean** |  | [optional] [default to undefined]
**lastClosedBusinessDate** | **string** |  | [optional] [default to undefined]
**loanOfficerId** | **number** |  | [optional] [default to undefined]
**loanOfficerName** | **string** |  | [optional] [default to undefined]
**loanProductDescription** | **string** |  | [optional] [default to undefined]
**loanProductId** | **number** |  | [optional] [default to undefined]
**loanProductName** | **string** |  | [optional] [default to undefined]
**loanPurposeId** | **number** |  | [optional] [default to undefined]
**loanPurposeName** | **string** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanScheduleType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanTermVariations** | [**Array&lt;GetLoansLoanIdLoanTermVariations&gt;**](GetLoansLoanIdLoanTermVariations.md) | List of GetLoansLoanIdLoanTermVariations | [optional] [default to undefined]
**loanType** | [**GetLoansLoanIdLoanType**](GetLoansLoanIdLoanType.md) |  | [optional] [default to undefined]
**netDisbursalAmount** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**overpaidOnDate** | **string** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**proposedPrincipal** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | [**GetLoansLoanIdRepaymentFrequencyType**](GetLoansLoanIdRepaymentFrequencyType.md) |  | [optional] [default to undefined]
**repaymentSchedule** | [**GetLoansLoanIdRepaymentSchedule**](GetLoansLoanIdRepaymentSchedule.md) |  | [optional] [default to undefined]
**status** | [**GetLoansLoanIdStatus**](GetLoansLoanIdStatus.md) |  | [optional] [default to undefined]
**summary** | [**GetLoansLoanIdSummary**](GetLoansLoanIdSummary.md) |  | [optional] [default to undefined]
**termFrequency** | **number** |  | [optional] [default to undefined]
**termPeriodFrequencyType** | [**GetLoansLoanIdTermPeriodFrequencyType**](GetLoansLoanIdTermPeriodFrequencyType.md) |  | [optional] [default to undefined]
**timeline** | [**GetLoansLoanIdTimeline**](GetLoansLoanIdTimeline.md) |  | [optional] [default to undefined]
**totalOverpaid** | **number** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]
**transactions** | [**Array&lt;GetLoansLoanIdTransactions&gt;**](GetLoansLoanIdTransactions.md) | Set of GetLoansLoanIdTransactions | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdResponse } from 'fineract-typescript-client';

const instance: GetLoansLoanIdResponse = {
    accountNo,
    amortizationType,
    annualInterestRate,
    approvedPrincipal,
    buyDownFeeCalculationType,
    buyDownFeeIncomeType,
    buyDownFeeStrategy,
    capitalizedIncomeCalculationType,
    capitalizedIncomeStrategy,
    capitalizedIncomeType,
    chargeOffBehaviour,
    chargedOff,
    charges,
    clientExternalId,
    clientId,
    clientName,
    clientOfficeId,
    currency,
    delinquencyRange,
    delinquent,
    disallowExpectedDisbursements,
    disbursedAmountPercentageForDownPayment,
    disbursementDetails,
    emiAmountVariations,
    enableAutoRepaymentForDownPayment,
    enableBuyDownFee,
    enableDownPayment,
    enableIncomeCapitalization,
    enableInstallmentLevelDelinquency,
    externalId,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    fraud,
    id,
    inArrearsTolerance,
    interestCalculationPeriodType,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRecognitionOnDisbursementDate,
    interestType,
    isFloatingInterestRate,
    lastClosedBusinessDate,
    loanOfficerId,
    loanOfficerName,
    loanProductDescription,
    loanProductId,
    loanProductName,
    loanPurposeId,
    loanPurposeName,
    loanScheduleProcessingType,
    loanScheduleType,
    loanTermVariations,
    loanType,
    netDisbursalAmount,
    numberOfRepayments,
    overpaidOnDate,
    principal,
    proposedPrincipal,
    repaymentEvery,
    repaymentFrequencyType,
    repaymentSchedule,
    status,
    summary,
    termFrequency,
    termPeriodFrequencyType,
    timeline,
    totalOverpaid,
    transactionProcessingStrategyCode,
    transactions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
