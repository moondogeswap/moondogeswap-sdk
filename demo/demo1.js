const { ChainId, Pair, Token } = require('../dist/sdk.cjs.development')

let trackedTokenPairs = [
  [
    {
      "decimals": 18,
      "symbol": "WBNB",
      "name": "Wrapped BNB",
      "chainId": 97,
      "address": "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e"
    },
    {
      "decimals": 18,
      "symbol": "BAKE",
      "name": "Bakery Token",
      "chainId": 97,
      "address": "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      "tokenInfo": {
        "name": "Bakery Token",
        "symbol": "BAKE",
        "address": "0xe02df9e3e622debdd69fb838bb799e3f168902c5",
        "chainId": 97,
        "decimals": 18,
        "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png"
      },
      "tags": []
    }
  ],
  [
    {
      "decimals": 18,
      "symbol": "MODO",
      "name": "MODO Token",
      "chainId": 97,
      "address": "0x5b54bfaa35A3469fB169E2e97C207F8E86A8e405",
      "tokenInfo": {
        "name": "MODO Token",
        "symbol": "MODO",
        "address": "0x5b54bfaa35A3469fB169E2e97C207F8E86A8e405",
        "chainId": 97,
        "decimals": 18,
        "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
      },
      "tags": []
    },
    {
      "decimals": 18,
      "symbol": "WBNB",
      "name": "Wrapped BNB",
      "chainId": 97,
      "address": "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e"
    }
  ],
  [
    {
      "decimals": 18,
      "symbol": "WBNB-test",
      "name": "WBNB Token",
      "chainId": 97,
      "address": "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      "tokenInfo": {
        "name": "WBNB Token",
        "symbol": "WBNB-test",
        "address": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        "chainId": 97,
        "decimals": 18,
        "logoURI": "https://exchange.pancakeswap.finance/images/coins/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"
      },
      "tags": []
    },
    {
      "decimals": 18,
      "symbol": "WBNB",
      "name": "Wrapped BNB",
      "chainId": 97,
      "address": "0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e"
    }
  ]
]


function toV2LiquidityToken([tokenA, tokenB]) {
  // return new Token(tokenA.chainId, Pair.getAddress(tokenA, tokenB), 18, 'Cake-LP', 'Pancake LPs')
  return new Token(tokenA.chainId, Pair.getAddress(tokenA, tokenB), 18, 'MODO-LP', 'MoonDoge LPs')
}

let pairs = trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens }))

console.log(pairs)