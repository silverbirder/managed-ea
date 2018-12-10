/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import { fetchFxUsers } from 'actions/fxUser';
import type { PageProps, ReduxState, Dispatch } from 'types';
import Button from 'components/Button';

export default class FxUser extends React.PureComponent<PageProps> {
  static loadData(dispatch: Dispatch, state: ReduxState, params: Object) {
    return dispatch(fetchFxUsers());
  }
  render() {
    const {
      fxUser: { fxUserList },
    } = this.props;

    return (
      <div>
        <Helmet title="FxUser" />
        <Title>Fx User</Title>
        <Button onClick={() => {
          location.href = "/fxUser/new";
        }}>Add User</Button>
        <table>
          <thead>
            <tr>
              <th style={{padding:5}}>edit</th>
              <th style={{padding:5}}>Name</th>
              <th style={{padding:5}}>AccountNumber</th>
              <th  style={{padding:5}}>Security</th>
            </tr>
          </thead>
          <tbody>
            {fxUserList.map((data, i) => (
                <tr key={i}>
                  <td><a href={`/fxUser/${data.Key}`}>edit</a></td>
                  <td>{data.Name}</td>
                  <td>{data.AccountNumber}</td>
                  <td>{data.Invalid == false ? "Release": "Limited"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
