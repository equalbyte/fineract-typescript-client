# GetLoanRescheduleRequestResponse

GetLoanRescheduleRequestResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **number** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**loanAccountNumber** | **string** |  | [optional] [default to undefined]
**loanId** | **number** |  | [optional] [default to undefined]
**loanTermVariationsData** | [**Set&lt;LoanTermVariationsData&gt;**](LoanTermVariationsData.md) |  | [optional] [default to undefined]
**recalculateInterest** | **boolean** |  | [optional] [default to undefined]
**rescheduleFromDate** | **string** |  | [optional] [default to undefined]
**rescheduleFromInstallment** | **number** |  | [optional] [default to undefined]
**rescheduleReasonCodeValue** | [**RescheduleReasonsCodeValue**](RescheduleReasonsCodeValue.md) |  | [optional] [default to undefined]
**rescheduleReasonComment** | **string** |  | [optional] [default to undefined]
**statusEnum** | [**GetLoanRescheduleRequestStatus**](GetLoanRescheduleRequestStatus.md) |  | [optional] [default to undefined]
**timeline** | [**RescheduleReasonsTimeline**](RescheduleReasonsTimeline.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoanRescheduleRequestResponse } from 'fineract-typescript-client';

const instance: GetLoanRescheduleRequestResponse = {
    clientId,
    clientName,
    id,
    loanAccountNumber,
    loanId,
    loanTermVariationsData,
    recalculateInterest,
    rescheduleFromDate,
    rescheduleFromInstallment,
    rescheduleReasonCodeValue,
    rescheduleReasonComment,
    statusEnum,
    timeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
