import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../components/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PetsAndSupplies from "../components/PetsAndSupplies/PetsAndSupplies";
import MyOrders from "../components/MyOrders/MyOrders";
import AddListing from "../components/AddListing/AddListing";
import MyListing from "../components/MyListing/MyListing";
import CategoryFilteredProduct from "../components/Category/CategoryFilteredProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import PrivetRoutes from "./PrivetRoutes";

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
        element: (
          <PrivetRoutes>
            <MyOrders></MyOrders>
          </PrivetRoutes>
        ),
      },
      {
        path: "/addListing",
        element: (
          <PrivetRoutes>
            <AddListing></AddListing>
          </PrivetRoutes>
        ),
      },
      {
        path: "/myListing",
        element: (
          <PrivetRoutes>
            <MyListing></MyListing>
          </PrivetRoutes>
        ),
      },
      {
        path: "/category-filtered-product/:category",

        Component: CategoryFilteredProduct,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRoutes>
            <ProductDetails></ProductDetails>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
