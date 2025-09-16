# GetJobsResponse

GetJobsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to undefined]
**cronExpression** | **string** |  | [optional] [default to undefined]
**currentlyRunning** | **boolean** |  | [optional] [default to undefined]
**displayName** | **string** |  | [optional] [default to undefined]
**initializingError** | **string** |  | [optional] [default to undefined]
**jobId** | **number** |  | [optional] [default to undefined]
**lastRunHistory** | [**JobDetailHistoryData**](JobDetailHistoryData.md) |  | [optional] [default to undefined]
**nextRunTime** | **string** |  | [optional] [default to undefined]
**shortName** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetJobsResponse } from 'fineract-typescript-client';

const instance: GetJobsResponse = {
    active,
    cronExpression,
    currentlyRunning,
    displayName,
    initializingError,
    jobId,
    lastRunHistory,
    nextRunTime,
    shortName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
