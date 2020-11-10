# SubstrateApiSidecarV1.BlocksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockById**](BlocksApi.md#getBlockById) | **GET** /blocks/{blockId} | Get a block by its height or hash.
[**getHeadBlock**](BlocksApi.md#getHeadBlock) | **GET** /blocks/head | Get the most recently finalized block.



## getBlockById

> Block getBlockById(blockId, opts)

Get a block by its height or hash.

Returns a single block. BlockId can either be a block hash or a block height. Replaces &#x60;/block/{number}&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.BlocksApi();
let blockId = "blockId_example"; // String | Block identifier, as the block height or block hash.
let opts = {
  'eventDocs': false, // Boolean | When set to `true`, every event will have an extra `docs` property with a string of the events documentation.
  'extrinsicDocs': false // Boolean | When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation.
};
apiInstance.getBlockById(blockId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockId** | **String**| Block identifier, as the block height or block hash. | 
 **eventDocs** | **Boolean**| When set to &#x60;true&#x60;, every event will have an extra &#x60;docs&#x60; property with a string of the events documentation. | [optional] [default to false]
 **extrinsicDocs** | **Boolean**| When set to &#x60;true&#x60;, every extrinsic will have an extra &#x60;docs&#x60; property with a string of the extrinsics documentation. | [optional] [default to false]

### Return type

[**Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getHeadBlock

> Block getHeadBlock(opts)

Get the most recently finalized block.

Returns the most recently finalized block. Replaces &#x60;/block&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.BlocksApi();
let opts = {
  'finalized': true, // Boolean | Boolean representing whether or not to get the finalized head. If it is not set the value defaults to true. When set to false it will attempt to get the newest known block, which may not be finalized.
  'eventDocs': false, // Boolean | When set to `true`, every event will have an extra `docs` property with a string of the events documentation.
  'extrinsicDocs': false // Boolean | When set to `true`, every extrinsic will have an extra `docs` property with a string of the extrinsics documentation.
};
apiInstance.getHeadBlock(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finalized** | **Boolean**| Boolean representing whether or not to get the finalized head. If it is not set the value defaults to true. When set to false it will attempt to get the newest known block, which may not be finalized. | [optional] [default to true]
 **eventDocs** | **Boolean**| When set to &#x60;true&#x60;, every event will have an extra &#x60;docs&#x60; property with a string of the events documentation. | [optional] [default to false]
 **extrinsicDocs** | **Boolean**| When set to &#x60;true&#x60;, every extrinsic will have an extra &#x60;docs&#x60; property with a string of the extrinsics documentation. | [optional] [default to false]

### Return type

[**Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

