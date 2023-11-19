import { BaseContract, ContractInterface, ethers } from 'ethers';
import { getContract } from '../helpers/getContract';
import { useMemo } from 'react';
import { useWeb3React } from '@web3-react/core';

export const useContract = <T extends BaseContract>(
  abi: ContractInterface,
  address: string,
): T | null => {
  const { provider } = useWeb3React();

  return useMemo(() => {
    if (!ethers.utils.isAddress(address)) {
      return null;
    }

    let providerRpc;
    if (!provider) {
      providerRpc = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
    }

    return getContract<T>(abi, address, provider?.getSigner() || providerRpc);
  }, [abi, address, provider]);
};
