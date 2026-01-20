import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PetsAndSupplies from "../components/PetsAndSupplies/PetsAndSupplies";
import MyOrders from "../components/MyOrders/MyOrders";
import AddListing from "../components/AddListing/AddListing";
import MyListing from "../components/MyListing/MyListing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <div>Page Not Found</div>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/petsAndSupplies",
        Component: PetsAndSupplies,
      },
      {
        path: "/myOrders",
        Component: MyOrders,
      },
      {
        path: "/addListing",
        Component: AddListing,
      },
      {
        path: "/myListing",
        Component: MyListing,
      },
    ],
  },
]);
