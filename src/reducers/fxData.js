/* @flow */

import type { FxDataState, FxDataAction } from 'types/fxData';

export const initialState = {
  FxData: {
    accountNumber: 0,
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
  FxDataList: [],
  StartDate: '',
  EndDate: '',
  isDownloadCsv: false,
};
export default (state: FxDataState = initialState, action: FxDataAction) => {
  switch (action.type) {
    case 'FETCH_FX_DATA':
      return {
        ...state,
        FxDataList: action.payload,
        isDownloadCsv: true,
      };
    case 'HANDLE_CHANGE':
      const key = action.payload.key;
      const value = action.payload.value;
      return {
        ...state,
        [key]: value,
      };
    default:
      return state;
  }
};
