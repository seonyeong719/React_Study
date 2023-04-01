const SearchList = ({ focusIdx, searchInput, list }) => {
  return (
    <>
      <div>연관 검색어</div>
      {searchInput && (
        <ul>
          {list.map((el, idx) => (
            <li style={{ backgroundColor: idx === focusIdx ? "gray" : "white" }}>{el}</li>
          ))}
        </ul>
      )}
    </>
  );
};
export default SearchList;
