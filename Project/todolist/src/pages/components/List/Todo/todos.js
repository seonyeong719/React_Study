function ItemList({ onDeleteBtn, todo }) {
  const onDelete = () => {
    onDeleteBtn(todo);
  };

  return (
    <>
      <li>
        <label>{todo.content}</label>
        <button onClick={() => onDelete()}>삭제</button>
      </li>
    </>
  );
}
export default ItemList;
