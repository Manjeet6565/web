import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Component/Layout/Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Login from "./Component/Login/Login.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Services from "./Component/Services/Services.jsx";
import Register from "./Component/Register/Register.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Services" element={<Services />} />
      <Route path="Register" element={<Register />} />
    </Route>
  )
);
// ([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },

//       {
//         path: "/",
//         element: <About />,
//       },
//       {
//         path: "/",
//         element: <Login />,
//       },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
