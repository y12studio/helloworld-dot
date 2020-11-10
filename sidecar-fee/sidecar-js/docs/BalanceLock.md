# SubstrateApiSidecarV1.BalanceLock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An identifier for this lock. Only one lock may be in existence for each identifier. | [optional] 
**amount** | **String** | The amount below which the free balance may not drop with this lock in effect. | [optional] 
**reasons** | **String** | Reasons for withdrawing balance. | [optional] 



## Enum: ReasonsEnum


* `Fee &#x3D; 0` (value: `"Fee = 0"`)

* `Misc &#x3D; 1` (value: `"Misc = 1"`)

* `All &#x3D; 2` (value: `"All = 2"`)




