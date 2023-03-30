import styled from "styled-components";

function Header() {
  return (
    <Page>
      <ListHeader>
        <ListHeaderLeft>
          <ListHeader_1>Issue Story</ListHeader_1>
          <ListHeader_2>
            angular / <span>angular - cli</span>
          </ListHeader_2>
        </ListHeaderLeft>
      </ListHeader>
    </Page>
  );
}
export default Header;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(242, 242, 242);
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
  justify-content: space-between;
  margin-left: 40px;
  font-size: 20px;

  & span {
    color: gray;
    font-weight: 700;
  }
`;
