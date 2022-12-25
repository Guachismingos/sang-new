import { lazy } from "react";

//Views
const Home = lazy(() => import("./views/Home"));
const Requirements = lazy(() => import("./views/Requirements"));
const Projects = lazy(() => import("./views/Projects"));
const Models = lazy(() => import("./views/Models"));
const About = lazy(() => import("./views/About"));

//Images
import requirements_icon from "./assets/images/requirements_icon.png";
import projects_icon from "./assets/images/projects_icon.png";
import models_icon from "./assets/images/models_icon.png";
import about_icon from "./assets/images/about_icon.png";

const routes = [
  {
    path: "/home",
    name: "Inicio",
    Component: Home,
  },
  {
    path: "/requirements",
    name: "Requerimientos",
    Component: Requirements,
    icon: requirements_icon,
  },
  {
    path: "/projects",
    name: "Proyectos",
    Component: Projects,
    icon: projects_icon,
  },
  {
    path: "/models",
    name: "Modelos",
    Component: Models,
    icon: models_icon,
  },
  {
    path: "/about",
    name: "¿Quiénes somos?",
    Component: About,
    icon: about_icon,
  },
];

export default routes;
