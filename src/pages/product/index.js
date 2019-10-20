import React from 'react';
import cartModel from '@s/cart';
import Sidebar from '@c/sidebar';
import {routesMap} from '../../routes';
import {Link} from 'react-router-dom';
import productModel from '@s/products';

export default class extends React.Component {

  render() {
    // let id = this.props.match.params.id;
    // let title = '';
    // let price = '';
    // Cart.products.map((product) => {
    //   if (parseInt(id) === product.id) {
    //     title = product.title;
    //     price = product.price;
    //   }
    // });
    let id = this.props.match.params.id;
    let product = productModel.getById(id);
    console.log(product);
    return (

      <div className='wrapper'>
        <Sidebar/>
        <div>
          <h1>{product.title}</h1>
          <hr/>
          <div>
            <strong>Price: {product.price}</strong>
          </div>
          <Link to={routesMap.index}>back to list</Link>
        </div>
      </div>
    );
  }
}