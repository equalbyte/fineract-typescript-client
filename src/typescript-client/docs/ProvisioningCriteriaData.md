# ProvisioningCriteriaData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdBy** | **string** |  | [optional] [default to undefined]
**criteriaId** | **number** |  | [optional] [default to undefined]
**criteriaName** | **string** |  | [optional] [default to undefined]
**definitions** | [**Array&lt;ProvisioningCriteriaDefinitionData&gt;**](ProvisioningCriteriaDefinitionData.md) |  | [optional] [default to undefined]
**glAccounts** | [**Array&lt;GLAccountData&gt;**](GLAccountData.md) |  | [optional] [default to undefined]
**loanProducts** | [**Array&lt;LoanProductData&gt;**](LoanProductData.md) |  | [optional] [default to undefined]
**selectedLoanProducts** | [**Array&lt;LoanProductData&gt;**](LoanProductData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ProvisioningCriteriaData } from 'fineract-typescript-client';

const instance: ProvisioningCriteriaData = {
    createdBy,
    criteriaId,
    criteriaName,
    definitions,
    glAccounts,
    loanProducts,
    selectedLoanProducts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
