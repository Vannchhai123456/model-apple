import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/rootlayout";
import { Home } from "lucide-react";
import Accesories from "./component/Accessories";
import Product from "./component/Product";
import Homepage from "./component/Homepage";
import Service from "./component/Service";
import About from "./component/About";
import ProductDetail from "./component/productDetail";
import Footer from "./component/footer";
import IPad from "./children-accessory/ipad";
import IPhone from "./children-accessory/iphone";
import Macbook from "./children-accessory/macbook";
import Iwatch from "./children-accessory/iwatch";
import Cartiphone from "./cart/cartiphone";
import Scrollbutton from "./layout/scrollbutton";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "IPad",
        element: <IPad />,
      },
      {
        path: "iphone",
        element: <IPhone />,
      },
      {
        path: "Macbook",
        element: <Macbook />,
      },
      {
        path: "iwatch",
        element: <Iwatch />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "/",
        element: <Cartiphone />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "Accessories",
        element: <Accesories />,
      },
      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: "Service",
        element: <Service />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "footer",
        element: <Footer />,
      },
    ],
  },
]);

function App() {
  return <>
    <RouterProvider router={router}></RouterProvider>;
    <Scrollbutton />
  </>
  
}

export default App;
