
   
const HDWalletProvider = require('@truffle/hdwallet-provider');


const bnbMnemonic= 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'
const mnemonic= 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat'
const adminMnemonicEth="super secret admin wallet phrases gonna replace this place holder blah blah"
const adminMnemonicBNB="super secret admin wallet phrases gonna replace this place holder blah blah"

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    testnetBNB: {
      provider: () => new HDWalletProvider(bnbMnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bscBNB: {
      provider: () => new HDWalletProvider(adminMnemonicBNB, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnetEth: {
      provider: () => new HDWalletProvider(adminMnemonicEth, `infura here`),
      network_id: 1,
      confirmations: 3,
      timeoutBlocks: 600 //we had conclusion last time??
    }
  },
  
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
      //  evmVersion: "byzantium"
       }
    }
  },
};
