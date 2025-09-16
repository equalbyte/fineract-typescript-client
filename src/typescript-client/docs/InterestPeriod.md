# InterestPeriod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balanceCorrectionAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**calculatedDueInterest** | **number** |  | [optional] [default to undefined]
**capitalizedIncomePrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedAmounts** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedInterest** | [**Money**](Money.md) |  | [optional] [default to undefined]
**creditedPrincipal** | [**Money**](Money.md) |  | [optional] [default to undefined]
**disbursementAmount** | [**Money**](Money.md) |  | [optional] [default to undefined]
**dueDate** | **string** |  | [default to undefined]
**firstInterestPeriod** | **boolean** |  | [optional] [default to undefined]
**fromDate** | **string** |  | [default to undefined]
**length** | **number** |  | [optional] [default to undefined]
**lengthTillPeriodDueDate** | **number** |  | [optional] [default to undefined]
**mc** | [**InterestPeriodMc**](InterestPeriodMc.md) |  | [optional] [default to undefined]
**outstandingLoanBalance** | [**Money**](Money.md) |  | [optional] [default to undefined]
**paused** | **boolean** |  | [optional] [default to undefined]
**rateFactor** | **number** |  | [optional] [default to undefined]
**rateFactorTillPeriodDueDate** | **number** |  | [optional] [default to undefined]
**repaymentPeriod** | [**RepaymentPeriod**](RepaymentPeriod.md) |  | [optional] [default to undefined]

## Example

```typescript
import { InterestPeriod } from 'fineract-typescript-client';

const instance: InterestPeriod = {
    balanceCorrectionAmount,
    calculatedDueInterest,
    capitalizedIncomePrincipal,
    creditedAmounts,
    creditedInterest,
    creditedPrincipal,
    disbursementAmount,
    dueDate,
    firstInterestPeriod,
    fromDate,
    length,
    lengthTillPeriodDueDate,
    mc,
    outstandingLoanBalance,
    paused,
    rateFactor,
    rateFactorTillPeriodDueDate,
    repaymentPeriod,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
