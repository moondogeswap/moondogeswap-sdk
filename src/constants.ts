import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 56,
  BSCTESTNET = 97
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x6e06bbdb10374ded08bc53aad98f6f3fe317c0e4'
// 
export const INIT_CODE_HASH = '0x01fb416dc77de6e78a82d77de7901b1871da985b9efecd99fb7b569d10927285'

export const FACTORY_ADDRESS_PROD = '0x5A67D6d1e1c36dcA265ca9b9BDA0e3Eb5Af9B634'
// 
export const INIT_CODE_HASH_PROD = '0x01fb416dc77de6e78a82d77de7901b1871da985b9efecd99fb7b569d10927285'
export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _998 = JSBI.BigInt(998)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
