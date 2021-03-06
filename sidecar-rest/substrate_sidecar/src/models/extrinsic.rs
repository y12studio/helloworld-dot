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
pub struct Extrinsic {
    #[serde(rename = "method", skip_serializing_if = "Option::is_none")]
    pub method: Option<crate::models::ExtrinsicMethod>,
    #[serde(rename = "signature", skip_serializing_if = "Option::is_none")]
    pub signature: Option<crate::models::Signature>,
    /// Account nonce, if applicable.
    #[serde(rename = "nonce", skip_serializing_if = "Option::is_none")]
    pub nonce: Option<String>,
    /// Object of arguments keyed by parameter name.
    #[serde(rename = "args", skip_serializing_if = "Option::is_none")]
    pub args: Option<serde_json::Value>,
    /// Any tip added to the transaction.
    #[serde(rename = "tip", skip_serializing_if = "Option::is_none")]
    pub tip: Option<String>,
    /// The transaction's hash.
    #[serde(rename = "hash", skip_serializing_if = "Option::is_none")]
    pub hash: Option<String>,
    #[serde(rename = "info", skip_serializing_if = "Option::is_none")]
    pub info: Option<crate::models::RuntimeDispatchInfo>,
    /// An array of `SanitizedEvent`s that occurred during extrinsic execution.
    #[serde(rename = "events", skip_serializing_if = "Option::is_none")]
    pub events: Option<Vec<crate::models::SanitizedEvent>>,
    /// Whether or not the extrinsic succeeded.
    #[serde(rename = "success", skip_serializing_if = "Option::is_none")]
    pub success: Option<bool>,
    /// Whether the extrinsic requires a fee. Careful! This field relates to whether or not the extrinsic requires a fee if called as a transaction. Block authors could insert the extrinsic as an inherent in the block and not pay a fee. Always check that `paysFee` is `true` and that the extrinsic is signed when reconciling old blocks.
    #[serde(rename = "paysFee", skip_serializing_if = "Option::is_none")]
    pub pays_fee: Option<bool>,
}

impl Extrinsic {
    pub fn new() -> Extrinsic {
        Extrinsic {
            method: None,
            signature: None,
            nonce: None,
            args: None,
            tip: None,
            hash: None,
            info: None,
            events: None,
            success: None,
            pays_fee: None,
        }
    }
}


