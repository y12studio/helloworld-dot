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
pub struct AccountBalanceInfo {
    #[serde(rename = "at", skip_serializing_if = "Option::is_none")]
    pub at: Option<crate::models::BlockIdentifiers>,
    /// Account nonce.
    #[serde(rename = "nonce", skip_serializing_if = "Option::is_none")]
    pub nonce: Option<String>,
    /// Free balance of the account. Not equivalent to _spendable_ balance. This is the only balance that matters in terms of most operations on tokens.
    #[serde(rename = "free", skip_serializing_if = "Option::is_none")]
    pub free: Option<String>,
    /// Reserved balance of the account.
    #[serde(rename = "reserved", skip_serializing_if = "Option::is_none")]
    pub reserved: Option<String>,
    /// The amount that `free` may not drop below when withdrawing for anything except transaction fee payment.
    #[serde(rename = "miscFrozen", skip_serializing_if = "Option::is_none")]
    pub misc_frozen: Option<String>,
    /// The amount that `free` may not drop below when withdrawing specifically for transaction fee payment.
    #[serde(rename = "feeFrozen", skip_serializing_if = "Option::is_none")]
    pub fee_frozen: Option<String>,
    /// Array of locks on a balance. There can be many of these on an account and they \"overlap\", so the same balance is frozen by multiple locks
    #[serde(rename = "locks", skip_serializing_if = "Option::is_none")]
    pub locks: Option<Vec<crate::models::BalanceLock>>,
}

impl AccountBalanceInfo {
    pub fn new() -> AccountBalanceInfo {
        AccountBalanceInfo {
            at: None,
            nonce: None,
            free: None,
            reserved: None,
            misc_frozen: None,
            fee_frozen: None,
            locks: None,
        }
    }
}

