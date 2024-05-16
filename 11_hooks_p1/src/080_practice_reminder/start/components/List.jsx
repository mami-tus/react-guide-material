import { useTodo, useTodoDispatch } from '../context/TodoContext';
import Item from './Item';

const List = () => {
  const todo = useTodo();
  const dispatch = useTodoDispatch();
  const complete = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} complete={complete} key={todo.id} />;
      })}
    </div>
  );
};

export default List;
