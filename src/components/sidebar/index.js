import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '@r/';
import styles from './styles.scss';

export default class extends React.Component {

  render() {
    return (
      <ul className={styles.sidebar}>
        <li>
          <Link to={routesMap.index}>
            Home
          </Link>
        </li>
        <li>
          <Link to={routesMap.cart}>
            Cart
          </Link>
        </li>
        <li>
          <Link to={routesMap.order}>
            Order now
          </Link>
        </li>
      </ul>
    );
  }
}