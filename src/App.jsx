import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Shop from "./components/pages/Shop";
import SingleProduct from "./components/pages/SingleProduct";
import ContactUs from "./components/pages/ContactUs";
import { QueryClient, QueryClientProvider } from "react-query";
import Wishlist from "./components/pages/Wishlist";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import { Toaster } from "react-hot-toast";
import ProfileSetting from "./components/common/ProfileSetting";
import Account from "./components/pages/Account";
import Activity from "./components/common/Activity";
import Cartlist from "./components/pages/Cartlist";
import PNF from "./components/pages/PNF";

const App = () => {
  const queryClient = new QueryClient();
  const routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/categories", element: <Categories /> },
        { path: "/shop", element: <Shop /> },
        { path: "shop/product/:id", element: <SingleProduct /> },
        { path: "/contact", element: <ContactUs /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/cartlist", element: <Cartlist /> },
        {
          path: "/account",
          element: <Account />,
          children: [
            { path: "activity", element: <Activity /> },
            { path: "settings", element: <ProfileSetting /> },
          ],
        },
      ],
    },
    {path:'*', element:<PNF/>},
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        reverseOrder={true}
        toastOptions={{
          duration: 3000,
          style: {
            textTransform: "capitalize",
            textAlign: "center",
            fontFamily: "RaleWay",
          },
          success: {
            style: {
              background: "rgba(245, 150, 30,  0.5)",
              color: "white",
            },
            iconTheme: {
              primary: "#f5961e",
              secondary: "white",
            },
          },
          error: {
            style: {
              border: "2px solid #A30000",
              padding: "16px",
              color: "white",
              fontWeight: "700",
              background: "rgba(163, 0, 0, 0.5)",
            },
            iconTheme: {
              primary: "#A30000",
              secondary: "white",
            },
          },
        }}
      />
      <RouterProvider router={routing} />
    </QueryClientProvider>
  );
};

export default App;
