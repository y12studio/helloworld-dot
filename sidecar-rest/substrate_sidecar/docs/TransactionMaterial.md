# TransactionMaterial

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**genesis_hash** | Option<**String**> | The hash of the chain's genesis block. | [optional]
**chain_name** | Option<**String**> | The chain's name. | [optional]
**spec_name** | Option<**String**> | The chain's spec. | [optional]
**spec_version** | Option<**String**> | The spec version. Always increased in a runtime upgrade. | [optional]
**tx_version** | Option<**String**> | The transaction version. Common `txVersion` numbers indicate that the transaction encoding format and method indices are the same. Needed for decoding in an offline environment. Adding new transactions does not change `txVersion`. | [optional]
**metadata** | Option<**String**> | The chain's metadata in hex format. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


