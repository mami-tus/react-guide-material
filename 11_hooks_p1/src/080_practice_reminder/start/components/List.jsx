import Item from './Item';

const List = () => {
  return (
    <div>
      {todos.map((todo) => {
        return <Item todo={todo} complete={complete} key={todo.id} />;
      })}
    </div>
  );
};

export default List;
