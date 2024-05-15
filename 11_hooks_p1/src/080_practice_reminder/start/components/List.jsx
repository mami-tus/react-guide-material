import { Item } from './Item';

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        return <Item key={todo.id} />;
      })}
    </div>
  );
};

export default List;
