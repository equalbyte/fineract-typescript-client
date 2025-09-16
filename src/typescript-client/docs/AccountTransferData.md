# AccountTransferData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**fromAccount** | [**PortfolioAccountData**](PortfolioAccountData.md) |  | [optional] [default to undefined]
**fromAccountOptions** | [**Array&lt;PortfolioAccountData&gt;**](PortfolioAccountData.md) |  | [optional] [default to undefined]
**fromAccountType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**fromAccountTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**fromClient** | [**ClientData**](ClientData.md) |  | [optional] [default to undefined]
**fromClientOptions** | [**Array&lt;ClientData&gt;**](ClientData.md) |  | [optional] [default to undefined]
**fromOffice** | [**OfficeData**](OfficeData.md) |  | [optional] [default to undefined]
**fromOfficeOptions** | [**Array&lt;OfficeData&gt;**](OfficeData.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**reversed** | **boolean** |  | [optional] [default to undefined]
**toAccount** | [**PortfolioAccountData**](PortfolioAccountData.md) |  | [optional] [default to undefined]
**toAccountOptions** | [**Array&lt;PortfolioAccountData&gt;**](PortfolioAccountData.md) |  | [optional] [default to undefined]
**toAccountType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**toAccountTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**toClient** | [**ClientData**](ClientData.md) |  | [optional] [default to undefined]
**toClientOptions** | [**Array&lt;ClientData&gt;**](ClientData.md) |  | [optional] [default to undefined]
**toOffice** | [**OfficeData**](OfficeData.md) |  | [optional] [default to undefined]
**toOfficeOptions** | [**Array&lt;OfficeData&gt;**](OfficeData.md) |  | [optional] [default to undefined]
**transferAmount** | **number** |  | [optional] [default to undefined]
**transferDate** | **string** |  | [optional] [default to undefined]
**transferDescription** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AccountTransferData } from 'fineract-typescript-client';

const instance: AccountTransferData = {
    currency,
    fromAccount,
    fromAccountOptions,
    fromAccountType,
    fromAccountTypeOptions,
    fromClient,
    fromClientOptions,
    fromOffice,
    fromOfficeOptions,
    id,
    reversed,
    toAccount,
    toAccountOptions,
    toAccountType,
    toAccountTypeOptions,
    toClient,
    toClientOptions,
    toOffice,
    toOfficeOptions,
    transferAmount,
    transferDate,
    transferDescription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
