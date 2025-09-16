# InterestPauseResponseDto

Response DTO for Interest Pause periods

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFormat** | **string** | Date format used to interpret start and end dates | [optional] [default to undefined]
**endDate** | **string** | End date of the interest pause period | [optional] [default to undefined]
**id** | **number** | ID of the loan term variation | [optional] [default to undefined]
**locale** | **string** | Locale used for date formatting | [optional] [default to undefined]
**startDate** | **string** | Start date of the interest pause period | [optional] [default to undefined]

## Example

```typescript
import { InterestPauseResponseDto } from 'fineract-typescript-client';

const instance: InterestPauseResponseDto = {
    dateFormat,
    endDate,
    id,
    locale,
    startDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
