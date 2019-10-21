import {observable, computed, action} from 'mobx';

export default class {
  @observable items = getProducts();

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get productsMap() {
    let map = {};

    this.items.forEach((product, index) => {
      map[product.id.toString()] = index;
    })

    return map;
  }

  getById(id) {
    let index = this.productsMap[id];

    if(index === undefined) {
      return null;
    }

    return this.items[index];
  }
}

function getProducts() {
  return [
    {
      id: 100,
      title: 'iphone',
      price: 1000,
      ost: 10
    },
    {
      id: 101,
      title: 'samsung',
      price: 1000,
      ost: 100
    },
    {
      id: 102,
      title: 'Nokia',
      price: 1000,
      ost: 10
    },
    {
      id: 103,
      title: 'gnusmas',
      price: 1000,
      ost: 100
    },
    {
      id: 104,
      title: 'Motorola',
      price: 1000,
      ost: 67
    },
    {
      id: 105,
      title: 'LG',
      price: 1000,
      ost: 5
    },
    {
      id: 106,
      title: 'huawei',
      price: 1000,
      ost: 1
    }
  ];
}