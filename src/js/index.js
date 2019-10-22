import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'mobx-react';
import stores from '@s/';
import App from '@/components/app/app';
// import AppElectricMeterData from '../components/AppElectricMeterData/AppElectricMeterData';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.querySelector('#app');

ReactDom.render(
  <Provider stores={stores}>
    <App/>
  </Provider>,
  app);