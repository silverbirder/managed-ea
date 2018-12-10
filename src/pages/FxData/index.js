/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import Title from 'components/Title';
import type { PageProps, ReduxState, Dispatch } from 'types';
import { CSVLink } from "react-csv";
import Button from 'components/Button';
import { fetchFxUsers } from 'actions/fxUser';
import fxUser from '../../reducers/fxUser';

export default class FxData extends React.PureComponent<PageProps> {
  static loadData(dispatch: Dispatch, state: ReduxState, params: Object) {
    return dispatch(fetchFxUsers());
  }
  render() {
    const {
      fxUser: { fxUserList },
      fxUserActions: { updateList },
      fxData: { FxDataList, StartDate , EndDate , isDownloadCsv },
      fxDataActions: { fetchFxData, handleChange },
    } = this.props;
    return (
      <div>
        <Helmet title="FxData" />
        <Title>FxData Page</Title>
        <label>全てをチェックする：
          <input type="checkbox" onClick={(e) => {
            const updateData = fxUserList.map((data, i) => {
              data.isChecked = e.target.checked;
              return data;
            });
            updateList(updateData);
          }}/>
        </label>
        <table>
          <thead>
          <tr>
            <th style={{padding:5}}>check</th>
            <th style={{padding:5}}>Name</th>
          </tr>
          </thead>
          <tbody>
          {fxUserList.map((data, i) => (
            <tr key={i}>
              <td><input type="checkbox" checked={data.isChecked} onChange={(e) => {
                fxUserList[i].isChecked = e.target.checked;
                updateList(fxUserList);
              }}/></td>
              <td>{data.Name}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <label>StartDate:
          <input type="text" value={StartDate} placeholder="2018-01-01" onChange={(e) => {
            handleChange("StartDate", e.target.value);
          }}/>
        </label>
        <br/>
        <label>EndDate:
          <input type="text" value={EndDate} placeholder="2018-11-30" onChange={(e) => {
            handleChange("EndDate", e.target.value);
          }}/>
        </label>
        <Button onClick={() => {
          const filter_data = fxUserList.filter((data) => {
            return data.isChecked;
          }).map((data) => {
            return data.AccountNumber;
          });
          handleChange("isDownloadCsv", false);
          fetchFxData(filter_data, StartDate, EndDate);
        }}>create data</Button>
        <CSVLink
          data={FxDataList}
          onClick={() => {
            if(!isDownloadCsv) {
              alert("データ作成中か準備ができていません");
              return false;
            }
          }}
          filename={StartDate + "-" + EndDate + ".csv"}
        >
          Download csv
        </CSVLink>
      </div>
    );
  }
}
