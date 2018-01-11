import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchLessons } from '../../store/actions/index'
// import LessonsNew from './LessonsNew';
import Lesson from './Lesson/Lesson'
import LessonsList from '../../containers/Lessons/LessonsList'

class Lessons extends Component {

  componentDidMount() {
    this.props.fetchLessons();
  }

  render() {
    const { match, lessons } = this.props;

    return (
      <div>
        <h1>Lessons Page</h1>
        <LessonsList lessons={lessons} />
        <Switch>
          {/* <Route path={`${match.url}/new`} component={LessonsNew} /> */}
          <Route path={`${match.url}/:id`} component={Lesson} />
          <Route exact path={match.url} render={() => (
            <h3>Please select a Lesson from the list.</h3>
          )} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    lessons: state.les.lessons
  };
}

export default connect(mapStateToProps, { fetchLessons })(Lessons);
