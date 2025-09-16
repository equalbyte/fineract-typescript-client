# DataTablesApi

All URIs are relative to *http://localhost/fineract-provider/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**advancedQuery**](#advancedquery) | **POST** /v1/datatables/{datatable}/query | Query Data Table values|
|[**createDatatable**](#createdatatable) | **POST** /v1/datatables | Create Data Table|
|[**createDatatableEntry**](#createdatatableentry) | **POST** /v1/datatables/{datatable}/{apptableId} | Create Entry in Data Table|
|[**deleteDatatable**](#deletedatatable) | **DELETE** /v1/datatables/{datatableName} | Delete Data Table|
|[**deleteDatatableEntries**](#deletedatatableentries) | **DELETE** /v1/datatables/{datatable}/{apptableId} | Delete Entry(s) in Data Table|
|[**deleteDatatableEntry**](#deletedatatableentry) | **DELETE** /v1/datatables/{datatable}/{apptableId}/{datatableId} | Delete Entry in Datatable (One to Many)|
|[**deregisterDatatable**](#deregisterdatatable) | **POST** /v1/datatables/deregister/{datatable} | Deregister Data Table|
|[**getDatatable**](#getdatatable) | **GET** /v1/datatables/{datatable} | Retrieve Data Table Details|
|[**getDatatable1**](#getdatatable1) | **GET** /v1/datatables/{datatable}/{apptableId} | Retrieve Entry(s) from Data Table|
|[**getDatatableManyEntry**](#getdatatablemanyentry) | **GET** /v1/datatables/{datatable}/{apptableId}/{datatableId} | |
|[**getDatatables**](#getdatatables) | **GET** /v1/datatables | List Data Tables|
|[**queryValues**](#queryvalues) | **GET** /v1/datatables/{datatable}/query | Query Data Table values|
|[**registerDatatable**](#registerdatatable) | **POST** /v1/datatables/register/{datatable}/{apptable} | Register Data Table|
|[**updateDatatable**](#updatedatatable) | **PUT** /v1/datatables/{datatableName} | Update Data Table|
|[**updateDatatableEntryOneToMany**](#updatedatatableentryonetomany) | **PUT** /v1/datatables/{datatable}/{apptableId}/{datatableId} | Update Entry in Data Table (One to Many)|
|[**updateDatatableEntryOnetoOne**](#updatedatatableentryonetoone) | **PUT** /v1/datatables/{datatable}/{apptableId} | Update Entry in Data Table (One to One)|

# **advancedQuery**
> string advancedQuery()

Query values from a registered data table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration,
    PagedLocalRequestAdvancedQueryData
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let pagedLocalRequestAdvancedQueryData: PagedLocalRequestAdvancedQueryData; // (optional)

const { status, data } = await apiInstance.advancedQuery(
    datatable,
    pagedLocalRequestAdvancedQueryData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pagedLocalRequestAdvancedQueryData** | **PagedLocalRequestAdvancedQueryData**|  | |
| **datatable** | [**string**] | datatable | defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDatatable**
> PostDataTablesResponse createDatatable(postDataTablesRequest)

Create a new data table and registers it with the Apache Fineract Core application table.  Field Descriptions  Mandatory - datatableName :   The name of the Data Table.  Mandatory - apptableName  Application table name. Must be one of the following:  m_client  m_group  m_loan  m_office  m_saving_account  m_product_loan  m_savings_product  Mandatory - columns   An array of columns in the new Data Table.  Optional - multiRow  Allows to create multiple entries in the Data Table. Optional, defaults to false. If this property is not provided Data Table will allow only one entry.  Field Descriptions - columns  Mandatory - name  Name of the created column. Can contain only alphanumeric characters, underscores and spaces, but cannot start with a number. Cannot start or end with an underscore or space.  Mandatory - type  Column type. Must be one of the following:  Boolean  Date  DateTime  Decimal  Dropdown   Number  String  Text  Mandatory [type = Dropdown] - code  Used in Code description fields. Column name becomes: code_cd_name. Mandatory if using type Dropdown, otherwise an error is returned.  Optional - mandatory  Determines whether this column must have a value in every entry. Optional, defaults to false.  Mandatory [type = String] - length  Length of the text field. Mandatory if type String is used, otherwise an error is returned.

### Example

```typescript
import {
    DataTablesApi,
    Configuration,
    PostDataTablesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let postDataTablesRequest: PostDataTablesRequest; //

const { status, data } = await apiInstance.createDatatable(
    postDataTablesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postDataTablesRequest** | **PostDataTablesRequest**|  | |


### Return type

**PostDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDatatableEntry**
> PostDataTablesAppTableIdResponse createDatatableEntry(body)

Adds a row to the data table.  Note that the default datatable UI functionality converts any field name containing spaces to underscores when using the API. This means the field name \"Business Description\" is considered the same as \"Business_Description\". So you shouldn\'t have both \"versions\" in any data table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let body: string; //{   \"BusinessDescription\": \"Livestock sales\",   \"Comment\": \"First comment made\",   \"Education_cv\": \"Primary\",   \"Gender_cd\": 6,   \"HighestRatePaid\": 8.5,   \"NextVisit\": \"01 October 2012\",   \"YearsinBusiness\": 5,   \"dateFormat\": \"dd MMMM yyyy\",   \"locale\": \"en\" }

const { status, data } = await apiInstance.createDatatableEntry(
    datatable,
    apptableId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**| {   \&quot;BusinessDescription\&quot;: \&quot;Livestock sales\&quot;,   \&quot;Comment\&quot;: \&quot;First comment made\&quot;,   \&quot;Education_cv\&quot;: \&quot;Primary\&quot;,   \&quot;Gender_cd\&quot;: 6,   \&quot;HighestRatePaid\&quot;: 8.5,   \&quot;NextVisit\&quot;: \&quot;01 October 2012\&quot;,   \&quot;YearsinBusiness\&quot;: 5,   \&quot;dateFormat\&quot;: \&quot;dd MMMM yyyy\&quot;,   \&quot;locale\&quot;: \&quot;en\&quot; } | |
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|


### Return type

**PostDataTablesAppTableIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDatatable**
> DeleteDataTablesResponse deleteDatatable()

Deletes a data table and deregisters it from the Apache Fineract Core application table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatableName: string; //datatableName (default to undefined)

const { status, data } = await apiInstance.deleteDatatable(
    datatableName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatableName** | [**string**] | datatableName | defaults to undefined|


### Return type

**DeleteDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDatatableEntries**
> DeleteDataTablesDatatableAppTableIdResponse deleteDatatableEntries()

Deletes the entry (if it exists) for data tables that are one-to-one with the application table.  Deletes the entries (if they exist) for data tables that are one-to-many with the application table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)

const { status, data } = await apiInstance.deleteDatatableEntries(
    datatable,
    apptableId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|


### Return type

**DeleteDataTablesDatatableAppTableIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDatatableEntry**
> DeleteDataTablesDatatableAppTableIdDatatableIdResponse deleteDatatableEntry()

Deletes the entry (if it exists) for data tables that are one to many with the application table.  

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let datatableId: number; //datatableId (default to undefined)

const { status, data } = await apiInstance.deleteDatatableEntry(
    datatable,
    apptableId,
    datatableId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|
| **datatableId** | [**number**] | datatableId | defaults to undefined|


### Return type

**DeleteDataTablesDatatableAppTableIdDatatableIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deregisterDatatable**
> PutDataTablesResponse deregisterDatatable()

Deregisters a data table. It will no longer be available through the API.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)

const { status, data } = await apiInstance.deregisterDatatable(
    datatable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|


### Return type

**PutDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDatatable**
> GetDataTablesResponse getDatatable()

Lists a registered data table details and the Apache Fineract Core application table they are registered to.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)

const { status, data } = await apiInstance.getDatatable(
    datatable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|


### Return type

**GetDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDatatable1**
> string getDatatable1()

Gets the entry (if it exists) for data tables that are one to one with the application table.  Gets the entries (if they exist) for data tables that are one to many with the application table.  Note: The \'fields\' parameter is not available for datatables.  ARGUMENTS orderoptional Specifies the order in which data is returned.genericResultSetoptional, defaults to false If \'true\' an optimised JSON format is returned suitable for tabular display of data. This format is used by the default data tables UI functionality. Example Requests:  datatables/extra_client_details/1   datatables/extra_family_details/1?order=`Date of Birth` desc   datatables/extra_client_details/1?genericResultSet=true

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let order: string; //order (optional) (default to undefined)

const { status, data } = await apiInstance.getDatatable1(
    datatable,
    apptableId,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|
| **order** | [**string**] | order | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDatatableManyEntry**
> string getDatatableManyEntry()


### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; // (default to undefined)
let apptableId: number; // (default to undefined)
let datatableId: number; // (default to undefined)
let order: string; // (optional) (default to undefined)
let genericResultSet: boolean; //Optional flag to format the response (optional) (default to false)

const { status, data } = await apiInstance.getDatatableManyEntry(
    datatable,
    apptableId,
    datatableId,
    order,
    genericResultSet
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] |  | defaults to undefined|
| **apptableId** | [**number**] |  | defaults to undefined|
| **datatableId** | [**number**] |  | defaults to undefined|
| **order** | [**string**] |  | (optional) defaults to undefined|
| **genericResultSet** | [**boolean**] | Optional flag to format the response | (optional) defaults to false|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**0** | default response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDatatables**
> Array<GetDataTablesResponse> getDatatables()

Lists registered data tables and the Apache Fineract Core application table they are registered to.  ARGUMENTS  apptable  - optional The Apache Fineract core application table.  Example Requests:  datatables?apptable=m_client   datatables

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let apptable: string; //apptable (optional) (default to undefined)

const { status, data } = await apiInstance.getDatatables(
    apptable
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apptable** | [**string**] | apptable | (optional) defaults to undefined|


### Return type

**Array<GetDataTablesResponse>**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryValues**
> string queryValues()

Query values from a registered data table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let columnFilter: string; //columnFilter (optional) (default to undefined)
let valueFilter: string; //valueFilter (optional) (default to undefined)
let resultColumns: string; //resultColumns (optional) (default to undefined)

const { status, data } = await apiInstance.queryValues(
    datatable,
    columnFilter,
    valueFilter,
    resultColumns
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **datatable** | [**string**] | datatable | defaults to undefined|
| **columnFilter** | [**string**] | columnFilter | (optional) defaults to undefined|
| **valueFilter** | [**string**] | valueFilter | (optional) defaults to undefined|
| **resultColumns** | [**string**] | resultColumns | (optional) defaults to undefined|


### Return type

**string**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerDatatable**
> PutDataTablesResponse registerDatatable()

Registers a data table with the Apache Fineract Core application table. This allows the data table to be maintained through the API. In case the datatable is a PPI (survey table), a parameter category should be pass along with the request. The API currently support one category (200)

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptable: string; //apptable (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.registerDatatable(
    datatable,
    apptable,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptable** | [**string**] | apptable | defaults to undefined|


### Return type

**PutDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDatatable**
> PutDataTablesResponse updateDatatable(putDataTablesRequest)

Modifies fields of a data table. If the apptableName parameter is passed, data table is deregistered and registered with the new application table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration,
    PutDataTablesRequest
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatableName: string; //datatableName (default to undefined)
let putDataTablesRequest: PutDataTablesRequest; //

const { status, data } = await apiInstance.updateDatatable(
    datatableName,
    putDataTablesRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **putDataTablesRequest** | **PutDataTablesRequest**|  | |
| **datatableName** | [**string**] | datatableName | defaults to undefined|


### Return type

**PutDataTablesResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDatatableEntryOneToMany**
> PutDataTablesAppTableIdDatatableIdResponse updateDatatableEntryOneToMany(body)

Updates the row (if it exists) of the data table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let datatableId: number; //datatableId (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateDatatableEntryOneToMany(
    datatable,
    apptableId,
    datatableId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|
| **datatableId** | [**number**] | datatableId | defaults to undefined|


### Return type

**PutDataTablesAppTableIdDatatableIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDatatableEntryOnetoOne**
> PutDataTablesAppTableIdResponse updateDatatableEntryOnetoOne(body)

Updates the row (if it exists) of the data table.

### Example

```typescript
import {
    DataTablesApi,
    Configuration
} from 'fineract-typescript-client';

const configuration = new Configuration();
const apiInstance = new DataTablesApi(configuration);

let datatable: string; //datatable (default to undefined)
let apptableId: number; //apptableId (default to undefined)
let body: string; //

const { status, data } = await apiInstance.updateDatatableEntryOnetoOne(
    datatable,
    apptableId,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **string**|  | |
| **datatable** | [**string**] | datatable | defaults to undefined|
| **apptableId** | [**number**] | apptableId | defaults to undefined|


### Return type

**PutDataTablesAppTableIdResponse**

### Authorization

[basicAuth](../README.md#basicAuth), [tenantid](../README.md#tenantid)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

