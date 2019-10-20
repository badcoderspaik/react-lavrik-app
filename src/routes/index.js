import Cart from '@p/cart';
import Order from '@p/order';
import Result from '@p/result';
import Home from '@p/home';
import Page404 from '@p/page404';
import Product from '@p/product';

let routes = [
  {
    name: 'index',
    path: '/',
    component: Home,
    exact: true
  },
  {
    name: 'cart',
    path: '/cart',
    component: Cart,
    exact: true
  },
  {
    name: 'order',
    path: '/order',
    component: Order,
    exact: true
  },
  {
    name: 'result',
    path: '/result',
    component: Result,
    exact: true
  },
  {
    name: 'product',
    path: '/products/:id',
    component: Product,
    exact: true
  },
  {
    path: '**',
    component: Page404
  }
];

let routesMap = {};

routes.forEach((route) => {
  route.hasOwnProperty('name') ? routesMap[route.name] = route.path : '';
});

let urlBuilder = (name, params) => {
  if(!routesMap.hasOwnProperty(name)) {
    return null;
  }

  let url = routesMap[name];

  for(let key in params) {
    url = url.replace(':' + key, params[key]);
  }

  return url;
};

export default routes;
export {routesMap};
export {urlBuilder};
