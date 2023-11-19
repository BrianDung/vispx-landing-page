import { CLEAR_CURRENT_ACCOUNT, CURRENT_ACCOUNT } from '../constants/account';

export const clearCurrentAccount = () => {
  return {
    type: CLEAR_CURRENT_ACCOUNT,
  };
};

export const setCurrentAccount = (account: string) => {
  return {
    type: CURRENT_ACCOUNT,
    payload: { account },
  };
};
