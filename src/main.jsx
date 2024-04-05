import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/components/Home.jsx";
import { AuthLayout } from "./components/index.js";
import Login from "./components/Login.jsx";
import Signup from "./pages/Signup";
import {
  Cart,
  Orders,
  Profile,
  ProductDetails,
  ProductList,
  OrderDetails,
} from "./components/Customer/index.js";
import {
  Farmer,
  FarmerHome,
  CropRegisteration,
  MidtermVerify,
  OrdersFrom,
  PickUpCourier,
  RequestCertification,
} from "./components/Farmer/index.js";
import {
  CropValidation,
  FinalCertification,
  MidtermVerification,
} from "./components/Authority/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },

      // here starts for the customer

      {
        path: "/productList",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <ProductList />
          </AuthLayout>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <ProductDetails />
          </AuthLayout>
        ),
      },
      {
        path: "/Cart",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Cart />
          </AuthLayout>
        ),
      },
      {
        path: "/Orders",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Orders />
          </AuthLayout>
        ),
      },
      {
        path: "/OrderDetails/:id",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <OrderDetails />
          </AuthLayout>
        ),
      },
      {
        path: "/Profile",
        element: (
          <AuthLayout requiredRole="customer" authentication={true}>
            <Profile />
          </AuthLayout>
        ),
      },

      // here starts farmer routes

      {
        path: "/farmer",
        element: (
          <AuthLayout requiredRole="farmer" authentication={false}>
            <Farmer />
          </AuthLayout>
        ),
        children: [
          {
            path: "/farmer",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <FarmerHome />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/crop-registration",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <CropRegisteration />
              </AuthLayout>
            ),
          },

          {
            path: "/farmer/midterm-verify",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <MidtermVerify />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/request-certification",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <RequestCertification />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/orders-from",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <OrdersFrom />
              </AuthLayout>
            ),
          },
          {
            path: "/farmer/pick-up-fromcourier",
            element: (
              <AuthLayout requiredRole="farmer" authentication={true}>
                <PickUpCourier />
              </AuthLayout>
            ),
          },
        ],
      },

      // here starts authority routes

      {
        path: "/authority/crop-validation",
        element: (
          <AuthLayout requiredRole="authority" authentication={true}>
            <CropValidation />
          </AuthLayout>
        ),
      },
      {
        path: "/authority/midterm-verification",
        element: (
          <AuthLayout requiredRole="authority" authentication={true}>
            <MidtermVerification />
          </AuthLayout>
        ),
      },
      {
        path: "/authority/final-certification",
        element: (
          <AuthLayout requiredRole="authority" authentication={true}>
            <FinalCertification />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
