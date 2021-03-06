import AboutPage from "../containers/HomeTemplate/AboutPage";
import DetailMoviePage from "../containers/HomeTemplate/DetailMoviePage";
import HomePage from "../containers/HomeTemplate/HomePage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import { Route } from "react-router-dom";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail-movie",
    component: DetailMoviePage,
  },
];
const routesAdmin = [];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    );
  });
}

export { renderRoutesHome };
