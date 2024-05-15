import { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'delete': {
      const { id } = payload;
      return state.filter((todo) => todo.id !== id);
    }
    case 'create': {
      const { todo } = payload;
      return [...state, todo];
    }
    default:
      throw new Error('action is invalid');
  }
};

const TodoProvider = ({ children }) => {
  const initState = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];

  const [todos, dispatch] = useReducer(reducer, initState);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodo = () => {
  return useContext(TodoContext);
};

const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
};

export { TodoProvider, useTodo, useTodoDispatch };
