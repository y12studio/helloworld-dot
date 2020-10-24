# UnappliedSlash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validator** | Option<**String**> | Stash account ID of the offending validator. | [optional]
**own** | Option<**String**> | The amount the validator will be slashed. | [optional]
**others** | Option<**Vec<String>**> | Array of tuples(`[accountId, amount]`) representing all the stashes of other slashed stakers and the amount they will be slashed. | [optional]
**reporters** | Option<**Vec<String>**> | Array of account IDs of the reporters of the offense. | [optional]
**payout** | Option<**String**> | Amount of bounty payout to reporters. | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


