# SubstrateApiSidecarV1.StakingLedger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stash** | **String** | The _Stash_ account whose balance is actually locked and at stake. | [optional] 
**total** | **String** | The total amount of the _Stash_&#39;s balance that we are currently accounting for. Simply &#x60;active + unlocking&#x60;. | [optional] 
**active** | **String** | The total amount of the _Stash_&#39;s balance that will be at stake in any forthcoming eras. | [optional] 
**unlocking** | **String** | Any balance that is becoming free, which may eventually be transferred out of the _Stash_ (assuming it doesn&#39;t get slashed first). Represented as an array of objects, each with an &#x60;era&#x60; at which &#x60;value&#x60; will be unlocked. | [optional] 
**claimedRewards** | **[String]** | Array of eras for which the stakers behind a validator have claimed rewards. Only updated for _validators._ | [optional] 


