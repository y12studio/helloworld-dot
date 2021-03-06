/*
 * Substrate API Sidecar v1.
 *
 * Substrate API Sidecar is a REST service that makes it easy to interact with blockchain nodes built using Substrate's FRAME framework.
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct AccountStakingPayoutsErasPayouts {
    /// Era this information is associated with.
    #[serde(rename = "era", skip_serializing_if = "Option::is_none")]
    pub era: Option<String>,
    /// Total reward points for the era. Equals the sum of reward points for all the validators in the set.
    #[serde(rename = "totalEraRewardPoints", skip_serializing_if = "Option::is_none")]
    pub total_era_reward_points: Option<String>,
    /// Total payout for the era. Validators split the payout based on the portion of `totalEraRewardPoints` they have.
    #[serde(rename = "totalEraPayout", skip_serializing_if = "Option::is_none")]
    pub total_era_payout: Option<String>,
    #[serde(rename = "payouts", skip_serializing_if = "Option::is_none")]
    pub payouts: Option<Vec<serde_json::Value>>,
}

impl AccountStakingPayoutsErasPayouts {
    pub fn new() -> AccountStakingPayoutsErasPayouts {
        AccountStakingPayoutsErasPayouts {
            era: None,
            total_era_reward_points: None,
            total_era_payout: None,
            payouts: None,
        }
    }
}


