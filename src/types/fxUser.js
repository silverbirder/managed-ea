/* @flow */

export type FxUser = {
  AccountNumber: number,
  Invalid: boolean,
  Name: string,
  Key: string,
};
export type FxUserState = {
  fxUser: FxUser,
  fxUserList: FxUser[],
  status: {
    isFetchedFxUserList: boolean,
  },
};
export type FxUserAction =
  | {
      type: 'FETCH_FX_USER',
      payload: FxUser,
    }
  | {
      type: 'FETCH_FX_USERS',
      payload: FxUser[],
    }
  | {
    type: 'ADD_FX_USER',
  }
  | {
  type: 'HANDLE_CHANGE',
  payload: {
    key: string,
    value: Object,
  }
};
