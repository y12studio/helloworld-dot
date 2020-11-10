# SubstrateApiSidecarV1.RuntimeDispatchInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**weight** | **String** | Extrinsic weight. | [optional] 
**_class** | **String** | Extrinsic class. | [optional] 
**partialFee** | **String** | The _inclusion fee_ of a transaction, i.e. the minimum fee required for a transaction. Includes weight and encoded length fees, but does not have access to any signed extensions, e.g. the &#x60;tip&#x60;. | [optional] 



## Enum: ClassEnum


* `Normal` (value: `"Normal"`)

* `Operational` (value: `"Operational"`)

* `Mandatory` (value: `"Mandatory"`)




