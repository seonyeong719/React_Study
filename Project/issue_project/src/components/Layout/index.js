import { Outlet } from "react-router-dom";
import Header from "./header";

function IssueHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default IssueHeader;
