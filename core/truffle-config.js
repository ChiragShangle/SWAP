const fs = require('fs');
const secrets = JSON.parse(
  fs.readFileSync('./secret.json').toString().trim()
  );
//kovan.infura.io/v3/5c12549c978f4cdabfe383ae239066d0
const HDWalletProvider = require("@truffle/hdwallet-provider");
// truffle-hdwallet-provider
module.exports = {
  networks: {
    kovan : {
      provider: () => 
          new HDWalletProvider(
          //seed
          //kovan.infura.io/v3/5c12549c978f4cdabfe383ae239066d0
            secrets.seed,
            'https://kovan.infura.io/v3/${secret.ProjectId}'
          ),
          network_id: 3 
      },
      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 8545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
       },
    },
 mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.5.16",    // Fetch exact version from solc-bin (default: truffle's version
    }
  },

};