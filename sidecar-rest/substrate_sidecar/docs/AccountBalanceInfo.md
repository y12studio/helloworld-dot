# AccountBalanceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**nonce** | Option<**String**> | Account nonce. | [optional]
**free** | Option<**String**> | Free balance of the account. Not equivalent to _spendable_ balance. This is the only balance that matters in terms of most operations on tokens. | [optional]
**reserved** | Option<**String**> | Reserved balance of the account. | [optional]
**misc_frozen** | Option<**String**> | The amount that `free` may not drop below when withdrawing for anything except transaction fee payment. | [optional]
**fee_frozen** | Option<**String**> | The amount that `free` may not drop below when withdrawing specifically for transaction fee payment. | [optional]
**locks** | Option<[**Vec<crate::models::BalanceLock>**](BalanceLock.md)> | Array of locks on a balance. There can be many of these on an account and they \"overlap\", so the same balance is frozen by multiple locks | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


