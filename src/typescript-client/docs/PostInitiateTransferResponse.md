# PostInitiateTransferResponse

PostInitiateTransferResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**ExternalAssetOwnerTransferChangesData**](ExternalAssetOwnerTransferChangesData.md) |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**resourceExternalId** | **string** | transfer external ID | [optional] [default to undefined]
**resourceId** | **number** | transfer ID | [optional] [default to undefined]
**subResourceExternalId** | **string** | loan external ID | [optional] [default to undefined]
**subResourceId** | **number** | loan ID | [optional] [default to undefined]

## Example

```typescript
import { PostInitiateTransferResponse } from 'fineract-typescript-client';

const instance: PostInitiateTransferResponse = {
    changes,
    dateFormat,
    locale,
    resourceExternalId,
    resourceId,
    subResourceExternalId,
    subResourceId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
