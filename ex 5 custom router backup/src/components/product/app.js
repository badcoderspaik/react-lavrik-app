import React from 'react';
import router from '@s/router';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default @observer

class extends React.Component {

  render() {

    return (
      <Router>
        <div className='container-fluid'>
          {router.component}
        </div>
      </Router>
    );
  }
}
