# SubstrateApiSidecarV1.Block

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hash** | **String** | The block&#39;s hash. | [optional] 
**height** | **String** | The block&#39;s height. | [optional] 
**parentHash** | **String** | The hash of the parent block. | [optional] 
**stateRoot** | **String** | The state root after executing this block. | [optional] 
**extrinsicRoot** | **String** | The Merkle root of the extrinsics. | [optional] 
**authorId** | **String** | The account ID of the block author (may be undefined for some chains). | [optional] 
**logs** | [**[DigestItem]**](DigestItem.md) | Array of &#x60;DigestItem&#x60;s associated with the block. | [optional] 
**onInitialize** | [**BlockInitialize**](BlockInitialize.md) |  | [optional] 
**extrinsics** | [**[Extrinsic]**](Extrinsic.md) | Array of extrinsics (inherents and transactions) within the block. | [optional] 
**onFinalize** | [**BlockFinalize**](BlockFinalize.md) |  | [optional] 


