import React from 'react';
import styles from './styles.scss';
import {Card, Button} from 'react-bootstrap';
import {urlBuilder} from '../../routes';
import {Link} from 'react-router-dom';
import withStore from '@/hocs/WithStore';

class Home extends React.Component {

  render() {
    let productModel = this.props.stores.products;
    let cartModel = this.props.stores.cart;
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
        <div key={product.id} className={`col col-4 ${styles.col}`}>
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
      <div>
        <h1>Products</h1>
        <hr/>
        <div className='row'>
          {products}
        </div>
      </div>
    );
  }
}

export default withStore(Home);