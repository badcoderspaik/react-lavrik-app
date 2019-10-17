import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '../../routes';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2 className='alert alert-warning'>Page not found</h2>
        <Link className='btn btn-primary' to={routesMap.index}>Go home</Link>
      </div>
    );
  }
}