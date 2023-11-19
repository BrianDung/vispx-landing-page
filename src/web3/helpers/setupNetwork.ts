/* eslint-disable no-console */
import { ExternalProvider } from '@ethersproject/providers';
import { toast } from 'react-toastify';
import { REACT_APP_CHAIN_ID } from '../constants/envs';
import { APP_NETWORKS_SUPPORT } from '../constants/networks';

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @param externalProvider
 * @returns Promise<true> if the setup succeeded, false otherwise
 */

declare let window: any;

export const setupNetwork = async (externalProvider?: ExternalProvider): Promise<boolean> => {
  const provider = externalProvider || window.ethereum;
  const chainId = parseInt(REACT_APP_CHAIN_ID as string, 10);

  if (!APP_NETWORKS_SUPPORT[Number(chainId)]) {
    toast.error('Not support network!');
    return false;
  }

  if (provider) {
    try {
      const networkInfo = APP_NETWORKS_SUPPORT[Number(chainId)];
      if (networkInfo) {
        try {
          await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networkInfo.details?.chainId }],
          });
          return true;
        } catch (error: any) {
          //Reject metamask
          if (error.code === 4001) {
            return false;
          }

          // This error code indicates that the chain has not been added to MetaMask.
          if (error.code === 4902) {
            try {
              await provider.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    ...(networkInfo.details || {}),
                  },
                ],
              });
              return true;
            } catch (addError) {
              return false;
            }
          } else {
            return false;
          }
        }
      } else return false;
    } catch (e) {
      return false;
    }
  } else {
    console.error(
      `Can't setup the ${
        APP_NETWORKS_SUPPORT[Number(chainId)].details.chainName
      } network on metamask because window.ethereum is undefined`,
    );

    return false;
  }
};
