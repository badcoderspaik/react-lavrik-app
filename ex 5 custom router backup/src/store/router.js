import React from 'react';
import Cart from '@p/cart';
import Order from '@p/order';
import Result from '@p/result';
import Page404 from '@p/page404';
import {observable, computed, action} from 'mobx';

class Router {
  @observable activeRoute = 'cart';

  routes = {
    cart: () => <Cart/>,
    order: () => <Order/>,
    result: () => <Result/>,
    page404: () => <Page404/>
  };

  @computed get component() {
    if (!(this.activeRoute in this.routes)) {
      return this.routes.page404();
    }
    return this.routes[this.activeRoute]();
  }

  @action moveTo(route) {
    let currentRoute = route;
    if (currentRoute !== 'cart' && currentRoute !== 'order' && currentRoute !== 'result') {
      currentRoute = 'page404';
    }
    this.activeRoute = currentRoute;
  }
}

export default new Router();