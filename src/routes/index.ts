import { PATH_ABOUT, PATH_DASHBOARD, PATH_PRODUCT } from "constants/paths";
import AboutPage from "pages/About";
import HomePage from "pages/Home";
import ProductPage from "pages/Product";
import ProductDetailPage from "pages/Product/detail";

const routes = [
  {
    path: PATH_DASHBOARD,
    component: HomePage,
    guard: true,
  },
  {
    path: PATH_ABOUT,
    component: AboutPage,
    guard: true,
  },
  {
    path: PATH_PRODUCT.LIST,
    component: ProductPage,
    guard: true,
  },
  {
    path: PATH_PRODUCT.DETAIL,
    component: ProductDetailPage,
    guard: true,
  },
];

export default routes;
