import CartStore from './cart';
import ProductStore from './products';
import OrderStore from './formData';

class RootStore {
  constructor() {
    this.cart = new CartStore(this);
    this.products = new ProductStore(this);
    this.order = new OrderStore(this);
  }
}

export default new RootStore();