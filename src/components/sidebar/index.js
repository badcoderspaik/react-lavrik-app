import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '@r/';

export default class extends React.Component {

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <Link to={routesMap.index}>Home</Link>
        </li>
        <li className="list-group-item">
          <Link to={routesMap.cart}>Cart</Link>
        </li>
        <li className="list-group-item">
          <Link to={routesMap.order}>Order now</Link>
        </li>
      </ul>
    );
  }
}