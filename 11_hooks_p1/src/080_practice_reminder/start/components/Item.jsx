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

  const confirmContent = (e) => {
    // ブラウザのデフォルトの挙動をキャンセル
    // これにより、ページがリロードされるのを防ぐ
    e.preventDefault();
    setEditingContent(todo.content);
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    dispatch({ type: 'update', payload: { todo: newTodo } });
  };

  return (
    <div>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: 'inline' }}>
        {todo.editing ? (
          <input type='text' value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;
