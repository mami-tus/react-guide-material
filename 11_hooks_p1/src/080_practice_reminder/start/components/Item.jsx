import { useTodo, useTodoDispatch } from '../context/TodoContext';

const Item = () => {
  const todo = useTodo();
  const dispatch = useTodoDispatch();

  const complete = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };
  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <span>{todo.content}</span>
    </div>
  );
};

export default Item;
