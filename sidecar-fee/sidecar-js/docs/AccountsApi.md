# SubstrateApiSidecarV1.AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalanceInfo**](AccountsApi.md#getAccountBalanceInfo) | **GET** /accounts/{accountId}/balance-info | Get balance information for an account.
[**getVestingSummaryByAccountId**](AccountsApi.md#getVestingSummaryByAccountId) | **GET** /accounts/{accountId}/vesting-info | Get vesting information for an account.



## getAccountBalanceInfo

> AccountBalanceInfo getAccountBalanceInfo(accountId, opts)

Get balance information for an account.

Returns information about an account&#39;s balance. Replaces &#x60;/balance/{address}&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.AccountsApi();
let accountId = "accountId_example"; // String | SS58 address of the account.
let opts = {
  'at': "at_example" // String | Block at which to query balance info for the specified account.
};
apiInstance.getAccountBalanceInfo(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| SS58 address of the account. | 
 **at** | **String**| Block at which to query balance info for the specified account. | [optional] 

### Return type

[**AccountBalanceInfo**](AccountBalanceInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVestingSummaryByAccountId

> AccountVestingInfo getVestingSummaryByAccountId(accountId, opts)

Get vesting information for an account.

Returns the vesting schedule for an account. Replaces &#x60;/vesting/{address}&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.AccountsApi();
let accountId = "accountId_example"; // String | SS58 address of the account.
let opts = {
  'at': "at_example" // String | Block at which to query the vesting info for the specified account.
};
apiInstance.getVestingSummaryByAccountId(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| SS58 address of the account. | 
 **at** | **String**| Block at which to query the vesting info for the specified account. | [optional] 

### Return type

[**AccountVestingInfo**](AccountVestingInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

