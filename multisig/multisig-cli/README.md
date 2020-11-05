TODO

```
$ yarn start
yarn run v1.22.5
$ ts-node src/index start
Multisig address generation info
Addresses: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY 5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy
Threshold: 2
Multisig Address (SS58: 42): 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd
0x6e096ac61b9671d8a6e471a65e861e82b0de3faf9c192f422d21d3886b096d18
Write in block: 0xf57e287878f0a0c0d0036028288c6f82e51573a61d7c677718b2da17d155faea
         {"ApplyExtrinsic":1} : balances.Transfer ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd","0x000000000000000001cdda4faccd0000"]
         {"ApplyExtrinsic":1} : system.ExtrinsicSuccess [{"weight":190949000,"class":"Normal","paysFee":"Yes"}]
1604229540000: 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd balance of 410000000000000000 and a nonce of 0
Write in block: 0x5c05c4e0ad1b9cf12c6a7f75ae115f12641c65e79ca4e645cd3471df871e8413
         {"ApplyExtrinsic":1} : balances.Transfer ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty","5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd","0x00000000000000000214e8348c4f0000"]
         {"ApplyExtrinsic":1} : system.ExtrinsicSuccess [{"weight":190949000,"class":"Normal","paysFee":"Yes"}]
1604229546000: 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd balance of 560000000000000000 and a nonce of 0
Write in block: 0x69ad3c2d4b66015129cad69b8dc7914757fd697d847ac35d1d3a76d46c2ff662
         {"ApplyExtrinsic":1} : balances.Transfer ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","0x000000000000000000b1a2bc2ec50000"]
         {"ApplyExtrinsic":1} : system.ExtrinsicSuccess [{"weight":190949000,"class":"Normal","paysFee":"Yes"}]
1604229552000: 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy balance of 100000000000000000 and a nonce of 0
1604229552000: 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd balance of 560000000000000000 and a nonce of 0
1604229552000: 5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy balance of 100000000000000000 and a nonce of 0
{
  isSigned: false,
  method: {
    args: [
      '5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy',
      '2.0000 kUnit'
    ],
    method: 'transferKeepAlive',
    section: 'balances'
  }
}
0xac040503306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc200f00008d49fd1a07
Finalized in: 0xf57e287878f0a0c0d0036028288c6f82e51573a61d7c677718b2da17d155faea
Write in block: 0xa9d8c718c605ba7a520f2942e1fcdfc3db3c85057b6b4c36cde552d729a17aa7
         {"ApplyExtrinsic":1} : balances.Reserved ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",927000000000000]
         {"ApplyExtrinsic":1} : multisig.NewMultisig ["5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY","5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd","0x3e176bd468a286292dcdc4939f5535b23e1efceee5836eee461264294051e80a"]
multisig.NewMultisig index is 1
         {"ApplyExtrinsic":1} : system.ExtrinsicSuccess [{"weight":230163000,"class":"Normal","paysFee":"Yes"}]
0 0x012a592481142c71e161abd8058117aa3730b37d1229106f5a1f3f8fb01ba73f
1 0xcffc5dc67ed6db6998d1588ca3cba6c48a66938edf246bc5b6abcc5b9118d90d
{ height: 79, index: 1 }
Finalized in: 0x5c05c4e0ad1b9cf12c6a7f75ae115f12641c65e79ca4e645cd3471df871e8413
Write in block: 0x6e6b32571af32035639e756ec1ff8b240197fc0ac9a0a09b2cf4941f2c3fad59
         {"ApplyExtrinsic":1} : multisig.MultisigApproval ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",{"height":79,"index":1},"5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd","0x3e176bd468a286292dcdc4939f5535b23e1efceee5836eee461264294051e80a"]
         {"ApplyExtrinsic":1} : system.ExtrinsicSuccess [{"weight":173710000,"class":"Normal","paysFee":"Yes"}]
1604229564000: 5CGrv4qEk299n1UCcDiJSFQsa3yqgnQct8m4rpHq9eMrHrfd balance of 560000000000000000 and a nonce of 0
Done in 31.57s.
```