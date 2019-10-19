import React from 'react';
import Cart from '@s/cart';
import Sidebar from '@c/sidebar';
import {routesMap} from '../../routes';
import {Link} from 'react-router-dom';

export default class extends React.Component {

  render() {
    let id = this.props.match.params.id;
    let title = '';
    let price = '';
    Cart.products.map((product) => {
      if (parseInt(id) === product.id) {
        title = product.title;
        price = product.price;
      }
    });

    return (

      <div className='wrapper'>
        <Sidebar/>
        <div>
          <h2>{title}</h2>
          <hr/>
          <p>{price}</p>
          <Link to={routesMap.index}>back to list</Link>
        </div>
      </div>
    );
  }
}