# GetProductsTypeProductIdResponse

GetProductsTypeProductIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountingMappingOptions** | [**GetProductsAccountingMappingOptions**](GetProductsAccountingMappingOptions.md) |  | [optional] [default to undefined]
**accountingMappings** | [**GetProductsAccountingMappings**](GetProductsAccountingMappings.md) |  | [optional] [default to undefined]
**accountingRule** | [**GetProductsAccountingRule**](GetProductsAccountingRule.md) |  | [optional] [default to undefined]
**allowDividendCalculationForInactiveClients** | **boolean** |  | [optional] [default to undefined]
**chargeOptions** | [**Set&lt;GetProductsCharges&gt;**](GetProductsCharges.md) |  | [optional] [default to undefined]
**charges** | [**Set&lt;GetProductsCharges&gt;**](GetProductsCharges.md) |  | [optional] [default to undefined]
**currency** | [**GetProductsCurrency**](GetProductsCurrency.md) |  | [optional] [default to undefined]
**currencyOptions** | [**Set&lt;GetChargesCurrency&gt;**](GetChargesCurrency.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**lockPeriodTypeEnum** | [**GetLockPeriodTypeEnum**](GetLockPeriodTypeEnum.md) |  | [optional] [default to undefined]
**lockinPeriod** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyTypeOptions** | [**Set&lt;GetProductsMinimumActivePeriodFrequencyTypeOptions&gt;**](GetProductsMinimumActivePeriodFrequencyTypeOptions.md) |  | [optional] [default to undefined]
**marketPrice** | [**Set&lt;GetProductsMarketPrice&gt;**](GetProductsMarketPrice.md) |  | [optional] [default to undefined]
**maximumShares** | **number** |  | [optional] [default to undefined]
**minimumActivePeriod** | **number** |  | [optional] [default to undefined]
**minimumActivePeriodForDividendsTypeEnum** | [**GetLockPeriodTypeEnum**](GetLockPeriodTypeEnum.md) |  | [optional] [default to undefined]
**minimumActivePeriodFrequencyTypeOptions** | [**Set&lt;GetProductsMinimumActivePeriodFrequencyTypeOptions&gt;**](GetProductsMinimumActivePeriodFrequencyTypeOptions.md) |  | [optional] [default to undefined]
**minimumShares** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nominalShares** | **number** |  | [optional] [default to undefined]
**shareCapital** | **number** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]
**totalShares** | **number** |  | [optional] [default to undefined]
**totalSharesIssued** | **number** |  | [optional] [default to undefined]
**unitPrice** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { GetProductsTypeProductIdResponse } from 'fineract-typescript-client';

const instance: GetProductsTypeProductIdResponse = {
    accountingMappingOptions,
    accountingMappings,
    accountingRule,
    allowDividendCalculationForInactiveClients,
    chargeOptions,
    charges,
    currency,
    currencyOptions,
    description,
    id,
    lockPeriodTypeEnum,
    lockinPeriod,
    lockinPeriodFrequencyTypeOptions,
    marketPrice,
    maximumShares,
    minimumActivePeriod,
    minimumActivePeriodForDividendsTypeEnum,
    minimumActivePeriodFrequencyTypeOptions,
    minimumShares,
    name,
    nominalShares,
    shareCapital,
    shortName,
    totalShares,
    totalSharesIssued,
    unitPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
