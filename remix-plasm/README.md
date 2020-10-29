[[INTERMEDIATE CHALLENGE] Deploying An Auction Solidity Contract on Plasm Network | staketechnologies Funded Issue Detail | Gitcoin ](https://gitcoin.co/issue/staketechnologies/hello-world-by-polkadot/5/100023959)


## 1. Start local plasm-node:1.6.1-dusty with evm=debug

```sh
$ docker run -it -p 9933:9933 staketechnologies/plasm-node:1.6.1-dusty --dev -l evm=debug --tmp --rpc-port 9933 --rpc-external

```

## 2. Add new plasm-dev network to Metamask and import developer account

developer account seed

```
0x60ed0dd24087f00faea4e2b556c74ebfa2f0e705f8169733b01530ce4c619883
```

## 3. Test the auction contract

- account-dev transfer 100 PLM to account1/account2/account3
- account-dev deploy auctionn contract with 120 seconds bidding time on behalf of the beneficiary account3 address. (NOTE: [pallet-evm: fix backend timestamp by sorpaas · Pull Request #7245 · paritytech/substrate](https://github.com/paritytech/substrate/pull/7245))
- account1 bid 10 PLM 
- account2 bid 20 PLM
- It takes about 120 seconds to wait for the auction to complete
- account3 call auctionEnd
- account1 withdraw 10 PLM

## 4. Upload the Video

[Deploying An Auction Solidity Contract on Plasm Network - YouTube](https://www.youtube.com/watch?v=8lF4c87W3Mo&feature=youtu.be)


## auction contract

[Solidity by Example — Solidity 0.6.12 documentation](https://solidity.readthedocs.io/en/v0.6.12/solidity-by-example.html#simple-open-auction)


```
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.7.0;

contract SimpleAuction {

    address payable public beneficiary;
    uint public auctionEndTime;

    address public highestBidder;
    uint public highestBid;


    mapping(address => uint) pendingReturns;

    bool ended;

    event HighestBidIncreased(address bidder, uint amount);
    event AuctionEnded(address winner, uint amount);


    constructor(
        uint _biddingTime,
        address payable _beneficiary
    ) public {
        beneficiary = _beneficiary;
        // 
        // NOTE: Solidity now = block.timestamp =  current block timestamp as seconds since unix epoch
        // 
        // pallet-evm: fix backend timestamp by sorpaas · Pull Request #7245 · paritytech/substrate
        // https://github.com/paritytech/substrate/pull/7245
        // 
        // Plasm block.timestamp unit is milliseconds
        //
        auctionEndTime = now + _biddingTime;
    }

 
    function bid() public payable {
     
        require(
            now <= auctionEndTime,
            "Auction already ended."
        );

        require(
            msg.value > highestBid,
            "There already is a higher bid."
        );

        if (highestBidder != address(0)) {
            pendingReturns[highestBidder] += highestBid;
        }
        highestBidder = msg.sender;
        highestBid = msg.value;
        emit HighestBidIncreased(msg.sender, msg.value);
    }

    /// Withdraw a bid that was overbid.
    function withdraw() public returns (bool) {
        uint amount = pendingReturns[msg.sender];
        if (amount > 0) {
            pendingReturns[msg.sender] = 0;

            if (!msg.sender.send(amount)) {
                // No need to call throw here, just reset the amount owing
                pendingReturns[msg.sender] = amount;
                return false;
            }
        }
        return true;
    }


    function auctionEnd() public {
       
        // 1. Conditions
        require(now >= auctionEndTime, "Auction not yet ended.");
        require(!ended, "auctionEnd has already been called.");

        // 2. Effects
        ended = true;
        emit AuctionEnded(highestBidder, highestBid);

        // 3. Interaction
        beneficiary.transfer(highestBid);
    }
}
```