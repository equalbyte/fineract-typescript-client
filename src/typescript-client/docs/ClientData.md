# ClientData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNo** | **string** |  | [optional] [default to undefined]
**activationDate** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**address** | [**Array&lt;AddressData&gt;**](AddressData.md) |  | [optional] [default to undefined]
**clientClassification** | [**CodeValueData**](CodeValueData.md) |  | [optional] [default to undefined]
**clientClassificationId** | **number** |  | [optional] [default to undefined]
**clientClassificationOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**clientCollateralManagements** | [**Set&lt;ClientCollateralManagementData&gt;**](ClientCollateralManagementData.md) |  | [optional] [default to undefined]
**clientLegalFormOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**clientNonPersonConstitutionOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**clientNonPersonDetails** | **object** |  | [optional] [default to undefined]
**clientNonPersonMainBusinessLineOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**clientType** | [**CodeValueData**](CodeValueData.md) |  | [optional] [default to undefined]
**clientTypeId** | **number** |  | [optional] [default to undefined]
**clientTypeOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**datatables** | [**Array&lt;DatatableData&gt;**](DatatableData.md) |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**dateOfBirth** | **string** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**emailAddress** | **string** |  | [optional] [default to undefined]
**externalId** | [**ExternalId**](ExternalId.md) |  | [optional] [default to undefined]
**familyMemberOptions** | [**ClientFamilyMembersData**](ClientFamilyMembersData.md) |  | [optional] [default to undefined]
**firstname** | **string** |  | [optional] [default to undefined]
**fullname** | **string** |  | [optional] [default to undefined]
**gender** | [**CodeValueData**](CodeValueData.md) |  | [optional] [default to undefined]
**genderId** | **number** |  | [optional] [default to undefined]
**genderOptions** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**groups** | [**Array&lt;GroupGeneralData&gt;**](GroupGeneralData.md) |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**imageId** | **number** |  | [optional] [default to undefined]
**imagePresent** | **boolean** |  | [optional] [default to undefined]
**isAddressEnabled** | **boolean** |  | [optional] [default to undefined]
**isStaff** | **boolean** |  | [optional] [default to undefined]
**lastname** | **string** |  | [optional] [default to undefined]
**legalForm** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**legalFormId** | **number** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**middlename** | **string** |  | [optional] [default to undefined]
**mobileNo** | **string** |  | [optional] [default to undefined]
**narrations** | [**Array&lt;CodeValueData&gt;**](CodeValueData.md) |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**officeName** | **string** |  | [optional] [default to undefined]
**officeOptions** | [**Array&lt;OfficeData&gt;**](OfficeData.md) |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**savingAccountOptions** | [**Array&lt;SavingsAccountData&gt;**](SavingsAccountData.md) |  | [optional] [default to undefined]
**savingProductOptions** | [**Array&lt;SavingsProductData&gt;**](SavingsProductData.md) |  | [optional] [default to undefined]
**savingsAccountId** | **number** |  | [optional] [default to undefined]
**savingsProductId** | **number** |  | [optional] [default to undefined]
**savingsProductName** | **string** |  | [optional] [default to undefined]
**staffId** | **number** |  | [optional] [default to undefined]
**staffName** | **string** |  | [optional] [default to undefined]
**staffOptions** | [**Array&lt;StaffData&gt;**](StaffData.md) |  | [optional] [default to undefined]
**status** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**subStatus** | [**CodeValueData**](CodeValueData.md) |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**timeline** | [**ClientTimelineData**](ClientTimelineData.md) |  | [optional] [default to undefined]
**transferToOfficeId** | **number** |  | [optional] [default to undefined]
**transferToOfficeName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ClientData } from 'fineract-typescript-client';

const instance: ClientData = {
    accountNo,
    activationDate,
    active,
    address,
    clientClassification,
    clientClassificationId,
    clientClassificationOptions,
    clientCollateralManagements,
    clientLegalFormOptions,
    clientNonPersonConstitutionOptions,
    clientNonPersonDetails,
    clientNonPersonMainBusinessLineOptions,
    clientType,
    clientTypeId,
    clientTypeOptions,
    datatables,
    dateFormat,
    dateOfBirth,
    displayName,
    emailAddress,
    externalId,
    familyMemberOptions,
    firstname,
    fullname,
    gender,
    genderId,
    genderOptions,
    groups,
    id,
    imageId,
    imagePresent,
    isAddressEnabled,
    isStaff,
    lastname,
    legalForm,
    legalFormId,
    locale,
    middlename,
    mobileNo,
    narrations,
    officeId,
    officeName,
    officeOptions,
    rowIndex,
    savingAccountOptions,
    savingProductOptions,
    savingsAccountId,
    savingsProductId,
    savingsProductName,
    staffId,
    staffName,
    staffOptions,
    status,
    subStatus,
    submittedOnDate,
    timeline,
    transferToOfficeId,
    transferToOfficeName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
