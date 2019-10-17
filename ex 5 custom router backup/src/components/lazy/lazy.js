import React from 'react';
import PropTypes from 'prop-types';
import styles from './lazy.scss';

export default class extends React.Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: function (e) {

    },
    nativeProps: {}
  };

  nativeInput = React.createRef();

  setValue(value) {
    this.nativeInput.current.value = value;
  }

  componentDidUpdate(prevProps, prevState) {
    let inp = this.nativeInput.current;
    if (prevProps.value !== this.props.value || this.props.value != inp.value) {
      inp.value = this.props.value;
    }
  }

  checkChange = (event) => {
    if (this.props.value.toString() !== event.target.value) {
      this.props.onChange(event);
    }
  };

  checkEnterKey = (event) => {
    if (event.keyCode === 13) {
      this.checkChange(event);
    }
  };

  render() {
    return (
      <input {...this.props.nativeProps}
             className={styles['native-input']}
             defaultValue={this.props.value}
             onBlur={this.checkChange}
             onKeyUp={this.checkEnterKey}
             ref={this.nativeInput}
      />
    );
  }
}