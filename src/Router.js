import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Error from "./Pages/Error";
import Accueil from "./Pages/Accueil";
import Profile from "./Pages/Profile";
import Reglages from "./Pages/Reglages";
import "./index.css";
import Communaute from "./Pages/Communaute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Accueil />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "reglage",
        element: <Reglages />,
      },
      {
         path: "communaute",
        element: <Communaute />,
      },
    ],
  },
]);

export default router;
