import Erc20ABI from 'src/web3/abis/erc20.json';
import { useContract } from './useContract';

export const useErc20Contract = (address: string): any | null => {
  return useContract<any>(Erc20ABI, address);
};
