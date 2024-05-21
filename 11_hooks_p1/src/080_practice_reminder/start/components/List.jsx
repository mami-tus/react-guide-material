import { useTodos } from '../context/TodoContext';
import Item from './Item';

const List = () => {
  const todos = useTodos();
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default List;
