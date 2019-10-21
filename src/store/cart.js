import {observable, computed, action} from 'mobx';

export default class {
  @observable products = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @computed get productsDetailed() {
    return this.products.map((pr) => {
      let product = this.rootStore.products.getById(pr.id);
      return {...product, current: pr.current};
    });
  }

  @computed get inCart() {
    return (id) => this.products.some((product) => product.id === id);
  }

  @computed get total() {
    return this.productsDetailed.reduce((t, pr) => {
      let product = this.rootStore.products.getById(pr.id);
      return t + pr.price * pr.current;
    }, 0);
  }

  @computed get count() {
    return this.products.reduce((t, pr) => t + pr.current, 0);
  }

  @action change(id, cnt) {
    let index = this.products.findIndex((pr) => pr.id === id);

    if (index !== -1) {
      this.products[index].current = cnt;
    }
  }

  @action remove(id) {
    let index = this.products.findIndex((pr) => pr.id === id);

    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  @action add(id) {
    this.products.push({ id, current: 1 });
  }
}
