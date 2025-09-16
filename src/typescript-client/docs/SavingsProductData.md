# SavingsProductData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrualBasedAccountingEnabled** | **boolean** |  | [optional] [default to undefined]
**allowOverdraft** | **boolean** |  | [optional] [default to undefined]
**cashBasedAccountingEnabled** | **boolean** |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**depositAccountType** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCalculationType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestPostingPeriodType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**lockinPeriodFrequency** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**maxAllowedLienLimit** | **number** |  | [optional] [default to undefined]
**minRequiredBalance** | **number** |  | [optional] [default to undefined]
**minRequiredOpeningBalance** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**overdraftLimit** | **number** |  | [optional] [default to undefined]
**periodicAccrualAccounting** | **boolean** |  | [optional] [default to undefined]
**upfrontAccrualAccounting** | **boolean** |  | [optional] [default to undefined]
**withdrawalFeeForTransfers** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { SavingsProductData } from 'fineract-typescript-client';

const instance: SavingsProductData = {
    accrualBasedAccountingEnabled,
    allowOverdraft,
    cashBasedAccountingEnabled,
    currency,
    depositAccountType,
    id,
    interestCalculationDaysInYearType,
    interestCalculationType,
    interestCompoundingPeriodType,
    interestPostingPeriodType,
    lockinPeriodFrequency,
    lockinPeriodFrequencyType,
    maxAllowedLienLimit,
    minRequiredBalance,
    minRequiredOpeningBalance,
    name,
    nominalAnnualInterestRate,
    overdraftLimit,
    periodicAccrualAccounting,
    upfrontAccrualAccounting,
    withdrawalFeeForTransfers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
