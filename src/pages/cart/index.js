import React from 'react';
import Sidebar from '@c/sidebar';
import {Button} from 'react-bootstrap';
import MinMax from '@c/minmax';
import cartModel from '@s/cart';
import {Link} from 'react-router-dom';
import {routesMap} from '@r/';
import {observer} from 'mobx-react';

export default @observer

class extends React.Component {

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
      <div>
        <div className='wrapper'>
          <Sidebar/>
          <div>
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
            <Link to={routesMap.order} className='btn btn-primary'>Send</Link>
          </div>
        </div>
      </div>
    );
  }
}