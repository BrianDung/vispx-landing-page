import { SET_THEME } from '../constants/theme';

const initialState = '';

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      const { theme } = action.payload;
      return theme;

    default:
      return state;
  }
};
