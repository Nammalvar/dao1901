import Web3 from "web3";
// Supports Metamask and Mist, and other wallets that provide 'web3'.
if (window.web3 && typeof window.web3 !== 'undefined') {
  // Use the Mist/wallet provider.
  window.web3 = new Web3(web3.currentProvider);
} else {
  // No web3 detected.
  let web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  window.web3 = web3;
}
let coinbase = web3.eth.coinbase;
console.log('coinbase: ', coinbase);
let balance = web3.eth.getBalance(coinbase);
console.log('coinbase balance: ', balance.toString(10));

