import Form from './components/Form';
import List from './components/List';
import { TodoProvider } from './context/TodoContext';

const Example = () => {
  return (
    <TodoProvider>
      <List />
      <Form />
    </TodoProvider>
  );
};

export default Example;
