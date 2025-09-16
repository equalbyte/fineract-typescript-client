# GetLoansLoanIdLoanChargeData

Set of charges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**amountOrPercentage** | **number** |  | [optional] [default to undefined]
**amountOutstanding** | **number** |  | [optional] [default to undefined]
**amountPaid** | **number** |  | [optional] [default to undefined]
**amountPercentageAppliedTo** | **number** |  | [optional] [default to undefined]
**amountWaived** | **number** |  | [optional] [default to undefined]
**amountWrittenOff** | **number** |  | [optional] [default to undefined]
**chargeCalculationType** | [**GetLoansLoanIdEnumOptionData**](GetLoansLoanIdEnumOptionData.md) |  | [optional] [default to undefined]
**chargeId** | **number** |  | [optional] [default to undefined]
**chargePayable** | **boolean** |  | [optional] [default to undefined]
**chargePaymentMode** | [**GetLoansLoanIdEnumOptionData**](GetLoansLoanIdEnumOptionData.md) |  | [optional] [default to undefined]
**chargeTimeType** | [**GetLoansLoanIdEnumOptionData**](GetLoansLoanIdEnumOptionData.md) |  | [optional] [default to undefined]
**currency** | [**GetLoansLoanIdCurrency**](GetLoansLoanIdCurrency.md) |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**installmentChargeData** | [**Array&lt;GetLoansLoanIdLoanInstallmentChargeData&gt;**](GetLoansLoanIdLoanInstallmentChargeData.md) | List of GetLoansLoanIdLoanInstallmentChargeData | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**maxCap** | **number** |  | [optional] [default to undefined]
**minCap** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**paid** | **boolean** |  | [optional] [default to undefined]
**penalty** | **boolean** |  | [optional] [default to undefined]
**percentage** | **number** |  | [optional] [default to undefined]
**waived** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdLoanChargeData } from 'fineract-typescript-client';

const instance: GetLoansLoanIdLoanChargeData = {
    amount,
    amountOrPercentage,
    amountOutstanding,
    amountPaid,
    amountPercentageAppliedTo,
    amountWaived,
    amountWrittenOff,
    chargeCalculationType,
    chargeId,
    chargePayable,
    chargePaymentMode,
    chargeTimeType,
    currency,
    dueDate,
    id,
    installmentChargeData,
    loanId,
    maxCap,
    minCap,
    name,
    paid,
    penalty,
    percentage,
    waived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
