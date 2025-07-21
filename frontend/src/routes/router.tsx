import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Profile from "../pages/Profile"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Layout from "../layouts/Layout"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
])

export default router