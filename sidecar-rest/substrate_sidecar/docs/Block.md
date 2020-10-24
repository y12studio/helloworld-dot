# Block

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | Option<**String**> | The block's hash. | [optional]
**height** | Option<**String**> | The block's height. | [optional]
**parent_hash** | Option<**String**> | The hash of the parent block. | [optional]
**state_root** | Option<**String**> | The state root after executing this block. | [optional]
**extrinsic_root** | Option<**String**> | The Merkle root of the extrinsics. | [optional]
**author_id** | Option<**String**> | The account ID of the block author (may be undefined for some chains). | [optional]
**logs** | Option<[**Vec<crate::models::DigestItem>**](DigestItem.md)> | Array of `DigestItem`s associated with the block. | [optional]
**on_initialize** | Option<[**crate::models::BlockInitialize**](BlockInitialize.md)> |  | [optional]
**extrinsics** | Option<[**Vec<crate::models::Extrinsic>**](Extrinsic.md)> | Array of extrinsics (inherents and transactions) within the block. | [optional]
**on_finalize** | Option<[**crate::models::BlockFinalize**](BlockFinalize.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


