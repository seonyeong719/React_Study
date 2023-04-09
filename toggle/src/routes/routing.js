import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/Layout/Toggle";

import Products from "../Pages/Products/product";
import Transaction from "../Pages/Products/transaction";
import Users from "../Pages/User/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Transaction",
        element: <Transaction />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
    ],
  },
]);
export default router;
