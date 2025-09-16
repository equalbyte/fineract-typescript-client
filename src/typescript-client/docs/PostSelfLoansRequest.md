# PostSelfLoansRequest

PostSelfLoansRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amortizationType** | **number** |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**datatables** | [**Set&lt;PostSelfLoansDatatables&gt;**](PostSelfLoansDatatables.md) |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**disbursementData** | [**Set&lt;PostSelfLoansDisbursementData&gt;**](PostSelfLoansDisbursementData.md) |  | [optional] [default to undefined]
**expectedDisbursementDate** | **string** |  | [optional] [default to undefined]
**fixedEmiAmount** | **number** |  | [optional] [default to undefined]
**interestCalculationPeriodType** | **number** |  | [optional] [default to undefined]
**interestRatePerPeriod** | **number** |  | [optional] [default to undefined]
**interestType** | **number** |  | [optional] [default to undefined]
**linkAccountId** | **number** |  | [optional] [default to undefined]
**loanTermFrequency** | **number** |  | [optional] [default to undefined]
**loanTermFrequencyType** | **number** |  | [optional] [default to undefined]
**loanType** | **string** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**maxOutstandingLoanBalance** | **number** |  | [optional] [default to undefined]
**numberOfRepayments** | **number** |  | [optional] [default to undefined]
**principal** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**repaymentEvery** | **number** |  | [optional] [default to undefined]
**repaymentFrequencyType** | **number** |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**transactionProcessingStrategyCode** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PostSelfLoansRequest } from 'fineract-typescript-client';

const instance: PostSelfLoansRequest = {
    amortizationType,
    clientId,
    datatables,
    dateFormat,
    disbursementData,
    expectedDisbursementDate,
    fixedEmiAmount,
    interestCalculationPeriodType,
    interestRatePerPeriod,
    interestType,
    linkAccountId,
    loanTermFrequency,
    loanTermFrequencyType,
    loanType,
    locale,
    maxOutstandingLoanBalance,
    numberOfRepayments,
    principal,
    productId,
    repaymentEvery,
    repaymentFrequencyType,
    submittedOnDate,
    transactionProcessingStrategyCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
