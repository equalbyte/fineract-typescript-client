# GuarantorFundingData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**amountReleased** | **number** |  | [optional] [default to undefined]
**amountRemaining** | **number** |  | [optional] [default to undefined]
**amountTransfered** | **number** |  | [optional] [default to undefined]
**guarantorTransactions** | [**Array&lt;GuarantorTransactionData&gt;**](GuarantorTransactionData.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**savingsAccount** | [**PortfolioAccountData**](PortfolioAccountData.md) |  | [optional] [default to undefined]
**status** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GuarantorFundingData } from 'fineract-typescript-client';

const instance: GuarantorFundingData = {
    amount,
    amountReleased,
    amountRemaining,
    amountTransfered,
    guarantorTransactions,
    id,
    savingsAccount,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
