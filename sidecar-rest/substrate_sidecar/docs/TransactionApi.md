# \TransactionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dryrun_transaction**](TransactionApi.md#dryrun_transaction) | **post** /transaction/dry-run | Dry run an extrinsic.
[**fee_estimate_transaction**](TransactionApi.md#fee_estimate_transaction) | **post** /transaction/fee-estimate | Receive a fee estimate for a transaction.
[**get_transaction_material**](TransactionApi.md#get_transaction_material) | **get** /transaction/material | Get all the network information needed to construct a transaction offline.
[**submit_transaction**](TransactionApi.md#submit_transaction) | **post** /transaction | Submit a transaction to the node's transaction pool.



## dryrun_transaction

> crate::models::TransactionDryRun dryrun_transaction(transaction)
Dry run an extrinsic.

Use the dryrun call to practice submission of a transaction.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transaction** | [**Transaction**](Transaction.md) |  | [required] |

### Return type

[**crate::models::TransactionDryRun**](TransactionDryRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## fee_estimate_transaction

> crate::models::TransactionFeeEstimate fee_estimate_transaction(transaction)
Receive a fee estimate for a transaction.

Send a serialized transaction and receive back a naive fee estimate. Note: `partialFee` does not include any tips that you may add to increase a transaction's priority. See the reference on `compute_fee`. Replaces `/tx/fee-estimate` from versions < v1.0.0. Substrate Reference: - `RuntimeDispatchInfo`: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - `query_info`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - `compute_fee`: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transaction** | [**Transaction**](Transaction.md) |  | [required] |

### Return type

[**crate::models::TransactionFeeEstimate**](TransactionFeeEstimate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_transaction_material

> crate::models::TransactionMaterial get_transaction_material(at, no_meta)
Get all the network information needed to construct a transaction offline.

Returns the material that is universal to constructing any signed transaction offline. Replaces `/tx/artifacts` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve the transaction construction material. |  |
**no_meta** | Option<**bool**> |  |  |[default to false]

### Return type

[**crate::models::TransactionMaterial**](TransactionMaterial.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## submit_transaction

> crate::models::TransactionSuccess submit_transaction(transaction)
Submit a transaction to the node's transaction pool.

Accepts a valid signed extrinsic. Replaces `/tx` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**transaction** | [**Transaction**](Transaction.md) |  | [required] |

### Return type

[**crate::models::TransactionSuccess**](TransactionSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

