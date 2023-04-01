import { useEffect, useState } from "react";
import SearchBtn from "./searchBtn";
import useDebounce from "../Apis/debounceApi";
import { SearchApi } from "../Apis/api";
import styled from "styled-components";

const SearchListBox = () => {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [locals, setLocals] = useState();
  const debounce = useDebounce(searchInput);

  const getSearch = async (debounce) => {
    try {
      const res = await SearchApi(debounce);
      setList(res.data);
    } catch (err) {
      setList([err.response.data]);
    }
  };

  useEffect(() => {
    // if (!list) return setList([]);
    if (!searchInput) return;
    getSearch(debounce);
  }, [debounce]);

  const searchPage = (e) => {
    setSearchInput(e.target.value);
  };

  // 로컬스토리지

  let recentBtn = JSON.parse(localStorage.getItem("recent"));

  useEffect(() => {
    if (!localStorage.recent) {
      localStorage.setItem("recent", JSON.stringify([]));
    }
    setLocals(JSON.parse(localStorage.getItem("recent")));
  }, []);

  // 클릭했을때
  const localAddBtn = () => {
    recentBtn.unshift(searchInput);
    if (recentBtn.length > 5) recentBtn.pop();
    localStorage.setItem("recent", JSON.stringify(recentBtn));
    setLocals(JSON.parse(localStorage.getItem("recent")));

    // 동일검색어 최신으로 띄우기
    const a = locals.find((el) => el === searchInput);
    if (a) {
      const b = locals.filter((el) => el !== a);
      b.unshift(a);
      setLocals(b);
    }
  };

  return (
    <>
      <div>
        <SearchWrap>
          <SearhBox placeholder="검색어를 입력하세요" onChange={searchPage} value={searchInput} />
          <SearchBtn localAddBtn={localAddBtn} />
        </SearchWrap>
        <div>
          <div>연관 검색어</div>
          {searchInput && (
            <Ul>
              {list.map((el) => (
                <li>{el}</li>
              ))}
            </Ul>
          )}

          <div>최근 검색어</div>
          <Ul>
            {locals &&
              locals.map((e) => {
                return <li>{e}</li>;
              })}
          </Ul>

          <Ul>검색 결과</Ul>
        </div>
      </div>
    </>
  );
};
export default SearchListBox;

const Ul = styled.div`
  border: 1px solid black;
  width: 30%;

  border-radius: 10px;
`;

const SearhBox = styled.input``;

const SearchWrap = styled.div``;
