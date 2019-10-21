import React from 'react';
import {Link} from 'react-router-dom';
import {routesMap} from '../../routes';
import {inject} from 'mobx-react';

@inject('stores') export default class extends React.Component {

  render() {
    let cartModel = this.props.stores.cart;

    return (
      <div>
        <h1>Result</h1>
        <hr/>
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
      </div>
    );
  }
}