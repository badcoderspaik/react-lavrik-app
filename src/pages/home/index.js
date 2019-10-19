import React from 'react';
import Sidebar from '@c/sidebar';
import styles from './styles.scss';
import Product from '@c/product';
import Cart from '@s/cart';

export default class extends React.Component {

  render() {
    let products = Cart.products.map((product, index) => {
      return (
        <li key={product.id} className={styles['product__item']}>
          <Product name={product.title} price={product.price} id={product.id}/>
        </li>
      );
    });

    return (
      <div className={styles.wrapper}>
        <Sidebar/>
        <div className={styles.product}>
          <h1>Products</h1>
          <ul className={styles['product__list']}>
            {products}
          </ul>
        </div>
      </div>
    );
  }
}