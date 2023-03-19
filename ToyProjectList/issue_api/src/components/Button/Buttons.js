import styled from "styled-components";

function Buttons() {
  const recentData = (e) => {
    console.log(e.target.value);
  };
  const selectNumber = (e) => {
    console.log(e.target.value);
  };
  return (
    <Div>
      <select onChange={recentData}>
        <option value="add">생성순</option>
        <option value="update">업데이트순</option>
        <option value="count">댓글순</option>
      </select>
      <select onChange={selectNumber}>
        <option value="10">10개</option>
        <option value="20">20개</option>
        <option value="50">50개</option>
      </select>
    </Div>
  );
}
export default Buttons;

const Div = styled.div`
  display: flex;
`;
