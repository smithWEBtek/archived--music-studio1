import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';

const table = (props) => {


  // createHeaders = () => {
  //   let row = this.props.rows[0];
  //   console.log('row:', row)
  //   // let headers = Object.keys(row)
  //   // this.setState({ headers: headers })
  // }


  return (
    <Aux>
      <hr />
      <table>
        <thead>
          <tr>
            {/* {headers} */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* {cells} */}
          </tr>
        </tbody>
      </table>
      <div>
        <hr />
      </div>
    </Aux>
  )
};

export default Table;
