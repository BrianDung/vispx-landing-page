import Bep20ABI from 'src/web3/abis/bep20.json';
import { useContract } from './useContract';

export const useBep20Contract = (address: string): any | null => {
  return useContract<any>(Bep20ABI, address);
};
