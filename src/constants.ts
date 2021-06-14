import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 42161,
  ARBITRUM_TESTNET = 79377087078960,
  MOONBEAM_TESTNET = 1287,
  AVALANCHE = 43114,
  AVALANCHE_TESTNET = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65
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

export const INIT_CODE_HASH: string = '0xda29b7e0f0f1f81654212ae5fe23b4feab4dfc556a3eca1c0d36613fc1d38e13'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0x02504D4D6a69E1Abc5Fb13E2B2c63332AE1a3119',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.ROPSTEN]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '0xf102f8C20fA206A1bD17109d6Cf32a4Dba95357C',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: ''
}

export const MEGA_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0x20cf917683FE819032fB513DF02F3aDB35F8545D',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000001',
  [ChainId.ARBITRUM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MOONBEAM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const MASTERSWAP_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0x73F31DDb79F576F644fA69bB0225fBB795D4fDef',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000001',
  [ChainId.ARBITRUM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MOONBEAM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const MEGABAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0x5Fc4d7d72FF3B4487c2ED2486af8D658298FDF5e',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000001',
  [ChainId.ARBITRUM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MOONBEAM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const MEGAMAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM]: '0x0000000000000000000000000000000000000001',
  [ChainId.FANTOM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.XDAI]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0xD66dE38555c90F8ed14625ab2c2e91C0e757a4d1',
  [ChainId.ARBITRUM]: '0x0000000000000000000000000000000000000001',
  [ChainId.ARBITRUM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.MOONBEAM_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE]: '0x0000000000000000000000000000000000000001',
  [ChainId.AVALANCHE_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO]: '0x0000000000000000000000000000000000000001',
  [ChainId.HECO_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX]: '0x0000000000000000000000000000000000000001',
  [ChainId.OKEX_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_TESTNET]: '',
  [ChainId.MOONBEAM_TESTNET]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.AVALANCHE_TESTNET]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}