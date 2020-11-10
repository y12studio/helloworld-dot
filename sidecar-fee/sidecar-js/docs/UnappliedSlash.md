# SubstrateApiSidecarV1.UnappliedSlash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validator** | **String** | Stash account ID of the offending validator. | [optional] 
**own** | **String** | The amount the validator will be slashed. | [optional] 
**others** | **[String]** | Array of tuples(&#x60;[accountId, amount]&#x60;) representing all the stashes of other slashed stakers and the amount they will be slashed. | [optional] 
**reporters** | **[String]** | Array of account IDs of the reporters of the offense. | [optional] 
**payout** | **String** | Amount of bounty payout to reporters. | [optional] 


