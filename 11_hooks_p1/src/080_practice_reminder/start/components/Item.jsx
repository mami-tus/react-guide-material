import { useState } from 'react';
import { useTodo, useTodoDispatch } from '../context/TodoContext';

const Item = () => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const todo = useTodo();
  const dispatch = useTodoDispatch();

  const changeContent = (e) => setEditingContent(e.target.value);

  const complete = (id) => {
    dispatch({ type: 'delete', payload: { id } });
  };

  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    dispatch({ type: 'update', payload: { todo: newTodo } });
  };
  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      {todo.editing ? (
        <input type='text' value={editingContent} onChange={changeContent} />
      ) : (
        <span onDoubleClick={toggleEditMode}>{todo.content}</span>
      )}
    </div>
  );
};

export default Item;
