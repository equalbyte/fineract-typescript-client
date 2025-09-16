# InterestPauseRequestDto

Request DTO for creating an interest pause

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateFormat** | **string** | Format of the dates provided | [optional] [default to undefined]
**endDate** | **string** | End date of the interest pause period | [optional] [default to undefined]
**locale** | **string** | Locale to interpret the date format | [optional] [default to undefined]
**startDate** | **string** | Start date of the interest pause period | [optional] [default to undefined]

## Example

```typescript
import { InterestPauseRequestDto } from 'fineract-typescript-client';

const instance: InterestPauseRequestDto = {
    dateFormat,
    endDate,
    locale,
    startDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
