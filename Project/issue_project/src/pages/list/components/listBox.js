import { getIssue } from "../../../services/issueList";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function ListBox({ issues }) {
  console.log(issues);

  return (
    <>
      {issues.map((post) => (
        <Div>
          <List
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListTop>
              <h2>{post.id}</h2>
              <div>{post.title}</div>
              <span>댓글수 : {post.comments}</span>
            </ListTop>
            <ListCenter>{post.body}</ListCenter>
            <ListBottom>{post.created_at}</ListBottom>
          </List>
        </Div>
      ))}
    </>
  );
}
export default ListBox;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  padding: 20px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  -webkit-box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  -moz-box-shadow: 8px 9px 11px 1px rgba(64, 61, 61, 0.81);
  border-radius: 20px;
  background-color: rgb(242, 242, 242);
  margin-bottom: 50px;
`;
const ListTop = styled.div`
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  max-width: 95%;
  justify-content: space-between;
  & h2 {
    font-size: 20px;
    font-weight: bold;
  }
  & div {
    font-size: 23px;
    font-weight: 600;
  }
`;
const ListCenter = styled.div`
  max-width: 85%;
`;
const ListBottom = styled.div`
  margin-top: 25px;
`;
