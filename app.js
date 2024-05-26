function final(){
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        // Request account access if needed
        await ethereum.request({ method: 'eth_requestAccounts' });
        // Acccounts now exposed
        console.log("MetaMask is connected");
      } catch (error) {
        console.error("User denied account access");
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      console.log("MetaMask is connected");
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });





  document.getElementById('connectButton').addEventListener('click', async () => {
    if (window.ethereum) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        console.log("MetaMask is connected");
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log('MetaMask not detected');
    }
  });



  async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    console.log(accounts[0]);
  }
}

  getAccount();
