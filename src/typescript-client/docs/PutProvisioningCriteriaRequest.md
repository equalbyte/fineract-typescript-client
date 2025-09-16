# PutProvisioningCriteriaRequest

PutProvisioningCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteriaName** | **string** |  | [optional] [default to undefined]
**loanProducts** | [**Array&lt;LoanProductData&gt;**](LoanProductData.md) |  | [optional] [default to undefined]
**provisioningcriteria** | [**Array&lt;ProvisioningCriteriaDefinitionData&gt;**](ProvisioningCriteriaDefinitionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PutProvisioningCriteriaRequest } from 'fineract-typescript-client';

const instance: PutProvisioningCriteriaRequest = {
    criteriaName,
    loanProducts,
    provisioningcriteria,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
