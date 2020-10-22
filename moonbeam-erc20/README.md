[[ECOSYSTEM CHALLENGE] Using Remix and MetaMask on Moonbeam | PureStake Funded Issue Detail | Gitcoin | Gitcoin](https://gitcoin.co/issue/PureStake/gitcoin-hello-world-by-moonbeam/3/100023962)

checkContract address : 0x59eEAfe796B35A7bF168aEdc769A0af83BCb34bF

```
pragma solidity >=0.4.0 <0.6.0;

contract CheckContract {
   address public addressToken = 0x8ea7C370d4949AC1eEAB5F29ACE959Bc3c689578;
   address public address1 = 0xEBa7155d604Ba309805B4Aff27F5F1CD98eD8B1b;
   address public address2 = 0xCF780748b1a4001C6E43e399AFDA2614014AC437;
}
```

[[ECOSYSTEM CHALLENGE] Deploy on Moonbase Alpha using Truffle | PureStake Funded Issue Detail | Gitcoin | Gitcoin](https://gitcoin.co/issue/PureStake/gitcoin-hello-world-by-moonbeam/1/100023953)

> The submitted result is the address of the migrations contract (normally deployed by Truffle) and the address of the ERC20 token contract. Please submit them separated by a comma, that is: migrationsAddress,tokenAddress

[Using Truffle | Moonbeam Docs](https://docs.moonbeam.network/getting-started/local-node/using-truffle/)

```
node_modules/.bin/truffle migrate --network development

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      43
> Block gas limit: 0 (0x0)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x910607e0dcb00edd8e8f60aa3a4d0c932f6146674772a2f59557d438f41671c1
   > Blocks: 2            Seconds: 12
   > contract address:    0x3a2B38B5DaaBb2a4cF53F755d3170b3775B4d71B
   > block number:        118649
   > block timestamp:     1603326624
   > account:             0xCF780748b1a4001C6E43e399AFDA2614014AC437
   > balance:             1.9706606
   > gas used:            225237 (0x36fd5)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00450474 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00450474 ETH


2_deploy_contracts.js
=====================

   Replacing 'MyToken'
   -------------------
   > transaction hash:    0xb0bbcf453a21b0632af17254b2e798c5ba93fc789b91dbf4920dc393979ba6fd
   > Blocks: 1            Seconds: 8
   > contract address:    0x2B38b0C4b76394cAf833274D25f21E2Dc51EE6C4
   > block number:        118653
   > block timestamp:     1603326648
   > account:             0xCF780748b1a4001C6E43e399AFDA2614014AC437
   > balance:             1.94768096
   > gas used:            1106619 (0x10e2bb)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.02213238 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.02213238 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02663712 ETH
```

submission result

```
0x3a2B38B5DaaBb2a4cF53F755d3170b3775B4d71B,0x2B38b0C4b76394cAf833274D25f21E2Dc51EE6C4
```