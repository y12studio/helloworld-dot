# SubstrateApiSidecarV1.AccountStakingInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**rewardDestination** | **String** | The account to which rewards will be paid. Can be &#39;Staked&#39; (Stash account, adding to the amount at stake), &#39;Stash&#39; (Stash address, not adding to the amount at stake), or &#39;Controller&#39; (Controller address). | [optional] 
**controller** | **String** | Controller address for the given Stash. | [optional] 
**numSlashingSpans** | **String** | Number of slashing spans on Stash account; &#x60;null&#x60; if provided address is not a Controller. | [optional] 
**nominations** | [**Nominations**](Nominations.md) |  | [optional] 
**stakingLedger** | [**StakingLedger**](StakingLedger.md) |  | [optional] 



## Enum: RewardDestinationEnum


* `Staked` (value: `"Staked"`)

* `Stash` (value: `"Stash"`)

* `Controller` (value: `"Controller"`)




