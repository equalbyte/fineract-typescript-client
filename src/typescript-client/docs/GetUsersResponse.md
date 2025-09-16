# GetUsersResponse

GetUsersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** |  | [optional] [default to undefined]
**firstname** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**passwordNeverExpires** | **boolean** |  | [optional] [default to undefined]
**selectedRoles** | [**Array&lt;RoleData&gt;**](RoleData.md) |  | [optional] [default to undefined]
**staff** | [**StaffData**](StaffData.md) |  | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetUsersResponse } from 'fineract-typescript-client';

const instance: GetUsersResponse = {
    email,
    firstname,
    id,
    lastname,
    officeId,
    officeName,
    passwordNeverExpires,
    selectedRoles,
    staff,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
