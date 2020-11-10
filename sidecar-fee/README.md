[[ADVANCED CHALLENGE] REST APIs - Build a transaction fee estimator | Polkadot-Network Funded Issue Detail | Gitcoin | Gitcoin](https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/4/100023930)

Submission requirements

- Provide a simple UI not unlike the Extrinsics screen on Polkadot JS UI. Allow a user to select a module, a module’s function, and input data.
- When confirming the extrinsic, offer to estimate fee (default) and submit to live chain
- Use Sidecar’s estimate fee functionality if estimating fee, or send to live chain (via Sidecar or directly) otherwise
- Upload all the code to Github and submit the URL. For bonus points, upload the solution live somewhere so it can be tested publicly.


To generate [javascript](https://openapi-generator.tech/docs/generators/javascript) with [OpenAPITools/openapi-generator](https://github.com/OpenAPITools/openapi-generator)

```
$ wget https://raw.githubusercontent.com/paritytech/substrate-api-sidecar/master/docs/src/openapi-v1.yaml
$ docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi-v1.yaml -g javascript --additional-properties=usePromises=true -o /local/sidecar-js
```