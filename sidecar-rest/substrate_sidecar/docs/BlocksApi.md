# \BlocksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_block_by_id**](BlocksApi.md#get_block_by_id) | **get** /blocks/{blockId} | Get a block by its height or hash.
[**get_head_block**](BlocksApi.md#get_head_block) | **get** /blocks/head | Get the most recently finalized block.



## get_block_by_id

> crate::models::Block get_block_by_id(block_id, event_docs, extrinsic_docs)
Get a block by its height or hash.

Returns a single block. BlockId can either be a block hash or a block height. Replaces `/block/{number}` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**block_id** | **String** | Block identifier, as the block height or block hash. | [required] |
**event_docs** | Option<**bool**> | When set to `true`, every event will have an extra `docs` property with a string of the events documentation. |  |[default to false]
**extrinsic_docs** | Option<**bool**> | When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. |  |[default to false]

### Return type

[**crate::models::Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_head_block

> crate::models::Block get_head_block(finalized, event_docs, extrinsic_docs)
Get the most recently finalized block.

Returns the most recently finalized block. Replaces `/block` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**finalized** | Option<**bool**> | Boolean representing whether or not to get the finalized head. If it is not set the value defaults to true. When set to false it will attempt to get the newest known block, which may not be finalized. |  |[default to true]
**event_docs** | Option<**bool**> | When set to `true`, every event will have an extra `docs` property with a string of the events documentation. |  |[default to false]
**extrinsic_docs** | Option<**bool**> | When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation. |  |[default to false]

### Return type

[**crate::models::Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

