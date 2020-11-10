# SubstrateApiSidecarV1.Extrinsic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | [**ExtrinsicMethod**](ExtrinsicMethod.md) |  | [optional] 
**signature** | [**Signature**](Signature.md) |  | [optional] 
**nonce** | **String** | Account nonce, if applicable. | [optional] 
**args** | **Object** | Object of arguments keyed by parameter name. | [optional] 
**tip** | **String** | Any tip added to the transaction. | [optional] 
**hash** | **String** | The transaction&#39;s hash. | [optional] 
**info** | [**RuntimeDispatchInfo**](RuntimeDispatchInfo.md) |  | [optional] 
**events** | [**[SanitizedEvent]**](SanitizedEvent.md) | An array of &#x60;SanitizedEvent&#x60;s that occurred during extrinsic execution. | [optional] 
**success** | **Boolean** | Whether or not the extrinsic succeeded. | [optional] 
**paysFee** | **Boolean** | Whether the extrinsic requires a fee. Careful! This field relates to whether or not the extrinsic requires a fee if called as a transaction. Block authors could insert the extrinsic as an inherent in the block and not pay a fee. Always check that &#x60;paysFee&#x60; is &#x60;true&#x60; and that the extrinsic is signed when reconciling old blocks. | [optional] 


