import React from 'react';
import {routesMap} from '../../routes';
import {Link} from 'react-router-dom';
import productModel from '@s/products';

export default class extends React.Component {

  render() {
    let id = this.props.match.params.id;
    let product = productModel.getById(id);
    return (
      <div>
        <h1>{product.title}</h1>
        <hr/>
        <div>
          <strong>Price: {product.price}</strong>
        </div>
        <Link to={routesMap.index}>back to list</Link>
      </div>
    );
  }
}