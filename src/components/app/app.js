import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '@r/';
import {routesMap} from '@r/';
import Sidebar from '@c/sidebar';

export default @observer class extends React.Component {

  render() {
    let routerComponents = routes.map((route) => {
      return <Route
        path={route.path}
        component={route.component}
        exact={route.exact}
        key={route.path}
      />
    });

    return (
      <Router>
        <div className='container'>
          header
          <hr/>
          <div className="row">
            <div className="col col-3">
              <Sidebar/>
            </div>
            <div className="col col-9">
              <Switch>
                {routerComponents}
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
