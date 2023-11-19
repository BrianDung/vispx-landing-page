import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useConnectWallet } from './useConnectWallet';

export function useWalletListener() {
  const { connector, account, chainId } = useWeb3React();
  const { disconnectWallet } = useConnectWallet();

  const handleLogout = (accounts: string[], removeCache = true) => {
    disconnectWallet();
  };

  const handleChainChange = (chainHex: string) => {
    // handle after
  };

  useEffect(() => {
    if (account && connector && connector.provider) {
      connector.provider?.on('chainChanged', handleChainChange);
      connector.provider?.on('accountsChanged', handleLogout);
    } else {
      connector.provider?.removeListener('chainChanged', handleChainChange);
      connector.provider?.removeListener('accountsChanged', handleLogout);
    }

    if (window) {
      (window as any).logout = handleLogout;
    }

    return () => {
      connector.provider?.removeListener('chainChanged', handleChainChange);
      connector.provider?.removeListener('accountsChanged', handleLogout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connector.provider, account]);
}
