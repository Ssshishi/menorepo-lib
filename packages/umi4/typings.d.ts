import '@umijs/max/typings';

declare global {
  type Route = {
    name?: string;
    path: string;
    component: string;
    layout?: boolean;
    redirect?: string;
    routes?: Route;
    wrappers?: string[];
  };
}
