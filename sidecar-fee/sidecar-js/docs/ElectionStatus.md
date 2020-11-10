# SubstrateApiSidecarV1.ElectionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Object** | Era election status: either &#x60;Close: null&#x60; or &#x60;Open: &lt;BlockNumber&gt;&#x60;. A status of &#x60;Close&#x60; indicates that the submission window for solutions from off-chain Phragmen is not open. A status of &#x60;Open&#x60; indicates that the submission window for off-chain Phragmen solutions has been open since BlockNumber. N.B. when the submission window is open, certain extrinsics are not allowed because they would mutate the state that the off-chain Phragmen calculation relies on for calculating results. | [optional] 
**toggleEstimate** | **String** | Upper bound estimate of the block height at which the &#x60;status&#x60; will switch. | [optional] 


