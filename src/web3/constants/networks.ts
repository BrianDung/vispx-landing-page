import { get } from 'lodash';
import { Network } from '../types';
import {
  REACT_APP_BLOCK_EXPLORER_URL,
  REACT_APP_CHAIN_ID_HEX,
  REACT_APP_RPC_URL,
  REACT_APP_CHAIN_ID,
  REACT_APP_NETWORK_NAME,
} from './envs';

export const connector = {
  randomRPCTestnet: (listRPC: any) => {
    const lengthList = listRPC?.length;
    const randomNumber = Math.floor(Math.random() * 10) % lengthList;
    return get(listRPC, randomNumber);
  },
};

export const SUPPORTED_NETWORKS: { [key: string]: Network } = {
  [REACT_APP_CHAIN_ID as string]: {
    chainId: Number(REACT_APP_CHAIN_ID),
    chainIdHex: REACT_APP_CHAIN_ID_HEX as string,
    chainName: REACT_APP_NETWORK_NAME as string,
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
    blockExplorerUrls: [REACT_APP_BLOCK_EXPLORER_URL as string],
    rpcUrls: [REACT_APP_RPC_URL as string],
  },
};

export enum SupportedChainId {
  BSC = 97,
  BSC_MAINNET = 56,
  ETH = 4,
  ETH_MAINNET = 1,
  POLYGON = 80001,
  POLYGON_MAINNET = 137,
}

export const LIST_BSC_TESTNET = [
  'https://data-seed-prebsc-1-s1.binance.org:8545/',
  'https://data-seed-prebsc-2-s1.binance.org:8545/',
  'https://data-seed-prebsc-1-s2.binance.org:8545/',
  'https://data-seed-prebsc-2-s2.binance.org:8545/',
  'https://data-seed-prebsc-1-s3.binance.org:8545/',
  'https://data-seed-prebsc-2-s3.binance.org:8545/',
];

export const LIST_NETWORK_RPC_MAINNET: any = {
  [SupportedChainId.BSC_MAINNET]: 'https://bsc-dataseed.binance.org/',
  [SupportedChainId.POLYGON_MAINNET]: 'https://rpc-mainnet.maticvigil.com/',
  [SupportedChainId.ETH_MAINNET]: 'https://mainnet.infura.io/v3/50f6131e95134c0fba1a009b561a31d9',
};

export const LIST_NETWORK_RPC_TESTNET: any = {
  [SupportedChainId.BSC]: connector.randomRPCTestnet(LIST_BSC_TESTNET),
  [SupportedChainId.POLYGON]: 'https://rpc-mumbai.maticvigil.com/',
  [SupportedChainId.ETH]: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
};

export const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.BSC,
  SupportedChainId.BSC_MAINNET,
];

export const BRIDGE_WALLET_CONNECT_URL = 'https://pancakeswap.bridge.walletconnect.org';

export const METAMASK_DEEPLINK = 'https://metamask.io/download';

export const NETWORK_URL_BSC = 'https://bsc-dataseed.binance.org/';

export const METAMASK = 'metamask';

export const WALLET_CONNECT = 'walletConnect';

export const WALLET_TYPES = {
  METAMASK: 'metamask',
  WALLET_CONNECT: 'wallet connect',
};

export const BSCMainnetChainId = '0x38';
export const BSCMainnetChainIdDec = 56;
export const BSCTestnetChainId = '0x61';
export const BSCTestnetChainIdDec = 97;

export const EtherMainnetChainIdDec = 1;
export const EtherTestnetChainId = '0x4';
export const EtherTestnetChainIdDec = 4;

export const PolygonMainnetChainIdDec = 137;
export const PolygonTestnetChainId = '0x13881';
export const PolygonTestnetChainIdDec = 80001;

export const CHAIN_INFO = {
  BSC: {
    name: 'Binance Smart Chain',
    value: BSCMainnetChainIdDec,
    valueString: BSCMainnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Binance Smart Chain - Mainnet',
    url: 'https://bscscan.com',
    suffixToken: 'BEP-20',
    explorerName: 'BSCscan',
    suffixKey: '',
  },
  BSC_TESTNET: {
    name: 'Binance Smart Chain Testnet',
    value: BSCTestnetChainIdDec,
    valueString: BSCTestnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Binance Smart Chain - Testnet',
    url: 'https://testnet.bscscan.com',
    suffixToken: 'BEP-20',
    explorerName: 'BSCscan',
    suffixKey: '',
  },
  ETHER: {
    name: 'Ethereum',
    value: EtherMainnetChainIdDec,
    valueString: EtherMainnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Ethereum - Mainnet',
    url: 'https://etherscan.io',
    suffixToken: 'ERC-20',
    explorerName: 'Etherscan',
    suffixKey: '_ETH',
  },
  ETHER_TESTNET: {
    name: 'Ethereum Testnet (Rinkeby)',
    value: EtherTestnetChainIdDec,
    valueString: EtherTestnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Ethereum (Rinkeby) - Testnet',
    url: 'https://rinkeby.etherscan.io',
    suffixToken: 'ERC-20',
    explorerName: 'Etherscan',
    suffixKey: '_ETH',
  },
  POLYGON: {
    name: 'Polygon',
    value: PolygonMainnetChainIdDec,
    valueString: PolygonMainnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Polygon - Mainnet',
    url: 'https://polygonscan.com',
    suffixToken: 'ERC-20',
    explorerName: 'Polygonscan',
    suffixKey: '_POL',
  },
  POLYGON_TESTNET: {
    name: 'Polygon Mumbai Testnet',
    value: PolygonTestnetChainIdDec,
    valueString: PolygonTestnetChainIdDec.toString(),
    icon: '',
    textWarning: 'Polygon Mumbai - Testnet',
    url: 'https://mumbai.polygonscan.com',
    suffixToken: 'ERC-20',
    explorerName: 'Polygonscan',
    suffixKey: '_POL',
  },
};

export const ETH_CHAIN_ID = CHAIN_INFO.ETHER.value;
export const BSC_CHAIN_ID = CHAIN_INFO.BSC.value;
export const POLYGON_CHAIN_ID = CHAIN_INFO.POLYGON.value;
export const ETH_CHAIN_ID_TESTNET = CHAIN_INFO.ETHER_TESTNET.value;
export const BSC_CHAIN_ID_TESTNET = CHAIN_INFO.BSC_TESTNET.value;
export const POLYGON_CHAIN_ID_TESTNET = CHAIN_INFO.POLYGON_TESTNET.value;

export const APP_NETWORKS_SUPPORT = {
  [ETH_CHAIN_ID]: {
    details: {
      chainId: `0x${(+ETH_CHAIN_ID).toString(16)}`,
      chainName: CHAIN_INFO.ETHER.name,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_MAINNET[ETH_CHAIN_ID]],
      blockExplorerUrls: [CHAIN_INFO.ETHER.url],
    },
  },
  [BSC_CHAIN_ID]: {
    details: {
      chainId: `0x${(+BSC_CHAIN_ID).toString(16)}`,
      chainName: CHAIN_INFO.BSC.name,
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_MAINNET[BSC_CHAIN_ID]],
      blockExplorerUrls: [CHAIN_INFO.BSC.url],
    },
  },
  [POLYGON_CHAIN_ID]: {
    details: {
      chainId: `0x${(+POLYGON_CHAIN_ID).toString(16)}`,
      chainName: CHAIN_INFO.POLYGON.name,
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_MAINNET[POLYGON_CHAIN_ID]],
      blockExplorerUrls: [CHAIN_INFO.POLYGON.url],
    },
  },

  [ETH_CHAIN_ID_TESTNET]: {
    details: {
      chainId: `0x${(+ETH_CHAIN_ID_TESTNET).toString(16)}`,
      chainName: CHAIN_INFO.ETHER_TESTNET.name,
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_TESTNET[ETH_CHAIN_ID_TESTNET]],
      blockExplorerUrls: [CHAIN_INFO.ETHER_TESTNET.url],
    },
  },
  [BSC_CHAIN_ID_TESTNET]: {
    details: {
      chainId: `0x${(+BSC_CHAIN_ID_TESTNET).toString(16)}`,
      chainName: CHAIN_INFO.BSC_TESTNET.name,
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_TESTNET[BSC_CHAIN_ID_TESTNET]],
      blockExplorerUrls: [CHAIN_INFO.BSC_TESTNET.url],
    },
  },
  [POLYGON_CHAIN_ID_TESTNET]: {
    details: {
      chainId: `0x${(+POLYGON_CHAIN_ID_TESTNET).toString(16)}`,
      chainName: CHAIN_INFO.POLYGON_TESTNET.name,
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: [LIST_NETWORK_RPC_TESTNET[POLYGON_CHAIN_ID_TESTNET]],
      blockExplorerUrls: [CHAIN_INFO.POLYGON_TESTNET.url],
    },
  },
};
