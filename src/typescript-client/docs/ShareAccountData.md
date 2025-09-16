# ShareAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNo** | **string** |  | [optional] [default to undefined]
**allowDividendCalculationForInactiveClients** | **boolean** |  | [optional] [default to undefined]
**applicationDate** | **string** |  | [optional] [default to undefined]
**chargeOptions** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;ShareAccountChargeData&gt;**](ShareAccountChargeData.md) |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**clientSavingsAccounts** | [**Array&lt;SavingsAccountData&gt;**](SavingsAccountData.md) |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**currentMarketPrice** | **number** |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**defaultShares** | **number** |  | [optional] [default to undefined]
**dividends** | [**Array&lt;ShareAccountDividendData&gt;**](ShareAccountDividendData.md) |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**lockPeriodTypeEnum** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**lockinPeriod** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequency** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyType** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**minimumActivePeriod** | **number** |  | [optional] [default to undefined]
**minimumActivePeriodFrequencyType** | **number** |  | [optional] [default to undefined]
**minimumActivePeriodFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**minimumActivePeriodTypeEnum** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**productName** | **string** |  | [optional] [default to undefined]
**productOptions** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**purchasedShares** | [**Array&lt;ShareAccountTransactionData&gt;**](ShareAccountTransactionData.md) |  | [optional] [default to undefined]
**requestedShares** | **number** |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**savingsAccountId** | **number** |  | [optional] [default to undefined]
**savingsAccountNumber** | **string** |  | [optional] [default to undefined]
**status** | [**ShareAccountStatusEnumData**](ShareAccountStatusEnumData.md) |  | [optional] [default to undefined]
**submittedDate** | **string** |  | [optional] [default to undefined]
**summary** | [**ShareAccountSummaryData**](ShareAccountSummaryData.md) |  | [optional] [default to undefined]
**timeline** | [**ShareAccountApplicationTimelineData**](ShareAccountApplicationTimelineData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ShareAccountData } from 'fineract-typescript-client';

const instance: ShareAccountData = {
    accountNo,
    allowDividendCalculationForInactiveClients,
    applicationDate,
    chargeOptions,
    charges,
    clientId,
    clientName,
    clientSavingsAccounts,
    currency,
    currentMarketPrice,
    dateFormat,
    defaultShares,
    dividends,
    externalId,
    id,
    locale,
    lockPeriodTypeEnum,
    lockinPeriod,
    lockinPeriodFrequency,
    lockinPeriodFrequencyType,
    lockinPeriodFrequencyTypeOptions,
    minimumActivePeriod,
    minimumActivePeriodFrequencyType,
    minimumActivePeriodFrequencyTypeOptions,
    minimumActivePeriodTypeEnum,
    productId,
    productName,
    productOptions,
    purchasedShares,
    requestedShares,
    rowIndex,
    savingsAccountId,
    savingsAccountNumber,
    status,
    submittedDate,
    summary,
    timeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
