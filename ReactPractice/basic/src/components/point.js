import styled from "styled-components";

function Cursor() {
  return (
    <>
      <Container>
        <Point />
      </Container>
    </>
  );
}
export default Cursor;

export const Point = styled.div`
  position: absolute;
  background-color: crimson;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: -15px;
  top: -15px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: beige;
`;
