export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //     {
  //       component: './404',
  //     },
  //   ],
  // },
  {
    name: '新闻上传',
    icon: 'table',
    path: '/news-upload',
    component: './NewsUpload',
  },
  {
    name: '新闻爬取',
    icon: 'table',
    path: '/news-crawl',
    component: './NewsCrawl',
  },
  {
    name: '新闻预处理',
    icon: 'table',
    path: '/news-upload1',
    component: './NewsUpload',
  },
  {
    name: '输入预测',
    icon: 'table',
    path: '/input-forecast',
    component: './InputForecast',
  },
  {
    name: '新闻统计',
    icon: 'table',
    path: '/news-statistics',
    component: './NewsStatistics',
  },
  {
    name: '账号管理',
    icon: 'table',
    path: '/news-upload2',
    component: './NewsUpload',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
