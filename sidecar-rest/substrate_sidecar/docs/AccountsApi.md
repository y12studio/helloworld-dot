# \AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_account_balance_info**](AccountsApi.md#get_account_balance_info) | **get** /accounts/{accountId}/balance-info | Get balance information for an account.
[**get_vesting_summary_by_account_id**](AccountsApi.md#get_vesting_summary_by_account_id) | **get** /accounts/{accountId}/vesting-info | Get vesting information for an account.



## get_account_balance_info

> crate::models::AccountBalanceInfo get_account_balance_info(account_id, at)
Get balance information for an account.

Returns information about an account's balance. Replaces `/balance/{address}` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**account_id** | **String** | SS58 address of the account. | [required] |
**at** | Option<**String**> | Block at which to query balance info for the specified account. |  |

### Return type

[**crate::models::AccountBalanceInfo**](AccountBalanceInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_vesting_summary_by_account_id

> crate::models::AccountVestingInfo get_vesting_summary_by_account_id(account_id, at)
Get vesting information for an account.

Returns the vesting schedule for an account. Replaces `/vesting/{address}` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**account_id** | **String** | SS58 address of the account. | [required] |
**at** | Option<**String**> | Block at which to query the vesting info for the specified account. |  |

### Return type

[**crate::models::AccountVestingInfo**](AccountVestingInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

