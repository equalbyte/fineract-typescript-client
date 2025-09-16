# GetTaxesComponentsResponse

GetTaxesComponentsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditAccount** | [**GetTaxesComponentsCreditAccount**](GetTaxesComponentsCreditAccount.md) |  | [optional] [default to undefined]
**creditAccountType** | [**GetTaxesComponentsCreditAccountType**](GetTaxesComponentsCreditAccountType.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**percentage** | **number** |  | [optional] [default to undefined]
**startDate** | **string** |  | [optional] [default to undefined]
**taxComponentsHistories** | **Set&lt;object&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { GetTaxesComponentsResponse } from 'fineract-typescript-client';

const instance: GetTaxesComponentsResponse = {
    creditAccount,
    creditAccountType,
    id,
    name,
    percentage,
    startDate,
    taxComponentsHistories,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
