# GetLoansLoanIdSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canDisburse** | **boolean** |  | [optional] [default to undefined]
**chargeOffReason** | **string** |  | [optional] [default to undefined]
**chargeOffReasonId** | **number** |  | [optional] [default to undefined]
**currency** | [**GetLoansLoanIdCurrency**](GetLoansLoanIdCurrency.md) |  | [optional] [default to undefined]
**disbursementDetails** | [**Set&lt;GetLoansLoanIdDisbursementDetails&gt;**](GetLoansLoanIdDisbursementDetails.md) |  | [optional] [default to undefined]
**feeAdjustments** | **number** |  | [optional] [default to undefined]
**feeChargesCharged** | **number** |  | [optional] [default to undefined]
**feeChargesDueAtDisbursementCharged** | **number** |  | [optional] [default to undefined]
**feeChargesOutstanding** | **number** |  | [optional] [default to undefined]
**feeChargesOverdue** | **number** |  | [optional] [default to undefined]
**feeChargesPaid** | **number** |  | [optional] [default to undefined]
**feeChargesWaived** | **number** |  | [optional] [default to undefined]
**feeChargesWrittenOff** | **number** |  | [optional] [default to undefined]
**fixedEmiAmount** | **number** |  | [optional] [default to undefined]
**inArrears** | **boolean** |  | [optional] [default to undefined]
**interestCharged** | **number** |  | [optional] [default to undefined]
**interestOutstanding** | **number** |  | [optional] [default to undefined]
**interestOverdue** | **number** |  | [optional] [default to undefined]
**interestPaid** | **number** |  | [optional] [default to undefined]
**interestWaived** | **number** |  | [optional] [default to undefined]
**interestWrittenOff** | **number** |  | [optional] [default to undefined]
**isNPA** | **boolean** |  | [optional] [default to undefined]
**linkedAccount** | [**GetLoansLoanIdLinkedAccount**](GetLoansLoanIdLinkedAccount.md) |  | [optional] [default to undefined]
**maxOutstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**overdueCharges** | [**Set&lt;GetLoansLoanIdOverdueCharges&gt;**](GetLoansLoanIdOverdueCharges.md) |  | [optional] [default to undefined]
**overdueSinceDate** | **string** |  | [optional] [default to undefined]
**penaltyAdjustments** | **number** |  | [optional] [default to undefined]
**penaltyChargesCharged** | **number** |  | [optional] [default to undefined]
**penaltyChargesOutstanding** | **number** |  | [optional] [default to undefined]
**penaltyChargesOverdue** | **number** |  | [optional] [default to undefined]
**penaltyChargesPaid** | **number** |  | [optional] [default to undefined]
**penaltyChargesWaived** | **number** |  | [optional] [default to undefined]
**penaltyChargesWrittenOff** | **number** |  | [optional] [default to undefined]
**principalAdjustments** | **number** |  | [optional] [default to undefined]
**principalDisbursed** | **number** |  | [optional] [default to undefined]
**principalOutstanding** | **number** |  | [optional] [default to undefined]
**principalOverdue** | **number** |  | [optional] [default to undefined]
**principalPaid** | **number** |  | [optional] [default to undefined]
**principalWrittenOff** | **number** |  | [optional] [default to undefined]
**totalCapitalizedIncome** | **number** |  | [optional] [default to undefined]
**totalCapitalizedIncomeAdjustment** | **number** |  | [optional] [default to undefined]
**totalChargeAdjustment** | **number** |  | [optional] [default to undefined]
**totalChargeAdjustmentReversed** | **number** |  | [optional] [default to undefined]
**totalChargeback** | **number** |  | [optional] [default to undefined]
**totalCostOfLoan** | **number** |  | [optional] [default to undefined]
**totalCreditBalanceRefund** | **number** |  | [optional] [default to undefined]
**totalCreditBalanceRefundReversed** | **number** |  | [optional] [default to undefined]
**totalExpectedCostOfLoan** | **number** |  | [optional] [default to undefined]
**totalExpectedRepayment** | **number** |  | [optional] [default to undefined]
**totalGoodwillCredit** | **number** |  | [optional] [default to undefined]
**totalGoodwillCreditReversed** | **number** |  | [optional] [default to undefined]
**totalInterestPaymentWaiver** | **number** |  | [optional] [default to undefined]
**totalInterestRefund** | **number** |  | [optional] [default to undefined]
**totalMerchantRefund** | **number** |  | [optional] [default to undefined]
**totalMerchantRefundReversed** | **number** |  | [optional] [default to undefined]
**totalOutstanding** | **number** |  | [optional] [default to undefined]
**totalOverdue** | **number** |  | [optional] [default to undefined]
**totalPayoutRefund** | **number** |  | [optional] [default to undefined]
**totalPayoutRefundReversed** | **number** |  | [optional] [default to undefined]
**totalPrincipal** | **number** |  | [optional] [default to undefined]
**totalRecovered** | **number** |  | [optional] [default to undefined]
**totalRepayment** | **number** |  | [optional] [default to undefined]
**totalRepaymentTransaction** | **number** |  | [optional] [default to undefined]
**totalRepaymentTransactionReversed** | **number** |  | [optional] [default to undefined]
**totalUnpaidPayableDueInterest** | **number** |  | [optional] [default to undefined]
**totalUnpaidPayableNotDueInterest** | **number** |  | [optional] [default to undefined]
**totalWaived** | **number** |  | [optional] [default to undefined]
**totalWrittenOff** | **number** |  | [optional] [default to undefined]
**writeoffReason** | **string** |  | [optional] [default to undefined]
**writeoffReasonId** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdSummary } from 'fineract-typescript-client';

const instance: GetLoansLoanIdSummary = {
    canDisburse,
    chargeOffReason,
    chargeOffReasonId,
    currency,
    disbursementDetails,
    feeAdjustments,
    feeChargesCharged,
    feeChargesDueAtDisbursementCharged,
    feeChargesOutstanding,
    feeChargesOverdue,
    feeChargesPaid,
    feeChargesWaived,
    feeChargesWrittenOff,
    fixedEmiAmount,
    inArrears,
    interestCharged,
    interestOutstanding,
    interestOverdue,
    interestPaid,
    interestWaived,
    interestWrittenOff,
    isNPA,
    linkedAccount,
    maxOutstandingLoanBalance,
    overdueCharges,
    overdueSinceDate,
    penaltyAdjustments,
    penaltyChargesCharged,
    penaltyChargesOutstanding,
    penaltyChargesOverdue,
    penaltyChargesPaid,
    penaltyChargesWaived,
    penaltyChargesWrittenOff,
    principalAdjustments,
    principalDisbursed,
    principalOutstanding,
    principalOverdue,
    principalPaid,
    principalWrittenOff,
    totalCapitalizedIncome,
    totalCapitalizedIncomeAdjustment,
    totalChargeAdjustment,
    totalChargeAdjustmentReversed,
    totalChargeback,
    totalCostOfLoan,
    totalCreditBalanceRefund,
    totalCreditBalanceRefundReversed,
    totalExpectedCostOfLoan,
    totalExpectedRepayment,
    totalGoodwillCredit,
    totalGoodwillCreditReversed,
    totalInterestPaymentWaiver,
    totalInterestRefund,
    totalMerchantRefund,
    totalMerchantRefundReversed,
    totalOutstanding,
    totalOverdue,
    totalPayoutRefund,
    totalPayoutRefundReversed,
    totalPrincipal,
    totalRecovered,
    totalRepayment,
    totalRepaymentTransaction,
    totalRepaymentTransactionReversed,
    totalUnpaidPayableDueInterest,
    totalUnpaidPayableNotDueInterest,
    totalWaived,
    totalWrittenOff,
    writeoffReason,
    writeoffReasonId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
