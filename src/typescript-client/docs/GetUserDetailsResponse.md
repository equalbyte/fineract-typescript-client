# GetUserDetailsResponse

GetUserDetailsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessToken** | **string** |  | [optional] [default to undefined]
**authenticated** | **boolean** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**organisationalRole** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**roles** | [**Array&lt;RoleData&gt;**](RoleData.md) |  | [optional] [default to undefined]
**staffDisplayName** | **string** |  | [optional] [default to undefined]
**staffId** | **number** |  | [optional] [default to undefined]
**userId** | **number** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetUserDetailsResponse } from 'fineract-typescript-client';

const instance: GetUserDetailsResponse = {
    accessToken,
    authenticated,
    officeId,
    officeName,
    organisationalRole,
    permissions,
    roles,
    staffDisplayName,
    staffId,
    userId,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
