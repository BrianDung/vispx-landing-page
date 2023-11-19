import { initializeConnector } from '@web3-react/core';
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2';
const RPC_URLS: { [chainId: number]: string } = {
  [process.env.REACT_APP_CHAIN_ID || 11155111]:
    process.env.REACT_APP_RPC_URL ||
    'https://twilight-newest-sound.ethereum-sepolia.discover.quiknode.pro/c26f3d0cfa298836ebe6eecc5ec4ef4b76964a44/',
};
export const [walletConnect, walletConnectHooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: process.env.WALLET_CONNECT_PROJECT_ID || '9d662d196fc0e42029d6f2d541260b94',
        chains: [Number(process.env.REACT_APP_CHAIN_ID || 11155111)],
        showQrModal: true,
        rpcMap: RPC_URLS,
      },
    }),
);
