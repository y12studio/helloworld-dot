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
pub struct Transaction {
    #[serde(rename = "tx", skip_serializing_if = "Option::is_none")]
    pub tx: Option<String>,
}

impl Transaction {
    pub fn new() -> Transaction {
        Transaction {
            tx: None,
        }
    }
}


