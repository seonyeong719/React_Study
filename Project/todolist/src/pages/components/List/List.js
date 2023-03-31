import { useState } from "react";
import styled from "styled-components";
import AddList from "./addList";
import ItemList from "./Todo/todos";
// 리스트들의 할일 목록들을 업로드 시켜주는 기능 컴포넌트
function TodoList() {
  const todoList = [
    {
      id: 1,
      content: "공부하기",
      status: "active",
    },
    {
      id: 2,
      content: "밥먹기",
      status: "active",
    },
  ];

  const [text, setText] = useState(todoList);
  console.log(text);

  const onAddTodo = (el) => {
    setText([...text, el]);
  };

  const onDeleteBtn = (del) => {
    setText(text.filter((el) => el.id !== del.id));
  };

  console.log(text);

  return (
    <>
      <Item>
        {text.map((el) => (
          <ItemList onDeleteBtn={onDeleteBtn} todo={el} onAddTodo={onAddTodo} />
        ))}
        <AddList onAddTodo={onAddTodo} />
      </Item>
    </>
  );
}
export default TodoList;

const Item = styled.ul`
  background-color: yellow;
`;
