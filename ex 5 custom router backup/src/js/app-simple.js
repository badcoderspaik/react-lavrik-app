import React from 'react';
// import InputLazy from '../components/lazy/lazy';
import MinMax from '../components/minmax/index';

export default class extends React.Component {
  state = {
    inp1: 'start',
    inp2: 'other start'
  };

  update = (event) => {
    this.setState = {
      inp1: event.target.value
    }
  };

  render() {
    return (
        <MinMax min={1} max={10} cnt={1}/>
    );
  }
}