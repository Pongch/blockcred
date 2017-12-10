//Rinkeby network contract address
//BlockCert address = 0x2ae90817ffb2d24b3f7e0d75c3dba32a56aeaa82
//Orgnization Contract address = 0x516e8e58a460d3f1384bc32ff2326f2333e77772
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/CT0ypkZhkZ8gm2pLeyD0"));
}
//set organization contract abi
var Organization =
web3.eth.contract([{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"OrganizationAccts","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"email","type":"string"}],"name":"setOrganization","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getOrganization","outputs":[{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}])

//organization contract address
var org = Organization.at("0x516e8e58a460d3f1384bc32ff2326f2333e77772");

//set blockcert contract abi
var BlockCert =
web3.eth.contract([{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"},{"name":"organization","type":"address"}],"name":"setCertificate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCertificate","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"},{"name":"organization","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getCertificateById","outputs":[{"name":"idRet","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"},{"name":"organization","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}])

//BlockCert Contract Address
let block = BlockCert.at('0x2ae90817ffb2d24b3f7e0d75c3dba32a56aeaa82');

//on button click, get value from field
window.onload = function() {

    //set default account
    web3.eth.defaultAccount = web3.eth.accounts[0];

    //tell user to install Metamask
    Materialize.toast('Please have Metamask installed before registering on the smart contract', 4000);

    document.getElementById('org-click').onclick = function(){setOrg()};

    //register new organization
    function setOrg(){
      //set name
      let orgName = document.getElementById("org-name").value;
      //set email
      let orgEmail = document.getElementById("org-email").value;
      //set organization value
      org.setOrganization(orgName, orgEmail, function(error, result){
        if(!error){
          console.log(result);
          Materialize.toast('Organization has been registered on the blockchain', 4000);
        } else {
          Materialize.toast('Please have Metamask installed !', 4000);
        }
      });
    }

  }









//
