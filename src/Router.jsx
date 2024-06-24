import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Manu from "./pages/Manu.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import UploadProduct from "./pages/UploadProduct.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/manu/:id",
        element: <Manu></Manu>,
      },
      {
        path: "/upload-product",
        element: <UploadProduct></UploadProduct>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);
export default router;
