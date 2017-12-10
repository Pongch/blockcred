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
web3.eth.contract([{"constant":true,"inputs":[],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getCertificate","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"},{"name":"organization","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"}],"name":"setCertificate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getCertificateById","outputs":[{"name":"idRet","type":"uint256"},{"name":"name","type":"string"},{"name":"certDate","type":"string"},{"name":"certName","type":"string"},{"name":"organization","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}])


//BlockCert Contract Address
let block = BlockCert.at('0xA7d5D5f6E9b7b0952eF1FaEF81ba46D637Ba9194');

//on button click, get value from field
window.onload = function() {

  //warn user to have Metamask installed before interacting with Dapp
  Materialize.toast('Please have Metamask installed before registering on the smart contract', 4000);

  document.getElementById('degree-click').onclick = function(){RegisterCert()};

  //add certificate to the Blockchain Smart contract details
  function RegisterCert() {
    let personName = document.getElementById('person-name').value;
    let degreeName = document.getElementById('degree-name').value;
    let degreeId = document.getElementById('degree-id').value;
    let degreeDate = document.getElementById('degree-date').value;
    //uint256 id, string name, string certDate, string certName
    block.setCertificate(degreeId, personName, degreeDate, degreeName, function(error, result){
        if(!error)
          Materialize.toast('Certificate Successfully added', 4000)
          console.log(result);
        }
    );
    }


  }









//
