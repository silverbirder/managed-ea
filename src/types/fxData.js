/* @flow */

export type FxData = {
  accountNumber: number,
  balance: number,
  closePrice: number,
  closeTime: Date,
  commission: number,
  expiration: Date,
  lots: number,
  message: string,
  openPrice: number,
  openTime: Date,
  period: string,
  profit: number,
  stopLoss: number,
  swap: number,
  symbol: number,
  takeProfit: number,
  ticket: number,
  type: string,
};
export type FxDataState = {
  FxData: FxData,
};
export type FxDataAction =
  | {
      type: 'FETCH_FX_DATA',
      payload: FxData,
    }
