import React, { Component } from 'react'
import styles from './Modal.css'
// import Aux from '../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'
import { Container } from 'reactstrap'

class Modal extends Component {

  render() {
    return (
      <Container>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show
              ? 'translateY(0)'
              : 'translateY(-100vh)',
            opacity: this.props.show
              ? '1'
              : '0'
          }}>
          {this.props.children}
        </div>
      </Container>

    )
  }
}

export default Modal
