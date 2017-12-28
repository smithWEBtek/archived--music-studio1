import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';

class Table extends Component {
  state = {
    rows: [],
    headers: [],
    cells: []
  }

  componentDidMount() {

    console.log('props in table', this.props)
    this.setState({
      rows: this.props.rows
    })
    console.log('state rows in table:', this.props.rows)
    this.createHeaders();
  }

  createHeaders = () => {
    let row = this.state.rows[0];
    console.log('row:', row)
    // let headers = Object.keys(row)
    // this.setState({ headers: headers })
  }

  render() {
    // let headers = this.createHeaders;

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
  }
};

export default Table;
