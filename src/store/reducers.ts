import { combineReducers } from 'redux';
import { balancesReducer } from './reducers/balances';
import { accountReducer } from './reducers/account';
import { networkReducer } from './reducers/network';
import { userReducer } from './reducers/user';
import { themeReducer } from './reducers/theme';

const appReducer = combineReducers({
  networkIsWrong: networkReducer,
  currentAccount: accountReducer,
  balances: balancesReducer,
  user: userReducer,
  theme: themeReducer,
});

export const rootReducer = (state: any, action: any) => appReducer(state, action);
