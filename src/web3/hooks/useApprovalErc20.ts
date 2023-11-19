import { useWeb3React } from '@web3-react/core';
import { utils } from 'ethers';
import { useEffect, useState } from 'react';
import { TX_STATUS } from 'src/types/transaction';
import { useErc20Contract } from '../contracts/useErc20Contract';
import { voteeToast } from 'src/components/Toast';
import BigNumber from 'bignumber.js';
import get from 'lodash/get';

type TypeTryApprove = {
  amountToApprove: string;
  onSuccess?: () => void;
};

const NOT_ENOUGH_ALLOWANCE_TEXT = 'Insufficient allowance';

export const useApprovalToken = (token: string, spender: string, skip = false) => {
  const isAddress = utils.isAddress(token) && utils.isAddress(spender);
  const { account } = useWeb3React();
  const tokenContract = useErc20Contract(token);
  const [approveStatus, setApproveStatus] = useState(TX_STATUS.UNKNOWN);
  const [getAllowanceStatus, setGetAllowanceStatus] = useState(TX_STATUS.UNKNOWN);
  const [allowance, setAllowance] = useState<string>();

  const getAllowance = async () => {
    try {
      setGetAllowanceStatus(TX_STATUS.WAITING);
      const res = await tokenContract.allowance(account, spender);
      const allowance = utils.formatUnits(res.toString(), 18);
      setAllowance(allowance);
      setGetAllowanceStatus(TX_STATUS.UNKNOWN);
      return allowance;
    } catch (e) {
      console.log(e);
      voteeToast.error('Network error');
    }
  };

  const tryApprove = async ({ amountToApprove, onSuccess }: TypeTryApprove) => {
    try {
      setApproveStatus(TX_STATUS.WAITING);

      const txn = await tokenContract.approve(
        spender,
        utils.parseUnits(amountToApprove, 18),
      );
      await txn.wait();
      const currentAllowance = await getAllowance();

      if (BigNumber(currentAllowance!).lt(amountToApprove)) {
        throw new Error(NOT_ENOUGH_ALLOWANCE_TEXT);
      }

      onSuccess?.();
      setApproveStatus(TX_STATUS.SUCCEED);
      voteeToast.success('Grant permission to manage asset', 'Permission granted');
      return currentAllowance;
    } catch (error) {
      setApproveStatus(TX_STATUS.FAILED);
      console.error(error);
      const errorMessage = get(error, 'message', '') as string;

      if (errorMessage?.includes(NOT_ENOUGH_ALLOWANCE_TEXT)) {
        voteeToast.error('Failed to Grant', NOT_ENOUGH_ALLOWANCE_TEXT);
        return;
      }

      voteeToast.error('Failed to Grant', 'Failed to grant');
    }
  };

  useEffect(() => {
    if (account && isAddress && !skip) {
      getAllowance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, isAddress, token]);

  return {
    allowance,
    tryApprove,
    getAllowanceStatus,
    approveStatus,
    getAllowance,
  };
};
