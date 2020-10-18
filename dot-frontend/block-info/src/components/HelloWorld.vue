<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Polkadot Chain</h1>
    <h2>Latest Block Height: {{ header.number }}</h2>
    <h4>Latest Block Hash: {{ header.hash ? header.hash.toHex() : '' }}</h4>
    <h4>Latest Block ParentHash: {{ header.parentHash }}</h4>
    <h4>Latest Block Author: {{ header.author }}</h4>
    <hr />
    <h1>find block by height</h1>
    <form @submit="formSubmit">
      <input v-model="height" type="number" />
      <button class="btn btn-success">Submit</button>
    </form>
    <h2>Block Height: {{ headerTarget.number }}</h2>
    <h4>Block Hash: {{ headerTarget.hash ? headerTarget.hash.toHex() : '' }}</h4>
    <h4>Block ParentHash: {{ headerTarget.parentHash }}</h4>
    <h4>Block Author: {{ headerTarget.author }}</h4>
    <a v-bind:href="url">Subscan BlockHeight {{headerTarget.number}} </a>
    <hr />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
import { ApiPromise, WsProvider } from "@polkadot/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      height: 100,
      header: {},
      headerTarget: {},
      url: 'https://polkadot.subscan.io/block/'
    };
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault();
      const wsProvider = new WsProvider("wss://rpc.polkadot.io");
      let api = await ApiPromise.create({ provider: wsProvider });
      let hash = await api.rpc.chain.getBlockHash(this.height);
      this.headerTarget = await api.derive.chain.getHeader(hash);
      console.log(this.height)
      console.log(this.headerTarget)
      this.url = 'https://polkadot.subscan.io/block/'+ this.headerTarget.number
    }, 
  },
  async mounted() {
    const wsProvider = new WsProvider("wss://rpc.polkadot.io");
    let api = await ApiPromise.create({ provider: wsProvider });
    await api.derive.chain.subscribeNewHeads((header) => {
      console.log(header);
      this.header = header;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
