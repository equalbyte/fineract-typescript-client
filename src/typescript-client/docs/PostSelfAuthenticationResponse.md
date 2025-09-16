# PostSelfAuthenticationResponse

PostSelfAuthenticationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticated** | **boolean** |  | [optional] [default to undefined]
**base64EncodedAuthenticationKey** | **string** |  | [optional] [default to undefined]
**clients** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**isSelfServiceUser** | **boolean** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**organisationalRole** | [**GetSelfUserDetailsOrganisationalRole**](GetSelfUserDetailsOrganisationalRole.md) |  | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**roles** | [**Set&lt;GetSelfUserDetailsRoles&gt;**](GetSelfUserDetailsRoles.md) |  | [optional] [default to undefined]
**staffDisplayName** | **string** |  | [optional] [default to undefined]
**staffId** | **number** |  | [optional] [default to undefined]
**userId** | **number** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PostSelfAuthenticationResponse } from 'fineract-typescript-client';

const instance: PostSelfAuthenticationResponse = {
    authenticated,
    base64EncodedAuthenticationKey,
    clients,
    isSelfServiceUser,
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
