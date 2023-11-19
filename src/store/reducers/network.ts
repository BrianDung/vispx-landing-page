import { SET_WRONG_NETWORK } from '../constants/network';

const initialState = false;

export const networkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_WRONG_NETWORK:
      const { value } = action.payload;
      return value;

    default:
      return state;
  }
};
