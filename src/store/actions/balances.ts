import { CLEAR_ALL_BALANCES, SET_TOKEN_BALANCE } from 'src/store/constants/balances';

export const clearAllBalances = () => {
  return {
    type: CLEAR_ALL_BALANCES,
  };
};

export const setBalanceToken = (addressToken: string, balanceToken: string) => {
  return {
    type: SET_TOKEN_BALANCE,
    payload: { addressToken, balanceToken },
  };
};
