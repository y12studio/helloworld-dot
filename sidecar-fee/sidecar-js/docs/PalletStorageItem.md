# SubstrateApiSidecarV1.PalletStorageItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | [**BlockIdentifiers**](BlockIdentifiers.md) |  | [optional] 
**pallet** | **String** | Name of the pallet. | [optional] 
**palletIndex** | **String** | Index of the pallet for looking up storage. | [optional] 
**storageItem** | **String** | Name of the storage item. | [optional] 
**key1** | **String** | Key1 query param. Will not show up in response unless it was passed as part of the URI. | [optional] 
**key2** | **String** | Key2 query param. Will not show up in response if not defined in URI. | [optional] 
**value** | **Object** | Value returned by this storage query. | [optional] 
**metadata** | [**PalletStorageItemMetadata**](PalletStorageItemMetadata.md) |  | [optional] 


