/* @flow */

import axios from 'axios';
import type { Dispatch, ThunkAction } from 'types';

export function fetchFxData(id: string): ThunkAction {
  return (dispatch: Dispatch) =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        dispatch({
          type: 'FETCH_FX_DATA',
          payload: res.data,
        });
      })
      .catch(err => {
        console.error(err); // eslint-disable-line no-console
      });
}

