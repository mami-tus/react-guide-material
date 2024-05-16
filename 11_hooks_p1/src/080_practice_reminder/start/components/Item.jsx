const Item = ({ todo, complete }) => {
  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <span>{todo.content}</span>
    </div>
  );
};

export default Item;
