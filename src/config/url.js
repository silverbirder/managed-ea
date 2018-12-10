/* @flow */

import { isDevelopment } from 'config/env';

export const port = 2525;
export const origin = isDevelopment
  ? `http://localhost:${port}`
  : 'https://managed-ea-dot-ma-web-tools.appspot.com' || `http://localhost:${port}`;
export const endpoint = {
  landing: '/',
  home: '/home',
  userDetail: '/users/:id',
  about: '/about',
  redirectAbout: '/redirect-about',
  fxuser: '/fxUser',
  fxUserDetail: '/fxUser/:id',
  notFound: '*',
};
