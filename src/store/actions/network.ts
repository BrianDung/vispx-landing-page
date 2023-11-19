import { SET_WRONG_NETWORK } from '../constants/network';

export const setIsWrongNetWork = (value: boolean) => {
  return {
    type: SET_WRONG_NETWORK,
    payload: { value },
  };
};
