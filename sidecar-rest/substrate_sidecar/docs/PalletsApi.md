# \PalletsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_staking_progress**](PalletsApi.md#get_staking_progress) | **get** /pallets/staking/progress | Get progress on the general Staking pallet system.
[**pallets_pallet_id_storage_storage_item_id_get**](PalletsApi.md#pallets_pallet_id_storage_storage_item_id_get) | **get** /pallets/{palletId}/storage/{storageItemId} | Get the value of a storage item.



## get_staking_progress

> crate::models::StakingProgress get_staking_progress(at)
Get progress on the general Staking pallet system.

Returns information on the progress of key components of the staking system and estimates of future points of interest. Replaces `/staking-info` from versions < v1.0.0.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**at** | Option<**String**> | Block at which to retrieve a staking progress report. |  |

### Return type

[**crate::models::StakingProgress**](StakingProgress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## pallets_pallet_id_storage_storage_item_id_get

> crate::models::PalletStorageItem pallets_pallet_id_storage_storage_item_id_get(pallet_id, storage_item_id, key1, key2, at, metadata)
Get the value of a storage item.

Returns the value stored under the storageItemId. If it is a map, query param key1 is required. If the storage item is double map query params key1 and key2 are required.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pallet_id** | **String** | Name or index of the pallet to query the storage of. | [required] |
**storage_item_id** | **String** | Id of the storage item to query for. | [required] |
**key1** | Option<**String**> | Key for a map, or first key for a double map. Required for querying a map. |  |
**key2** | Option<**String**> | Second key for a double map. Required for querying a double map. |  |
**at** | Option<**String**> | Block at which to query the storage item at. |  |
**metadata** | Option<**bool**> | Include the storage items metadata (including documentation) if set to true. |  |[default to false]

### Return type

[**crate::models::PalletStorageItem**](PalletStorageItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

