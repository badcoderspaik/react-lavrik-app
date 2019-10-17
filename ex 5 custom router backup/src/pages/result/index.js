import React from 'react';
import cartModel from '@s/cart';
import router from '@s/router';
import {Button} from 'react-bootstrap';

export default class extends React.Component {
  render() {
    return (
      <div>
        Result
        <div>Total: {cartModel.total}</div>
        <Button
          variant='warning'
          onClick={() => router.moveTo('order')}
        >
          Back to order
        </Button>
        &nbsp;
        <Button
          variant='success'
          onClick={() => router.moveTo('cart')}
        >
          Back to cart
        </Button>
      </div>
    );
  }
}