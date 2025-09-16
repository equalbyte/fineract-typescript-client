# BodyPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentDisposition** | [**ContentDisposition**](ContentDisposition.md) |  | [optional] [default to undefined]
**entity** | **object** |  | [optional] [default to undefined]
**headers** | [**BodyPartHeaders**](BodyPartHeaders.md) |  | [optional] [default to undefined]
**mediaType** | [**MediaType**](MediaType.md) |  | [optional] [default to undefined]
**messageBodyWorkers** | **object** |  | [optional] [default to undefined]
**parameterizedHeaders** | [**BodyPartParameterizedHeaders**](BodyPartParameterizedHeaders.md) |  | [optional] [default to undefined]
**parent** | [**MultiPart**](MultiPart.md) |  | [optional] [default to undefined]
**providers** | **object** |  | [optional] [default to undefined]

## Example

```typescript
import { BodyPart } from 'fineract-typescript-client';

const instance: BodyPart = {
    contentDisposition,
    entity,
    headers,
    mediaType,
    messageBodyWorkers,
    parameterizedHeaders,
    parent,
    providers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
