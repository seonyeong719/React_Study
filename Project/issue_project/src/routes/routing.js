import { createBrowserRouter } from "react-router-dom";
import IssueHeader from "../components/Layout";
import DetailPage from "../pages/detail/detail";
import MainPage from "../pages/list/components/mainPage";
import AllPage from "../pages/list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueHeader />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "/:page/:sort/:per_page",
        element: <AllPage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
    ],
  },
]);
export default router;
