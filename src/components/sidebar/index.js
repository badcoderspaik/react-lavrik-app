import React from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {routesMap} from '@r/';

export default class extends React.Component {

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <NavLink exact to={routesMap.index} activeStyle={{color: 'gray'}}>Home</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink exact to={routesMap.cart} activeStyle={{color: 'gray'}}>Cart</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink exact to={routesMap.order} activeStyle={{color: 'gray'}}>Order now</NavLink>
        </li>
      </ul>
    );
  }
}

/*
* <Nav variant="pills">
      <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href='/cart'>Cart</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href='/order'>Order now</Nav.Link>
  </Nav.Item>
  </Nav>
* */