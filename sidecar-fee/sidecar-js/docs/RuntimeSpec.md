# SubstrateApiSidecarV1.RuntimeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**authoringVersion** | **String** | The version of the authorship interface. An authoring node will not attempt to author blocks unless this is equal to its native runtime. | [optional] 
**chainType** | **String** | Type of the chain. | [optional] 
**implVersion** | **String** | Version of the implementation specification. Non-consensus-breaking optimizations are about the only changes that could be made which would result in only the &#x60;impl_version&#x60; changing. The &#x60;impl_version&#x60; is set to 0 when &#x60;spec_version&#x60; is incremented. | [optional] 
**specName** | **String** | Identifies the different Substrate runtimes. | [optional] 
**specVersion** | **String** | Version of the runtime specification. | [optional] 
**transactionVersion** | **String** | All existing dispatches are fully compatible when this number doesn&#39;t change. This number must change when an existing dispatchable (module ID, dispatch ID) is changed, either through an alteration in its user-level semantics, a parameter added/removed/changed, a dispatchable being removed, a module being removed, or a dispatchable/module changing its index. | [optional] 
**properties** | **Object** | Arbitrary properties defined in the chain spec. | [optional] 



## Enum: ChainTypeEnum


* `Development` (value: `"Development"`)

* `Local` (value: `"Local"`)

* `Live` (value: `"Live"`)




