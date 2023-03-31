import { useState } from "react";
import styled from "styled-components";
// 할일 목록들을 추가해주는 컴포넌트.

function AddList({ onAddTodo }) {
  const [listText, setListText] = useState("");

  const listForm = (el) => {
    el.preventDefault();
    if (listText.trim().length === 0) return;
    onAddTodo({
      id: Math.floor(Math.random() * 100000),
      content: listText,
      status: "active",
    });
    setListText("");
  };

  const addList = (e) => {
    setListText(e.target.value);
  };

  return (
    <Form onSubmit={listForm}>
      <input placeholder="Add List" onChange={addList} value={listText} type="text" />
      <button>ADD</button>
    </Form>
  );
}
export default AddList;

const Form = styled.form`
  display: flex;
`;
