[[BEGINNER CHALLENGES] Back-End Javascript | Polkadot-Network Funded Issue Detail | Gitcoin | Gitcoin](https://gitcoin.co/issue/Polkadot-Network/hello-world-by-polkadot/13/100023939)

```
$ node index.js --help
Usage: index [options]

Options:
  -d, --debug                  output debug info
  -l, --latest-block           latest block info
  -b, --block                  output block info
  -s, --block-hash <hash>      block hash
  -n, --block-height <number>  block height
  -w, --ws-url <wsurl>         WsProvider URL
  -h, --help                   display help for command

$ node index.js -b -w wss://rpc.polkadot.io --block-height 100

{
  "header": {
    "parentHash": "0xb67dd067ef0b813d0a0c1d093c5dfc455e6f6b3ea0fa7552e1474d64a6d39680",
    "number": 100,
    "stateRoot": "0xc276a417707ab53940ea630979ba4c949f885723cebd4678a762e3bc492068bf",
    "extrinsicsRoot": "0x37ed0ce018452333d3064383107dc0462e3c0877408ce3a6c348bc3bffb9390e",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x0300000000ffdecc0f0000000092b7781d7794de027b7a54991d95bf81120a50a799478012c31d3d68a12c121fdcf7fb677fdb73d41c1bf1eb014362f821029041de77b1e8aa67034b3bac570c8f3ac2950cacc922e6c3c815f67eb5ce0aeff934df90d65c46fe5b42ef357b0b"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0x6e7cd1b897285b51dfe650deacdfd26252d99bf31ed1f9c3ce67a64bb7257924d1c2a38b3a561a435eb5bcb35b39880d43c79911d0845d4744c72f8d4fe99583"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280403000b9078aa517201",
    "0x14040a008501",
    "0x1004140000"
  ]
}

$ node index.js -b -w wss://kusama-rpc.polkadot.io

{
  "header": {
    "parentHash": "0x2104472059b21e82877feea49391ab82845ba543b18dd4516a8accc6dbb3607a",
    "number": 4515045,
    "stateRoot": "0x882c3c9c9014373498c418ebfb63e804e3eb5e38fdfaad739e7425fbf7182ad1",
    "extrinsicsRoot": "0xfe7be5c7dac95a7843f5a5aeb51e8b56a5a1c82164f1c5cb4f157b6b39508db7",
    "digest": {
      "logs": [
        {
          "PreRuntime": [
            1161969986,
            "0x0127010000117fec0f00000000c8bd81790265e3ea69f0d99a1fcbbd1f45fd30af746e39811cf2c332c9e87a06cdf989380a5f79f86420105cb92f8c0a8a41e58b6619616aa113be3cc66c25020aa9aac69d29ba4474ad39720a3b8fe161bed5310cdc03ca233f1846a6b49c02"
          ]
        },
        {
          "Seal": [
            1161969986,
            "0xf298a28bee3109897c3cae951389948ec95e3426e89006125f437eeea69a5f4cb07d3f9dc46ce067455471979c8137772c10b41c8f4b2c1770f14adf36ea5e8e"
          ]
        }
      ]
    }
  },
  "extrinsics": [
    "0x280402000b701ee2367501",
    "0x1c0409008a931301"
  ]
}

```