# ElectionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | Option<[**serde_json::Value**](.md)> | Era election status: either `Close: null` or `Open: <BlockNumber>`. A status of `Close` indicates that the submission window for solutions from off-chain Phragmen is not open. A status of `Open` indicates that the submission window for off-chain Phragmen solutions has been open since BlockNumber. N.B. when the submission window is open, certain extrinsics are not allowed because they would mutate the state that the off-chain Phragmen calculation relies on for calculating results. | [optional]
**toggle_estimate** | Option<**String**> | Upper bound estimate of the block height at which the `status` will switch. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


