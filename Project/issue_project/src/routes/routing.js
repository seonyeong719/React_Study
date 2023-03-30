import { createBrowserRouter } from "react-router-dom";
import IssueHeader from "../components/Layout";
import DetailPage from "../pages/detail/detail";

import ListPage from "../pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueHeader />,
    children: [
      {
        path: "",
        element: <ListPage />,
      },
      {
        path: "/:page/:sort/:per_page",
        element: "",
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);
export default router;
