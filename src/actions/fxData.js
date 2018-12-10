/* @flow */

import axios from 'axios';
import type { Dispatch, ThunkAction } from 'types';
import { origin } from 'config/url';

export function fetchFxData(AccountNumber: Object, StartDate: string, EndDate: string): ThunkAction {
  return (dispatch: Dispatch) =>
    axios
      .post(`${origin}/api/get/1.0/fxData`, {
        AccountNumber,
        StartDate,
        EndDate,
      })
      .then(res => {
        dispatch({
          type: 'FETCH_FX_DATA',
          payload: res.data[0],
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}
export function handleChange(key: string, value: Object): ThunkAction {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'HANDLE_CHANGE',
      payload: {
        key,
        value
      },
    });
  };
}

