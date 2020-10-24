# \StakingApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_staking_payouts_by_account_id**](StakingApi.md#get_staking_payouts_by_account_id) | **get** /accounts/{accountId}/staking-payouts | Get payout information for a _Stash_ account.
[**get_staking_progress**](StakingApi.md#get_staking_progress) | **get** /pallets/staking/progress | Get progress on the general Staking pallet system.
[**get_staking_summary_by_account_id**](StakingApi.md#get_staking_summary_by_account_id) | **get** /accounts/{accountId}/staking-info | Get staking information for a _Stash_ account.



## get_staking_payouts_by_account_id

> crate::models::AccountStakingPayouts get_staking_payouts_by_account_id(account_id, depth, era, unclaimed_only)
Get payout information for a _Stash_ account.

Returns payout information for the last specified eras. If specifying both the depth and era query params, this endpoint will return information for (era - depth) through era. (i.e. if depth=5 and era=20 information will be returned for eras 16 through 20). N.B. You cannot query eras less then `current_era - HISTORY_DEPTH`. N.B. The `nominator*` fields correspond to the address being queried, even if it is a validator's _Stash_ address. This is because a validator is technically nominating itself.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**account_id** | **String** | SS58 address of the account. Must be a _Stash_ account. | [required] |
**depth** | Option<**String**> | The number of eras to query for payouts of. Must be less than or equal to `HISTORY_DEPTH`. In cases where `era - (depth -1)` is less than 0, the first era queried will be 0. |  |[default to 1]
**era** | Option<**String**> | The era to query at. |  |[default to `active_era - 1`]
**unclaimed_only** | Option<**bool**> | Only return unclaimed rewards. |  |[default to true]

### Return type

[**crate::models::AccountStakingPayouts**](AccountStakingPayouts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staking_progress

> crate::models::StakingProgress get_staking_progress(at)
Get progress on the general Staking pallet system.

Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve a staking progress report. |  |

### Return type

[**crate::models::StakingProgress**](StakingProgress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_staking_summary_by_account_id

> crate::models::AccountStakingInfo get_staking_summary_by_account_id(account_id, at)
Get staking information for a _Stash_ account.

Returns information about a _Stash_ account's staking activity. Replaces `/staking/{address}` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**account_id** | **String** | SS58 address of the account. Must be a _Stash_ account. | [required] |
**at** | Option<**String**> | Block at which to query the staking info for the specified account. |  |

### Return type

[**crate::models::AccountStakingInfo**](AccountStakingInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

