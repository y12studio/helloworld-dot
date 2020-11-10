import program from "commander";
import { ApiPromise, WsProvider, Keyring, SubmittableResult } from "@polkadot/api";
const wsProvider = new WsProvider('ws://localhost:9944');
import { encodeMultiAddress, } from '@polkadot/util-crypto';
import { KeyringPair } from '@polkadot/keyring/types';
import { cryptoWaitReady, blake2AsHex } from '@polkadot/util-crypto';
const UNIT = BigInt(1000000000000000);


async function signAndSendWaitFinalized(
    signer: KeyringPair,
    tx: any
): Promise<any> {
    return new Promise((resolve, reject) => {
        tx.signAndSend(signer, (result: SubmittableResult) => {
            if (result.status.isInBlock) {
                console.log(`Write in block: ${result.status.asInBlock}`);
                resolve(result);
            }
            if (result.status.isFinalized) {
                console.log(`Finalized in: ${result.status.asFinalized}`);
                // resolve(result);
            }
            if (
                result.status.isDropped ||
                result.status.isInvalid ||
                result.status.isUsurped
            ) {
                console.error('ERROR: Transaction could not be finalized.');
                reject(result as SubmittableResult);
            }
        });
    });
}

async function queryBalance(api: ApiPromise, address: string) {
    const [now, { nonce, data: balance }] = await Promise.all([
        api.query.timestamp.now(),
        api.query.system.account(address)
    ]);
    console.log(`${now}: ${address} balance of ${balance.free} and a nonce of ${nonce}`);
}

async function init(api: ApiPromise, multisigAddr: string, alice: KeyringPair, bob: KeyringPair, dave: KeyringPair) {
    const tx1 = api.tx.balances.transfer(multisigAddr, BigInt(13) * UNIT);
    await signAndSendWaitFinalized(alice, tx1);
    await queryBalance(api, multisigAddr);
    const tx2 = api.tx.balances.transfer(multisigAddr, BigInt(15) * UNIT);
    await signAndSendWaitFinalized(bob, tx2);
    await queryBalance(api, multisigAddr);
}

async function start() {
    await cryptoWaitReady();
    console.log("\n=== STEP1 Encode a multisig address ===")
    const keyring: Keyring = new Keyring();
    const alice: KeyringPair = keyring.addFromUri('//Alice', { name: 'Alice' }, 'sr25519');
    const bob: KeyringPair = keyring.addFromUri('//Bob', { name: 'Bob' }, 'sr25519');
    const dave: KeyringPair = keyring.addFromUri('//Dave', { name: 'Dave' }, 'sr25519');
    
    const addresses = [alice.address, bob.address, dave.address];
    const threshold = 2;
    const ss58Prefix = 42;
    const multisigAddr = encodeMultiAddress(addresses, threshold, ss58Prefix);
    
    console.log('Multisig address generation info');
    console.log(`Addresses: ${addresses.join(' ')}`);
    console.log(`Threshold: ${threshold}`);
    console.log(`Multisig Address (SS58: ${ss58Prefix}): ${multisigAddr}`);
    
    // https://polkadot.js.org/docs/api/FAQ#the-node-returns-a-could-not-convert-error-on-send
    const api = await ApiPromise.create({
        provider: wsProvider,
        types: {
            // mapping the actual specified address format
            Address: 'AccountId',
            // mapping the lookup
            LookupSource: 'AccountId'
        }
    });
    // console.log(api.genesisHash.toHex());
    
    console.log('\n=== STEP2 Transfer some liquid free balance to the multisig address ===');
    await init(api, multisigAddr, alice, bob, dave);
    
    console.log('\n=== STEP3  Transfer form the multisig address to dave account ===');
    const tx4 = api.tx.balances.transfer(dave.address, BigInt(3) * UNIT);
    
    // https://github.com/paritytech/substrate/blob/ba8e8122ab86bb1a8677b004ff4f14626fcc7884/frame/multisig/src/tests.rs#L284
    // let call = Call::Balances(BalancesCall::transfer(6, 15));
    // let data = call.encode();
    // let hash = blake2_256(&data);
    //
    // https://github.com/polkadot-js/api/blob/2085a0662cd20a35f52d05d1fa49956a3bc8f960/packages/types/src/extrinsic/Extrinsic.ts#L111
    // get method(): Call;
    const call = tx4.method;
    const callData = call.toHex();
    const callHash = call.hash;
    console.log(`callData: ${callData}`)
    console.log(`callHash: ${callHash}`)
    
    console.log('\n=== STEP4 Alice aprove this call/transaction of multisig account ===');
    const tx5 = api.tx.multisig.approveAsMulti(threshold, [dave.address, bob.address], null, callHash, 0);
    await signAndSendWaitFinalized(alice, tx5);
    
    const multisig = await api.query.multisig.multisigs(multisigAddr, callHash);
    const timepoint = multisig.unwrap().when
    console.log(timepoint.toHuman());
    
    await queryBalance(api, multisigAddr);
    //console.log(timepoint);
    // https://github.com/paritytech/substrate/blob/cab986549f964a081343336797bb6cf6b3526335/frame/multisig/src/lib.rs#L280
    // - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
    // not the first approval, then it must be `Some`, with the timepoint (block number and transaction index) of the first approval transaction.  
    console.log('\n=== STEP5 Bob aprove this call/transaction of multisig account ===');
    const tx6 = api.tx.multisig.asMulti(threshold, [dave.address, alice.address], timepoint, callData, false, 1000000000);
    await signAndSendWaitFinalized(bob, tx6);

    await queryBalance(api, multisigAddr);
    //await queryBalance(api, dave.address);
    process.exit(0);
}

async function main() {
    program.command("start").action(start);
    await program.parseAsync(process.argv);
}

//main().catch(console.error).finally(() => process.exit());
main().catch(console.error);


