# FormDataBodyPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** |  | [optional] [default to undefined]
**contentDisposition** | [**ContentDisposition**](ContentDisposition.md) |  | [optional] [default to undefined]
**entity** | **object** |  | [optional] [default to undefined]
**fileName** | **string** |  | [optional] [default to undefined]
**formDataContentDisposition** | [**FormDataContentDisposition**](FormDataContentDisposition.md) |  | [optional] [default to undefined]
**headers** | [**BodyPartHeaders**](BodyPartHeaders.md) |  | [optional] [default to undefined]
**mediaType** | [**MediaType**](MediaType.md) |  | [optional] [default to undefined]
**messageBodyWorkers** | **object** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**parameterizedHeaders** | [**BodyPartParameterizedHeaders**](BodyPartParameterizedHeaders.md) |  | [optional] [default to undefined]
**parent** | [**MultiPart**](MultiPart.md) |  | [optional] [default to undefined]
**providers** | **object** |  | [optional] [default to undefined]
**simple** | **boolean** |  | [optional] [default to undefined]
**value** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { FormDataBodyPart } from 'fineract-typescript-client';

const instance: FormDataBodyPart = {
    content,
    contentDisposition,
    entity,
    fileName,
    formDataContentDisposition,
    headers,
    mediaType,
    messageBodyWorkers,
    name,
    parameterizedHeaders,
    parent,
    providers,
    simple,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
