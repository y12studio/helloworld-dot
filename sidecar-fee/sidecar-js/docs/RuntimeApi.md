# SubstrateApiSidecarV1.RuntimeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runtimeCodeGet**](RuntimeApi.md#runtimeCodeGet) | **GET** /runtime/code | Get the runtime wasm blob.
[**runtimeMetadataGet**](RuntimeApi.md#runtimeMetadataGet) | **GET** /runtime/metadata | Get the runtime metadata in decoded, JSON form.
[**runtimeSpecGet**](RuntimeApi.md#runtimeSpecGet) | **GET** /runtime/spec | Get version information of the Substrate runtime.



## runtimeCodeGet

> RuntimeCode runtimeCodeGet(opts)

Get the runtime wasm blob.

Returns the runtime Wasm blob in hex format.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.RuntimeApi();
let opts = {
  'at': "at_example" // String | Block at which to retrieve the runtime wasm blob at.
};
apiInstance.runtimeCodeGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve the runtime wasm blob at. | [optional] 

### Return type

[**RuntimeCode**](RuntimeCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runtimeMetadataGet

> Object runtimeMetadataGet(opts)

Get the runtime metadata in decoded, JSON form.

Returns the runtime metadata as a JSON object. Substrate Reference: - FRAME Support: https://crates.parity.io/frame_support/metadata/index.html - Knowledge Base: https://substrate.dev/docs/en/knowledgebase/runtime/metadata

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.RuntimeApi();
let opts = {
  'at': "at_example" // String | Block at which to retrieve the metadata at.
};
apiInstance.runtimeMetadataGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve the metadata at. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runtimeSpecGet

> RuntimeSpec runtimeSpecGet(opts)

Get version information of the Substrate runtime.

Returns version information related to the runtime.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.RuntimeApi();
let opts = {
  'at': "at_example" // String | Block at which to retrieve runtime version information at.
};
apiInstance.runtimeSpecGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve runtime version information at. | [optional] 

### Return type

[**RuntimeSpec**](RuntimeSpec.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

