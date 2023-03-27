import { createBrowserRouter } from "react-router-dom";
import IssueHeader from "../components/Layout";
import MainPage from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IssueHeader />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
]);
export default router;
