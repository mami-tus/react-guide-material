const List = ({ todos, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => complete(todo.id)}>完了</button>
          <span>{todo.content}</span>
        </div>
      ))}
    </>
  );
};

export default List;
