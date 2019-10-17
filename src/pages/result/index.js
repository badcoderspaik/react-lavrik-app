import React from 'react';
import cartModel from '@s/cart';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {routesMap, urlBuilder} from '../../routes';

export default class extends React.Component {
  render() {
    let postsTmp = [1, 2, 3];

    let links = postsTmp.map((post) => {
      return <div key={post}>
        <Link to={urlBuilder('post', {id: post})}>Post {post}</Link>
      </div>
    });

    return (
      <div>
        Result
        <div>Total: {cartModel.total}</div>
        <Link
          to={routesMap.order}
          className='btn btn-warning'
        >
          Back to order
        </Link>
        &nbsp;
        <Link
          to={routesMap.index}
          className='btn btn-success'
        >
          Back to cart
        </Link>
        {links}
      </div>
    );
  }
}