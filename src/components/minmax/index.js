import React from 'react';
import AppLazyInput from '../lazy/lazy';
import {Button} from 'react-bootstrap';

class MinMax extends React.Component {
  static defaultProps = {
    onChange: function (cnt) {
    }
  }

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

export default MinMax;
