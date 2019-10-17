import Cart from '@p/cart';
import Order from '@p/order';
import Result from '@p/result';
import Page404 from '@p/page404';

let routes = [
  {
    name: 'index',
    path: '/',
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
    path: '**',
    component: Page404
  }
];

let routesMap = {};

routes.forEach((route) => {
  route.hasOwnProperty('name') ? routesMap[route.name] = route.path : '';
});

export default routes;
export {routesMap};
