# InteropTransferResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**commandId** | **number** |  | [optional] [default to undefined]
**completedTimestamp** | **string** |  | [optional] [default to undefined]
**creditBureauReportData** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**expiration** | **string** |  | [optional] [default to undefined]
**extensionList** | [**Array&lt;ExtensionData&gt;**](ExtensionData.md) |  | [optional] [default to undefined]
**externalIdOrNull** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**glimId** | **number** |  | [optional] [default to undefined]
**groupId** | **number** |  | [optional] [default to undefined]
**gsimId** | **number** |  | [optional] [default to undefined]
**loanExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**resourceExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**resourceId** | **number** |  | [optional] [default to undefined]
**resourceIdentifier** | **string** |  | [optional] [default to undefined]
**rollbackTransaction** | **boolean** |  | [optional] [default to undefined]
**savingsId** | **number** |  | [optional] [default to undefined]
**state** | **string** |  | [default to undefined]
**subResourceExternalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**subResourceId** | **number** |  | [optional] [default to undefined]
**transactionCode** | **string** |  | [default to undefined]
**transactionId** | **string** |  | [optional] [default to undefined]
**transferCode** | **string** |  | [default to undefined]

## Example

```typescript
import { InteropTransferResponseData } from 'fineract-typescript-client';

const instance: InteropTransferResponseData = {
    changes,
    clientId,
    commandId,
    completedTimestamp,
    creditBureauReportData,
    expiration,
    extensionList,
    externalIdOrNull,
    glimId,
    groupId,
    gsimId,
    loanExternalId,
    loanId,
    officeId,
    productId,
    resourceExternalId,
    resourceId,
    resourceIdentifier,
    rollbackTransaction,
    savingsId,
    state,
    subResourceExternalId,
    subResourceId,
    transactionCode,
    transactionId,
    transferCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
