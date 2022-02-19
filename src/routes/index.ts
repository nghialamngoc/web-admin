import { PATH_ABOUT, PATH_DASHBOARD } from "constants/paths";
import AboutPage from "pages/About";
import HomePage from "pages/Home";

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
];

export default routes;
