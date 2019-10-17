import {observable, computed, action} from 'mobx';

class Cart {
  @observable products = getProducts();

  @computed get total() {
    return this.products.reduce((t, pr) => t + pr.price * pr.current, 0);
  }

  @action change(i, cnt) {
    this.products[i].current = cnt;
  }

  @action remove(i) {
    this.products.splice(i, 1);
  }
}

function getProducts() {
  return [
    {
      id: 100,
      title: 'iphone',
      price: 1000,
      ost: 10,
      current: 1
    },
    {
      id: 101,
      title: 'samsung',
      price: 1000,
      ost: 100,
      current: 2
    },
    {
      id: 102,
      title: 'Nokia',
      price: 1000,
      ost: 10,
      current: 1
    },
    {
      id: 103,
      title: 'gnusmas',
      price: 1000,
      ost: 100,
      current: 1
    },
    {
      id: 104,
      title: 'Motorola',
      price: 1000,
      ost: 67,
      current: 1
    },
    {
      id: 105,
      title: 'LG',
      price: 1000,
      ost: 5,
      current: 1
    },
    {
      id: 106,
      title: 'huawei',
      price: 1000,
      ost: 1,
      current: 1
    }
  ];
}

export default new Cart();

