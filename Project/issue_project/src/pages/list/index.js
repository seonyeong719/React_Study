import MainPage from "./components/listBox";
import SortList from "./components/sortList";
import PerPage from "./components/perpage";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIssue } from "../../services/issueList";

import { useEffect, useState } from "react";
import ListBox from "./components/listBox";

function ListPage() {
  const issues = useSelector((store) => store.issue.issues);
  const getIssuesState = useSelector((store) => store.issue.getIssuesState);

  const { page, sort, per_page } = useParams();
  const [goPage, setGoPage] = useState(1);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssue());
  }, []);

  return (
    <>
      <ListBox issues={issues} />
    </>
  );
}
export default ListPage;
