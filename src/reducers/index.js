/* @flow */

import { combineReducers } from 'redux';
import { nprogress } from 'redux-nprogress';
import user from 'reducers/user';
import ui from 'reducers/ui';
import fxUser from 'reducers/fxUser';
import fxData from 'reducers/fxData';

const reducers = {
  nprogress,
  user,
  ui,
  fxUser,
  fxData,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
