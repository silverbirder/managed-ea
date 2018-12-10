/* @flow */

import type { FxDataState, FxDataAction } from 'types/fxData';

export const initialState = {
  fxData: {
    account0: 0,
    balance: 0,
    closePrice: 0,
    closeTime: new Date(),
    commission: 0,
    expiration: new Date(),
    lots: 0,
    message: '',
    openPrice: 0,
    openTime: new Date(),
    period: '',
    profit: 0,
    stopLoss: 0,
    swap: 0,
    symbol: 0,
    takeProfit: 0,
    ticket: 0,
    type: '',
  },
};
export default (state: FxDataState = initialState, action: FxDataAction) => {
  switch (action.type) {
    case 'FETCH_FX_DATA':
      return {
        ...state,
        status: {
          ...state.status,
        },
      };
    default:
      return state;
  }
};
