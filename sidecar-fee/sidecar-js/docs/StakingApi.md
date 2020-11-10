# SubstrateApiSidecarV1.StakingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStakingPayoutsByAccountId**](StakingApi.md#getStakingPayoutsByAccountId) | **GET** /accounts/{accountId}/staking-payouts | Get payout information for a _Stash_ account.
[**getStakingProgress**](StakingApi.md#getStakingProgress) | **GET** /pallets/staking/progress | Get progress on the general Staking pallet system.
[**getStakingSummaryByAccountId**](StakingApi.md#getStakingSummaryByAccountId) | **GET** /accounts/{accountId}/staking-info | Get staking information for a _Stash_ account.



## getStakingPayoutsByAccountId

> AccountStakingPayouts getStakingPayoutsByAccountId(accountId, opts)

Get payout information for a _Stash_ account.

Returns payout information for the last specified eras. If specifying both the depth and era query params, this endpoint will return information for (era - depth) through era. (i.e. if depth&#x3D;5 and era&#x3D;20 information will be returned for eras 16 through 20). N.B. You cannot query eras less then &#x60;current_era - HISTORY_DEPTH&#x60;. N.B. The &#x60;nominator*&#x60; fields correspond to the address being queried, even if it is a validator&#39;s _Stash_ address. This is because a validator is technically nominating itself.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.StakingApi();
let accountId = "accountId_example"; // String | SS58 address of the account. Must be a _Stash_ account.
let opts = {
  'depth': "'1'", // String | The number of eras to query for payouts of. Must be less than or equal to `HISTORY_DEPTH`. In cases where `era - (depth -1)` is less than 0, the first era queried will be 0.
  'era': "'`active_era - 1`'", // String | The era to query at.
  'unclaimedOnly': "'true'" // Boolean | Only return unclaimed rewards.
};
apiInstance.getStakingPayoutsByAccountId(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| SS58 address of the account. Must be a _Stash_ account. | 
 **depth** | **String**| The number of eras to query for payouts of. Must be less than or equal to &#x60;HISTORY_DEPTH&#x60;. In cases where &#x60;era - (depth -1)&#x60; is less than 0, the first era queried will be 0. | [optional] [default to &#39;1&#39;]
 **era** | **String**| The era to query at. | [optional] [default to &#39;&#x60;active_era - 1&#x60;&#39;]
 **unclaimedOnly** | **Boolean**| Only return unclaimed rewards. | [optional] [default to &#39;true&#39;]

### Return type

[**AccountStakingPayouts**](AccountStakingPayouts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingProgress

> StakingProgress getStakingProgress(opts)

Get progress on the general Staking pallet system.

Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces &#x60;/staking-info&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.StakingApi();
let opts = {
  'at': "at_example" // String | Block at which to retrieve a staking progress report.
};
apiInstance.getStakingProgress(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve a staking progress report. | [optional] 

### Return type

[**StakingProgress**](StakingProgress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStakingSummaryByAccountId

> AccountStakingInfo getStakingSummaryByAccountId(accountId, opts)

Get staking information for a _Stash_ account.

Returns information about a _Stash_ account&#39;s staking activity. Replaces &#x60;/staking/{address}&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.StakingApi();
let accountId = "accountId_example"; // String | SS58 address of the account. Must be a _Stash_ account.
let opts = {
  'at': "at_example" // String | Block at which to query the staking info for the specified account.
};
apiInstance.getStakingSummaryByAccountId(accountId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| SS58 address of the account. Must be a _Stash_ account. | 
 **at** | **String**| Block at which to query the staking info for the specified account. | [optional] 

### Return type

[**AccountStakingInfo**](AccountStakingInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

