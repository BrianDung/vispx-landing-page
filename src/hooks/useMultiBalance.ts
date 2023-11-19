import { useWeb3React } from '@web3-react/core';
import BigNumber from 'bignumber.js';
import { get } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Erc20ABI from 'src/web3/abis/erc20.json';
import { getContract } from 'src/web3/helpers/getContract';
import { useListToken } from './useListToken';

export const useMultiBalance = () => {
  const tokens = useListToken();
  const { provider, account } = useWeb3React();
  const { accessToken } = useSelector((state: any) => ({
    accessToken: get(state, 'user.accessToken', ''),
  }));
  const [balances, setBalances] = useState<BigNumber[]>();

  const getAllBalance = async () => {
    if (!provider || !tokens) return;
    const amountPromises = [];
    for (const item of tokens) {
      const contract = getContract<any>(Erc20ABI, item.address, provider?.getSigner());
      amountPromises.push(contract.balanceOf(account));
    }
    try {
      const realAmounts = await Promise.all(amountPromises);
      const balance = tokens.map((item: any, index: number) => ({
        ...item,
        balance: new BigNumber(realAmounts[index]?.toString())
          .div(new BigNumber(10).pow(item.decimals || 0))
          .toString(),
      }));
      setBalances(balance);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getAllBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, accessToken, account]);

  return { balances, getAllBalance };
};
