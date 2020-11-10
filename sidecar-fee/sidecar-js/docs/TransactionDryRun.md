# SubstrateApiSidecarV1.TransactionDryRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultType** | **String** | Either &#x60;DispatchOutcome&#x60; if the transaction is valid or &#x60;TransactionValidityError&#x60; if the result is invalid. | [optional] 
**result** | **String** | If there was an error it will be the cause of the error. If the transaction executed correctly it will be &#x60;Ok: []&#x60; | [optional] 
**validityErrorType** | **String** |  | [optional] 



## Enum: ResultTypeEnum


* `DispatchOutcome` (value: `"DispatchOutcome"`)

* `TransactionValidityError` (value: `"TransactionValidityError"`)





## Enum: ResultEnum


* `Ok` (value: `"Ok"`)

* `CannotLookup` (value: `"CannotLookup"`)

* `NoUnsignedValidator` (value: `"NoUnsignedValidator"`)

* `Custom(u8)` (value: `"Custom(u8)"`)

* `Call` (value: `"Call"`)

* `Payment` (value: `"Payment"`)

* `Future` (value: `"Future"`)

* `Stale` (value: `"Stale"`)

* `BadProof` (value: `"BadProof"`)

* `AncientBirthBlock` (value: `"AncientBirthBlock"`)

* `ExhaustsResources` (value: `"ExhaustsResources"`)

* `BadMandatory` (value: `"BadMandatory"`)

* `MandatoryDispatch` (value: `"MandatoryDispatch"`)





## Enum: ValidityErrorTypeEnum


* `InvalidTransaction` (value: `"InvalidTransaction"`)

* `UnknownTransaction` (value: `"UnknownTransaction"`)




