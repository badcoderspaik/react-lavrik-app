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
    name: '404',
    path: '/404',
    component: Page404,
    exact: true
  }
];

let routesMap = {};

routes.map((route) => {
  routesMap[route.name] = route.path;
});

export default routes;
export {routesMap};
