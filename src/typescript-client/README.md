## fineract-typescript-client@1.13.0-SNAPSHOT

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install fineract-typescript-client@1.13.0-SNAPSHOT --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost/fineract-provider/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountNumberFormatApi* | [**_delete**](docs/AccountNumberFormatApi.md#_delete) | **DELETE** /v1/accountnumberformats/{accountNumberFormatId} | Delete an Account number format
*AccountNumberFormatApi* | [**create**](docs/AccountNumberFormatApi.md#create) | **POST** /v1/accountnumberformats | Create an Account number format
*AccountNumberFormatApi* | [**retrieveAll3**](docs/AccountNumberFormatApi.md#retrieveall3) | **GET** /v1/accountnumberformats | List Account number formats
*AccountNumberFormatApi* | [**retrieveOne**](docs/AccountNumberFormatApi.md#retrieveone) | **GET** /v1/accountnumberformats/{accountNumberFormatId} | Retrieve an Account number format
*AccountNumberFormatApi* | [**retrieveTemplate2**](docs/AccountNumberFormatApi.md#retrievetemplate2) | **GET** /v1/accountnumberformats/template | Retrieve Account number format Template
*AccountNumberFormatApi* | [**update1**](docs/AccountNumberFormatApi.md#update1) | **PUT** /v1/accountnumberformats/{accountNumberFormatId} | Update an Account number format
*AccountTransfersApi* | [**create4**](docs/AccountTransfersApi.md#create4) | **POST** /v1/accounttransfers | Create new Transfer
*AccountTransfersApi* | [**retrieveAll18**](docs/AccountTransfersApi.md#retrieveall18) | **GET** /v1/accounttransfers | List account transfers
*AccountTransfersApi* | [**retrieveOne9**](docs/AccountTransfersApi.md#retrieveone9) | **GET** /v1/accounttransfers/{transferId} | Retrieve account transfer
*AccountTransfersApi* | [**template5**](docs/AccountTransfersApi.md#template5) | **GET** /v1/accounttransfers/template | Retrieve Account Transfer Template
*AccountTransfersApi* | [**templateRefundByTransfer**](docs/AccountTransfersApi.md#templaterefundbytransfer) | **GET** /v1/accounttransfers/templateRefundByTransfer | Retrieve Refund of an Active Loan by Transfer Template
*AccountTransfersApi* | [**templateRefundByTransferPost**](docs/AccountTransfersApi.md#templaterefundbytransferpost) | **POST** /v1/accounttransfers/refundByTransfer | Refund of an Active Loan by Transfer
*AccountingClosureApi* | [**createGLClosure**](docs/AccountingClosureApi.md#createglclosure) | **POST** /v1/glclosures | Create an Accounting Closure
*AccountingClosureApi* | [**deleteGLClosure**](docs/AccountingClosureApi.md#deleteglclosure) | **DELETE** /v1/glclosures/{glClosureId} | Delete an accounting closure
*AccountingClosureApi* | [**retreiveClosure**](docs/AccountingClosureApi.md#retreiveclosure) | **GET** /v1/glclosures/{glClosureId} | Retrieve an Accounting Closure
*AccountingClosureApi* | [**retrieveAllClosures**](docs/AccountingClosureApi.md#retrieveallclosures) | **GET** /v1/glclosures | List Accounting closures
*AccountingClosureApi* | [**updateGLClosure**](docs/AccountingClosureApi.md#updateglclosure) | **PUT** /v1/glclosures/{glClosureId} | Update an Accounting closure
*AccountingRulesApi* | [**createAccountingRule**](docs/AccountingRulesApi.md#createaccountingrule) | **POST** /v1/accountingrules | Create/Define a Accounting rule
*AccountingRulesApi* | [**deleteAccountingRule**](docs/AccountingRulesApi.md#deleteaccountingrule) | **DELETE** /v1/accountingrules/{accountingRuleId} | Delete a Accounting Rule
*AccountingRulesApi* | [**retreiveAccountingRule**](docs/AccountingRulesApi.md#retreiveaccountingrule) | **GET** /v1/accountingrules/{accountingRuleId} | Retrieve a Accounting rule
*AccountingRulesApi* | [**retrieveAllAccountingRules**](docs/AccountingRulesApi.md#retrieveallaccountingrules) | **GET** /v1/accountingrules | Retrieve Accounting Rules
*AccountingRulesApi* | [**retrieveTemplate1**](docs/AccountingRulesApi.md#retrievetemplate1) | **GET** /v1/accountingrules/template | Retrieve Accounting Rule Details Template
*AccountingRulesApi* | [**updateAccountingRule**](docs/AccountingRulesApi.md#updateaccountingrule) | **PUT** /v1/accountingrules/{accountingRuleId} | Update a Accounting Rule
*AdhocQueryApiApi* | [**createAdHocQuery**](docs/AdhocQueryApiApi.md#createadhocquery) | **POST** /v1/adhocquery | 
*AdhocQueryApiApi* | [**deleteAdHocQuery**](docs/AdhocQueryApiApi.md#deleteadhocquery) | **DELETE** /v1/adhocquery/{adHocId} | 
*AdhocQueryApiApi* | [**retrieveAdHocQuery**](docs/AdhocQueryApiApi.md#retrieveadhocquery) | **GET** /v1/adhocquery/{adHocId} | 
*AdhocQueryApiApi* | [**retrieveAll2**](docs/AdhocQueryApiApi.md#retrieveall2) | **GET** /v1/adhocquery | 
*AdhocQueryApiApi* | [**template**](docs/AdhocQueryApiApi.md#template) | **GET** /v1/adhocquery/template | 
*AdhocQueryApiApi* | [**update**](docs/AdhocQueryApiApi.md#update) | **PUT** /v1/adhocquery/{adHocId} | 
*AuditsApi* | [**retrieveAuditEntries**](docs/AuditsApi.md#retrieveauditentries) | **GET** /v1/audits | List Audits
*AuditsApi* | [**retrieveAuditEntry**](docs/AuditsApi.md#retrieveauditentry) | **GET** /v1/audits/{auditId} | Retrieve an Audit Entry
*AuditsApi* | [**retrieveAuditSearchTemplate**](docs/AuditsApi.md#retrieveauditsearchtemplate) | **GET** /v1/audits/searchtemplate | Audit Search Template
*AuthenticationHTTPBasicApi* | [**authenticate**](docs/AuthenticationHTTPBasicApi.md#authenticate) | **POST** /v1/authentication | Verify authentication
*BatchAPIApi* | [**handleBatchRequests**](docs/BatchAPIApi.md#handlebatchrequests) | **POST** /v1/batches | Batch requests in a single transaction
*BulkImportApi* | [**getOutputTemplate**](docs/BulkImportApi.md#getoutputtemplate) | **GET** /v1/imports/downloadOutputTemplate | 
*BulkImportApi* | [**retrieveImportDocuments**](docs/BulkImportApi.md#retrieveimportdocuments) | **GET** /v1/imports | 
*BulkImportApi* | [**retriveOutputTemplateLocation**](docs/BulkImportApi.md#retriveoutputtemplatelocation) | **GET** /v1/imports/getOutputTemplateLocation | 
*BulkLoansApi* | [**loanReassignment**](docs/BulkLoansApi.md#loanreassignment) | **POST** /v1/loans/loanreassignment | 
*BulkLoansApi* | [**loanReassignmentTemplate**](docs/BulkLoansApi.md#loanreassignmenttemplate) | **GET** /v1/loans/loanreassignment/template | 
*BusinessDateManagementApi* | [**getBusinessDate**](docs/BusinessDateManagementApi.md#getbusinessdate) | **GET** /v1/businessdate/{type} | Retrieve a specific Business date
*BusinessDateManagementApi* | [**getBusinessDates**](docs/BusinessDateManagementApi.md#getbusinessdates) | **GET** /v1/businessdate | List all business dates
*BusinessDateManagementApi* | [**updateBusinessDate**](docs/BusinessDateManagementApi.md#updatebusinessdate) | **POST** /v1/businessdate | Update Business Date
*BusinessStepConfigurationApi* | [**retrieveAllAvailableBusinessStep**](docs/BusinessStepConfigurationApi.md#retrieveallavailablebusinessstep) | **GET** /v1/jobs/{jobName}/available-steps | List Business Step Configurations for a Job
*BusinessStepConfigurationApi* | [**retrieveAllConfiguredBusinessJobs**](docs/BusinessStepConfigurationApi.md#retrieveallconfiguredbusinessjobs) | **GET** /v1/jobs/names | List Business Jobs
*BusinessStepConfigurationApi* | [**retrieveAllConfiguredBusinessStep**](docs/BusinessStepConfigurationApi.md#retrieveallconfiguredbusinessstep) | **GET** /v1/jobs/{jobName}/steps | List Business Step Configurations for a Job
*BusinessStepConfigurationApi* | [**updateJobBusinessStepConfig**](docs/BusinessStepConfigurationApi.md#updatejobbusinessstepconfig) | **PUT** /v1/jobs/{jobName}/steps | List Business Step Configurations for a Job
*CacheApi* | [**retrieveAll4**](docs/CacheApi.md#retrieveall4) | **GET** /v1/caches | Retrieve Cache Types
*CacheApi* | [**switchCache**](docs/CacheApi.md#switchcache) | **PUT** /v1/caches | Switch Cache
*CalendarApi* | [**createCalendar**](docs/CalendarApi.md#createcalendar) | **POST** /v1/{entityType}/{entityId}/calendars | 
*CalendarApi* | [**deleteCalendar**](docs/CalendarApi.md#deletecalendar) | **DELETE** /v1/{entityType}/{entityId}/calendars/{calendarId} | 
*CalendarApi* | [**retrieveCalendar**](docs/CalendarApi.md#retrievecalendar) | **GET** /v1/{entityType}/{entityId}/calendars/{calendarId} | 
*CalendarApi* | [**retrieveCalendarsByEntity**](docs/CalendarApi.md#retrievecalendarsbyentity) | **GET** /v1/{entityType}/{entityId}/calendars | 
*CalendarApi* | [**retrieveNewCalendarDetails**](docs/CalendarApi.md#retrievenewcalendardetails) | **GET** /v1/{entityType}/{entityId}/calendars/template | 
*CalendarApi* | [**updateCalendar**](docs/CalendarApi.md#updatecalendar) | **PUT** /v1/{entityType}/{entityId}/calendars/{calendarId} | 
*CashierJournalsApi* | [**getJournalData1**](docs/CashierJournalsApi.md#getjournaldata1) | **GET** /v1/cashiersjournal | 
*CashiersApi* | [**getCashierData**](docs/CashiersApi.md#getcashierdata) | **GET** /v1/cashiers | 
*CentersApi* | [**activate2**](docs/CentersApi.md#activate2) | **POST** /v1/centers/{centerId} | Activate a Center | Generate Collection Sheet | Save Collection Sheet | Close a Center | Associate Groups | Disassociate Groups
*CentersApi* | [**create7**](docs/CentersApi.md#create7) | **POST** /v1/centers | Create a Center
*CentersApi* | [**delete10**](docs/CentersApi.md#delete10) | **DELETE** /v1/centers/{centerId} | Delete a Center
*CentersApi* | [**getCentersTemplate**](docs/CentersApi.md#getcenterstemplate) | **GET** /v1/centers/downloadtemplate | 
*CentersApi* | [**postCentersTemplate**](docs/CentersApi.md#postcenterstemplate) | **POST** /v1/centers/uploadtemplate | 
*CentersApi* | [**retrieveAll23**](docs/CentersApi.md#retrieveall23) | **GET** /v1/centers | List Centers
*CentersApi* | [**retrieveGroupAccount**](docs/CentersApi.md#retrievegroupaccount) | **GET** /v1/centers/{centerId}/accounts | Retrieve Center accounts overview
*CentersApi* | [**retrieveOne14**](docs/CentersApi.md#retrieveone14) | **GET** /v1/centers/{centerId} | Retrieve a Center
*CentersApi* | [**retrieveTemplate6**](docs/CentersApi.md#retrievetemplate6) | **GET** /v1/centers/template | Retrieve a Center Template
*CentersApi* | [**update12**](docs/CentersApi.md#update12) | **PUT** /v1/centers/{centerId} | Update a Center
*ChargesApi* | [**createCharge**](docs/ChargesApi.md#createcharge) | **POST** /v1/charges | Create/Define a Charge
*ChargesApi* | [**deleteCharge**](docs/ChargesApi.md#deletecharge) | **DELETE** /v1/charges/{chargeId} | Delete a Charge
*ChargesApi* | [**retrieveAllCharges**](docs/ChargesApi.md#retrieveallcharges) | **GET** /v1/charges | Retrieve Charges
*ChargesApi* | [**retrieveCharge**](docs/ChargesApi.md#retrievecharge) | **GET** /v1/charges/{chargeId} | Retrieve a Charge
*ChargesApi* | [**retrieveNewChargeDetails**](docs/ChargesApi.md#retrievenewchargedetails) | **GET** /v1/charges/template | Retrieve Charge Template
*ChargesApi* | [**updateCharge**](docs/ChargesApi.md#updatecharge) | **PUT** /v1/charges/{chargeId} | Update a Charge
*ClientApi* | [**activate1**](docs/ClientApi.md#activate1) | **POST** /v1/clients/{clientId} | Activate a Client | Close a Client | Reject a Client | Withdraw a Client | Reactivate a Client | UndoReject a Client | UndoWithdraw a Client | Assign a Staff | Unassign a Staff | Update Default Savings Account | Propose a Client Transfer | Withdraw a Client Transfer | Reject a Client Transfer | Accept a Client Transfer | Propose and Accept a Client Transfer
*ClientApi* | [**applyCommand**](docs/ClientApi.md#applycommand) | **POST** /v1/clients/external-id/{externalId} | Activate a Client | Close a Client | Reject a Client | Withdraw a Client | Reactivate a Client | UndoReject a Client | UndoWithdraw a Client | Assign a Staff | Unassign a Staff | Update Default Savings Account | Propose a Client Transfer | Withdraw a Client Transfer | Reject a Client Transfer | Accept a Client Transfer | Propose and Accept a Client Transfer
*ClientApi* | [**create6**](docs/ClientApi.md#create6) | **POST** /v1/clients | Create a Client
*ClientApi* | [**delete8**](docs/ClientApi.md#delete8) | **DELETE** /v1/clients/{clientId} | Delete a Client
*ClientApi* | [**delete9**](docs/ClientApi.md#delete9) | **DELETE** /v1/clients/external-id/{externalId} | Delete a Client
*ClientApi* | [**getClientTemplate**](docs/ClientApi.md#getclienttemplate) | **GET** /v1/clients/downloadtemplate | 
*ClientApi* | [**postClientTemplate**](docs/ClientApi.md#postclienttemplate) | **POST** /v1/clients/uploadtemplate | 
*ClientApi* | [**retrieveAll21**](docs/ClientApi.md#retrieveall21) | **GET** /v1/clients | List Clients
*ClientApi* | [**retrieveAssociatedAccounts**](docs/ClientApi.md#retrieveassociatedaccounts) | **GET** /v1/clients/{clientId}/accounts | Retrieve client accounts overview
*ClientApi* | [**retrieveAssociatedAccounts1**](docs/ClientApi.md#retrieveassociatedaccounts1) | **GET** /v1/clients/external-id/{externalId}/accounts | Retrieve client accounts overview
*ClientApi* | [**retrieveObligeeDetails**](docs/ClientApi.md#retrieveobligeedetails) | **GET** /v1/clients/{clientId}/obligeedetails | Retrieve client obligee details
*ClientApi* | [**retrieveObligeeDetails1**](docs/ClientApi.md#retrieveobligeedetails1) | **GET** /v1/clients/external-id/{externalId}/obligeedetails | Retrieve client obligee details
*ClientApi* | [**retrieveOne11**](docs/ClientApi.md#retrieveone11) | **GET** /v1/clients/{clientId} | Retrieve a Client
*ClientApi* | [**retrieveOne12**](docs/ClientApi.md#retrieveone12) | **GET** /v1/clients/external-id/{externalId} | Retrieve a Client by External Id
*ClientApi* | [**retrieveTemplate5**](docs/ClientApi.md#retrievetemplate5) | **GET** /v1/clients/template | Retrieve Client Details Template
*ClientApi* | [**retrieveTransferTemplate**](docs/ClientApi.md#retrievetransfertemplate) | **GET** /v1/clients/{clientId}/transferproposaldate | Retrieve client transfer template
*ClientApi* | [**retrieveTransferTemplate1**](docs/ClientApi.md#retrievetransfertemplate1) | **GET** /v1/clients/external-id/{externalId}/transferproposaldate | Retrieve client transfer template
*ClientApi* | [**update10**](docs/ClientApi.md#update10) | **PUT** /v1/clients/{clientId} | Update a Client
*ClientApi* | [**update11**](docs/ClientApi.md#update11) | **PUT** /v1/clients/external-id/{externalId} | Update a Client using the External Id
*ClientChargesApi* | [**applyClientCharge**](docs/ClientChargesApi.md#applyclientcharge) | **POST** /v1/clients/{clientId}/charges | Add Client Charge
*ClientChargesApi* | [**deleteClientCharge**](docs/ClientChargesApi.md#deleteclientcharge) | **DELETE** /v1/clients/{clientId}/charges/{chargeId} | Delete a Client Charge
*ClientChargesApi* | [**payOrWaiveClientCharge**](docs/ClientChargesApi.md#payorwaiveclientcharge) | **POST** /v1/clients/{clientId}/charges/{chargeId} | Pay a Client Charge | Waive a Client Charge
*ClientChargesApi* | [**retrieveAllClientCharges**](docs/ClientChargesApi.md#retrieveallclientcharges) | **GET** /v1/clients/{clientId}/charges | List Client Charges
*ClientChargesApi* | [**retrieveClientCharge**](docs/ClientChargesApi.md#retrieveclientcharge) | **GET** /v1/clients/{clientId}/charges/{chargeId} | Retrieve a Client Charge
*ClientChargesApi* | [**retrieveTemplate4**](docs/ClientChargesApi.md#retrievetemplate4) | **GET** /v1/clients/{clientId}/charges/template | 
*ClientCollateralManagementApi* | [**addCollateral**](docs/ClientCollateralManagementApi.md#addcollateral) | **POST** /v1/clients/{clientId}/collaterals | Add New Collateral For a Client
*ClientCollateralManagementApi* | [**deleteCollateral1**](docs/ClientCollateralManagementApi.md#deletecollateral1) | **DELETE** /v1/clients/{clientId}/collaterals/{collateralId} | Delete Client Collateral
*ClientCollateralManagementApi* | [**getClientCollateral**](docs/ClientCollateralManagementApi.md#getclientcollateral) | **GET** /v1/clients/{clientId}/collaterals | Get Clients Collateral Products
*ClientCollateralManagementApi* | [**getClientCollateralData**](docs/ClientCollateralManagementApi.md#getclientcollateraldata) | **GET** /v1/clients/{clientId}/collaterals/{clientCollateralId} | Get Client Collateral Data
*ClientCollateralManagementApi* | [**getClientCollateralTemplate**](docs/ClientCollateralManagementApi.md#getclientcollateraltemplate) | **GET** /v1/clients/{clientId}/collaterals/template | Get Client Collateral Template
*ClientCollateralManagementApi* | [**updateCollateral1**](docs/ClientCollateralManagementApi.md#updatecollateral1) | **PUT** /v1/clients/{clientId}/collaterals/{collateralId} | Update New Collateral of a Client
*ClientFamilyMemberApi* | [**addClientFamilyMembers**](docs/ClientFamilyMemberApi.md#addclientfamilymembers) | **POST** /v1/clients/{clientId}/familymembers | 
*ClientFamilyMemberApi* | [**deleteClientFamilyMembers**](docs/ClientFamilyMemberApi.md#deleteclientfamilymembers) | **DELETE** /v1/clients/{clientId}/familymembers/{familyMemberId} | 
*ClientFamilyMemberApi* | [**getFamilyMember**](docs/ClientFamilyMemberApi.md#getfamilymember) | **GET** /v1/clients/{clientId}/familymembers/{familyMemberId} | 
*ClientFamilyMemberApi* | [**getFamilyMembers**](docs/ClientFamilyMemberApi.md#getfamilymembers) | **GET** /v1/clients/{clientId}/familymembers | 
*ClientFamilyMemberApi* | [**getTemplate2**](docs/ClientFamilyMemberApi.md#gettemplate2) | **GET** /v1/clients/{clientId}/familymembers/template | 
*ClientFamilyMemberApi* | [**updateClientFamilyMembers**](docs/ClientFamilyMemberApi.md#updateclientfamilymembers) | **PUT** /v1/clients/{clientId}/familymembers/{familyMemberId} | 
*ClientIdentifierApi* | [**createClientIdentifier**](docs/ClientIdentifierApi.md#createclientidentifier) | **POST** /v1/clients/{clientId}/identifiers | Create an Identifier for a Client
*ClientIdentifierApi* | [**deleteClientIdentifier**](docs/ClientIdentifierApi.md#deleteclientidentifier) | **DELETE** /v1/clients/{clientId}/identifiers/{identifierId} | Delete a Client Identifier
*ClientIdentifierApi* | [**newClientIdentifierDetails**](docs/ClientIdentifierApi.md#newclientidentifierdetails) | **GET** /v1/clients/{clientId}/identifiers/template | Retrieve Client Identifier Details Template
*ClientIdentifierApi* | [**retrieveAllClientIdentifiers**](docs/ClientIdentifierApi.md#retrieveallclientidentifiers) | **GET** /v1/clients/{clientId}/identifiers | List all Identifiers for a Client
*ClientIdentifierApi* | [**retrieveClientIdentifiers**](docs/ClientIdentifierApi.md#retrieveclientidentifiers) | **GET** /v1/clients/{clientId}/identifiers/{identifierId} | Retrieve a Client Identifier
*ClientIdentifierApi* | [**updateClientIdentifer**](docs/ClientIdentifierApi.md#updateclientidentifer) | **PUT** /v1/clients/{clientId}/identifiers/{identifierId} | Update a Client Identifier
*ClientSearchV2Api* | [**searchByText**](docs/ClientSearchV2Api.md#searchbytext) | **POST** /v2/clients/search | Search Clients by text
*ClientTransactionApi* | [**retrieveAllClientTransactions**](docs/ClientTransactionApi.md#retrieveallclienttransactions) | **GET** /v1/clients/{clientId}/transactions | List Client Transactions
*ClientTransactionApi* | [**retrieveAllClientTransactions1**](docs/ClientTransactionApi.md#retrieveallclienttransactions1) | **GET** /v1/clients/external-id/{clientExternalId}/transactions | List Client Transactions
*ClientTransactionApi* | [**retrieveClientTransaction**](docs/ClientTransactionApi.md#retrieveclienttransaction) | **GET** /v1/clients/{clientId}/transactions/{transactionId} | Retrieve a Client Transaction
*ClientTransactionApi* | [**retrieveClientTransaction1**](docs/ClientTransactionApi.md#retrieveclienttransaction1) | **GET** /v1/clients/{clientId}/transactions/external-id/{transactionExternalId} | Retrieve a Client Transaction
*ClientTransactionApi* | [**retrieveClientTransaction2**](docs/ClientTransactionApi.md#retrieveclienttransaction2) | **GET** /v1/clients/external-id/{clientExternalId}/transactions/{transactionId} | Retrieve a Client Transaction
*ClientTransactionApi* | [**retrieveClientTransaction3**](docs/ClientTransactionApi.md#retrieveclienttransaction3) | **GET** /v1/clients/external-id/{clientExternalId}/transactions/external-id/{transactionExternalId} | Retrieve a Client Transaction
*ClientTransactionApi* | [**undoClientTransaction**](docs/ClientTransactionApi.md#undoclienttransaction) | **POST** /v1/clients/{clientId}/transactions/{transactionId} | Undo a Client Transaction
*ClientTransactionApi* | [**undoClientTransaction1**](docs/ClientTransactionApi.md#undoclienttransaction1) | **POST** /v1/clients/{clientId}/transactions/external-id/{transactionExternalId} | Undo a Client Transaction
*ClientTransactionApi* | [**undoClientTransaction2**](docs/ClientTransactionApi.md#undoclienttransaction2) | **POST** /v1/clients/external-id/{clientExternalId}/transactions/{transactionId} | Undo a Client Transaction
*ClientTransactionApi* | [**undoClientTransaction3**](docs/ClientTransactionApi.md#undoclienttransaction3) | **POST** /v1/clients/external-id/{clientExternalId}/transactions/external-id/{transactionExternalId} | Undo a Client Transaction
*ClientsAddressApi* | [**addClientAddress**](docs/ClientsAddressApi.md#addclientaddress) | **POST** /v1/client/{clientid}/addresses | Create an address for a Client
*ClientsAddressApi* | [**getAddresses1**](docs/ClientsAddressApi.md#getaddresses1) | **GET** /v1/client/{clientid}/addresses | List all addresses for a Client
*ClientsAddressApi* | [**getAddressesTemplate**](docs/ClientsAddressApi.md#getaddressestemplate) | **GET** /v1/client/addresses/template | 
*ClientsAddressApi* | [**updateClientAddress**](docs/ClientsAddressApi.md#updateclientaddress) | **PUT** /v1/client/{clientid}/addresses | Update an address for a Client
*CodeValuesApi* | [**createCodeValue**](docs/CodeValuesApi.md#createcodevalue) | **POST** /v1/codes/{codeId}/codevalues | Create a Code description
*CodeValuesApi* | [**deleteCodeValue**](docs/CodeValuesApi.md#deletecodevalue) | **DELETE** /v1/codes/{codeId}/codevalues/{codeValueId} | Delete a Code description
*CodeValuesApi* | [**retrieveAllCodeValues**](docs/CodeValuesApi.md#retrieveallcodevalues) | **GET** /v1/codes/{codeId}/codevalues | List Code Values
*CodeValuesApi* | [**retrieveCodeValue**](docs/CodeValuesApi.md#retrievecodevalue) | **GET** /v1/codes/{codeId}/codevalues/{codeValueId} | Retrieve a Code description
*CodeValuesApi* | [**updateCodeValue**](docs/CodeValuesApi.md#updatecodevalue) | **PUT** /v1/codes/{codeId}/codevalues/{codeValueId} | Update a Code description
*CodesApi* | [**createCode**](docs/CodesApi.md#createcode) | **POST** /v1/codes | Create a Code
*CodesApi* | [**deleteCode**](docs/CodesApi.md#deletecode) | **DELETE** /v1/codes/{codeId} | Delete a Code
*CodesApi* | [**retrieveCode**](docs/CodesApi.md#retrievecode) | **GET** /v1/codes/{codeId} | Retrieve a Code
*CodesApi* | [**retrieveCodeByName**](docs/CodesApi.md#retrievecodebyname) | **GET** /v1/codes/name/{codeName} | Retrieve a Code
*CodesApi* | [**retrieveCodes**](docs/CodesApi.md#retrievecodes) | **GET** /v1/codes | Retrieve Codes
*CodesApi* | [**updateCode**](docs/CodesApi.md#updatecode) | **PUT** /v1/codes/{codeId} | Update a Code
*CollateralManagementApi* | [**createCollateral1**](docs/CollateralManagementApi.md#createcollateral1) | **POST** /v1/collateral-management | Create a new collateral
*CollateralManagementApi* | [**deleteCollateral2**](docs/CollateralManagementApi.md#deletecollateral2) | **DELETE** /v1/collateral-management/{collateralId} | Delete a Collateral
*CollateralManagementApi* | [**getAllCollaterals**](docs/CollateralManagementApi.md#getallcollaterals) | **GET** /v1/collateral-management | Get All Collaterals
*CollateralManagementApi* | [**getCollateral**](docs/CollateralManagementApi.md#getcollateral) | **GET** /v1/collateral-management/{collateralId} | Get Collateral
*CollateralManagementApi* | [**getCollateralTemplate**](docs/CollateralManagementApi.md#getcollateraltemplate) | **GET** /v1/collateral-management/template | Get Collateral Template
*CollateralManagementApi* | [**updateCollateral2**](docs/CollateralManagementApi.md#updatecollateral2) | **PUT** /v1/collateral-management/{collateralId} | Update Collateral
*CollectionSheetApi* | [**generateCollectionSheet**](docs/CollectionSheetApi.md#generatecollectionsheet) | **POST** /v1/collectionsheet | Generate Individual Collection Sheet | Save Collection Sheet
*CreditBureauConfigurationApi* | [**addOrganisationCreditBureau**](docs/CreditBureauConfigurationApi.md#addorganisationcreditbureau) | **POST** /v1/CreditBureauConfiguration/organisationCreditBureau/{organisationCreditBureauId} | 
*CreditBureauConfigurationApi* | [**createCreditBureauConfiguration**](docs/CreditBureauConfigurationApi.md#createcreditbureauconfiguration) | **POST** /v1/CreditBureauConfiguration/configuration/{creditBureauId} | 
*CreditBureauConfigurationApi* | [**createCreditBureauLoanProductMapping**](docs/CreditBureauConfigurationApi.md#createcreditbureauloanproductmapping) | **POST** /v1/CreditBureauConfiguration/mappings/{organisationCreditBureauId} | 
*CreditBureauConfigurationApi* | [**fetchLoanProducts**](docs/CreditBureauConfigurationApi.md#fetchloanproducts) | **GET** /v1/CreditBureauConfiguration/loanProduct | 
*CreditBureauConfigurationApi* | [**fetchMappingByLoanProductId**](docs/CreditBureauConfigurationApi.md#fetchmappingbyloanproductid) | **GET** /v1/CreditBureauConfiguration/loanProduct/{loanProductId} | 
*CreditBureauConfigurationApi* | [**getConfiguration**](docs/CreditBureauConfigurationApi.md#getconfiguration) | **GET** /v1/CreditBureauConfiguration/config/{organisationCreditBureauId} | 
*CreditBureauConfigurationApi* | [**getCreditBureau**](docs/CreditBureauConfigurationApi.md#getcreditbureau) | **GET** /v1/CreditBureauConfiguration | 
*CreditBureauConfigurationApi* | [**getCreditBureauLoanProductMapping**](docs/CreditBureauConfigurationApi.md#getcreditbureauloanproductmapping) | **GET** /v1/CreditBureauConfiguration/mappings | 
*CreditBureauConfigurationApi* | [**getOrganisationCreditBureau**](docs/CreditBureauConfigurationApi.md#getorganisationcreditbureau) | **GET** /v1/CreditBureauConfiguration/organisationCreditBureau | 
*CreditBureauConfigurationApi* | [**updateCreditBureau**](docs/CreditBureauConfigurationApi.md#updatecreditbureau) | **PUT** /v1/CreditBureauConfiguration/organisationCreditBureau | 
*CreditBureauConfigurationApi* | [**updateCreditBureauConfiguration**](docs/CreditBureauConfigurationApi.md#updatecreditbureauconfiguration) | **PUT** /v1/CreditBureauConfiguration/configuration/{configurationId} | 
*CreditBureauConfigurationApi* | [**updateCreditBureauLoanProductMapping**](docs/CreditBureauConfigurationApi.md#updatecreditbureauloanproductmapping) | **PUT** /v1/CreditBureauConfiguration/mappings | 
*CurrencyApi* | [**retrieveCurrencies**](docs/CurrencyApi.md#retrievecurrencies) | **GET** /v1/currencies | Retrieve Currency Configuration
*CurrencyApi* | [**updateCurrencies**](docs/CurrencyApi.md#updatecurrencies) | **PUT** /v1/currencies | Update Currency Configuration
*DataTablesApi* | [**advancedQuery**](docs/DataTablesApi.md#advancedquery) | **POST** /v1/datatables/{datatable}/query | Query Data Table values
*DataTablesApi* | [**createDatatable**](docs/DataTablesApi.md#createdatatable) | **POST** /v1/datatables | Create Data Table
*DataTablesApi* | [**createDatatableEntry**](docs/DataTablesApi.md#createdatatableentry) | **POST** /v1/datatables/{datatable}/{apptableId} | Create Entry in Data Table
*DataTablesApi* | [**deleteDatatable**](docs/DataTablesApi.md#deletedatatable) | **DELETE** /v1/datatables/{datatableName} | Delete Data Table
*DataTablesApi* | [**deleteDatatableEntries**](docs/DataTablesApi.md#deletedatatableentries) | **DELETE** /v1/datatables/{datatable}/{apptableId} | Delete Entry(s) in Data Table
*DataTablesApi* | [**deleteDatatableEntry**](docs/DataTablesApi.md#deletedatatableentry) | **DELETE** /v1/datatables/{datatable}/{apptableId}/{datatableId} | Delete Entry in Datatable (One to Many)
*DataTablesApi* | [**deregisterDatatable**](docs/DataTablesApi.md#deregisterdatatable) | **POST** /v1/datatables/deregister/{datatable} | Deregister Data Table
*DataTablesApi* | [**getDatatable**](docs/DataTablesApi.md#getdatatable) | **GET** /v1/datatables/{datatable} | Retrieve Data Table Details
*DataTablesApi* | [**getDatatable1**](docs/DataTablesApi.md#getdatatable1) | **GET** /v1/datatables/{datatable}/{apptableId} | Retrieve Entry(s) from Data Table
*DataTablesApi* | [**getDatatableManyEntry**](docs/DataTablesApi.md#getdatatablemanyentry) | **GET** /v1/datatables/{datatable}/{apptableId}/{datatableId} | 
*DataTablesApi* | [**getDatatables**](docs/DataTablesApi.md#getdatatables) | **GET** /v1/datatables | List Data Tables
*DataTablesApi* | [**queryValues**](docs/DataTablesApi.md#queryvalues) | **GET** /v1/datatables/{datatable}/query | Query Data Table values
*DataTablesApi* | [**registerDatatable**](docs/DataTablesApi.md#registerdatatable) | **POST** /v1/datatables/register/{datatable}/{apptable} | Register Data Table
*DataTablesApi* | [**updateDatatable**](docs/DataTablesApi.md#updatedatatable) | **PUT** /v1/datatables/{datatableName} | Update Data Table
*DataTablesApi* | [**updateDatatableEntryOneToMany**](docs/DataTablesApi.md#updatedatatableentryonetomany) | **PUT** /v1/datatables/{datatable}/{apptableId}/{datatableId} | Update Entry in Data Table (One to Many)
*DataTablesApi* | [**updateDatatableEntryOnetoOne**](docs/DataTablesApi.md#updatedatatableentryonetoone) | **PUT** /v1/datatables/{datatable}/{apptableId} | Update Entry in Data Table (One to One)
*DefaultApi* | [**activate**](docs/DefaultApi.md#activate) | **POST** /v1/email/campaign/{resourceId} | 
*DefaultApi* | [**addCreditReport**](docs/DefaultApi.md#addcreditreport) | **POST** /v1/creditBureauIntegration/addCreditReport | 
*DefaultApi* | [**addNewClientImage1**](docs/DefaultApi.md#addnewclientimage1) | **POST** /v1/{entity}/{entityId}/images | 
*DefaultApi* | [**create1**](docs/DefaultApi.md#create1) | **POST** /v1/email | 
*DefaultApi* | [**createCampaign**](docs/DefaultApi.md#createcampaign) | **POST** /v1/email/campaign | 
*DefaultApi* | [**createCampaign1**](docs/DefaultApi.md#createcampaign1) | **POST** /v1/smscampaigns | Create a SMS Campaign
*DefaultApi* | [**delete1**](docs/DefaultApi.md#delete1) | **DELETE** /v1/email/{resourceId} | 
*DefaultApi* | [**delete2**](docs/DefaultApi.md#delete2) | **DELETE** /v1/email/campaign/{resourceId} | 
*DefaultApi* | [**delete3**](docs/DefaultApi.md#delete3) | **DELETE** /v1/smscampaigns/{campaignId} | Delete a SMS Campaign
*DefaultApi* | [**delete7**](docs/DefaultApi.md#delete7) | **DELETE** /v1/officetransactions/{transactionId} | 
*DefaultApi* | [**deleteAllExternalEvents**](docs/DefaultApi.md#deleteallexternalevents) | **DELETE** /v1/internal/externalevents | 
*DefaultApi* | [**deleteClientImage**](docs/DefaultApi.md#deleteclientimage) | **DELETE** /v1/{entity}/{entityId}/images | 
*DefaultApi* | [**deleteCreditReport**](docs/DefaultApi.md#deletecreditreport) | **DELETE** /v1/creditBureauIntegration/deleteCreditReport/{creditBureauId} | 
*DefaultApi* | [**fetchCreditReport**](docs/DefaultApi.md#fetchcreditreport) | **POST** /v1/creditBureauIntegration/creditReport | 
*DefaultApi* | [**get**](docs/DefaultApi.md#get) | **GET** /v1/echo | 
*DefaultApi* | [**getAdvancedPaymentAllocationRulesOfLoan**](docs/DefaultApi.md#getadvancedpaymentallocationrulesofloan) | **GET** /v1/internal/loan/{loanId}/advanced-payment-allocation-rules | 
*DefaultApi* | [**getAllExternalEvents**](docs/DefaultApi.md#getallexternalevents) | **GET** /v1/internal/externalevents | 
*DefaultApi* | [**getClientAuditFields**](docs/DefaultApi.md#getclientauditfields) | **GET** /v1/internal/client/{clientId}/audit | 
*DefaultApi* | [**getCobPartitions**](docs/DefaultApi.md#getcobpartitions) | **GET** /v1/internal/cob/partitions/{partitionSize} | 
*DefaultApi* | [**getExternalGrammar**](docs/DefaultApi.md#getexternalgrammar) | **GET** /application.wadl/{path} | 
*DefaultApi* | [**getLoanAuditFields**](docs/DefaultApi.md#getloanauditfields) | **GET** /v1/internal/loan/{loanId}/audit | 
*DefaultApi* | [**getLoanTransactionAuditFields**](docs/DefaultApi.md#getloantransactionauditfields) | **GET** /v1/internal/loan/{loanId}/transaction/{transactionId}/audit | 
*DefaultApi* | [**getLoansByStatus**](docs/DefaultApi.md#getloansbystatus) | **GET** /v1/internal/loan/status/{statusId} | 
*DefaultApi* | [**getSavedCreditReport**](docs/DefaultApi.md#getsavedcreditreport) | **GET** /v1/creditBureauIntegration/creditReport/{creditBureauId} | 
*DefaultApi* | [**getWadl**](docs/DefaultApi.md#getwadl) | **GET** /application.wadl | 
*DefaultApi* | [**handleCommands**](docs/DefaultApi.md#handlecommands) | **POST** /v1/smscampaigns/{campaignId} | SMS Campaign
*DefaultApi* | [**newOfficeTransactionDetails**](docs/DefaultApi.md#newofficetransactiondetails) | **GET** /v1/officetransactions/template | 
*DefaultApi* | [**placeLockOnLoanAccount**](docs/DefaultApi.md#placelockonloanaccount) | **POST** /v1/internal/loans/{loanId}/place-lock/{lockOwner} | 
*DefaultApi* | [**preview**](docs/DefaultApi.md#preview) | **POST** /v1/email/campaign/preview | 
*DefaultApi* | [**preview1**](docs/DefaultApi.md#preview1) | **POST** /v1/smscampaigns/preview | 
*DefaultApi* | [**retrieveAll5**](docs/DefaultApi.md#retrieveall5) | **GET** /v1/email/configuration | 
*DefaultApi* | [**retrieveAll9**](docs/DefaultApi.md#retrieveall9) | **GET** /v1/twofactor/configure | 
*DefaultApi* | [**retrieveAllCampaign**](docs/DefaultApi.md#retrieveallcampaign) | **GET** /v1/email/campaign | 
*DefaultApi* | [**retrieveAllEmailByStatus**](docs/DefaultApi.md#retrieveallemailbystatus) | **GET** /v1/email/messageByStatus | 
*DefaultApi* | [**retrieveAllEmails**](docs/DefaultApi.md#retrieveallemails) | **GET** /v1/email | 
*DefaultApi* | [**retrieveAllEmails1**](docs/DefaultApi.md#retrieveallemails1) | **GET** /v1/smscampaigns | List SMS Campaigns
*DefaultApi* | [**retrieveCampaign**](docs/DefaultApi.md#retrievecampaign) | **GET** /v1/smscampaigns/{resourceId} | Retrieve a SMS Campaign
*DefaultApi* | [**retrieveFailedEmail**](docs/DefaultApi.md#retrievefailedemail) | **GET** /v1/email/failedEmail | 
*DefaultApi* | [**retrieveImage**](docs/DefaultApi.md#retrieveimage) | **GET** /v1/{entity}/{entityId}/images | 
*DefaultApi* | [**retrieveOfficeTransactions**](docs/DefaultApi.md#retrieveofficetransactions) | **GET** /v1/officetransactions | 
*DefaultApi* | [**retrieveOne1**](docs/DefaultApi.md#retrieveone1) | **GET** /v1/email/{resourceId} | 
*DefaultApi* | [**retrieveOneCampaign**](docs/DefaultApi.md#retrieveonecampaign) | **GET** /v1/email/campaign/{resourceId} | 
*DefaultApi* | [**retrieveOneTemplate**](docs/DefaultApi.md#retrieveonetemplate) | **GET** /v1/email/campaign/template/{resourceId} | 
*DefaultApi* | [**retrievePendingEmail**](docs/DefaultApi.md#retrievependingemail) | **GET** /v1/email/pendingEmail | 
*DefaultApi* | [**retrieveSentEmail**](docs/DefaultApi.md#retrievesentemail) | **GET** /v1/email/sentEmail | 
*DefaultApi* | [**saveCreditReport**](docs/DefaultApi.md#savecreditreport) | **POST** /v1/creditBureauIntegration/saveCreditReport | 
*DefaultApi* | [**template1**](docs/DefaultApi.md#template1) | **GET** /v1/email/campaign/template | 
*DefaultApi* | [**template2**](docs/DefaultApi.md#template2) | **GET** /v1/smscampaigns/template | Retrieve a SMS Campaign
*DefaultApi* | [**transferMoneyFrom**](docs/DefaultApi.md#transfermoneyfrom) | **POST** /v1/officetransactions | 
*DefaultApi* | [**update2**](docs/DefaultApi.md#update2) | **PUT** /v1/email/{resourceId} | 
*DefaultApi* | [**updateCampaign**](docs/DefaultApi.md#updatecampaign) | **PUT** /v1/email/campaign/{resourceId} | 
*DefaultApi* | [**updateCampaign1**](docs/DefaultApi.md#updatecampaign1) | **PUT** /v1/smscampaigns/{campaignId} | Update a Campaign
*DefaultApi* | [**updateClientImage1**](docs/DefaultApi.md#updateclientimage1) | **PUT** /v1/{entity}/{entityId}/images | 
*DefaultApi* | [**updateConfiguration**](docs/DefaultApi.md#updateconfiguration) | **PUT** /v1/email/configuration | 
*DefaultApi* | [**updateConfiguration3**](docs/DefaultApi.md#updateconfiguration3) | **PUT** /v1/twofactor/configure | 
*DefaultApi* | [**updateGlobalConfiguration**](docs/DefaultApi.md#updateglobalconfiguration) | **PUT** /v1/internal/configurations/name/{configName}/value/{configValue} | 
*DefaultApi* | [**updateLoanCobLastDate**](docs/DefaultApi.md#updateloancoblastdate) | **POST** /v1/internal/cob/fast-forward-cob-date-of-loan/{loanId} | 
*DelinquencyRangeAndBucketsManagementApi* | [**createDelinquencyBucket**](docs/DelinquencyRangeAndBucketsManagementApi.md#createdelinquencybucket) | **POST** /v1/delinquency/buckets | Create Delinquency Bucket
*DelinquencyRangeAndBucketsManagementApi* | [**createDelinquencyRange**](docs/DelinquencyRangeAndBucketsManagementApi.md#createdelinquencyrange) | **POST** /v1/delinquency/ranges | Create Delinquency Range
*DelinquencyRangeAndBucketsManagementApi* | [**deleteDelinquencyBucket**](docs/DelinquencyRangeAndBucketsManagementApi.md#deletedelinquencybucket) | **DELETE** /v1/delinquency/buckets/{delinquencyBucketId} | Delete Delinquency Bucket based on the Id
*DelinquencyRangeAndBucketsManagementApi* | [**deleteDelinquencyRange**](docs/DelinquencyRangeAndBucketsManagementApi.md#deletedelinquencyrange) | **DELETE** /v1/delinquency/ranges/{delinquencyRangeId} | Update Delinquency Range based on the Id
*DelinquencyRangeAndBucketsManagementApi* | [**getDelinquencyBucket**](docs/DelinquencyRangeAndBucketsManagementApi.md#getdelinquencybucket) | **GET** /v1/delinquency/buckets/{delinquencyBucketId} | Retrieve a specific Delinquency Bucket based on the Id
*DelinquencyRangeAndBucketsManagementApi* | [**getDelinquencyBuckets**](docs/DelinquencyRangeAndBucketsManagementApi.md#getdelinquencybuckets) | **GET** /v1/delinquency/buckets | List all Delinquency Buckets
*DelinquencyRangeAndBucketsManagementApi* | [**getDelinquencyRange**](docs/DelinquencyRangeAndBucketsManagementApi.md#getdelinquencyrange) | **GET** /v1/delinquency/ranges/{delinquencyRangeId} | Retrieve a specific Delinquency Range based on the Id
*DelinquencyRangeAndBucketsManagementApi* | [**getDelinquencyRanges**](docs/DelinquencyRangeAndBucketsManagementApi.md#getdelinquencyranges) | **GET** /v1/delinquency/ranges | List all Delinquency Ranges
*DelinquencyRangeAndBucketsManagementApi* | [**updateDelinquencyBucket**](docs/DelinquencyRangeAndBucketsManagementApi.md#updatedelinquencybucket) | **PUT** /v1/delinquency/buckets/{delinquencyBucketId} | Update Delinquency Bucket based on the Id
*DelinquencyRangeAndBucketsManagementApi* | [**updateDelinquencyRange**](docs/DelinquencyRangeAndBucketsManagementApi.md#updatedelinquencyrange) | **PUT** /v1/delinquency/ranges/{delinquencyRangeId} | Update Delinquency Range based on the Id
*DepositAccountOnHoldFundTransactionsApi* | [**retrieveAll28**](docs/DepositAccountOnHoldFundTransactionsApi.md#retrieveall28) | **GET** /v1/savingsaccounts/{savingsId}/onholdtransactions | 
*DeviceRegistrationApi* | [**delete22**](docs/DeviceRegistrationApi.md#delete22) | **DELETE** /v1/self/device/registration/{id} | 
*DeviceRegistrationApi* | [**registerDevice**](docs/DeviceRegistrationApi.md#registerdevice) | **POST** /v1/self/device/registration | 
*DeviceRegistrationApi* | [**retrieveAllDeviceRegistrations**](docs/DeviceRegistrationApi.md#retrievealldeviceregistrations) | **GET** /v1/self/device/registration | 
*DeviceRegistrationApi* | [**retrieveDeviceRegiistration**](docs/DeviceRegistrationApi.md#retrievedeviceregiistration) | **GET** /v1/self/device/registration/{id} | 
*DeviceRegistrationApi* | [**retrieveDeviceRegistrationByClientId**](docs/DeviceRegistrationApi.md#retrievedeviceregistrationbyclientid) | **GET** /v1/self/device/registration/client/{clientId} | 
*DeviceRegistrationApi* | [**updateDeviceRegistration**](docs/DeviceRegistrationApi.md#updatedeviceregistration) | **PUT** /v1/self/device/registration/{id} | 
*DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createdocument) | **POST** /v1/{entityType}/{entityId}/documents | Create a Document
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /v1/{entityType}/{entityId}/documents/{documentId} | Remove a Document
*DocumentsApi* | [**downloadFile**](docs/DocumentsApi.md#downloadfile) | **GET** /v1/{entityType}/{entityId}/documents/{documentId}/attachment | Retrieve Binary File associated with Document
*DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getdocument) | **GET** /v1/{entityType}/{entityId}/documents/{documentId} | Retrieve a Document
*DocumentsApi* | [**retrieveAllDocuments**](docs/DocumentsApi.md#retrievealldocuments) | **GET** /v1/{entityType}/{entityId}/documents | List documents
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocument) | **PUT** /v1/{entityType}/{entityId}/documents/{documentId} | Update a Document
*EntityDataTableApi* | [**createEntityDatatableCheck**](docs/EntityDataTableApi.md#createentitydatatablecheck) | **POST** /v1/entityDatatableChecks | Create Entity-Datatable Checks
*EntityDataTableApi* | [**deleteDatatable1**](docs/EntityDataTableApi.md#deletedatatable1) | **DELETE** /v1/entityDatatableChecks/{entityDatatableCheckId} | Delete Entity-Datatable Checks
*EntityDataTableApi* | [**getTemplate**](docs/EntityDataTableApi.md#gettemplate) | **GET** /v1/entityDatatableChecks/template | Retrieve Entity-Datatable Checks Template
*EntityDataTableApi* | [**retrieveAll6**](docs/EntityDataTableApi.md#retrieveall6) | **GET** /v1/entityDatatableChecks | List Entity-Datatable Checks
*EntityFieldConfigurationApi* | [**getAddresses**](docs/EntityFieldConfigurationApi.md#getaddresses) | **GET** /v1/fieldconfiguration/{entity} | Retrieves the Entity Field Configuration
*ExternalAssetOwnerLoanProductAttributesApi* | [**getExternalAssetOwnerLoanProductAttributes**](docs/ExternalAssetOwnerLoanProductAttributesApi.md#getexternalassetownerloanproductattributes) | **GET** /v1/external-asset-owners/loan-product/{loanProductId}/attributes | Retrieve All Loan Product Attributes
*ExternalAssetOwnerLoanProductAttributesApi* | [**postExternalAssetOwnerLoanProductAttribute**](docs/ExternalAssetOwnerLoanProductAttributesApi.md#postexternalassetownerloanproductattribute) | **POST** /v1/external-asset-owners/loan-product/{loanProductId}/attributes | 
*ExternalAssetOwnerLoanProductAttributesApi* | [**updateLoanProductAttribute**](docs/ExternalAssetOwnerLoanProductAttributesApi.md#updateloanproductattribute) | **PUT** /v1/external-asset-owners/loan-product/{loanProductId}/attributes/{id} | Update a Loan Product Attribute
*ExternalAssetOwnersApi* | [**getActiveTransfer**](docs/ExternalAssetOwnersApi.md#getactivetransfer) | **GET** /v1/external-asset-owners/transfers/active-transfer | Retrieve Active Asset Owner Transfer
*ExternalAssetOwnersApi* | [**getJournalEntriesOfOwner**](docs/ExternalAssetOwnersApi.md#getjournalentriesofowner) | **GET** /v1/external-asset-owners/owners/external-id/{ownerExternalId}/journal-entries | Retrieve Journal Entries of Owner
*ExternalAssetOwnersApi* | [**getJournalEntriesOfTransfer**](docs/ExternalAssetOwnersApi.md#getjournalentriesoftransfer) | **GET** /v1/external-asset-owners/transfers/{transferId}/journal-entries | Retrieve Journal Entries of Transfer
*ExternalAssetOwnersApi* | [**getTransfers**](docs/ExternalAssetOwnersApi.md#gettransfers) | **GET** /v1/external-asset-owners/transfers | Retrieve External Asset Owner Transfers
*ExternalAssetOwnersApi* | [**searchInvestorData**](docs/ExternalAssetOwnersApi.md#searchinvestordata) | **POST** /v1/external-asset-owners/search | Search External Asset Owner Transfers by text or date ranges to settlement or effective dates
*ExternalAssetOwnersApi* | [**transferRequestWithId**](docs/ExternalAssetOwnersApi.md#transferrequestwithid) | **POST** /v1/external-asset-owners/transfers/{id} | 
*ExternalAssetOwnersApi* | [**transferRequestWithId1**](docs/ExternalAssetOwnersApi.md#transferrequestwithid1) | **POST** /v1/external-asset-owners/transfers/external-id/{externalId} | 
*ExternalAssetOwnersApi* | [**transferRequestWithLoanExternalId**](docs/ExternalAssetOwnersApi.md#transferrequestwithloanexternalid) | **POST** /v1/external-asset-owners/transfers/loans/external-id/{loanExternalId} | 
*ExternalAssetOwnersApi* | [**transferRequestWithLoanId**](docs/ExternalAssetOwnersApi.md#transferrequestwithloanid) | **POST** /v1/external-asset-owners/transfers/loans/{loanId} | 
*ExternalEventConfigurationApi* | [**getExternalEventConfigurations**](docs/ExternalEventConfigurationApi.md#getexternaleventconfigurations) | **GET** /v1/externalevents/configuration | List all external event configurations
*ExternalEventConfigurationApi* | [**updateExternalEventConfigurations**](docs/ExternalEventConfigurationApi.md#updateexternaleventconfigurations) | **PUT** /v1/externalevents/configuration | Enable/Disable external events posting
*ExternalServicesApi* | [**retrieveOne2**](docs/ExternalServicesApi.md#retrieveone2) | **GET** /v1/externalservice/{servicename} | Retrieve External Services Configuration
*ExternalServicesApi* | [**updateExternalServiceProperties**](docs/ExternalServicesApi.md#updateexternalserviceproperties) | **PUT** /v1/externalservice/{servicename} | Update External Service
*FetchAuthenticatedUserDetailsApi* | [**fetchAuthenticatedUserData**](docs/FetchAuthenticatedUserDetailsApi.md#fetchauthenticateduserdata) | **GET** /v1/userdetails | Fetch authenticated user details 
*FineractEntityApi* | [**createMap**](docs/FineractEntityApi.md#createmap) | **POST** /v1/entitytoentitymapping/{relId} | 
*FineractEntityApi* | [**delete4**](docs/FineractEntityApi.md#delete4) | **DELETE** /v1/entitytoentitymapping/{mapId} | 
*FineractEntityApi* | [**getEntityToEntityMappings**](docs/FineractEntityApi.md#getentitytoentitymappings) | **GET** /v1/entitytoentitymapping/{mapId}/{fromId}/{toId} | 
*FineractEntityApi* | [**retrieveAll7**](docs/FineractEntityApi.md#retrieveall7) | **GET** /v1/entitytoentitymapping | 
*FineractEntityApi* | [**retrieveOne4**](docs/FineractEntityApi.md#retrieveone4) | **GET** /v1/entitytoentitymapping/{mapId} | 
*FineractEntityApi* | [**updateMap**](docs/FineractEntityApi.md#updatemap) | **PUT** /v1/entitytoentitymapping/{mapId} | 
*FixedDepositAccountApi* | [**accountClosureTemplate**](docs/FixedDepositAccountApi.md#accountclosuretemplate) | **GET** /v1/fixeddepositaccounts/{accountId}/template | 
*FixedDepositAccountApi* | [**calculateFixedDepositInterest**](docs/FixedDepositAccountApi.md#calculatefixeddepositinterest) | **GET** /v1/fixeddepositaccounts/calculate-fd-interest | 
*FixedDepositAccountApi* | [**delete14**](docs/FixedDepositAccountApi.md#delete14) | **DELETE** /v1/fixeddepositaccounts/{accountId} | Delete a fixed deposit application
*FixedDepositAccountApi* | [**getFixedDepositTemplate**](docs/FixedDepositAccountApi.md#getfixeddeposittemplate) | **GET** /v1/fixeddepositaccounts/downloadtemplate | 
*FixedDepositAccountApi* | [**getFixedDepositTransactionTemplate**](docs/FixedDepositAccountApi.md#getfixeddeposittransactiontemplate) | **GET** /v1/fixeddepositaccounts/transaction/downloadtemplate | 
*FixedDepositAccountApi* | [**handleCommands4**](docs/FixedDepositAccountApi.md#handlecommands4) | **POST** /v1/fixeddepositaccounts/{accountId} | Approve fixed deposit application | Undo approval fixed deposit application | Reject fixed deposit application | Withdraw fixed deposit application | Activate a fixed deposit account | Close a fixed deposit account | Premature Close a fixed deposit account | Calculate Premature amount on Fixed deposit account | Calculate Interest on Fixed Deposit Account | Post Interest on Fixed Deposit Account
*FixedDepositAccountApi* | [**postFixedDepositTemplate**](docs/FixedDepositAccountApi.md#postfixeddeposittemplate) | **POST** /v1/fixeddepositaccounts/uploadtemplate | 
*FixedDepositAccountApi* | [**postFixedDepositTransactionTemplate**](docs/FixedDepositAccountApi.md#postfixeddeposittransactiontemplate) | **POST** /v1/fixeddepositaccounts/transaction/uploadtemplate | 
*FixedDepositAccountApi* | [**retrieveAll29**](docs/FixedDepositAccountApi.md#retrieveall29) | **GET** /v1/fixeddepositaccounts | List Fixed deposit applications/accounts
*FixedDepositAccountApi* | [**retrieveOne19**](docs/FixedDepositAccountApi.md#retrieveone19) | **GET** /v1/fixeddepositaccounts/{accountId} | Retrieve a fixed deposit application/account
*FixedDepositAccountApi* | [**submitApplication**](docs/FixedDepositAccountApi.md#submitapplication) | **POST** /v1/fixeddepositaccounts | Submit new fixed deposit application
*FixedDepositAccountApi* | [**template12**](docs/FixedDepositAccountApi.md#template12) | **GET** /v1/fixeddepositaccounts/template | Retrieve Fixed Deposit Account Template
*FixedDepositAccountApi* | [**update16**](docs/FixedDepositAccountApi.md#update16) | **PUT** /v1/fixeddepositaccounts/{accountId} | Modify a fixed deposit application
*FixedDepositAccountTransactionsApi* | [**adjustTransaction**](docs/FixedDepositAccountTransactionsApi.md#adjusttransaction) | **POST** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId} | 
*FixedDepositAccountTransactionsApi* | [**retrieveOne18**](docs/FixedDepositAccountTransactionsApi.md#retrieveone18) | **GET** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/{transactionId} | 
*FixedDepositAccountTransactionsApi* | [**retrieveTemplate14**](docs/FixedDepositAccountTransactionsApi.md#retrievetemplate14) | **GET** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions/template | 
*FixedDepositAccountTransactionsApi* | [**transaction**](docs/FixedDepositAccountTransactionsApi.md#transaction) | **POST** /v1/fixeddepositaccounts/{fixedDepositAccountId}/transactions | 
*FixedDepositProductApi* | [**create11**](docs/FixedDepositProductApi.md#create11) | **POST** /v1/fixeddepositproducts | Create a Fixed Deposit Product
*FixedDepositProductApi* | [**delete15**](docs/FixedDepositProductApi.md#delete15) | **DELETE** /v1/fixeddepositproducts/{productId} | Delete a Fixed Deposit Product
*FixedDepositProductApi* | [**retrieveAll30**](docs/FixedDepositProductApi.md#retrieveall30) | **GET** /v1/fixeddepositproducts | List Fixed Deposit Products
*FixedDepositProductApi* | [**retrieveOne20**](docs/FixedDepositProductApi.md#retrieveone20) | **GET** /v1/fixeddepositproducts/{productId} | Retrieve a Fixed Deposit Product
*FixedDepositProductApi* | [**retrieveTemplate15**](docs/FixedDepositProductApi.md#retrievetemplate15) | **GET** /v1/fixeddepositproducts/template | 
*FixedDepositProductApi* | [**update17**](docs/FixedDepositProductApi.md#update17) | **PUT** /v1/fixeddepositproducts/{productId} | Update a Fixed Deposit Product
*FloatingRatesApi* | [**createFloatingRate**](docs/FloatingRatesApi.md#createfloatingrate) | **POST** /v1/floatingrates | Create a new Floating Rate
*FloatingRatesApi* | [**retrieveAll22**](docs/FloatingRatesApi.md#retrieveall22) | **GET** /v1/floatingrates | List Floating Rates
*FloatingRatesApi* | [**retrieveOne13**](docs/FloatingRatesApi.md#retrieveone13) | **GET** /v1/floatingrates/{floatingRateId} | Retrieve Floating Rate
*FloatingRatesApi* | [**updateFloatingRate**](docs/FloatingRatesApi.md#updatefloatingrate) | **PUT** /v1/floatingrates/{floatingRateId} | Update Floating Rate
*FundsApi* | [**createFund**](docs/FundsApi.md#createfund) | **POST** /v1/funds | Create a Fund
*FundsApi* | [**retrieveFund**](docs/FundsApi.md#retrievefund) | **GET** /v1/funds/{fundId} | Retrieve a Fund
*FundsApi* | [**retrieveFunds**](docs/FundsApi.md#retrievefunds) | **GET** /v1/funds | Retrieve Funds
*FundsApi* | [**updateFund**](docs/FundsApi.md#updatefund) | **PUT** /v1/funds/{fundId} | Update a Fund
*GeneralLedgerAccountApi* | [**createGLAccount1**](docs/GeneralLedgerAccountApi.md#createglaccount1) | **POST** /v1/glaccounts | Create a General Ledger Account
*GeneralLedgerAccountApi* | [**deleteGLAccount1**](docs/GeneralLedgerAccountApi.md#deleteglaccount1) | **DELETE** /v1/glaccounts/{glAccountId} | Delete a GL Account
*GeneralLedgerAccountApi* | [**getGlAccountsTemplate**](docs/GeneralLedgerAccountApi.md#getglaccountstemplate) | **GET** /v1/glaccounts/downloadtemplate | 
*GeneralLedgerAccountApi* | [**postGlAccountsTemplate**](docs/GeneralLedgerAccountApi.md#postglaccountstemplate) | **POST** /v1/glaccounts/uploadtemplate | 
*GeneralLedgerAccountApi* | [**retreiveAccount**](docs/GeneralLedgerAccountApi.md#retreiveaccount) | **GET** /v1/glaccounts/{glAccountId} | Retrieve a General Ledger Account
*GeneralLedgerAccountApi* | [**retrieveAllAccounts**](docs/GeneralLedgerAccountApi.md#retrieveallaccounts) | **GET** /v1/glaccounts | List General Ledger Account
*GeneralLedgerAccountApi* | [**retrieveNewAccountDetails**](docs/GeneralLedgerAccountApi.md#retrievenewaccountdetails) | **GET** /v1/glaccounts/template | Retrieve GL Accounts Template
*GeneralLedgerAccountApi* | [**updateGLAccount1**](docs/GeneralLedgerAccountApi.md#updateglaccount1) | **PUT** /v1/glaccounts/{glAccountId} | Update a GL Account
*GlobalConfigurationApi* | [**retrieveConfiguration**](docs/GlobalConfigurationApi.md#retrieveconfiguration) | **GET** /v1/configurations | Retrieve Global Configuration | Retrieve Global Configuration for surveys
*GlobalConfigurationApi* | [**retrieveOne3**](docs/GlobalConfigurationApi.md#retrieveone3) | **GET** /v1/configurations/{configId} | Retrieve Global Configuration
*GlobalConfigurationApi* | [**retrieveOneByName**](docs/GlobalConfigurationApi.md#retrieveonebyname) | **GET** /v1/configurations/name/{name} | Retrieve Global Configuration
*GlobalConfigurationApi* | [**updateConfiguration1**](docs/GlobalConfigurationApi.md#updateconfiguration1) | **PUT** /v1/configurations/{configId} | Update Global Configuration
*GlobalConfigurationApi* | [**updateConfigurationByName**](docs/GlobalConfigurationApi.md#updateconfigurationbyname) | **PUT** /v1/configurations/name/{configName} | Update Global Configuration by name
*GroupsApi* | [**activateOrGenerateCollectionSheet**](docs/GroupsApi.md#activateorgeneratecollectionsheet) | **POST** /v1/groups/{groupId} | Activate a Group | Associate Clients | Disassociate Clients | Transfer Clients across groups | Generate Collection Sheet | Save Collection Sheet | Unassign a Staff | Assign a Staff | Close a Group | Unassign a Role | Update a Role
*GroupsApi* | [**create8**](docs/GroupsApi.md#create8) | **POST** /v1/groups | Create a Group
*GroupsApi* | [**delete11**](docs/GroupsApi.md#delete11) | **DELETE** /v1/groups/{groupId} | Delete a Group
*GroupsApi* | [**getGroupsTemplate**](docs/GroupsApi.md#getgroupstemplate) | **GET** /v1/groups/downloadtemplate | 
*GroupsApi* | [**postGroupTemplate**](docs/GroupsApi.md#postgrouptemplate) | **POST** /v1/groups/uploadtemplate | 
*GroupsApi* | [**retrieveAccounts**](docs/GroupsApi.md#retrieveaccounts) | **GET** /v1/groups/{groupId}/accounts | Retrieve Group accounts overview
*GroupsApi* | [**retrieveAll24**](docs/GroupsApi.md#retrieveall24) | **GET** /v1/groups | List Groups
*GroupsApi* | [**retrieveGsimAccounts**](docs/GroupsApi.md#retrievegsimaccounts) | **GET** /v1/groups/{groupId}/gsimaccounts | 
*GroupsApi* | [**retrieveOne15**](docs/GroupsApi.md#retrieveone15) | **GET** /v1/groups/{groupId} | Retrieve a Group
*GroupsApi* | [**retrieveTemplate7**](docs/GroupsApi.md#retrievetemplate7) | **GET** /v1/groups/template | Retrieve Group Template
*GroupsApi* | [**retrieveglimAccounts**](docs/GroupsApi.md#retrieveglimaccounts) | **GET** /v1/groups/{groupId}/glimaccounts | 
*GroupsApi* | [**unassignLoanOfficer**](docs/GroupsApi.md#unassignloanofficer) | **POST** /v1/groups/{groupId}/command/unassign_staff | Unassign a Staff
*GroupsApi* | [**update13**](docs/GroupsApi.md#update13) | **PUT** /v1/groups/{groupId} | Update a Group
*GroupsLevelApi* | [**retrieveAllGroups**](docs/GroupsLevelApi.md#retrieveallgroups) | **GET** /v1/grouplevels | 
*GuarantorsApi* | [**accountsTemplate**](docs/GuarantorsApi.md#accountstemplate) | **GET** /v1/loans/{loanId}/guarantors/accounts/template | 
*GuarantorsApi* | [**createGuarantor**](docs/GuarantorsApi.md#createguarantor) | **POST** /v1/loans/{loanId}/guarantors | 
*GuarantorsApi* | [**deleteGuarantor**](docs/GuarantorsApi.md#deleteguarantor) | **DELETE** /v1/loans/{loanId}/guarantors/{guarantorId} | 
*GuarantorsApi* | [**getGuarantorTemplate**](docs/GuarantorsApi.md#getguarantortemplate) | **GET** /v1/loans/{loanId}/guarantors/downloadtemplate | 
*GuarantorsApi* | [**newGuarantorTemplate**](docs/GuarantorsApi.md#newguarantortemplate) | **GET** /v1/loans/{loanId}/guarantors/template | 
*GuarantorsApi* | [**postGuarantorTemplate**](docs/GuarantorsApi.md#postguarantortemplate) | **POST** /v1/loans/{loanId}/guarantors/uploadtemplate | 
*GuarantorsApi* | [**retrieveGuarantorDetails**](docs/GuarantorsApi.md#retrieveguarantordetails) | **GET** /v1/loans/{loanId}/guarantors | 
*GuarantorsApi* | [**retrieveGuarantorDetails1**](docs/GuarantorsApi.md#retrieveguarantordetails1) | **GET** /v1/loans/{loanId}/guarantors/{guarantorId} | 
*GuarantorsApi* | [**updateGuarantor**](docs/GuarantorsApi.md#updateguarantor) | **PUT** /v1/loans/{loanId}/guarantors/{guarantorId} | 
*HolidaysApi* | [**createNewHoliday**](docs/HolidaysApi.md#createnewholiday) | **POST** /v1/holidays | Create a Holiday
*HolidaysApi* | [**delete6**](docs/HolidaysApi.md#delete6) | **DELETE** /v1/holidays/{holidayId} | Delete a Holiday
*HolidaysApi* | [**handleCommands1**](docs/HolidaysApi.md#handlecommands1) | **POST** /v1/holidays/{holidayId} | Activate a Holiday
*HolidaysApi* | [**retrieveAllHolidays**](docs/HolidaysApi.md#retrieveallholidays) | **GET** /v1/holidays | List Holidays
*HolidaysApi* | [**retrieveOne7**](docs/HolidaysApi.md#retrieveone7) | **GET** /v1/holidays/{holidayId} | Retrieve a Holiday
*HolidaysApi* | [**retrieveRepaymentScheduleUpdationTyeOptions**](docs/HolidaysApi.md#retrieverepaymentscheduleupdationtyeoptions) | **GET** /v1/holidays/template | 
*HolidaysApi* | [**update6**](docs/HolidaysApi.md#update6) | **PUT** /v1/holidays/{holidayId} | Update a Holiday
*HooksApi* | [**createHook**](docs/HooksApi.md#createhook) | **POST** /v1/hooks | Create a Hook
*HooksApi* | [**deleteHook**](docs/HooksApi.md#deletehook) | **DELETE** /v1/hooks/{hookId} | Delete a Hook
*HooksApi* | [**retrieveHook**](docs/HooksApi.md#retrievehook) | **GET** /v1/hooks/{hookId} | Retrieve a Hook
*HooksApi* | [**retrieveHooks**](docs/HooksApi.md#retrievehooks) | **GET** /v1/hooks | Retrieve Hooks
*HooksApi* | [**template3**](docs/HooksApi.md#template3) | **GET** /v1/hooks/template | Retrieve Hooks Template
*HooksApi* | [**updateHook**](docs/HooksApi.md#updatehook) | **PUT** /v1/hooks/{hookId} | Update a Hook
*InlineJobApi* | [**executeInlineJob**](docs/InlineJobApi.md#executeinlinejob) | **POST** /v1/jobs/{jobName}/inline | Starts an inline Job
*InstanceModeApi* | [**changeMode**](docs/InstanceModeApi.md#changemode) | **PUT** /v1/instance-mode | Changes the Fineract instance mode
*InterOperationApi* | [**createQuote**](docs/InterOperationApi.md#createquote) | **POST** /v1/interoperation/quotes | Calculate Interoperation Quote
*InterOperationApi* | [**createTransactionRequest**](docs/InterOperationApi.md#createtransactionrequest) | **POST** /v1/interoperation/requests | Allow Interoperation Transaction Request
*InterOperationApi* | [**deleteAccountIdentifier**](docs/InterOperationApi.md#deleteaccountidentifier) | **DELETE** /v1/interoperation/parties/{idType}/{idValue} | Allow Interoperation Identifier registration
*InterOperationApi* | [**deleteAccountIdentifier1**](docs/InterOperationApi.md#deleteaccountidentifier1) | **DELETE** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Allow Interoperation Identifier registration
*InterOperationApi* | [**disburseLoan**](docs/InterOperationApi.md#disburseloan) | **POST** /v1/interoperation/transactions/{accountId}/disburse | Disburse Loan by Account Id
*InterOperationApi* | [**getAccountByIdentifier**](docs/InterOperationApi.md#getaccountbyidentifier) | **GET** /v1/interoperation/parties/{idType}/{idValue} | Query Interoperation Account by secondary identifier
*InterOperationApi* | [**getAccountByIdentifier1**](docs/InterOperationApi.md#getaccountbyidentifier1) | **GET** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Query Interoperation Account by secondary identifier
*InterOperationApi* | [**getAccountDetails**](docs/InterOperationApi.md#getaccountdetails) | **GET** /v1/interoperation/accounts/{accountId} | Query Interoperation Account details
*InterOperationApi* | [**getAccountIdentifiers**](docs/InterOperationApi.md#getaccountidentifiers) | **GET** /v1/interoperation/accounts/{accountId}/identifiers | Query Interoperation secondary identifiers by Account Id
*InterOperationApi* | [**getAccountTransactions**](docs/InterOperationApi.md#getaccounttransactions) | **GET** /v1/interoperation/accounts/{accountId}/transactions | Query transactions by Account Id
*InterOperationApi* | [**getClientKyc**](docs/InterOperationApi.md#getclientkyc) | **GET** /v1/interoperation/accounts/{accountId}/kyc | Query KYC by Account Id
*InterOperationApi* | [**getQuote**](docs/InterOperationApi.md#getquote) | **GET** /v1/interoperation/transactions/{transactionCode}/quotes/{quoteCode} | Query Interoperation Quote
*InterOperationApi* | [**getTransactionRequest**](docs/InterOperationApi.md#gettransactionrequest) | **GET** /v1/interoperation/transactions/{transactionCode}/requests/{requestCode} | Query Interoperation Transaction Request
*InterOperationApi* | [**getTransfer**](docs/InterOperationApi.md#gettransfer) | **GET** /v1/interoperation/transactions/{transactionCode}/transfers/{transferCode} | Query Interoperation Transfer
*InterOperationApi* | [**health**](docs/InterOperationApi.md#health) | **GET** /v1/interoperation/health | Query Interoperation Health Request
*InterOperationApi* | [**loanRepayment**](docs/InterOperationApi.md#loanrepayment) | **POST** /v1/interoperation/transactions/{accountId}/loanrepayment | Disburse Loan by Account Id
*InterOperationApi* | [**performTransfer**](docs/InterOperationApi.md#performtransfer) | **POST** /v1/interoperation/transfers | Prepare Interoperation Transfer
*InterOperationApi* | [**registerAccountIdentifier**](docs/InterOperationApi.md#registeraccountidentifier) | **POST** /v1/interoperation/parties/{idType}/{idValue} | Interoperation Identifier registration
*InterOperationApi* | [**registerAccountIdentifier1**](docs/InterOperationApi.md#registeraccountidentifier1) | **POST** /v1/interoperation/parties/{idType}/{idValue}/{subIdOrType} | Interoperation Identifier registration
*InterestRateChartApi* | [**create10**](docs/InterestRateChartApi.md#create10) | **POST** /v1/interestratecharts | Create a Chart
*InterestRateChartApi* | [**delete13**](docs/InterestRateChartApi.md#delete13) | **DELETE** /v1/interestratecharts/{chartId} | Delete a Chart
*InterestRateChartApi* | [**retrieveAll26**](docs/InterestRateChartApi.md#retrieveall26) | **GET** /v1/interestratecharts | Retrieve all Charts
*InterestRateChartApi* | [**retrieveOne17**](docs/InterestRateChartApi.md#retrieveone17) | **GET** /v1/interestratecharts/{chartId} | Retrieve a Chart
*InterestRateChartApi* | [**template9**](docs/InterestRateChartApi.md#template9) | **GET** /v1/interestratecharts/template | Retrieve Chart Details Template
*InterestRateChartApi* | [**update15**](docs/InterestRateChartApi.md#update15) | **PUT** /v1/interestratecharts/{chartId} | Update a Chart
*InterestRateSlabAKAInterestBandsApi* | [**create9**](docs/InterestRateSlabAKAInterestBandsApi.md#create9) | **POST** /v1/interestratecharts/{chartId}/chartslabs | Create a Slab
*InterestRateSlabAKAInterestBandsApi* | [**delete12**](docs/InterestRateSlabAKAInterestBandsApi.md#delete12) | **DELETE** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Delete a Slab
*InterestRateSlabAKAInterestBandsApi* | [**retrieveAll25**](docs/InterestRateSlabAKAInterestBandsApi.md#retrieveall25) | **GET** /v1/interestratecharts/{chartId}/chartslabs | Retrieve all Slabs
*InterestRateSlabAKAInterestBandsApi* | [**retrieveOne16**](docs/InterestRateSlabAKAInterestBandsApi.md#retrieveone16) | **GET** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Retrieve a Slab
*InterestRateSlabAKAInterestBandsApi* | [**template8**](docs/InterestRateSlabAKAInterestBandsApi.md#template8) | **GET** /v1/interestratecharts/{chartId}/chartslabs/template | 
*InterestRateSlabAKAInterestBandsApi* | [**update14**](docs/InterestRateSlabAKAInterestBandsApi.md#update14) | **PUT** /v1/interestratecharts/{chartId}/chartslabs/{chartSlabId} | Update a Slab
*JournalEntriesApi* | [**createGLJournalEntry**](docs/JournalEntriesApi.md#creategljournalentry) | **POST** /v1/journalentries | Create \&quot;Balanced\&quot; Journal Entries
*JournalEntriesApi* | [**createReversalJournalEntry**](docs/JournalEntriesApi.md#createreversaljournalentry) | **POST** /v1/journalentries/{transactionId} | Update Running balances for Journal Entries
*JournalEntriesApi* | [**getJournalEntriesTemplate**](docs/JournalEntriesApi.md#getjournalentriestemplate) | **GET** /v1/journalentries/downloadtemplate | 
*JournalEntriesApi* | [**postJournalEntriesTemplate**](docs/JournalEntriesApi.md#postjournalentriestemplate) | **POST** /v1/journalentries/uploadtemplate | 
*JournalEntriesApi* | [**retrieveAll1**](docs/JournalEntriesApi.md#retrieveall1) | **GET** /v1/journalentries | List Journal Entries
*JournalEntriesApi* | [**retrieveJournalEntries**](docs/JournalEntriesApi.md#retrievejournalentries) | **GET** /v1/journalentries/provisioning | 
*JournalEntriesApi* | [**retrieveJournalEntryById**](docs/JournalEntriesApi.md#retrievejournalentrybyid) | **GET** /v1/journalentries/{journalEntryId} | Retrieve a single Entry
*JournalEntriesApi* | [**retrieveOpeningBalance**](docs/JournalEntriesApi.md#retrieveopeningbalance) | **GET** /v1/journalentries/openingbalance | 
*LikelihoodApi* | [**retrieve**](docs/LikelihoodApi.md#retrieve) | **GET** /v1/likelihood/{ppiName}/{likelihoodId} | 
*LikelihoodApi* | [**retrieveAll11**](docs/LikelihoodApi.md#retrieveall11) | **GET** /v1/likelihood/{ppiName} | 
*LikelihoodApi* | [**update4**](docs/LikelihoodApi.md#update4) | **PUT** /v1/likelihood/{ppiName}/{likelihoodId} | 
*ListReportMailingJobHistoryApi* | [**retrieveAllByReportMailingJobId**](docs/ListReportMailingJobHistoryApi.md#retrieveallbyreportmailingjobid) | **GET** /v1/reportmailingjobrunhistory | List Report Mailing Job History
*LoanAccountLockApi* | [**retrieveLockedAccounts**](docs/LoanAccountLockApi.md#retrievelockedaccounts) | **GET** /v1/loans/locked | List locked loan accounts
*LoanBuyDownFeesApi* | [**getBuyDownFeesAllocationDataByExternalIds**](docs/LoanBuyDownFeesApi.md#getbuydownfeesallocationdatabyexternalids) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees/external-id/{loanTransactionExternalId} | Retrieve a BuyDown Fees allocation data
*LoanBuyDownFeesApi* | [**getBuyDownFeesAllocationDataByLoanExternalId**](docs/LoanBuyDownFeesApi.md#getbuydownfeesallocationdatabyloanexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees/{loanTransactionId} | Retrieve a BuyDown Fees allocation data
*LoanBuyDownFeesApi* | [**getBuyDownFeesAllocationDataByTransactionExternalId**](docs/LoanBuyDownFeesApi.md#getbuydownfeesallocationdatabytransactionexternalid) | **GET** /v1/loans/{loanId}/buydown-fees/external-id/{loanTransactionExternalId} | Retrieve a BuyDown Fees allocation data
*LoanBuyDownFeesApi* | [**retrieveBuyDownFeesAllocationData**](docs/LoanBuyDownFeesApi.md#retrievebuydownfeesallocationdata) | **GET** /v1/loans/{loanId}/buydown-fees/{loanTransactionId} | Retrieve a BuyDown Fees allocation data
*LoanBuyDownFeesApi* | [**retrieveLoanBuyDownFeeAmortizationDetails**](docs/LoanBuyDownFeesApi.md#retrieveloanbuydownfeeamortizationdetails) | **GET** /v1/loans/{loanId}/buydown-fees | Get the amortization details of Buy Down fees for a loan
*LoanBuyDownFeesApi* | [**retrieveLoanBuyDownFeeAmortizationDetailsByExternalId**](docs/LoanBuyDownFeesApi.md#retrieveloanbuydownfeeamortizationdetailsbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/buydown-fees | Get the amortization details of Buy Down fees for a loan by external ID
*LoanCOBCatchUpApi* | [**executeLoanCOBCatchUp**](docs/LoanCOBCatchUpApi.md#executeloancobcatchup) | **POST** /v1/loans/catch-up | Executes Loan COB Catch Up
*LoanCOBCatchUpApi* | [**getOldestCOBProcessedLoan**](docs/LoanCOBCatchUpApi.md#getoldestcobprocessedloan) | **GET** /v1/loans/oldest-cob-closed | Retrieves the oldest COB processed loan
*LoanCOBCatchUpApi* | [**isCatchUpRunning**](docs/LoanCOBCatchUpApi.md#iscatchuprunning) | **GET** /v1/loans/is-catch-up-running | Retrieves whether Loan COB catch up is running
*LoanCapitalizedIncomeApi* | [**fetchCapitalizedIncomeDetails**](docs/LoanCapitalizedIncomeApi.md#fetchcapitalizedincomedetails) | **GET** /v1/loans/{loanId}/capitalized-incomes | Fetch the Capitalized Income related informations
*LoanCapitalizedIncomeApi* | [**fetchCapitalizedIncomeDetailsByExternalId**](docs/LoanCapitalizedIncomeApi.md#fetchcapitalizedincomedetailsbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes | Get the amortization details of Capitalized Income for a loan by external ID
*LoanCapitalizedIncomeApi* | [**fetchLoanCapitalizedIncomeData**](docs/LoanCapitalizedIncomeApi.md#fetchloancapitalizedincomedata) | **GET** /v1/loans/{loanId}/deferredincome | Fetch the Capitalized Income related informations
*LoanCapitalizedIncomeApi* | [**fetchLoanCapitalizedIncomeDataByExternalId**](docs/LoanCapitalizedIncomeApi.md#fetchloancapitalizedincomedatabyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/deferredincome | Get the amortization details of Capitalized Income for a loan by external ID
*LoanCapitalizedIncomeApi* | [**getCapitalizedIncomeAllocationDataByExternalIds**](docs/LoanCapitalizedIncomeApi.md#getcapitalizedincomeallocationdatabyexternalids) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes/external-id/{loanTransactionExternalId} | Retrieve a capitalized income allocation data
*LoanCapitalizedIncomeApi* | [**getCapitalizedIncomeAllocationDataByLoanExternalId**](docs/LoanCapitalizedIncomeApi.md#getcapitalizedincomeallocationdatabyloanexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/capitalized-incomes/{loanTransactionId} | Retrieve a capitalized income allocation data
*LoanCapitalizedIncomeApi* | [**getCapitalizedIncomeAllocationDataByTransactionExternalId**](docs/LoanCapitalizedIncomeApi.md#getcapitalizedincomeallocationdatabytransactionexternalid) | **GET** /v1/loans/{loanId}/capitalized-incomes/external-id/{loanTransactionExternalId} | Retrieve a capitalized income allocation data
*LoanCapitalizedIncomeApi* | [**retrieveCapitalizedIncomeAllocationData**](docs/LoanCapitalizedIncomeApi.md#retrievecapitalizedincomeallocationdata) | **GET** /v1/loans/{loanId}/capitalized-incomes/{loanTransactionId} | Retrieve a capitalized income allocation data
*LoanChargesApi* | [**deleteLoanCharge**](docs/LoanChargesApi.md#deleteloancharge) | **DELETE** /v1/loans/{loanId}/charges/{loanChargeId} | Delete a Loan Charge
*LoanChargesApi* | [**deleteLoanCharge1**](docs/LoanChargesApi.md#deleteloancharge1) | **DELETE** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Delete a Loan Charge
*LoanChargesApi* | [**deleteLoanCharge2**](docs/LoanChargesApi.md#deleteloancharge2) | **DELETE** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Delete a Loan Charge
*LoanChargesApi* | [**deleteLoanCharge3**](docs/LoanChargesApi.md#deleteloancharge3) | **DELETE** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Delete a Loan Charge
*LoanChargesApi* | [**executeLoanCharge**](docs/LoanChargesApi.md#executeloancharge) | **POST** /v1/loans/{loanId}/charges | Create a Loan Charge (no command provided) or Pay a charge (command&#x3D;pay)
*LoanChargesApi* | [**executeLoanCharge1**](docs/LoanChargesApi.md#executeloancharge1) | **POST** /v1/loans/external-id/{loanExternalId}/charges | Create a Loan Charge (no command provided) or Pay a charge (command&#x3D;pay)
*LoanChargesApi* | [**executeLoanCharge2**](docs/LoanChargesApi.md#executeloancharge2) | **POST** /v1/loans/{loanId}/charges/{loanChargeId} | Pay / Waive / Adjustment for Loan Charge
*LoanChargesApi* | [**executeLoanCharge3**](docs/LoanChargesApi.md#executeloancharge3) | **POST** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Pay / Waive / Adjustment for Loan Charge
*LoanChargesApi* | [**executeLoanCharge4**](docs/LoanChargesApi.md#executeloancharge4) | **POST** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Pay / Waive / Adjustment for Loan Charge
*LoanChargesApi* | [**executeLoanCharge5**](docs/LoanChargesApi.md#executeloancharge5) | **POST** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Pay / Waive / Adjustment for Loan Charge
*LoanChargesApi* | [**retrieveAllLoanCharges**](docs/LoanChargesApi.md#retrieveallloancharges) | **GET** /v1/loans/{loanId}/charges | List Loan Charges
*LoanChargesApi* | [**retrieveAllLoanCharges1**](docs/LoanChargesApi.md#retrieveallloancharges1) | **GET** /v1/loans/external-id/{loanExternalId}/charges | List Loan Charges
*LoanChargesApi* | [**retrieveLoanCharge**](docs/LoanChargesApi.md#retrieveloancharge) | **GET** /v1/loans/{loanId}/charges/{loanChargeId} | Retrieve a Loan Charge
*LoanChargesApi* | [**retrieveLoanCharge1**](docs/LoanChargesApi.md#retrieveloancharge1) | **GET** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Retrieve a Loan Charge
*LoanChargesApi* | [**retrieveLoanCharge2**](docs/LoanChargesApi.md#retrieveloancharge2) | **GET** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Retrieve a Loan Charge
*LoanChargesApi* | [**retrieveLoanCharge3**](docs/LoanChargesApi.md#retrieveloancharge3) | **GET** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Retrieve a Loan Charge
*LoanChargesApi* | [**retrieveTemplate8**](docs/LoanChargesApi.md#retrievetemplate8) | **GET** /v1/loans/{loanId}/charges/template | Retrieve Loan Charges Template
*LoanChargesApi* | [**retrieveTemplate9**](docs/LoanChargesApi.md#retrievetemplate9) | **GET** /v1/loans/external-id/{loanExternalId}/charges/template | Retrieve Loan Charges Template
*LoanChargesApi* | [**updateLoanCharge**](docs/LoanChargesApi.md#updateloancharge) | **PUT** /v1/loans/{loanId}/charges/{loanChargeId} | Update a Loan Charge
*LoanChargesApi* | [**updateLoanCharge1**](docs/LoanChargesApi.md#updateloancharge1) | **PUT** /v1/loans/{loanId}/charges/external-id/{loanChargeExternalId} | Update a Loan Charge
*LoanChargesApi* | [**updateLoanCharge2**](docs/LoanChargesApi.md#updateloancharge2) | **PUT** /v1/loans/external-id/{loanExternalId}/charges/{loanChargeId} | Update a Loan Charge
*LoanChargesApi* | [**updateLoanCharge3**](docs/LoanChargesApi.md#updateloancharge3) | **PUT** /v1/loans/external-id/{loanExternalId}/charges/external-id/{loanChargeExternalId} | Update a Loan Charge
*LoanCollateralApi* | [**createCollateral**](docs/LoanCollateralApi.md#createcollateral) | **POST** /v1/loans/{loanId}/collaterals | Create a Collateral
*LoanCollateralApi* | [**deleteCollateral**](docs/LoanCollateralApi.md#deletecollateral) | **DELETE** /v1/loans/{loanId}/collaterals/{collateralId} | Remove a Collateral
*LoanCollateralApi* | [**newCollateralTemplate**](docs/LoanCollateralApi.md#newcollateraltemplate) | **GET** /v1/loans/{loanId}/collaterals/template | Retrieve Collateral Details Template
*LoanCollateralApi* | [**retrieveCollateralDetails**](docs/LoanCollateralApi.md#retrievecollateraldetails) | **GET** /v1/loans/{loanId}/collaterals | List Loan Collaterals
*LoanCollateralApi* | [**retrieveCollateralDetails1**](docs/LoanCollateralApi.md#retrievecollateraldetails1) | **GET** /v1/loans/{loanId}/collaterals/{collateralId} | Retrieve a Collateral
*LoanCollateralApi* | [**updateCollateral**](docs/LoanCollateralApi.md#updatecollateral) | **PUT** /v1/loans/{loanId}/collaterals/{collateralId} | Update a Collateral
*LoanCollateralManagementApi* | [**deleteLoanCollateral**](docs/LoanCollateralManagementApi.md#deleteloancollateral) | **DELETE** /v1/loan-collateral-management/{id} | Delete Loan Collateral
*LoanCollateralManagementApi* | [**getLoanCollateral**](docs/LoanCollateralManagementApi.md#getloancollateral) | **GET** /v1/loan-collateral-management/{collateralId} | Get Loan Collateral Details
*LoanDisbursementDetailsApi* | [**addAndDeleteDisbursementDetail**](docs/LoanDisbursementDetailsApi.md#addanddeletedisbursementdetail) | **PUT** /v1/loans/{loanId}/disbursements/editDisbursements | 
*LoanDisbursementDetailsApi* | [**retriveDetail**](docs/LoanDisbursementDetailsApi.md#retrivedetail) | **GET** /v1/loans/{loanId}/disbursements/{disbursementId} | 
*LoanDisbursementDetailsApi* | [**updateDisbursementDate**](docs/LoanDisbursementDetailsApi.md#updatedisbursementdate) | **PUT** /v1/loans/{loanId}/disbursements/{disbursementId} | 
*LoanInterestPauseApi* | [**createInterestPause**](docs/LoanInterestPauseApi.md#createinterestpause) | **POST** /v1/loans/{loanId}/interest-pauses | Create a new interest pause period for a loan
*LoanInterestPauseApi* | [**createInterestPauseByExternalId**](docs/LoanInterestPauseApi.md#createinterestpausebyexternalid) | **POST** /v1/loans/external-id/{loanExternalId}/interest-pauses | Create a new interest pause for a loan using external ID
*LoanInterestPauseApi* | [**deleteInterestPause**](docs/LoanInterestPauseApi.md#deleteinterestpause) | **DELETE** /v1/loans/{loanId}/interest-pauses/{variationId} | Delete an interest pause period
*LoanInterestPauseApi* | [**deleteInterestPauseByExternalId**](docs/LoanInterestPauseApi.md#deleteinterestpausebyexternalid) | **DELETE** /v1/loans/external-id/{loanExternalId}/interest-pauses/{variationId} | Delete an interest pause period by external id
*LoanInterestPauseApi* | [**retrieveInterestPauses**](docs/LoanInterestPauseApi.md#retrieveinterestpauses) | **GET** /v1/loans/{loanId}/interest-pauses | Retrieve all interest pause periods for a loan
*LoanInterestPauseApi* | [**retrieveInterestPausesByExternalId**](docs/LoanInterestPauseApi.md#retrieveinterestpausesbyexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/interest-pauses | Retrieve all interest pause periods for a loan using external ID
*LoanInterestPauseApi* | [**updateInterestPause**](docs/LoanInterestPauseApi.md#updateinterestpause) | **PUT** /v1/loans/{loanId}/interest-pauses/{variationId} | Update an interest pause period
*LoanInterestPauseApi* | [**updateInterestPauseByExternalId**](docs/LoanInterestPauseApi.md#updateinterestpausebyexternalid) | **PUT** /v1/loans/external-id/{loanExternalId}/interest-pauses/{variationId} | Update an interest pause period by external id
*LoanProductsApi* | [**createLoanProduct**](docs/LoanProductsApi.md#createloanproduct) | **POST** /v1/loanproducts | Create a Loan Product
*LoanProductsApi* | [**retrieveAllLoanProducts**](docs/LoanProductsApi.md#retrieveallloanproducts) | **GET** /v1/loanproducts | List Loan Products
*LoanProductsApi* | [**retrieveLoanProductDetails**](docs/LoanProductsApi.md#retrieveloanproductdetails) | **GET** /v1/loanproducts/{productId} | Retrieve a Loan Product
*LoanProductsApi* | [**retrieveLoanProductDetails1**](docs/LoanProductsApi.md#retrieveloanproductdetails1) | **GET** /v1/loanproducts/external-id/{externalProductId} | Retrieve a Loan Product
*LoanProductsApi* | [**retrieveTemplate11**](docs/LoanProductsApi.md#retrievetemplate11) | **GET** /v1/loanproducts/template | Retrieve Loan Product Details Template
*LoanProductsApi* | [**updateLoanProduct**](docs/LoanProductsApi.md#updateloanproduct) | **PUT** /v1/loanproducts/{productId} | Update a Loan Product
*LoanProductsApi* | [**updateLoanProduct1**](docs/LoanProductsApi.md#updateloanproduct1) | **PUT** /v1/loanproducts/external-id/{externalProductId} | Update a Loan Product
*LoanReschedulingApi* | [**calculateLoanScheduleOrSubmitVariableSchedule**](docs/LoanReschedulingApi.md#calculateloanscheduleorsubmitvariableschedule) | **POST** /v1/loans/{loanId}/schedule | Calculate loan repayment schedule based on Loan term variations | Updates loan repayment schedule based on Loan term variations | Updates loan repayment schedule by removing Loan term variations
*LoanTransactionsApi* | [**adjustLoanTransaction**](docs/LoanTransactionsApi.md#adjustloantransaction) | **POST** /v1/loans/{loanId}/transactions/{transactionId} | Adjust a Transaction
*LoanTransactionsApi* | [**adjustLoanTransaction1**](docs/LoanTransactionsApi.md#adjustloantransaction1) | **POST** /v1/loans/{loanId}/transactions/external-id/{externalTransactionId} | Adjust a Transaction
*LoanTransactionsApi* | [**adjustLoanTransaction2**](docs/LoanTransactionsApi.md#adjustloantransaction2) | **POST** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Adjust a Transaction
*LoanTransactionsApi* | [**adjustLoanTransaction3**](docs/LoanTransactionsApi.md#adjustloantransaction3) | **POST** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{externalTransactionId} | Adjust a Transaction
*LoanTransactionsApi* | [**executeLoanTransaction**](docs/LoanTransactionsApi.md#executeloantransaction) | **POST** /v1/loans/{loanId}/transactions | Significant Loan Transactions
*LoanTransactionsApi* | [**executeLoanTransaction1**](docs/LoanTransactionsApi.md#executeloantransaction1) | **POST** /v1/loans/external-id/{loanExternalId}/transactions | Significant Loan Transactions
*LoanTransactionsApi* | [**retrieveTransaction**](docs/LoanTransactionsApi.md#retrievetransaction) | **GET** /v1/loans/{loanId}/transactions/{transactionId} | Retrieve a Transaction Details
*LoanTransactionsApi* | [**retrieveTransactionByLoanExternalIdAndTransactionExternalId**](docs/LoanTransactionsApi.md#retrievetransactionbyloanexternalidandtransactionexternalid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{externalTransactionId} | Retrieve a Transaction Details
*LoanTransactionsApi* | [**retrieveTransactionByLoanExternalIdAndTransactionId**](docs/LoanTransactionsApi.md#retrievetransactionbyloanexternalidandtransactionid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Retrieve a Transaction Details
*LoanTransactionsApi* | [**retrieveTransactionByTransactionExternalId**](docs/LoanTransactionsApi.md#retrievetransactionbytransactionexternalid) | **GET** /v1/loans/{loanId}/transactions/external-id/{externalTransactionId} | Retrieve a Transaction Details
*LoanTransactionsApi* | [**retrieveTransactionTemplate**](docs/LoanTransactionsApi.md#retrievetransactiontemplate) | **GET** /v1/loans/{loanId}/transactions/template | Retrieve Loan Transaction Template
*LoanTransactionsApi* | [**retrieveTransactionTemplate1**](docs/LoanTransactionsApi.md#retrievetransactiontemplate1) | **GET** /v1/loans/external-id/{loanExternalId}/transactions/template | Retrieve Loan Transaction Template
*LoanTransactionsApi* | [**retrieveTransactionsByExternalLoanId**](docs/LoanTransactionsApi.md#retrievetransactionsbyexternalloanid) | **GET** /v1/loans/external-id/{loanExternalId}/transactions | Retrieve Transactions
*LoanTransactionsApi* | [**retrieveTransactionsByLoanId**](docs/LoanTransactionsApi.md#retrievetransactionsbyloanid) | **GET** /v1/loans/{loanId}/transactions | Retrieve Transactions
*LoanTransactionsApi* | [**undoWaiveCharge**](docs/LoanTransactionsApi.md#undowaivecharge) | **PUT** /v1/loans/{loanId}/transactions/{transactionId} | Undo a Waive Charge Transaction
*LoanTransactionsApi* | [**undoWaiveCharge1**](docs/LoanTransactionsApi.md#undowaivecharge1) | **PUT** /v1/loans/{loanId}/transactions/external-id/{transactionExternalId} | Undo a Waive Charge Transaction
*LoanTransactionsApi* | [**undoWaiveCharge2**](docs/LoanTransactionsApi.md#undowaivecharge2) | **PUT** /v1/loans/external-id/{loanExternalId}/transactions/{transactionId} | Undo a Waive Charge Transaction
*LoanTransactionsApi* | [**undoWaiveCharge3**](docs/LoanTransactionsApi.md#undowaivecharge3) | **PUT** /v1/loans/external-id/{loanExternalId}/transactions/external-id/{transactionExternalId} | Undo a Waive Charge Transaction
*LoansApi* | [**calculateLoanScheduleOrSubmitLoanApplication**](docs/LoansApi.md#calculateloanscheduleorsubmitloanapplication) | **POST** /v1/loans | Calculate loan repayment schedule | Submit a new Loan Application
*LoansApi* | [**createLoanDelinquencyAction**](docs/LoansApi.md#createloandelinquencyaction) | **POST** /v1/loans/{loanId}/delinquency-actions | Adds a new delinquency action for a loan
*LoansApi* | [**createLoanDelinquencyAction1**](docs/LoansApi.md#createloandelinquencyaction1) | **POST** /v1/loans/external-id/{loanExternalId}/delinquency-actions | Adds a new delinquency action for a loan
*LoansApi* | [**deleteLoanApplication**](docs/LoansApi.md#deleteloanapplication) | **DELETE** /v1/loans/{loanId} | Delete a Loan Application
*LoansApi* | [**deleteLoanApplication1**](docs/LoansApi.md#deleteloanapplication1) | **DELETE** /v1/loans/external-id/{loanExternalId} | Delete a Loan Application
*LoansApi* | [**getDelinquencyTagHistory**](docs/LoansApi.md#getdelinquencytaghistory) | **GET** /v1/loans/{loanId}/delinquencytags | Retrieve the Loan Delinquency Tag history using the Loan Id
*LoansApi* | [**getDelinquencyTagHistory1**](docs/LoansApi.md#getdelinquencytaghistory1) | **GET** /v1/loans/external-id/{loanExternalId}/delinquencytags | Retrieve the Loan Delinquency Tag history using the Loan Id
*LoansApi* | [**getGlimRepaymentTemplate**](docs/LoansApi.md#getglimrepaymenttemplate) | **GET** /v1/loans/glimAccount/{glimId} | 
*LoansApi* | [**getLoanApprovedAmountHistory**](docs/LoansApi.md#getloanapprovedamounthistory) | **GET** /v1/loans/{loanId}/approved-amount | Collects and returns the approved amount modification history for a given loan
*LoansApi* | [**getLoanApprovedAmountHistory1**](docs/LoansApi.md#getloanapprovedamounthistory1) | **GET** /v1/loans/external-id/{loanExternalId}/approved-amount | Collects and returns the approved amount modification history for a given loan
*LoansApi* | [**getLoanDelinquencyActions**](docs/LoansApi.md#getloandelinquencyactions) | **GET** /v1/loans/{loanId}/delinquency-actions | Retrieve delinquency actions related to the loan
*LoansApi* | [**getLoanDelinquencyActions1**](docs/LoansApi.md#getloandelinquencyactions1) | **GET** /v1/loans/external-id/{loanExternalId}/delinquency-actions | Retrieve delinquency actions related to the loan
*LoansApi* | [**getLoanRepaymentTemplate**](docs/LoansApi.md#getloanrepaymenttemplate) | **GET** /v1/loans/repayments/downloadtemplate | 
*LoansApi* | [**getLoansTemplate**](docs/LoansApi.md#getloanstemplate) | **GET** /v1/loans/downloadtemplate | 
*LoansApi* | [**glimStateTransitions**](docs/LoansApi.md#glimstatetransitions) | **POST** /v1/loans/glimAccount/{glimId} | Approve GLIM Application | Undo GLIM Application Approval | Reject GLIM Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal
*LoansApi* | [**modifyLoanApplication**](docs/LoansApi.md#modifyloanapplication) | **PUT** /v1/loans/{loanId} | Modify a loan application
*LoansApi* | [**modifyLoanApplication1**](docs/LoansApi.md#modifyloanapplication1) | **PUT** /v1/loans/external-id/{loanExternalId} | Modify a loan application
*LoansApi* | [**modifyLoanApprovedAmount**](docs/LoansApi.md#modifyloanapprovedamount) | **PUT** /v1/loans/{loanId}/approved-amount | Modifies the approved amount of the loan
*LoansApi* | [**modifyLoanApprovedAmount1**](docs/LoansApi.md#modifyloanapprovedamount1) | **PUT** /v1/loans/external-id/{loanExternalId}/approved-amount | Modifies the approved amount of the loan
*LoansApi* | [**modifyLoanAvailableDisbursementAmount**](docs/LoansApi.md#modifyloanavailabledisbursementamount) | **PUT** /v1/loans/{loanId}/available-disbursement-amount | Modifies the available disbursement amount of the loan
*LoansApi* | [**modifyLoanAvailableDisbursementAmount1**](docs/LoansApi.md#modifyloanavailabledisbursementamount1) | **PUT** /v1/loans/external-id/{loanExternalId}/available-disbursement-amount | Modifies the available disbursement amount of the loan
*LoansApi* | [**postLoanRepaymentTemplate**](docs/LoansApi.md#postloanrepaymenttemplate) | **POST** /v1/loans/repayments/uploadtemplate | 
*LoansApi* | [**postLoanTemplate**](docs/LoansApi.md#postloantemplate) | **POST** /v1/loans/uploadtemplate | 
*LoansApi* | [**retrieveAll27**](docs/LoansApi.md#retrieveall27) | **GET** /v1/loans | List Loans
*LoansApi* | [**retrieveApprovalTemplate**](docs/LoansApi.md#retrieveapprovaltemplate) | **GET** /v1/loans/{loanId}/template | 
*LoansApi* | [**retrieveApprovalTemplate1**](docs/LoansApi.md#retrieveapprovaltemplate1) | **GET** /v1/loans/external-id/{loanExternalId}/template | 
*LoansApi* | [**retrieveLoan**](docs/LoansApi.md#retrieveloan) | **GET** /v1/loans/{loanId} | Retrieve a Loan
*LoansApi* | [**retrieveLoan1**](docs/LoansApi.md#retrieveloan1) | **GET** /v1/loans/external-id/{loanExternalId} | Retrieve a Loan
*LoansApi* | [**stateTransitions**](docs/LoansApi.md#statetransitions) | **POST** /v1/loans/{loanId} | Approve Loan Application | Recover Loan Guarantee | Undo Loan Application Approval | Assign a Loan Officer | Unassign a Loan Officer | Reject Loan Application | Applicant Withdraws from Loan Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal
*LoansApi* | [**stateTransitions1**](docs/LoansApi.md#statetransitions1) | **POST** /v1/loans/external-id/{loanExternalId} | Approve Loan Application | Recover Loan Guarantee | Undo Loan Application Approval | Assign a Loan Officer | Unassign a Loan Officer | Reject Loan Application | Applicant Withdraws from Loan Application | Disburse Loan Disburse Loan To Savings Account | Undo Loan Disbursal
*LoansApi* | [**template10**](docs/LoansApi.md#template10) | **GET** /v1/loans/template | Retrieve Loan Details Template
*LoansPointInTimeApi* | [**retrieveLoanPointInTime**](docs/LoansPointInTimeApi.md#retrieveloanpointintime) | **GET** /v1/loans/at-date/{loanId} | 
*LoansPointInTimeApi* | [**retrieveLoanPointInTimeByExternalId**](docs/LoansPointInTimeApi.md#retrieveloanpointintimebyexternalid) | **GET** /v1/loans/at-date/external-id/{loanExternalId} | 
*LoansPointInTimeApi* | [**retrieveLoansPointInTime**](docs/LoansPointInTimeApi.md#retrieveloanspointintime) | **POST** /v1/loans/at-date/search | 
*LoansPointInTimeApi* | [**retrieveLoansPointInTimeByExternalIds**](docs/LoansPointInTimeApi.md#retrieveloanspointintimebyexternalids) | **POST** /v1/loans/at-date/search/external-id | 
*MakerCheckerOr4EyeFunctionalityApi* | [**approveMakerCheckerEntry**](docs/MakerCheckerOr4EyeFunctionalityApi.md#approvemakercheckerentry) | **POST** /v1/makercheckers/{auditId} | Approve Maker Checker Entry | Reject Maker Checker Entry
*MakerCheckerOr4EyeFunctionalityApi* | [**deleteMakerCheckerEntry**](docs/MakerCheckerOr4EyeFunctionalityApi.md#deletemakercheckerentry) | **DELETE** /v1/makercheckers/{auditId} | Delete Maker Checker Entry
*MakerCheckerOr4EyeFunctionalityApi* | [**retrieveAuditSearchTemplate1**](docs/MakerCheckerOr4EyeFunctionalityApi.md#retrieveauditsearchtemplate1) | **GET** /v1/makercheckers/searchtemplate | Maker Checker Search Template
*MakerCheckerOr4EyeFunctionalityApi* | [**retrieveCommands**](docs/MakerCheckerOr4EyeFunctionalityApi.md#retrievecommands) | **GET** /v1/makercheckers | List Maker Checker Entries
*MappingFinancialActivitiesToAccountsApi* | [**createGLAccount**](docs/MappingFinancialActivitiesToAccountsApi.md#createglaccount) | **POST** /v1/financialactivityaccounts | Create a new Financial Activity to Accounts Mapping
*MappingFinancialActivitiesToAccountsApi* | [**deleteGLAccount**](docs/MappingFinancialActivitiesToAccountsApi.md#deleteglaccount) | **DELETE** /v1/financialactivityaccounts/{mappingId} | Delete a Financial Activity to Account Mapping
*MappingFinancialActivitiesToAccountsApi* | [**retreive**](docs/MappingFinancialActivitiesToAccountsApi.md#retreive) | **GET** /v1/financialactivityaccounts/{mappingId} | Retrieve a Financial Activity to Account Mapping 
*MappingFinancialActivitiesToAccountsApi* | [**retrieveAll**](docs/MappingFinancialActivitiesToAccountsApi.md#retrieveall) | **GET** /v1/financialactivityaccounts | List Financial Activities to Accounts Mappings
*MappingFinancialActivitiesToAccountsApi* | [**retrieveTemplate**](docs/MappingFinancialActivitiesToAccountsApi.md#retrievetemplate) | **GET** /v1/financialactivityaccounts/template | 
*MappingFinancialActivitiesToAccountsApi* | [**updateGLAccount**](docs/MappingFinancialActivitiesToAccountsApi.md#updateglaccount) | **PUT** /v1/financialactivityaccounts/{mappingId} | Update a Financial Activity to Account Mapping
*MeetingsApi* | [**createMeeting**](docs/MeetingsApi.md#createmeeting) | **POST** /v1/{entityType}/{entityId}/meetings | 
*MeetingsApi* | [**deleteMeeting**](docs/MeetingsApi.md#deletemeeting) | **DELETE** /v1/{entityType}/{entityId}/meetings/{meetingId} | 
*MeetingsApi* | [**performMeetingCommands**](docs/MeetingsApi.md#performmeetingcommands) | **POST** /v1/{entityType}/{entityId}/meetings/{meetingId} | 
*MeetingsApi* | [**retrieveMeeting**](docs/MeetingsApi.md#retrievemeeting) | **GET** /v1/{entityType}/{entityId}/meetings/{meetingId} | 
*MeetingsApi* | [**retrieveMeetings**](docs/MeetingsApi.md#retrievemeetings) | **GET** /v1/{entityType}/{entityId}/meetings | 
*MeetingsApi* | [**template11**](docs/MeetingsApi.md#template11) | **GET** /v1/{entityType}/{entityId}/meetings/template | 
*MeetingsApi* | [**updateMeeting**](docs/MeetingsApi.md#updatemeeting) | **PUT** /v1/{entityType}/{entityId}/meetings/{meetingId} | 
*MixMappingApi* | [**retrieveTaxonomyMapping**](docs/MixMappingApi.md#retrievetaxonomymapping) | **GET** /v1/mixmapping | 
*MixMappingApi* | [**updateTaxonomyMapping**](docs/MixMappingApi.md#updatetaxonomymapping) | **PUT** /v1/mixmapping | 
*MixReportApi* | [**retrieveXBRLReport**](docs/MixReportApi.md#retrievexbrlreport) | **GET** /v1/mixreport | 
*MixTaxonomyApi* | [**retrieveAll14**](docs/MixTaxonomyApi.md#retrieveall14) | **GET** /v1/mixtaxonomy | 
*NotesApi* | [**addNewNote**](docs/NotesApi.md#addnewnote) | **POST** /v1/{resourceType}/{resourceId}/notes | Add a Resource Note
*NotesApi* | [**deleteNote**](docs/NotesApi.md#deletenote) | **DELETE** /v1/{resourceType}/{resourceId}/notes/{noteId} | Delete a Resource Note
*NotesApi* | [**retrieveNote**](docs/NotesApi.md#retrievenote) | **GET** /v1/{resourceType}/{resourceId}/notes/{noteId} | Retrieve a Resource Note
*NotesApi* | [**retrieveNotesByResource**](docs/NotesApi.md#retrievenotesbyresource) | **GET** /v1/{resourceType}/{resourceId}/notes | Retrieve a Resource\&#39;s description
*NotesApi* | [**updateNote**](docs/NotesApi.md#updatenote) | **PUT** /v1/{resourceType}/{resourceId}/notes/{noteId} | Update a Resource Note
*NotificationApi* | [**getAllNotifications**](docs/NotificationApi.md#getallnotifications) | **GET** /v1/notifications | 
*NotificationApi* | [**update5**](docs/NotificationApi.md#update5) | **PUT** /v1/notifications | 
*OfficesApi* | [**createOffice**](docs/OfficesApi.md#createoffice) | **POST** /v1/offices | Create an Office
*OfficesApi* | [**getOfficeTemplate**](docs/OfficesApi.md#getofficetemplate) | **GET** /v1/offices/downloadtemplate | 
*OfficesApi* | [**postOfficeTemplate**](docs/OfficesApi.md#postofficetemplate) | **POST** /v1/offices/uploadtemplate | 
*OfficesApi* | [**retrieveOffice**](docs/OfficesApi.md#retrieveoffice) | **GET** /v1/offices/{officeId} | Retrieve an Office
*OfficesApi* | [**retrieveOfficeByExternalId**](docs/OfficesApi.md#retrieveofficebyexternalid) | **GET** /v1/offices/external-id/{externalId} | Retrieve an Office using external id
*OfficesApi* | [**retrieveOfficeTemplate1**](docs/OfficesApi.md#retrieveofficetemplate1) | **GET** /v1/offices/template | Retrieve Office Details Template
*OfficesApi* | [**retrieveOffices**](docs/OfficesApi.md#retrieveoffices) | **GET** /v1/offices | List Offices
*OfficesApi* | [**updateOffice**](docs/OfficesApi.md#updateoffice) | **PUT** /v1/offices/{officeId} | Update Office
*OfficesApi* | [**updateOfficeWithExternalId**](docs/OfficesApi.md#updateofficewithexternalid) | **PUT** /v1/offices/external-id/{externalId} | Update Office
*PasswordPreferencesApi* | [**retrieve1**](docs/PasswordPreferencesApi.md#retrieve1) | **GET** /v1/passwordpreferences | 
*PasswordPreferencesApi* | [**template21**](docs/PasswordPreferencesApi.md#template21) | **GET** /v1/passwordpreferences/template | List Application Password validation policies
*PasswordPreferencesApi* | [**update25**](docs/PasswordPreferencesApi.md#update25) | **PUT** /v1/passwordpreferences | Update password preferences
*PaymentTypeApi* | [**createPaymentType**](docs/PaymentTypeApi.md#createpaymenttype) | **POST** /v1/paymenttypes | Create a Payment Type
*PaymentTypeApi* | [**deleteCode1**](docs/PaymentTypeApi.md#deletecode1) | **DELETE** /v1/paymenttypes/{paymentTypeId} | Delete a Payment Type
*PaymentTypeApi* | [**getAllPaymentTypes**](docs/PaymentTypeApi.md#getallpaymenttypes) | **GET** /v1/paymenttypes | Retrieve all Payment Types
*PaymentTypeApi* | [**retrieveOnePaymentType**](docs/PaymentTypeApi.md#retrieveonepaymenttype) | **GET** /v1/paymenttypes/{paymentTypeId} | Retrieve a Payment Type
*PaymentTypeApi* | [**updatePaymentType**](docs/PaymentTypeApi.md#updatepaymenttype) | **PUT** /v1/paymenttypes/{paymentTypeId} | Update a Payment Type
*PeriodicAccrualAccountingApi* | [**executePeriodicAccrualAccounting**](docs/PeriodicAccrualAccountingApi.md#executeperiodicaccrualaccounting) | **POST** /v1/runaccruals | Executes Periodic Accrual Accounting
*PermissionsApi* | [**retrieveAllPermissions**](docs/PermissionsApi.md#retrieveallpermissions) | **GET** /v1/permissions | List Application Permissions
*PermissionsApi* | [**updatePermissionsDetails**](docs/PermissionsApi.md#updatepermissionsdetails) | **PUT** /v1/permissions | Enable/Disable Permissions for Maker Checker
*PocketApi* | [**handleCommands8**](docs/PocketApi.md#handlecommands8) | **POST** /v1/self/pockets | Link/delink accounts to/from pocket
*PocketApi* | [**retrieveAll37**](docs/PocketApi.md#retrieveall37) | **GET** /v1/self/pockets | Retrieve accounts linked to pocket
*PovertyLineApi* | [**retrieveAll12**](docs/PovertyLineApi.md#retrieveall12) | **GET** /v1/povertyLine/{ppiName} | 
*PovertyLineApi* | [**retrieveAll13**](docs/PovertyLineApi.md#retrieveall13) | **GET** /v1/povertyLine/{ppiName}/{likelihoodId} | 
*ProductMixApi* | [**createProductMix**](docs/ProductMixApi.md#createproductmix) | **POST** /v1/loanproducts/{productId}/productmix | 
*ProductMixApi* | [**deleteProductMix**](docs/ProductMixApi.md#deleteproductmix) | **DELETE** /v1/loanproducts/{productId}/productmix | 
*ProductMixApi* | [**retrieveTemplate12**](docs/ProductMixApi.md#retrievetemplate12) | **GET** /v1/loanproducts/{productId}/productmix | 
*ProductMixApi* | [**updateProductMix**](docs/ProductMixApi.md#updateproductmix) | **PUT** /v1/loanproducts/{productId}/productmix | 
*ProductsApi* | [**createProduct**](docs/ProductsApi.md#createproduct) | **POST** /v1/products/{type} | Create a Share Product
*ProductsApi* | [**handleCommands3**](docs/ProductsApi.md#handlecommands3) | **POST** /v1/products/{type}/{productId} | 
*ProductsApi* | [**retrieveAllProducts**](docs/ProductsApi.md#retrieveallproducts) | **GET** /v1/products/{type} | List Share Products
*ProductsApi* | [**retrieveProduct**](docs/ProductsApi.md#retrieveproduct) | **GET** /v1/products/{type}/{productId} | Retrieve a Share Product
*ProductsApi* | [**retrieveTemplate13**](docs/ProductsApi.md#retrievetemplate13) | **GET** /v1/products/{type}/template | 
*ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateproduct) | **PUT** /v1/products/{type}/{productId} | Update a Share Product
*ProgressiveLoanApi* | [**fetchModel**](docs/ProgressiveLoanApi.md#fetchmodel) | **GET** /v1/internal/loan/progressive/{loanId}/model | Fetch ProgressiveLoanInterestScheduleModel
*ProgressiveLoanApi* | [**updateModel**](docs/ProgressiveLoanApi.md#updatemodel) | **POST** /v1/internal/loan/progressive/{loanId}/model | Update and Save ProgressiveLoanInterestScheduleModel
*ProvisioningCategoryApi* | [**createProvisioningCategory**](docs/ProvisioningCategoryApi.md#createprovisioningcategory) | **POST** /v1/provisioningcategory | 
*ProvisioningCategoryApi* | [**deleteProvisioningCategory**](docs/ProvisioningCategoryApi.md#deleteprovisioningcategory) | **DELETE** /v1/provisioningcategory/{categoryId} | 
*ProvisioningCategoryApi* | [**retrieveAll15**](docs/ProvisioningCategoryApi.md#retrieveall15) | **GET** /v1/provisioningcategory | 
*ProvisioningCategoryApi* | [**updateProvisioningCategory**](docs/ProvisioningCategoryApi.md#updateprovisioningcategory) | **PUT** /v1/provisioningcategory/{categoryId} | 
*ProvisioningCriteriaApi* | [**createProvisioningCriteria**](docs/ProvisioningCriteriaApi.md#createprovisioningcriteria) | **POST** /v1/provisioningcriteria | Create a new Provisioning Criteria
*ProvisioningCriteriaApi* | [**deleteProvisioningCriteria**](docs/ProvisioningCriteriaApi.md#deleteprovisioningcriteria) | **DELETE** /v1/provisioningcriteria/{criteriaId} | Deletes Provisioning Criteria
*ProvisioningCriteriaApi* | [**retrieveAllProvisioningCriterias**](docs/ProvisioningCriteriaApi.md#retrieveallprovisioningcriterias) | **GET** /v1/provisioningcriteria | Retrieves all created Provisioning Criterias
*ProvisioningCriteriaApi* | [**retrieveProvisioningCriteria**](docs/ProvisioningCriteriaApi.md#retrieveprovisioningcriteria) | **GET** /v1/provisioningcriteria/{criteriaId} | Retrieves a Provisioning Criteria
*ProvisioningCriteriaApi* | [**retrieveTemplate3**](docs/ProvisioningCriteriaApi.md#retrievetemplate3) | **GET** /v1/provisioningcriteria/template | 
*ProvisioningCriteriaApi* | [**updateProvisioningCriteria**](docs/ProvisioningCriteriaApi.md#updateprovisioningcriteria) | **PUT** /v1/provisioningcriteria/{criteriaId} | Updates a new Provisioning Criteria
*ProvisioningEntriesApi* | [**createProvisioningEntries**](docs/ProvisioningEntriesApi.md#createprovisioningentries) | **POST** /v1/provisioningentries | Create new Provisioning Entries
*ProvisioningEntriesApi* | [**modifyProvisioningEntry**](docs/ProvisioningEntriesApi.md#modifyprovisioningentry) | **POST** /v1/provisioningentries/{entryId} | Recreates Provisioning Entry
*ProvisioningEntriesApi* | [**retrieveAllProvisioningEntries**](docs/ProvisioningEntriesApi.md#retrieveallprovisioningentries) | **GET** /v1/provisioningentries | List all Provisioning Entries
*ProvisioningEntriesApi* | [**retrieveProviioningEntries**](docs/ProvisioningEntriesApi.md#retrieveproviioningentries) | **GET** /v1/provisioningentries/entries | 
*ProvisioningEntriesApi* | [**retrieveProvisioningEntry**](docs/ProvisioningEntriesApi.md#retrieveprovisioningentry) | **GET** /v1/provisioningentries/{entryId} | Retrieves a Provisioning Entry
*RateApi* | [**createRate**](docs/RateApi.md#createrate) | **POST** /v1/rates | 
*RateApi* | [**getAllRates**](docs/RateApi.md#getallrates) | **GET** /v1/rates | 
*RateApi* | [**retrieveRate**](docs/RateApi.md#retrieverate) | **GET** /v1/rates/{rateId} | 
*RateApi* | [**updateRate**](docs/RateApi.md#updaterate) | **PUT** /v1/rates/{rateId} | 
*RecurringDepositAccountApi* | [**accountClosureTemplate1**](docs/RecurringDepositAccountApi.md#accountclosuretemplate1) | **GET** /v1/recurringdepositaccounts/{accountId}/template | 
*RecurringDepositAccountApi* | [**delete16**](docs/RecurringDepositAccountApi.md#delete16) | **DELETE** /v1/recurringdepositaccounts/{accountId} | Delete a recurring deposit application
*RecurringDepositAccountApi* | [**getRecurringDepositTemplate**](docs/RecurringDepositAccountApi.md#getrecurringdeposittemplate) | **GET** /v1/recurringdepositaccounts/downloadtemplate | 
*RecurringDepositAccountApi* | [**getRecurringDepositTransactionTemplate**](docs/RecurringDepositAccountApi.md#getrecurringdeposittransactiontemplate) | **GET** /v1/recurringdepositaccounts/transactions/downloadtemplate | 
*RecurringDepositAccountApi* | [**handleCommands5**](docs/RecurringDepositAccountApi.md#handlecommands5) | **POST** /v1/recurringdepositaccounts/{accountId} | Approve recurring deposit application | Undo approval recurring deposit application | Reject recurring deposit application | Withdraw recurring deposit application | Activate a recurring deposit account | Update the recommended deposit amount for a recurring deposit account | Close a recurring deposit account | Premature Close a recurring deposit account | Calculate Premature amount on Recurring deposit account | Calculate Interest on recurring Deposit Account | Post Interest on recurring Deposit Account
*RecurringDepositAccountApi* | [**postRecurringDepositTemplate**](docs/RecurringDepositAccountApi.md#postrecurringdeposittemplate) | **POST** /v1/recurringdepositaccounts/uploadtemplate | 
*RecurringDepositAccountApi* | [**postRecurringDepositTransactionsTemplate**](docs/RecurringDepositAccountApi.md#postrecurringdeposittransactionstemplate) | **POST** /v1/recurringdepositaccounts/transactions/uploadtemplate | 
*RecurringDepositAccountApi* | [**retrieveAll31**](docs/RecurringDepositAccountApi.md#retrieveall31) | **GET** /v1/recurringdepositaccounts | List Recurring deposit applications/accounts
*RecurringDepositAccountApi* | [**retrieveOne22**](docs/RecurringDepositAccountApi.md#retrieveone22) | **GET** /v1/recurringdepositaccounts/{accountId} | Retrieve a recurring deposit application/account
*RecurringDepositAccountApi* | [**submitApplication1**](docs/RecurringDepositAccountApi.md#submitapplication1) | **POST** /v1/recurringdepositaccounts | Submit new recurring deposit application
*RecurringDepositAccountApi* | [**template13**](docs/RecurringDepositAccountApi.md#template13) | **GET** /v1/recurringdepositaccounts/template | Retrieve recurring Deposit Account Template
*RecurringDepositAccountApi* | [**update18**](docs/RecurringDepositAccountApi.md#update18) | **PUT** /v1/recurringdepositaccounts/{accountId} | Modify a recurring deposit application
*RecurringDepositAccountTransactionsApi* | [**handleTransactionCommands**](docs/RecurringDepositAccountTransactionsApi.md#handletransactioncommands) | **POST** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId} | Adjust Transaction | Undo transaction
*RecurringDepositAccountTransactionsApi* | [**retrieveOne21**](docs/RecurringDepositAccountTransactionsApi.md#retrieveone21) | **GET** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/{transactionId} | Retrieve Recurring Deposit Account Transaction
*RecurringDepositAccountTransactionsApi* | [**retrieveTemplate16**](docs/RecurringDepositAccountTransactionsApi.md#retrievetemplate16) | **GET** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions/template | Retrieve Recurring Deposit Account Transaction Template
*RecurringDepositAccountTransactionsApi* | [**transaction1**](docs/RecurringDepositAccountTransactionsApi.md#transaction1) | **POST** /v1/recurringdepositaccounts/{recurringDepositAccountId}/transactions | Deposit Transaction | Withdrawal Transaction
*RecurringDepositProductApi* | [**create12**](docs/RecurringDepositProductApi.md#create12) | **POST** /v1/recurringdepositproducts | Create a Recurring Deposit Product
*RecurringDepositProductApi* | [**delete17**](docs/RecurringDepositProductApi.md#delete17) | **DELETE** /v1/recurringdepositproducts/{productId} | Delete a Recurring Deposit Product
*RecurringDepositProductApi* | [**retrieveAll32**](docs/RecurringDepositProductApi.md#retrieveall32) | **GET** /v1/recurringdepositproducts | List Recuring Deposit Products
*RecurringDepositProductApi* | [**retrieveOne23**](docs/RecurringDepositProductApi.md#retrieveone23) | **GET** /v1/recurringdepositproducts/{productId} | Retrieve a Recurring Deposit Product
*RecurringDepositProductApi* | [**retrieveTemplate17**](docs/RecurringDepositProductApi.md#retrievetemplate17) | **GET** /v1/recurringdepositproducts/template | 
*RecurringDepositProductApi* | [**update19**](docs/RecurringDepositProductApi.md#update19) | **PUT** /v1/recurringdepositproducts/{productId} | Update a Recurring Deposit Product
*RepaymentWithPostDatedChecksApi* | [**deletePostDatedCheck**](docs/RepaymentWithPostDatedChecksApi.md#deletepostdatedcheck) | **DELETE** /v1/loans/{loanId}/postdatedchecks/{postDatedCheckId} | Delete Post Dated Check
*RepaymentWithPostDatedChecksApi* | [**getPostDatedCheck**](docs/RepaymentWithPostDatedChecksApi.md#getpostdatedcheck) | **GET** /v1/loans/{loanId}/postdatedchecks/{installmentId} | Get Post Dated Check
*RepaymentWithPostDatedChecksApi* | [**getPostDatedChecks**](docs/RepaymentWithPostDatedChecksApi.md#getpostdatedchecks) | **GET** /v1/loans/{loanId}/postdatedchecks | Get All Post Dated Checks
*RepaymentWithPostDatedChecksApi* | [**updatePostDatedChecks**](docs/RepaymentWithPostDatedChecksApi.md#updatepostdatedchecks) | **PUT** /v1/loans/{loanId}/postdatedchecks/{postDatedCheckId} | Update Post Dated Check, Bounced Check
*ReportMailingJobsApi* | [**createReportMailingJob**](docs/ReportMailingJobsApi.md#createreportmailingjob) | **POST** /v1/reportmailingjobs | Create a Report Mailing Job
*ReportMailingJobsApi* | [**deleteReportMailingJob**](docs/ReportMailingJobsApi.md#deletereportmailingjob) | **DELETE** /v1/reportmailingjobs/{entityId} | Delete a Report Mailing Job
*ReportMailingJobsApi* | [**retrieveAllReportMailingJobs**](docs/ReportMailingJobsApi.md#retrieveallreportmailingjobs) | **GET** /v1/reportmailingjobs | List Report Mailing Jobs
*ReportMailingJobsApi* | [**retrieveReportMailingJob**](docs/ReportMailingJobsApi.md#retrievereportmailingjob) | **GET** /v1/reportmailingjobs/{entityId} | Retrieve a Report Mailing Job
*ReportMailingJobsApi* | [**retrieveReportMailingJobTemplate**](docs/ReportMailingJobsApi.md#retrievereportmailingjobtemplate) | **GET** /v1/reportmailingjobs/template | Retrieve Report Mailing Job Details Template
*ReportMailingJobsApi* | [**updateReportMailingJob**](docs/ReportMailingJobsApi.md#updatereportmailingjob) | **PUT** /v1/reportmailingjobs/{entityId} | Update a Report Mailing Job 
*ReportsApi* | [**createReport**](docs/ReportsApi.md#createreport) | **POST** /v1/reports | Create a Report
*ReportsApi* | [**deleteReport**](docs/ReportsApi.md#deletereport) | **DELETE** /v1/reports/{id} | Delete a Report
*ReportsApi* | [**retrieveOfficeTemplate**](docs/ReportsApi.md#retrieveofficetemplate) | **GET** /v1/reports/template | Retrieve Report Template
*ReportsApi* | [**retrieveReport**](docs/ReportsApi.md#retrievereport) | **GET** /v1/reports/{id} | Retrieve a Report 
*ReportsApi* | [**retrieveReportList**](docs/ReportsApi.md#retrievereportlist) | **GET** /v1/reports | List Reports
*ReportsApi* | [**updateReport**](docs/ReportsApi.md#updatereport) | **PUT** /v1/reports/{id} | Update a Report
*RescheduleLoansApi* | [**createLoanRescheduleRequest**](docs/RescheduleLoansApi.md#createloanreschedulerequest) | **POST** /v1/rescheduleloans | Create loan reschedule request
*RescheduleLoansApi* | [**readLoanRescheduleRequest**](docs/RescheduleLoansApi.md#readloanreschedulerequest) | **GET** /v1/rescheduleloans/{scheduleId} | Retrieve loan reschedule request by schedule id
*RescheduleLoansApi* | [**retrieveAllRescheduleRequest**](docs/RescheduleLoansApi.md#retrieveallreschedulerequest) | **GET** /v1/rescheduleloans | Retrieve all reschedule requests
*RescheduleLoansApi* | [**retrieveTemplate10**](docs/RescheduleLoansApi.md#retrievetemplate10) | **GET** /v1/rescheduleloans/template | Retrieve all reschedule loan reasons
*RescheduleLoansApi* | [**updateLoanRescheduleRequest**](docs/RescheduleLoansApi.md#updateloanreschedulerequest) | **POST** /v1/rescheduleloans/{scheduleId} | Update loan reschedule request
*RolesApi* | [**actionsOnRoles**](docs/RolesApi.md#actionsonroles) | **POST** /v1/roles/{roleId} | Enable Role | Disable Role
*RolesApi* | [**createRole**](docs/RolesApi.md#createrole) | **POST** /v1/roles | Create a New Role
*RolesApi* | [**deleteRole**](docs/RolesApi.md#deleterole) | **DELETE** /v1/roles/{roleId} | Delete a Role
*RolesApi* | [**retrieveAllRoles**](docs/RolesApi.md#retrieveallroles) | **GET** /v1/roles | List Roles
*RolesApi* | [**retrieveRole**](docs/RolesApi.md#retrieverole) | **GET** /v1/roles/{roleId} | Retrieve a Role
*RolesApi* | [**retrieveRolePermissions**](docs/RolesApi.md#retrieverolepermissions) | **GET** /v1/roles/{roleId}/permissions | Retrieve a Role\&#39;s Permissions
*RolesApi* | [**updateRole**](docs/RolesApi.md#updaterole) | **PUT** /v1/roles/{roleId} | Update a Role
*RolesApi* | [**updateRolePermissions**](docs/RolesApi.md#updaterolepermissions) | **PUT** /v1/roles/{roleId}/permissions | Update a Role\&#39;s Permissions
*RunReportsApi* | [**retrieveAllAvailableExports**](docs/RunReportsApi.md#retrieveallavailableexports) | **GET** /v1/runreports/availableExports/{reportName} | Return all available export types for the specific report
*RunReportsApi* | [**runReport**](docs/RunReportsApi.md#runreport) | **GET** /v1/runreports/{reportName} | Running a Report
*SCHEDULERJOBApi* | [**executeJob**](docs/SCHEDULERJOBApi.md#executejob) | **POST** /v1/jobs/{jobId} | Run a Job
*SCHEDULERJOBApi* | [**executeJobByShortName**](docs/SCHEDULERJOBApi.md#executejobbyshortname) | **POST** /v1/jobs/short-name/{shortName} | Run a Job
*SCHEDULERJOBApi* | [**retrieveAll8**](docs/SCHEDULERJOBApi.md#retrieveall8) | **GET** /v1/jobs | Retrieve Scheduler Jobs
*SCHEDULERJOBApi* | [**retrieveByShortName**](docs/SCHEDULERJOBApi.md#retrievebyshortname) | **GET** /v1/jobs/short-name/{shortName} | Retrieve a Job
*SCHEDULERJOBApi* | [**retrieveHistory**](docs/SCHEDULERJOBApi.md#retrievehistory) | **GET** /v1/jobs/{jobId}/runhistory | Retrieve Job Run History
*SCHEDULERJOBApi* | [**retrieveHistoryByShortName**](docs/SCHEDULERJOBApi.md#retrievehistorybyshortname) | **GET** /v1/jobs/short-name/{shortName}/runhistory | Retrieve Job Run History
*SCHEDULERJOBApi* | [**retrieveOne5**](docs/SCHEDULERJOBApi.md#retrieveone5) | **GET** /v1/jobs/{jobId} | Retrieve a Job
*SCHEDULERJOBApi* | [**updateJobDetail**](docs/SCHEDULERJOBApi.md#updatejobdetail) | **PUT** /v1/jobs/{jobId} | Update a Job
*SCHEDULERJOBApi* | [**updateJobDetailByShortName**](docs/SCHEDULERJOBApi.md#updatejobdetailbyshortname) | **PUT** /v1/jobs/short-name/{shortName} | Update a Job
*SMSApi* | [**create2**](docs/SMSApi.md#create2) | **POST** /v1/sms | 
*SMSApi* | [**delete5**](docs/SMSApi.md#delete5) | **DELETE** /v1/sms/{resourceId} | 
*SMSApi* | [**retrieveAll10**](docs/SMSApi.md#retrieveall10) | **GET** /v1/sms | 
*SMSApi* | [**retrieveAllSmsByStatus**](docs/SMSApi.md#retrieveallsmsbystatus) | **GET** /v1/sms/{campaignId}/messageByStatus | 
*SMSApi* | [**retrieveOne6**](docs/SMSApi.md#retrieveone6) | **GET** /v1/sms/{resourceId} | 
*SMSApi* | [**update3**](docs/SMSApi.md#update3) | **PUT** /v1/sms/{resourceId} | 
*SPMAPILookUpTableApi* | [**createLookupTable**](docs/SPMAPILookUpTableApi.md#createlookuptable) | **POST** /v1/surveys/{surveyId}/lookuptables | Create a Lookup Table entry
*SPMAPILookUpTableApi* | [**fetchLookupTables**](docs/SPMAPILookUpTableApi.md#fetchlookuptables) | **GET** /v1/surveys/{surveyId}/lookuptables | List all Lookup Table entries
*SPMAPILookUpTableApi* | [**findLookupTable**](docs/SPMAPILookUpTableApi.md#findlookuptable) | **GET** /v1/surveys/{surveyId}/lookuptables/{key} | Retrieve a Lookup Table entry
*SavingsAccountApi* | [**delete18**](docs/SavingsAccountApi.md#delete18) | **DELETE** /v1/savingsaccounts/{accountId} | Delete a savings application
*SavingsAccountApi* | [**delete19**](docs/SavingsAccountApi.md#delete19) | **DELETE** /v1/savingsaccounts/external-id/{externalId} | Delete a savings application
*SavingsAccountApi* | [**getSavingsTemplate**](docs/SavingsAccountApi.md#getsavingstemplate) | **GET** /v1/savingsaccounts/downloadtemplate | 
*SavingsAccountApi* | [**getSavingsTransactionTemplate**](docs/SavingsAccountApi.md#getsavingstransactiontemplate) | **GET** /v1/savingsaccounts/transactions/downloadtemplate | 
*SavingsAccountApi* | [**handleCommands6**](docs/SavingsAccountApi.md#handlecommands6) | **POST** /v1/savingsaccounts/{accountId} | Approve savings application | Undo approval savings application | Assign Savings Officer | Unassign Savings Officer | Reject savings application | Withdraw savings application | Activate a savings account | Close a savings account | Calculate Interest on Savings Account | Post Interest on Savings Account | Block Savings Account | Unblock Savings Account | Block Savings Account Credit transactions | Unblock Savings Account Credit transactions | Block Savings Account Debit transactions | Unblock Savings Account debit transactions
*SavingsAccountApi* | [**handleCommands7**](docs/SavingsAccountApi.md#handlecommands7) | **POST** /v1/savingsaccounts/external-id/{externalId} | Approve savings application | Undo approval savings application | Assign Savings Officer | Unassign Savings Officer | Reject savings application | Withdraw savings application | Activate a savings account | Close a savings account | Calculate Interest on Savings Account | Post Interest on Savings Account | Block Savings Account | Unblock Savings Account | Block Savings Account Credit transactions | Unblock Savings Account Credit transactions | Block Savings Account Debit transactions | Unblock Savings Account debit transactions
*SavingsAccountApi* | [**handleGSIMCommands**](docs/SavingsAccountApi.md#handlegsimcommands) | **POST** /v1/savingsaccounts/gsimcommands/{parentAccountId} | 
*SavingsAccountApi* | [**postSavingsTemplate**](docs/SavingsAccountApi.md#postsavingstemplate) | **POST** /v1/savingsaccounts/uploadtemplate | 
*SavingsAccountApi* | [**postSavingsTransactionTemplate**](docs/SavingsAccountApi.md#postsavingstransactiontemplate) | **POST** /v1/savingsaccounts/transactions/uploadtemplate | 
*SavingsAccountApi* | [**retrieveAll33**](docs/SavingsAccountApi.md#retrieveall33) | **GET** /v1/savingsaccounts | List savings applications/accounts
*SavingsAccountApi* | [**retrieveOne25**](docs/SavingsAccountApi.md#retrieveone25) | **GET** /v1/savingsaccounts/{accountId} | 
*SavingsAccountApi* | [**retrieveOne26**](docs/SavingsAccountApi.md#retrieveone26) | **GET** /v1/savingsaccounts/external-id/{externalId} | 
*SavingsAccountApi* | [**submitApplication2**](docs/SavingsAccountApi.md#submitapplication2) | **POST** /v1/savingsaccounts | Submit new savings application
*SavingsAccountApi* | [**submitGSIMApplication**](docs/SavingsAccountApi.md#submitgsimapplication) | **POST** /v1/savingsaccounts/gsim | 
*SavingsAccountApi* | [**template14**](docs/SavingsAccountApi.md#template14) | **GET** /v1/savingsaccounts/template | Retrieve Savings Account Template
*SavingsAccountApi* | [**update20**](docs/SavingsAccountApi.md#update20) | **PUT** /v1/savingsaccounts/{accountId} | Modify a savings application | Modify savings account withhold tax applicability
*SavingsAccountApi* | [**update21**](docs/SavingsAccountApi.md#update21) | **PUT** /v1/savingsaccounts/external-id/{externalId} | Modify a savings application | Modify savings account withhold tax applicability
*SavingsAccountApi* | [**updateGsim**](docs/SavingsAccountApi.md#updategsim) | **PUT** /v1/savingsaccounts/gsim/{parentAccountId} | 
*SavingsAccountTransactionsApi* | [**adjustTransaction1**](docs/SavingsAccountTransactionsApi.md#adjusttransaction1) | **POST** /v1/savingsaccounts/{savingsId}/transactions/{transactionId} | Undo/Reverse/Modify/Release Amount transaction API
*SavingsAccountTransactionsApi* | [**advancedQuery1**](docs/SavingsAccountTransactionsApi.md#advancedquery1) | **POST** /v1/savingsaccounts/{savingsId}/transactions/query | Advanced search Savings Account Transactions
*SavingsAccountTransactionsApi* | [**retrieveOne24**](docs/SavingsAccountTransactionsApi.md#retrieveone24) | **GET** /v1/savingsaccounts/{savingsId}/transactions/{transactionId} | 
*SavingsAccountTransactionsApi* | [**retrieveTemplate19**](docs/SavingsAccountTransactionsApi.md#retrievetemplate19) | **GET** /v1/savingsaccounts/{savingsId}/transactions/template | 
*SavingsAccountTransactionsApi* | [**searchTransactions**](docs/SavingsAccountTransactionsApi.md#searchtransactions) | **GET** /v1/savingsaccounts/{savingsId}/transactions/search | Search Savings Account Transactions
*SavingsAccountTransactionsApi* | [**transaction2**](docs/SavingsAccountTransactionsApi.md#transaction2) | **POST** /v1/savingsaccounts/{savingsId}/transactions | 
*SavingsChargesApi* | [**addSavingsAccountCharge**](docs/SavingsChargesApi.md#addsavingsaccountcharge) | **POST** /v1/savingsaccounts/{savingsAccountId}/charges | Create a Savings account Charge
*SavingsChargesApi* | [**deleteSavingsAccountCharge**](docs/SavingsChargesApi.md#deletesavingsaccountcharge) | **DELETE** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Delete a Savings account Charge
*SavingsChargesApi* | [**payOrWaiveSavingsAccountCharge**](docs/SavingsChargesApi.md#payorwaivesavingsaccountcharge) | **POST** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Pay a Savings account Charge | Waive off a Savings account Charge | Inactivate a Savings account Charge
*SavingsChargesApi* | [**retrieveAllSavingsAccountCharges**](docs/SavingsChargesApi.md#retrieveallsavingsaccountcharges) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges | List Savings Charges
*SavingsChargesApi* | [**retrieveSavingsAccountCharge**](docs/SavingsChargesApi.md#retrievesavingsaccountcharge) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Retrieve a Savings account Charge
*SavingsChargesApi* | [**retrieveTemplate18**](docs/SavingsChargesApi.md#retrievetemplate18) | **GET** /v1/savingsaccounts/{savingsAccountId}/charges/template | Retrieve Savings Charges Template
*SavingsChargesApi* | [**updateSavingsAccountCharge**](docs/SavingsChargesApi.md#updatesavingsaccountcharge) | **PUT** /v1/savingsaccounts/{savingsAccountId}/charges/{savingsAccountChargeId} | Update a Savings account Charge
*SavingsProductApi* | [**create13**](docs/SavingsProductApi.md#create13) | **POST** /v1/savingsproducts | Create a Savings Product
*SavingsProductApi* | [**delete20**](docs/SavingsProductApi.md#delete20) | **DELETE** /v1/savingsproducts/{productId} | Delete a Savings Product
*SavingsProductApi* | [**retrieveAll34**](docs/SavingsProductApi.md#retrieveall34) | **GET** /v1/savingsproducts | List Savings Products
*SavingsProductApi* | [**retrieveOne27**](docs/SavingsProductApi.md#retrieveone27) | **GET** /v1/savingsproducts/{productId} | Retrieve a Savings Product
*SavingsProductApi* | [**retrieveTemplate20**](docs/SavingsProductApi.md#retrievetemplate20) | **GET** /v1/savingsproducts/template | Retrieve Savings Product Template
*SavingsProductApi* | [**update22**](docs/SavingsProductApi.md#update22) | **PUT** /v1/savingsproducts/{productId} | Update a Savings Product
*SchedulerApi* | [**changeSchedulerStatus**](docs/SchedulerApi.md#changeschedulerstatus) | **POST** /v1/scheduler | Activate Scheduler Jobs | Suspend Scheduler Jobs
*SchedulerApi* | [**retrieveStatus**](docs/SchedulerApi.md#retrievestatus) | **GET** /v1/scheduler | Retrieve Scheduler Status
*ScoreCardApi* | [**createScorecard1**](docs/ScoreCardApi.md#createscorecard1) | **POST** /v1/surveys/scorecards/{surveyId} | Create a Scorecard entry
*ScoreCardApi* | [**findByClient1**](docs/ScoreCardApi.md#findbyclient1) | **GET** /v1/surveys/scorecards/clients/{clientId} | 
*ScoreCardApi* | [**findBySurvey**](docs/ScoreCardApi.md#findbysurvey) | **GET** /v1/surveys/scorecards/{surveyId} | List all Scorecard entries
*ScoreCardApi* | [**findBySurveyAndClient**](docs/ScoreCardApi.md#findbysurveyandclient) | **GET** /v1/surveys/scorecards/{surveyId}/clients/{clientId} | 
*SearchAPIApi* | [**advancedSearch**](docs/SearchAPIApi.md#advancedsearch) | **POST** /v1/search/advance | Adhoc query search
*SearchAPIApi* | [**retrieveAdHocSearchQueryTemplate**](docs/SearchAPIApi.md#retrieveadhocsearchquerytemplate) | **GET** /v1/search/template | Retrive Adhoc Search query template
*SearchAPIApi* | [**searchData**](docs/SearchAPIApi.md#searchdata) | **GET** /v1/search | Search Resources
*SelfAccountTransferApi* | [**create14**](docs/SelfAccountTransferApi.md#create14) | **POST** /v1/self/accounttransfers | Create new Transfer
*SelfAccountTransferApi* | [**template15**](docs/SelfAccountTransferApi.md#template15) | **GET** /v1/self/accounttransfers/template | Retrieve Account Transfer Template
*SelfAuthenticationApi* | [**authenticate1**](docs/SelfAuthenticationApi.md#authenticate1) | **POST** /v1/self/authentication | Verify authentication
*SelfClientApi* | [**addNewClientImage2**](docs/SelfClientApi.md#addnewclientimage2) | **POST** /v1/self/clients/{clientId}/images | 
*SelfClientApi* | [**deleteClientImage1**](docs/SelfClientApi.md#deleteclientimage1) | **DELETE** /v1/self/clients/{clientId}/images | 
*SelfClientApi* | [**retrieveAll36**](docs/SelfClientApi.md#retrieveall36) | **GET** /v1/self/clients | List Clients associated to the user
*SelfClientApi* | [**retrieveAllClientCharges1**](docs/SelfClientApi.md#retrieveallclientcharges1) | **GET** /v1/self/clients/{clientId}/charges | List Client Charges
*SelfClientApi* | [**retrieveAllClientTransactions2**](docs/SelfClientApi.md#retrieveallclienttransactions2) | **GET** /v1/self/clients/{clientId}/transactions | List Client Transactions
*SelfClientApi* | [**retrieveAssociatedAccounts2**](docs/SelfClientApi.md#retrieveassociatedaccounts2) | **GET** /v1/self/clients/{clientId}/accounts | Retrieve client accounts overview
*SelfClientApi* | [**retrieveClientCharge1**](docs/SelfClientApi.md#retrieveclientcharge1) | **GET** /v1/self/clients/{clientId}/charges/{chargeId} | Retrieve a Client Charge
*SelfClientApi* | [**retrieveClientTransaction4**](docs/SelfClientApi.md#retrieveclienttransaction4) | **GET** /v1/self/clients/{clientId}/transactions/{transactionId} | Retrieve a Client Transaction
*SelfClientApi* | [**retrieveImage1**](docs/SelfClientApi.md#retrieveimage1) | **GET** /v1/self/clients/{clientId}/images | Retrieve Client Image
*SelfClientApi* | [**retrieveObligeeDetails2**](docs/SelfClientApi.md#retrieveobligeedetails2) | **GET** /v1/self/clients/{clientId}/obligeedetails | 
*SelfClientApi* | [**retrieveOne28**](docs/SelfClientApi.md#retrieveone28) | **GET** /v1/self/clients/{clientId} | Retrieve a Client
*SelfDividendApi* | [**createDividendDetail**](docs/SelfDividendApi.md#createdividenddetail) | **POST** /v1/shareproduct/{productId}/dividend | 
*SelfDividendApi* | [**deleteDividendDetail**](docs/SelfDividendApi.md#deletedividenddetail) | **DELETE** /v1/shareproduct/{productId}/dividend/{dividendId} | 
*SelfDividendApi* | [**retrieveAll39**](docs/SelfDividendApi.md#retrieveall39) | **GET** /v1/shareproduct/{productId}/dividend | 
*SelfDividendApi* | [**retrieveDividendDetails**](docs/SelfDividendApi.md#retrievedividenddetails) | **GET** /v1/shareproduct/{productId}/dividend/{dividendId} | 
*SelfDividendApi* | [**updateDividendDetail**](docs/SelfDividendApi.md#updatedividenddetail) | **PUT** /v1/shareproduct/{productId}/dividend/{dividendId} | 
*SelfLoanProductsApi* | [**retrieveAllLoanProducts1**](docs/SelfLoanProductsApi.md#retrieveallloanproducts1) | **GET** /v1/self/loanproducts | 
*SelfLoanProductsApi* | [**retrieveLoanProductDetails2**](docs/SelfLoanProductsApi.md#retrieveloanproductdetails2) | **GET** /v1/self/loanproducts/{productId} | 
*SelfLoansApi* | [**calculateLoanScheduleOrSubmitLoanApplication1**](docs/SelfLoansApi.md#calculateloanscheduleorsubmitloanapplication1) | **POST** /v1/self/loans | Calculate Loan Repayment Schedule | Submit a new Loan Application
*SelfLoansApi* | [**modifyLoanApplication2**](docs/SelfLoansApi.md#modifyloanapplication2) | **PUT** /v1/self/loans/{loanId} | Update a Loan Application
*SelfLoansApi* | [**retrieveAllLoanCharges2**](docs/SelfLoansApi.md#retrieveallloancharges2) | **GET** /v1/self/loans/{loanId}/charges | List Loan Charges
*SelfLoansApi* | [**retrieveGuarantorDetails2**](docs/SelfLoansApi.md#retrieveguarantordetails2) | **GET** /v1/self/loans/{loanId}/guarantors | 
*SelfLoansApi* | [**retrieveLoan2**](docs/SelfLoansApi.md#retrieveloan2) | **GET** /v1/self/loans/{loanId} | Retrieve a Loan
*SelfLoansApi* | [**retrieveLoanCharge4**](docs/SelfLoansApi.md#retrieveloancharge4) | **GET** /v1/self/loans/{loanId}/charges/{chargeId} | Retrieve a Loan Charge
*SelfLoansApi* | [**retrieveTransaction1**](docs/SelfLoansApi.md#retrievetransaction1) | **GET** /v1/self/loans/{loanId}/transactions/{transactionId} | Retrieve a Loan Transaction Details
*SelfLoansApi* | [**stateTransitions2**](docs/SelfLoansApi.md#statetransitions2) | **POST** /v1/self/loans/{loanId} | Applicant Withdraws from Loan Application
*SelfLoansApi* | [**template17**](docs/SelfLoansApi.md#template17) | **GET** /v1/self/loans/template | Retrieve Loan Details Template
*SelfRunReportApi* | [**runReport1**](docs/SelfRunReportApi.md#runreport1) | **GET** /v1/self/runreports/{reportName} | Running A Report
*SelfSavingsAccountApi* | [**modifySavingsAccountApplication**](docs/SelfSavingsAccountApi.md#modifysavingsaccountapplication) | **PUT** /v1/self/savingsaccounts/{accountId} | 
*SelfSavingsAccountApi* | [**retrieveAllSavingsAccountCharges1**](docs/SelfSavingsAccountApi.md#retrieveallsavingsaccountcharges1) | **GET** /v1/self/savingsaccounts/{accountId}/charges | List Savings Charges
*SelfSavingsAccountApi* | [**retrieveSavings**](docs/SelfSavingsAccountApi.md#retrievesavings) | **GET** /v1/self/savingsaccounts/{accountId} | Retrieve a savings account
*SelfSavingsAccountApi* | [**retrieveSavingsAccountCharge1**](docs/SelfSavingsAccountApi.md#retrievesavingsaccountcharge1) | **GET** /v1/self/savingsaccounts/{accountId}/charges/{savingsAccountChargeId} | Retrieve a Savings account Charge
*SelfSavingsAccountApi* | [**retrieveSavingsTransaction**](docs/SelfSavingsAccountApi.md#retrievesavingstransaction) | **GET** /v1/self/savingsaccounts/{accountId}/transactions/{transactionId} | Retrieve Savings Account Transaction
*SelfSavingsAccountApi* | [**submitSavingsAccountApplication**](docs/SelfSavingsAccountApi.md#submitsavingsaccountapplication) | **POST** /v1/self/savingsaccounts | 
*SelfSavingsAccountApi* | [**template18**](docs/SelfSavingsAccountApi.md#template18) | **GET** /v1/self/savingsaccounts/template | 
*SelfSavingsProductsApi* | [**retrieveAll38**](docs/SelfSavingsProductsApi.md#retrieveall38) | **GET** /v1/self/savingsproducts | 
*SelfSavingsProductsApi* | [**retrieveOne29**](docs/SelfSavingsProductsApi.md#retrieveone29) | **GET** /v1/self/savingsproducts/{productId} | 
*SelfScoreCardApi* | [**createScorecard**](docs/SelfScoreCardApi.md#createscorecard) | **POST** /v1/self/surveys/scorecards/{surveyId} | 
*SelfScoreCardApi* | [**findByClient**](docs/SelfScoreCardApi.md#findbyclient) | **GET** /v1/self/surveys/scorecards/clients/{clientId} | 
*SelfServiceRegistrationApi* | [**createSelfServiceRegistrationRequest**](docs/SelfServiceRegistrationApi.md#createselfserviceregistrationrequest) | **POST** /v1/self/registration | 
*SelfServiceRegistrationApi* | [**createSelfServiceUser**](docs/SelfServiceRegistrationApi.md#createselfserviceuser) | **POST** /v1/self/registration/user | 
*SelfShareAccountsApi* | [**createAccount1**](docs/SelfShareAccountsApi.md#createaccount1) | **POST** /v1/self/shareaccounts | Submit new share application
*SelfShareAccountsApi* | [**retrieveShareAccount**](docs/SelfShareAccountsApi.md#retrieveshareaccount) | **GET** /v1/self/shareaccounts/{accountId} | Retrieve a share application/account
*SelfShareAccountsApi* | [**template19**](docs/SelfShareAccountsApi.md#template19) | **GET** /v1/self/shareaccounts/template | Retrieve Share Account Template
*SelfShareProductsApi* | [**retrieveAllProducts1**](docs/SelfShareProductsApi.md#retrieveallproducts1) | **GET** /v1/self/products/share | 
*SelfShareProductsApi* | [**retrieveProduct1**](docs/SelfShareProductsApi.md#retrieveproduct1) | **GET** /v1/self/products/share/{productId} | 
*SelfSpmApi* | [**fetchAllSurveys**](docs/SelfSpmApi.md#fetchallsurveys) | **GET** /v1/self/surveys | 
*SelfThirdPartyTransferApi* | [**add**](docs/SelfThirdPartyTransferApi.md#add) | **POST** /v1/self/beneficiaries/tpt | Add TPT Beneficiary
*SelfThirdPartyTransferApi* | [**delete21**](docs/SelfThirdPartyTransferApi.md#delete21) | **DELETE** /v1/self/beneficiaries/tpt/{beneficiaryId} | Delete TPT Beneficiary
*SelfThirdPartyTransferApi* | [**retrieveAll35**](docs/SelfThirdPartyTransferApi.md#retrieveall35) | **GET** /v1/self/beneficiaries/tpt | Get All TPT Beneficiary
*SelfThirdPartyTransferApi* | [**template16**](docs/SelfThirdPartyTransferApi.md#template16) | **GET** /v1/self/beneficiaries/tpt/template | Beneficiary Third Party Transfer Template
*SelfThirdPartyTransferApi* | [**update23**](docs/SelfThirdPartyTransferApi.md#update23) | **PUT** /v1/self/beneficiaries/tpt/{beneficiaryId} | Update TPT Beneficiary
*SelfUserApi* | [**update24**](docs/SelfUserApi.md#update24) | **PUT** /v1/self/user | Update User
*SelfUserDetailsApi* | [**fetchAuthenticatedUserData1**](docs/SelfUserDetailsApi.md#fetchauthenticateduserdata1) | **GET** /v1/self/userdetails | Fetch authenticated user details
*ShareAccountApi* | [**createAccount**](docs/ShareAccountApi.md#createaccount) | **POST** /v1/accounts/{type} | Submit new share application
*ShareAccountApi* | [**getSharedAccountsTemplate**](docs/ShareAccountApi.md#getsharedaccountstemplate) | **GET** /v1/accounts/{type}/downloadtemplate | 
*ShareAccountApi* | [**handleCommands2**](docs/ShareAccountApi.md#handlecommands2) | **POST** /v1/accounts/{type}/{accountId} | Approve share application | Undo approval share application | Reject share application | Activate a share account | Close a share account | Apply additional shares on a share account | Approve additional shares request on a share account | Reject additional shares request on a share account | Redeem shares on a share account
*ShareAccountApi* | [**postSharedAccountsTemplate**](docs/ShareAccountApi.md#postsharedaccountstemplate) | **POST** /v1/accounts/{type}/uploadtemplate | 
*ShareAccountApi* | [**retrieveAccount**](docs/ShareAccountApi.md#retrieveaccount) | **GET** /v1/accounts/{type}/{accountId} | Retrieve a share application/account
*ShareAccountApi* | [**retrieveAllAccounts1**](docs/ShareAccountApi.md#retrieveallaccounts1) | **GET** /v1/accounts/{type} | List share applications/accounts
*ShareAccountApi* | [**template7**](docs/ShareAccountApi.md#template7) | **GET** /v1/accounts/{type}/template | Retrieve Share Account Template
*ShareAccountApi* | [**updateAccount**](docs/ShareAccountApi.md#updateaccount) | **PUT** /v1/accounts/{type}/{accountId} | Modify a share application
*SpmSurveysApi* | [**activateOrDeactivateSurvey**](docs/SpmSurveysApi.md#activateordeactivatesurvey) | **POST** /v1/surveys/{id} | Deactivate Survey
*SpmSurveysApi* | [**createSurvey**](docs/SpmSurveysApi.md#createsurvey) | **POST** /v1/surveys | Create a Survey
*SpmSurveysApi* | [**editSurvey**](docs/SpmSurveysApi.md#editsurvey) | **PUT** /v1/surveys/{id} | 
*SpmSurveysApi* | [**fetchAllSurveys1**](docs/SpmSurveysApi.md#fetchallsurveys1) | **GET** /v1/surveys | List all Surveys
*SpmSurveysApi* | [**findSurvey**](docs/SpmSurveysApi.md#findsurvey) | **GET** /v1/surveys/{id} | Retrieve a Survey
*StaffApi* | [**create3**](docs/StaffApi.md#create3) | **POST** /v1/staff | Create a staff member
*StaffApi* | [**getTemplate1**](docs/StaffApi.md#gettemplate1) | **GET** /v1/staff/downloadtemplate | 
*StaffApi* | [**postTemplate**](docs/StaffApi.md#posttemplate) | **POST** /v1/staff/uploadtemplate | 
*StaffApi* | [**retrieveAll16**](docs/StaffApi.md#retrieveall16) | **GET** /v1/staff | Retrieve Staff
*StaffApi* | [**retrieveOne8**](docs/StaffApi.md#retrieveone8) | **GET** /v1/staff/{staffId} | Retrieve a Staff Member
*StaffApi* | [**update7**](docs/StaffApi.md#update7) | **PUT** /v1/staff/{staffId} | Update a Staff Member
*StandingInstructionsApi* | [**create5**](docs/StandingInstructionsApi.md#create5) | **POST** /v1/standinginstructions | Create new Standing Instruction
*StandingInstructionsApi* | [**retrieveAll19**](docs/StandingInstructionsApi.md#retrieveall19) | **GET** /v1/standinginstructions | List Standing Instructions
*StandingInstructionsApi* | [**retrieveOne10**](docs/StandingInstructionsApi.md#retrieveone10) | **GET** /v1/standinginstructions/{standingInstructionId} | Retrieve Standing Instruction
*StandingInstructionsApi* | [**template6**](docs/StandingInstructionsApi.md#template6) | **GET** /v1/standinginstructions/template | Retrieve Standing Instruction Template
*StandingInstructionsApi* | [**update9**](docs/StandingInstructionsApi.md#update9) | **PUT** /v1/standinginstructions/{standingInstructionId} | Update Standing Instruction | Delete Standing Instruction
*StandingInstructionsHistoryApi* | [**retrieveAll20**](docs/StandingInstructionsHistoryApi.md#retrieveall20) | **GET** /v1/standinginstructionrunhistory | Standing Instructions Logged History
*SurveyApi* | [**createDatatableEntry1**](docs/SurveyApi.md#createdatatableentry1) | **POST** /v1/survey/{surveyName}/{apptableId} | Create an entry in the survey table
*SurveyApi* | [**deleteDatatableEntries1**](docs/SurveyApi.md#deletedatatableentries1) | **DELETE** /v1/survey/{surveyName}/{clientId}/{fulfilledId} | 
*SurveyApi* | [**getClientSurveyOverview**](docs/SurveyApi.md#getclientsurveyoverview) | **GET** /v1/survey/{surveyName}/{clientId} | 
*SurveyApi* | [**getSurveyEntry**](docs/SurveyApi.md#getsurveyentry) | **GET** /v1/survey/{surveyName}/{clientId}/{entryId} | 
*SurveyApi* | [**register**](docs/SurveyApi.md#register) | **PUT** /v1/survey/register/{surveyName}/{apptable} | 
*SurveyApi* | [**retrieveSurvey**](docs/SurveyApi.md#retrievesurvey) | **GET** /v1/survey/{surveyName} | Retrieve survey
*SurveyApi* | [**retrieveSurveys**](docs/SurveyApi.md#retrievesurveys) | **GET** /v1/survey | Retrieve surveys
*TaxComponentsApi* | [**createTaxComponent**](docs/TaxComponentsApi.md#createtaxcomponent) | **POST** /v1/taxes/component | Create a new Tax Component
*TaxComponentsApi* | [**retrieveAllTaxComponents**](docs/TaxComponentsApi.md#retrievealltaxcomponents) | **GET** /v1/taxes/component | List Tax Components
*TaxComponentsApi* | [**retrieveTaxComponent**](docs/TaxComponentsApi.md#retrievetaxcomponent) | **GET** /v1/taxes/component/{taxComponentId} | Retrieve Tax Component
*TaxComponentsApi* | [**retrieveTemplate21**](docs/TaxComponentsApi.md#retrievetemplate21) | **GET** /v1/taxes/component/template | 
*TaxComponentsApi* | [**updateTaxCompoent**](docs/TaxComponentsApi.md#updatetaxcompoent) | **PUT** /v1/taxes/component/{taxComponentId} | Update Tax Component
*TaxGroupApi* | [**createTaxGroup**](docs/TaxGroupApi.md#createtaxgroup) | **POST** /v1/taxes/group | Create a new Tax Group
*TaxGroupApi* | [**retrieveAllTaxGroups**](docs/TaxGroupApi.md#retrievealltaxgroups) | **GET** /v1/taxes/group | List Tax Group
*TaxGroupApi* | [**retrieveTaxGroup**](docs/TaxGroupApi.md#retrievetaxgroup) | **GET** /v1/taxes/group/{taxGroupId} | Retrieve Tax Group
*TaxGroupApi* | [**retrieveTemplate22**](docs/TaxGroupApi.md#retrievetemplate22) | **GET** /v1/taxes/group/template | 
*TaxGroupApi* | [**updateTaxGroup**](docs/TaxGroupApi.md#updatetaxgroup) | **PUT** /v1/taxes/group/{taxGroupId} | Update Tax Group
*TellerCashManagementApi* | [**allocateCashToCashier**](docs/TellerCashManagementApi.md#allocatecashtocashier) | **POST** /v1/tellers/{tellerId}/cashiers/{cashierId}/allocate | Allocate Cash To Cashier
*TellerCashManagementApi* | [**createCashier**](docs/TellerCashManagementApi.md#createcashier) | **POST** /v1/tellers/{tellerId}/cashiers | Create Cashiers
*TellerCashManagementApi* | [**createTeller**](docs/TellerCashManagementApi.md#createteller) | **POST** /v1/tellers | Create teller
*TellerCashManagementApi* | [**deleteCashier**](docs/TellerCashManagementApi.md#deletecashier) | **DELETE** /v1/tellers/{tellerId}/cashiers/{cashierId} | Delete Cashier
*TellerCashManagementApi* | [**deleteTeller**](docs/TellerCashManagementApi.md#deleteteller) | **DELETE** /v1/tellers/{tellerId} | 
*TellerCashManagementApi* | [**findCashierData**](docs/TellerCashManagementApi.md#findcashierdata) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId} | Retrieve a cashier
*TellerCashManagementApi* | [**findTeller**](docs/TellerCashManagementApi.md#findteller) | **GET** /v1/tellers/{tellerId} | Retrieve tellers
*TellerCashManagementApi* | [**findTransactionData**](docs/TellerCashManagementApi.md#findtransactiondata) | **GET** /v1/tellers/{tellerId}/transactions/{transactionId} | 
*TellerCashManagementApi* | [**getCashierData1**](docs/TellerCashManagementApi.md#getcashierdata1) | **GET** /v1/tellers/{tellerId}/cashiers | List Cashiers
*TellerCashManagementApi* | [**getCashierTemplate**](docs/TellerCashManagementApi.md#getcashiertemplate) | **GET** /v1/tellers/{tellerId}/cashiers/template | Find Cashiers
*TellerCashManagementApi* | [**getCashierTxnTemplate**](docs/TellerCashManagementApi.md#getcashiertxntemplate) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/transactions/template | Retrieve Cashier Transaction Template
*TellerCashManagementApi* | [**getJournalData**](docs/TellerCashManagementApi.md#getjournaldata) | **GET** /v1/tellers/{tellerId}/journals | 
*TellerCashManagementApi* | [**getTellerData**](docs/TellerCashManagementApi.md#gettellerdata) | **GET** /v1/tellers | List all tellers
*TellerCashManagementApi* | [**getTransactionData**](docs/TellerCashManagementApi.md#gettransactiondata) | **GET** /v1/tellers/{tellerId}/transactions | 
*TellerCashManagementApi* | [**getTransactionsForCashier**](docs/TellerCashManagementApi.md#gettransactionsforcashier) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/transactions | Retrieve Cashier Transactions
*TellerCashManagementApi* | [**getTransactionsWithSummaryForCashier**](docs/TellerCashManagementApi.md#gettransactionswithsummaryforcashier) | **GET** /v1/tellers/{tellerId}/cashiers/{cashierId}/summaryandtransactions | Retrieve Transactions With Summary For Cashier
*TellerCashManagementApi* | [**settleCashFromCashier**](docs/TellerCashManagementApi.md#settlecashfromcashier) | **POST** /v1/tellers/{tellerId}/cashiers/{cashierId}/settle | Settle Cash From Cashier
*TellerCashManagementApi* | [**updateCashier**](docs/TellerCashManagementApi.md#updatecashier) | **PUT** /v1/tellers/{tellerId}/cashiers/{cashierId} | Update Cashier
*TellerCashManagementApi* | [**updateTeller**](docs/TellerCashManagementApi.md#updateteller) | **PUT** /v1/tellers/{tellerId} | Update teller
*TwoFactorApi* | [**getOTPDeliveryMethods**](docs/TwoFactorApi.md#getotpdeliverymethods) | **GET** /v1/twofactor | 
*TwoFactorApi* | [**requestToken**](docs/TwoFactorApi.md#requesttoken) | **POST** /v1/twofactor | 
*TwoFactorApi* | [**updateConfiguration2**](docs/TwoFactorApi.md#updateconfiguration2) | **POST** /v1/twofactor/invalidate | 
*TwoFactorApi* | [**validate**](docs/TwoFactorApi.md#validate) | **POST** /v1/twofactor/validate | 
*UserGeneratedDocumentsApi* | [**createTemplate**](docs/UserGeneratedDocumentsApi.md#createtemplate) | **POST** /v1/templates | Add a UGD
*UserGeneratedDocumentsApi* | [**deleteTemplate**](docs/UserGeneratedDocumentsApi.md#deletetemplate) | **DELETE** /v1/templates/{templateId} | Delete a UGD
*UserGeneratedDocumentsApi* | [**getTemplateByTemplate**](docs/UserGeneratedDocumentsApi.md#gettemplatebytemplate) | **GET** /v1/templates/{templateId}/template | 
*UserGeneratedDocumentsApi* | [**mergeTemplate**](docs/UserGeneratedDocumentsApi.md#mergetemplate) | **POST** /v1/templates/{templateId} | 
*UserGeneratedDocumentsApi* | [**retrieveAll40**](docs/UserGeneratedDocumentsApi.md#retrieveall40) | **GET** /v1/templates | Retrieve all UGDs
*UserGeneratedDocumentsApi* | [**retrieveOne30**](docs/UserGeneratedDocumentsApi.md#retrieveone30) | **GET** /v1/templates/{templateId} | Retrieve a UGD
*UserGeneratedDocumentsApi* | [**saveTemplate**](docs/UserGeneratedDocumentsApi.md#savetemplate) | **PUT** /v1/templates/{templateId} | Update a UGD
*UserGeneratedDocumentsApi* | [**template20**](docs/UserGeneratedDocumentsApi.md#template20) | **GET** /v1/templates/template | Retrieve UGD Details Template
*UsersApi* | [**changePassword**](docs/UsersApi.md#changepassword) | **POST** /v1/users/{userId}/pwd | Change the password of a User
*UsersApi* | [**create15**](docs/UsersApi.md#create15) | **POST** /v1/users | Create a User
*UsersApi* | [**delete23**](docs/UsersApi.md#delete23) | **DELETE** /v1/users/{userId} | Delete a User
*UsersApi* | [**getUserTemplate**](docs/UsersApi.md#getusertemplate) | **GET** /v1/users/downloadtemplate | 
*UsersApi* | [**postUsersTemplate**](docs/UsersApi.md#postuserstemplate) | **POST** /v1/users/uploadtemplate | 
*UsersApi* | [**retrieveAll41**](docs/UsersApi.md#retrieveall41) | **GET** /v1/users | Retrieve list of users
*UsersApi* | [**retrieveOne31**](docs/UsersApi.md#retrieveone31) | **GET** /v1/users/{userId} | Retrieve a User
*UsersApi* | [**template22**](docs/UsersApi.md#template22) | **GET** /v1/users/template | Retrieve User Details Template
*UsersApi* | [**update26**](docs/UsersApi.md#update26) | **PUT** /v1/users/{userId} | Update a User
*WorkingDaysApi* | [**retrieveAll17**](docs/WorkingDaysApi.md#retrieveall17) | **GET** /v1/workingdays | List Working days
*WorkingDaysApi* | [**template4**](docs/WorkingDaysApi.md#template4) | **GET** /v1/workingdays/template | Working Days Template
*WorkingDaysApi* | [**update8**](docs/WorkingDaysApi.md#update8) | **PUT** /v1/workingdays | Update a Working Day


### Documentation For Models

 - [AccountChargesRequest](docs/AccountChargesRequest.md)
 - [AccountRequest](docs/AccountRequest.md)
 - [AccountRuleRequest](docs/AccountRuleRequest.md)
 - [AccountTransferData](docs/AccountTransferData.md)
 - [AccountTransferRequest](docs/AccountTransferRequest.md)
 - [AccountingRuleData](docs/AccountingRuleData.md)
 - [AccountingTagRuleData](docs/AccountingTagRuleData.md)
 - [AdHocData](docs/AdHocData.md)
 - [AdHocRequest](docs/AdHocRequest.md)
 - [AdHocSearchQueryData](docs/AdHocSearchQueryData.md)
 - [AddressData](docs/AddressData.md)
 - [AdvancedPaymentData](docs/AdvancedPaymentData.md)
 - [AdvancedQueryData](docs/AdvancedQueryData.md)
 - [AdvancedQueryRequest](docs/AdvancedQueryRequest.md)
 - [AllowAttributeOverrides](docs/AllowAttributeOverrides.md)
 - [AmortizationMappingData](docs/AmortizationMappingData.md)
 - [AppUser](docs/AppUser.md)
 - [AppUserClientMapping](docs/AppUserClientMapping.md)
 - [AppUserData](docs/AppUserData.md)
 - [AuditData](docs/AuditData.md)
 - [AuditSearchData](docs/AuditSearchData.md)
 - [BatchRequest](docs/BatchRequest.md)
 - [BatchResponse](docs/BatchResponse.md)
 - [BodyPart](docs/BodyPart.md)
 - [BodyPartHeaders](docs/BodyPartHeaders.md)
 - [BodyPartParameterizedHeaders](docs/BodyPartParameterizedHeaders.md)
 - [BusinessDateResponse](docs/BusinessDateResponse.md)
 - [BusinessDateUpdateRequest](docs/BusinessDateUpdateRequest.md)
 - [BusinessDateUpdateResponse](docs/BusinessDateUpdateResponse.md)
 - [BusinessStep](docs/BusinessStep.md)
 - [BusinessStepDetail](docs/BusinessStepDetail.md)
 - [BusinessStepRequest](docs/BusinessStepRequest.md)
 - [BuyDownFeeAmortizationDetails](docs/BuyDownFeeAmortizationDetails.md)
 - [CacheData](docs/CacheData.md)
 - [CacheSwitchRequest](docs/CacheSwitchRequest.md)
 - [CacheSwitchResponse](docs/CacheSwitchResponse.md)
 - [CalculateFixedDepositInterestResponse](docs/CalculateFixedDepositInterestResponse.md)
 - [CalendarData](docs/CalendarData.md)
 - [CalendarRequest](docs/CalendarRequest.md)
 - [CampaignPreviewData](docs/CampaignPreviewData.md)
 - [CapitalizedIncomeDetails](docs/CapitalizedIncomeDetails.md)
 - [CashierData](docs/CashierData.md)
 - [CashierTransactionData](docs/CashierTransactionData.md)
 - [CashierTransactionsWithSummaryData](docs/CashierTransactionsWithSummaryData.md)
 - [CashierTxnType](docs/CashierTxnType.md)
 - [CashiersForTeller](docs/CashiersForTeller.md)
 - [CenterData](docs/CenterData.md)
 - [ChangeInstanceModeRequest](docs/ChangeInstanceModeRequest.md)
 - [ChangePwdUsersUserIdRequest](docs/ChangePwdUsersUserIdRequest.md)
 - [ChangePwdUsersUserIdResponse](docs/ChangePwdUsersUserIdResponse.md)
 - [ChangePwdUsersUserIdResponseChanges](docs/ChangePwdUsersUserIdResponseChanges.md)
 - [Charge](docs/Charge.md)
 - [ChargeData](docs/ChargeData.md)
 - [ChargeFeeOnMonthDay](docs/ChargeFeeOnMonthDay.md)
 - [ChargeOffReasonToGLAccountMapper](docs/ChargeOffReasonToGLAccountMapper.md)
 - [ChargeRequest](docs/ChargeRequest.md)
 - [ChargeToGLAccountMapper](docs/ChargeToGLAccountMapper.md)
 - [Client](docs/Client.md)
 - [ClientAddressRequest](docs/ClientAddressRequest.md)
 - [ClientCollateralManagementData](docs/ClientCollateralManagementData.md)
 - [ClientCollateralRequest](docs/ClientCollateralRequest.md)
 - [ClientData](docs/ClientData.md)
 - [ClientFamilyMemberRequest](docs/ClientFamilyMemberRequest.md)
 - [ClientFamilyMembersData](docs/ClientFamilyMembersData.md)
 - [ClientIdentifier](docs/ClientIdentifier.md)
 - [ClientIdentifierData](docs/ClientIdentifierData.md)
 - [ClientIdentifierRequest](docs/ClientIdentifierRequest.md)
 - [ClientSearchData](docs/ClientSearchData.md)
 - [ClientTextSearch](docs/ClientTextSearch.md)
 - [ClientTimelineData](docs/ClientTimelineData.md)
 - [Code](docs/Code.md)
 - [CodeValue](docs/CodeValue.md)
 - [CodeValueData](docs/CodeValueData.md)
 - [CollateralData](docs/CollateralData.md)
 - [CollateralManagementData](docs/CollateralManagementData.md)
 - [CollateralManagementProductRequest](docs/CollateralManagementProductRequest.md)
 - [CollateralProductRequest](docs/CollateralProductRequest.md)
 - [CollectionSheetRequest](docs/CollectionSheetRequest.md)
 - [ColumnFilterData](docs/ColumnFilterData.md)
 - [CommandProcessingResult](docs/CommandProcessingResult.md)
 - [CommandWrapper](docs/CommandWrapper.md)
 - [Component](docs/Component.md)
 - [ComponentData](docs/ComponentData.md)
 - [ConfiguredJobNamesDTO](docs/ConfiguredJobNamesDTO.md)
 - [ContentDisposition](docs/ContentDisposition.md)
 - [CreateStaffResponse](docs/CreateStaffResponse.md)
 - [CreditAllocationData](docs/CreditAllocationData.md)
 - [CreditAllocationOrder](docs/CreditAllocationOrder.md)
 - [CreditDebit](docs/CreditDebit.md)
 - [CurrencyConfigurationData](docs/CurrencyConfigurationData.md)
 - [CurrencyData](docs/CurrencyData.md)
 - [CurrencyItem](docs/CurrencyItem.md)
 - [CurrencyUpdateRequest](docs/CurrencyUpdateRequest.md)
 - [CurrencyUpdateResponse](docs/CurrencyUpdateResponse.md)
 - [DatatableData](docs/DatatableData.md)
 - [DeleteAccountNumberFormatsResponse](docs/DeleteAccountNumberFormatsResponse.md)
 - [DeleteAccountingRulesResponse](docs/DeleteAccountingRulesResponse.md)
 - [DeleteCentersCenterIdResponse](docs/DeleteCentersCenterIdResponse.md)
 - [DeleteChargesChargeIdResponse](docs/DeleteChargesChargeIdResponse.md)
 - [DeleteClientCollateralResponse](docs/DeleteClientCollateralResponse.md)
 - [DeleteClientsClientIdChargesChargeIdResponse](docs/DeleteClientsClientIdChargesChargeIdResponse.md)
 - [DeleteClientsClientIdIdentifiersIdentifierIdResponse](docs/DeleteClientsClientIdIdentifiersIdentifierIdResponse.md)
 - [DeleteClientsClientIdResponse](docs/DeleteClientsClientIdResponse.md)
 - [DeleteCodeValueDataResponse](docs/DeleteCodeValueDataResponse.md)
 - [DeleteCodesResponse](docs/DeleteCodesResponse.md)
 - [DeleteCollateralProductResponse](docs/DeleteCollateralProductResponse.md)
 - [DeleteDataTablesDatatableAppTableIdDatatableIdResponse](docs/DeleteDataTablesDatatableAppTableIdDatatableIdResponse.md)
 - [DeleteDataTablesDatatableAppTableIdResponse](docs/DeleteDataTablesDatatableAppTableIdResponse.md)
 - [DeleteDataTablesResponse](docs/DeleteDataTablesResponse.md)
 - [DeleteDelinquencyBucketResponse](docs/DeleteDelinquencyBucketResponse.md)
 - [DeleteDelinquencyRangeResponse](docs/DeleteDelinquencyRangeResponse.md)
 - [DeleteEntityDatatableChecksTemplateResponse](docs/DeleteEntityDatatableChecksTemplateResponse.md)
 - [DeleteEntityTypeEntityIdDocumentsResponse](docs/DeleteEntityTypeEntityIdDocumentsResponse.md)
 - [DeleteFinancialActivityAccountsResponse](docs/DeleteFinancialActivityAccountsResponse.md)
 - [DeleteFixedDepositAccountsAccountIdResponse](docs/DeleteFixedDepositAccountsAccountIdResponse.md)
 - [DeleteFixedDepositProductsProductIdResponse](docs/DeleteFixedDepositProductsProductIdResponse.md)
 - [DeleteGLAccountsResponse](docs/DeleteGLAccountsResponse.md)
 - [DeleteGlClosuresResponse](docs/DeleteGlClosuresResponse.md)
 - [DeleteGroupsGroupIdResponse](docs/DeleteGroupsGroupIdResponse.md)
 - [DeleteHolidaysHolidayIdResponse](docs/DeleteHolidaysHolidayIdResponse.md)
 - [DeleteHookResponse](docs/DeleteHookResponse.md)
 - [DeleteInterestRateChartsChartIdChartSlabsResponse](docs/DeleteInterestRateChartsChartIdChartSlabsResponse.md)
 - [DeleteInterestRateChartsChartIdResponse](docs/DeleteInterestRateChartsChartIdResponse.md)
 - [DeleteLoansLoanIdChargesChargeIdResponse](docs/DeleteLoansLoanIdChargesChargeIdResponse.md)
 - [DeleteLoansLoanIdCollateralsCollateralIdResponse](docs/DeleteLoansLoanIdCollateralsCollateralIdResponse.md)
 - [DeleteLoansLoanIdResponse](docs/DeleteLoansLoanIdResponse.md)
 - [DeletePaymentTypesPaymentTypeIdResponse](docs/DeletePaymentTypesPaymentTypeIdResponse.md)
 - [DeletePostDatedCheck](docs/DeletePostDatedCheck.md)
 - [DeleteProvisioningCriteriaResponse](docs/DeleteProvisioningCriteriaResponse.md)
 - [DeleteRecurringDepositAccountsResponse](docs/DeleteRecurringDepositAccountsResponse.md)
 - [DeleteRecurringDepositProductsProductIdResponse](docs/DeleteRecurringDepositProductsProductIdResponse.md)
 - [DeleteReportMailingJobsResponse](docs/DeleteReportMailingJobsResponse.md)
 - [DeleteReportsResponse](docs/DeleteReportsResponse.md)
 - [DeleteResourceTypeResourceIdNotesNoteIdResponse](docs/DeleteResourceTypeResourceIdNotesNoteIdResponse.md)
 - [DeleteRolesRoleIdResponse](docs/DeleteRolesRoleIdResponse.md)
 - [DeleteSavingsAccountsAccountIdResponse](docs/DeleteSavingsAccountsAccountIdResponse.md)
 - [DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse](docs/DeleteSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.md)
 - [DeleteSavingsProductsProductIdResponse](docs/DeleteSavingsProductsProductIdResponse.md)
 - [DeleteSelfBeneficiariesTPTBeneficiaryIdResponse](docs/DeleteSelfBeneficiariesTPTBeneficiaryIdResponse.md)
 - [DeleteTellersTellerIdCashiersCashierIdResponse](docs/DeleteTellersTellerIdCashiersCashierIdResponse.md)
 - [DeleteTemplatesTemplateIdResponse](docs/DeleteTemplatesTemplateIdResponse.md)
 - [DeleteUsersUserIdResponse](docs/DeleteUsersUserIdResponse.md)
 - [DelinquencyBucket](docs/DelinquencyBucket.md)
 - [DelinquencyBucketData](docs/DelinquencyBucketData.md)
 - [DelinquencyBucketRequest](docs/DelinquencyBucketRequest.md)
 - [DelinquencyRange](docs/DelinquencyRange.md)
 - [DelinquencyRangeData](docs/DelinquencyRangeData.md)
 - [DelinquencyRangeRequest](docs/DelinquencyRangeRequest.md)
 - [DepositAccountOnHoldTransactionData](docs/DepositAccountOnHoldTransactionData.md)
 - [DisbursementDetail](docs/DisbursementDetail.md)
 - [DisbursementTransactionsRequest](docs/DisbursementTransactionsRequest.md)
 - [DocumentData](docs/DocumentData.md)
 - [Entity](docs/Entity.md)
 - [EnumOptionData](docs/EnumOptionData.md)
 - [EnumOptionType](docs/EnumOptionType.md)
 - [Event](docs/Event.md)
 - [ExecuteJobRequest](docs/ExecuteJobRequest.md)
 - [ExtensionData](docs/ExtensionData.md)
 - [ExternalAssetOwnerRequest](docs/ExternalAssetOwnerRequest.md)
 - [ExternalAssetOwnerSearchRequest](docs/ExternalAssetOwnerSearchRequest.md)
 - [ExternalAssetOwnerTransferChangesData](docs/ExternalAssetOwnerTransferChangesData.md)
 - [ExternalEventConfigurationItemResponse](docs/ExternalEventConfigurationItemResponse.md)
 - [ExternalEventConfigurationResponse](docs/ExternalEventConfigurationResponse.md)
 - [ExternalEventConfigurationUpdateRequest](docs/ExternalEventConfigurationUpdateRequest.md)
 - [ExternalEventConfigurationUpdateResponse](docs/ExternalEventConfigurationUpdateResponse.md)
 - [ExternalEventResponse](docs/ExternalEventResponse.md)
 - [ExternalId](docs/ExternalId.md)
 - [ExternalOwnerJournalEntryData](docs/ExternalOwnerJournalEntryData.md)
 - [ExternalOwnerTransferJournalEntryData](docs/ExternalOwnerTransferJournalEntryData.md)
 - [ExternalServicesPropertiesData](docs/ExternalServicesPropertiesData.md)
 - [ExternalTransferData](docs/ExternalTransferData.md)
 - [ExternalTransferDataDetails](docs/ExternalTransferDataDetails.md)
 - [ExternalTransferLoanData](docs/ExternalTransferLoanData.md)
 - [ExternalTransferLoanProductAttributesData](docs/ExternalTransferLoanProductAttributesData.md)
 - [ExternalTransferOwnerData](docs/ExternalTransferOwnerData.md)
 - [Field](docs/Field.md)
 - [FieldConfigurationData](docs/FieldConfigurationData.md)
 - [FilterData](docs/FilterData.md)
 - [FinancialActivityAccountData](docs/FinancialActivityAccountData.md)
 - [FinancialActivityData](docs/FinancialActivityData.md)
 - [FloatingRate](docs/FloatingRate.md)
 - [FloatingRateData](docs/FloatingRateData.md)
 - [FloatingRatePeriod](docs/FloatingRatePeriod.md)
 - [FloatingRatePeriodData](docs/FloatingRatePeriodData.md)
 - [FloatingRatePeriodRequest](docs/FloatingRatePeriodRequest.md)
 - [FloatingRateRequest](docs/FloatingRateRequest.md)
 - [FormDataBodyPart](docs/FormDataBodyPart.md)
 - [FormDataContentDisposition](docs/FormDataContentDisposition.md)
 - [Fund](docs/Fund.md)
 - [FundData](docs/FundData.md)
 - [FundRequest](docs/FundRequest.md)
 - [GLAccount](docs/GLAccount.md)
 - [GLAccountData](docs/GLAccountData.md)
 - [GLAccountDataForLookup](docs/GLAccountDataForLookup.md)
 - [GLClosureData](docs/GLClosureData.md)
 - [GeoCodeData](docs/GeoCodeData.md)
 - [GetAccountNumberFormatsIdResponse](docs/GetAccountNumberFormatsIdResponse.md)
 - [GetAccountNumberFormatsResponseTemplate](docs/GetAccountNumberFormatsResponseTemplate.md)
 - [GetAccountOptions](docs/GetAccountOptions.md)
 - [GetAccountTransferTemplateResponse](docs/GetAccountTransferTemplateResponse.md)
 - [GetAccountTransfersFromAccountType](docs/GetAccountTransfersFromAccountType.md)
 - [GetAccountTransfersFromAccountTypeOptions](docs/GetAccountTransfersFromAccountTypeOptions.md)
 - [GetAccountTransfersFromClientOptions](docs/GetAccountTransfersFromClientOptions.md)
 - [GetAccountTransfersFromOffice](docs/GetAccountTransfersFromOffice.md)
 - [GetAccountTransfersFromOfficeOptions](docs/GetAccountTransfersFromOfficeOptions.md)
 - [GetAccountTransfersPageItems](docs/GetAccountTransfersPageItems.md)
 - [GetAccountTransfersPageItemsCurrency](docs/GetAccountTransfersPageItemsCurrency.md)
 - [GetAccountTransfersPageItemsFromAccount](docs/GetAccountTransfersPageItemsFromAccount.md)
 - [GetAccountTransfersPageItemsFromOffice](docs/GetAccountTransfersPageItemsFromOffice.md)
 - [GetAccountTransfersPageItemsToAccountType](docs/GetAccountTransfersPageItemsToAccountType.md)
 - [GetAccountTransfersResponse](docs/GetAccountTransfersResponse.md)
 - [GetAccountTransfersStatus](docs/GetAccountTransfersStatus.md)
 - [GetAccountTransfersTemplateRefundByTransferCurrency](docs/GetAccountTransfersTemplateRefundByTransferCurrency.md)
 - [GetAccountTransfersTemplateRefundByTransferFromAccount](docs/GetAccountTransfersTemplateRefundByTransferFromAccount.md)
 - [GetAccountTransfersTemplateRefundByTransferFromAccountOptions](docs/GetAccountTransfersTemplateRefundByTransferFromAccountOptions.md)
 - [GetAccountTransfersTemplateRefundByTransferFromClient](docs/GetAccountTransfersTemplateRefundByTransferFromClient.md)
 - [GetAccountTransfersTemplateRefundByTransferFromClientOptions](docs/GetAccountTransfersTemplateRefundByTransferFromClientOptions.md)
 - [GetAccountTransfersTemplateRefundByTransferFromOffice](docs/GetAccountTransfersTemplateRefundByTransferFromOffice.md)
 - [GetAccountTransfersTemplateRefundByTransferFromOfficeOptions](docs/GetAccountTransfersTemplateRefundByTransferFromOfficeOptions.md)
 - [GetAccountTransfersTemplateRefundByTransferResponse](docs/GetAccountTransfersTemplateRefundByTransferResponse.md)
 - [GetAccountTransfersTemplateRefundByTransferToAccount](docs/GetAccountTransfersTemplateRefundByTransferToAccount.md)
 - [GetAccountTransfersTemplateRefundByTransferToClient](docs/GetAccountTransfersTemplateRefundByTransferToClient.md)
 - [GetAccountTransfersTemplateResponse](docs/GetAccountTransfersTemplateResponse.md)
 - [GetAccountTransfersTimeline](docs/GetAccountTransfersTimeline.md)
 - [GetAccountTransfersToAccountTypeOptions](docs/GetAccountTransfersToAccountTypeOptions.md)
 - [GetAccountTransfersToOfficeOptions](docs/GetAccountTransfersToOfficeOptions.md)
 - [GetAccountsChargeCalculationType](docs/GetAccountsChargeCalculationType.md)
 - [GetAccountsChargeTimeType](docs/GetAccountsChargeTimeType.md)
 - [GetAccountsCharges](docs/GetAccountsCharges.md)
 - [GetAccountsChargesCurrency](docs/GetAccountsChargesCurrency.md)
 - [GetAccountsCurrency](docs/GetAccountsCurrency.md)
 - [GetAccountsLinkedToPocketResponse](docs/GetAccountsLinkedToPocketResponse.md)
 - [GetAccountsLockPeriodTypeEnum](docs/GetAccountsLockPeriodTypeEnum.md)
 - [GetAccountsPageItems](docs/GetAccountsPageItems.md)
 - [GetAccountsPurchasedShares](docs/GetAccountsPurchasedShares.md)
 - [GetAccountsPurchasedSharesStatus](docs/GetAccountsPurchasedSharesStatus.md)
 - [GetAccountsPurchasedSharesType](docs/GetAccountsPurchasedSharesType.md)
 - [GetAccountsStatus](docs/GetAccountsStatus.md)
 - [GetAccountsSummary](docs/GetAccountsSummary.md)
 - [GetAccountsTimeline](docs/GetAccountsTimeline.md)
 - [GetAccountsTypeAccountIdResponse](docs/GetAccountsTypeAccountIdResponse.md)
 - [GetAccountsTypeProductOptions](docs/GetAccountsTypeProductOptions.md)
 - [GetAccountsTypePurchasedShares](docs/GetAccountsTypePurchasedShares.md)
 - [GetAccountsTypeResponse](docs/GetAccountsTypeResponse.md)
 - [GetAccountsTypeStatus](docs/GetAccountsTypeStatus.md)
 - [GetAccountsTypeSummary](docs/GetAccountsTypeSummary.md)
 - [GetAccountsTypeTemplateResponse](docs/GetAccountsTypeTemplateResponse.md)
 - [GetAccountsTypeTimeline](docs/GetAccountsTypeTimeline.md)
 - [GetAssetType](docs/GetAssetType.md)
 - [GetCentersAccountType](docs/GetCentersAccountType.md)
 - [GetCentersCenterIdAccountsResponse](docs/GetCentersCenterIdAccountsResponse.md)
 - [GetCentersCenterIdCurrency](docs/GetCentersCenterIdCurrency.md)
 - [GetCentersCenterIdResponse](docs/GetCentersCenterIdResponse.md)
 - [GetCentersCenterIdStatus](docs/GetCentersCenterIdStatus.md)
 - [GetCentersDepositType](docs/GetCentersDepositType.md)
 - [GetCentersOfficeOptions](docs/GetCentersOfficeOptions.md)
 - [GetCentersPageItems](docs/GetCentersPageItems.md)
 - [GetCentersResponse](docs/GetCentersResponse.md)
 - [GetCentersSavingsAccounts](docs/GetCentersSavingsAccounts.md)
 - [GetCentersStaffOptions](docs/GetCentersStaffOptions.md)
 - [GetCentersStatus](docs/GetCentersStatus.md)
 - [GetCentersTemplateResponse](docs/GetCentersTemplateResponse.md)
 - [GetCentersTimeline](docs/GetCentersTimeline.md)
 - [GetChargeAppliesTo](docs/GetChargeAppliesTo.md)
 - [GetChargeCalculationType](docs/GetChargeCalculationType.md)
 - [GetChargeOffReasonToExpenseAccountMappings](docs/GetChargeOffReasonToExpenseAccountMappings.md)
 - [GetChargePaymentMode](docs/GetChargePaymentMode.md)
 - [GetChargeTimeType](docs/GetChargeTimeType.md)
 - [GetChargesAppliesTo](docs/GetChargesAppliesTo.md)
 - [GetChargesAppliesToResponse](docs/GetChargesAppliesToResponse.md)
 - [GetChargesCalculationTypeResponse](docs/GetChargesCalculationTypeResponse.md)
 - [GetChargesChargeCalculationType](docs/GetChargesChargeCalculationType.md)
 - [GetChargesChargeTimeType](docs/GetChargesChargeTimeType.md)
 - [GetChargesCurrency](docs/GetChargesCurrency.md)
 - [GetChargesCurrencyResponse](docs/GetChargesCurrencyResponse.md)
 - [GetChargesPaymentModeResponse](docs/GetChargesPaymentModeResponse.md)
 - [GetChargesResponse](docs/GetChargesResponse.md)
 - [GetChargesTaxGroup](docs/GetChargesTaxGroup.md)
 - [GetChargesTimeTypeResponse](docs/GetChargesTimeTypeResponse.md)
 - [GetClientChargeCalculationType](docs/GetClientChargeCalculationType.md)
 - [GetClientChargeCurrency](docs/GetClientChargeCurrency.md)
 - [GetClientChargeTimeType](docs/GetClientChargeTimeType.md)
 - [GetClientIdProductIdAccountingMappings](docs/GetClientIdProductIdAccountingMappings.md)
 - [GetClientIdProductIdChargeOptions](docs/GetClientIdProductIdChargeOptions.md)
 - [GetClientIdProductIdLockinPeriodFrequencyTypeOptions](docs/GetClientIdProductIdLockinPeriodFrequencyTypeOptions.md)
 - [GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions](docs/GetClientIdProductIdMinimumActivePeriodFrequencyTypeOptions.md)
 - [GetClientIdProductIdProductOptions](docs/GetClientIdProductIdProductOptions.md)
 - [GetClientObligeeDetailsResponse](docs/GetClientObligeeDetailsResponse.md)
 - [GetClientStatus](docs/GetClientStatus.md)
 - [GetClientTransactionsCurrency](docs/GetClientTransactionsCurrency.md)
 - [GetClientTransferProposalDateResponse](docs/GetClientTransferProposalDateResponse.md)
 - [GetClientsChargesPageItems](docs/GetClientsChargesPageItems.md)
 - [GetClientsClientIdAccountsResponse](docs/GetClientsClientIdAccountsResponse.md)
 - [GetClientsClientIdChargesResponse](docs/GetClientsClientIdChargesResponse.md)
 - [GetClientsClientIdIdentifiersResponse](docs/GetClientsClientIdIdentifiersResponse.md)
 - [GetClientsClientIdResponse](docs/GetClientsClientIdResponse.md)
 - [GetClientsClientIdStatus](docs/GetClientsClientIdStatus.md)
 - [GetClientsClientIdTransactionsResponse](docs/GetClientsClientIdTransactionsResponse.md)
 - [GetClientsClientIdTransactionsTransactionIdResponse](docs/GetClientsClientIdTransactionsTransactionIdResponse.md)
 - [GetClientsClientIdTransactionsType](docs/GetClientsClientIdTransactionsType.md)
 - [GetClientsColumnHeaderData](docs/GetClientsColumnHeaderData.md)
 - [GetClientsDataTables](docs/GetClientsDataTables.md)
 - [GetClientsDocumentType](docs/GetClientsDocumentType.md)
 - [GetClientsGroups](docs/GetClientsGroups.md)
 - [GetClientsLoanAccounts](docs/GetClientsLoanAccounts.md)
 - [GetClientsLoanAccountsStatus](docs/GetClientsLoanAccountsStatus.md)
 - [GetClientsLoanAccountsType](docs/GetClientsLoanAccountsType.md)
 - [GetClientsLoansAccountsCurrency](docs/GetClientsLoansAccountsCurrency.md)
 - [GetClientsOfficeOptions](docs/GetClientsOfficeOptions.md)
 - [GetClientsPageItems](docs/GetClientsPageItems.md)
 - [GetClientsPageItemsResponse](docs/GetClientsPageItemsResponse.md)
 - [GetClientsResponse](docs/GetClientsResponse.md)
 - [GetClientsSavingProductOptions](docs/GetClientsSavingProductOptions.md)
 - [GetClientsSavingsAccounts](docs/GetClientsSavingsAccounts.md)
 - [GetClientsSavingsAccountsCurrency](docs/GetClientsSavingsAccountsCurrency.md)
 - [GetClientsSavingsAccountsDepositType](docs/GetClientsSavingsAccountsDepositType.md)
 - [GetClientsSavingsAccountsStatus](docs/GetClientsSavingsAccountsStatus.md)
 - [GetClientsStaffOptions](docs/GetClientsStaffOptions.md)
 - [GetClientsTemplateResponse](docs/GetClientsTemplateResponse.md)
 - [GetClientsTimeline](docs/GetClientsTimeline.md)
 - [GetCodeValueData](docs/GetCodeValueData.md)
 - [GetCodeValuesDataResponse](docs/GetCodeValuesDataResponse.md)
 - [GetCodesResponse](docs/GetCodesResponse.md)
 - [GetCollateralCurrencyResponse](docs/GetCollateralCurrencyResponse.md)
 - [GetCollateralTypeResponse](docs/GetCollateralTypeResponse.md)
 - [GetDataTablesResponse](docs/GetDataTablesResponse.md)
 - [GetDelinquencyActionsResponse](docs/GetDelinquencyActionsResponse.md)
 - [GetDelinquencyTagHistoryResponse](docs/GetDelinquencyTagHistoryResponse.md)
 - [GetEntityDatatableChecksResponse](docs/GetEntityDatatableChecksResponse.md)
 - [GetEntityDatatableChecksTemplateResponse](docs/GetEntityDatatableChecksTemplateResponse.md)
 - [GetEquityType](docs/GetEquityType.md)
 - [GetFinancialActivityAccountsResponse](docs/GetFinancialActivityAccountsResponse.md)
 - [GetFixedDepositAccountsAccountChart](docs/GetFixedDepositAccountsAccountChart.md)
 - [GetFixedDepositAccountsAccountChartCurrency](docs/GetFixedDepositAccountsAccountChartCurrency.md)
 - [GetFixedDepositAccountsAccountIdCurrency](docs/GetFixedDepositAccountsAccountIdCurrency.md)
 - [GetFixedDepositAccountsAccountIdResponse](docs/GetFixedDepositAccountsAccountIdResponse.md)
 - [GetFixedDepositAccountsAccountIdSummary](docs/GetFixedDepositAccountsAccountIdSummary.md)
 - [GetFixedDepositAccountsChartSlabs](docs/GetFixedDepositAccountsChartSlabs.md)
 - [GetFixedDepositAccountsCurrency](docs/GetFixedDepositAccountsCurrency.md)
 - [GetFixedDepositAccountsDepositPeriodFrequency](docs/GetFixedDepositAccountsDepositPeriodFrequency.md)
 - [GetFixedDepositAccountsInterestCalculationDaysInYearType](docs/GetFixedDepositAccountsInterestCalculationDaysInYearType.md)
 - [GetFixedDepositAccountsInterestCalculationType](docs/GetFixedDepositAccountsInterestCalculationType.md)
 - [GetFixedDepositAccountsInterestCompoundingPeriodType](docs/GetFixedDepositAccountsInterestCompoundingPeriodType.md)
 - [GetFixedDepositAccountsInterestPostingPeriodType](docs/GetFixedDepositAccountsInterestPostingPeriodType.md)
 - [GetFixedDepositAccountsMaxDepositTermType](docs/GetFixedDepositAccountsMaxDepositTermType.md)
 - [GetFixedDepositAccountsMinDepositTermType](docs/GetFixedDepositAccountsMinDepositTermType.md)
 - [GetFixedDepositAccountsPeriodType](docs/GetFixedDepositAccountsPeriodType.md)
 - [GetFixedDepositAccountsPeriodTypes](docs/GetFixedDepositAccountsPeriodTypes.md)
 - [GetFixedDepositAccountsProductOptions](docs/GetFixedDepositAccountsProductOptions.md)
 - [GetFixedDepositAccountsResponse](docs/GetFixedDepositAccountsResponse.md)
 - [GetFixedDepositAccountsStatus](docs/GetFixedDepositAccountsStatus.md)
 - [GetFixedDepositAccountsSummary](docs/GetFixedDepositAccountsSummary.md)
 - [GetFixedDepositAccountsTemplateResponse](docs/GetFixedDepositAccountsTemplateResponse.md)
 - [GetFixedDepositAccountsTimeline](docs/GetFixedDepositAccountsTimeline.md)
 - [GetFixedDepositProductsAccountingRule](docs/GetFixedDepositProductsAccountingRule.md)
 - [GetFixedDepositProductsCurrency](docs/GetFixedDepositProductsCurrency.md)
 - [GetFixedDepositProductsGlAccount](docs/GetFixedDepositProductsGlAccount.md)
 - [GetFixedDepositProductsInterestCalculationDaysInYearType](docs/GetFixedDepositProductsInterestCalculationDaysInYearType.md)
 - [GetFixedDepositProductsInterestCalculationType](docs/GetFixedDepositProductsInterestCalculationType.md)
 - [GetFixedDepositProductsInterestCompoundingPeriodType](docs/GetFixedDepositProductsInterestCompoundingPeriodType.md)
 - [GetFixedDepositProductsInterestPostingPeriodType](docs/GetFixedDepositProductsInterestPostingPeriodType.md)
 - [GetFixedDepositProductsMaxDepositTermType](docs/GetFixedDepositProductsMaxDepositTermType.md)
 - [GetFixedDepositProductsMinDepositTermType](docs/GetFixedDepositProductsMinDepositTermType.md)
 - [GetFixedDepositProductsProductIdAccountingMappings](docs/GetFixedDepositProductsProductIdAccountingMappings.md)
 - [GetFixedDepositProductsProductIdActiveChart](docs/GetFixedDepositProductsProductIdActiveChart.md)
 - [GetFixedDepositProductsProductIdChartSlabs](docs/GetFixedDepositProductsProductIdChartSlabs.md)
 - [GetFixedDepositProductsProductIdCurrency](docs/GetFixedDepositProductsProductIdCurrency.md)
 - [GetFixedDepositProductsProductIdFeeToIncomeAccountMappings](docs/GetFixedDepositProductsProductIdFeeToIncomeAccountMappings.md)
 - [GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge](docs/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsCharge.md)
 - [GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount](docs/GetFixedDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.md)
 - [GetFixedDepositProductsProductIdInterestCompoundingPeriodType](docs/GetFixedDepositProductsProductIdInterestCompoundingPeriodType.md)
 - [GetFixedDepositProductsProductIdMaxDepositTermType](docs/GetFixedDepositProductsProductIdMaxDepositTermType.md)
 - [GetFixedDepositProductsProductIdMinDepositTermType](docs/GetFixedDepositProductsProductIdMinDepositTermType.md)
 - [GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings](docs/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappings.md)
 - [GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge](docs/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.md)
 - [GetFixedDepositProductsProductIdPeriodType](docs/GetFixedDepositProductsProductIdPeriodType.md)
 - [GetFixedDepositProductsProductIdPreClosurePenalInterestOnType](docs/GetFixedDepositProductsProductIdPreClosurePenalInterestOnType.md)
 - [GetFixedDepositProductsProductIdResponse](docs/GetFixedDepositProductsProductIdResponse.md)
 - [GetFixedDepositProductsResponse](docs/GetFixedDepositProductsResponse.md)
 - [GetFloatingRatesResponse](docs/GetFloatingRatesResponse.md)
 - [GetFromAccountOptions](docs/GetFromAccountOptions.md)
 - [GetFromAccountStandingInstructionSwagger](docs/GetFromAccountStandingInstructionSwagger.md)
 - [GetFromAccountTypeOptionsResponseStandingInstructionSwagger](docs/GetFromAccountTypeOptionsResponseStandingInstructionSwagger.md)
 - [GetFromAccountTypeResponseStandingInstructionSwagger](docs/GetFromAccountTypeResponseStandingInstructionSwagger.md)
 - [GetFromAccountTypeStandingInstructionSwagger](docs/GetFromAccountTypeStandingInstructionSwagger.md)
 - [GetFromClientOptionsResponseStandingInstructionSwagger](docs/GetFromClientOptionsResponseStandingInstructionSwagger.md)
 - [GetFromClientStandingInstructionSwagger](docs/GetFromClientStandingInstructionSwagger.md)
 - [GetFromOfficeOptionsResponseStandingInstructionSwagger](docs/GetFromOfficeOptionsResponseStandingInstructionSwagger.md)
 - [GetFromOfficeResponseStandingInstructionSwagger](docs/GetFromOfficeResponseStandingInstructionSwagger.md)
 - [GetFromOfficeStandingInstructionSwagger](docs/GetFromOfficeStandingInstructionSwagger.md)
 - [GetGLAccountData](docs/GetGLAccountData.md)
 - [GetGLAccountsResponse](docs/GetGLAccountsResponse.md)
 - [GetGLAccountsTemplateResponse](docs/GetGLAccountsTemplateResponse.md)
 - [GetGlAccountMapping](docs/GetGlAccountMapping.md)
 - [GetGlClosureResponse](docs/GetGlClosureResponse.md)
 - [GetGlobalConfigurationsResponse](docs/GetGlobalConfigurationsResponse.md)
 - [GetGroupsGroupIdAccountsLoanAccounts](docs/GetGroupsGroupIdAccountsLoanAccounts.md)
 - [GetGroupsGroupIdAccountsLoanType](docs/GetGroupsGroupIdAccountsLoanType.md)
 - [GetGroupsGroupIdAccountsMemberLoanAccounts](docs/GetGroupsGroupIdAccountsMemberLoanAccounts.md)
 - [GetGroupsGroupIdAccountsMemberLoanStatus](docs/GetGroupsGroupIdAccountsMemberLoanStatus.md)
 - [GetGroupsGroupIdAccountsMemberLoanType](docs/GetGroupsGroupIdAccountsMemberLoanType.md)
 - [GetGroupsGroupIdAccountsMemberSavingsAccounts](docs/GetGroupsGroupIdAccountsMemberSavingsAccounts.md)
 - [GetGroupsGroupIdAccountsResponse](docs/GetGroupsGroupIdAccountsResponse.md)
 - [GetGroupsGroupIdAccountsSavingAccountType](docs/GetGroupsGroupIdAccountsSavingAccountType.md)
 - [GetGroupsGroupIdAccountsSavingAccounts](docs/GetGroupsGroupIdAccountsSavingAccounts.md)
 - [GetGroupsGroupIdAccountsSavingCurrency](docs/GetGroupsGroupIdAccountsSavingCurrency.md)
 - [GetGroupsGroupIdAccountsSavingStatus](docs/GetGroupsGroupIdAccountsSavingStatus.md)
 - [GetGroupsGroupIdAccountsStatus](docs/GetGroupsGroupIdAccountsStatus.md)
 - [GetGroupsGroupIdResponse](docs/GetGroupsGroupIdResponse.md)
 - [GetGroupsGroupIdTimeline](docs/GetGroupsGroupIdTimeline.md)
 - [GetGroupsPageItems](docs/GetGroupsPageItems.md)
 - [GetGroupsResponse](docs/GetGroupsResponse.md)
 - [GetGroupsStatus](docs/GetGroupsStatus.md)
 - [GetGroupsTemplateClientOptions](docs/GetGroupsTemplateClientOptions.md)
 - [GetGroupsTemplateColumnHeaderData](docs/GetGroupsTemplateColumnHeaderData.md)
 - [GetGroupsTemplateDatatables](docs/GetGroupsTemplateDatatables.md)
 - [GetGroupsTemplateOfficeOptions](docs/GetGroupsTemplateOfficeOptions.md)
 - [GetGroupsTemplateResponse](docs/GetGroupsTemplateResponse.md)
 - [GetGroupsTemplateStaffOptions](docs/GetGroupsTemplateStaffOptions.md)
 - [GetHolidaysResponse](docs/GetHolidaysResponse.md)
 - [GetHookResponse](docs/GetHookResponse.md)
 - [GetHookTemplateResponse](docs/GetHookTemplateResponse.md)
 - [GetIncomeFromFeeAccountId](docs/GetIncomeFromFeeAccountId.md)
 - [GetIncomeType](docs/GetIncomeType.md)
 - [GetInstructionTypeOptionsResponseStandingInstructionSwagger](docs/GetInstructionTypeOptionsResponseStandingInstructionSwagger.md)
 - [GetInstructionTypeStandingInstructionSwagger](docs/GetInstructionTypeStandingInstructionSwagger.md)
 - [GetInterestRateChartsChartSlabs](docs/GetInterestRateChartsChartSlabs.md)
 - [GetInterestRateChartsCurrency](docs/GetInterestRateChartsCurrency.md)
 - [GetInterestRateChartsResponse](docs/GetInterestRateChartsResponse.md)
 - [GetInterestRateChartsTemplatePeriodTypes](docs/GetInterestRateChartsTemplatePeriodTypes.md)
 - [GetInterestRateChartsTemplateResponse](docs/GetInterestRateChartsTemplateResponse.md)
 - [GetJobsJobIDJobRunHistoryResponse](docs/GetJobsJobIDJobRunHistoryResponse.md)
 - [GetJobsResponse](docs/GetJobsResponse.md)
 - [GetJournalEntriesTransactionIdResponse](docs/GetJournalEntriesTransactionIdResponse.md)
 - [GetLoanAccountingMappings](docs/GetLoanAccountingMappings.md)
 - [GetLoanCharge](docs/GetLoanCharge.md)
 - [GetLoanChargeCalculationType](docs/GetLoanChargeCalculationType.md)
 - [GetLoanChargeCurrency](docs/GetLoanChargeCurrency.md)
 - [GetLoanChargeTemplateChargeAppliesTo](docs/GetLoanChargeTemplateChargeAppliesTo.md)
 - [GetLoanChargeTemplateChargeOptions](docs/GetLoanChargeTemplateChargeOptions.md)
 - [GetLoanChargeTemplateChargeTimeType](docs/GetLoanChargeTemplateChargeTimeType.md)
 - [GetLoanChargeTimeType](docs/GetLoanChargeTimeType.md)
 - [GetLoanCurrency](docs/GetLoanCurrency.md)
 - [GetLoanFeeToIncomeAccountMappings](docs/GetLoanFeeToIncomeAccountMappings.md)
 - [GetLoanPaymentChannelToFundSourceMappings](docs/GetLoanPaymentChannelToFundSourceMappings.md)
 - [GetLoanProductsAccountingMappingOptions](docs/GetLoanProductsAccountingMappingOptions.md)
 - [GetLoanProductsAccountingRule](docs/GetLoanProductsAccountingRule.md)
 - [GetLoanProductsAmortizationType](docs/GetLoanProductsAmortizationType.md)
 - [GetLoanProductsAssetAccountOptions](docs/GetLoanProductsAssetAccountOptions.md)
 - [GetLoanProductsChargeAppliesTo](docs/GetLoanProductsChargeAppliesTo.md)
 - [GetLoanProductsChargeOffReasonOptions](docs/GetLoanProductsChargeOffReasonOptions.md)
 - [GetLoanProductsChargeOptions](docs/GetLoanProductsChargeOptions.md)
 - [GetLoanProductsCurrency](docs/GetLoanProductsCurrency.md)
 - [GetLoanProductsCurrencyOptions](docs/GetLoanProductsCurrencyOptions.md)
 - [GetLoanProductsDaysInMonthType](docs/GetLoanProductsDaysInMonthType.md)
 - [GetLoanProductsDaysInYearCustomStrategy](docs/GetLoanProductsDaysInYearCustomStrategy.md)
 - [GetLoanProductsDaysInYearType](docs/GetLoanProductsDaysInYearType.md)
 - [GetLoanProductsExpenseAccountOptions](docs/GetLoanProductsExpenseAccountOptions.md)
 - [GetLoanProductsExpenseType](docs/GetLoanProductsExpenseType.md)
 - [GetLoanProductsIncomeAccountOptions](docs/GetLoanProductsIncomeAccountOptions.md)
 - [GetLoanProductsIncomeType](docs/GetLoanProductsIncomeType.md)
 - [GetLoanProductsInterestRateFrequencyType](docs/GetLoanProductsInterestRateFrequencyType.md)
 - [GetLoanProductsInterestRateTemplateFrequencyType](docs/GetLoanProductsInterestRateTemplateFrequencyType.md)
 - [GetLoanProductsInterestRecalculationCompoundingFrequencyType](docs/GetLoanProductsInterestRecalculationCompoundingFrequencyType.md)
 - [GetLoanProductsInterestRecalculationCompoundingType](docs/GetLoanProductsInterestRecalculationCompoundingType.md)
 - [GetLoanProductsInterestRecalculationData](docs/GetLoanProductsInterestRecalculationData.md)
 - [GetLoanProductsInterestRecalculationTemplateData](docs/GetLoanProductsInterestRecalculationTemplateData.md)
 - [GetLoanProductsInterestTemplateType](docs/GetLoanProductsInterestTemplateType.md)
 - [GetLoanProductsInterestType](docs/GetLoanProductsInterestType.md)
 - [GetLoanProductsLiabilityAccountOptions](docs/GetLoanProductsLiabilityAccountOptions.md)
 - [GetLoanProductsLiabilityTagId](docs/GetLoanProductsLiabilityTagId.md)
 - [GetLoanProductsLiabilityType](docs/GetLoanProductsLiabilityType.md)
 - [GetLoanProductsLiabilityUsage](docs/GetLoanProductsLiabilityUsage.md)
 - [GetLoanProductsParamType](docs/GetLoanProductsParamType.md)
 - [GetLoanProductsPaymentTypeOptions](docs/GetLoanProductsPaymentTypeOptions.md)
 - [GetLoanProductsPreClosureInterestCalculationStrategy](docs/GetLoanProductsPreClosureInterestCalculationStrategy.md)
 - [GetLoanProductsPrincipalVariationsForBorrowerCycle](docs/GetLoanProductsPrincipalVariationsForBorrowerCycle.md)
 - [GetLoanProductsProductIdResponse](docs/GetLoanProductsProductIdResponse.md)
 - [GetLoanProductsRepaymentFrequencyType](docs/GetLoanProductsRepaymentFrequencyType.md)
 - [GetLoanProductsRepaymentStartDateType](docs/GetLoanProductsRepaymentStartDateType.md)
 - [GetLoanProductsRepaymentTemplateFrequencyType](docs/GetLoanProductsRepaymentTemplateFrequencyType.md)
 - [GetLoanProductsRescheduleStrategyType](docs/GetLoanProductsRescheduleStrategyType.md)
 - [GetLoanProductsResponse](docs/GetLoanProductsResponse.md)
 - [GetLoanProductsTemplateCurrency](docs/GetLoanProductsTemplateCurrency.md)
 - [GetLoanProductsTemplateResponse](docs/GetLoanProductsTemplateResponse.md)
 - [GetLoanProductsTransactionProcessingStrategyOptions](docs/GetLoanProductsTransactionProcessingStrategyOptions.md)
 - [GetLoanProductsValueConditionType](docs/GetLoanProductsValueConditionType.md)
 - [GetLoanProductsValueConditionTypeOptions](docs/GetLoanProductsValueConditionTypeOptions.md)
 - [GetLoanRescheduleRequestResponse](docs/GetLoanRescheduleRequestResponse.md)
 - [GetLoanRescheduleRequestStatus](docs/GetLoanRescheduleRequestStatus.md)
 - [GetLoanTransactionRelation](docs/GetLoanTransactionRelation.md)
 - [GetLoansApprovalTemplateResponse](docs/GetLoansApprovalTemplateResponse.md)
 - [GetLoansChargePaymentMode](docs/GetLoansChargePaymentMode.md)
 - [GetLoansCurrency](docs/GetLoansCurrency.md)
 - [GetLoansLoanIdAmortizationType](docs/GetLoansLoanIdAmortizationType.md)
 - [GetLoansLoanIdChargeCalculationType](docs/GetLoansLoanIdChargeCalculationType.md)
 - [GetLoansLoanIdChargePaymentMode](docs/GetLoansLoanIdChargePaymentMode.md)
 - [GetLoansLoanIdChargeTimeType](docs/GetLoansLoanIdChargeTimeType.md)
 - [GetLoansLoanIdChargesChargeIdResponse](docs/GetLoansLoanIdChargesChargeIdResponse.md)
 - [GetLoansLoanIdChargesTemplateResponse](docs/GetLoansLoanIdChargesTemplateResponse.md)
 - [GetLoansLoanIdCodeValueData](docs/GetLoansLoanIdCodeValueData.md)
 - [GetLoansLoanIdCollateralsResponse](docs/GetLoansLoanIdCollateralsResponse.md)
 - [GetLoansLoanIdCurrency](docs/GetLoansLoanIdCurrency.md)
 - [GetLoansLoanIdDelinquencyPausePeriod](docs/GetLoansLoanIdDelinquencyPausePeriod.md)
 - [GetLoansLoanIdDelinquencySummary](docs/GetLoansLoanIdDelinquencySummary.md)
 - [GetLoansLoanIdDisbursementDetails](docs/GetLoansLoanIdDisbursementDetails.md)
 - [GetLoansLoanIdEnumOptionData](docs/GetLoansLoanIdEnumOptionData.md)
 - [GetLoansLoanIdFeeFrequency](docs/GetLoansLoanIdFeeFrequency.md)
 - [GetLoansLoanIdInterestCalculationPeriodType](docs/GetLoansLoanIdInterestCalculationPeriodType.md)
 - [GetLoansLoanIdInterestRateFrequencyType](docs/GetLoansLoanIdInterestRateFrequencyType.md)
 - [GetLoansLoanIdInterestType](docs/GetLoansLoanIdInterestType.md)
 - [GetLoansLoanIdLinkedAccount](docs/GetLoansLoanIdLinkedAccount.md)
 - [GetLoansLoanIdLoanChargeData](docs/GetLoansLoanIdLoanChargeData.md)
 - [GetLoansLoanIdLoanChargePaidByData](docs/GetLoansLoanIdLoanChargePaidByData.md)
 - [GetLoansLoanIdLoanInstallmentChargeData](docs/GetLoansLoanIdLoanInstallmentChargeData.md)
 - [GetLoansLoanIdLoanInstallmentLevelDelinquency](docs/GetLoansLoanIdLoanInstallmentLevelDelinquency.md)
 - [GetLoansLoanIdLoanRepaymentScheduleInstallmentData](docs/GetLoansLoanIdLoanRepaymentScheduleInstallmentData.md)
 - [GetLoansLoanIdLoanTermEnumData](docs/GetLoansLoanIdLoanTermEnumData.md)
 - [GetLoansLoanIdLoanTermVariations](docs/GetLoansLoanIdLoanTermVariations.md)
 - [GetLoansLoanIdLoanTransactionEnumData](docs/GetLoansLoanIdLoanTransactionEnumData.md)
 - [GetLoansLoanIdLoanTransactionRelation](docs/GetLoansLoanIdLoanTransactionRelation.md)
 - [GetLoansLoanIdLoanType](docs/GetLoansLoanIdLoanType.md)
 - [GetLoansLoanIdOverdueCharges](docs/GetLoansLoanIdOverdueCharges.md)
 - [GetLoansLoanIdPaymentDetailData](docs/GetLoansLoanIdPaymentDetailData.md)
 - [GetLoansLoanIdPaymentType](docs/GetLoansLoanIdPaymentType.md)
 - [GetLoansLoanIdRepaymentFrequencyType](docs/GetLoansLoanIdRepaymentFrequencyType.md)
 - [GetLoansLoanIdRepaymentPeriod](docs/GetLoansLoanIdRepaymentPeriod.md)
 - [GetLoansLoanIdRepaymentSchedule](docs/GetLoansLoanIdRepaymentSchedule.md)
 - [GetLoansLoanIdResponse](docs/GetLoansLoanIdResponse.md)
 - [GetLoansLoanIdStatus](docs/GetLoansLoanIdStatus.md)
 - [GetLoansLoanIdSummary](docs/GetLoansLoanIdSummary.md)
 - [GetLoansLoanIdTermPeriodFrequencyType](docs/GetLoansLoanIdTermPeriodFrequencyType.md)
 - [GetLoansLoanIdTimeline](docs/GetLoansLoanIdTimeline.md)
 - [GetLoansLoanIdTransactions](docs/GetLoansLoanIdTransactions.md)
 - [GetLoansLoanIdTransactionsResponse](docs/GetLoansLoanIdTransactionsResponse.md)
 - [GetLoansLoanIdTransactionsTemplateResponse](docs/GetLoansLoanIdTransactionsTemplateResponse.md)
 - [GetLoansLoanIdTransactionsTransactionIdResponse](docs/GetLoansLoanIdTransactionsTransactionIdResponse.md)
 - [GetLoansProductsInterestCalculationPeriodType](docs/GetLoansProductsInterestCalculationPeriodType.md)
 - [GetLoansResponse](docs/GetLoansResponse.md)
 - [GetLoansTemplateProductOptions](docs/GetLoansTemplateProductOptions.md)
 - [GetLoansTemplateResponse](docs/GetLoansTemplateResponse.md)
 - [GetLoansTemplateTimeline](docs/GetLoansTemplateTimeline.md)
 - [GetLoansTotal](docs/GetLoansTotal.md)
 - [GetLoansTransactionType](docs/GetLoansTransactionType.md)
 - [GetLoansType](docs/GetLoansType.md)
 - [GetLockPeriodTypeEnum](docs/GetLockPeriodTypeEnum.md)
 - [GetNotification](docs/GetNotification.md)
 - [GetNotificationsResponse](docs/GetNotificationsResponse.md)
 - [GetObligeeData](docs/GetObligeeData.md)
 - [GetOfficesResponse](docs/GetOfficesResponse.md)
 - [GetOfficesTemplateResponse](docs/GetOfficesTemplateResponse.md)
 - [GetPageItemsStandingInstructionSwagger](docs/GetPageItemsStandingInstructionSwagger.md)
 - [GetPasswordPreferencesTemplateResponse](docs/GetPasswordPreferencesTemplateResponse.md)
 - [GetPaymentTypeData](docs/GetPaymentTypeData.md)
 - [GetPaymentTypeOptions](docs/GetPaymentTypeOptions.md)
 - [GetPaymentTypesResponse](docs/GetPaymentTypesResponse.md)
 - [GetPermissionsResponse](docs/GetPermissionsResponse.md)
 - [GetPocketData](docs/GetPocketData.md)
 - [GetPocketLoanAccounts](docs/GetPocketLoanAccounts.md)
 - [GetPocketSavingAccounts](docs/GetPocketSavingAccounts.md)
 - [GetPostDatedChecks](docs/GetPostDatedChecks.md)
 - [GetPriorityOptionsResponseStandingInstructionSwagger](docs/GetPriorityOptionsResponseStandingInstructionSwagger.md)
 - [GetPriorityStandingInstructionSwagger](docs/GetPriorityStandingInstructionSwagger.md)
 - [GetProductsAccountingMappingOptions](docs/GetProductsAccountingMappingOptions.md)
 - [GetProductsAccountingMappings](docs/GetProductsAccountingMappings.md)
 - [GetProductsAccountingRule](docs/GetProductsAccountingRule.md)
 - [GetProductsAssetAccountOptions](docs/GetProductsAssetAccountOptions.md)
 - [GetProductsCharges](docs/GetProductsCharges.md)
 - [GetProductsCurrency](docs/GetProductsCurrency.md)
 - [GetProductsEquityAccountOptions](docs/GetProductsEquityAccountOptions.md)
 - [GetProductsIncomeAccountOptions](docs/GetProductsIncomeAccountOptions.md)
 - [GetProductsLiabilityAccountOptions](docs/GetProductsLiabilityAccountOptions.md)
 - [GetProductsLiabilityType](docs/GetProductsLiabilityType.md)
 - [GetProductsLiabilityUsage](docs/GetProductsLiabilityUsage.md)
 - [GetProductsMarketPrice](docs/GetProductsMarketPrice.md)
 - [GetProductsMinimumActivePeriodFrequencyTypeOptions](docs/GetProductsMinimumActivePeriodFrequencyTypeOptions.md)
 - [GetProductsPageItems](docs/GetProductsPageItems.md)
 - [GetProductsTagId](docs/GetProductsTagId.md)
 - [GetProductsTypeProductIdResponse](docs/GetProductsTypeProductIdResponse.md)
 - [GetProductsTypeResponse](docs/GetProductsTypeResponse.md)
 - [GetProvisioningCriteriaCriteriaIdResponse](docs/GetProvisioningCriteriaCriteriaIdResponse.md)
 - [GetProvisioningCriteriaResponse](docs/GetProvisioningCriteriaResponse.md)
 - [GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger](docs/GetRecurrenceFrequencyOptionsResponseStandingInstructionSwagger.md)
 - [GetRecurrenceFrequencyStandingInstructionSwagger](docs/GetRecurrenceFrequencyStandingInstructionSwagger.md)
 - [GetRecurrenceTypeOptionsResponseStandingInstructionSwagger](docs/GetRecurrenceTypeOptionsResponseStandingInstructionSwagger.md)
 - [GetRecurrenceTypeStandingInstructionSwagger](docs/GetRecurrenceTypeStandingInstructionSwagger.md)
 - [GetRecurringCurrency](docs/GetRecurringCurrency.md)
 - [GetRecurringDepositAccountsAccountChart](docs/GetRecurringDepositAccountsAccountChart.md)
 - [GetRecurringDepositAccountsAccountChartCurrency](docs/GetRecurringDepositAccountsAccountChartCurrency.md)
 - [GetRecurringDepositAccountsAccountIdResponse](docs/GetRecurringDepositAccountsAccountIdResponse.md)
 - [GetRecurringDepositAccountsChartSlabs](docs/GetRecurringDepositAccountsChartSlabs.md)
 - [GetRecurringDepositAccountsCurrency](docs/GetRecurringDepositAccountsCurrency.md)
 - [GetRecurringDepositAccountsDepositPeriodFrequency](docs/GetRecurringDepositAccountsDepositPeriodFrequency.md)
 - [GetRecurringDepositAccountsInterestCalculationDaysInYearType](docs/GetRecurringDepositAccountsInterestCalculationDaysInYearType.md)
 - [GetRecurringDepositAccountsInterestCalculationType](docs/GetRecurringDepositAccountsInterestCalculationType.md)
 - [GetRecurringDepositAccountsInterestCompoundingPeriodType](docs/GetRecurringDepositAccountsInterestCompoundingPeriodType.md)
 - [GetRecurringDepositAccountsInterestPostingPeriodType](docs/GetRecurringDepositAccountsInterestPostingPeriodType.md)
 - [GetRecurringDepositAccountsMaxDepositTermType](docs/GetRecurringDepositAccountsMaxDepositTermType.md)
 - [GetRecurringDepositAccountsMinDepositTermType](docs/GetRecurringDepositAccountsMinDepositTermType.md)
 - [GetRecurringDepositAccountsPeriodType](docs/GetRecurringDepositAccountsPeriodType.md)
 - [GetRecurringDepositAccountsPeriodTypes](docs/GetRecurringDepositAccountsPeriodTypes.md)
 - [GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse](docs/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTemplateResponse.md)
 - [GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse](docs/GetRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.md)
 - [GetRecurringDepositAccountsRecurringDepositFrequencyType](docs/GetRecurringDepositAccountsRecurringDepositFrequencyType.md)
 - [GetRecurringDepositAccountsResponse](docs/GetRecurringDepositAccountsResponse.md)
 - [GetRecurringDepositAccountsStatus](docs/GetRecurringDepositAccountsStatus.md)
 - [GetRecurringDepositAccountsSummary](docs/GetRecurringDepositAccountsSummary.md)
 - [GetRecurringDepositAccountsTemplateResponse](docs/GetRecurringDepositAccountsTemplateResponse.md)
 - [GetRecurringDepositAccountsTimeline](docs/GetRecurringDepositAccountsTimeline.md)
 - [GetRecurringDepositProductsAccountingRule](docs/GetRecurringDepositProductsAccountingRule.md)
 - [GetRecurringDepositProductsCurrency](docs/GetRecurringDepositProductsCurrency.md)
 - [GetRecurringDepositProductsGlAccount](docs/GetRecurringDepositProductsGlAccount.md)
 - [GetRecurringDepositProductsInterestCalculationDaysInYearType](docs/GetRecurringDepositProductsInterestCalculationDaysInYearType.md)
 - [GetRecurringDepositProductsInterestCalculationType](docs/GetRecurringDepositProductsInterestCalculationType.md)
 - [GetRecurringDepositProductsInterestCompoundingPeriodType](docs/GetRecurringDepositProductsInterestCompoundingPeriodType.md)
 - [GetRecurringDepositProductsInterestPostingPeriodType](docs/GetRecurringDepositProductsInterestPostingPeriodType.md)
 - [GetRecurringDepositProductsMaxDepositTermType](docs/GetRecurringDepositProductsMaxDepositTermType.md)
 - [GetRecurringDepositProductsMinDepositTermType](docs/GetRecurringDepositProductsMinDepositTermType.md)
 - [GetRecurringDepositProductsProductIdAccountingMappings](docs/GetRecurringDepositProductsProductIdAccountingMappings.md)
 - [GetRecurringDepositProductsProductIdActiveChart](docs/GetRecurringDepositProductsProductIdActiveChart.md)
 - [GetRecurringDepositProductsProductIdChartSlabs](docs/GetRecurringDepositProductsProductIdChartSlabs.md)
 - [GetRecurringDepositProductsProductIdCurrency](docs/GetRecurringDepositProductsProductIdCurrency.md)
 - [GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings](docs/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings.md)
 - [GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge](docs/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsCharge.md)
 - [GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount](docs/GetRecurringDepositProductsProductIdFeeToIncomeAccountMappingsIncomeAccount.md)
 - [GetRecurringDepositProductsProductIdInterestCompoundingPeriodType](docs/GetRecurringDepositProductsProductIdInterestCompoundingPeriodType.md)
 - [GetRecurringDepositProductsProductIdMaxDepositTermType](docs/GetRecurringDepositProductsProductIdMaxDepositTermType.md)
 - [GetRecurringDepositProductsProductIdMinDepositTermType](docs/GetRecurringDepositProductsProductIdMinDepositTermType.md)
 - [GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings](docs/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings.md)
 - [GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge](docs/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.md)
 - [GetRecurringDepositProductsProductIdPeriodType](docs/GetRecurringDepositProductsProductIdPeriodType.md)
 - [GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType](docs/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.md)
 - [GetRecurringDepositProductsProductIdResponse](docs/GetRecurringDepositProductsProductIdResponse.md)
 - [GetRecurringDepositProductsRecurringDepositFrequencyType](docs/GetRecurringDepositProductsRecurringDepositFrequencyType.md)
 - [GetRecurringDepositProductsResponse](docs/GetRecurringDepositProductsResponse.md)
 - [GetRecurringPaymentDetailData](docs/GetRecurringPaymentDetailData.md)
 - [GetRecurringPaymentType](docs/GetRecurringPaymentType.md)
 - [GetRecurringProductOptions](docs/GetRecurringProductOptions.md)
 - [GetRecurringTransactionType](docs/GetRecurringTransactionType.md)
 - [GetRecurringTransactionsCurrency](docs/GetRecurringTransactionsCurrency.md)
 - [GetRecurringTransactionsTransactionType](docs/GetRecurringTransactionsTransactionType.md)
 - [GetReportMailingJobsResponse](docs/GetReportMailingJobsResponse.md)
 - [GetReportMailingJobsTemplate](docs/GetReportMailingJobsTemplate.md)
 - [GetReportsResponse](docs/GetReportsResponse.md)
 - [GetReportsTemplateResponse](docs/GetReportsTemplateResponse.md)
 - [GetRescheduleReasonsAllowedTypes](docs/GetRescheduleReasonsAllowedTypes.md)
 - [GetRescheduleReasonsTemplateResponse](docs/GetRescheduleReasonsTemplateResponse.md)
 - [GetRolesResponse](docs/GetRolesResponse.md)
 - [GetRolesRoleIdPermissionsResponse](docs/GetRolesRoleIdPermissionsResponse.md)
 - [GetRolesRoleIdPermissionsResponsePermissionData](docs/GetRolesRoleIdPermissionsResponsePermissionData.md)
 - [GetRolesRoleIdResponse](docs/GetRolesRoleIdResponse.md)
 - [GetRunReportColumnHeaders](docs/GetRunReportColumnHeaders.md)
 - [GetRunReportResponse](docs/GetRunReportResponse.md)
 - [GetSavingsAccountChargesPaidByData](docs/GetSavingsAccountChargesPaidByData.md)
 - [GetSavingsAccountTransactionsPageItem](docs/GetSavingsAccountTransactionsPageItem.md)
 - [GetSavingsAccountsResponse](docs/GetSavingsAccountsResponse.md)
 - [GetSavingsAccountsSavingsAccountIdChargesResponse](docs/GetSavingsAccountsSavingsAccountIdChargesResponse.md)
 - [GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse](docs/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.md)
 - [GetSavingsAccountsSavingsAccountIdChargesTemplateResponse](docs/GetSavingsAccountsSavingsAccountIdChargesTemplateResponse.md)
 - [GetSavingsAccountsTemplateResponse](docs/GetSavingsAccountsTemplateResponse.md)
 - [GetSavingsAssetLiabilityType](docs/GetSavingsAssetLiabilityType.md)
 - [GetSavingsChargeCalculationType](docs/GetSavingsChargeCalculationType.md)
 - [GetSavingsChargePaymentMode](docs/GetSavingsChargePaymentMode.md)
 - [GetSavingsChargeTimeType](docs/GetSavingsChargeTimeType.md)
 - [GetSavingsChargesChargeTimeType](docs/GetSavingsChargesChargeTimeType.md)
 - [GetSavingsChargesOptions](docs/GetSavingsChargesOptions.md)
 - [GetSavingsCurrency](docs/GetSavingsCurrency.md)
 - [GetSavingsInterestCalculationDaysInYearType](docs/GetSavingsInterestCalculationDaysInYearType.md)
 - [GetSavingsInterestCalculationType](docs/GetSavingsInterestCalculationType.md)
 - [GetSavingsInterestCompoundingPeriodType](docs/GetSavingsInterestCompoundingPeriodType.md)
 - [GetSavingsInterestPostingPeriodType](docs/GetSavingsInterestPostingPeriodType.md)
 - [GetSavingsPageItems](docs/GetSavingsPageItems.md)
 - [GetSavingsProductOptions](docs/GetSavingsProductOptions.md)
 - [GetSavingsProductsAccountingMappingOptions](docs/GetSavingsProductsAccountingMappingOptions.md)
 - [GetSavingsProductsAccountingMappings](docs/GetSavingsProductsAccountingMappings.md)
 - [GetSavingsProductsAccountingRule](docs/GetSavingsProductsAccountingRule.md)
 - [GetSavingsProductsAssetAccountOptions](docs/GetSavingsProductsAssetAccountOptions.md)
 - [GetSavingsProductsChargeAppliesTo](docs/GetSavingsProductsChargeAppliesTo.md)
 - [GetSavingsProductsChargeOptions](docs/GetSavingsProductsChargeOptions.md)
 - [GetSavingsProductsExpenseAccountOptions](docs/GetSavingsProductsExpenseAccountOptions.md)
 - [GetSavingsProductsExpenseType](docs/GetSavingsProductsExpenseType.md)
 - [GetSavingsProductsFeeToIncomeAccountMappings](docs/GetSavingsProductsFeeToIncomeAccountMappings.md)
 - [GetSavingsProductsFeeToIncomeAccountMappingsCharge](docs/GetSavingsProductsFeeToIncomeAccountMappingsCharge.md)
 - [GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount](docs/GetSavingsProductsFeeToIncomeAccountMappingsIncomeAccount.md)
 - [GetSavingsProductsFundSourceAccount](docs/GetSavingsProductsFundSourceAccount.md)
 - [GetSavingsProductsGlAccount](docs/GetSavingsProductsGlAccount.md)
 - [GetSavingsProductsIncomeAccountOptions](docs/GetSavingsProductsIncomeAccountOptions.md)
 - [GetSavingsProductsIncomeType](docs/GetSavingsProductsIncomeType.md)
 - [GetSavingsProductsInterestCalculationDaysInYearType](docs/GetSavingsProductsInterestCalculationDaysInYearType.md)
 - [GetSavingsProductsInterestCalculationType](docs/GetSavingsProductsInterestCalculationType.md)
 - [GetSavingsProductsInterestCompoundingPeriodType](docs/GetSavingsProductsInterestCompoundingPeriodType.md)
 - [GetSavingsProductsInterestPostingPeriodType](docs/GetSavingsProductsInterestPostingPeriodType.md)
 - [GetSavingsProductsLiabilityAccountOptions](docs/GetSavingsProductsLiabilityAccountOptions.md)
 - [GetSavingsProductsLiabilityTagId](docs/GetSavingsProductsLiabilityTagId.md)
 - [GetSavingsProductsLiabilityType](docs/GetSavingsProductsLiabilityType.md)
 - [GetSavingsProductsLiabilityUsage](docs/GetSavingsProductsLiabilityUsage.md)
 - [GetSavingsProductsLockinPeriodFrequencyTypeOptions](docs/GetSavingsProductsLockinPeriodFrequencyTypeOptions.md)
 - [GetSavingsProductsPaymentChannelToFundSourceMappings](docs/GetSavingsProductsPaymentChannelToFundSourceMappings.md)
 - [GetSavingsProductsPaymentType](docs/GetSavingsProductsPaymentType.md)
 - [GetSavingsProductsPaymentTypeOptions](docs/GetSavingsProductsPaymentTypeOptions.md)
 - [GetSavingsProductsPenaltyToIncomeAccountMappings](docs/GetSavingsProductsPenaltyToIncomeAccountMappings.md)
 - [GetSavingsProductsPenaltyToIncomeAccountMappingsCharge](docs/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.md)
 - [GetSavingsProductsProductIdResponse](docs/GetSavingsProductsProductIdResponse.md)
 - [GetSavingsProductsResponse](docs/GetSavingsProductsResponse.md)
 - [GetSavingsProductsTemplateAccountingRule](docs/GetSavingsProductsTemplateAccountingRule.md)
 - [GetSavingsProductsTemplateResponse](docs/GetSavingsProductsTemplateResponse.md)
 - [GetSavingsProductsWithdrawalFeeTypeOptions](docs/GetSavingsProductsWithdrawalFeeTypeOptions.md)
 - [GetSavingsStatus](docs/GetSavingsStatus.md)
 - [GetSavingsSummary](docs/GetSavingsSummary.md)
 - [GetSavingsTimeline](docs/GetSavingsTimeline.md)
 - [GetSchedulerResponse](docs/GetSchedulerResponse.md)
 - [GetSearchResponse](docs/GetSearchResponse.md)
 - [GetSelfBeneficiariesAccountOptions](docs/GetSelfBeneficiariesAccountOptions.md)
 - [GetSelfBeneficiariesTPTResponse](docs/GetSelfBeneficiariesTPTResponse.md)
 - [GetSelfBeneficiariesTPTTemplateResponse](docs/GetSelfBeneficiariesTPTTemplateResponse.md)
 - [GetSelfClientsChargeCalculationType](docs/GetSelfClientsChargeCalculationType.md)
 - [GetSelfClientsChargeTimeType](docs/GetSelfClientsChargeTimeType.md)
 - [GetSelfClientsChargesPageItems](docs/GetSelfClientsChargesPageItems.md)
 - [GetSelfClientsClientIdAccountsResponse](docs/GetSelfClientsClientIdAccountsResponse.md)
 - [GetSelfClientsClientIdChargesChargeIdResponse](docs/GetSelfClientsClientIdChargesChargeIdResponse.md)
 - [GetSelfClientsClientIdChargesResponse](docs/GetSelfClientsClientIdChargesResponse.md)
 - [GetSelfClientsClientIdResponse](docs/GetSelfClientsClientIdResponse.md)
 - [GetSelfClientsClientIdTransactionsPageItems](docs/GetSelfClientsClientIdTransactionsPageItems.md)
 - [GetSelfClientsClientIdTransactionsResponse](docs/GetSelfClientsClientIdTransactionsResponse.md)
 - [GetSelfClientsClientIdTransactionsTransactionIdResponse](docs/GetSelfClientsClientIdTransactionsTransactionIdResponse.md)
 - [GetSelfClientsClientIdTransactionsType](docs/GetSelfClientsClientIdTransactionsType.md)
 - [GetSelfClientsLoanAccounts](docs/GetSelfClientsLoanAccounts.md)
 - [GetSelfClientsLoanAccountsStatus](docs/GetSelfClientsLoanAccountsStatus.md)
 - [GetSelfClientsLoanAccountsType](docs/GetSelfClientsLoanAccountsType.md)
 - [GetSelfClientsPageItems](docs/GetSelfClientsPageItems.md)
 - [GetSelfClientsResponse](docs/GetSelfClientsResponse.md)
 - [GetSelfClientsSavingsAccounts](docs/GetSelfClientsSavingsAccounts.md)
 - [GetSelfClientsSavingsAccountsCurrency](docs/GetSelfClientsSavingsAccountsCurrency.md)
 - [GetSelfClientsSavingsAccountsStatus](docs/GetSelfClientsSavingsAccountsStatus.md)
 - [GetSelfClientsStatus](docs/GetSelfClientsStatus.md)
 - [GetSelfClientsTimeline](docs/GetSelfClientsTimeline.md)
 - [GetSelfLoanIdSummary](docs/GetSelfLoanIdSummary.md)
 - [GetSelfLoanIdTimeline](docs/GetSelfLoanIdTimeline.md)
 - [GetSelfLoansChargeCalculationType](docs/GetSelfLoansChargeCalculationType.md)
 - [GetSelfLoansChargeTimeType](docs/GetSelfLoansChargeTimeType.md)
 - [GetSelfLoansLoanIdChargesResponse](docs/GetSelfLoansLoanIdChargesResponse.md)
 - [GetSelfLoansLoanIdResponse](docs/GetSelfLoansLoanIdResponse.md)
 - [GetSelfLoansLoanIdTransactionsTransactionIdResponse](docs/GetSelfLoansLoanIdTransactionsTransactionIdResponse.md)
 - [GetSelfLoansLoanIdTransactionsType](docs/GetSelfLoansLoanIdTransactionsType.md)
 - [GetSelfLoansProductOptions](docs/GetSelfLoansProductOptions.md)
 - [GetSelfLoansTemplateResponse](docs/GetSelfLoansTemplateResponse.md)
 - [GetSelfLoansTimeline](docs/GetSelfLoansTimeline.md)
 - [GetSelfSavingsAccountsAccountIdChargesResponse](docs/GetSelfSavingsAccountsAccountIdChargesResponse.md)
 - [GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse](docs/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.md)
 - [GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse](docs/GetSelfSavingsAccountsAccountIdTransactionsTransactionIdResponse.md)
 - [GetSelfSavingsAccountsResponse](docs/GetSelfSavingsAccountsResponse.md)
 - [GetSelfSavingsChargeCalculationType](docs/GetSelfSavingsChargeCalculationType.md)
 - [GetSelfSavingsChargeTimeType](docs/GetSelfSavingsChargeTimeType.md)
 - [GetSelfSavingsCurrency](docs/GetSelfSavingsCurrency.md)
 - [GetSelfSavingsInterestCalculationDaysInYearType](docs/GetSelfSavingsInterestCalculationDaysInYearType.md)
 - [GetSelfSavingsInterestCalculationType](docs/GetSelfSavingsInterestCalculationType.md)
 - [GetSelfSavingsInterestCompoundingPeriodType](docs/GetSelfSavingsInterestCompoundingPeriodType.md)
 - [GetSelfSavingsInterestPostingPeriodType](docs/GetSelfSavingsInterestPostingPeriodType.md)
 - [GetSelfSavingsPaymentDetailData](docs/GetSelfSavingsPaymentDetailData.md)
 - [GetSelfSavingsPaymentType](docs/GetSelfSavingsPaymentType.md)
 - [GetSelfSavingsStatus](docs/GetSelfSavingsStatus.md)
 - [GetSelfSavingsSummary](docs/GetSelfSavingsSummary.md)
 - [GetSelfSavingsTimeline](docs/GetSelfSavingsTimeline.md)
 - [GetSelfSavingsTransactionCurrency](docs/GetSelfSavingsTransactionCurrency.md)
 - [GetSelfSavingsTransactionType](docs/GetSelfSavingsTransactionType.md)
 - [GetSelfUserDetailsOrganisationalRole](docs/GetSelfUserDetailsOrganisationalRole.md)
 - [GetSelfUserDetailsResponse](docs/GetSelfUserDetailsResponse.md)
 - [GetSelfUserDetailsRoles](docs/GetSelfUserDetailsRoles.md)
 - [GetShareAccountsChargeAppliesTo](docs/GetShareAccountsChargeAppliesTo.md)
 - [GetShareAccountsChargeCalculationType](docs/GetShareAccountsChargeCalculationType.md)
 - [GetShareAccountsChargeOptions](docs/GetShareAccountsChargeOptions.md)
 - [GetShareAccountsChargePaymentMode](docs/GetShareAccountsChargePaymentMode.md)
 - [GetShareAccountsChargeTimeType](docs/GetShareAccountsChargeTimeType.md)
 - [GetShareAccountsClientIdProductIdAccountingRule](docs/GetShareAccountsClientIdProductIdAccountingRule.md)
 - [GetShareAccountsClientIdProductIdLockPeriodTypeEnum](docs/GetShareAccountsClientIdProductIdLockPeriodTypeEnum.md)
 - [GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum](docs/GetShareAccountsClientIdProductIdMinimumActivePeriodForDividendsTypeEnum.md)
 - [GetShareAccountsClientIdProductIdResponse](docs/GetShareAccountsClientIdProductIdResponse.md)
 - [GetShareAccountsCurrency](docs/GetShareAccountsCurrency.md)
 - [GetShareAccountsIncomeFromFeeAccountId](docs/GetShareAccountsIncomeFromFeeAccountId.md)
 - [GetShareAccountsShareEquityId](docs/GetShareAccountsShareEquityId.md)
 - [GetShareAccountsShareReferenceId](docs/GetShareAccountsShareReferenceId.md)
 - [GetShareAccountsShareSuspenseId](docs/GetShareAccountsShareSuspenseId.md)
 - [GetShareEquityId](docs/GetShareEquityId.md)
 - [GetShareReferenceId](docs/GetShareReferenceId.md)
 - [GetShareSuspenseId](docs/GetShareSuspenseId.md)
 - [GetStandingInstructionHistoryFromAccount](docs/GetStandingInstructionHistoryFromAccount.md)
 - [GetStandingInstructionHistoryPageItemsFromClient](docs/GetStandingInstructionHistoryPageItemsFromClient.md)
 - [GetStandingInstructionHistoryPageItemsResponse](docs/GetStandingInstructionHistoryPageItemsResponse.md)
 - [GetStandingInstructionHistoryToAccount](docs/GetStandingInstructionHistoryToAccount.md)
 - [GetStandingInstructionHistoryToClient](docs/GetStandingInstructionHistoryToClient.md)
 - [GetStandingInstructionRunHistoryResponse](docs/GetStandingInstructionRunHistoryResponse.md)
 - [GetStandingInstructionsResponse](docs/GetStandingInstructionsResponse.md)
 - [GetStandingInstructionsStandingInstructionIdResponse](docs/GetStandingInstructionsStandingInstructionIdResponse.md)
 - [GetStandingInstructionsTemplateResponse](docs/GetStandingInstructionsTemplateResponse.md)
 - [GetStatusOptionsResponseStandingInstructionSwagger](docs/GetStatusOptionsResponseStandingInstructionSwagger.md)
 - [GetStatusStandingInstructionSwagger](docs/GetStatusStandingInstructionSwagger.md)
 - [GetSurveyResponse](docs/GetSurveyResponse.md)
 - [GetSurveyResponseDatatableData](docs/GetSurveyResponseDatatableData.md)
 - [GetTaxesComponentsCreditAccount](docs/GetTaxesComponentsCreditAccount.md)
 - [GetTaxesComponentsCreditAccountType](docs/GetTaxesComponentsCreditAccountType.md)
 - [GetTaxesComponentsResponse](docs/GetTaxesComponentsResponse.md)
 - [GetTaxesGroupResponse](docs/GetTaxesGroupResponse.md)
 - [GetTaxesGroupTaxAssociations](docs/GetTaxesGroupTaxAssociations.md)
 - [GetTaxesGroupTaxComponent](docs/GetTaxesGroupTaxComponent.md)
 - [GetTellersResponse](docs/GetTellersResponse.md)
 - [GetTellersTellerIdCashiersCashierIdResponse](docs/GetTellersTellerIdCashiersCashierIdResponse.md)
 - [GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse](docs/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.md)
 - [GetTellersTellerIdCashiersCashiersIdTransactionsResponse](docs/GetTellersTellerIdCashiersCashiersIdTransactionsResponse.md)
 - [GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse](docs/GetTellersTellerIdCashiersCashiersIdTransactionsTemplateResponse.md)
 - [GetTellersTellerIdCashiersResponse](docs/GetTellersTellerIdCashiersResponse.md)
 - [GetTellersTellerIdCashiersTemplateResponse](docs/GetTellersTellerIdCashiersTemplateResponse.md)
 - [GetTemplatesResponse](docs/GetTemplatesResponse.md)
 - [GetTemplatesTemplateIdResponse](docs/GetTemplatesTemplateIdResponse.md)
 - [GetTemplatesTemplateResponse](docs/GetTemplatesTemplateResponse.md)
 - [GetToAccountStandingInstructionSwagger](docs/GetToAccountStandingInstructionSwagger.md)
 - [GetToAccountTypeOptionsResponseStandingInstructionSwagger](docs/GetToAccountTypeOptionsResponseStandingInstructionSwagger.md)
 - [GetToAccountTypeStandingInstructionSwagger](docs/GetToAccountTypeStandingInstructionSwagger.md)
 - [GetToClientStandingInstructionSwagger](docs/GetToClientStandingInstructionSwagger.md)
 - [GetToOfficeOptionsResponseStandingInstructionSwagger](docs/GetToOfficeOptionsResponseStandingInstructionSwagger.md)
 - [GetToOfficeStandingInstructionSwagger](docs/GetToOfficeStandingInstructionSwagger.md)
 - [GetTransactionsCurrency](docs/GetTransactionsCurrency.md)
 - [GetTransactionsPaymentDetailData](docs/GetTransactionsPaymentDetailData.md)
 - [GetTranscationEnumData](docs/GetTranscationEnumData.md)
 - [GetTransferTypeOptionsResponseStandingInstructionSwagger](docs/GetTransferTypeOptionsResponseStandingInstructionSwagger.md)
 - [GetTransferTypeStandingInstructionSwagger](docs/GetTransferTypeStandingInstructionSwagger.md)
 - [GetUserDetailsResponse](docs/GetUserDetailsResponse.md)
 - [GetUsersResponse](docs/GetUsersResponse.md)
 - [GetUsersTemplateResponse](docs/GetUsersTemplateResponse.md)
 - [GetUsersUserIdResponse](docs/GetUsersUserIdResponse.md)
 - [GetWorkingDaysTemplateResponse](docs/GetWorkingDaysTemplateResponse.md)
 - [GlobalConfigurationPropertyData](docs/GlobalConfigurationPropertyData.md)
 - [GrantedAuthority](docs/GrantedAuthority.md)
 - [Group](docs/Group.md)
 - [GroupGeneralData](docs/GroupGeneralData.md)
 - [GroupLevel](docs/GroupLevel.md)
 - [GroupLevelData](docs/GroupLevelData.md)
 - [GroupRole](docs/GroupRole.md)
 - [GroupRoleData](docs/GroupRoleData.md)
 - [Grouping](docs/Grouping.md)
 - [GuarantorData](docs/GuarantorData.md)
 - [GuarantorFundingData](docs/GuarantorFundingData.md)
 - [GuarantorTransactionData](docs/GuarantorTransactionData.md)
 - [GuarantorsRequest](docs/GuarantorsRequest.md)
 - [Header](docs/Header.md)
 - [HookTemplateData](docs/HookTemplateData.md)
 - [IdDocument](docs/IdDocument.md)
 - [Image](docs/Image.md)
 - [InlineJobRequest](docs/InlineJobRequest.md)
 - [InlineJobResponse](docs/InlineJobResponse.md)
 - [InterestIncentiveRequest](docs/InterestIncentiveRequest.md)
 - [InterestPauseRequestDto](docs/InterestPauseRequestDto.md)
 - [InterestPauseResponseDto](docs/InterestPauseResponseDto.md)
 - [InterestPeriod](docs/InterestPeriod.md)
 - [InterestPeriodMc](docs/InterestPeriodMc.md)
 - [InterestRateChartSlabData](docs/InterestRateChartSlabData.md)
 - [InterestRateChartStabRequest](docs/InterestRateChartStabRequest.md)
 - [InteropAccountData](docs/InteropAccountData.md)
 - [InteropIdentifierAccountResponseData](docs/InteropIdentifierAccountResponseData.md)
 - [InteropIdentifierRequestData](docs/InteropIdentifierRequestData.md)
 - [InteropIdentifiersResponseData](docs/InteropIdentifiersResponseData.md)
 - [InteropKycResponseData](docs/InteropKycResponseData.md)
 - [InteropQuoteRequestData](docs/InteropQuoteRequestData.md)
 - [InteropQuoteResponseData](docs/InteropQuoteResponseData.md)
 - [InteropTransactionData](docs/InteropTransactionData.md)
 - [InteropTransactionRequestData](docs/InteropTransactionRequestData.md)
 - [InteropTransactionRequestResponseData](docs/InteropTransactionRequestResponseData.md)
 - [InteropTransactionTypeData](docs/InteropTransactionTypeData.md)
 - [InteropTransactionsData](docs/InteropTransactionsData.md)
 - [InteropTransferRequestData](docs/InteropTransferRequestData.md)
 - [InteropTransferResponseData](docs/InteropTransferResponseData.md)
 - [IsCatchUpRunningDTO](docs/IsCatchUpRunningDTO.md)
 - [JobBusinessStepConfigData](docs/JobBusinessStepConfigData.md)
 - [JobBusinessStepDetail](docs/JobBusinessStepDetail.md)
 - [JobDetailHistoryData](docs/JobDetailHistoryData.md)
 - [JobDetailHistoryDataSwagger](docs/JobDetailHistoryDataSwagger.md)
 - [JobParameterDTO](docs/JobParameterDTO.md)
 - [JournalEntryCommand](docs/JournalEntryCommand.md)
 - [JournalEntryData](docs/JournalEntryData.md)
 - [JournalEntryTransactionItem](docs/JournalEntryTransactionItem.md)
 - [LoanAccountLock](docs/LoanAccountLock.md)
 - [LoanAccountLockResponseDTO](docs/LoanAccountLockResponseDTO.md)
 - [LoanAmortizationAllocationResponse](docs/LoanAmortizationAllocationResponse.md)
 - [LoanApprovedAmountHistoryData](docs/LoanApprovedAmountHistoryData.md)
 - [LoanArrearsData](docs/LoanArrearsData.md)
 - [LoanCapitalizedIncomeData](docs/LoanCapitalizedIncomeData.md)
 - [LoanChargePaidByData](docs/LoanChargePaidByData.md)
 - [LoanCollateralResponseData](docs/LoanCollateralResponseData.md)
 - [LoanCollateralTemplateData](docs/LoanCollateralTemplateData.md)
 - [LoanFeeData](docs/LoanFeeData.md)
 - [LoanInterestData](docs/LoanInterestData.md)
 - [LoanPenaltyData](docs/LoanPenaltyData.md)
 - [LoanPointInTimeData](docs/LoanPointInTimeData.md)
 - [LoanPrincipalData](docs/LoanPrincipalData.md)
 - [LoanProduct](docs/LoanProduct.md)
 - [LoanProductBorrowerCycleVariationData](docs/LoanProductBorrowerCycleVariationData.md)
 - [LoanProductBorrowerCycleVariations](docs/LoanProductBorrowerCycleVariations.md)
 - [LoanProductChargeData](docs/LoanProductChargeData.md)
 - [LoanProductChargeToGLAccountMapper](docs/LoanProductChargeToGLAccountMapper.md)
 - [LoanProductConfigurableAttributes](docs/LoanProductConfigurableAttributes.md)
 - [LoanProductCreditAllocationRule](docs/LoanProductCreditAllocationRule.md)
 - [LoanProductData](docs/LoanProductData.md)
 - [LoanProductFloatingRates](docs/LoanProductFloatingRates.md)
 - [LoanProductGuaranteeData](docs/LoanProductGuaranteeData.md)
 - [LoanProductGuaranteeDetails](docs/LoanProductGuaranteeDetails.md)
 - [LoanProductInterestRecalculationData](docs/LoanProductInterestRecalculationData.md)
 - [LoanProductInterestRecalculationDetails](docs/LoanProductInterestRecalculationDetails.md)
 - [LoanProductMinMaxConstraints](docs/LoanProductMinMaxConstraints.md)
 - [LoanProductMinimumRepaymentScheduleRelatedDetail](docs/LoanProductMinimumRepaymentScheduleRelatedDetail.md)
 - [LoanProductPaymentAllocationRule](docs/LoanProductPaymentAllocationRule.md)
 - [LoanProductProvisioningEntryData](docs/LoanProductProvisioningEntryData.md)
 - [LoanProductRelatedDetail](docs/LoanProductRelatedDetail.md)
 - [LoanProductTrancheDetails](docs/LoanProductTrancheDetails.md)
 - [LoanProductVariableInstallmentConfig](docs/LoanProductVariableInstallmentConfig.md)
 - [LoanRepaymentScheduleInstallmentData](docs/LoanRepaymentScheduleInstallmentData.md)
 - [LoanStatusEnumData](docs/LoanStatusEnumData.md)
 - [LoanTermTypeOptions](docs/LoanTermTypeOptions.md)
 - [LoanTermVariationsData](docs/LoanTermVariationsData.md)
 - [LoanTotalAmountData](docs/LoanTotalAmountData.md)
 - [LoanTransactionData](docs/LoanTransactionData.md)
 - [LoanTransactionEnumData](docs/LoanTransactionEnumData.md)
 - [LoanTransactionRelationData](docs/LoanTransactionRelationData.md)
 - [LoansLoanIdCollateralsRequest](docs/LoansLoanIdCollateralsRequest.md)
 - [LoansLoandIdCollateralsCollateralIdRequest](docs/LoansLoandIdCollateralsCollateralIdRequest.md)
 - [LocalTime](docs/LocalTime.md)
 - [LookupTableData](docs/LookupTableData.md)
 - [LookupTableEntry](docs/LookupTableEntry.md)
 - [MediaType](docs/MediaType.md)
 - [MixTaxonomyData](docs/MixTaxonomyData.md)
 - [MixTaxonomyMappingData](docs/MixTaxonomyMappingData.md)
 - [MixTaxonomyRequest](docs/MixTaxonomyRequest.md)
 - [MonetaryCurrency](docs/MonetaryCurrency.md)
 - [Money](docs/Money.md)
 - [MoneyData](docs/MoneyData.md)
 - [MultiPart](docs/MultiPart.md)
 - [MultivaluedMapStringParameterizedHeader](docs/MultivaluedMapStringParameterizedHeader.md)
 - [MultivaluedMapStringString](docs/MultivaluedMapStringString.md)
 - [NoteData](docs/NoteData.md)
 - [NoteRequest](docs/NoteRequest.md)
 - [Office](docs/Office.md)
 - [OfficeData](docs/OfficeData.md)
 - [OldestCOBProcessedLoanDTO](docs/OldestCOBProcessedLoanDTO.md)
 - [PageAccountData](docs/PageAccountData.md)
 - [PageAccountTransferData](docs/PageAccountTransferData.md)
 - [PageCashierTransactionData](docs/PageCashierTransactionData.md)
 - [PageClientSearchData](docs/PageClientSearchData.md)
 - [PageExternalTransferData](docs/PageExternalTransferData.md)
 - [PageExternalTransferLoanProductAttributesData](docs/PageExternalTransferLoanProductAttributesData.md)
 - [PageJournalEntryData](docs/PageJournalEntryData.md)
 - [PageLoanProductProvisioningEntryData](docs/PageLoanProductProvisioningEntryData.md)
 - [PageLoanTransactionData](docs/PageLoanTransactionData.md)
 - [PageProvisioningEntryData](docs/PageProvisioningEntryData.md)
 - [PageSmsCampaignData](docs/PageSmsCampaignData.md)
 - [PageSmsData](docs/PageSmsData.md)
 - [PageStandingInstructionData](docs/PageStandingInstructionData.md)
 - [PageStandingInstructionHistoryData](docs/PageStandingInstructionHistoryData.md)
 - [Pageable](docs/Pageable.md)
 - [PagedLocalRequestAdvancedQueryData](docs/PagedLocalRequestAdvancedQueryData.md)
 - [PagedLocalRequestAdvancedQueryDataLocaleObject](docs/PagedLocalRequestAdvancedQueryDataLocaleObject.md)
 - [PagedLocalRequestAdvancedQueryRequest](docs/PagedLocalRequestAdvancedQueryRequest.md)
 - [PagedRequestClientTextSearch](docs/PagedRequestClientTextSearch.md)
 - [PagedRequestExternalAssetOwnerSearchRequest](docs/PagedRequestExternalAssetOwnerSearchRequest.md)
 - [ParameterizedHeader](docs/ParameterizedHeader.md)
 - [PaymentAllocationOrder](docs/PaymentAllocationOrder.md)
 - [PaymentDetailData](docs/PaymentDetailData.md)
 - [PaymentType](docs/PaymentType.md)
 - [PaymentTypeData](docs/PaymentTypeData.md)
 - [PaymentTypeRequest](docs/PaymentTypeRequest.md)
 - [PaymentTypeToGLAccountMapper](docs/PaymentTypeToGLAccountMapper.md)
 - [Permission](docs/Permission.md)
 - [PortfolioAccountData](docs/PortfolioAccountData.md)
 - [PostAccountNumberFormatsRequest](docs/PostAccountNumberFormatsRequest.md)
 - [PostAccountNumberFormatsResponse](docs/PostAccountNumberFormatsResponse.md)
 - [PostAccountTransfersRefundByTransferResponse](docs/PostAccountTransfersRefundByTransferResponse.md)
 - [PostAccountTransfersResponse](docs/PostAccountTransfersResponse.md)
 - [PostAccountingRulesResponse](docs/PostAccountingRulesResponse.md)
 - [PostAccountsRequestedShares](docs/PostAccountsRequestedShares.md)
 - [PostAccountsTypeAccountIdRequest](docs/PostAccountsTypeAccountIdRequest.md)
 - [PostAccountsTypeAccountIdResponse](docs/PostAccountsTypeAccountIdResponse.md)
 - [PostAccountsTypeResponse](docs/PostAccountsTypeResponse.md)
 - [PostAddAndDeleteDisbursementDetailRequest](docs/PostAddAndDeleteDisbursementDetailRequest.md)
 - [PostAdhocQuerySearchRequest](docs/PostAdhocQuerySearchRequest.md)
 - [PostAuthenticationRequest](docs/PostAuthenticationRequest.md)
 - [PostAuthenticationResponse](docs/PostAuthenticationResponse.md)
 - [PostCentersCenterIdRequest](docs/PostCentersCenterIdRequest.md)
 - [PostCentersCenterIdResponse](docs/PostCentersCenterIdResponse.md)
 - [PostCentersRequest](docs/PostCentersRequest.md)
 - [PostCentersResponse](docs/PostCentersResponse.md)
 - [PostChargeOffReasonToExpenseAccountMappings](docs/PostChargeOffReasonToExpenseAccountMappings.md)
 - [PostChargesResponse](docs/PostChargesResponse.md)
 - [PostClientClientIdAddressesResponse](docs/PostClientClientIdAddressesResponse.md)
 - [PostClientCollateralResponse](docs/PostClientCollateralResponse.md)
 - [PostClientsClientIdChargesChargeIdRequest](docs/PostClientsClientIdChargesChargeIdRequest.md)
 - [PostClientsClientIdChargesChargeIdResponse](docs/PostClientsClientIdChargesChargeIdResponse.md)
 - [PostClientsClientIdChargesRequest](docs/PostClientsClientIdChargesRequest.md)
 - [PostClientsClientIdChargesResponse](docs/PostClientsClientIdChargesResponse.md)
 - [PostClientsClientIdIdentifiersRequest](docs/PostClientsClientIdIdentifiersRequest.md)
 - [PostClientsClientIdIdentifiersResponse](docs/PostClientsClientIdIdentifiersResponse.md)
 - [PostClientsClientIdRequest](docs/PostClientsClientIdRequest.md)
 - [PostClientsClientIdResponse](docs/PostClientsClientIdResponse.md)
 - [PostClientsClientIdTransactionsTransactionIdResponse](docs/PostClientsClientIdTransactionsTransactionIdResponse.md)
 - [PostClientsDatatable](docs/PostClientsDatatable.md)
 - [PostClientsRequest](docs/PostClientsRequest.md)
 - [PostClientsResponse](docs/PostClientsResponse.md)
 - [PostCodeValueDataResponse](docs/PostCodeValueDataResponse.md)
 - [PostCodeValuesDataRequest](docs/PostCodeValuesDataRequest.md)
 - [PostCodesRequest](docs/PostCodesRequest.md)
 - [PostCodesResponse](docs/PostCodesResponse.md)
 - [PostCollateralManagementProductResponse](docs/PostCollateralManagementProductResponse.md)
 - [PostCollectionSheetChanges](docs/PostCollectionSheetChanges.md)
 - [PostCollectionSheetResponse](docs/PostCollectionSheetResponse.md)
 - [PostColumnHeaderData](docs/PostColumnHeaderData.md)
 - [PostCreateRescheduleLoansRequest](docs/PostCreateRescheduleLoansRequest.md)
 - [PostCreateRescheduleLoansResponse](docs/PostCreateRescheduleLoansResponse.md)
 - [PostDataTablesAppTableIdResponse](docs/PostDataTablesAppTableIdResponse.md)
 - [PostDataTablesRequest](docs/PostDataTablesRequest.md)
 - [PostDataTablesResponse](docs/PostDataTablesResponse.md)
 - [PostDelinquencyBucketResponse](docs/PostDelinquencyBucketResponse.md)
 - [PostDelinquencyRangeResponse](docs/PostDelinquencyRangeResponse.md)
 - [PostEntityDatatableChecksTemplateRequest](docs/PostEntityDatatableChecksTemplateRequest.md)
 - [PostEntityDatatableChecksTemplateResponse](docs/PostEntityDatatableChecksTemplateResponse.md)
 - [PostEntityTypeEntityIdDocumentsResponse](docs/PostEntityTypeEntityIdDocumentsResponse.md)
 - [PostExternalAssetOwnerLoanProductAttributeRequest](docs/PostExternalAssetOwnerLoanProductAttributeRequest.md)
 - [PostFinancialActivityAccountsRequest](docs/PostFinancialActivityAccountsRequest.md)
 - [PostFinancialActivityAccountsResponse](docs/PostFinancialActivityAccountsResponse.md)
 - [PostFixedDepositAccountsAccountIdResponse](docs/PostFixedDepositAccountsAccountIdResponse.md)
 - [PostFixedDepositAccountsRequest](docs/PostFixedDepositAccountsRequest.md)
 - [PostFixedDepositAccountsResponse](docs/PostFixedDepositAccountsResponse.md)
 - [PostFixedDepositProductsChartSlabs](docs/PostFixedDepositProductsChartSlabs.md)
 - [PostFixedDepositProductsCharts](docs/PostFixedDepositProductsCharts.md)
 - [PostFixedDepositProductsRequest](docs/PostFixedDepositProductsRequest.md)
 - [PostFixedDepositProductsResponse](docs/PostFixedDepositProductsResponse.md)
 - [PostFloatingRatesRatePeriods](docs/PostFloatingRatesRatePeriods.md)
 - [PostFloatingRatesResponse](docs/PostFloatingRatesResponse.md)
 - [PostFundsResponse](docs/PostFundsResponse.md)
 - [PostGLAccountsRequest](docs/PostGLAccountsRequest.md)
 - [PostGLAccountsResponse](docs/PostGLAccountsResponse.md)
 - [PostGlClosuresRequest](docs/PostGlClosuresRequest.md)
 - [PostGlClosuresResponse](docs/PostGlClosuresResponse.md)
 - [PostGroupsGroupIdClients](docs/PostGroupsGroupIdClients.md)
 - [PostGroupsGroupIdCommandUnassignStaffRequest](docs/PostGroupsGroupIdCommandUnassignStaffRequest.md)
 - [PostGroupsGroupIdCommandUnassignStaffResponse](docs/PostGroupsGroupIdCommandUnassignStaffResponse.md)
 - [PostGroupsGroupIdRequest](docs/PostGroupsGroupIdRequest.md)
 - [PostGroupsGroupIdResponse](docs/PostGroupsGroupIdResponse.md)
 - [PostGroupsRequest](docs/PostGroupsRequest.md)
 - [PostGroupsResponse](docs/PostGroupsResponse.md)
 - [PostHolidaysHolidayIdResponse](docs/PostHolidaysHolidayIdResponse.md)
 - [PostHolidaysRequest](docs/PostHolidaysRequest.md)
 - [PostHolidaysRequestOffices](docs/PostHolidaysRequestOffices.md)
 - [PostHolidaysResponse](docs/PostHolidaysResponse.md)
 - [PostHookRequest](docs/PostHookRequest.md)
 - [PostHookResponse](docs/PostHookResponse.md)
 - [PostInitiateTransferResponse](docs/PostInitiateTransferResponse.md)
 - [PostInterestRateChartsChartIdChartSlabsResponse](docs/PostInterestRateChartsChartIdChartSlabsResponse.md)
 - [PostInterestRateChartsRequest](docs/PostInterestRateChartsRequest.md)
 - [PostInterestRateChartsResponse](docs/PostInterestRateChartsResponse.md)
 - [PostJournalEntriesResponse](docs/PostJournalEntriesResponse.md)
 - [PostJournalEntriesTransactionIdRequest](docs/PostJournalEntriesTransactionIdRequest.md)
 - [PostJournalEntriesTransactionIdResponse](docs/PostJournalEntriesTransactionIdResponse.md)
 - [PostLinkDelinkAccountsToFromPocketResponse](docs/PostLinkDelinkAccountsToFromPocketResponse.md)
 - [PostLoanChanges](docs/PostLoanChanges.md)
 - [PostLoanProductsRequest](docs/PostLoanProductsRequest.md)
 - [PostLoanProductsResponse](docs/PostLoanProductsResponse.md)
 - [PostLoansDataTable](docs/PostLoansDataTable.md)
 - [PostLoansDelinquencyActionRequest](docs/PostLoansDelinquencyActionRequest.md)
 - [PostLoansDelinquencyActionResponse](docs/PostLoansDelinquencyActionResponse.md)
 - [PostLoansDisbursementData](docs/PostLoansDisbursementData.md)
 - [PostLoansLoanIdChanges](docs/PostLoansLoanIdChanges.md)
 - [PostLoansLoanIdChargesChargeIdChanges](docs/PostLoansLoanIdChargesChargeIdChanges.md)
 - [PostLoansLoanIdChargesChargeIdRequest](docs/PostLoansLoanIdChargesChargeIdRequest.md)
 - [PostLoansLoanIdChargesChargeIdResponse](docs/PostLoansLoanIdChargesChargeIdResponse.md)
 - [PostLoansLoanIdChargesRequest](docs/PostLoansLoanIdChargesRequest.md)
 - [PostLoansLoanIdChargesResponse](docs/PostLoansLoanIdChargesResponse.md)
 - [PostLoansLoanIdCollateralsResponse](docs/PostLoansLoanIdCollateralsResponse.md)
 - [PostLoansLoanIdDisbursementData](docs/PostLoansLoanIdDisbursementData.md)
 - [PostLoansLoanIdRequest](docs/PostLoansLoanIdRequest.md)
 - [PostLoansLoanIdResponse](docs/PostLoansLoanIdResponse.md)
 - [PostLoansLoanIdScheduleResponse](docs/PostLoansLoanIdScheduleResponse.md)
 - [PostLoansLoanIdStatus](docs/PostLoansLoanIdStatus.md)
 - [PostLoansLoanIdTransactionsRequest](docs/PostLoansLoanIdTransactionsRequest.md)
 - [PostLoansLoanIdTransactionsResponse](docs/PostLoansLoanIdTransactionsResponse.md)
 - [PostLoansLoanIdTransactionsResponseChanges](docs/PostLoansLoanIdTransactionsResponseChanges.md)
 - [PostLoansLoanIdTransactionsTransactionIdRequest](docs/PostLoansLoanIdTransactionsTransactionIdRequest.md)
 - [PostLoansRepaymentSchedulePeriods](docs/PostLoansRepaymentSchedulePeriods.md)
 - [PostLoansRequest](docs/PostLoansRequest.md)
 - [PostLoansRequestChargeData](docs/PostLoansRequestChargeData.md)
 - [PostLoansResponse](docs/PostLoansResponse.md)
 - [PostMakerCheckersResponse](docs/PostMakerCheckersResponse.md)
 - [PostNewShareApplicationResponse](docs/PostNewShareApplicationResponse.md)
 - [PostNewTransferResponse](docs/PostNewTransferResponse.md)
 - [PostOfficesRequest](docs/PostOfficesRequest.md)
 - [PostOfficesResponse](docs/PostOfficesResponse.md)
 - [PostPaymentTypesResponse](docs/PostPaymentTypesResponse.md)
 - [PostProductsChargesSelected](docs/PostProductsChargesSelected.md)
 - [PostProductsMarketPricePeriods](docs/PostProductsMarketPricePeriods.md)
 - [PostProductsTypeRequest](docs/PostProductsTypeRequest.md)
 - [PostProductsTypeResponse](docs/PostProductsTypeResponse.md)
 - [PostProvisioningCriteriaRequest](docs/PostProvisioningCriteriaRequest.md)
 - [PostProvisioningCriteriaResponse](docs/PostProvisioningCriteriaResponse.md)
 - [PostProvisioningEntriesResponse](docs/PostProvisioningEntriesResponse.md)
 - [PostRecurringChanges](docs/PostRecurringChanges.md)
 - [PostRecurringDepositAccountsAccountIdResponse](docs/PostRecurringDepositAccountsAccountIdResponse.md)
 - [PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest](docs/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsRequest.md)
 - [PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse](docs/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.md)
 - [PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse](docs/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.md)
 - [PostRecurringDepositAccountsRequest](docs/PostRecurringDepositAccountsRequest.md)
 - [PostRecurringDepositAccountsResponse](docs/PostRecurringDepositAccountsResponse.md)
 - [PostRecurringDepositProductsChartSlabs](docs/PostRecurringDepositProductsChartSlabs.md)
 - [PostRecurringDepositProductsCharts](docs/PostRecurringDepositProductsCharts.md)
 - [PostRecurringDepositProductsRequest](docs/PostRecurringDepositProductsRequest.md)
 - [PostRecurringDepositProductsResponse](docs/PostRecurringDepositProductsResponse.md)
 - [PostReportMailingJobsRequest](docs/PostReportMailingJobsRequest.md)
 - [PostReportMailingJobsResponse](docs/PostReportMailingJobsResponse.md)
 - [PostReportsResponse](docs/PostReportsResponse.md)
 - [PostRepostRequest](docs/PostRepostRequest.md)
 - [PostResourceTypeResourceIdNotesResponse](docs/PostResourceTypeResourceIdNotesResponse.md)
 - [PostRolesRequest](docs/PostRolesRequest.md)
 - [PostRolesResponse](docs/PostRolesResponse.md)
 - [PostRolesRoleIdResponse](docs/PostRolesRoleIdResponse.md)
 - [PostRunaccrualsRequest](docs/PostRunaccrualsRequest.md)
 - [PostSavingsAccountBulkReversalTransactionsRequest](docs/PostSavingsAccountBulkReversalTransactionsRequest.md)
 - [PostSavingsAccountTransactionsRequest](docs/PostSavingsAccountTransactionsRequest.md)
 - [PostSavingsAccountTransactionsResponse](docs/PostSavingsAccountTransactionsResponse.md)
 - [PostSavingsAccountsAccountIdRequest](docs/PostSavingsAccountsAccountIdRequest.md)
 - [PostSavingsAccountsAccountIdResponse](docs/PostSavingsAccountsAccountIdResponse.md)
 - [PostSavingsAccountsRequest](docs/PostSavingsAccountsRequest.md)
 - [PostSavingsAccountsResponse](docs/PostSavingsAccountsResponse.md)
 - [PostSavingsAccountsSavingsAccountIdChargesRequest](docs/PostSavingsAccountsSavingsAccountIdChargesRequest.md)
 - [PostSavingsAccountsSavingsAccountIdChargesResponse](docs/PostSavingsAccountsSavingsAccountIdChargesResponse.md)
 - [PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest](docs/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.md)
 - [PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse](docs/PostSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.md)
 - [PostSavingsCharges](docs/PostSavingsCharges.md)
 - [PostSavingsProductsRequest](docs/PostSavingsProductsRequest.md)
 - [PostSavingsProductsResponse](docs/PostSavingsProductsResponse.md)
 - [PostSelfAuthenticationResponse](docs/PostSelfAuthenticationResponse.md)
 - [PostSelfBeneficiariesTPTRequest](docs/PostSelfBeneficiariesTPTRequest.md)
 - [PostSelfBeneficiariesTPTResponse](docs/PostSelfBeneficiariesTPTResponse.md)
 - [PostSelfLoansData](docs/PostSelfLoansData.md)
 - [PostSelfLoansDatatables](docs/PostSelfLoansDatatables.md)
 - [PostSelfLoansDisbursementData](docs/PostSelfLoansDisbursementData.md)
 - [PostSelfLoansLoanIdChanges](docs/PostSelfLoansLoanIdChanges.md)
 - [PostSelfLoansLoanIdRequest](docs/PostSelfLoansLoanIdRequest.md)
 - [PostSelfLoansLoanIdResponse](docs/PostSelfLoansLoanIdResponse.md)
 - [PostSelfLoansLoanIdStatus](docs/PostSelfLoansLoanIdStatus.md)
 - [PostSelfLoansRequest](docs/PostSelfLoansRequest.md)
 - [PostSelfLoansResponse](docs/PostSelfLoansResponse.md)
 - [PostStandingInstructionsResponse](docs/PostStandingInstructionsResponse.md)
 - [PostSurveySurveyNameApptableIdRequest](docs/PostSurveySurveyNameApptableIdRequest.md)
 - [PostSurveySurveyNameApptableIdResponse](docs/PostSurveySurveyNameApptableIdResponse.md)
 - [PostTaxesComponentsRequest](docs/PostTaxesComponentsRequest.md)
 - [PostTaxesComponentsResponse](docs/PostTaxesComponentsResponse.md)
 - [PostTaxesGroupRequest](docs/PostTaxesGroupRequest.md)
 - [PostTaxesGroupResponse](docs/PostTaxesGroupResponse.md)
 - [PostTaxesGroupTaxComponents](docs/PostTaxesGroupTaxComponents.md)
 - [PostTellersRequest](docs/PostTellersRequest.md)
 - [PostTellersResponse](docs/PostTellersResponse.md)
 - [PostTellersTellerIdCashiersCashierIdAllocateRequest](docs/PostTellersTellerIdCashiersCashierIdAllocateRequest.md)
 - [PostTellersTellerIdCashiersCashierIdAllocateResponse](docs/PostTellersTellerIdCashiersCashierIdAllocateResponse.md)
 - [PostTellersTellerIdCashiersCashierIdSettleRequest](docs/PostTellersTellerIdCashiersCashierIdSettleRequest.md)
 - [PostTellersTellerIdCashiersCashierIdSettleResponse](docs/PostTellersTellerIdCashiersCashierIdSettleResponse.md)
 - [PostTellersTellerIdCashiersRequest](docs/PostTellersTellerIdCashiersRequest.md)
 - [PostTellersTellerIdCashiersResponse](docs/PostTellersTellerIdCashiersResponse.md)
 - [PostTemplatesRequest](docs/PostTemplatesRequest.md)
 - [PostTemplatesResponse](docs/PostTemplatesResponse.md)
 - [PostUpdateRescheduleLoanChanges](docs/PostUpdateRescheduleLoanChanges.md)
 - [PostUpdateRescheduleLoansRequest](docs/PostUpdateRescheduleLoansRequest.md)
 - [PostUpdateRescheduleLoansResponse](docs/PostUpdateRescheduleLoansResponse.md)
 - [PostUsersRequest](docs/PostUsersRequest.md)
 - [PostUsersResponse](docs/PostUsersResponse.md)
 - [PostalAddress](docs/PostalAddress.md)
 - [ProcessingResultLookup](docs/ProcessingResultLookup.md)
 - [ProductMixRequest](docs/ProductMixRequest.md)
 - [ProgressiveLoanInterestScheduleModel](docs/ProgressiveLoanInterestScheduleModel.md)
 - [ProvisionEntryRequest](docs/ProvisionEntryRequest.md)
 - [ProvisioningCategoryData](docs/ProvisioningCategoryData.md)
 - [ProvisioningCriteriaData](docs/ProvisioningCriteriaData.md)
 - [ProvisioningCriteriaDefinitionData](docs/ProvisioningCriteriaDefinitionData.md)
 - [ProvisioningEntryData](docs/ProvisioningEntryData.md)
 - [PutAccountNumberFormatsRequest](docs/PutAccountNumberFormatsRequest.md)
 - [PutAccountNumberFormatsResponse](docs/PutAccountNumberFormatsResponse.md)
 - [PutAccountNumberFormatschangesSwagger](docs/PutAccountNumberFormatschangesSwagger.md)
 - [PutAccountingRulesResponse](docs/PutAccountingRulesResponse.md)
 - [PutAccountingRulesResponsechangesSwagger](docs/PutAccountingRulesResponsechangesSwagger.md)
 - [PutAccountsChanges](docs/PutAccountsChanges.md)
 - [PutAccountsTypeAccountIdRequest](docs/PutAccountsTypeAccountIdRequest.md)
 - [PutAccountsTypeAccountIdResponse](docs/PutAccountsTypeAccountIdResponse.md)
 - [PutCentersCenterIdRequest](docs/PutCentersCenterIdRequest.md)
 - [PutCentersCenterIdResponse](docs/PutCentersCenterIdResponse.md)
 - [PutCentersChanges](docs/PutCentersChanges.md)
 - [PutChargeTransactionChangesRequest](docs/PutChargeTransactionChangesRequest.md)
 - [PutChargeTransactionChangesResponse](docs/PutChargeTransactionChangesResponse.md)
 - [PutChargeTransactionChangesResponseChanges](docs/PutChargeTransactionChangesResponseChanges.md)
 - [PutChargesChargeIdRequest](docs/PutChargesChargeIdRequest.md)
 - [PutChargesChargeIdResponse](docs/PutChargesChargeIdResponse.md)
 - [PutClientClientIdAddressesResponse](docs/PutClientClientIdAddressesResponse.md)
 - [PutClientCollateralResponse](docs/PutClientCollateralResponse.md)
 - [PutClientsClientIdIdentifiersIdentifierIdResponse](docs/PutClientsClientIdIdentifiersIdentifierIdResponse.md)
 - [PutClientsClientIdRequest](docs/PutClientsClientIdRequest.md)
 - [PutClientsClientIdResponse](docs/PutClientsClientIdResponse.md)
 - [PutCodeValueDataResponse](docs/PutCodeValueDataResponse.md)
 - [PutCodeValuechangesSwagger](docs/PutCodeValuechangesSwagger.md)
 - [PutCodeValuesDataRequest](docs/PutCodeValuesDataRequest.md)
 - [PutCodesApichangesSwagger](docs/PutCodesApichangesSwagger.md)
 - [PutCodesRequest](docs/PutCodesRequest.md)
 - [PutCodesResponse](docs/PutCodesResponse.md)
 - [PutCollateralProductResponse](docs/PutCollateralProductResponse.md)
 - [PutDataTablesAppTableIdDatatableIdResponse](docs/PutDataTablesAppTableIdDatatableIdResponse.md)
 - [PutDataTablesAppTableIdResponse](docs/PutDataTablesAppTableIdResponse.md)
 - [PutDataTablesRequest](docs/PutDataTablesRequest.md)
 - [PutDataTablesRequestAddColumns](docs/PutDataTablesRequestAddColumns.md)
 - [PutDataTablesRequestChangeColumns](docs/PutDataTablesRequestChangeColumns.md)
 - [PutDataTablesRequestDropColumns](docs/PutDataTablesRequestDropColumns.md)
 - [PutDataTablesResponse](docs/PutDataTablesResponse.md)
 - [PutDelinquencyBucketResponse](docs/PutDelinquencyBucketResponse.md)
 - [PutDelinquencyRangeResponse](docs/PutDelinquencyRangeResponse.md)
 - [PutEntityTypeEntityIdDocumentsResponse](docs/PutEntityTypeEntityIdDocumentsResponse.md)
 - [PutExternalAssetOwnerLoanProductAttributeRequest](docs/PutExternalAssetOwnerLoanProductAttributeRequest.md)
 - [PutExternalServiceRequest](docs/PutExternalServiceRequest.md)
 - [PutFinancialActivityAccountsResponse](docs/PutFinancialActivityAccountsResponse.md)
 - [PutFinancialActivityAccountscommentsSwagger](docs/PutFinancialActivityAccountscommentsSwagger.md)
 - [PutFixedDepositAccountsAccountIdRequest](docs/PutFixedDepositAccountsAccountIdRequest.md)
 - [PutFixedDepositAccountsAccountIdResponse](docs/PutFixedDepositAccountsAccountIdResponse.md)
 - [PutFixedDepositAccountsChanges](docs/PutFixedDepositAccountsChanges.md)
 - [PutFixedDepositProductsChanges](docs/PutFixedDepositProductsChanges.md)
 - [PutFixedDepositProductsProductIdRequest](docs/PutFixedDepositProductsProductIdRequest.md)
 - [PutFixedDepositProductsProductIdResponse](docs/PutFixedDepositProductsProductIdResponse.md)
 - [PutFloatingRatesChanges](docs/PutFloatingRatesChanges.md)
 - [PutFloatingRatesFloatingRateIdResponse](docs/PutFloatingRatesFloatingRateIdResponse.md)
 - [PutFundsFundIdRequest](docs/PutFundsFundIdRequest.md)
 - [PutFundsFundIdResponse](docs/PutFundsFundIdResponse.md)
 - [PutGLAccountsRequest](docs/PutGLAccountsRequest.md)
 - [PutGLAccountsResponse](docs/PutGLAccountsResponse.md)
 - [PutGLAccountsResponsechangesSwagger](docs/PutGLAccountsResponsechangesSwagger.md)
 - [PutGlClosuresRequest](docs/PutGlClosuresRequest.md)
 - [PutGlClosuresResponse](docs/PutGlClosuresResponse.md)
 - [PutGlobalConfigurationsRequest](docs/PutGlobalConfigurationsRequest.md)
 - [PutGlobalConfigurationsResponse](docs/PutGlobalConfigurationsResponse.md)
 - [PutGlobalConfigurationsResponsechangesSwagger](docs/PutGlobalConfigurationsResponsechangesSwagger.md)
 - [PutGroupsGroupIdChanges](docs/PutGroupsGroupIdChanges.md)
 - [PutGroupsGroupIdRequest](docs/PutGroupsGroupIdRequest.md)
 - [PutGroupsGroupIdResponse](docs/PutGroupsGroupIdResponse.md)
 - [PutHolidaysHolidayIdRequest](docs/PutHolidaysHolidayIdRequest.md)
 - [PutHolidaysHolidayIdResponse](docs/PutHolidaysHolidayIdResponse.md)
 - [PutHolidaysHolidayIdResponseChanges](docs/PutHolidaysHolidayIdResponseChanges.md)
 - [PutHookRequest](docs/PutHookRequest.md)
 - [PutHookResponse](docs/PutHookResponse.md)
 - [PutHookResponseChangesSwagger](docs/PutHookResponseChangesSwagger.md)
 - [PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest](docs/PutInterestRateChartsChartIdChartSlabsChartSlabIdRequest.md)
 - [PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse](docs/PutInterestRateChartsChartIdChartSlabsChartSlabIdResponse.md)
 - [PutInterestRateChartsChartIdRequest](docs/PutInterestRateChartsChartIdRequest.md)
 - [PutInterestRateChartsChartIdResponse](docs/PutInterestRateChartsChartIdResponse.md)
 - [PutJobsJobIDRequest](docs/PutJobsJobIDRequest.md)
 - [PutLoanChanges](docs/PutLoanChanges.md)
 - [PutLoanProductsProductIdRequest](docs/PutLoanProductsProductIdRequest.md)
 - [PutLoanProductsProductIdResponse](docs/PutLoanProductsProductIdResponse.md)
 - [PutLoansApprovedAmountChanges](docs/PutLoansApprovedAmountChanges.md)
 - [PutLoansApprovedAmountRequest](docs/PutLoansApprovedAmountRequest.md)
 - [PutLoansApprovedAmountResponse](docs/PutLoansApprovedAmountResponse.md)
 - [PutLoansAvailableDisbursementAmountChanges](docs/PutLoansAvailableDisbursementAmountChanges.md)
 - [PutLoansAvailableDisbursementAmountRequest](docs/PutLoansAvailableDisbursementAmountRequest.md)
 - [PutLoansAvailableDisbursementAmountResponse](docs/PutLoansAvailableDisbursementAmountResponse.md)
 - [PutLoansLoanIdChanges](docs/PutLoansLoanIdChanges.md)
 - [PutLoansLoanIdChargesChargeIdRequest](docs/PutLoansLoanIdChargesChargeIdRequest.md)
 - [PutLoansLoanIdChargesChargeIdResponse](docs/PutLoansLoanIdChargesChargeIdResponse.md)
 - [PutLoansLoanIdCollateral](docs/PutLoansLoanIdCollateral.md)
 - [PutLoansLoanIdCollateralsCollateralIdResponse](docs/PutLoansLoanIdCollateralsCollateralIdResponse.md)
 - [PutLoansLoanIdDisbursementData](docs/PutLoansLoanIdDisbursementData.md)
 - [PutLoansLoanIdRequest](docs/PutLoansLoanIdRequest.md)
 - [PutLoansLoanIdResponse](docs/PutLoansLoanIdResponse.md)
 - [PutNotesChanges](docs/PutNotesChanges.md)
 - [PutOfficesOfficeIdRequest](docs/PutOfficesOfficeIdRequest.md)
 - [PutOfficesOfficeIdResponse](docs/PutOfficesOfficeIdResponse.md)
 - [PutOfficesOfficeIdResponseChanges](docs/PutOfficesOfficeIdResponseChanges.md)
 - [PutPasswordPreferencesTemplateRequest](docs/PutPasswordPreferencesTemplateRequest.md)
 - [PutPaymentTypesPaymentTypeIdRequest](docs/PutPaymentTypesPaymentTypeIdRequest.md)
 - [PutPaymentTypesPaymentTypeIdResponse](docs/PutPaymentTypesPaymentTypeIdResponse.md)
 - [PutPermissionsRequest](docs/PutPermissionsRequest.md)
 - [PutProductsChanges](docs/PutProductsChanges.md)
 - [PutProductsTypeProductIdRequest](docs/PutProductsTypeProductIdRequest.md)
 - [PutProductsTypeProductIdResponse](docs/PutProductsTypeProductIdResponse.md)
 - [PutProvisioningCriteriaRequest](docs/PutProvisioningCriteriaRequest.md)
 - [PutProvisioningCriteriaResponse](docs/PutProvisioningCriteriaResponse.md)
 - [PutProvisioningCriteriaResponseChanges](docs/PutProvisioningCriteriaResponseChanges.md)
 - [PutProvisioningEntriesRequest](docs/PutProvisioningEntriesRequest.md)
 - [PutProvisioningEntriesResponse](docs/PutProvisioningEntriesResponse.md)
 - [PutRecurringDepositAccountsAccountIdRequest](docs/PutRecurringDepositAccountsAccountIdRequest.md)
 - [PutRecurringDepositAccountsAccountIdResponse](docs/PutRecurringDepositAccountsAccountIdResponse.md)
 - [PutRecurringDepositAccountsChanges](docs/PutRecurringDepositAccountsChanges.md)
 - [PutRecurringDepositProductsChanges](docs/PutRecurringDepositProductsChanges.md)
 - [PutRecurringDepositProductsRequest](docs/PutRecurringDepositProductsRequest.md)
 - [PutRecurringDepositProductsResponse](docs/PutRecurringDepositProductsResponse.md)
 - [PutReportMailingJobsRequest](docs/PutReportMailingJobsRequest.md)
 - [PutReportMailingJobsResponse](docs/PutReportMailingJobsResponse.md)
 - [PutReportMailingJobsResponseChanges](docs/PutReportMailingJobsResponseChanges.md)
 - [PutReportRequest](docs/PutReportRequest.md)
 - [PutReportResponse](docs/PutReportResponse.md)
 - [PutReportResponseChanges](docs/PutReportResponseChanges.md)
 - [PutResourceTypeResourceIdNotesNoteIdResponse](docs/PutResourceTypeResourceIdNotesNoteIdResponse.md)
 - [PutRolesRoleIdPermissionsRequest](docs/PutRolesRoleIdPermissionsRequest.md)
 - [PutRolesRoleIdPermissionsResponse](docs/PutRolesRoleIdPermissionsResponse.md)
 - [PutRolesRoleIdPermissionsResponsePermissionsChanges](docs/PutRolesRoleIdPermissionsResponsePermissionsChanges.md)
 - [PutRolesRoleIdRequest](docs/PutRolesRoleIdRequest.md)
 - [PutRolesRoleIdResponse](docs/PutRolesRoleIdResponse.md)
 - [PutRolesRoleIdResponseChanges](docs/PutRolesRoleIdResponseChanges.md)
 - [PutSavingsAccountsAccountIdRequest](docs/PutSavingsAccountsAccountIdRequest.md)
 - [PutSavingsAccountsAccountIdResponse](docs/PutSavingsAccountsAccountIdResponse.md)
 - [PutSavingsAccountsChanges](docs/PutSavingsAccountsChanges.md)
 - [PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest](docs/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdRequest.md)
 - [PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse](docs/PutSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.md)
 - [PutSavingsChanges](docs/PutSavingsChanges.md)
 - [PutSavingsProductsProductIdRequest](docs/PutSavingsProductsProductIdRequest.md)
 - [PutSavingsProductsProductIdResponse](docs/PutSavingsProductsProductIdResponse.md)
 - [PutSelfBeneficiariesChanges](docs/PutSelfBeneficiariesChanges.md)
 - [PutSelfBeneficiariesTPTBeneficiaryIdRequest](docs/PutSelfBeneficiariesTPTBeneficiaryIdRequest.md)
 - [PutSelfBeneficiariesTPTBeneficiaryIdResponse](docs/PutSelfBeneficiariesTPTBeneficiaryIdResponse.md)
 - [PutSelfLoansChanges](docs/PutSelfLoansChanges.md)
 - [PutSelfLoansLoanIdRequest](docs/PutSelfLoansLoanIdRequest.md)
 - [PutSelfLoansLoanIdResponse](docs/PutSelfLoansLoanIdResponse.md)
 - [PutSelfUserChanges](docs/PutSelfUserChanges.md)
 - [PutSelfUserRequest](docs/PutSelfUserRequest.md)
 - [PutSelfUserResponse](docs/PutSelfUserResponse.md)
 - [PutStaffRequest](docs/PutStaffRequest.md)
 - [PutStandingInstructionsStandingInstructionIdResponse](docs/PutStandingInstructionsStandingInstructionIdResponse.md)
 - [PutTaxesComponentsChanges](docs/PutTaxesComponentsChanges.md)
 - [PutTaxesComponentsTaxComponentIdRequest](docs/PutTaxesComponentsTaxComponentIdRequest.md)
 - [PutTaxesComponentsTaxComponentIdResponse](docs/PutTaxesComponentsTaxComponentIdResponse.md)
 - [PutTaxesGroupChanges](docs/PutTaxesGroupChanges.md)
 - [PutTaxesGroupModifiedComponents](docs/PutTaxesGroupModifiedComponents.md)
 - [PutTaxesGroupTaxComponents](docs/PutTaxesGroupTaxComponents.md)
 - [PutTaxesGroupTaxGroupIdRequest](docs/PutTaxesGroupTaxGroupIdRequest.md)
 - [PutTaxesGroupTaxGroupIdResponse](docs/PutTaxesGroupTaxGroupIdResponse.md)
 - [PutTellersRequest](docs/PutTellersRequest.md)
 - [PutTellersResponse](docs/PutTellersResponse.md)
 - [PutTellersResponseChanges](docs/PutTellersResponseChanges.md)
 - [PutTellersTellerIdCashiersCashierIdRequest](docs/PutTellersTellerIdCashiersCashierIdRequest.md)
 - [PutTellersTellerIdCashiersCashierIdResponse](docs/PutTellersTellerIdCashiersCashierIdResponse.md)
 - [PutTellersTellerIdCashiersCashierIdResponseChanges](docs/PutTellersTellerIdCashiersCashierIdResponseChanges.md)
 - [PutTemplatesTemplateIdRequest](docs/PutTemplatesTemplateIdRequest.md)
 - [PutTemplatesTemplateIdResponse](docs/PutTemplatesTemplateIdResponse.md)
 - [PutUpdateStandingInstructionChanges](docs/PutUpdateStandingInstructionChanges.md)
 - [PutUsersUserIdRequest](docs/PutUsersUserIdRequest.md)
 - [PutUsersUserIdResponse](docs/PutUsersUserIdResponse.md)
 - [PutUsersUserIdResponseChanges](docs/PutUsersUserIdResponseChanges.md)
 - [PutWorkingDaysRequest](docs/PutWorkingDaysRequest.md)
 - [PutWorkingDaysResponse](docs/PutWorkingDaysResponse.md)
 - [Question](docs/Question.md)
 - [QuestionData](docs/QuestionData.md)
 - [Rate](docs/Rate.md)
 - [RateData](docs/RateData.md)
 - [RateRequest](docs/RateRequest.md)
 - [RepaymentPeriod](docs/RepaymentPeriod.md)
 - [RepaymentTransactionRequest](docs/RepaymentTransactionRequest.md)
 - [ReportExportType](docs/ReportExportType.md)
 - [ReportMailingJobRunHistoryData](docs/ReportMailingJobRunHistoryData.md)
 - [ReportMailingJobTimelineData](docs/ReportMailingJobTimelineData.md)
 - [RescheduleReasonsCodeValue](docs/RescheduleReasonsCodeValue.md)
 - [RescheduleReasonsTimeline](docs/RescheduleReasonsTimeline.md)
 - [Response](docs/Response.md)
 - [ResponseData](docs/ResponseData.md)
 - [ResultsetColumnHeaderData](docs/ResultsetColumnHeaderData.md)
 - [ResultsetRowData](docs/ResultsetRowData.md)
 - [RetrieveLoansPointInTimeExternalIdsRequest](docs/RetrieveLoansPointInTimeExternalIdsRequest.md)
 - [RetrieveLoansPointInTimeRequest](docs/RetrieveLoansPointInTimeRequest.md)
 - [Role](docs/Role.md)
 - [RoleData](docs/RoleData.md)
 - [RunReportsResponse](docs/RunReportsResponse.md)
 - [SavingDueTransactionRequest](docs/SavingDueTransactionRequest.md)
 - [SavingsAccountApplicationTimelineData](docs/SavingsAccountApplicationTimelineData.md)
 - [SavingsAccountChargeData](docs/SavingsAccountChargeData.md)
 - [SavingsAccountChargesPaidByData](docs/SavingsAccountChargesPaidByData.md)
 - [SavingsAccountData](docs/SavingsAccountData.md)
 - [SavingsAccountStatusEnumData](docs/SavingsAccountStatusEnumData.md)
 - [SavingsAccountSubStatusEnumData](docs/SavingsAccountSubStatusEnumData.md)
 - [SavingsAccountSummaryData](docs/SavingsAccountSummaryData.md)
 - [SavingsAccountTransactionData](docs/SavingsAccountTransactionData.md)
 - [SavingsAccountTransactionEnumData](docs/SavingsAccountTransactionEnumData.md)
 - [SavingsAccountTransactionsSearchResponse](docs/SavingsAccountTransactionsSearchResponse.md)
 - [SavingsProductData](docs/SavingsProductData.md)
 - [Scorecard](docs/Scorecard.md)
 - [ScorecardData](docs/ScorecardData.md)
 - [ScorecardValue](docs/ScorecardValue.md)
 - [SearchData](docs/SearchData.md)
 - [ShareAccountApplicationTimelineData](docs/ShareAccountApplicationTimelineData.md)
 - [ShareAccountChargeData](docs/ShareAccountChargeData.md)
 - [ShareAccountData](docs/ShareAccountData.md)
 - [ShareAccountDividendData](docs/ShareAccountDividendData.md)
 - [ShareAccountStatusEnumData](docs/ShareAccountStatusEnumData.md)
 - [ShareAccountSummaryData](docs/ShareAccountSummaryData.md)
 - [ShareAccountTransactionData](docs/ShareAccountTransactionData.md)
 - [SingleDebitOrCreditEntryCommand](docs/SingleDebitOrCreditEntryCommand.md)
 - [SmsBusinessRulesData](docs/SmsBusinessRulesData.md)
 - [SmsCampaignData](docs/SmsCampaignData.md)
 - [SmsCampaignParamReq](docs/SmsCampaignParamReq.md)
 - [SmsCampaignPreviewDto](docs/SmsCampaignPreviewDto.md)
 - [SmsCampaignTimeLine](docs/SmsCampaignTimeLine.md)
 - [SmsCreationRequest](docs/SmsCreationRequest.md)
 - [SmsData](docs/SmsData.md)
 - [SmsProviderData](docs/SmsProviderData.md)
 - [SmsUpdateRequest](docs/SmsUpdateRequest.md)
 - [Sort](docs/Sort.md)
 - [SortOrder](docs/SortOrder.md)
 - [Staff](docs/Staff.md)
 - [StaffAssignmentHistory](docs/StaffAssignmentHistory.md)
 - [StaffData](docs/StaffData.md)
 - [StaffRequest](docs/StaffRequest.md)
 - [StandingInstructionCreationRequest](docs/StandingInstructionCreationRequest.md)
 - [StandingInstructionData](docs/StandingInstructionData.md)
 - [StandingInstructionHistoryData](docs/StandingInstructionHistoryData.md)
 - [StandingInstructionUpdatesRequest](docs/StandingInstructionUpdatesRequest.md)
 - [StringEnumOptionData](docs/StringEnumOptionData.md)
 - [SubjectName](docs/SubjectName.md)
 - [Survey](docs/Survey.md)
 - [SurveyData](docs/SurveyData.md)
 - [TableQueryData](docs/TableQueryData.md)
 - [TaxComponent](docs/TaxComponent.md)
 - [TaxComponentData](docs/TaxComponentData.md)
 - [TaxComponentHistory](docs/TaxComponentHistory.md)
 - [TaxComponentHistoryData](docs/TaxComponentHistoryData.md)
 - [TaxDetailsData](docs/TaxDetailsData.md)
 - [TaxGroup](docs/TaxGroup.md)
 - [TaxGroupData](docs/TaxGroupData.md)
 - [TaxGroupMappings](docs/TaxGroupMappings.md)
 - [TaxGroupMappingsData](docs/TaxGroupMappingsData.md)
 - [TellerData](docs/TellerData.md)
 - [TellerJournalData](docs/TellerJournalData.md)
 - [TellerTransactionData](docs/TellerTransactionData.md)
 - [TemplateMapper](docs/TemplateMapper.md)
 - [TransactionDetailData](docs/TransactionDetailData.md)
 - [TransactionDetails](docs/TransactionDetails.md)
 - [TransactionProcessingStrategyData](docs/TransactionProcessingStrategyData.md)
 - [TransactionType](docs/TransactionType.md)
 - [TransactionTypeEnumData](docs/TransactionTypeEnumData.md)
 - [UpdateChangesResponse](docs/UpdateChangesResponse.md)
 - [UpdateClientCollateralRequest](docs/UpdateClientCollateralRequest.md)
 - [UpdatePostDatedCheckRequest](docs/UpdatePostDatedCheckRequest.md)
 - [UpdatePostDatedCheckResponse](docs/UpdatePostDatedCheckResponse.md)
 - [UpdateStaffResponse](docs/UpdateStaffResponse.md)
 - [WorkingDaysData](docs/WorkingDaysData.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="basicAuth"></a>
### basicAuth

- **Type**: HTTP basic authentication

<a id="tenantid"></a>
### tenantid

- **Type**: API key
- **API key parameter name**: fineract-platform-tenantid
- **Location**: HTTP header

