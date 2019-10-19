import React from 'react';
import {Link} from 'react-router-dom';
import {urlBuilder} from '../../routes';

export default class extends React.Component {

  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <p>Price: {this.props.price}</p>
        <Link to={urlBuilder('product', {id: this.props.id})}>Get more...</Link>
      </>
    );
  }
}