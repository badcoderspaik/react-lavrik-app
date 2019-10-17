import React from 'react';
import PropTypes from 'prop-types';
import AppLazyInput from '../lazy/lazy';
import {Button} from 'react-bootstrap';

export default class extends React.Component {
  static defaultProps = {
    onChange: function (cnt) {
    }
  }

  // static propTypes = {
  //   min: PropTypes.number.isRequired,
  //   max: PropTypes.number.isRequired,
  //   cnt: PropTypes.number.isRequired,
  //   onChange: PropTypes.func
  // }

  lazyInput = React.createRef();

  increase = () => {
    this.set(this.props.cnt + 1);
  }

  decrease = () => {
    this.set(this.props.cnt - 1);
  }

  set(newCnt) {
    let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
    this.props.onChange(cnt);
    return cnt;
  }

  onChange = (e) => {
    let cnt = parseInt(e.target.value);
    let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt);

    if (realCnt.toString() !== e.target.value) {
      console.log('aslkdjfls;akdjflsafdkj');
      this.lazyInput.current.setValue(realCnt);
    }
  }

  render() {
    return (
      <div>
        <Button variant='primary' onClick={this.decrease}>-</Button>
        <AppLazyInput
          nativeProps={{ type: 'text' }}
          value={this.props.cnt}
          onChange={this.onChange}
          ref={this.lazyInput}
        />
        <Button variant='primary' onClick={this.increase}>+</Button>
      </div>
    );
  }
}