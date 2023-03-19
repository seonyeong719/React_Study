import styled from "styled-components";
import Buttons from "../../components/Button/Buttons";

function ListPage() {
  return (
    <Page>
      <ListHeader>
        <ListHeaderLeft>
          <ListHeader_1>Issue Story</ListHeader_1>
          <ListHeader_2>
            angular / <span>angular - cli</span>
          </ListHeader_2>
        </ListHeaderLeft>
        <Buttons />
      </ListHeader>
      <List>
        <ListTop>
          <h2>ex: 아이디</h2>
          <div>ex: 제목</div>
          <div>ex: 댓글수</div>
        </ListTop>
        <ListCenter>Text</ListCenter>
        <ListBottom>2020:02:10</ListBottom>
      </List>
    </Page>
  );
}
export default ListPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ListHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 80%;
  margin: 35px 0;
`;
const ListHeaderLeft = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ListHeader_1 = styled.span`
  font-size: 45px;
  font-weight: 700;
`;
const ListHeader_2 = styled.span`
  display: flex;
  justify-content: space-around;
  margin-left: 40px;
  font-size: 20px;

  & span {
    color: gray;
    font-weight: 700;
  }
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
  justify-content: space-around;
  & h2 {
    font-size: 20px;
    font-weight: bold;
  }
  & div {
    font-size: 18px;
  }
`;
const ListCenter = styled.div``;
const ListBottom = styled.div`
  margin-top: 25px;
`;
