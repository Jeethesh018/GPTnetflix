import React from "react";
import Login from "./Login";
import Header from "./Header";
import Browse from "./Browse";
import Error from "./Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppRouter}></RouterProvider>
    </div>
  );
};

export default Body;
