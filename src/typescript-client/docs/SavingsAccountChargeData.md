# SavingsAccountChargeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **number** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**amountOrPercentage** | **number** |  | [optional] [default to undefined]
**amountOutstanding** | **number** |  | [optional] [default to undefined]
**amountPaid** | **number** |  | [optional] [default to undefined]
**amountPercentageAppliedTo** | **number** |  | [optional] [default to undefined]
**amountWaived** | **number** |  | [optional] [default to undefined]
**amountWrittenOff** | **number** |  | [optional] [default to undefined]
**annualFee** | **boolean** |  | [optional] [default to undefined]
**chargeCalculationType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeData** | [**ChargeData**](ChargeData.md) |  | [optional] [default to undefined]
**chargeId** | **number** |  | [optional] [default to undefined]
**chargeOptions** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**chargeTimeType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**dueDate** | **string** |  | [optional] [default to undefined]
**feeCharge** | **boolean** |  | [optional] [default to undefined]
**feeInterval** | **number** |  | [optional] [default to undefined]
**feeOnMonthDay** | [**ChargeFeeOnMonthDay**](ChargeFeeOnMonthDay.md) |  | [optional] [default to undefined]
**freeWithdrawalChargeFrequency** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**inactivationDate** | **string** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**isFreeWithdrawal** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**penalty** | **boolean** |  | [optional] [default to undefined]
**percentage** | **number** |  | [optional] [default to undefined]
**restartFrequency** | **number** |  | [optional] [default to undefined]
**restartFrequencyEnum** | **number** |  | [optional] [default to undefined]
**savingsActivation** | **boolean** |  | [optional] [default to undefined]
**withdrawalFee** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SavingsAccountChargeData } from 'fineract-typescript-client';

const instance: SavingsAccountChargeData = {
    accountId,
    amount,
    amountOrPercentage,
    amountOutstanding,
    amountPaid,
    amountPercentageAppliedTo,
    amountWaived,
    amountWrittenOff,
    annualFee,
    chargeCalculationType,
    chargeData,
    chargeId,
    chargeOptions,
    chargeTimeType,
    currency,
    dueDate,
    feeCharge,
    feeInterval,
    feeOnMonthDay,
    freeWithdrawalChargeFrequency,
    id,
    inactivationDate,
    isActive,
    isFreeWithdrawal,
    name,
    penalty,
    percentage,
    restartFrequency,
    restartFrequencyEnum,
    savingsActivation,
    withdrawalFee,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
