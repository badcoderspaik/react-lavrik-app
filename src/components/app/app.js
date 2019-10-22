import React from 'react';
import withStore from '@/hocs/WithStore';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '@r/';
import {routesMap} from '@r/';
import Sidebar from '@c/sidebar';
import stores from '@s/';

class App extends React.Component {

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
          <div className='row' style={{justifyContent: 'space-between'}}>
            <div className='col col-6 alert-warning'>
              <h3>Header</h3>
            </div>
            <div className='col col-3 alert-info'>
              <h3>Products in cart: {stores.cart.count}</h3>
            </div>
          </div>
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

export default withStore(App);
