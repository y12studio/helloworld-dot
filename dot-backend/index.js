const { ApiPromise, WsProvider } = require('@polkadot/api');
const program = require('commander');

async function showBlock(opts) {
    const provider = new WsProvider(opts.wsUrl);
    const api = await ApiPromise.create({ provider });
    const chain = api.rpc.chain;
    let r = {}
    if (opts.latestBlock) {
        r = await chain.getBlock();
    } else if (opts.blockHeight) {
        // https://github.com/polkadot-js/api/blob/004f9153abe53f4b8aaee992a24b6ecbd53cbff6/packages/api/src/augment/rpc.ts#L74
        let hash = await chain.getBlockHash(opts.blockHeight);
        r = await chain.getBlock(hash);
    } else if (opts.blockHash) {
        r = await chain.getBlock(opts.blockHash);
    } else {
        r = await chain.getBlock();
    }
    return r;
}

program
    .option('-d, --debug', 'output debug info')
    .option('-l, --latest-block', 'latest block info')
    .option('-b, --block', 'output block info')
    .option('-s, --block-hash <hash>', 'block hash')
    .option('-n, --block-height <number>', 'block height')
    .requiredOption('-w, --ws-url <wsurl>', 'WsProvider URL')

program.parse(process.argv);

if (program.debug) console.log(program.opts());

if (program.block) {
    // node index.js -b -w ws://127.0.0.1:9944
    // node index.js -b -w wss://rpc.polkadot.io --block-hash 0xe178682deb8600d3c1294dc32d80cd64826b18cf9b921f82c7a99470282dbc55
    // node index.js -b -w wss://rpc.polkadot.io --latest-block
    // node index.js -b -w wss://kusama-rpc.polkadot.io --block-height 100 
    showBlock(program.opts()).then(b => {
        // console.log(`show block on ${program.wsUrl}, opts is ${JSON.stringify(program.opts(), null, 2)}`);
        console.log(JSON.stringify(b.block, null, 2));
    }).catch(console.error).finally(() => process.exit());
};