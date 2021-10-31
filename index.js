abiERC721 = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"_prefixURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintItems","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"presaleMintItems","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"reserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePreSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleTransferPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')
abiCHIMPTokenSVG = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')

let provider, signer, contract;

async function connectWallet() {
    window.ethereum
        .request({method: 'eth_requestAccounts'})
        .then(() => {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            provider.listAccounts().then((accounts) => {
                if (accounts.length > 0) {
                    $("#connectBtn").text('Wallet Connected').removeClass('btn-warning').addClass('btn-success');
                    onPageLoad();
                } else {
                    console.log("ERROR: Unable to retrieve accounts");
                }
            });
        })
        .catch((error) => {
            if (error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              console.log('Please connect to MetaMask.');
            } else {
              console.error(error);
            }
        });
};

// Transfer
async function transferERC721() {
    transferToAddress = $("#transferERC721ToAddress").val();
    if (!ethers.utils.isAddress(transferToAddress)) {
        $("#transferERC721ToAddress").removeClass("is-valid").addClass("is-invalid");
        return
    } else {
        $("#transferERC721ToAddress").removeClass("is-invalid").addClass("is-valid");
    };
    transferTokenId = $("#transferERC721TokenId").val();
    if (!$.isNumeric(transferTokenId)) {
        return
    }
    if (!$("#contractAddressSelect").val() == "") {
        contractAddress = $("#contractAddressSelect").val()
        $("#customContractAddress").removeClass("is-invalid").addClass("is-valid").val("");
    } else {
        contractAddress = $("#customContractAddress").val();
        if (!ethers.utils.isAddress(contractAddress)) {
            $("#customContractAddress").removeClass("is-valid").addClass("is-invalid");
            return
        } else {
            $("#customContractAddress").removeClass("is-invalid").addClass("is-valid");
        };
    }
    contract = new ethers.Contract(contractAddress, abiERC721, signer)
    from = await signer.getAddress()
    contract["safeTransferFrom(address,address,uint256)"](from, transferToAddress, transferTokenId)
        .then((f) => console.log(f))
}

async function displayCHIMPTokenId() {
    tokenId = $("#displayCHIMPTokenId").val();
    if (!$.isNumeric(tokenId)) {
        return
    }
    contract = new ethers.Contract("0x1e1628A35C82169F876F97C9CE5B6533895c2B22", abiCHIMPTokenSVG, signer)
    let svgString;
    try {
        svgString = await contract.tokenSVG(tokenId)
    } catch(err) {
        $("#displayCHIMPTokenId").removeClass("is-valid").addClass("is-invalid");
        $('#displayCHIMPimg').attr('style', 'visibility: hidden;');
        return
    }

    $("#displayCHIMPTokenId").removeClass("is-invalid").addClass("is-valid");
    const base64EncodedImage = base64EncodeImageContent(svgString)
    $('#displayCHIMPimg').attr('src', base64EncodedImage).attr('style', 'visibility: visible;').attr('width', 512).attr('height', 512);
}

async function displayGB89TokenId() {
    tokenId = $("#displayGB89TokenId").val();
    if (!$.isNumeric(tokenId)) {
        return
    }
    contract = new ethers.Contract("0x0e2fbBA88C5E526f5160Af1b9Ad79a20130b2216", abiERC721, signer)
    let uriString;
    try {
        uriString = await contract.tokenURI(tokenId)
    } catch(err) {
        $("#displayGB89TokenId").removeClass("is-valid").addClass("is-invalid");
        $('#displayGB89img').attr('style', 'visibility: hidden;');
        return
    }

    $("#displayGB89TokenId").removeClass("is-invalid").addClass("is-valid");
    let base64 = uriString.split(',')[1]
    const decoded = JSON.parse(atob(base64))
    base64 = decoded.image.split(',')[1]
    const base64EncodedImage = base64EncodeImageContent(atob(base64))
    $('#displayGB89img').attr('src', base64EncodedImage).attr('style', 'visibility: visible;').attr('width', 500).attr('height', 500);
}

function base64EncodeImageContent(svgString) {
    return `data:image/svg+xml;base64,${btoa(svgString)}`
}

// Reload
function onPageLoad() {
    if (!window.ethereum) {
        $("#connectBtn").text('Sparrow or Metamask not installed').removeClass('btn-warning').addClass('btn-danger');
        return;
    }
    if (!provider) {
        connectWallet();
        return
    }
}

$(document).ready(function () {
    $("#transferERC721Button").click(function(){
        transferERC721()
    });
    $("#displayCHIMPTokenIdButton").click(function(){
        displayCHIMPTokenId()
    });
    $("#displayGB89TokenIdButton").click(function(){
        displayGB89TokenId()
    });

    onPageLoad()
});
