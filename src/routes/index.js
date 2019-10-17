import Cart from '@p/cart';
import Order from '@p/order';
import Result from '@p/result';
import Page404 from '@p/page404';
import Post from '@p/post';

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
    name: 'post',
    path: '/post/:id',
    component: Post,
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
