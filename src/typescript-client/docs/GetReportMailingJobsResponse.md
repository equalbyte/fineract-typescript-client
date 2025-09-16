# GetReportMailingJobsResponse

GetReportMailingJobsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **string** |  | [optional] [default to undefined]
**emailAttachmentFileFormat** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**emailMessage** | **string** |  | [optional] [default to undefined]
**emailRecipients** | **string** |  | [optional] [default to undefined]
**emailSubject** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**isActive** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**nextRunDateTime** | **string** |  | [optional] [default to undefined]
**numberOfRuns** | **number** |  | [optional] [default to undefined]
**recurrence** | **string** |  | [optional] [default to undefined]
**runAsUserId** | **number** |  | [optional] [default to undefined]
**startDateTime** | **string** |  | [optional] [default to undefined]
**stretchyReport** | **object** |  | [optional] [default to undefined]
**stretchyReportParamMap** | **string** |  | [optional] [default to undefined]
**timeline** | [**ReportMailingJobTimelineData**](ReportMailingJobTimelineData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetReportMailingJobsResponse } from 'fineract-typescript-client';

const instance: GetReportMailingJobsResponse = {
    description,
    emailAttachmentFileFormat,
    emailMessage,
    emailRecipients,
    emailSubject,
    id,
    isActive,
    name,
    nextRunDateTime,
    numberOfRuns,
    recurrence,
    runAsUserId,
    startDateTime,
    stretchyReport,
    stretchyReportParamMap,
    timeline,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
