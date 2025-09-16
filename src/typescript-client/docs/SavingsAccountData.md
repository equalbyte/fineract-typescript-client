# SavingsAccountData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNo** | **string** |  | [optional] [default to undefined]
**accrualBasedAccountingEnabledOnSavingsProduct** | **boolean** |  | [optional] [default to undefined]
**activatedOnDate** | **string** |  | [optional] [default to undefined]
**activationLocalDate** | **string** |  | [optional] [default to undefined]
**allowOverdraft** | **boolean** |  | [optional] [default to undefined]
**annualFee** | [**SavingsAccountChargeData**](SavingsAccountChargeData.md) |  | [optional] [default to undefined]
**cashBasedAccountingEnabledOnSavingsProduct** | **boolean** |  | [optional] [default to undefined]
**chargeOptions** | [**Array&lt;ChargeData&gt;**](ChargeData.md) |  | [optional] [default to undefined]
**charges** | [**Array&lt;SavingsAccountChargeData&gt;**](SavingsAccountChargeData.md) |  | [optional] [default to undefined]
**clientData** | [**ClientData**](ClientData.md) |  | [optional] [default to undefined]
**clientId** | **number** |  | [optional] [default to undefined]
**clientName** | **string** |  | [optional] [default to undefined]
**currency** | [**CurrencyData**](CurrencyData.md) |  | [optional] [default to undefined]
**datatables** | [**Array&lt;DatatableData&gt;**](DatatableData.md) |  | [optional] [default to undefined]
**dateFormat** | **string** |  | [optional] [default to undefined]
**daysToDormancy** | **number** |  | [optional] [default to undefined]
**daysToEscheat** | **number** |  | [optional] [default to undefined]
**daysToInactive** | **number** |  | [optional] [default to undefined]
**depositType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**depositTypeId** | **number** |  | [optional] [default to undefined]
**enforceMinRequiredBalance** | **boolean** |  | [optional] [default to undefined]
**existingReversedTransactionIds** | **Set&lt;number&gt;** |  | [optional] [default to undefined]
**existingTransactionIds** | **Set&lt;number&gt;** |  | [optional] [default to undefined]
**externalId** | **string** |  | [optional] [default to undefined]
**fieldOfficerId** | **number** |  | [optional] [default to undefined]
**fieldOfficerName** | **string** |  | [optional] [default to undefined]
**fieldOfficerOptions** | [**Array&lt;StaffData&gt;**](StaffData.md) |  | [optional] [default to undefined]
**glAccountIdForInterestOnSavings** | **number** |  | [optional] [default to undefined]
**glAccountIdForInterestPayable** | **number** |  | [optional] [default to undefined]
**glAccountIdForInterestReceivable** | **number** |  | [optional] [default to undefined]
**glAccountIdForOverdraftPorfolio** | **number** |  | [optional] [default to undefined]
**glAccountIdForSavingsControl** | **number** |  | [optional] [default to undefined]
**groupGeneralData** | [**GroupGeneralData**](GroupGeneralData.md) |  | [optional] [default to undefined]
**groupId** | **number** |  | [optional] [default to undefined]
**groupName** | **string** |  | [optional] [default to undefined]
**id** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCalculationDaysInYearTypeId** | **number** |  | [optional] [default to undefined]
**interestCalculationDaysInYearTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCalculationType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCalculationTypeId** | **number** |  | [optional] [default to undefined]
**interestCalculationTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestCompoundingPeriodTypeId** | **number** |  | [optional] [default to undefined]
**interestCompoundingPeriodTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestPosting** | **number** |  | [optional] [default to undefined]
**interestPostingPeriodType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**interestPostingPeriodTypeId** | **number** |  | [optional] [default to undefined]
**interestPostingPeriodTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**isDormancyTrackingActive** | **boolean** |  | [optional] [default to undefined]
**lastActiveTransactionDate** | **string** |  | [optional] [default to undefined]
**lastSavingsAccountTransaction** | [**SavingsAccountTransactionData**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**lienAllowed** | **boolean** |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**lockedInUntilDate** | **string** |  | [optional] [default to undefined]
**lockinPeriodFrequency** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyType** | [**EnumOptionData**](EnumOptionData.md) |  | [optional] [default to undefined]
**lockinPeriodFrequencyTypeId** | **number** |  | [optional] [default to undefined]
**lockinPeriodFrequencyTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]
**maxAllowedLienLimit** | **number** |  | [optional] [default to undefined]
**minBalanceForInterestCalculation** | **number** |  | [optional] [default to undefined]
**minOverdraftForInterestCalculation** | **number** |  | [optional] [default to undefined]
**minRequiredBalance** | **number** |  | [optional] [default to undefined]
**minRequiredOpeningBalance** | **number** |  | [optional] [default to undefined]
**newSavingsAccountTransactionData** | [**Array&lt;SavingsAccountTransactionData&gt;**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**nominalAnnualInterestRate** | **number** |  | [optional] [default to undefined]
**nominalAnnualInterestRateOverdraft** | **number** |  | [optional] [default to undefined]
**officeId** | **number** |  | [optional] [default to undefined]
**onHoldFunds** | **number** |  | [optional] [default to undefined]
**overdraftLimit** | **number** |  | [optional] [default to undefined]
**overdraftPosting** | **number** |  | [optional] [default to undefined]
**productId** | **number** |  | [optional] [default to undefined]
**productOptions** | [**Array&lt;SavingsProductData&gt;**](SavingsProductData.md) |  | [optional] [default to undefined]
**reasonForBlock** | **string** |  | [optional] [default to undefined]
**rowIndex** | **number** |  | [optional] [default to undefined]
**savingsAccountSummaryData** | [**SavingsAccountSummaryData**](SavingsAccountSummaryData.md) |  | [optional] [default to undefined]
**savingsAccountTransactionData** | [**Array&lt;SavingsAccountTransactionData&gt;**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**savingsAccountTransactionSummaryWrapper** | **object** |  | [optional] [default to undefined]
**savingsAccountTransactionsWithPivotConfig** | [**Array&lt;SavingsAccountTransactionData&gt;**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**savingsAmountOnHold** | **number** |  | [optional] [default to undefined]
**savingsHelper** | **object** |  | [optional] [default to undefined]
**savingsProduct** | [**SavingsProductData**](SavingsProductData.md) |  | [optional] [default to undefined]
**savingsProductData** | [**SavingsProductData**](SavingsProductData.md) |  | [optional] [default to undefined]
**savingsProductId** | **number** |  | [optional] [default to undefined]
**savingsProductName** | **string** |  | [optional] [default to undefined]
**startInterestCalculationDate** | **string** |  | [optional] [default to undefined]
**status** | [**SavingsAccountStatusEnumData**](SavingsAccountStatusEnumData.md) |  | [optional] [default to undefined]
**subStatus** | [**SavingsAccountSubStatusEnumData**](SavingsAccountSubStatusEnumData.md) |  | [optional] [default to undefined]
**submittedOnDate** | **string** |  | [optional] [default to undefined]
**summary** | [**SavingsAccountSummaryData**](SavingsAccountSummaryData.md) |  | [optional] [default to undefined]
**taxGroup** | [**TaxGroupData**](TaxGroupData.md) |  | [optional] [default to undefined]
**timeline** | [**SavingsAccountApplicationTimelineData**](SavingsAccountApplicationTimelineData.md) |  | [optional] [default to undefined]
**transactions** | [**Array&lt;SavingsAccountTransactionData&gt;**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**updatedTransactions** | [**Array&lt;SavingsAccountTransactionData&gt;**](SavingsAccountTransactionData.md) |  | [optional] [default to undefined]
**withHoldTax** | **boolean** |  | [optional] [default to undefined]
**withdrawalFee** | [**SavingsAccountChargeData**](SavingsAccountChargeData.md) |  | [optional] [default to undefined]
**withdrawalFeeForTransfers** | **boolean** |  | [optional] [default to undefined]
**withdrawalFeeTypeOptions** | [**Array&lt;EnumOptionData&gt;**](EnumOptionData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SavingsAccountData } from 'fineract-typescript-client';

const instance: SavingsAccountData = {
    accountNo,
    accrualBasedAccountingEnabledOnSavingsProduct,
    activatedOnDate,
    activationLocalDate,
    allowOverdraft,
    annualFee,
    cashBasedAccountingEnabledOnSavingsProduct,
    chargeOptions,
    charges,
    clientData,
    clientId,
    clientName,
    currency,
    datatables,
    dateFormat,
    daysToDormancy,
    daysToEscheat,
    daysToInactive,
    depositType,
    depositTypeId,
    enforceMinRequiredBalance,
    existingReversedTransactionIds,
    existingTransactionIds,
    externalId,
    fieldOfficerId,
    fieldOfficerName,
    fieldOfficerOptions,
    glAccountIdForInterestOnSavings,
    glAccountIdForInterestPayable,
    glAccountIdForInterestReceivable,
    glAccountIdForOverdraftPorfolio,
    glAccountIdForSavingsControl,
    groupGeneralData,
    groupId,
    groupName,
    id,
    interestCalculationDaysInYearType,
    interestCalculationDaysInYearTypeId,
    interestCalculationDaysInYearTypeOptions,
    interestCalculationType,
    interestCalculationTypeId,
    interestCalculationTypeOptions,
    interestCompoundingPeriodType,
    interestCompoundingPeriodTypeId,
    interestCompoundingPeriodTypeOptions,
    interestPosting,
    interestPostingPeriodType,
    interestPostingPeriodTypeId,
    interestPostingPeriodTypeOptions,
    isDormancyTrackingActive,
    lastActiveTransactionDate,
    lastSavingsAccountTransaction,
    lienAllowed,
    locale,
    lockedInUntilDate,
    lockinPeriodFrequency,
    lockinPeriodFrequencyType,
    lockinPeriodFrequencyTypeId,
    lockinPeriodFrequencyTypeOptions,
    maxAllowedLienLimit,
    minBalanceForInterestCalculation,
    minOverdraftForInterestCalculation,
    minRequiredBalance,
    minRequiredOpeningBalance,
    newSavingsAccountTransactionData,
    nominalAnnualInterestRate,
    nominalAnnualInterestRateOverdraft,
    officeId,
    onHoldFunds,
    overdraftLimit,
    overdraftPosting,
    productId,
    productOptions,
    reasonForBlock,
    rowIndex,
    savingsAccountSummaryData,
    savingsAccountTransactionData,
    savingsAccountTransactionSummaryWrapper,
    savingsAccountTransactionsWithPivotConfig,
    savingsAmountOnHold,
    savingsHelper,
    savingsProduct,
    savingsProductData,
    savingsProductId,
    savingsProductName,
    startInterestCalculationDate,
    status,
    subStatus,
    submittedOnDate,
    summary,
    taxGroup,
    timeline,
    transactions,
    updatedTransactions,
    withHoldTax,
    withdrawalFee,
    withdrawalFeeForTransfers,
    withdrawalFeeTypeOptions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
