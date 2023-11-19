import { SET_THEME } from '../constants/theme';

export const setTheme = (theme: string) => {
  return {
    type: SET_THEME,
    payload: { theme },
  };
};
