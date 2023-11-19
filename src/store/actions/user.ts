import {
  SET_ACCESS_TOKEN,
  SET_MY_TIER,
  SET_USER_INFO_IAO,
  SET_ROLE_AFFILIATE_IAO,
} from '../constants/user';

export const setAccessTokenRedux = (payload: string) => {
  return {
    type: SET_ACCESS_TOKEN,
    payload,
  };
};
export const setStoreMyTier = (payload: string) => {
  return {
    type: SET_MY_TIER,
    payload,
  };
};

export const setStoreInfoUserIAO = (payload: any) => {
  return {
    type: SET_USER_INFO_IAO,
    payload,
  };
};

export const setRoleAffiliateIAO = (payload: any) => {
  return {
    type: SET_ROLE_AFFILIATE_IAO,
    payload,
  };
};
