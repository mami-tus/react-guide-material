import { useTodo, useTodoDispatch } from '../context/TodoContext';

const Form = ({ createTodo }) => {
  const todo = useTodo();
  const dispatch = useTodoDispatch();

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      editing: false,
    };

    dispatch({ type: 'create', payload: { todo: newTodo } });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type='text'
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;
