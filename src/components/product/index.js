import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import withStore from '@/hocs/WithStore';

function Product(props) {
  let btn;
  const cartModel = props.stores.cart;

  if (props.stores.cart.inCart(props.id)) {
    btn = <Button variant='danger' onClick={() => cartModel.remove(props.id)}>
      Remove from cart...
    </Button>
  } else {
    btn = <Button variant='success' onClick={() => cartModel.add(props.id)}>
      Add to cart...
    </Button>
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <hr/>
      <div>
        <strong>Price: {props.price}</strong>
      </div>
      {btn}
      <hr/>
      <Link to={props.homeUrl}>back to list</Link>
    </div>
  );
}

export default withStore(Product);