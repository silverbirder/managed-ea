/* @flow */

import type { FxUserState, FxUserAction } from 'types/fxUser';

export const initialState = {
  fxUser: {
    AccountNumber: 0,
    Invalid: false,
    Name: '',
    Key: '',
  },
  fxUserList: [],
  status: {
    isFetchedFxUserList: false,
  },
};

export default (state: FxUserState = initialState, action: FxUserAction) => {
  switch (action.type) {
    case 'FETCH_FX_USER':
      return {
        ...state,
        fxUser: action.payload,
        status: {
          ...state.status,
        },
      };
    case 'FETCH_FX_USERS':
      return {
        ...state,
        fxUserList: action.payload,
        status: {
          ...state.status,
          isFetchedFxUserList: true,
        },
      };
    case 'ADD_FX_USER':
      return {
        ...state,
        status: {
          ...state.status,
        },
      };
    case 'HANDLE_CHANGE':
      const key = action.payload.key;
      const value = action.payload.value;
      return {
        ...state,
        fxUser: {
          ...state.fxUser,
          [key] : value,
        },
      };
    default:
      return state;
  }
};
