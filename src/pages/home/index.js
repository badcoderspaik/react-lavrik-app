import React from 'react';
import Sidebar from '@c/sidebar';
import styles from './styles.scss';
import Product from '@c/product';
import productModel from '@s/products';
import cartModel from '@s/cart';
import {Card, Button} from 'react-bootstrap';
import {urlBuilder} from '../../routes';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

export default @observer class extends React.Component {

  render() {
    let products = productModel.items.map((product, index) => {
      let btn;

      if (cartModel.inCart(product.id)) {
        btn = <Button variant='danger' onClick={() => cartModel.remove(product.id)}>
          Remove from cart...
        </Button>
      } else {
        btn = <Button variant='success' onClick={() => cartModel.add(product.id)}>
          Add to cart...
        </Button>
      }

      return (
        <div key={product.id} className='col col-4'>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price: {product.price}</strong>
              </Card.Text>
              <Link to={urlBuilder('product', { id: product.id })}>Get more...</Link>
              <hr/>
              {btn}
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <div className={styles.wrapper}>
        <Sidebar/>
        <div className={styles.product}>
          <h1>Products</h1>
          {products}
        </div>
      </div>
    );
  }
}