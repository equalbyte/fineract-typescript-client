# PostLoansResponse

PostLoansResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **number** |  | [optional] [default to undefined]
**currency** | [**GetLoansLoanIdCurrency**](GetLoansLoanIdCurrency.md) |  | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**loanTermInDays** | **number** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**periods** | [**Set&lt;PostLoansRepaymentSchedulePeriods&gt;**](PostLoansRepaymentSchedulePeriods.md) |  | [optional] [default to undefined]
**resourceExternalId** | **string** |  | [optional] [default to undefined]
**resourceId** | **number** |  | [optional] [default to undefined]
**totalFeeChargesCharged** | **number** |  | [optional] [default to undefined]
**totalInterestCharged** | **number** |  | [optional] [default to undefined]
**totalOutstanding** | **number** |  | [optional] [default to undefined]
**totalPenaltyChargesCharged** | **number** |  | [optional] [default to undefined]
**totalPrincipalDisbursed** | **number** |  | [optional] [default to undefined]
**totalPrincipalExpected** | **number** |  | [optional] [default to undefined]
**totalPrincipalPaid** | **number** |  | [optional] [default to undefined]
**totalRepayment** | **number** |  | [optional] [default to undefined]
**totalRepaymentExpected** | **number** |  | [optional] [default to undefined]
**totalWaived** | **number** |  | [optional] [default to undefined]
**totalWrittenOff** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PostLoansResponse } from 'fineract-typescript-client';

const instance: PostLoansResponse = {
    clientId,
    currency,
    loanId,
    loanTermInDays,
    officeId,
    periods,
    resourceExternalId,
    resourceId,
    totalFeeChargesCharged,
    totalInterestCharged,
    totalOutstanding,
    totalPenaltyChargesCharged,
    totalPrincipalDisbursed,
    totalPrincipalExpected,
    totalPrincipalPaid,
    totalRepayment,
    totalRepaymentExpected,
    totalWaived,
    totalWrittenOff,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
