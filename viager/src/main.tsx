import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./feautres/Contact/index.tsx";
import ViagerGuide from "./feautres/Guide/index.tsx";
import ViagerServices from "./feautres/Services/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/guide",
    element: <ViagerGuide />,
  },
  {
    path: "/services",
    element: <ViagerServices />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
