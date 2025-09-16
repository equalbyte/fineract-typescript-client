# Client


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** |  | [optional] [default to undefined]
**activatedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**activationDate** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**clientClassification** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**clientType** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**closed** | **boolean** |  | [optional] [default to undefined]
**closedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**closureDate** | **string** |  | [optional] [default to undefined]
**closureReason** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**createdBy** | **number** |  | [default to undefined]
**createdDate** | **string** |  | [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**emailAddress** | **string** |  | [optional] [default to undefined]
**externalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**firstname** | **string** |  | [optional] [default to undefined]
**fullname** | **string** |  | [optional] [default to undefined]
**gender** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**groups** | [**Set&lt;Group&gt;**](Group.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**identifiers** | [**Set&lt;ClientIdentifier&gt;**](ClientIdentifier.md) |  | [optional] [default to undefined]
**image** | [**Image**](Image.md) |  | [optional] [default to undefined]
**lastModifiedBy** | **number** |  | [default to undefined]
**lastModifiedDate** | **string** |  | [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**legalForm** | **number** |  | [optional] [default to undefined]
**middlename** | **string** |  | [optional] [default to undefined]
**mobileNo** | **string** |  | [optional] [default to undefined]
**_new** | **boolean** |  | [optional] [default to undefined]
**notActive** | **boolean** |  | [optional] [default to undefined]
**notPending** | **boolean** |  | [optional] [default to undefined]
**notStaff** | **boolean** |  | [optional] [default to undefined]
**office** | [**Office**](Office.md) |  | [optional] [default to undefined]
**officeJoiningDate** | **string** |  | [optional] [default to undefined]
**pending** | **boolean** |  | [optional] [default to undefined]
**proposedTransferDate** | **string** |  | [optional] [default to undefined]
**reactivateDate** | **string** |  | [optional] [default to undefined]
**reactivatedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**rejected** | **boolean** |  | [optional] [default to undefined]
**rejectedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**rejectedDate** | **string** |  | [optional] [default to undefined]
**rejectionDate** | **string** |  | [optional] [default to undefined]
**rejectionReason** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**reopenedBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]
**reopenedDate** | **string** |  | [optional] [default to undefined]
**savingsAccountId** | **number** |  | [optional] [default to undefined]
**savingsProductId** | **number** |  | [optional] [default to undefined]
**staff** | [**Staff**](Staff.md) |  | [optional] [default to undefined]
**status** | **number** |  | [optional] [default to undefined]
**subStatus** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transferInProgress** | **boolean** |  | [optional] [default to undefined]
**transferInProgressOrOnHold** | **boolean** |  | [optional] [default to undefined]
**transferOnHold** | **boolean** |  | [optional] [default to undefined]
**transferToOffice** | [**Office**](Office.md) |  | [optional] [default to undefined]
**withdrawalDate** | **string** |  | [optional] [default to undefined]
**withdrawalReason** | [**CodeValue**](CodeValue.md) |  | [optional] [default to undefined]
**withdrawn** | **boolean** |  | [optional] [default to undefined]
**withdrawnBy** | [**AppUser**](AppUser.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Client } from 'fineract-typescript-client';

const instance: Client = {
    accountNumber,
    activatedBy,
    activationDate,
    active,
    clientClassification,
    clientType,
    closed,
    closedBy,
    closureDate,
    closureReason,
    createdBy,
    createdDate,
    dateOfBirth,
    displayName,
    emailAddress,
    externalId,
    firstname,
    fullname,
    gender,
    groups,
    id,
    identifiers,
    image,
    lastModifiedBy,
    lastModifiedDate,
    lastname,
    legalForm,
    middlename,
    mobileNo,
    _new,
    notActive,
    notPending,
    notStaff,
    office,
    officeJoiningDate,
    pending,
    proposedTransferDate,
    reactivateDate,
    reactivatedBy,
    rejected,
    rejectedBy,
    rejectedDate,
    rejectionDate,
    rejectionReason,
    reopenedBy,
    reopenedDate,
    savingsAccountId,
    savingsProductId,
    staff,
    status,
    subStatus,
    submittedOnDate,
    transferInProgress,
    transferInProgressOrOnHold,
    transferOnHold,
    transferToOffice,
    withdrawalDate,
    withdrawalReason,
    withdrawn,
    withdrawnBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
