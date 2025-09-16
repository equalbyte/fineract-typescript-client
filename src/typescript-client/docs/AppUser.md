# AppUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNonExpired** | **boolean** |  | [optional] [default to undefined]
**accountNonLocked** | **boolean** |  | [optional] [default to undefined]
**appUserClientMappings** | [**Set&lt;AppUserClientMapping&gt;**](AppUserClientMapping.md) |  | [optional] [default to undefined]
**authorities** | [**Array&lt;GrantedAuthority&gt;**](GrantedAuthority.md) |  | [optional] [default to undefined]
**bypassUser** | **boolean** |  | [optional] [default to undefined]
**checkerSuperUser** | **boolean** |  | [optional] [default to undefined]
**credentialsNonExpired** | **boolean** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**firstname** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**lastTimePasswordUpdated** | **string** |  | [optional] [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**_new** | **boolean** |  | [optional] [default to undefined]
**notEnabled** | **boolean** |  | [optional] [default to undefined]
**office** | [**Office**](Office.md) |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**passwordNeverExpires** | **boolean** |  | [optional] [default to undefined]
**roles** | [**Set&lt;Role&gt;**](Role.md) |  | [optional] [default to undefined]
**selfServiceUser** | **boolean** |  | [optional] [default to undefined]
**staff** | [**Staff**](Staff.md) |  | [optional] [default to undefined]
**staffDisplayName** | **string** |  | [optional] [default to undefined]
**staffId** | **number** |  | [optional] [default to undefined]
**systemUser** | **boolean** |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { AppUser } from 'fineract-typescript-client';

const instance: AppUser = {
    accountNonExpired,
    accountNonLocked,
    appUserClientMappings,
    authorities,
    bypassUser,
    checkerSuperUser,
    credentialsNonExpired,
    deleted,
    displayName,
    email,
    enabled,
    firstname,
    id,
    lastTimePasswordUpdated,
    lastname,
    _new,
    notEnabled,
    office,
    password,
    passwordNeverExpires,
    roles,
    selfServiceUser,
    staff,
    staffDisplayName,
    staffId,
    systemUser,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
