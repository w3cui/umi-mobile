export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: './index/index', title: '首页' },
      { path: '/category', component: './category/index', title: '分类' },
      { path: '/category/:id', component: './category/index', title: '分类' },
      { path: '/detailed/:id', component: './detailed/index', title: '商品详细' },
      {
        path: '/exception',
        component: '../layouts/ExceptionLayout',
        routes: [
          { path: '/exception/403', title: '无权限', component: './exception/403' },
          { path: '/exception/500', title: '服务器出错了', component: './exception/500' },
        ],
      },
      { component: '404', title: '页面没找到' },
    ],
  },
];
