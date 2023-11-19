import LimitOrderFeatureABI from 'src/web3/abis/limitOrderFeature.json';
import { useContract } from './useContract';

export const useLimitOrderFeatureContract = (): any | null => {
  return useContract<any>(
    LimitOrderFeatureABI,
    process.env.REACT_APP_LIMIT_ORDER_FEATURE_CONTRACT_ADDRESS as string,
  );
};
