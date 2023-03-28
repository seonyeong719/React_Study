import MainPage from "./components/mainPage";
import SortList from "./components/sortList";
import PerPage from "./components/perpage";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIssue } from "../../services/issueList";

function AllPage() {
  const { id } = useParams();
  const issues = useSelector((store) => store.issue.issues);
  const getIssuesState = useSelector((store) => store.issue.getIssuesState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
}
export default AllPage;
