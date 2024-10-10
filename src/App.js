import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import("./components/Services"));

const AppLayout = () => {
  const location = useLocation();

  const showFooter =
    location.pathname !== "/cart" && location.pathname !== "/services";
  console.log(showFooter);

  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
        {showFooter && <Footer />}{" "}
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/services",
        element: (
          <Suspense
            fallback={
              <h1 className="flex justify-center items-center text-white">
                Services are loading...
              </h1>
            }
          >
            <Services />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2 className="text-white">Loading...</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
