# RuntimeSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**authoring_version** | Option<**String**> | The version of the authorship interface. An authoring node will not attempt to author blocks unless this is equal to its native runtime. | [optional]
**chain_type** | Option<**String**> | Type of the chain. | [optional]
**impl_version** | Option<**String**> | Version of the implementation specification. Non-consensus-breaking optimizations are about the only changes that could be made which would result in only the `impl_version` changing. The `impl_version` is set to 0 when `spec_version` is incremented. | [optional]
**spec_name** | Option<**String**> | Identifies the different Substrate runtimes. | [optional]
**spec_version** | Option<**String**> | Version of the runtime specification. | [optional]
**transaction_version** | Option<**String**> | All existing dispatches are fully compatible when this number doesn't change. This number must change when an existing dispatchable (module ID, dispatch ID) is changed, either through an alteration in its user-level semantics, a parameter added/removed/changed, a dispatchable being removed, a module being removed, or a dispatchable/module changing its index. | [optional]
**properties** | Option<[**serde_json::Value**](.md)> | Arbitrary properties defined in the chain spec. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


