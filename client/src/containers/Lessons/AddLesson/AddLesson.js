import React, {Component} from 'react';
import classes from './AddLesson.css';
import TeacherService from '../../../components/Teachers/TeacherService';
import StudentService from '../../../components/Students/StudentService';
import ResourceService from '../../../components/Resources/ResourceService';
import LessonService from '../LessonService';

class AddLesson extends Component {
  state = {
    formVisible: false,
    lesson: '', 
    teacher: '',
    student: '',
    notes: '',
    resource: '',
    teachers: [],
    students: [],
    resources: [],
    lessons: []
  }

  componentDidMount(){
    TeacherService.fetchTeachers()
    .then(teachers => this.setState({teachers: teachers}))

    StudentService.fetchStudents()
    .then(students => this.setState({students: students}))

    ResourceService.fetchResources()
    .then(resources => this.setState({resources: resources}))
  }

  handleShowForm = (event) => {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  handleTeacherSelect = (event) => {
    this.setState({
      teacher: this.state.teachers.find(teacher => teacher.lastname === event.target.value)
    })
  };

  handleStudentSelect = (event) => {
    this.setState({
      student: this.state.students.find(student => student.lastname === event.target.value)
    })
  };

  handleResourceSelect = (event) => {
    this.setState({
      resource: this.state.resources.find(resource => resource.title === event.target.value)
    })
  };

  handleSubmit = () => {
    const lessonData = {
      teacher_id: this.state.teacher.id,
      student_id: this.state.student.id,
      resource_id: this.state.resource.id,
      notes: this.state.notes
    }
    
    LessonService.createLesson(lessonData)
    .then(response => console.log(response));

    this.setState({
      formVisible : false,
      lesson : '',
      teacher : '',
      student : '',
      notes : '',
      resource : '',
      teachers : [],
      students : [],
      resources : [],
      lessons : []
    });
  }
  
  render() {

    const teacherOptions = this.state.teachers.map(teacher => {
      return <option value={teacher.lastname} id={teacher.id} key={teacher.id}>{teacher.lastname}</option>
    });

    const studentOptions = this.state.students.map(student => {
      return <option value={student.lastname} id={student.id} key={student.id}>{student.lastname}</option>
    });

    const resourceOptions = this.state.resources.map(resource => {
      return <option value={resource.title} id={resource.id} key={resource.id}>{resource.title}</option>
    });

  return (
    <div className={classes.AddLesson}>
      <button onClick={(event) => this.handleShowForm(this.id)}>AddLessonForm</button>
      {this.state.formVisible ? <form onSubmit={(event)=>this.handleSubmit(event)} className={classes.AddForm}>
        <p>
          <label>TeacherSelector</label>
          <select value={this.state.teacher.lastname} onChange={(event)=> this.handleTeacherSelect(event)}>
            {teacherOptions}
          </select>
        </p>

        <p>
          <label>StudentSelector</label>
          <select value={this.state.student.lastname} onChange={(event)=> this.handleStudentSelect(event)}>
            {studentOptions}
          </select>
        </p>

        <p>
          <label>ResourceSelector</label>
          <select value={this.state.resource.title} onChange={(event)=> this.handleResourceSelect(event)}>
            {resourceOptions}
          </select>
        </p>

        <p>
          <label>Notes</label>
          <input 
            type="text"
            value={this.state.lesson.notes}
            onChange={(event) => this.setState({notes: event.target.value})}
            placeholder="notes" />
        </p>
        <button type="submit">Add lesson</button>
      </form> : null }
    </div>
    )
  }
}

export default AddLesson;
