/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import { fetchFxUser } from 'actions/fxUser';
import type { PageProps, ReduxState, Dispatch } from 'types';
import Button from 'components/Button';

export default class FxUserDetail extends React.PureComponent<PageProps> {
  static loadData(dispatch: Dispatch, state: ReduxState, params: Object) {
    return dispatch(fetchFxUser(params.id));
  }

  render() {
    const {
      fxUser: { fxUser },
      fxUserActions: { addFxUser , handleChange },
    } = this.props;

    return (
      <div>
        <Helmet title="FxUserDetail" />
        <Title>Fx User Detail</Title>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>AccountNumber
                    <input type="text" value={fxUser.AccountNumber} onChange={(e) => {
                      handleChange("AccountNumber", e.target.value);
                    }}/>
                  </label>
                </td>
                <td>
                  <label>Name
                    <input type="text" value={fxUser.Name}  onChange={(e) => {
                      handleChange("Name", e.target.value);
                    }}/>
                  </label>
                </td>
                <td>
                  <label>Security Release
                    <input type="checkbox" checked={!fxUser.Invalid} onChange={(e) => {
                      handleChange("Invalid", !e.target.checked);
                    }}/>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <Button type="button" onClick={() => {
            addFxUser(fxUser.Name, fxUser.AccountNumber, fxUser.Invalid, fxUser.Key);
            location.href = "/fxUser/";
          }}>Save</Button>
        </div>
      </div>
    );
  }
}
