/* @flow */

export type UiState = {
  isOpenMenu: boolean,
  isOpenModal: boolean,
  error: string,
};
export type UiAction =
  | { type: 'OPEN_MENU' }
  | { type: 'CLOSE_MENU' }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'HIDE_ERROR' }
  | {
      type: 'SHOW_ERROR',
      payload: {
        error: string,
      },
    };
