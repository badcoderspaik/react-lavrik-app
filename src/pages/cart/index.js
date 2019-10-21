import React from 'react';
import {Button} from 'react-bootstrap';
import MinMax from '@c/minmax';
import {Link} from 'react-router-dom';
import {routesMap} from '@r/';
import withStore from '@/hocs/WithStore';
import styles from './styles.scss';
import LinkButton from '@c/links/button';

class Cart extends React.Component {

  render() {
    let cartModel = this.props.stores.cart;
    let productList = cartModel.productsDetailed.map((product, i) => {
      return (
        <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>
            <MinMax
              min={1}
              max={product.ost}
              cnt={product.current}
              onChange={(cnt) => cartModel.change(product.id, cnt)}
            />

          </td>
          <td>{product.current * product.price}</td>
          <td>
            <Button
              variant='danger'
              onClick={() => cartModel.remove(product.id)}
              title='Удалить строку'
            >
              &#10008;
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Cart</h2>
        <hr/>
        <table className={`table table-bordered ${styles.table}`}>
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
        <LinkButton to={routesMap.order} className='btn btn-primary'>
          Send
        </LinkButton>
      </div>
    );
  }
}

export default withStore(Cart);