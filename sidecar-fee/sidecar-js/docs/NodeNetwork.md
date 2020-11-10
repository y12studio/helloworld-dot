# SubstrateApiSidecarV1.NodeNetwork

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodeRoles** | [**NodeRole**](NodeRole.md) |  | [optional] 
**numPeers** | **String** | Number of peers the node is connected to. | [optional] 
**isSyncing** | **Boolean** | Whether or not the node is syncing. &#x60;False&#x60; indicates that the node is in sync. | [optional] 
**shouldHavePeers** | **Boolean** | Whether or not the node should be connected to peers. Might be false for local chains or when running without discovery. | [optional] 
**localPeerId** | **String** | Local copy of the &#x60;PeerId&#x60;. | [optional] 
**localListenAddresses** | **[String]** | Multiaddresses that the local node is listening on. The addresses include a trailing &#x60;/p2p/&#x60; with the local PeerId, and are thus suitable to be passed to &#x60;system_addReservedPeer&#x60; or as a bootnode address for example. | [optional] 
**peersInfo** | [**[PeerInfo]**](PeerInfo.md) |  | [optional] 


