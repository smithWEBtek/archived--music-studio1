import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index'

import { Container, Row, Col } from 'reactstrap'
// import styles from './Teachers.css'
import Modal from '../../UI/Modal/Modal'

import Teacher from './Teacher/Teacher'
import CreateTeacher from './CreateTeacher/CreateTeacher'
import EditTeacher from './EditTeacher/EditTeacher'
import TeachersList from './TeachersList/TeachersList'

class Teachers extends Component {
  state = {
    teacher: null,
    showTeacher: false,
    showTeachersList: true,
    createTeacher: false,
    editTeacher: false
  }

  componentDidMount() {
    this.props.onFetchTeachers();
  }

  showTeachersListToggler = () => {
    let toggle = this.state.showTeachersList
    this.setState({ showTeachersList: !toggle })
  }

  //********SHOW_TEACHER form handling**************************
  showTeacherClose = () => {
    this.setState({ showTeacher: false })
  }

  //********CREATE_TEACHER form handling **************************
  createTeacherForm = () => {
    this.setState({ createTeacher: true })
  }

  createTeacherFormCancel = () => {
    this.setState({ createTeacher: false })
  }

  createTeacher = (newTeacherData) => {
    this.props.onCreateTeacher(newTeacherData)
    this.setState({ createTeacher: false })
  }

  //********EDIT_TEACHER form handling**************************
  showEditTeacherForm = (id) => {
    let teacherData = this.props.teachers.filter(teacher => teacher.id === id)[0]
    this.setState({
      teacher: teacherData,
      editTeacher: true
    })
  }

  editTeacherUpdate = (data) => {
    this.props.onUpdateTeacher(data)
    this.setState({
      editTeacher: false,
      teacher: null
    })
  }

  closeEditTeacherForm = () => {
    this.setState({
      editTeacher: false,
      teacher: null
    })
  }

  render() {
    const { match, teachers } = this.props;
    let clickableNames = teachers.map((teacher, index) => {
      return (
        <Link to={`/teachers/${teacher.id}`}
          style={{ marginRight: '12px' }}
          key={teacher.id}
          onClick={() => this.setState({ showTeachersList: false })}
        >{teacher.lastname}
        </Link>
      )
    })

    return (
      <Container>
        <hr />
        <h4>Teachers</h4>
        <button onClick={() => this.showTeachersListToggler()}>Toggle ALL</button>

        {/*********CREATE TEACHER MODAL********************************************/}
        <button onClick={this.createTeacherForm}>Add Teacher</button>
        <Modal
          show={this.state.createTeacher}
          modalClosed={this.createTeacherFormCancel}>
          <CreateTeacher
            createTeacher={(newTeacherData) => this.createTeacher(newTeacherData)}
            createTeacherCancel={this.createTeacherFormCancel} />
        </Modal>

        {/**********EDIT TEACHER MODAL**********************************************/}
        <Modal
          show={this.state.editTeacher}
          modalClosed={this.editTeacherCancelHandler}>
          {this.state.teacher ? <EditTeacher
            id={this.state.teacher.id}
            firstname={this.state.teacher.firstname}
            lastname={this.state.teacher.lastname}
            email={this.state.teacher.email}
            close={() => this.closeEditTeacherForm()}
            updateTeacher={(data) => this.editTeacherUpdate(data)}
          /> : null}
        </Modal>

        {/**********CLICKABLE NAMES**********************************************/}
        <Container>
          <Row>
            <Col>
              {clickableNames}
            </Col>
          </Row>
        </Container>

        {/**********TEACHERS LIST**********************************************/}
        <div>
          {this.state.showTeachersList ? <TeachersList
            teachers={teachers}
            show={(id) => this.state.showTeacher(id)}
            edit={(id) => this.showEditTeacherForm(id)}
            delete={(id) => this.props.onDeleteTeacher(id)}
            close={() => this.showTeachersListToggler()}
          /> : null}
        </div>

        <Switch>
          <Route path={`${match.url}/:id/edit`} component={EditTeacher} />
          <Route path={`${match.url}/new`} exact component={CreateTeacher} />
          <Route path={`${match.url}/:id`} component={Teacher} />
          <Route path={match.url} exact render={() => (<p>Toggle ALL or click a Teacher from the list.</p>)} />
        </Switch>
        <hr />
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    teachers: state.tch.teachers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTeachers: () => dispatch(actionCreators.fetchTeachers()),
    onCreateTeacher: (data) => dispatch(actionCreators.createTeacher(data)),
    onUpdateTeacher: (data) => dispatch(actionCreators.updateTeacher(data)),
    onDeleteTeacher: (id) => dispatch(actionCreators.deleteTeacher(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
