# PostDataTablesRequest

PostDataTablesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apptableName** | **string** |  | [default to undefined]
**columns** | [**Array&lt;PostColumnHeaderData&gt;**](PostColumnHeaderData.md) |  | [default to undefined]
**datatableName** | **string** |  | [default to undefined]
**entitySubType** | **string** |  | [optional] [default to undefined]
**multiRow** | **boolean** | Allows to create multiple entries in the Data Table. Optional, defaults to false. If this property is not provided Data Table will allow only one entry. | [optional] [default to undefined]

## Example

```typescript
import { PostDataTablesRequest } from 'fineract-typescript-client';

const instance: PostDataTablesRequest = {
    apptableName,
    columns,
    datatableName,
    entitySubType,
    multiRow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
