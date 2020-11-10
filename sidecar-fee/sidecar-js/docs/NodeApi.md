# SubstrateApiSidecarV1.NodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodeNetworking**](NodeApi.md#getNodeNetworking) | **GET** /node/network | Get information about the Substrate node&#39;s activity in the peer-to-peer network.
[**getNodeTransactionPool**](NodeApi.md#getNodeTransactionPool) | **GET** /node/transaction-pool | Get pending extrinsics from the Substrate node.
[**getNodeVersion**](NodeApi.md#getNodeVersion) | **GET** /node/version | Get information about the Substrates node&#39;s implementation and versioning.



## getNodeNetworking

> NodeNetwork getNodeNetworking()

Get information about the Substrate node&#39;s activity in the peer-to-peer network.

Returns network related information of the node.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.NodeApi();
apiInstance.getNodeNetworking().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NodeNetwork**](NodeNetwork.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeTransactionPool

> TransactionPool getNodeTransactionPool()

Get pending extrinsics from the Substrate node.

Returns the extrinsics that the node knows of that have not been included in a block.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.NodeApi();
apiInstance.getNodeTransactionPool().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TransactionPool**](TransactionPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeVersion

> NodeVersion getNodeVersion()

Get information about the Substrates node&#39;s implementation and versioning.

Returns versioning information of the node.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.NodeApi();
apiInstance.getNodeVersion().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NodeVersion**](NodeVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

