require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index return stereo purpose install only flush giant'; 
let testAccounts = [
"0x014087425e01d214c13031317038a8ec2ecc29afbddbd7ef82f253b18bc9d588",
"0x3b8b65d588abcdf3334a441dba68c5925e37f9eb8a854077543ffaf820e97846",
"0x44b6b16bebefa5dfaea3697ac094b490b62bedabc0a13d7f26f74e6555a10338",
"0x56f0e6c1feef1653867cee83d668068542346e0ed70da33fd4df2fa6ea70810c",
"0x7e85352a59210083532d4bd6c75c335b46b5a054ee04a3b716ebdb9be4669158",
"0x268f8bd2c343e1b8187098e5cbb8932b92dbf22c4145d0c22166bbc957a44b3c",
"0xa3febf951065649c012f8b22a8ed6e928f8cf1e3533b16f13fe3c9cd463752ec",
"0x07602867ef4057cf896b6dd25511d2b2f031cfe7eae654336b3985e8b774c7f0",
"0x497ff9f9919607a48ef05c70d681ff692777a1533b0e647afe192a88cde6f5c2",
"0x629e2da11e471512109352207aa213847fad150802fb0ff3a254380a84419941"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
