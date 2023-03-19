import styled from "styled-components";
function Header() {
  return (
    <>
      <div>
        <Issue>Issue</Issue>
      </div>
    </>
  );
}
export default Header;
//
const Issue = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(240, 72, 39);
  height: 100px;
  font-size: 55px;
  color: white;
  font-weight: 900;
`;
