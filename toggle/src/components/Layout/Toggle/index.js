import { useEffect, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

function MainPage() {
  const navigate = useNavigate();
  const [userToggle, setUserToggle] = useState(false);
  const [productToggle, setProductToggle] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  let list = searchParam.get("list");

  // 유저관리 토글 버튼
  const userBtn = () => {
    setUserToggle((prev) => !prev);
  };

  //상품관리 토글 버튼
  const productBtn = () => {
    setProductToggle((prev) => !prev);
  };

  const userList = (e) => {
    setSearchParam((list = e.target.innerText));
    navigate(`/Users?list=${list}`);
  };

  const productsList = (e) => {
    setSearchParam((list = e.target.innerText));
    navigate(`/Products?list=${list}`);
  };

  const transactionList = (e) => {
    setSearchParam((list = e.target.innerText));
    navigate(`/Transaction?list=${list}`);
  };

  useEffect(() => {
    console.log(list);
    if (list === "회원목록") return setUserToggle(true);
    if (list === "거래내역" || list === "상품목록") return setProductToggle(true);
  }, []);
  return (
    <>
      <Wrap>
        <MainBtn onClick={userBtn}>유저관리</MainBtn>
        {userToggle && (
          <button
            style={{ backgroundColor: list === "회원목록" ? "yellow" : "white" }}
            onClick={userList}
          >
            회원목록
          </button>
        )}

        <MainBtn onClick={productBtn}>상품관리</MainBtn>
        {productToggle && (
          <>
            <button
              style={{ backgroundColor: list === "거래내역" ? "yellow" : "white" }}
              onClick={transactionList}
            >
              거래내역
            </button>
            <button
              style={{ backgroundColor: list === "상품목록" ? "yellow" : "white" }}
              onClick={productsList}
            >
              상품목록
            </button>
          </>
        )}
      </Wrap>
      <Outlet />
    </>
  );
}
export default MainPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainBtn = styled.button`
  background-color: orange;
`;
