import {
  SET_ACCESS_TOKEN,
  SET_MY_TIER,
  SET_USER_INFO_IAO,
  SET_ROLE_AFFILIATE_IAO,
} from '../constants/user';

const initialState = {
  accessToken: '',
  myTier: '',
  infoUserIAO: '',
  roleAffiliate: '',
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_MY_TIER:
      return {
        ...state,
        myTier: action.payload,
      };
    case SET_USER_INFO_IAO:
      return {
        ...state,
        infoUserIAO: action.payload,
      };
    case SET_ROLE_AFFILIATE_IAO:
      return {
        ...state,
        roleAffiliate: action.payload,
      };

    default:
      return state;
  }
};
