# StakingProgress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**active_era** | Option<**String**> | `EraIndex` of the era being rewarded.  | [optional]
**force_era** | Option<**String**> | Current status of era forcing. | [optional]
**next_active_era_estimate** | Option<**String**> | Upper bound estimate of the block height at which the next active era will start. Not included in response when `forceEra.isForceNone`. | [optional]
**next_session_estimate** | Option<**String**> | Upper bound estimate of the block height at which the next session will start. | [optional]
**unapplied_slashes** | Option<[**Vec<crate::models::UnappliedSlash>**](UnappliedSlash.md)> | Array of upcoming `UnappliedSlash` indexed by era. | [optional]
**election_status** | Option<[**crate::models::ElectionStatus**](ElectionStatus.md)> |  | [optional]
**ideal_validator_count** | Option<**String**> | Upper bound of validator set size; considered the ideal size. Not included in response when `forceEra.isForceNone`. | [optional]
**validator_set** | Option<**Vec<String>**> | Stash account IDs of the validators for the current session. Not included in response when `forceEra.isForceNone`. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


