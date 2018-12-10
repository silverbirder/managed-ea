/* @flow */

import axios from 'axios';
import type { Dispatch, ThunkAction } from 'types';
import { origin } from 'config/url';

export function fetchFxUser(id: string): ThunkAction {
  return (dispatch: Dispatch) =>
    axios
      .get(origin+'/api/get/1.0/fxUser?id='+id)
      .then(res => {
        dispatch({
          type: 'FETCH_FX_USER',
          payload: res.data[0][0],
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}
export function fetchFxUsers(): ThunkAction {
  return (dispatch: Dispatch) =>
    axios
      .get(origin+'/api/get/1.0/fxUsers')
      .then(res => {
        dispatch({
          type: 'FETCH_FX_USERS',
          payload: res.data[0],
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}
export function addFxUser(Name: string, AccountNumber: number, Invalid: boolean, Key: string): ThunkAction {
  return (dispatch: Dispatch) =>
    axios
      .post(origin+'/api/add/1.0/fxUser', {
        Name: Name,
        AccountNumber: AccountNumber,
        Invalid: Invalid,
        Key: Key,
      })
      .then(res => {
        dispatch({
          type: 'ADD_FX_USER',
          payload: res,
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