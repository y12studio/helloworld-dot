# SubstrateApiSidecarV1.TransactionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dryrunTransaction**](TransactionApi.md#dryrunTransaction) | **POST** /transaction/dry-run | Dry run an extrinsic.
[**feeEstimateTransaction**](TransactionApi.md#feeEstimateTransaction) | **POST** /transaction/fee-estimate | Receive a fee estimate for a transaction.
[**getTransactionMaterial**](TransactionApi.md#getTransactionMaterial) | **GET** /transaction/material | Get all the network information needed to construct a transaction offline.
[**submitTransaction**](TransactionApi.md#submitTransaction) | **POST** /transaction | Submit a transaction to the node&#39;s transaction pool.



## dryrunTransaction

> TransactionDryRun dryrunTransaction(transaction)

Dry run an extrinsic.

Use the dryrun call to practice submission of a transaction.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.TransactionApi();
let transaction = new SubstrateApiSidecarV1.Transaction(); // Transaction | 
apiInstance.dryrunTransaction(transaction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | [**Transaction**](Transaction.md)|  | 

### Return type

[**TransactionDryRun**](TransactionDryRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## feeEstimateTransaction

> TransactionFeeEstimate feeEstimateTransaction(transaction)

Receive a fee estimate for a transaction.

Send a serialized transaction and receive back a naive fee estimate. Note: &#x60;partialFee&#x60; does not include any tips that you may add to increase a transaction&#39;s priority. See the reference on &#x60;compute_fee&#x60;. Replaces &#x60;/tx/fee-estimate&#x60; from versions &lt; v1.0.0. Substrate Reference: - &#x60;RuntimeDispatchInfo&#x60;: https://crates.parity.io/pallet_transaction_payment_rpc_runtime_api/struct.RuntimeDispatchInfo.html - &#x60;query_info&#x60;: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.query_info - &#x60;compute_fee&#x60;: https://crates.parity.io/pallet_transaction_payment/struct.Module.html#method.compute_fee

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.TransactionApi();
let transaction = new SubstrateApiSidecarV1.Transaction(); // Transaction | 
apiInstance.feeEstimateTransaction(transaction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | [**Transaction**](Transaction.md)|  | 

### Return type

[**TransactionFeeEstimate**](TransactionFeeEstimate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTransactionMaterial

> TransactionMaterial getTransactionMaterial(opts)

Get all the network information needed to construct a transaction offline.

Returns the material that is universal to constructing any signed transaction offline. Replaces &#x60;/tx/artifacts&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.TransactionApi();
let opts = {
  'at': "at_example", // String | Block at which to retrieve the transaction construction material.
  'noMeta': false // Boolean | 
};
apiInstance.getTransactionMaterial(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve the transaction construction material. | [optional] 
 **noMeta** | **Boolean**|  | [optional] [default to false]

### Return type

[**TransactionMaterial**](TransactionMaterial.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitTransaction

> TransactionSuccess submitTransaction(transaction)

Submit a transaction to the node&#39;s transaction pool.

Accepts a valid signed extrinsic. Replaces &#x60;/tx&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.TransactionApi();
let transaction = new SubstrateApiSidecarV1.Transaction(); // Transaction | 
apiInstance.submitTransaction(transaction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction** | [**Transaction**](Transaction.md)|  | 

### Return type

[**TransactionSuccess**](TransactionSuccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

