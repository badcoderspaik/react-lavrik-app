import React from 'react';
import {routesMap} from '../../routes';
import {inject} from 'mobx-react';
import Product from '@c/product';
import E404 from '@c/404';

@inject('stores') export default class extends React.Component {

  render() {
    let id = this.props.match.params.id;
    let productModel = this.props.stores.products;
    let product = productModel.getById(id);

    if (product === null) {
      return <E404/>
    } else {
      return (
        <Product
          id={product.id}
          title={product.title}
          price={product.price}
          homeUrl={routesMap.index}
        />
      );
    }
  }
}