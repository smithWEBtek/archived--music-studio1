import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index'

import { Container } from 'reactstrap'
import Modal from '../UI/Modal/Modal'

import Teacher from './Teacher/Teacher'
import CreateTeacher from './CreateTeacher/CreateTeacher'
import EditTeacher from './EditTeacher/EditTeacher'
import TeachersList from './TeachersList/TeachersList'

class Teachers extends Component {
  state = {
    teacher: null,
    showTeachersList: false,
    createTeacher: false,
    editTeacher: false
  }

  componentDidMount() {
    // this.props.onFetchTeachers();
  }

  //********SHOW_TEACHERS_LIST form handling********************
  showTeachersList = () => {
    this.setState({
      showTeachersList: true
    })
  }

  closeTeachersList = () => {
    this.setState({ showTeachersList: false })
  }

  //********SHOW_TEACHER form handling**************************
  showTeacherClose = () => {
    this.setState({ showTeacher: false })
  }

  //********CREATE_TEACHER form handling ***********************
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
    return (
      <Container>
        <hr />
        <button onClick={() => this.showTeachersList()}><Link to='/teachers'>ALL teachers</Link></button>

        {/*********CREATE TEACHER MODAL********************/}
        <button onClick={this.createTeacherForm}>Add Teacher</button>
        <Modal
          show={this.state.createTeacher}
          modalClosed={this.createTeacherFormCancel}>
          <CreateTeacher
            createTeacher={(newTeacherData) => this.createTeacher(newTeacherData)}
            createTeacherCancel={this.createTeacherFormCancel} />
        </Modal>

        {/**********EDIT TEACHER MODAL*********************/}
        <Modal
          show={this.state.editTeacher}
          modalClosed={this.editTeacherCancelHandler}>
          {this.state.teacher ? <EditTeacher
            id={this.state.teacher.id}
            firstname={this.state.teacher.firstname}
            lastname={this.state.teacher.lastname}
            email={this.state.teacher.email}
            active={this.state.teacher.active}
            close={() => this.closeEditTeacherForm()}
            updateTeacher={(data) => this.editTeacherUpdate(data)}
          /> : null}
        </Modal>

        {/**********TEACHERS LIST************************/}
        <div>
          <Switch>
            <Route path={`${match.url}/:id/edit`} component={EditTeacher} />
            <Route path={`${match.url}/new`} exact component={CreateTeacher} />
            <Route path={`${match.url}/:id`} component={Teacher} />
            <Route path={match.url} exact />
          </Switch>
        </div>
        <div>
          {this.state.showTeachersList ?
            <div><h5 className="IndexHeaderBackground">ALL teachers</h5>
              <TeachersList
                teachers={teachers}
                edit={(id) => this.showEditTeacherForm(id)}
                delete={(id) => this.props.onDeleteTeacher(id)}
                close={() => this.closeTeachersList()}
              /></div> : null}
        </div>
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
    onFetchTeachers: () => dispatch(actions.fetchTeachers()),
    onCreateTeacher: (data) => dispatch(actions.createTeacher(data)),
    onUpdateTeacher: (data) => dispatch(actions.updateTeacher(data)),
    onDeleteTeacher: (id) => dispatch(actions.deleteTeacher(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teachers);
