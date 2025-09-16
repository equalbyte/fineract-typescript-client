# Group


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**activatedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**activationDate** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**activeClientMembers** | [**Set&lt;Client&gt;**](Client.md) |  | [optional] [default to undefined]
**center** | **boolean** |  | [optional] [default to undefined]
**childGroup** | **boolean** |  | [optional] [default to undefined]
**clientMembers** | [**Set&lt;Client&gt;**](Client.md) |  | [optional] [default to undefined]
**closed** | **boolean** |  | [optional] [default to undefined]
**closedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**closureDate** | **string** |  | [optional] [default to undefined]
**closureReason** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**group** | **boolean** |  | [optional] [default to undefined]
**groupLevel** | [**GroupLevel**](GroupLevel.md) |  | [optional] [default to undefined]
**groupMembers** | [**Array&lt;Group&gt;**](Group.md) |  | [optional] [default to undefined]
**groupRole** | [**Set&lt;GroupRole&gt;**](GroupRole.md) |  | [optional] [default to undefined]
**hierarchy** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**_new** | **boolean** |  | [optional] [default to undefined]
**notActive** | **boolean** |  | [optional] [default to undefined]
**notPending** | **boolean** |  | [optional] [default to undefined]
**office** | [**Office**](Office.md) |  | [optional] [default to undefined]
**parent** | [**Group**](Group.md) |  | [optional] [default to undefined]
**pending** | **boolean** |  | [optional] [default to undefined]
**staff** | [**Staff**](Staff.md) |  | [optional] [default to undefined]
**staffHistory** | [**Set&lt;StaffAssignmentHistory&gt;**](StaffAssignmentHistory.md) |  | [optional] [default to undefined]
**status** | **number** |  | [optional] [default to undefined]
**submittedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transferInProgress** | **boolean** |  | [optional] [default to undefined]
**transferInProgressOrOnHold** | **boolean** |  | [optional] [default to undefined]
**transferOnHold** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Group } from 'fineract-typescript-client';

const instance: Group = {
    accountNumber,
    activatedBy,
    activationDate,
    active,
    activeClientMembers,
    center,
    childGroup,
    clientMembers,
    closed,
    closedBy,
    closureDate,
    closureReason,
    externalId,
    group,
    groupLevel,
    groupMembers,
    groupRole,
    hierarchy,
    id,
    name,
    _new,
    notActive,
    notPending,
    office,
    parent,
    pending,
    staff,
    staffHistory,
    status,
    submittedBy,
    submittedOnDate,
    transferInProgress,
    transferInProgressOrOnHold,
    transferOnHold,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
