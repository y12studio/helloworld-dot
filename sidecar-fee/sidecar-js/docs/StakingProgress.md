# SubstrateApiSidecarV1.StakingProgress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**activeEra** | **String** | &#x60;EraIndex&#x60; of the era being rewarded.  | [optional] 
**forceEra** | **String** | Current status of era forcing. | [optional] 
**nextActiveEraEstimate** | **String** | Upper bound estimate of the block height at which the next active era will start. Not included in response when &#x60;forceEra.isForceNone&#x60;. | [optional] 
**nextSessionEstimate** | **String** | Upper bound estimate of the block height at which the next session will start. | [optional] 
**unappliedSlashes** | [**[UnappliedSlash]**](UnappliedSlash.md) | Array of upcoming &#x60;UnappliedSlash&#x60; indexed by era. | [optional] 
**electionStatus** | [**ElectionStatus**](ElectionStatus.md) |  | [optional] 
**idealValidatorCount** | **String** | Upper bound of validator set size; considered the ideal size. Not included in response when &#x60;forceEra.isForceNone&#x60;. | [optional] 
**validatorSet** | **[String]** | Stash account IDs of the validators for the current session. Not included in response when &#x60;forceEra.isForceNone&#x60;. | [optional] 



## Enum: ForceEraEnum


* `ForceNone` (value: `"ForceNone"`)

* `NotForcing` (value: `"NotForcing"`)

* `ForceAlways` (value: `"ForceAlways"`)

* `ForceNew` (value: `"ForceNew"`)




