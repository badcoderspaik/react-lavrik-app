import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './styles.scss';

export default class extends React.Component {
  state = {
    data: [],
    isFetchingData: true,
    error: null
  };

  componentDidMount() {
    this.getData('http://n74733u0.beget.tech/index.php');
  }

  async removeRow(index) {
    const isDeleteRow = confirm('Удалить строку?');
    if (!isDeleteRow) return;

    let dataClone = [...this.state.data];
    dataClone.splice(index, 1);
    this.setState({ data: dataClone });
  };

  changeData = (index) => {
    const currentData = this.state.data[index].pok;
    let newData = prompt('Ввести показания', currentData);
    newData = newData === null ? currentData : newData;
    // newData = newData.trim();
    // if (newData === '') newData = currentData;
    newData = parseInt(newData);
    if (isNaN(newData)) newData = currentData;
    let dataClone = [...this.state.data];
    let dataItem = { ...dataClone[index] };
    dataItem.pok = newData;
    dataClone[index] = dataItem;
    this.setState({ data: dataClone });
  };

  async getData(url) {
    try {
      const response = await fetch(url);

      if (response.status !== 200) {
        throw new Error('Данные не были загружены')
      }

      const data = await response.json();
      this.setState({ data: data, isFetchingData: false });

    } catch (e) {
      this.setState({ error: 'Не удалось загрузить данные, проверьте сетевое соединение...' })
    }
  }

  render() {
    let dataList = this.state.data.map((data, index) => {
      return (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.tp_number}</td>
          <td>{data.count_number}</td>
          <td
            className={styles['data__reading']}
            onClick={() => this.changeData(index)}
          >
            {data.pok}
          </td>
          <td>{data.date}</td>
          <td>
            <Button
              variant='danger'
              onClick={() => this.removeRow(index)}
            >
              &#10008;
            </Button>
          </td>
        </tr>
      );
    });

    if (this.state.error) {
      return (
        <h2 className={styles['data__error']}>{this.state.error}</h2>
      )
    }

    if (this.state.isFetchingData) {
      return (
        <div className={styles['data__preloader']}></div>
      )
    }

    return (
      <div className='container'>
        <table className='table table-bordered data'>
          <tbody>
          <tr>
            <th>id</th>
            <th>Номер ТП</th>
            <th>Номер счетчика</th>
            <th>Показания</th>
            <th>Дата</th>
            <th>Удалить</th>
          </tr>
          {dataList}
          </tbody>
        </table>
      </div>
    );
  }
}
