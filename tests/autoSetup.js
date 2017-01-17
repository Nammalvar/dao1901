// Security best practices ftw
function unlockAllAccounts(){
  for (var i = 0; i < eth.accounts.length; i++) {
    personal.unlockAccount(eth.accounts[i], "", 36000);
  }
}

function assert(condition, message) {
  if (!condition) throw message;
}

// We want 5 accounts for our tests
while (eth.accounts.length < 5) {
  console.log("Creating test account...");
  personal.newAccount(""); // Empty passphrase
}

// set defaultAccount
// transactional methods are based on defaultAccount
web3.eth.defaultAccount = eth.accounts[0];

// Set account to receive ether (mining earns)
miner.setEtherbase(eth.accounts[0]);

// Start the miner to validate all the transactions below
miner.start(2);

// Security best practices ftw
unlockAllAccounts();

console
var alice = eth.accounts[0];
var bob = eth.accounts[1];
var carol = eth.accounts[2];
var dennis = eth.accounts[3];
var elie = eth.accounts[4];

admin.sleepBlocks(10); // block reward for alice

// Alice sends some ether to bob and carol, so everybody will have ether and the possibility to send transactions
eth.sendTransaction({from:alice, to:bob, value: web3.toWei(1, "ether")});
eth.sendTransaction({from:alice, to:carol, value: web3.toWei(1, "ether")});
eth.sendTransaction({from:alice, to:dennis, value: web3.toWei(1, "ether")});
eth.sendTransaction({from:alice, to:elie, value: web3.toWei(1, "ether")});

// Make contracts ready to deployment
loadScript("tests/Dao1901Members.js");
// admin.sleepBlocks(6);
// var Dao1901Members = deployDao1901Members();
loadScript("tests/Dao1901Votes.js");
// admin.sleepBlocks(6);
// var Dao1901Votes = deployDao1901Votes(Dao1901Members.address);