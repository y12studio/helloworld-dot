# Extrinsic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | Option<[**crate::models::ExtrinsicMethod**](ExtrinsicMethod.md)> |  | [optional]
**signature** | Option<[**crate::models::Signature**](Signature.md)> |  | [optional]
**nonce** | Option<**String**> | Account nonce, if applicable. | [optional]
**args** | Option<[**serde_json::Value**](.md)> | Object of arguments keyed by parameter name. | [optional]
**tip** | Option<**String**> | Any tip added to the transaction. | [optional]
**hash** | Option<**String**> | The transaction's hash. | [optional]
**info** | Option<[**crate::models::RuntimeDispatchInfo**](RuntimeDispatchInfo.md)> |  | [optional]
**events** | Option<[**Vec<crate::models::SanitizedEvent>**](SanitizedEvent.md)> | An array of `SanitizedEvent`s that occurred during extrinsic execution. | [optional]
**success** | Option<**bool**> | Whether or not the extrinsic succeeded. | [optional]
**pays_fee** | Option<**bool**> | Whether the extrinsic requires a fee. Careful! This field relates to whether or not the extrinsic requires a fee if called as a transaction. Block authors could insert the extrinsic as an inherent in the block and not pay a fee. Always check that `paysFee` is `true` and that the extrinsic is signed when reconciling old blocks. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


