require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rifle six pull install opinion slot gesture'; 
let testAccounts = [
"0x5fe8ea5b281febf124c0244d1bb2c43a2fed820b635b9ec7fe5ebc1ddda9906d",
"0xf975b8ed7bad1f961309c1eda5a045cef1d9db4aaf8d50ade4b3d58db7fa6ccb",
"0x927152af6ea9fca4a47ca0f9b323c01cfb7e7d2e8a9a571841a5b64fa1e7f0f4",
"0xa0a49e2c23d40afa6696b7b9202fae13fa1ad9d7be36c62e3a4471cfc170287c",
"0x13652053f9d36059a7a49d3d5ee24b097beb6a3086905b1c25468bde4fdcba51",
"0xb12bd9107f31235cc9b862d767c20522eafbb426d78c5774023467ba252abed0",
"0x60c4fe1d2fc84e099d6600483674cb876d122d52715f41a91af9ec89ba9f4e36",
"0x437cd8816167784bb9c18b74c192b18484078b7a24c7079d5bd2654de4b6a4d6",
"0x3663b07db95e8a03317a118cdaf40f4249042e30a6f8f6223acf1a5f6a0fff85",
"0x62ff40ded368a9f82eeca52d4800d522d4afe48fcc6e80912587227573c824b3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


