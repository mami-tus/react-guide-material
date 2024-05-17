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
    case 'update': {
      const { todo } = payload;
      return state.map((_todo) =>
        _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo }
      );
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
      editing: false,
    },
    {
      id: 2,
      content: '卵買う',
      editing: false,
    },
    {
      id: 3,
      content: '郵便出す',
      editing: false,
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
