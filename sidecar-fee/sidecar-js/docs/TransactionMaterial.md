# SubstrateApiSidecarV1.TransactionMaterial

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**genesisHash** | **String** | The hash of the chain&#39;s genesis block. | [optional] 
**chainName** | **String** | The chain&#39;s name. | [optional] 
**specName** | **String** | The chain&#39;s spec. | [optional] 
**specVersion** | **String** | The spec version. Always increased in a runtime upgrade. | [optional] 
**txVersion** | **String** | The transaction version. Common &#x60;txVersion&#x60; numbers indicate that the transaction encoding format and method indices are the same. Needed for decoding in an offline environment. Adding new transactions does not change &#x60;txVersion&#x60;. | [optional] 
**metadata** | **String** | The chain&#39;s metadata in hex format. | [optional] 


