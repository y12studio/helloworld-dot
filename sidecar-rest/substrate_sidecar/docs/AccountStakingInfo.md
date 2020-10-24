# AccountStakingInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**reward_destination** | Option<**String**> | The account to which rewards will be paid. Can be 'Staked' (Stash account, adding to the amount at stake), 'Stash' (Stash address, not adding to the amount at stake), or 'Controller' (Controller address). | [optional]
**controller** | Option<**String**> | Controller address for the given Stash. | [optional]
**num_slashing_spans** | Option<**String**> | Number of slashing spans on Stash account; `null` if provided address is not a Controller. | [optional]
**nominations** | Option<[**crate::models::Nominations**](Nominations.md)> |  | [optional]
**staking_ledger** | Option<[**crate::models::StakingLedger**](StakingLedger.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


