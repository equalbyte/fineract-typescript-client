# PutLoansLoanIdRequest

PutLoansLoanIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amortizationType** | **number** |  | [optional] [default to undefined]
**charges** | [**Array&lt;PutLoansLoanIdChanges&gt;**](PutLoansLoanIdChanges.md) |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**collateral** | [**Array&lt;PutLoansLoanIdCollateral&gt;**](PutLoansLoanIdCollateral.md) |  | [optional] [default to undefined]
**createStandingInstructionAtDisbursement** | **boolean** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**disbursedAmountPercentageForDownPayment** | **number** |  | [optional] [default to undefined]
**disbursementData** | [**Array&lt;PutLoansLoanIdDisbursementData&gt;**](PutLoansLoanIdDisbursementData.md) |  | [optional] [default to undefined]
**enableAutoRepaymentForDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableDownPayment** | **boolean** |  | [optional] [default to undefined]
**enableInstallmentLevelDelinquency** | **boolean** |  | [optional] [default to undefined]
**expectedDisbursementDate** | **string** |  | [optional] [default to undefined]
**fixedLength** | **number** |  | [optional] [default to undefined]
**fixedPrincipalPercentagePerInstallment** | **number** |  | [optional] [default to undefined]
**fraud** | **boolean** |  | [optional] [default to undefined]
**graceOnArrearsAgeing** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | **number** |  | [optional] [default to undefined]
**interestChargedFromDate** | **string** |  | [optional] [default to undefined]
**interestRateFrequencyType** | **number** |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestRecognitionOnDisbursementDate** | **boolean** |  | [optional] [default to undefined]
**interestType** | **number** |  | [optional] [default to undefined]
**isEqualAmortization** | **boolean** |  | [optional] [default to undefined]
**isTopup** | **boolean** |  | [optional] [default to undefined]
**linkAccountId** | **number** |  | [optional] [default to undefined]
**loanIdToClose** | **number** |  | [optional] [default to undefined]
**loanScheduleProcessingType** | **string** |  | [optional] [default to undefined]
**loanTermFrequency** | **number** |  | [optional] [default to undefined]
**loanTermFrequencyType** | **number** |  | [optional] [default to undefined]
**loanType** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**maxOutstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyDayOfWeekType** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyNthDayType** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | **number** |  | [optional] [default to undefined]
**repaymentsStartingFromDate** | **string** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PutLoansLoanIdRequest } from 'fineract-typescript-client';

const instance: PutLoansLoanIdRequest = {
    amortizationType,
    charges,
    clientId,
    collateral,
    createStandingInstructionAtDisbursement,
    dateFormat,
    disbursedAmountPercentageForDownPayment,
    disbursementData,
    enableAutoRepaymentForDownPayment,
    enableDownPayment,
    enableInstallmentLevelDelinquency,
    expectedDisbursementDate,
    fixedLength,
    fixedPrincipalPercentagePerInstallment,
    fraud,
    graceOnArrearsAgeing,
    interestCalculationPeriodType,
    interestChargedFromDate,
    interestRateFrequencyType,
    interestRatePerPeriod,
    interestRecognitionOnDisbursementDate,
    interestType,
    isEqualAmortization,
    isTopup,
    linkAccountId,
    loanIdToClose,
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
    repaymentFrequencyDayOfWeekType,
    repaymentFrequencyNthDayType,
    repaymentFrequencyType,
    repaymentsStartingFromDate,
    submittedOnDate,
    transactionProcessingStrategyCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
