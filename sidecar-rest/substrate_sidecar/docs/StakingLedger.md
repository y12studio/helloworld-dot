# StakingLedger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stash** | Option<**String**> | The _Stash_ account whose balance is actually locked and at stake. | [optional]
**total** | Option<**String**> | The total amount of the _Stash_'s balance that we are currently accounting for. Simply `active + unlocking`. | [optional]
**active** | Option<**String**> | The total amount of the _Stash_'s balance that will be at stake in any forthcoming eras. | [optional]
**unlocking** | Option<**String**> | Any balance that is becoming free, which may eventually be transferred out of the _Stash_ (assuming it doesn't get slashed first). Represented as an array of objects, each with an `era` at which `value` will be unlocked. | [optional]
**claimed_rewards** | Option<**Vec<String>**> | Array of eras for which the stakers behind a validator have claimed rewards. Only updated for _validators._ | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


