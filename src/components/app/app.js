import React from 'react';
import {observer, Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '@r/';
import {routesMap} from '@r/';
import Sidebar from '@c/sidebar';
import stores from '@s/';

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
      <Provider stores={stores}>
        <Router>
          <div className='container'>
            <h3>Products in cart: {stores.cart.count}</h3>
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
      </Provider>
    );
  }
}
