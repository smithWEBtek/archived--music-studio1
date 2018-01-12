import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import * as actionCreators from '../../store/actions/index'
import ShowResource from './ShowResource/ShowResource'
import CreateResource from './CreateResource/CreateResource'
import ResourcesList from './ResourcesList/ResourcesList'


class Resources extends Component {

  componentDidMount() {
    console.log('[Resources] DidMount, this.props', this.props)
    this.props.onFetchResources();
  }

  render() {
    const { match, resources } = this.props;

    return (
      <div>
        <hr />
        <hr />
        <h5>Resources Page</h5>
        <ResourcesList resources={resources} />
        <Link to={`${match.url}/new`}>Create New Resource</Link>
        <Switch>
          <Route path={`${match.url}/new`} component={CreateResource} />
          <Route path={`${match.url}/:id`} component={ShowResource} />
          <Route path={match.url} exact render={() => (<h5>Please select a Resource from the list.</h5>)} />
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    resources: state.res.resources
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateResource: (data) => dispatch(actionCreators.createResource(data)),
    onFetchResources: () => dispatch(actionCreators.fetchResources())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
