import { RouteRecordRaw } from 'vue-router';

export function mapMenusToRoutes(userMenu: any) {
  const routes: RouteRecordRaw[] = [];

  // 生成routes数组
  const allRoutes: RouteRecordRaw[] = [];
  const filePath = require.context('../router/main', true, /\.ts/);
  // webpack内部函数
  filePath.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // 根据useMenu生成routes
  // 递归函数
  function _recurseGetRoute(menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        // ES6 语法
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        _recurseGetRoute(menu.children);
      }
    }
  }

  _recurseGetRoute(userMenu);

  return routes;
}
