# ChargeData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountMappingForChargeConfig** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**amount** | **number** |  | [optional] [default to undefined]
**assetAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**chargeAppliesTo** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeAppliesToOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeCalculationType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargePaymentMode** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargePaymetModeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeTimeType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**chargeTimeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**clientChargeCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**clientChargeTimeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**currencyOptions** | [**Array&lt;CurrencyData&gt;**](CurrencyData.md) |  | [optional] [default to undefined]
**expenseAccountOptions** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**feeFrequency** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**feeFrequencyOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**feeInterval** | **number** |  | [optional] [default to undefined]
**feeOnMonthDay** | [**ChargeFeeOnMonthDay**](ChargeFeeOnMonthDay.md) |  | [optional] [default to undefined]
**freeWithdrawal** | **boolean** |  | [optional] [default to undefined]
**freeWithdrawalChargeFrequency** | **number** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**incomeOrLiabilityAccount** | [**GLAccountData**](GLAccountData.md) |  | [optional] [default to undefined]
**incomeOrLiabilityAccountOptions** | **{ [key: string]: Array&lt;GLAccountData&gt;; }** |  | [optional] [default to undefined]
**isPaymentType** | **boolean** |  | [optional] [default to undefined]
**loanChargeCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**loanChargeTimeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**maxCap** | **number** |  | [optional] [default to undefined]
**minCap** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**overdueInstallmentCharge** | **boolean** |  | [optional] [default to undefined]
**paymentTypeOptions** | [**PaymentTypeData**](PaymentTypeData.md) |  | [optional] [default to undefined]
**penalty** | **boolean** |  | [optional] [default to undefined]
**restartFrequency** | **number** |  | [optional] [default to undefined]
**restartFrequencyEnum** | **number** |  | [optional] [default to undefined]
**savingsChargeCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**savingsChargeTimeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**shareChargeCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**shareChargeTimeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**taxGroup** | [**TaxGroupData**](TaxGroupData.md) |  | [optional] [default to undefined]
**taxGroupOptions** | [**Array&lt;TaxGroupData&gt;**](TaxGroupData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChargeData } from 'fineract-typescript-client';

const instance: ChargeData = {
    accountMappingForChargeConfig,
    active,
    amount,
    assetAccountOptions,
    chargeAppliesTo,
    chargeAppliesToOptions,
    chargeCalculationType,
    chargeCalculationTypeOptions,
    chargePaymentMode,
    chargePaymetModeOptions,
    chargeTimeType,
    chargeTimeTypeOptions,
    clientChargeCalculationTypeOptions,
    clientChargeTimeTypeOptions,
    currency,
    currencyOptions,
    expenseAccountOptions,
    feeFrequency,
    feeFrequencyOptions,
    feeInterval,
    feeOnMonthDay,
    freeWithdrawal,
    freeWithdrawalChargeFrequency,
    id,
    incomeOrLiabilityAccount,
    incomeOrLiabilityAccountOptions,
    isPaymentType,
    loanChargeCalculationTypeOptions,
    loanChargeTimeTypeOptions,
    maxCap,
    minCap,
    name,
    overdueInstallmentCharge,
    paymentTypeOptions,
    penalty,
    restartFrequency,
    restartFrequencyEnum,
    savingsChargeCalculationTypeOptions,
    savingsChargeTimeTypeOptions,
    shareChargeCalculationTypeOptions,
    shareChargeTimeTypeOptions,
    taxGroup,
    taxGroupOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
