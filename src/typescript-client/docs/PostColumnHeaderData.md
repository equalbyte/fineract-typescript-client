# PostColumnHeaderData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Used in Code Value fields. Column name becomes: code_cd_name. Mandatory if using type Dropdown, otherwise an error is returned. | [optional] [default to undefined]
**indexed** | **boolean** | Defaults to false | [optional] [default to undefined]
**length** | **number** | Length of the text field. Mandatory if type String is used, otherwise an error is returned. | [optional] [default to undefined]
**mandatory** | **boolean** | Defaults to false | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**type** | **string** | Any of them: Boolean | Date | DateTime | Decimal | Dropdown | Number | String | Text | [default to undefined]
**unique** | **boolean** | Defaults to false | [optional] [default to undefined]

## Example

```typescript
import { PostColumnHeaderData } from 'fineract-typescript-client';

const instance: PostColumnHeaderData = {
    code,
    indexed,
    length,
    mandatory,
    name,
    type,
    unique,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
