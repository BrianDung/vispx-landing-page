import { BaseContract, Contract, ContractInterface, ethers } from 'ethers';
import { Signer } from '@ethersproject/abstract-signer';

export const getContract = <T extends BaseContract>(
  abi: ContractInterface,
  address: string,
  signer?: Signer | ethers.providers.JsonRpcProvider,
): T => {
  return new Contract(address, abi, signer) as T;
};
