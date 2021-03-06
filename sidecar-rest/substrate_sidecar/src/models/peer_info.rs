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
pub struct PeerInfo {
    /// Peer ID.
    #[serde(rename = "peerId", skip_serializing_if = "Option::is_none")]
    pub peer_id: Option<String>,
    /// Roles the peer is running
    #[serde(rename = "roles", skip_serializing_if = "Option::is_none")]
    pub roles: Option<String>,
    /// Peer's protocol version.
    #[serde(rename = "protocolVersion", skip_serializing_if = "Option::is_none")]
    pub protocol_version: Option<String>,
    /// Hash of the best block on the peer's canon chain.
    #[serde(rename = "bestHash", skip_serializing_if = "Option::is_none")]
    pub best_hash: Option<String>,
    /// Height of the best block on the peer's canon chain.
    #[serde(rename = "bestNumber", skip_serializing_if = "Option::is_none")]
    pub best_number: Option<String>,
}

impl PeerInfo {
    pub fn new() -> PeerInfo {
        PeerInfo {
            peer_id: None,
            roles: None,
            protocol_version: None,
            best_hash: None,
            best_number: None,
        }
    }
}


