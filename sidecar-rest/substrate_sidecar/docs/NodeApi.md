# \NodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_node_networking**](NodeApi.md#get_node_networking) | **get** /node/network | Get information about the Substrate node's activity in the peer-to-peer network.
[**get_node_transaction_pool**](NodeApi.md#get_node_transaction_pool) | **get** /node/transaction-pool | Get pending extrinsics from the Substrate node.
[**get_node_version**](NodeApi.md#get_node_version) | **get** /node/version | Get information about the Substrates node's implementation and versioning.



## get_node_networking

> crate::models::NodeNetwork get_node_networking()
Get information about the Substrate node's activity in the peer-to-peer network.

Returns network related information of the node.

### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::NodeNetwork**](NodeNetwork.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_node_transaction_pool

> crate::models::TransactionPool get_node_transaction_pool()
Get pending extrinsics from the Substrate node.

Returns the extrinsics that the node knows of that have not been included in a block.

### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::TransactionPool**](TransactionPool.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_node_version

> crate::models::NodeVersion get_node_version()
Get information about the Substrates node's implementation and versioning.

Returns versioning information of the node.

### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::NodeVersion**](NodeVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

