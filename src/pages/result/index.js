import React from 'react';
import cartModel from '@s/cart';
import {Button} from 'react-bootstrap';

export default class extends React.Component {
  render() {
    return (
      <div>
        Result
        <div>Total: {cartModel.total}</div>
        <Button
          variant='warning'
          onClick={() => {}}
        >
          Back to order
        </Button>
        &nbsp;
        <Button
          variant='success'
          onClick={() => {}}
        >
          Back to cart
        </Button>
      </div>
    );
  }
}