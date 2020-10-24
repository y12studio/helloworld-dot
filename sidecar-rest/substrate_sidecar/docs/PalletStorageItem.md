# PalletStorageItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**at** | Option<[**crate::models::BlockIdentifiers**](BlockIdentifiers.md)> |  | [optional]
**pallet** | Option<**String**> | Name of the pallet. | [optional]
**pallet_index** | Option<**String**> | Index of the pallet for looking up storage. | [optional]
**storage_item** | Option<**String**> | Name of the storage item. | [optional]
**key1** | Option<**String**> | Key1 query param. Will not show up in response unless it was passed as part of the URI. | [optional]
**key2** | Option<**String**> | Key2 query param. Will not show up in response if not defined in URI. | [optional]
**value** | Option<[**serde_json::Value**](.md)> | Value returned by this storage query. | [optional]
**metadata** | Option<[**crate::models::PalletStorageItemMetadata**](PalletStorageItemMetadata.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


