# \RuntimeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**runtime_code_get**](RuntimeApi.md#runtime_code_get) | **get** /runtime/code | Get the runtime wasm blob.
[**runtime_metadata_get**](RuntimeApi.md#runtime_metadata_get) | **get** /runtime/metadata | Get the runtime metadata in decoded, JSON form.
[**runtime_spec_get**](RuntimeApi.md#runtime_spec_get) | **get** /runtime/spec | Get version information of the Substrate runtime.



## runtime_code_get

> crate::models::RuntimeCode runtime_code_get(at)
Get the runtime wasm blob.

Returns the runtime Wasm blob in hex format.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve the runtime wasm blob at. |  |

### Return type

[**crate::models::RuntimeCode**](RuntimeCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## runtime_metadata_get

> serde_json::Value runtime_metadata_get(at)
Get the runtime metadata in decoded, JSON form.

Returns the runtime metadata as a JSON object. Substrate Reference: - FRAME Support: https://crates.parity.io/frame_support/metadata/index.html - Knowledge Base: https://substrate.dev/docs/en/knowledgebase/runtime/metadata

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve the metadata at. |  |

### Return type

[**serde_json::Value**](serde_json::Value.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## runtime_spec_get

> crate::models::RuntimeSpec runtime_spec_get(at)
Get version information of the Substrate runtime.

Returns version information related to the runtime.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve runtime version information at. |  |

### Return type

[**crate::models::RuntimeSpec**](RuntimeSpec.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

