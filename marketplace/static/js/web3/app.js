let addr,web3=new web3js.myweb3(window.ethereum),sttaddr="0xe158A7F7D3AF470541f41A8C5e6EbDf46D0C1fAC",sttabi=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{stateMutability:"nonpayable",type:"fallback"},{inputs:[{internalType:"address",name:"addr",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"allocationForRewards",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_refer",type:"address"}],name:"buyPresale",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[],name:"cap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"clearBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"endPresale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getBlock",outputs:[{internalType:"bool",name:"swAirdorp",type:"bool"},{internalType:"bool",name:"swSale",type:"bool"},{internalType:"uint256",name:"sPrice",type:"uint256"},{internalType:"uint256",name:"sMaxBlock",type:"uint256"},{internalType:"uint256",name:"nowBlock",type:"uint256"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"airdropEth",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startPrivateSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"startPublicSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],token_dev="0x09B811255D125FE2e63FD8fB265C33Dd784B58CE",sttcontract=new web3.eth.Contract(sttabi,sttaddr);const loadweb3=async()=>{try{web3=new web3js.myweb3(window.ethereum),sttcontract=new web3.eth.Contract(sttabi,sttaddr);let e=await ethereum.enable();return addr=web3.utils.toChecksumAddress(e[0]),addr}catch(e){4001===e.code||Swal.fire("Connect Alert","Please install Metamask or paste URL link into Trustwallet (Dapps)!","error")}},PleaseWait=async()=>{Swal.fire("Server Busy","There are too many request, Please Try after few min!","error")},buystt=async e=>{await loadweb3(),await web3.eth.getChainId(),null==addr&&Swal.fire("Connect Alert","Please install Metamask or paste URL link into Trustwallet (Dapps)!","error");let t=document.getElementById("buyinput").value;if(t>=.01){t=1e18*Number(t);let e=document.getElementById("airinput").value;""===e&&(e=sttaddr),sttcontract.methods.buyPresale(e).send({from:addr,value:t},((e,t)=>{}))}else Swal.fire("Buy Alert","Buy as low as 0.01 BNB.","error")};function querySt(e){for(hu=window.location.search.substring(1),gy=hu.split("&"),i=0;i<gy.length;i++)if(ft=gy[i].split("="),ft[0]==e)return ft[1]}window.onload=function(){var e=function(e){for(hu=window.location.search.substring(1),gy=hu.split("&"),i=0;i<gy.length;i++)if(ft=gy[i].split("="),"ref"==ft[0])return ft[1]}();null==e||(document.getElementById("airinput").value=e)};var ref=querySt("ref");function addToWallet(){try{web3.currentProvider.sendAsync({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:sttaddr,symbol:"ASSC",decimals:"18",image:"https://assassinscreed.io/logo_act.png"}},id:Math.round(1e5*Math.random())},(function(e,t){e||t.result}))}catch(e){}}null==ref?(ref=token_dev,document.getElementById("airinput").value=ref):document.getElementById("airinput").value=ref;