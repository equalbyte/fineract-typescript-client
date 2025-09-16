# RepaymentPeriod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculatedDueInterest** | [**Money**](Money.md) |  | [default to undefined]
**calculatedDuePrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**capitalizedIncomePrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedAmounts** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedPrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**currency** | [**MonetaryCurrency**](MonetaryCurrency.md) |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**dueInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**duePrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**emi** | [**Money**](Money.md) |  | [optional] [default to undefined]
**emiPlusCreditedAmountsPlusFutureUnrecognizedInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**firstInterestPeriod** | [**InterestPeriod**](InterestPeriod.md) |  | [optional] [default to undefined]
**firstRepaymentPeriod** | **boolean** |  | [optional] [default to undefined]
**fromDate** | **string** |  | [optional] [default to undefined]
**fullyPaid** | **boolean** |  | [optional] [default to undefined]
**futureUnrecognizedInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**initialBalanceForEmiRecalculation** | [**Money**](Money.md) |  | [optional] [default to undefined]
**interestMoved** | **boolean** |  | [optional] [default to undefined]
**interestPeriods** | [**Array&lt;InterestPeriod&gt;**](InterestPeriod.md) |  | [optional] [default to undefined]
**lastInterestPeriod** | [**InterestPeriod**](InterestPeriod.md) |  | [optional] [default to undefined]
**loanProductRelatedDetail** | [**LoanProductMinimumRepaymentScheduleRelatedDetail**](LoanProductMinimumRepaymentScheduleRelatedDetail.md) |  | [optional] [default to undefined]
**mc** | [**InterestPeriodMc**](InterestPeriodMc.md) |  | [optional] [default to undefined]
**originalEmi** | [**Money**](Money.md) |  | [optional] [default to undefined]
**outstandingInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**outstandingLoanBalance** | [**Money**](Money.md) |  | [optional] [default to undefined]
**outstandingPrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**paidInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**paidPrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**previous** | [**RepaymentPeriod**](RepaymentPeriod.md) |  | [optional] [default to undefined]
**rateFactorPlus1** | **number** |  | [optional] [default to undefined]
**totalCapitalizedIncomeAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**totalCreditedAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**totalDisbursedAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**totalPaidAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**unrecognizedInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**zero** | [**Money**](Money.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RepaymentPeriod } from 'fineract-typescript-client';

const instance: RepaymentPeriod = {
    calculatedDueInterest,
    calculatedDuePrincipal,
    capitalizedIncomePrincipal,
    creditedAmounts,
    creditedInterest,
    creditedPrincipal,
    currency,
    dueDate,
    dueInterest,
    duePrincipal,
    emi,
    emiPlusCreditedAmountsPlusFutureUnrecognizedInterest,
    firstInterestPeriod,
    firstRepaymentPeriod,
    fromDate,
    fullyPaid,
    futureUnrecognizedInterest,
    initialBalanceForEmiRecalculation,
    interestMoved,
    interestPeriods,
    lastInterestPeriod,
    loanProductRelatedDetail,
    mc,
    originalEmi,
    outstandingInterest,
    outstandingLoanBalance,
    outstandingPrincipal,
    paidInterest,
    paidPrincipal,
    previous,
    rateFactorPlus1,
    totalCapitalizedIncomeAmount,
    totalCreditedAmount,
    totalDisbursedAmount,
    totalPaidAmount,
    unrecognizedInterest,
    zero,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
