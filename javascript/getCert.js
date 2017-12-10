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
  document.getElementById("cert-click").onclick = function(){OutputCert()};
  document.getElementById("authenticate-click").onclick = function(){OutputAuth()};
  document.getElementById("authenticate-click").style.visibility = "hidden";

    function OutputCert(){
      let certificateId = document.getElementById('cert-id').value;

      block.getCertificateById(certificateId, function(error, result){
        if(!error){
          document.getElementById("date").innerHTML = '<h4 class="center-align">' + result[2].toString() + '</h4>';
          document.getElementById("name").innerHTML = '<h4 class="center-align">' + result[1].toString() + '</h4>';
          document.getElementById("degree-name").innerHTML = '<h4 class="center-align">' + result[3].toString() + '</h4>';
          document.getElementById("org").innerHTML = result[4].toString();
          document.getElementById("authenticate-click").style.visibility = "visible";
          Materialize.toast('Certificate retrieved', 4000)
        }
        else {
          Materialize.toast('NO certificate with this ID', 4000)
        }
      });
    }

    function OutputAuth(){
      let authenticateId = document.getElementById('org').innerHTML;
      console.log(authenticateId);

      org.getOrganization(authenticateId, function(error, result){
        if(!error)
          document.getElementById("authenticate-field").innerHTML = '<h4 class="center-align"> <i class="material-icons">verified_user</i> Certificate is published by ' + result[0].toString() + '</h4>';
          console.log(result[0].toString());
          Materialize.toast('This Certificate is authentic', 12000)
      })
    }

  }









//
