# GetAccountsTypeAccountIdResponse

GetAccountsTypeAccountIdResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNo** | **number** |  | [optional] [default to undefined]
**allowDividendCalculationForInactiveClients** | **boolean** |  | [optional] [default to undefined]
**charges** | [**Set&lt;GetAccountsCharges&gt;**](GetAccountsCharges.md) |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**currency** | [**GetAccountsCurrency**](GetAccountsCurrency.md) |  | [optional] [default to undefined]
**currentMarketPrice** | **number** |  | [optional] [default to undefined]
**dividends** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**lockPeriodTypeEnum** | [**GetAccountsLockPeriodTypeEnum**](GetAccountsLockPeriodTypeEnum.md) |  | [optional] [default to undefined]
**lockinPeriod** | **number** |  | [optional] [default to undefined]
**minimumActivePeriod** | **number** |  | [optional] [default to undefined]
**minimumActivePeriodTypeEnum** | [**GetAccountsLockPeriodTypeEnum**](GetAccountsLockPeriodTypeEnum.md) |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**productName** | **string** |  | [optional] [default to undefined]
**purchasedShares** | [**Set&lt;GetAccountsPurchasedShares&gt;**](GetAccountsPurchasedShares.md) |  | [optional] [default to undefined]
**savingsAccountId** | **number** |  | [optional] [default to undefined]
**savingsAccountNumber** | **number** |  | [optional] [default to undefined]
**status** | [**GetAccountsStatus**](GetAccountsStatus.md) |  | [optional] [default to undefined]
**summary** | [**GetAccountsSummary**](GetAccountsSummary.md) |  | [optional] [default to undefined]
**timeline** | [**GetAccountsTimeline**](GetAccountsTimeline.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetAccountsTypeAccountIdResponse } from 'fineract-typescript-client';

const instance: GetAccountsTypeAccountIdResponse = {
    accountNo,
    allowDividendCalculationForInactiveClients,
    charges,
    clientId,
    clientName,
    currency,
    currentMarketPrice,
    dividends,
    id,
    lockPeriodTypeEnum,
    lockinPeriod,
    minimumActivePeriod,
    minimumActivePeriodTypeEnum,
    productId,
    productName,
    purchasedShares,
    savingsAccountId,
    savingsAccountNumber,
    status,
    summary,
    timeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
