# GetLoansLoanIdTransactionsTemplateResponse

GetLoansLoanIdTransactionsTemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**chargeOffReasonOptions** | [**Array&lt;GetLoanProductsChargeOffReasonOptions&gt;**](GetLoanProductsChargeOffReasonOptions.md) |  | [optional] [default to undefined]
**classificationOptions** | [**Array&lt;GetCodeValuesDataResponse&gt;**](GetCodeValuesDataResponse.md) |  | [optional] [default to undefined]
**currency** | [**GetLoanCurrency**](GetLoanCurrency.md) |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**feeChargesPortion** | **number** |  | [optional] [default to undefined]
**interestPortion** | **number** |  | [optional] [default to undefined]
**netDisbursalAmount** | **number** |  | [optional] [default to undefined]
**paymentTypeOptions** | [**Array&lt;GetPaymentTypeOptions&gt;**](GetPaymentTypeOptions.md) |  | [optional] [default to undefined]
**penaltyChargesPortion** | **number** |  | [optional] [default to undefined]
**principalPortion** | **number** |  | [optional] [default to undefined]
**total** | [**GetLoansTotal**](GetLoansTotal.md) |  | [optional] [default to undefined]
**type** | [**GetLoansTransactionType**](GetLoansTransactionType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetLoansLoanIdTransactionsTemplateResponse } from 'fineract-typescript-client';

const instance: GetLoansLoanIdTransactionsTemplateResponse = {
    amount,
    chargeOffReasonOptions,
    classificationOptions,
    currency,
    date,
    feeChargesPortion,
    interestPortion,
    netDisbursalAmount,
    paymentTypeOptions,
    penaltyChargesPortion,
    principalPortion,
    total,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
