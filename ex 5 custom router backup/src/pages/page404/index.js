import React from 'react';
import {Button} from 'react-bootstrap';
import router from '@s/router';

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>Page not found</h2>
        <Button
          variant='warning'
          onClick={() => router.moveTo('cart')}
        >
          Back to cart
        </Button>
      </div>

    );
  }
}