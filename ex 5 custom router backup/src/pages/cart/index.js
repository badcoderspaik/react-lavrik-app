import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import MinMax from '@c/minmax';
import cartModel from '@s/cart';
import router from '@s/router';
import {observer} from 'mobx-react';

export default @observer class extends React.Component {

  render() {
    let productList = cartModel.products.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <MinMax
              min={1}
              max={product.ost}
              cnt={product.current}
              onChange={(cnt) => cartModel.change(i, cnt)}
            />

          </td>
          <td>{product.current * product.price}</td>
          <td>
            <Button
              variant='danger'
              onClick={() => cartModel.remove(i)}
              title='Удалить строку'
            >
              X
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className='container'>
        <h2>Cart</h2>
        <table className='table table-bordered data'>
          <tbody>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>count</th>
            <th>total</th>
            <th>remove</th>
          </tr>
          {productList}
          <tr>
            <td><strong>Total amount</strong></td>
            <td>{cartModel.total}</td>
          </tr>
          </tbody>
        </table>
        <Button variant='success' onClick={() => router.moveTo('order')}>
          Send
        </Button>
      </div>
    );
  }
}