# TransactionDryRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_type** | Option<**String**> | Either `DispatchOutcome` if the transaction is valid or `TransactionValidityError` if the result is invalid. | [optional]
**result** | Option<**String**> | If there was an error it will be the cause of the error. If the transaction executed correctly it will be `Ok: []` | [optional]
**validity_error_type** | Option<**String**> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


