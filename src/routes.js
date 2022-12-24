import { lazy } from "react";

const Home = lazy(() => import("./views/Home"));

const routes = [
  {
    path: "/home",
    name: "Inicio",
    Component: Home,
  },
];

export default routes;
