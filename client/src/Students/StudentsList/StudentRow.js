import React, { Component } from 'react'
import './StudentsList.css'
import { Link } from 'react-router-dom'
import Aux from '../../hoc/Aux/Aux'

class StudentRow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likeCount: 0
    }
  }

  likeStudent = () => {
    let newCount = this.state.likeCount + 1
    this.setState({ likeCount: newCount })
  }

  render() {
    let row = (
      <Aux>
        <tr>
          <th scope="row">{this.props.student.id}</th>
          <td><Link
            to={`/students/${this.props.student.id}`}
            style={{ marginRight: '5px' }}
            onClick={this.props.close}
            key={this.props.student.id}>{this.props.student.lastname}, {this.props.student.firstname}</Link></td>
          <td>{this.props.student.email}</td>
          <td>{this.props.student.teacher_id}</td>
          <td>{this.props.student.level}</td>

          {this.props.student.active ? <td className="true">{this.props.student.active.toString()}</td> :
            <td className="false">{this.props.student.active.toString()}</td>}

          <td><button
            type='button'
            className="Success"
            onClick={this.props.close}>
            <Link
              to={`/students/${this.props.student.id}`}
              key={this.props.student.id}
            >show</Link>
          </button></td>

          {this.props.edit ?
            <td><button
              type='button'
              className="Edit"
              onClick={() => this.props.edit(this.props.student.id)}>edit
        </button></td>
            : null}

          {this.props.delete ?
            <td><button
              onClick={() => this.props.delete(this.props.student.id)}
              className="Danger">x</button></td>
            : null}

          <td><button
            onClick={() => this.likeStudent(this.props.student.id)}
            className="Success">LIKE</button></td>

          <td>{this.state.likeCount.toString()}</td>
        </tr>
      </Aux>
    )

    return (
      <Aux>
        {row}
      </Aux>
    )
  }
}

export default StudentRow
