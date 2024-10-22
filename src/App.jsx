import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";
import { ProductsNewPage } from "./ProductsNewPage";
import { ProductsIndexPage } from "./ProductsIndexPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { Footer } from "./Footer";
import { CartedProductIndex } from "./CartedProductIndex";
import { Contact } from "./Contact";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products/new",
        element: <ProductsNewPage />,
      },
      {
        path: "/products",
        element: <ProductsIndexPage />,
       loader: () => axios.get("http://localhost:3000/products.json").then((response) => response.data),
      },
      {
        path: "/cart",
        element: <CartedProductIndex />,
       loader: () => axios.get("http://localhost:3000/carted_products.json").then((response) => response.data),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;