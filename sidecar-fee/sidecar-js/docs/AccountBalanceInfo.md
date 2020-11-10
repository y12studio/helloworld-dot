# SubstrateApiSidecarV1.AccountBalanceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**nonce** | **String** | Account nonce. | [optional] 
**free** | **String** | Free balance of the account. Not equivalent to _spendable_ balance. This is the only balance that matters in terms of most operations on tokens. | [optional] 
**reserved** | **String** | Reserved balance of the account. | [optional] 
**miscFrozen** | **String** | The amount that &#x60;free&#x60; may not drop below when withdrawing for anything except transaction fee payment. | [optional] 
**feeFrozen** | **String** | The amount that &#x60;free&#x60; may not drop below when withdrawing specifically for transaction fee payment. | [optional] 
**locks** | [**[BalanceLock]**](BalanceLock.md) | Array of locks on a balance. There can be many of these on an account and they \&quot;overlap\&quot;, so the same balance is frozen by multiple locks | [optional] 


