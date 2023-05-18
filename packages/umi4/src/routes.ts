const routes: Route[] = [
  {
    name: '页面没找到',
    path: '/',
    component: './Home',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
];

export default routes;
