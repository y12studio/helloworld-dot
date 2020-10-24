# AccountStakingPayoutsErasPayouts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**era** | Option<**String**> | Era this information is associated with. | [optional]
**total_era_reward_points** | Option<**String**> | Total reward points for the era. Equals the sum of reward points for all the validators in the set. | [optional]
**total_era_payout** | Option<**String**> | Total payout for the era. Validators split the payout based on the portion of `totalEraRewardPoints` they have. | [optional]
**payouts** | Option<[**Vec<serde_json::Value>**](serde_json::Value.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


