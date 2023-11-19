import { CLEAR_CURRENT_ACCOUNT, CURRENT_ACCOUNT } from '../constants/account';

const initialState = '';

export const accountReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLEAR_CURRENT_ACCOUNT:
      return '';

    case CURRENT_ACCOUNT:
      const { account } = action.payload;
      return account;

    default:
      return state;
  }
};
