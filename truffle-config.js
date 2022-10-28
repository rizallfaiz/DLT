require('babel-register');
require('babel-polyfill');
require('dotenv').config();
//const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const HDWalletProvider = require('@truffle/hdwallet-provider');
//const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(
//          privateKeys.split(','), // Array of account private keys
//          `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
          process.env.MNEMONIC, 'https://goerli.infura.io/v3/' + process.env.INFURA_API_KEY
        )
      },
      gas: 4465030,
      gasPrice: 30674015014,
      networkCheckTimeout: 100000,
      timeoutBlocks: 100,
      network_id: 5
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}