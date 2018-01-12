import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index'
import ShowLesson from './ShowLesson/ShowLesson'
import CreateLesson from './CreateLesson/CreateLesson'
import LessonsList from './LessonsList/LessonsList'

class Lessons extends Component {

  componentDidMount() {
    console.log('[Lessons] DidMount, this.props', this.props)
    this.props.onFetchLessons();
  }

  render() {
    const { match, lessons } = this.props;

    return (
      <div>
        <hr />

        <hr />
        <h4>Lessons Page</h4>
        <LessonsList lessons={lessons} />
        <Link to={`${match.url}/new`}>Create New Lesson</Link>
        <Switch>
          <Route path={`${match.url}/new`} component={CreateLesson} />
          <Route path={`${match.url}/:id`} component={ShowLesson} />
          <Route path={match.url} exact render={() => (<h5>Please select a Lesson from the list.</h5>)} />
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

const mapDispatchToProps = dispatch => {
  return {
    onCreateLesson: (data) => dispatch(actionCreators.createLesson(data)),
    onFetchLessons: () => dispatch(actionCreators.fetchLessons())
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lessons));
export default connect(mapStateToProps, mapDispatchToProps)(Lessons);
