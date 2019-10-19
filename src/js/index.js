import React from 'react';
import ReactDom from 'react-dom';
import App from '@/components/app/app';
import AppElectricMeterData from '../components/AppElectricMeterData/AppElectricMeterData';
import 'bootstrap/dist/css/bootstrap.min.css';
const app = document.querySelector('#app');

ReactDom.render(<App/>, app);