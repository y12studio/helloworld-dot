# NodeNetwork

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_roles** | Option<[**crate::models::NodeRole**](NodeRole.md)> |  | [optional]
**num_peers** | Option<**String**> | Number of peers the node is connected to. | [optional]
**is_syncing** | Option<**bool**> | Whether or not the node is syncing. `False` indicates that the node is in sync. | [optional]
**should_have_peers** | Option<**bool**> | Whether or not the node should be connected to peers. Might be false for local chains or when running without discovery. | [optional]
**local_peer_id** | Option<**String**> | Local copy of the `PeerId`. | [optional]
**local_listen_addresses** | Option<**Vec<String>**> | Multiaddresses that the local node is listening on. The addresses include a trailing `/p2p/` with the local PeerId, and are thus suitable to be passed to `system_addReservedPeer` or as a bootnode address for example. | [optional]
**peers_info** | Option<[**Vec<crate::models::PeerInfo>**](PeerInfo.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


