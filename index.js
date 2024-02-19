//fetching data from gecko ip // btc eth lite and riple
const cryptoUrl =  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,bitcoin-cash&vs_currencies=usd'

async function crypto() {
    const cryptoApi = await fetch(cryptoUrl);
    const cryptoData = await cryptoApi.json();
  
    bitcoinPrice = cryptoData.bitcoin.usd;
    ethereumPrice = cryptoData.ethereum.usd;
    litecoinPrice = cryptoData.litecoin.usd;
    ripplePrice = cryptoData.ripple.usd;
  
    return {
      bitcoinPrice,
      ethereumPrice,
      litecoinPrice,
      ripplePrice
    };
  }
  

//store function to then move into bot
module.exports = crypto;