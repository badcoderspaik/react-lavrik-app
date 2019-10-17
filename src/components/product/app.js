import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '@r/';

export default @observer class extends React.Component {

  render() {
    let comps = routes.map((route) => {
      return <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
        key={route.path}
      />
    });

    return (
      <Router>
        <div className='container-fluid'>
          <Switch>
            {comps}
          </Switch>
        </div>
      </Router>
    );
  }
}
