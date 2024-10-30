import { createBrowserRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Projects from "../pages/Projects";
import {
  INICIO,
  MIS_PROYECTOS,
  MIS_HABILIDADES,
  SOBRE_MI,
} from "../utils/constants";
import Skills from "../pages/Skills";
import AboutMe from "../pages/AboutMe";

export const router = createBrowserRouter([
  {
    path: INICIO,
    element: <Welcome />,
  },
  {
    path: MIS_PROYECTOS,
    element: <Projects />,
  },
  {
    path: MIS_HABILIDADES,
    element: <Skills />,
  },
  {
    path: SOBRE_MI,
    element: <AboutMe />,
  },
]);
