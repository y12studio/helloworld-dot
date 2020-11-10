# SubstrateApiSidecarV1.PalletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStakingProgress**](PalletsApi.md#getStakingProgress) | **GET** /pallets/staking/progress | Get progress on the general Staking pallet system.
[**palletsPalletIdStorageStorageItemIdGet**](PalletsApi.md#palletsPalletIdStorageStorageItemIdGet) | **GET** /pallets/{palletId}/storage/{storageItemId} | Get the value of a storage item.



## getStakingProgress

> StakingProgress getStakingProgress(opts)

Get progress on the general Staking pallet system.

Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces &#x60;/staking-info&#x60; from versions &lt; v1.0.0.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.PalletsApi();
let opts = {
  'at': "at_example" // String | Block at which to retrieve a staking progress report.
};
apiInstance.getStakingProgress(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **at** | **String**| Block at which to retrieve a staking progress report. | [optional] 

### Return type

[**StakingProgress**](StakingProgress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## palletsPalletIdStorageStorageItemIdGet

> PalletStorageItem palletsPalletIdStorageStorageItemIdGet(palletId, storageItemId, opts)

Get the value of a storage item.

Returns the value stored under the storageItemId. If it is a map, query param key1 is required. If the storage item is double map query params key1 and key2 are required.

### Example

```javascript
import SubstrateApiSidecarV1 from 'substrate_api_sidecar_v1_';

let apiInstance = new SubstrateApiSidecarV1.PalletsApi();
let palletId = "palletId_example"; // String | Name or index of the pallet to query the storage of.
let storageItemId = "storageItemId_example"; // String | Id of the storage item to query for.
let opts = {
  'key1': "key1_example", // String | Key for a map, or first key for a double map. Required for querying a map.
  'key2': "key2_example", // String | Second key for a double map. Required for querying a double map.
  'at': "at_example", // String | Block at which to query the storage item at.
  'metadata': false // Boolean | Include the storage items metadata (including documentation) if set to true.
};
apiInstance.palletsPalletIdStorageStorageItemIdGet(palletId, storageItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **palletId** | **String**| Name or index of the pallet to query the storage of. | 
 **storageItemId** | **String**| Id of the storage item to query for. | 
 **key1** | **String**| Key for a map, or first key for a double map. Required for querying a map. | [optional] 
 **key2** | **String**| Second key for a double map. Required for querying a double map. | [optional] 
 **at** | **String**| Block at which to query the storage item at. | [optional] 
 **metadata** | **Boolean**| Include the storage items metadata (including documentation) if set to true. | [optional] [default to false]

### Return type

[**PalletStorageItem**](PalletStorageItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

