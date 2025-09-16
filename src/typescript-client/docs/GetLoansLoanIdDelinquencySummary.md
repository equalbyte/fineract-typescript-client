# GetLoansLoanIdDelinquencySummary

Delinquent data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableDisbursementAmount** | **number** |  | [optional] [default to undefined]
**availableDisbursementAmountWithOverApplied** | **number** |  | [optional] [default to undefined]
**delinquencyPausePeriods** | [**Array&lt;GetLoansLoanIdDelinquencyPausePeriod&gt;**](GetLoansLoanIdDelinquencyPausePeriod.md) | List of GetLoansLoanIdDelinquencyPausePeriod | [optional] [default to undefined]
**delinquentAmount** | **number** |  | [optional] [default to undefined]
**delinquentDate** | **string** |  | [optional] [default to undefined]
**delinquentDays** | **number** |  | [optional] [default to undefined]
**delinquentFee** | **number** |  | [optional] [default to undefined]
**delinquentInterest** | **number** |  | [optional] [default to undefined]
**delinquentPenalty** | **number** |  | [optional] [default to undefined]
**delinquentPrincipal** | **number** |  | [optional] [default to undefined]
**installmentLevelDelinquency** | [**Array&lt;GetLoansLoanIdLoanInstallmentLevelDelinquency&gt;**](GetLoansLoanIdLoanInstallmentLevelDelinquency.md) | List of GetLoansLoanIdLoanInstallmentLevelDelinquency | [optional] [default to undefined]
**lastPaymentAmount** | **number** |  | [optional] [default to undefined]
**lastPaymentDate** | **string** |  | [optional] [default to undefined]
**lastRepaymentAmount** | **number** |  | [optional] [default to undefined]
**lastRepaymentDate** | **string** |  | [optional] [default to undefined]
**nextPaymentAmount** | **number** |  | [optional] [default to undefined]
**nextPaymentDueDate** | **string** |  | [optional] [default to undefined]
**pastDueDays** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdDelinquencySummary } from 'fineract-typescript-client';

const instance: GetLoansLoanIdDelinquencySummary = {
    availableDisbursementAmount,
    availableDisbursementAmountWithOverApplied,
    delinquencyPausePeriods,
    delinquentAmount,
    delinquentDate,
    delinquentDays,
    delinquentFee,
    delinquentInterest,
    delinquentPenalty,
    delinquentPrincipal,
    installmentLevelDelinquency,
    lastPaymentAmount,
    lastPaymentDate,
    lastRepaymentAmount,
    lastRepaymentDate,
    nextPaymentAmount,
    nextPaymentDueDate,
    pastDueDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
