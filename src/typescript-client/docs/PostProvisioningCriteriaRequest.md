# PostProvisioningCriteriaRequest

PostProvisioningCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteriaName** | **string** |  | [optional] [default to undefined]
**loanProducts** | [**Array&lt;LoanProductData&gt;**](LoanProductData.md) |  | [optional] [default to undefined]
**provisioningcriteria** | [**Array&lt;ProvisioningCriteriaDefinitionData&gt;**](ProvisioningCriteriaDefinitionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostProvisioningCriteriaRequest } from 'fineract-typescript-client';

const instance: PostProvisioningCriteriaRequest = {
    criteriaName,
    loanProducts,
    provisioningcriteria,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
