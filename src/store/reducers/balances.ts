import { CLEAR_ALL_BALANCES, SET_TOKEN_BALANCE } from 'src/store/constants/balances';

const initialState = {};

export const balancesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_ALL_BALANCES:
      return {};

    case SET_TOKEN_BALANCE:
      const { addressToken, balanceToken } = action.payload;
      return {
        ...state,
        [addressToken]: balanceToken,
      };

    default:
      return state;
  }
};
