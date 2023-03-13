import { useState } from "react";
import styled from "styled-components";

function Cursor() {
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  const [xyPosition, setXyPosition] = useState({ x: 0, y: 0 });

  const cursorMove = (e) => {
    // console.log(e.clientX, e.clientY);
    // setX(e.clientX);
    // setY(e.clientY);
    setXyPosition({ x: e.clientX, y: e.clientY });

    // setXyPosition((prev) => ({ ...prev, x: e.clientX }));
    // spread 복사를 이용해 수평으로만 이동 가능하게 만들었다.
    // useState 함수를 굳이 2개를 선언해줄 필요 없이 한번에 객체에 담아서 사용 가능.
    // 또한, 깊은복사를 통해 다양하게 수직, 수평 기능 구현이 가능하다.
  };
  return (
    <>
      <Container onPointerMove={cursorMove}>
        {/* <Point style={{ transform: `translate(${x}px,${y}px)` }} /> */}
        <Point style={{ transform: `translate(${xyPosition.x}px,${xyPosition.y}px)` }} />
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
